"use client";

import { useGridContext } from "./grid-context";

export type PointProps = {
  color?: string;
  label?: string;
  x: number;
  y: number;
};

export function Point({ color = "var(--foreground)", label, x, y }: PointProps) {
  const { toX, toY } = useGridContext();
  const cx = toX(x);
  const cy = toY(y);

  return (
    <g>
      <circle cx={cx} cy={cy} fill={color} r="2.4" />
      {label ? (
        <text
          className="fill-foreground text-[12px] font-semibold"
          x={cx + 6}
          y={cy - 6}
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}
