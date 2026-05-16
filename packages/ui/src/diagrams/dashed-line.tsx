"use client";

import { useGridContext } from "./grid-context";

export type DashedLineProps = {
  color?: string;
  x?: number;
  y?: number;
};

export function DashedLine({ color = "var(--muted-foreground)", x, y }: DashedLineProps) {
  const { toX, toY, xRange, yRange } = useGridContext();

  if (x !== undefined) {
    const svgX = toX(x);
    return (
      <line
        className="stroke-muted-foreground"
        stroke={color}
        strokeDasharray="5 5"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        x1={svgX}
        x2={svgX}
        y1={toY(yRange.min)}
        y2={toY(yRange.max)}
      />
    );
  }

  if (y !== undefined) {
    const svgY = toY(y);
    return (
      <line
        className="stroke-muted-foreground"
        stroke={color}
        strokeDasharray="5 5"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        x1={toX(xRange.min)}
        x2={toX(xRange.max)}
        y1={svgY}
        y2={svgY}
      />
    );
  }

  return null;
}
