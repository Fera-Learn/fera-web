"use client";

import { useGridContext } from "./grid-context";

export type AnnotationProps = {
  align?: "center" | "end" | "start";
  label: string;
  offset: { x: number; y: number };
  point: { x: number; y: number };
};

export function Annotation({ align = "start", label, offset, point }: AnnotationProps) {
  const { toX, toY } = useGridContext();
  const target = { x: toX(point.x), y: toY(point.y) };
  const labelPos = {
    x: target.x + offset.x,
    y: target.y + offset.y,
  };

  return (
    <g>
      <line
        className="stroke-muted-foreground"
        opacity="0.55"
        strokeDasharray="3 3"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        x1={target.x}
        x2={labelPos.x}
        y1={target.y}
        y2={labelPos.y}
      />
      <text
        className="fill-foreground text-[12px] font-semibold"
        textAnchor={align === "center" ? "middle" : align}
        x={labelPos.x}
        y={labelPos.y}
      >
        {label}
      </text>
    </g>
  );
}
