import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoArrow, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "interaction",
  referenceImage: "Lecture4.pdf#page=3&figure=12",
  slug: "refrigerator-heat-pump-flow",
  summary: "Work drives heat from a cold reservoir to a hot reservoir.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Refrigerator and heat-pump energy flow",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function RefrigeratorHeatPumpFlow({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <rect fill="none" height="55" stroke="var(--chart-2)" strokeWidth="3" width="250" x="235" y="35"/><circle cx="360" cy="205" fill="none" r="70" stroke="var(--foreground)" strokeWidth="3"/><rect fill="none" height="55" stroke="var(--chart-1)" strokeWidth="3" width="250" x="235" y="325"/><SvgLabel x={360} y={70}>hot reservoir Tₕ</SvgLabel><SvgLabel x={360} y={211}>refrigerator</SvgLabel><SvgLabel x={360} y={360}>cold reservoir T𝚌</SvgLabel><ThermoArrow color="var(--chart-2)" label="Qₕ" x1={360} x2={360} y1={125} y2={92}/><ThermoArrow color="var(--chart-1)" label="Q𝚌" x1={360} x2={360} y1={318} y2={275}/><ThermoArrow color="var(--chart-3)" label="W" x1={590} x2={430} y1={205} y2={205}/>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: RefrigeratorHeatPumpFlow } satisfies PhysicsDiagramDefinition;
