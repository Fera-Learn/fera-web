import * as React from "react";

import { cn } from "@repo/ui/lib/utils";

import {
  cartesianCurvePath,
  clamp,
  clippedCurvePoints,
  createLinearScale,
  formatTick,
  normalizeSvgLabel,
  polarToCartesian,
  rangeTicks,
  regionPath,
  sampleSmoothCurvePoints,
  type Annotation,
  type AxisRange,
  type AxisTick,
  type Curve2D,
  type Point2D,
  type Region2D,
  type Vector2D,
} from "./diagrams-core";

type DiagramFrameProps = Omit<React.ComponentProps<"figure">, "title"> & {
  caption?: React.ReactNode;
  title?: React.ReactNode;
};

type CartesianDiagramProps = DiagramFrameProps & {
  annotations?: Annotation[];
  curves?: Curve2D[];
  height?: number;
  points?: Point2D[];
  regions?: Region2D[];
  selectedId?: string;
  showTooltip?: boolean;
  vectors?: Vector2D[];
  width?: number;
  xRange: AxisRange;
  yRange: AxisRange;
};

type PolarVector = {
  angle: number;
  color?: string;
  fromAngle?: number;
  fromRadius?: number;
  label?: string;
  radius: number;
};

type PolarCurve = {
  color?: string;
  dashed?: boolean;
  points: Array<{
    angle: number;
    radius: number;
  }>;
};

type DiagramVector = {
  angle: number;
  color?: string;
  dashed?: boolean;
  label: string;
  length?: number;
};

type RigidSupport = {
  label?: string;
  type?: "fixed" | "pin" | "roller";
  x: number;
};

type RigidLoad = {
  angle?: number;
  color?: string;
  label?: string;
  length?: number;
  x: number;
};

type RigidMoment = {
  color?: string;
  direction: "clockwise" | "counterclockwise";
  label?: string;
  x: number;
};

type ComplexPoint = {
  color?: string;
  id?: string;
  imaginary: number;
  label?: string;
  real: number;
};

type ArgandDiagramProps = DiagramFrameProps & {
  argumentArcs?: Array<{ angle: number; label?: string; radius?: number }>;
  modulusRings?: number[];
  points?: ComplexPoint[];
  vectors?: Array<{
    color?: string;
    from?: ComplexPoint;
    label?: string;
    to: ComplexPoint;
  }>;
  xRange?: AxisRange;
  yRange?: AxisRange;
};

type CurveDiagramProps = DiagramFrameProps & {
  labels?: Array<{ label: string; x: number; y: number }>;
  path: Point2D[];
  tiltAngle?: number;
  vectors?: Vector2D[];
};

type CollisionDiagramProps = DiagramFrameProps & {
  stages: Array<{
    id: string;
    label: string;
    objects: Array<{
      color?: string;
      id: string;
      label?: string;
      position: Point2D;
      radius?: number;
      vector?: Vector2D;
    }>;
  }>;
};

type VectorFieldDiagramProps = DiagramFrameProps & {
  field: Array<{ from: Point2D; magnitude?: number; to: Point2D }>;
  regions?: Region2D[];
  xRange: AxisRange;
  yRange: AxisRange;
};

type StateDiagramProps = DiagramFrameProps & {
  curve?: Curve2D;
  levels?: Array<{ color?: string; id?: string; label?: string; value: number }>;
  transitions?: Array<{
    color?: string;
    from: number;
    label?: string;
    to: number;
    x: number;
  }>;
  xRange: AxisRange;
  yRange: AxisRange;
};

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

const SVG_TEXT_CLASS = "fill-muted-foreground text-[12px] font-medium";
const SVG_LABEL_CLASS = "fill-foreground text-[12px] font-semibold";
const SVG_MONO_CLASS = "fill-muted-foreground font-mono text-[11px]";

type SvgLabelRun = {
  script?: "sub" | "sup";
  text: string;
};

function colorFor(index: number) {
  return CHART_COLORS[index % CHART_COLORS.length];
}

function tickLabel(tick: AxisTick) {
  return tick.label ?? formatTick(tick.value);
}

function takeScript(text: string, startIndex: number) {
  if (text[startIndex] === "{") {
    const endIndex = text.indexOf("}", startIndex + 1);

    if (endIndex !== -1) {
      return {
        nextIndex: endIndex + 1,
        value: text.slice(startIndex + 1, endIndex),
      };
    }
  }

  const match = text.slice(startIndex).match(/^-?\d+|^[A-Za-z]+|^./);

  return {
    nextIndex: startIndex + (match?.[0].length ?? 1),
    value: match?.[0] ?? text[startIndex] ?? "",
  };
}

