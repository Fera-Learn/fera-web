import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoAxes, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lecture6.pdf#page=2&figure=17",
  slug: "temperature-entropy-processes",
  summary: "Isotherms are horizontal, reversible adiabats are vertical, and heat transfer is area under a T-S path.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Processes on a temperature-entropy diagram",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function TemperatureEntropyProcesses({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <ThermoAxes xLabel="S" yLabel="T"/><line stroke="var(--chart-2)" strokeWidth="4" x1="150" x2="590" y1="115" y2="115"/><line stroke="var(--chart-1)" strokeWidth="4" x1="260" x2="260" y1="75" y2="300"/><path d="M 145 285 C 245 250 375 185 590 135" fill="none" stroke="var(--chart-3)" strokeWidth="4"/><SvgLabel x={545} y={100}>isotherm</SvgLabel><SvgLabel x={235} y={70}>adiabat</SvgLabel><SvgLabel x={485} y={185}>isochore/isobar</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: TemperatureEntropyProcesses } satisfies PhysicsDiagramDefinition;
