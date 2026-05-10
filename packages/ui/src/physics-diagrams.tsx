import * as React from "react";

import { cn } from "@repo/ui/lib/utils";

type DiagramFrameProps = Omit<React.ComponentProps<"figure">, "title"> & {
  caption?: React.ReactNode;
  title?: React.ReactNode;
};

type Point = {
  label?: string;
  x: number;
  y: number;
};

type CartesianCurve = {
  color?: string;
  dashed?: boolean;
  label?: string;
  points: Point[];
  smooth?: boolean;
};

type CartesianVector = {
  color?: string;
  from?: Point;
  label?: string;
  to: Point;
};

type AxisRange = {
  label?: string;
  max: number;
  min: number;
  step?: number;
  ticks?: AxisTick[];
};

type AxisTick = {
  label?: string;
  value: number;
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

type ForceVector = {
  angle: number;
  color?: string;
  dashed?: boolean;
  label: string;
  length?: number;
};

type BeamSupport = {
  label?: string;
  type?: "fixed" | "pin" | "roller";
  x: number;
};

type BeamLoad = {
  angle?: number;
  color?: string;
  label?: string;
  length?: number;
  x: number;
};

type BeamTorque = {
  color?: string;
  direction: "clockwise" | "counterclockwise";
  label?: string;
  x: number;
};

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

const SVG_TEXT_CLASS = "fill-muted-foreground text-[7px] font-medium";
const SVG_LABEL_CLASS = "fill-foreground text-[7px] font-medium";
const SVG_MONO_CLASS = "fill-muted-foreground font-mono text-[6px]";

type SvgLabelRun = {
  script?: "sub" | "sup";
  text: string;
};

function colorFor(index: number) {
  return CHART_COLORS[index % CHART_COLORS.length];
}

function formatTick(value: number) {
  if (Math.abs(value) < 1e-9) {
    return "0";
  }

  if (Number.isInteger(value)) {
    return String(value);
  }

  return value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function normalizeSvgLabel(value: string) {
  return value
    .replace(/\\vec\{([^}]+)\}/g, "$1")
    .replace(/\\vec\s*([A-Za-z])/g, "$1")
    .replace(/\\hat\{\\?([^}]+)\}/g, "$1-hat")
    .replace(/\\hat\s*([A-Za-z])/g, "$1-hat")
    .replace(/\\mathrm\{([^}]+)\}/g, "$1")
    .replace(/\\text\{([^}]+)\}/g, "$1")
    .replace(/\\Delta/g, "\u0394")
    .replace(/\\theta/g, "\u03b8")
    .replace(/\\alpha/g, "\u03b1")
    .replace(/\\omega/g, "\u03c9")
    .replace(/\\tau/g, "\u03c4")
    .replace(/\\pi/g, "\u03c0")
    .replace(/\\sum/g, "\u03a3")
    .replace(/\\perp/g, "\u22a5")
    .replace(/\\sin/g, "sin")
    .replace(/\\cos/g, "cos")
    .replace(/\\_/g, "_")
    .replace(/\s+/g, " ")
    .trim();
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
    value: match?.[0] ?? text[startIndex],
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
}: Omit<React.ComponentProps<"text">, "children"> & {
  children: string;
}) {
  return (
    <text
      className={className}
      paintOrder="stroke"
      stroke="var(--background)"
      strokeLinejoin="round"
      strokeWidth="3"
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

function rangeTicks({ min, max, step, ticks }: AxisRange) {
  if (ticks?.length) {
    return ticks;
  }

  if (max <= min) {
    return [{ value: min }];
  }

  const resolvedStep = step ?? (max - min) / 4;

  if (resolvedStep <= 0) {
    return [{ value: min }, { value: max }];
  }

  const resolvedTicks: AxisTick[] = [];
  const start = Math.ceil(min / resolvedStep) * resolvedStep;

  for (
    let value = start;
    value <= max + resolvedStep / 2;
    value += resolvedStep
  ) {
    resolvedTicks.push({ value: Number(value.toFixed(8)) });
  }

  return resolvedTicks;
}

function tickLabel(tick: AxisTick) {
  return tick.label ?? formatTick(tick.value);
}

function cartesianCurvePath(
  points: Point[],
  toX: (x: number) => number,
  toY: (y: number) => number,
  smooth = false,
) {
  if (points.length === 0) {
    return "";
  }

  if (!smooth || points.length < 3) {
    return points
      .map((point, pointIndex) => {
        const command = pointIndex === 0 ? "M" : "L";

        return `${command} ${toX(point.x)} ${toY(point.y)}`;
      })
      .join(" ");
  }

  const path = [`M ${toX(points[0].x)} ${toY(points[0].y)}`];

  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[Math.max(0, index - 1)];
    const current = points[index];
    const next = points[index + 1];
    const afterNext = points[Math.min(points.length - 1, index + 2)];
    const tension = 0.18;
    const control1 = {
      x: toX(current.x) + (toX(next.x) - toX(previous.x)) * tension,
      y: toY(current.y) + (toY(next.y) - toY(previous.y)) * tension,
    };
    const control2 = {
      x: toX(next.x) - (toX(afterNext.x) - toX(current.x)) * tension,
      y: toY(next.y) - (toY(afterNext.y) - toY(current.y)) * tension,
    };

    path.push(
      `C ${control1.x} ${control1.y} ${control2.x} ${control2.y} ${toX(
        next.x,
      )} ${toY(next.y)}`,
    );
  }

  return path.join(" ");
}

function polarToPoint(
  centerX: number,
  centerY: number,
  radius: number,
  angle: number,
) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: centerX + radius * Math.cos(radians),
    y: centerY - radius * Math.sin(radians),
  };
}