function svgLabelRuns(value: string) {
  const text = normalizeSvgLabel(value);
  const runs: SvgLabelRun[] = [];
  let buffer = "";

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];

    if (character === "_" || character === "^") {
      if (buffer) {
        runs.push({ text: buffer.replace(/[{}\\]/g, "") });
        buffer = "";
      }

      const script = takeScript(text, index + 1);
      runs.push({
        script: character === "_" ? "sub" : "sup",
        text: script.value.replace(/[{}\\]/g, ""),
      });
      index = script.nextIndex - 1;
    } else {
      buffer += character;
    }
  }

  if (buffer) {
    runs.push({ text: buffer.replace(/[{}\\]/g, "") });
  }

  return runs;
}

function SvgLabel({
  children,
  className,
  ...props
}: Omit<React.ComponentProps<"text">, "children"> & { children: string }) {
  return (
    <text
      className={className}
      {...props}
    >
      {svgLabelRuns(children).map((run, index) => (
        <tspan
          baselineShift={
            run.script === "sub" ? "sub" : run.script === "sup" ? "super" : "0"
          }
          fontSize={run.script ? "70%" : undefined}
          key={`${run.text}-${index}`}
        >
          {run.text}
        </tspan>
      ))}
    </text>
  );
}

function cartesianLabelPosition({
  height,
  padding,
  width,
  x,
  y,
}: {
  height: number;
  padding: { bottom: number; left: number; right: number; top: number };
  width: number;
  x: number;
  y: number;
}) {
  const nearRight = x > width - padding.right - 56;
  const nearTop = y < padding.top + 18;
  const nearBottom = y > height - padding.bottom - 12;

  return {
    textAnchor: nearRight ? "end" : "start",
    x: clamp(x + (nearRight ? -6 : 6), padding.left + 4, width - padding.right - 4),
    y: clamp(
      y + (nearTop ? 10 : nearBottom ? -8 : -6),
      padding.top + 8,
      height - padding.bottom - 4,
    ),
  } as const;
}

function regionLabelPosition({
  baseline,
  height,
  padding,
  points,
  toX,
  toY,
  width,
}: {
  baseline: number;
  height: number;
  padding: { bottom: number; left: number; right: number; top: number };
  points: Point2D[];
  toX: (x: number) => number;
  toY: (y: number) => number;
  width: number;
}) {
  const midpoint = points[Math.floor((points.length - 1) / 2)];

  if (!midpoint) {
    return null;
  }

  return {
    x: clamp(toX(midpoint.x), padding.left + 10, width - padding.right - 10),
    y: clamp(toY(baseline + (midpoint.y - baseline) * 0.5), padding.top + 12, height - padding.bottom - 8),
  };
}

function Arrow({
  className,
  color = "var(--foreground)",
  dashed = false,
  end,
  start,
  strokeWidth = 1.5,
}: {
  className?: string;
  color?: string;
  dashed?: boolean;
  end: { x: number; y: number };
  start: { x: number; y: number };
  strokeWidth?: number;
}) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.hypot(dx, dy);

  if (length === 0) {
    return null;
  }

  const ux = dx / length;
  const uy = dy / length;
  const headLength = 6;
  const headWidth = 3.5;
  const lineEnd = { x: end.x - ux * headLength, y: end.y - uy * headLength };
  const left = { x: lineEnd.x - uy * headWidth, y: lineEnd.y + ux * headWidth };
  const right = { x: lineEnd.x + uy * headWidth, y: lineEnd.y - ux * headWidth };

  return (
    <g className={className}>
      <line
        stroke={color}
        strokeDasharray={dashed ? "5 4" : undefined}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
        x1={start.x}
        x2={lineEnd.x}
        y1={start.y}
        y2={lineEnd.y}
      />
      <polygon fill={color} points={`${end.x},${end.y} ${left.x},${left.y} ${right.x},${right.y}`} />
    </g>
  );
}

