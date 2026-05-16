"use client";

import { type ReactNode, useMemo } from "react";
import { GridContext } from "./grid-context";
import { clamp } from "./label-utils";
import type { AxisRange, Padding } from "./types";

export type CartesianGridProps = {
  caption?: ReactNode;
  children?: ReactNode;
  gridLines?: "both" | "none" | "x" | "y";
  height?: number;
  title?: ReactNode;
  width?: number;
  xRange: AxisRange;
  yRange: AxisRange;
};

const DEFAULT_PADDING: Padding = { bottom: 24, left: 30, right: 20, top: 16 };

function formatTick(value: number) {
  if (Math.abs(value) < 1e-9) return "0";
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function rangeTicks({ min, max, step, ticks }: AxisRange) {
  if (ticks?.length) return ticks;
  if (max <= min) return [{ value: min }];
  const resolvedStep = step ?? (max - min) / 4;
  if (resolvedStep <= 0) return [{ value: min }, { value: max }];
  const resolvedTicks: Array<{ value: number }> = [];
  const epsilon = 1e-9;
  const start = Math.ceil((min - epsilon) / resolvedStep) * resolvedStep;
  for (let value = start; value <= max + epsilon; value += resolvedStep) {
    resolvedTicks.push({ value: Math.round(value * 1e8) / 1e8 > max ? max : Math.round(value * 1e8) / 1e8 });
  }
  return resolvedTicks;
}

export function CartesianGrid({
  caption,
  children,
  gridLines = "both",
  height = 340,
  title,
  width = 440,
  xRange,
  yRange,
}: CartesianGridProps) {
  const padding = DEFAULT_PADDING;
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;

  const toX = useMemo(
    () => (value: number) => padding.left + ((value - xRange.min) / (xRange.max - xRange.min)) * plotWidth,
    [xRange.min, xRange.max, padding.left, plotWidth],
  );

  const toY = useMemo(
    () => (value: number) => padding.top + plotHeight - ((value - yRange.min) / (yRange.max - yRange.min)) * plotHeight,
    [yRange.min, yRange.max, padding.top, plotHeight],
  );

  const xTicks = useMemo(() => rangeTicks(xRange), [xRange]);
  const yTicks = useMemo(() => rangeTicks(yRange), [yRange]);

  const zeroX = xRange.min <= 0 && xRange.max >= 0 ? toX(0) : padding.left;
  const zeroY = yRange.min <= 0 && yRange.max >= 0 ? toY(0) : padding.top + plotHeight;

  const showXGrid = gridLines === "both" || gridLines === "x";
  const showYGrid = gridLines === "both" || gridLines === "y";

  return (
    <figure
      aria-label={typeof title === "string" ? title : undefined}
      className="my-4 text-foreground"
      data-slot="diagram"
    >
      <div className="overflow-visible">
        <svg
          aria-label={typeof title === "string" ? title : "Cartesian grid"}
          className="h-auto w-full"
          overflow="visible"
          preserveAspectRatio="xMinYMid meet"
          role="img"
          viewBox={`0 0 ${width} ${height}`}
        >
          <rect fill="transparent" height={height} width={width} />

          {showYGrid && yTicks.map((tick) => (
            <line
              key={`gy-${tick.value}`}
              className="stroke-border/60"
              strokeWidth="1"
              x1={padding.left}
              x2={padding.left + plotWidth}
              y1={toY(tick.value)}
              y2={toY(tick.value)}
            />
          ))}
          {showXGrid && xTicks.map((tick) => (
            <line
              key={`gx-${tick.value}`}
              className="stroke-border/60"
              strokeWidth="1"
              x1={toX(tick.value)}
              x2={toX(tick.value)}
              y1={padding.top}
              y2={padding.top + plotHeight}
            />
          ))}

          <polygon
            className="fill-muted-foreground"
            points={`${padding.left + plotWidth + 4},${zeroY - 4} ${padding.left + plotWidth + 4},${zeroY + 4} ${padding.left + plotWidth + 12},${zeroY}`}
          />
          <line
            className="stroke-muted-foreground"
            strokeWidth="1.5"
            x1={padding.left}
            x2={padding.left + plotWidth + 4}
            y1={zeroY}
            y2={zeroY}
          />
          <polygon
            className="fill-muted-foreground"
            points={`${zeroX - 4},${padding.top - 4} ${zeroX + 4},${padding.top - 4} ${zeroX},${padding.top - 12}`}
          />
          <line
            className="stroke-muted-foreground"
            strokeWidth="1.5"
            x1={zeroX}
            x2={zeroX}
            y1={padding.top + plotHeight}
            y2={padding.top - 4}
          />

          {xTicks.map((tick) => (
            <g key={`x-${tick.value}`}>
              <line
                className="stroke-muted-foreground"
                strokeWidth="1"
                x1={toX(tick.value)}
                x2={toX(tick.value)}
                y1={zeroY - 4}
                y2={zeroY + 4}
              />
              <text
                className="fill-muted-foreground font-mono text-[11px]"
                textAnchor="middle"
                x={toX(tick.value)}
                y={height - 8}
              >
                {formatTick(tick.value)}
              </text>
            </g>
          ))}

          {yTicks.map((tick) => (
            <g key={`y-${tick.value}`}>
              <line
                className="stroke-muted-foreground"
                strokeWidth="1"
                x1={zeroX - 4}
                x2={zeroX + 4}
                y1={toY(tick.value)}
                y2={toY(tick.value)}
              />
              <text
                className="fill-muted-foreground font-mono text-[11px]"
                textAnchor="end"
                x={padding.left - 7}
                y={toY(tick.value) + 3}
              >
                {formatTick(tick.value)}
              </text>
            </g>
          ))}

          {xRange.label ? (
            <text
              className="fill-muted-foreground text-[12px] font-medium"
              textAnchor="end"
              x={width - padding.right}
              y={clamp(zeroY - 7, padding.top + 8, height - padding.bottom - 4)}
            >
              {xRange.label}
            </text>
          ) : null}
          {yRange.label ? (
            <text
              className="fill-muted-foreground text-[12px] font-medium"
              textAnchor="start"
              x={zeroX + 8}
              y={padding.top - 4}
            >
              {yRange.label}
            </text>
          ) : null}

          <GridContext.Provider value={{ toX, toY, xRange, yRange }}>
            {children}
          </GridContext.Provider>
        </svg>
      </div>
      {caption ? (
        <figcaption className="mt-1.5 text-[13px] leading-4 text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