function interpolatedPolarPoints(points: PolarCurve["points"]) {
  return points.flatMap((point, index) => {
    const next = points[index + 1];

    if (!next) {
      return [point];
    }

    const steps = Math.max(
      2,
      Math.ceil(Math.abs(next.angle - point.angle) / 4),
    );

    return Array.from({ length: steps }, (_, stepIndex) => {
      const progress = stepIndex / steps;

      return {
        angle: point.angle + (next.angle - point.angle) * progress,
        radius: point.radius + (next.radius - point.radius) * progress,
      };
    });
  });
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
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
    x: clamp(
      x + (nearRight ? -6 : 6),
      padding.left + 4,
      width - padding.right - 4,
    ),
    y: clamp(
      y + (nearTop ? 10 : nearBottom ? -8 : -6),
      padding.top + 8,
      height - padding.bottom - 4,
    ),
  } as const;
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
  const lineEnd = {
    x: end.x - ux * headLength,
    y: end.y - uy * headLength,
  };
  const left = {
    x: lineEnd.x - uy * headWidth,
    y: lineEnd.y + ux * headWidth,
  };
  const right = {
    x: lineEnd.x + uy * headWidth,
    y: lineEnd.y - ux * headWidth,
  };

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
      <polygon
        fill={color}
        points={`${end.x},${end.y} ${left.x},${left.y} ${right.x},${right.y}`}
      />
    </g>
  );
}

