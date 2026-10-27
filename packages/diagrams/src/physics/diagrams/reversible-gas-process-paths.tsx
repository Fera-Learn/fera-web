import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoAxes, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lecture3.pdf#page=5-6&figure=9; Lecture4.pdf#page=1&figure=10",
  slug: "reversible-gas-process-paths",
  summary: "On a pressure-volume plot an adiabat falls more steeply than an isotherm through the same state.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Isothermal and adiabatic gas paths",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function ReversibleGasProcessPaths({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <ThermoAxes xLabel="V" yLabel="p"/><path d="M 165 95 C 235 165 345 220 610 285" fill="none" stroke="var(--chart-1)" strokeWidth="4"/><path d="M 165 95 C 210 205 315 275 610 315" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><SvgLabel x={465} y={230}>isotherm</SvgLabel><SvgLabel x={450} y={303}>adiabat</SvgLabel><circle cx="165" cy="95" fill="var(--foreground)" r="6"/>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: ReversibleGasProcessPaths } satisfies PhysicsDiagramDefinition;
