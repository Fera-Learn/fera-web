"use client";

import {
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type SvgLabelProps = {
  backgroundFill?: string;
  backgroundRx?: number;
  children: ReactNode;
  className?: string;
  fill?: string;
  paddingX?: number;
  paddingY?: number;
  textAnchor?: "end" | "middle" | "start";
  x: number;
  y: number;
};

type LabelBounds = {
  height: number;
  width: number;
  x: number;
  y: number;
};

export function SvgLabel({
  backgroundFill = "var(--background)",
  backgroundRx = 4,
  children,
  className,
  fill = "var(--foreground)",
  paddingX = 4,
  paddingY = 2,
  textAnchor = "middle",
  x,
  y,
}: SvgLabelProps) {
  const textRef = useRef<SVGTextElement>(null);
  const [bounds, setBounds] = useState<LabelBounds | null>(null);

  useLayoutEffect(() => {
    let cancelled = false;

    const measure = () => {
      if (!cancelled && textRef.current) {
        const nextBounds = textRef.current.getBBox();
        setBounds({
          height: nextBounds.height,
          width: nextBounds.width,
          x: nextBounds.x,
          y: nextBounds.y,
        });
      }
    };

    measure();
    void document.fonts?.ready.then(measure);

    return () => {
      cancelled = true;
    };
  }, [children, textAnchor, x, y]);

  return (
    <g>
      {bounds ? (
        <rect
          fill={backgroundFill}
          height={bounds.height + 2 * paddingY}
          rx={backgroundRx}
          width={bounds.width + 2 * paddingX}
          x={bounds.x - paddingX}
          y={bounds.y - paddingY}
        />
      ) : null}
      <text
        className={className}
        fill={fill}
        ref={textRef}
        textAnchor={textAnchor}
        x={x}
        y={y}
      >
        {children}
      </text>
    </g>
  );
}
