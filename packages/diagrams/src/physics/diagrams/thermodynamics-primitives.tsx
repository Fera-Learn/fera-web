import type { ReactNode } from "react";

import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const thermoColors = {
  cold: "var(--chart-1)",
  foreground: "var(--foreground)",
  heat: "var(--chart-2)",
  work: "var(--chart-3)",
} as const;

export function ThermodynamicsDiagramShell({
  ariaLabel,
  caption,
  children,
  className,
  showCaption = true,
  style,
  title,
  viewBox = "0 0 720 400",
}: PhysicsDiagramProps & {
  ariaLabel: string;
  caption: string;
  children: ReactNode;
  title: string;
  viewBox?: string;
}) {
  return (
    <PhysicsDiagramFrame
      caption={showCaption ? caption : undefined}
      className={className}
      style={{ maxWidth: 720, ...style }}
      title={title}
    >
      <svg aria-label={ariaLabel} className="h-auto w-full" role="img" viewBox={viewBox}>
        <rect fill="transparent" height="100%" width="100%" />
        {children}
      </svg>
    </PhysicsDiagramFrame>
  );
}

export function ThermoArrow({
  color = thermoColors.foreground,
  label,
  x1,
  x2,
  y1,
  y2,
}: {
  color?: string;
  label?: string;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}) {
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  return <>
    <line stroke={color} strokeWidth="3" x1={x1} x2={x2} y1={y1} y2={y2} />
    <SvgArrowhead angle={angle} baseX={x2} baseY={y2} color={color} halfWidth={5} length={10} />
    {label ? <SvgLabel fill={color} x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 10}>{label}</SvgLabel> : null}
  </>;
}

export function ThermoAxes({ xLabel, yLabel }: { xLabel: string; yLabel: string }) {
  const foreground = thermoColors.foreground;
  return <>
    <line stroke={foreground} strokeWidth="2" x1="90" x2="650" y1="330" y2="330" />
    <line stroke={foreground} strokeWidth="2" x1="90" x2="90" y1="330" y2="55" />
    <SvgLabel fill={foreground} x={640} y={360}>{xLabel}</SvgLabel>
    <SvgLabel fill={foreground} x={55} y={65}>{yLabel}</SvgLabel>
  </>;
}
