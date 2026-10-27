import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoArrow, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "interaction",
  referenceImage: "Lecture4.pdf#page=2&figure=11",
  slug: "heat-engine-energy-flow",
  summary: "A cyclic engine absorbs heat from a hot reservoir, produces work, and rejects the remainder to a cold reservoir.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Heat-engine energy flow",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function HeatEngineEnergyFlow({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <rect fill="none" height="55" stroke="var(--chart-2)" strokeWidth="3" width="250" x="235" y="35"/><circle cx="360" cy="205" fill="none" r="70" stroke="var(--foreground)" strokeWidth="3"/><rect fill="none" height="55" stroke="var(--chart-1)" strokeWidth="3" width="250" x="235" y="325"/><SvgLabel x={360} y={70}>hot reservoir Tₕ</SvgLabel><SvgLabel x={360} y={211}>engine</SvgLabel><SvgLabel x={360} y={360}>cold reservoir T𝚌</SvgLabel><ThermoArrow color="var(--chart-2)" label="Qₕ" x1={360} x2={360} y1={92} y2={125}/><ThermoArrow color="var(--chart-1)" label="Q𝚌" x1={360} x2={360} y1={275} y2={318}/><ThermoArrow color="var(--chart-3)" label="W" x1={430} x2={590} y1={205} y2={205}/>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: HeatEngineEnergyFlow } satisfies PhysicsDiagramDefinition;