function DiagramFrame({
  caption,
  children,
  className,
  style,
  title,
  ...props
}: DiagramFrameProps) {
  return (
    <figure
      aria-label={typeof title === "string" ? title : undefined}
      data-slot="diagram"
      className={cn("my-4 text-foreground", className)}
      style={style}
      {...props}
    >
      <div className="overflow-visible">{children}</div>
      {caption ? (
        <figcaption className="mt-1.5 text-[13px] leading-4 text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function resolvedRegion(region: Region2D, curves: Curve2D[]) {
  if (region.points?.length) {
    return { points: clippedCurvePoints(region.points, region.fromX, region.toX), smooth: false };
  }

  if (!region.curve) {
    return { points: [], smooth: false };
  }

  const curve = curves.find(
    (candidate) => candidate.id === region.curve || candidate.label === region.curve,
  );

  if (!curve) {
    return { points: [], smooth: false };
  }

  const shouldSampleSmoothRegion = curve.smooth && (region.fromX !== undefined || region.toX !== undefined);
  const sourcePoints = shouldSampleSmoothRegion ? sampleSmoothCurvePoints(curve.points) : curve.points;
  const indexedPoints = sourcePoints
    .map((point, index) => ({ index, point }))
    .filter(({ point }) => {
      const afterStart = region.fromX === undefined || point.x >= region.fromX;
      const beforeEnd = region.toX === undefined || point.x <= region.toX;

      return afterStart && beforeEnd;
    });

  if (indexedPoints.length === 0) {
    return {
      points: clippedCurvePoints(sourcePoints, region.fromX, region.toX),
      smooth: false,
    };
  }

  const points = clippedCurvePoints(sourcePoints, region.fromX, region.toX);
  const startIndex = indexedPoints[0]!.index;
  const endIndex = indexedPoints[indexedPoints.length - 1]!.index;
  const isContiguousSegment = indexedPoints.every(
    ({ index }, pointIndex) => index === startIndex + pointIndex,
  );
  const usesOriginalPoints =
    points.length === indexedPoints.length &&
    points.every((point, pointIndex) => point === indexedPoints[pointIndex]!.point);

  return {
    points,
    segment: !shouldSampleSmoothRegion && isContiguousSegment && usesOriginalPoints
      ? { endIndex, points: sourcePoints, startIndex }
      : undefined,
    smooth: shouldSampleSmoothRegion ? false : (curve.smooth ?? false),
  };
}

function CartesianDiagram({
  annotations = [],
  caption,
  className,
  curves = [],
  height = 340,
  points = [],
  regions = [],
  selectedId,
  showTooltip,
  style,
  title,
  vectors = [],
  width = 440,
  xRange,
  yRange,
}: CartesianDiagramProps) {
  const padding = { bottom: 24, left: 30, right: 20, top: 16 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const xTicks = rangeTicks(xRange);
  const yTicks = rangeTicks(yRange);
  const toX = createLinearScale({
    domain: [xRange.min, xRange.max],
    range: [padding.left, padding.left + plotWidth],
  });
  const toY = createLinearScale({
    domain: [yRange.min, yRange.max],
    range: [padding.top + plotHeight, padding.top],
  });
  const zeroX = xRange.min <= 0 && xRange.max >= 0 ? toX(0) : padding.left;
  const zeroY = yRange.min <= 0 && yRange.max >= 0 ? toY(0) : padding.top + plotHeight;

  return (
    <DiagramFrame
      caption={caption}
      className={className}
      style={{ maxWidth: width, ...style }}
      title={title}
    >
      <svg
        aria-label={typeof title === "string" ? title : "Cartesian diagram"}
        className="h-auto w-full"
        data-selected-id={selectedId}
        data-tooltip={showTooltip ? "enabled" : undefined}
        overflow="visible"
        preserveAspectRatio="xMinYMid meet"
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <rect fill="transparent" height={height} width={width} />
        {xTicks.map((tick) => (
          <g key={`x-${tick.value}`}>
            <line
              className="stroke-border/60"
              strokeWidth="1"
              x1={toX(tick.value)}
              x2={toX(tick.value)}
              y1={padding.top}
              y2={padding.top + plotHeight}
            />
            <SvgLabel className={SVG_MONO_CLASS} textAnchor="middle" x={toX(tick.value)} y={height - 10}>
              {tickLabel(tick)}
            </SvgLabel>
          </g>
        ))}
        {yTicks.map((tick) => (
          <g key={`y-${tick.value}`}>
            <line
              className="stroke-border/60"
              strokeWidth="1"
              x1={padding.left}
              x2={padding.left + plotWidth}
              y1={toY(tick.value)}
              y2={toY(tick.value)}
            />
            <SvgLabel className={SVG_MONO_CLASS} textAnchor="end" x={padding.left - 7} y={toY(tick.value) + 3}>
              {tickLabel(tick)}
            </SvgLabel>
          </g>
        ))}
        <Arrow color="var(--muted-foreground)" end={{ x: padding.left + plotWidth + 4, y: zeroY }} start={{ x: padding.left, y: zeroY }} strokeWidth={1.5} />
        <Arrow color="var(--muted-foreground)" end={{ x: zeroX, y: padding.top - 4 }} start={{ x: zeroX, y: padding.top + plotHeight }} strokeWidth={1.5} />
        {xRange.label ? (
          <SvgLabel className={SVG_TEXT_CLASS} textAnchor="end" x={width - padding.right} y={clamp(zeroY - 7, padding.top + 8, height - padding.bottom - 4)}>
            {xRange.label}
          </SvgLabel>
        ) : null}
        {yRange.label ? (
          <SvgLabel className={SVG_TEXT_CLASS} textAnchor="start" x={zeroX + 8} y={padding.top - 4}>
            {yRange.label}
          </SvgLabel>
        ) : null}
        {regions.map((region, index) => {
          const resolved = resolvedRegion(region, curves);
          const baseline = region.baseline ?? 0;
          const path = regionPath(resolved.points, baseline, toX, toY, resolved.smooth, resolved.segment);
          const label = region.label
            ? regionLabelPosition({
                baseline,
                height,
                padding,
                points: resolved.points,
                toX,
                toY,
                width,
              })
            : null;

          return path ? (
            <g key={region.label ?? region.curve ?? index}>
              <path
                d={path}
                fill={region.color ?? colorFor(index)}
                fillOpacity="0.16"
                stroke="none"
              />
              {label && region.label ? (
                <SvgLabel className={SVG_LABEL_CLASS} textAnchor="middle" x={label.x} y={label.y}>
                  {region.label}
                </SvgLabel>
              ) : null}
            </g>
          ) : null;
        })}
        {curves.map((curve, index) => {
          const path = cartesianCurvePath(curve.points, toX, toY, curve.smooth);
          const last = curve.points[curve.points.length - 1];
          const label = last
            ? cartesianLabelPosition({ height, padding, width, x: toX(last.x), y: toY(last.y) })
            : null;

          return (
            <g key={curve.id ?? curve.label ?? index}>
              <path
                d={path}
                fill="none"
                stroke={curve.color ?? colorFor(index)}
                strokeDasharray={curve.dashed ? "6 5" : undefined}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              {curve.label && label ? (
                <SvgLabel className={SVG_LABEL_CLASS} textAnchor={label.textAnchor} x={label.x} y={label.y}>
                  {curve.label}
                </SvgLabel>
              ) : null}
            </g>
          );
        })}
        {vectors.map((vector, index) => {
          const from = vector.from ?? { x: 0, y: 0 };
          const end = { x: toX(vector.to.x), y: toY(vector.to.y) };
          const start = { x: toX(from.x), y: toY(from.y) };
          const label = cartesianLabelPosition({ height, padding, width, x: end.x, y: end.y });

          return (
            <g key={vector.label ?? index}>
              <Arrow color={vector.color ?? colorFor(index)} end={end} start={start} />
              {vector.label ? (
                <SvgLabel className={SVG_LABEL_CLASS} textAnchor={label.textAnchor} x={label.x} y={label.y}>
                  {vector.label}
                </SvgLabel>
              ) : null}
            </g>
          );
        })}
        {points.map((point, index) => {
          const coordinate = { x: toX(point.x), y: toY(point.y) };
          const label = cartesianLabelPosition({ height, padding, width, x: coordinate.x, y: coordinate.y });

          return (
            <g key={point.id ?? point.label ?? index}>
              <circle cx={coordinate.x} cy={coordinate.y} fill={point.color ?? colorFor(index + curves.length)} r="2.4" />
              {point.label ? (
                <SvgLabel className={SVG_LABEL_CLASS} textAnchor={label.textAnchor} x={label.x} y={label.y}>
                  {point.label}
                </SvgLabel>
              ) : null}
            </g>
          );
        })}
        {annotations.map((annotation, index) => {
          const target = { x: toX(annotation.point.x), y: toY(annotation.point.y) };
          const label = annotation.offset
            ? {
                x: clamp(target.x + annotation.offset.x, padding.left + 8, width - padding.right - 8),
                y: clamp(target.y + annotation.offset.y, padding.top + 8, height - padding.bottom - 4),
              }
            : target;

          return (
            <g key={`${annotation.label}-${index}`}>
              {annotation.offset ? (
                <line
                  className="stroke-muted-foreground"
                  opacity="0.55"
                  strokeDasharray="3 3"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  x1={target.x}
                  x2={label.x}
                  y1={target.y}
                  y2={label.y}
                />
              ) : null}
              <SvgLabel
                className={SVG_LABEL_CLASS}
                textAnchor={annotation.align === "center" ? "middle" : (annotation.align ?? "middle")}
                x={label.x}
                y={label.y}
              >
                {annotation.label}
              </SvgLabel>
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}

function AreaDiagram(props: CartesianDiagramProps) {
  return <CartesianDiagram {...props} />;
}

function IntervalAreaDiagram({ intervals, regions = [], ...props }: Omit<CartesianDiagramProps, "curves"> & {
  intervals: Array<{ color?: string; id?: string; label?: string; points: Point2D[] }>;
}) {
  const curves = intervals.map((interval) => ({
    color: interval.color,
    id: interval.id,
    label: interval.label,
    points: interval.points,
  }));
  const intervalRegions = intervals.map((interval) => ({
    baseline: 0,
    color: interval.color,
    curve: interval.id ?? interval.label,
    label: interval.label,
    points: interval.points,
  }));

  return <CartesianDiagram {...props} curves={curves} regions={[...intervalRegions, ...regions]} />;
}

function interpolatedPolarPoints(points: PolarCurve["points"]) {
  return points.flatMap((point, index) => {
    const next = points[index + 1];

    if (!next) {
      return [point];
    }

    const steps = Math.max(2, Math.ceil(Math.abs(next.angle - point.angle) / 4));

    return Array.from({ length: steps }, (_, stepIndex) => {
      const progress = stepIndex / steps;

      return {
        angle: point.angle + (next.angle - point.angle) * progress,
        radius: point.radius + (next.radius - point.radius) * progress,
      };
    });
  });
}

function PolarDiagram({
  caption,
  className,
  curves = [],
  maxRadius,
  rings,
  spokes = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330],
  style,
  title,
  vectors = [],
}: DiagramFrameProps & {
  curves?: PolarCurve[];
  maxRadius: number;
  rings?: number[];
  spokes?: number[];
  vectors?: PolarVector[];
}) {
  const size = 300;
  const center = size / 2;
  const radius = 108;
  const resolvedRings = rings ?? [maxRadius / 4, maxRadius / 2, (3 * maxRadius) / 4, maxRadius];
  const scale = (value: number) => (value / maxRadius) * radius;

  return (
    <DiagramFrame caption={caption} className={className} style={{ maxWidth: size, ...style }} title={title}>
      <svg aria-label={typeof title === "string" ? title : "Polar diagram"} className="h-auto w-full" overflow="visible" role="img" viewBox={`0 0 ${size} ${size}`}>
        <rect fill="transparent" height={size} width={size} />
        {resolvedRings.map((ring) => (
          <g key={ring}>
            <circle className="stroke-border/70" cx={center} cy={center} fill="none" r={scale(ring)} strokeWidth="1" />
            <text className={SVG_MONO_CLASS} textAnchor="start" x={center + scale(ring) + 4} y={center - 3}>
              {formatTick(ring)}
            </text>
          </g>
        ))}
        {spokes.map((angle) => {
          const end = polarToCartesian(center, center, radius, angle);
          const label = polarToCartesian(center, center, radius + 14, angle);

          return (
            <g key={angle}>
              <line className="stroke-border/60" strokeWidth="1" x1={center} x2={end.x} y1={center} y2={end.y} />
              {angle % 90 === 0 ? (
                <text className={SVG_MONO_CLASS} dominantBaseline="middle" textAnchor="middle" x={label.x} y={label.y}>
                  {angle} deg
                </text>
              ) : null}
            </g>
          );
        })}
        <circle className="fill-foreground" cx={center} cy={center} r="2" />
        {curves.map((curve, index) => {
          const path = interpolatedPolarPoints(curve.points)
            .map((point, pointIndex) => {
              const coordinate = polarToCartesian(center, center, scale(point.radius), point.angle);
              const command = pointIndex === 0 ? "M" : "L";

              return `${command} ${coordinate.x} ${coordinate.y}`;
            })
            .join(" ");

          return <path d={path} fill="none" key={index} stroke={curve.color ?? colorFor(index)} strokeDasharray={curve.dashed ? "6 5" : undefined} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" />;
        })}
        {vectors.map((vector, index) => {
          const end = polarToCartesian(center, center, scale(vector.radius), vector.angle);
          const start = vector.fromRadius !== undefined && vector.fromAngle !== undefined ? polarToCartesian(center, center, scale(vector.fromRadius), vector.fromAngle) : { x: center, y: center };
          const label = polarToCartesian(center, center, scale(vector.radius) + 14, vector.angle);

          return (
            <g key={vector.label ?? index}>
              <Arrow color={vector.color ?? colorFor(index)} end={end} start={start} />
              {vector.label ? (
                <SvgLabel className={SVG_LABEL_CLASS} dominantBaseline="middle" textAnchor="middle" x={clamp(label.x, 12, size - 12)} y={clamp(label.y, 12, size - 12)}>
                  {vector.label}
                </SvgLabel>
              ) : null}
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}

function ForceDiagram({
  bodyLabel,
  bodyShape = "block",
  caption,
  className,
  forces,
  height = 230,
  inclineAngle = 0,
  style,
  surface = "none",
  title,
  width = 300,
}: DiagramFrameProps & {
  bodyLabel?: string;
  bodyShape?: "block" | "circle" | "point";
  forces: DiagramVector[];
  height?: number;
  inclineAngle?: number;
  surface?: "horizontal" | "incline" | "none";
  width?: number;
}) {
  const center = { x: width / 2, y: height / 2 };
  const bodySize = 36;

  return (
    <DiagramFrame caption={caption} className={className} style={{ maxWidth: width, ...style }} title={title}>
      <svg aria-label={typeof title === "string" ? title : "Force diagram"} className="h-auto w-full" overflow="visible" role="img" viewBox={`0 0 ${width} ${height}`}>
        <rect fill="transparent" height={height} width={width} />
        {surface === "horizontal" ? <line className="stroke-border" strokeWidth="2" x1="30" x2={width - 30} y1={center.y + bodySize / 2 + 14} y2={center.y + bodySize / 2 + 14} /> : null}
        {surface === "incline" ? (
          <g transform={`rotate(${-inclineAngle} ${center.x} ${center.y + 42})`}>
            <line className="stroke-border" strokeWidth="2" x1="30" x2={width - 30} y1={center.y + bodySize / 2 + 14} y2={center.y + bodySize / 2 + 14} />
          </g>
        ) : null}
        {bodyShape === "circle" ? (
          <circle className="fill-muted stroke-border" cx={center.x} cy={center.y} r={bodySize / 2} strokeWidth="2" />
        ) : bodyShape === "point" ? (
          <circle className="fill-foreground" cx={center.x} cy={center.y} r="4" />
        ) : (
          <rect className="fill-muted stroke-border" height={bodySize} rx="6" strokeWidth="2" width={bodySize} x={center.x - bodySize / 2} y={center.y - bodySize / 2} />
        )}
        {bodyLabel ? (
          <SvgLabel className={SVG_LABEL_CLASS} dominantBaseline="middle" textAnchor="middle" x={center.x} y={center.y + 3}>
            {bodyLabel}
          </SvgLabel>
        ) : null}
        {forces.map((force, index) => {
          const length = force.length ?? 48;
          const end = polarToCartesian(center.x, center.y, length, force.angle);
          const label = polarToCartesian(center.x, center.y, length + 12, force.angle);

          return (
            <g key={`${force.label}-${index}`}>
              <Arrow color={force.color ?? colorFor(index)} dashed={force.dashed} end={end} start={center} />
              <SvgLabel className={SVG_LABEL_CLASS} dominantBaseline="middle" textAnchor="middle" x={clamp(label.x, 12, width - 12)} y={clamp(label.y, 12, height - 12)}>
                {force.label}
              </SvgLabel>
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}

function RigidBodyDiagram({
  beamLength = 1,
  caption,
  className,
  loads = [],
  style,
  supports = [],
  title,
  torques = [],
}: DiagramFrameProps & {
  beamLength?: number;
  loads?: RigidLoad[];
  supports?: RigidSupport[];
  torques?: RigidMoment[];
}) {
  const width = 480;
  const height = 230;
  const beam = { left: 60, right: 420, y: 116 };
  const toX = (x: number) => beam.left + (x / beamLength) * (beam.right - beam.left);

  return (
    <DiagramFrame caption={caption} className={className} style={{ maxWidth: width, ...style }} title={title}>
      <svg aria-label={typeof title === "string" ? title : "Rigid body diagram"} className="h-auto w-full" overflow="visible" role="img" viewBox={`0 0 ${width} ${height}`}>
        <rect fill="transparent" height={height} width={width} />
        <rect className="fill-muted stroke-border" height="12" rx="3" strokeWidth="2" width={beam.right - beam.left} x={beam.left} y={beam.y - 6} />
        {supports.map((support) => {
          const x = toX(support.x);

          return (
            <g key={`${support.type ?? "pin"}-${support.x}`}>
              {support.type === "fixed" ? (
                <rect className="fill-muted stroke-border" height="54" width="10" x={x - 5} y={beam.y - 27} />
              ) : (
                <>
                  <polygon className="fill-muted stroke-border" points={`${x},${beam.y + 8} ${x - 16},${beam.y + 38} ${x + 16},${beam.y + 38}`} strokeWidth="2" />
                  {support.type === "roller" ? (
                    <>
                      <circle className="fill-background stroke-border" cx={x - 8} cy={beam.y + 45} r="4" />
                      <circle className="fill-background stroke-border" cx={x + 8} cy={beam.y + 45} r="4" />
                    </>
                  ) : null}
                </>
              )}
              {support.label ? (
                <SvgLabel className={SVG_TEXT_CLASS} textAnchor="middle" x={x} y={beam.y + 62}>
                  {support.label}
                </SvgLabel>
              ) : null}
            </g>
          );
        })}
        {loads.map((load, index) => {
          const x = toX(load.x);
          const angle = load.angle ?? -90;
          const length = load.length ?? 52;
          const end = polarToCartesian(x, beam.y, length, angle);
          const label = polarToCartesian(x, beam.y, length + 14, angle);

          return (
            <g key={`${load.label ?? "load"}-${index}`}>
              <Arrow color={load.color ?? colorFor(index)} end={end} start={{ x, y: beam.y }} />
              {load.label ? (
                <SvgLabel className={SVG_LABEL_CLASS} dominantBaseline="middle" textAnchor="middle" x={clamp(label.x, 12, width - 12)} y={clamp(label.y, 12, height - 12)}>
                  {load.label}
                </SvgLabel>
              ) : null}
            </g>
          );
        })}
        {torques.map((torque, index) => {
          const x = toX(torque.x);
          const clockwise = torque.direction === "clockwise";
          const startAngle = clockwise ? 135 : 45;
          const endAngle = clockwise ? -110 : 290;
          const start = polarToCartesian(x, beam.y, 28, startAngle);
          const end = polarToCartesian(x, beam.y, 28, endAngle);
          const color = torque.color ?? colorFor(index + loads.length);

          return (
            <g key={`${torque.direction}-${torque.x}`}>
              <path d={`M ${start.x} ${start.y} A 28 28 0 1 ${clockwise ? 1 : 0} ${end.x} ${end.y}`} fill="none" stroke={color} strokeLinecap="round" strokeWidth="2" />
              <Arrow color={color} end={end} start={polarToCartesian(x, beam.y, 28, clockwise ? -88 : 268)} strokeWidth={2} />
              {torque.label ? (
                <SvgLabel className={SVG_LABEL_CLASS} textAnchor="middle" x={x} y={beam.y - 38}>
                  {torque.label}
                </SvgLabel>
              ) : null}
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}

function ArgandDiagram({
  argumentArcs = [],
  modulusRings = [],
  points = [],
  vectors = [],
  xRange = { label: "Re", max: 4, min: -4, step: 2 },
  yRange = { label: "Im", max: 4, min: -4, step: 2 },
  ...props
}: ArgandDiagramProps) {
  const vector2D = vectors.map((vector) => ({
    color: vector.color,
    from: vector.from ? { x: vector.from.real, y: vector.from.imaginary } : undefined,
    label: vector.label,
    to: { x: vector.to.real, y: vector.to.imaginary },
  }));
  const point2D = points.map((point) => ({
    color: point.color,
    id: point.id,
    label: point.label,
    x: point.real,
    y: point.imaginary,
  }));
  const annotations = argumentArcs.map((arc) => {
    const radius = arc.radius ?? Math.min(xRange.max - xRange.min, yRange.max - yRange.min) / 5;
    const coordinate = polarToCartesian(0, 0, radius, arc.angle);

    return { label: arc.label ?? `${formatTick(arc.angle)} deg`, point: { x: coordinate.x, y: -coordinate.y } };
  });
  const ringRegions = modulusRings.map((ring) => ({
    color: "var(--muted-foreground)",
    points: Array.from({ length: 73 }, (_, index) => {
      const angle = (index / 72) * 360;
      const coordinate = polarToCartesian(0, 0, ring, angle);

      return { x: coordinate.x, y: -coordinate.y };
    }),
  }));

  return <CartesianDiagram {...props} annotations={annotations} curves={ringRegions.map((region) => ({ color: region.color, dashed: true, points: region.points }))} height={330} points={point2D} vectors={vector2D} width={340} xRange={xRange} yRange={yRange} />;
}

function CurveDiagram({ labels = [], path, tiltAngle, vectors = [], ...props }: CurveDiagramProps) {
  const minX = Math.min(...path.map((point) => point.x), 0);
  const maxX = Math.max(...path.map((point) => point.x), 1);
  const minY = Math.min(...path.map((point) => point.y), 0);
  const maxY = Math.max(...path.map((point) => point.y), 1);
  const annotations = labels.map((label) => ({ label: label.label, point: { x: label.x, y: label.y } }));

  return (
    <CartesianDiagram
      {...props}
      annotations={
        tiltAngle === undefined
          ? annotations
          : [
              ...annotations,
              {
                label: `${formatTick(tiltAngle)} deg tilt`,
                point: path[Math.floor(path.length / 2)] ?? { x: 0, y: 0 },
              },
            ]
      }
      curves={[{ color: "var(--chart-1)", points: path, smooth: true }]}
      vectors={vectors}
      xRange={{ max: maxX + (maxX - minX) * 0.1, min: minX - (maxX - minX) * 0.1 }}
      yRange={{ max: maxY + (maxY - minY) * 0.1, min: minY - (maxY - minY) * 0.1 }}
    />
  );
}

function CollisionDiagram({ caption, className, stages, style, title }: CollisionDiagramProps) {
  const width = Math.max(280, stages.length * 220);
  const height = 220;
  const stageWidth = width / Math.max(stages.length, 1);

  return (
    <DiagramFrame caption={caption} className={className} style={{ maxWidth: width, ...style }} title={title}>
      <svg aria-label={typeof title === "string" ? title : "Collision diagram"} className="h-auto w-full" overflow="visible" role="img" viewBox={`0 0 ${width} ${height}`}>
        <rect fill="transparent" height={height} width={width} />
        {stages.map((stage, stageIndex) => {
          const offsetX = stageIndex * stageWidth;

          return (
            <g key={stage.id}>
              <SvgLabel className={SVG_TEXT_CLASS} textAnchor="middle" x={offsetX + stageWidth / 2} y="18">
                {stage.label}
              </SvgLabel>
              <line className="stroke-border" strokeWidth="1" x1={offsetX + 18} x2={offsetX + stageWidth - 18} y1={height - 38} y2={height - 38} />
              {stage.objects.map((object, objectIndex) => {
                const x = offsetX + stageWidth / 2 + object.position.x * 32;
                const y = height - 38 - object.position.y * 32;
                const radius = object.radius ?? 12;

                return (
                  <g key={object.id}>
                    <circle cx={x} cy={y} fill={object.color ?? colorFor(objectIndex)} r={radius} />
                    {object.label ? (
                      <SvgLabel className={SVG_LABEL_CLASS} textAnchor="middle" x={x} y={y - radius - 6}>
                        {object.label}
                      </SvgLabel>
                    ) : null}
                    {object.vector ? <Arrow color={object.vector.color ?? colorFor(objectIndex)} end={{ x: x + (object.vector.to.x - (object.vector.from?.x ?? 0)) * 28, y: y - (object.vector.to.y - (object.vector.from?.y ?? 0)) * 28 }} start={{ x, y }} /> : null}
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}

function VectorFieldDiagram({ field, regions = [], xRange, yRange, ...props }: VectorFieldDiagramProps) {
  return (
    <CartesianDiagram
      {...props}
      regions={regions}
      vectors={field.map((sample, index) => ({
        color: sample.magnitude === undefined ? colorFor(index) : `color-mix(in srgb, var(--chart-1) ${clamp(sample.magnitude * 100, 20, 100)}%, var(--muted-foreground))`,
        from: sample.from,
        to: sample.to,
      }))}
      xRange={xRange}
      yRange={yRange}
    />
  );
}

function StateDiagram({ curve, levels = [], transitions = [], xRange, yRange, ...props }: StateDiagramProps) {
  return (
    <CartesianDiagram
      {...props}
      annotations={transitions.map((transition) => ({ label: transition.label ?? "", point: { x: transition.x, y: (transition.from + transition.to) / 2 } })).filter((annotation) => annotation.label)}
      curves={[
        ...levels.map((level, index) => ({
          color: level.color ?? colorFor(index),
          id: level.id,
          label: level.label,
          points: [
            { x: xRange.min, y: level.value },
            { x: xRange.max, y: level.value },
          ],
        })),
        ...(curve ? [curve] : []),
      ]}
      vectors={transitions.map((transition) => ({
        color: transition.color,
        from: { x: transition.x, y: transition.from },
        to: { x: transition.x, y: transition.to },
      }))}
      xRange={xRange}
      yRange={yRange}
    />
  );
}

export {
  AreaDiagram,
  ArgandDiagram,
  CartesianDiagram,
  CollisionDiagram,
  CurveDiagram,
  DiagramFrame,
  ForceDiagram,
  IntervalAreaDiagram,
  PolarDiagram,
  RigidBodyDiagram,
  StateDiagram,
  VectorFieldDiagram,
};

export type {
  Annotation,
  AxisRange,
  AxisTick,
  Curve2D,
  Point2D,
  Region2D,
  Vector2D,
};
