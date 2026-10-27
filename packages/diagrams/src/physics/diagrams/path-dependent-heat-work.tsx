import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoAxes, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lecture2.pdf#page=5&figure=6",
  slug: "path-dependent-heat-work",
  summary: "The same endpoint change in internal energy can be split into different heat and work transfers.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Path-dependent heat and work",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function PathDependentHeatWork({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <ThermoAxes xLabel="V" yLabel="p"/><path d="M 160 270 C 280 95 450 105 580 165" fill="none" stroke="var(--chart-1)" strokeWidth="4"/><path d="M 160 270 C 320 290 470 255 580 165" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><circle cx="160" cy="270" fill="var(--foreground)" r="6"/><circle cx="580" cy="165" fill="var(--foreground)" r="6"/><SvgLabel x={285} y={120}>path 1</SvgLabel><SvgLabel x={390} y={285}>path 2</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: PathDependentHeatWork } satisfies PhysicsDiagramDefinition;
