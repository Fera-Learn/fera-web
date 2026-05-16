"use client";

import { useGridContext } from "./grid-context";
import type { Point2D } from "./types";

export type CurveProps = {
  color?: string;
  dashed?: boolean;
  label?: string;
  points: Point2D[];
  smooth?: boolean;
};

function curvePath(
  points: Point2D[],
  toX: (v: number) => number,
  toY: (v: number) => number,
  smooth: boolean,
) {
  if (points.length === 0) return "";
  if (!smooth || points.length < 3) {
    return points
      .map((p, i) => `${i === 0 ? "M" : "L"} ${toX(p.x)} ${toY(p.y)}`)
      .join(" ");
  }
  const tension = 0.18;
  const parts = [`M ${toX(points[0]!.x)} ${toY(points[0]!.y)}`];
  for (let i = 0; i < points.length - 1; i++) {
    const prev = points[Math.max(0, i - 1)]!;
    const cur = points[i]!;
    const next = points[i + 1]!;
    const afterNext = points[Math.min(points.length - 1, i + 2)]!;
    const c1 = {
      x: toX(cur.x) + (toX(next.x) - toX(prev.x)) * tension,
      y: toY(cur.y) + (toY(next.y) - toY(prev.y)) * tension,
    };
    const c2 = {
      x: toX(next.x) - (toX(afterNext.x) - toX(cur.x)) * tension,
      y: toY(next.y) - (toY(afterNext.y) - toY(cur.y)) * tension,
    };
    parts.push(`C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${toX(next.x)} ${toY(next.y)}`);
  }
  return parts.join(" ");
}

export function Curve({ color = "var(--chart-1)", dashed, label, points, smooth = false }: CurveProps) {
  const { toX, toY } = useGridContext();
  const path = curvePath(points, toX, toY, smooth);
  const last = points[points.length - 1];

  return (
    <g>
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeDasharray={dashed ? "6 5" : undefined}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      {label && last ? (
        <text
          className="fill-foreground text-[12px] font-semibold"
          x={toX(last.x) + 6}
          y={toY(last.y) - 6}
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}
