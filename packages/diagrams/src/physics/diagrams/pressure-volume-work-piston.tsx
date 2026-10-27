import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoArrow, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "apparatus",
  referenceImage: "Lecture3.pdf#page=1&figure=7",
  slug: "pressure-volume-work-piston",
  summary: "A moving piston converts a boundary displacement into work against external pressure.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Pressure-volume work and sign convention",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function PressureVolumeWorkPiston({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <rect fill="none" height="230" stroke="var(--foreground)" strokeWidth="4" width="280" x="220" y="105"/><rect fill="var(--muted)" height="25" stroke="var(--foreground)" strokeWidth="3" width="280" x="220" y="145"/><line stroke="var(--foreground)" strokeWidth="7" x1="360" x2="360" y1="70" y2="145"/><ThermoArrow color="var(--chart-3)" label="dV > 0" x1={360} x2={360} y1={145} y2={80}/><ThermoArrow color="var(--chart-2)" label="pₑₓₜ" x1={430} x2={430} y1={70} y2={137}/><SvgLabel x={360} y={260}>gas, p</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: PressureVolumeWorkPiston } satisfies PhysicsDiagramDefinition;