function PhysicsDiagramFrame({
  caption,
  children,
  className,
  style,
  title: _title,
  ...props
}: DiagramFrameProps) {
  return (
    <figure
      data-slot="physics-diagram"
      className={cn("my-4 text-foreground", className)}
      style={style}
      {...props}
    >
      <div className="overflow-visible">{children}</div>
      {caption ? (
        <figcaption className="mt-1.5 text-[11px] leading-4 text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function CartesianPhysicsGraph({
  caption,
  className,
  curves = [],
  height = 240,
  points = [],
  style,
  title,
  vectors = [],
  width = 440,
  xRange,
  yRange,
}: DiagramFrameProps & {
  curves?: CartesianCurve[];
  height?: number;
  points?: Point[];
  vectors?: CartesianVector[];
  width?: number;
  xRange: AxisRange;
  yRange: AxisRange;
}) {
  const padding = { bottom: 24, left: 30, right: 20, top: 16 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const xTicks = rangeTicks(xRange);
  const yTicks = rangeTicks(yRange);
  const toX = (x: number) =>
    padding.left + ((x - xRange.min) / (xRange.max - xRange.min)) * plotWidth;
  const toY = (y: number) =>
    padding.top +
    plotHeight -
    ((y - yRange.min) / (yRange.max - yRange.min)) * plotHeight;
  const zeroX = xRange.min <= 0 && xRange.max >= 0 ? toX(0) : padding.left;
  const zeroY =
    yRange.min <= 0 && yRange.max >= 0 ? toY(0) : padding.top + plotHeight;

  return (
    <PhysicsDiagramFrame
      caption={caption}
      className={className}
      style={{ maxWidth: width, ...style }}
      title={title}
    >
      <svg
        aria-label={
          typeof title === "string" ? title : "Cartesian physics graph"
        }
        className="h-auto w-full"
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
            <SvgLabel
              className={SVG_MONO_CLASS}
              textAnchor="middle"
              x={toX(tick.value)}
              y={height - 10}
            >
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
            <SvgLabel
              className={SVG_MONO_CLASS}
              textAnchor="end"
              x={padding.left - 7}
              y={toY(tick.value) + 3}
            >
              {tickLabel(tick)}
            </SvgLabel>
          </g>
        ))}
        <Arrow
          color="var(--muted-foreground)"
          end={{ x: padding.left + plotWidth + 4, y: zeroY }}
          start={{ x: padding.left, y: zeroY }}
          strokeWidth={1.5}
        />
        <Arrow
          color="var(--muted-foreground)"
          end={{ x: zeroX, y: padding.top - 4 }}
          start={{ x: zeroX, y: padding.top + plotHeight }}
          strokeWidth={1.5}
        />
        {xRange.label ? (
          <SvgLabel
            className={SVG_TEXT_CLASS}
            textAnchor="end"
            x={width - padding.right}
            y={clamp(zeroY - 7, padding.top + 8, height - padding.bottom - 4)}
          >
            {xRange.label}
          </SvgLabel>
        ) : null}
        {yRange.label ? (
          <SvgLabel
            className={SVG_TEXT_CLASS}
            textAnchor="start"
            x={zeroX + 8}
            y={padding.top - 4}
          >
            {yRange.label}
          </SvgLabel>
        ) : null}
        {curves.map((curve, index) => {
          const path = cartesianCurvePath(curve.points, toX, toY, curve.smooth);
          const last = curve.points[curve.points.length - 1];
          const label = last
            ? cartesianLabelPosition({
                height,
                padding,
                width,
                x: toX(last.x),
                y: toY(last.y),
              })
            : null;

          return (
            <g key={curve.label ?? index}>
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
              {curve.label && last ? (
                <SvgLabel
                  className={SVG_LABEL_CLASS}
                  textAnchor={label?.textAnchor}
                  x={label?.x}
                  y={label?.y}
                >
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
          const label = cartesianLabelPosition({
            height,
            padding,
            width,
            x: end.x,
            y: end.y,
          });

          return (
            <g key={vector.label ?? index}>
              <Arrow
                color={vector.color ?? colorFor(index)}
                end={end}
                start={start}
              />
              {vector.label ? (
                <SvgLabel
                  className={SVG_LABEL_CLASS}
                  textAnchor={label.textAnchor}
                  x={label.x}
                  y={label.y}
                >
                  {vector.label}
                </SvgLabel>
              ) : null}
            </g>
          );
        })}
        {points.map((point, index) =>
          (() => {
            const coordinate = { x: toX(point.x), y: toY(point.y) };
            const label = cartesianLabelPosition({
              height,
              padding,
              width,
              x: coordinate.x,
              y: coordinate.y,
            });

            return (
              <g key={point.label ?? index}>
                <circle
                  cx={coordinate.x}
                  cy={coordinate.y}
                  fill={colorFor(index + curves.length)}
                  r="2.4"
                />
                {point.label ? (
                  <SvgLabel
                    className={SVG_LABEL_CLASS}
                    textAnchor={label.textAnchor}
                    x={label.x}
                    y={label.y}
                  >
                    {point.label}
                  </SvgLabel>
                ) : null}
              </g>
            );
          })(),
        )}
      </svg>
    </PhysicsDiagramFrame>
  );
}

function PolarPhysicsGraph({
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
  const resolvedRings = rings ?? [
    maxRadius / 4,
    maxRadius / 2,
    (3 * maxRadius) / 4,
    maxRadius,
  ];
  const scale = (value: number) => (value / maxRadius) * radius;

  return (
    <PhysicsDiagramFrame
      caption={caption}
      className={className}
      style={{ maxWidth: size, ...style }}
      title={title}
    >
      <svg
        aria-label={typeof title === "string" ? title : "Polar physics graph"}
        className="h-auto w-full"
        overflow="visible"
        role="img"
        viewBox={`0 0 ${size} ${size}`}
      >
        <rect fill="transparent" height={size} width={size} />
        {resolvedRings.map((ring) => (
          <g key={ring}>
            <circle
              className="stroke-border/70"
              cx={center}
              cy={center}
              fill="none"
              r={scale(ring)}
              strokeWidth="1"
            />
            <text
              className={SVG_MONO_CLASS}
              textAnchor="start"
              x={center + scale(ring) + 4}
              y={center - 3}
            >
              {formatTick(ring)}
            </text>
          </g>
        ))}
        {spokes.map((angle) => {
          const end = polarToPoint(center, center, radius, angle);
          const label = polarToPoint(center, center, radius + 14, angle);

          return (
            <g key={angle}>
              <line
                className="stroke-border/60"
                strokeWidth="1"
                x1={center}
                x2={end.x}
                y1={center}
                y2={end.y}
              />
              {angle % 90 === 0 ? (
                <text
                  className={SVG_MONO_CLASS}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  x={label.x}
                  y={label.y}
                >
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
              const coordinate = polarToPoint(
                center,
                center,
                scale(point.radius),
                point.angle,
              );
              const command = pointIndex === 0 ? "M" : "L";

              return `${command} ${coordinate.x} ${coordinate.y}`;
            })
            .join(" ");

          return (
            <path
              d={path}
              fill="none"
              key={index}
              stroke={curve.color ?? colorFor(index)}
              strokeDasharray={curve.dashed ? "6 5" : undefined}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
        {vectors.map((vector, index) => {
          const end = polarToPoint(
            center,
            center,
            scale(vector.radius),
            vector.angle,
          );
          const start =
            vector.fromRadius !== undefined && vector.fromAngle !== undefined
              ? polarToPoint(
                  center,
                  center,
                  scale(vector.fromRadius),
                  vector.fromAngle,
                )
              : { x: center, y: center };
          const label = polarToPoint(
            center,
            center,
            scale(vector.radius) + 14,
            vector.angle,
          );
          const labelX = clamp(label.x, 12, size - 12);
          const labelY = clamp(label.y, 12, size - 12);

          return (
            <g key={vector.label ?? index}>
              <Arrow
                color={vector.color ?? colorFor(index)}
                end={end}
                start={start}
              />
              {vector.label ? (
                <SvgLabel
                  className={SVG_LABEL_CLASS}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  x={labelX}
                  y={labelY}
                >
                  {vector.label}
                </SvgLabel>
              ) : null}
            </g>
          );
        })}
      </svg>
    </PhysicsDiagramFrame>
  );
}

function FreeBodyDiagram({
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
  forces: ForceVector[];
  height?: number;
  inclineAngle?: number;
  surface?: "horizontal" | "incline" | "none";
  width?: number;
}) {
  const center = { x: width / 2, y: height / 2 };
  const bodySize = 36;

  return (
    <PhysicsDiagramFrame
      caption={caption}
      className={className}
      style={{ maxWidth: width, ...style }}
      title={title}
    >
      <svg
        aria-label={typeof title === "string" ? title : "Free body diagram"}
        className="h-auto w-full"
        overflow="visible"
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <rect fill="transparent" height={height} width={width} />
        {surface === "horizontal" ? (
          <line
            className="stroke-border"
            strokeWidth="2"
            x1="30"
            x2={width - 30}
            y1={center.y + bodySize / 2 + 14}
            y2={center.y + bodySize / 2 + 14}
          />
        ) : null}
        {surface === "incline" ? (
          <g
            transform={`rotate(${-inclineAngle} ${center.x} ${center.y + 42})`}
          >
            <line
              className="stroke-border"
              strokeWidth="2"
              x1="30"
              x2={width - 30}
              y1={center.y + bodySize / 2 + 14}
              y2={center.y + bodySize / 2 + 14}
            />
          </g>
        ) : null}
        {bodyShape === "circle" ? (
          <circle
            className="fill-muted stroke-border"
            cx={center.x}
            cy={center.y}
            r={bodySize / 2}
            strokeWidth="2"
          />
        ) : bodyShape === "point" ? (
          <circle
            className="fill-foreground"
            cx={center.x}
            cy={center.y}
            r="4"
          />
        ) : (
          <rect
            className="fill-muted stroke-border"
            height={bodySize}
            rx="6"
            strokeWidth="2"
            width={bodySize}
            x={center.x - bodySize / 2}
            y={center.y - bodySize / 2}
          />
        )}
        {bodyLabel ? (
          <SvgLabel
            className={SVG_LABEL_CLASS}
            dominantBaseline="middle"
            textAnchor="middle"
            x={center.x}
            y={center.y + 3}
          >
            {bodyLabel}
          </SvgLabel>
        ) : null}
        {forces.map((force, index) => {
          const length = force.length ?? 48;
          const end = polarToPoint(center.x, center.y, length, force.angle);
          const label = polarToPoint(
            center.x,
            center.y,
            length + 12,
            force.angle,
          );
          const labelX = clamp(label.x, 12, width - 12);
          const labelY = clamp(label.y, 12, height - 12);

          return (
            <g key={`${force.label}-${index}`}>
              <Arrow
                color={force.color ?? colorFor(index)}
                dashed={force.dashed}
                end={end}
                start={center}
              />
              <SvgLabel
                className={SVG_LABEL_CLASS}
                dominantBaseline="middle"
                textAnchor="middle"
                x={labelX}
                y={labelY}
              >
                {force.label}
              </SvgLabel>
            </g>
          );
        })}
      </svg>
    </PhysicsDiagramFrame>
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
  loads?: BeamLoad[];
  supports?: BeamSupport[];
  torques?: BeamTorque[];
}) {
  const width = 480;
  const height = 230;
  const beam = { left: 60, right: 420, y: 116 };
  const toX = (x: number) =>
    beam.left + (x / beamLength) * (beam.right - beam.left);

  return (
    <PhysicsDiagramFrame
      caption={caption}
      className={className}
      style={{ maxWidth: width, ...style }}
      title={title}
    >
      <svg
        aria-label={typeof title === "string" ? title : "Rigid body diagram"}
        className="h-auto w-full"
        overflow="visible"
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <rect fill="transparent" height={height} width={width} />
        <rect
          className="fill-muted stroke-border"
          height="12"
          rx="3"
          strokeWidth="2"
          width={beam.right - beam.left}
          x={beam.left}
          y={beam.y - 6}
        />
        {supports.map((support) => {
          const x = toX(support.x);

          return (
            <g key={`${support.type ?? "pin"}-${support.x}`}>
              {support.type === "fixed" ? (
                <rect
                  className="fill-muted stroke-border"
                  height="54"
                  width="10"
                  x={x - 5}
                  y={beam.y - 27}
                />
              ) : (
                <>
                  <polygon
                    className="fill-muted stroke-border"
                    points={`${x},${beam.y + 8} ${x - 16},${beam.y + 38} ${x + 16},${beam.y + 38}`}
                    strokeWidth="2"
                  />
                  {support.type === "roller" ? (
                    <>
                      <circle
                        className="fill-background stroke-border"
                        cx={x - 8}
                        cy={beam.y + 45}
                        r="4"
                      />
                      <circle
                        className="fill-background stroke-border"
                        cx={x + 8}
                        cy={beam.y + 45}
                        r="4"
                      />
                    </>
                  ) : null}
                </>
              )}
              {support.label ? (
                <SvgLabel
                  className={SVG_TEXT_CLASS}
                  textAnchor="middle"
                  x={x}
                  y={beam.y + 62}
                >
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
          const end = polarToPoint(x, beam.y, length, angle);
          const label = polarToPoint(x, beam.y, length + 14, angle);
          const labelX = clamp(label.x, 12, width - 12);
          const labelY = clamp(label.y, 12, height - 12);

          return (
            <g key={`${load.label ?? "load"}-${index}`}>
              <Arrow
                color={load.color ?? colorFor(index)}
                end={end}
                start={{ x, y: beam.y }}
              />
              {load.label ? (
                <SvgLabel
                  className={SVG_LABEL_CLASS}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  x={labelX}
                  y={labelY}
                >
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
          const largeArc = 1;
          const sweep = clockwise ? 1 : 0;
          const start = polarToPoint(x, beam.y, 28, startAngle);
          const end = polarToPoint(x, beam.y, 28, endAngle);
          const color = torque.color ?? colorFor(index + loads.length);

          return (
            <g key={`${torque.direction}-${torque.x}`}>
              <path
                d={`M ${start.x} ${start.y} A 28 28 0 ${largeArc} ${sweep} ${end.x} ${end.y}`}
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeWidth="2"
              />
              <Arrow
                color={color}
                end={end}
                start={polarToPoint(x, beam.y, 28, clockwise ? -88 : 268)}
                strokeWidth={2}
              />
              {torque.label ? (
                <SvgLabel
                  className={SVG_LABEL_CLASS}
                  textAnchor="middle"
                  x={x}
                  y={beam.y - 38}
                >
                  {torque.label}
                </SvgLabel>
              ) : null}
            </g>
          );
        })}
      </svg>
    </PhysicsDiagramFrame>
  );
}

function StressStrainDiagram({
  caption,
  className,
  elasticEnd = { strain: 0.002, stress: 250 },
  fracturePoint,
  plasticPoint = { strain: 0.01, stress: 330 },
  title,
  ultimatePoint = { strain: 0.018, stress: 380 },
}: DiagramFrameProps & {
  elasticEnd?: { strain: number; stress: number };
  fracturePoint?: { strain: number; stress: number };
  plasticPoint?: { strain: number; stress: number };
  ultimatePoint?: { strain: number; stress: number };
}) {
  const points = [
    { label: "elastic", x: 0, y: 0 },
    { label: "yield", x: elasticEnd.strain, y: elasticEnd.stress },
    { label: "plastic", x: plasticPoint.strain, y: plasticPoint.stress },
    { label: "ultimate", x: ultimatePoint.strain, y: ultimatePoint.stress },
    ...(fracturePoint
      ? [
          {
            label: "fracture",
            x: fracturePoint.strain,
            y: fracturePoint.stress,
          },
        ]
      : []),
  ];
  const maxStrain = Math.max(...points.map((point) => point.x)) * 1.1;
  const maxStress = Math.max(...points.map((point) => point.y)) * 1.15;

  return (
    <CartesianPhysicsGraph
      caption={caption}
      className={className}
      curves={[
        {
          color: "var(--chart-2)",
          label: "stress",
          points,
        },
      ]}
      points={points.slice(1)}
      title={title ?? "Stress-strain"}
      xRange={{
        label: "strain",
        max: maxStrain,
        min: 0,
        step: maxStrain / 4,
      }}
      yRange={{
        label: "stress",
        max: maxStress,
        min: 0,
        step: maxStress / 4,
      }}
    />
  );
}

export {
  CartesianPhysicsGraph,
  FreeBodyDiagram,
  PhysicsDiagramFrame,
  PolarPhysicsGraph,
  RigidBodyDiagram,
  StressStrainDiagram,
};

export type {
  AxisRange,
  AxisTick,
  BeamLoad,
  BeamSupport,
  BeamTorque,
  CartesianCurve,
  CartesianVector,
  ForceVector,
  Point,
  PolarCurve,
  PolarVector,
};
