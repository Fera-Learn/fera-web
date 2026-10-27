import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoAxes, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lecture7.pdf#page=3&figure=21",
  slug: "gibbs-free-energy-slopes",
  summary: "At fixed pressure the temperature slope of Gibbs energy is minus entropy; at fixed temperature its pressure slope is volume.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Gibbs free-energy slopes",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function GibbsFreeEnergySlopes({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <ThermoAxes xLabel="T or p" yLabel="G"/><path d="M 140 90 C 275 135 420 215 610 300" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><path d="M 140 285 C 290 245 440 170 610 95" fill="none" stroke="var(--chart-1)" strokeWidth="4"/><SvgLabel x={500} y={255}>fixed p: slope −S</SvgLabel><SvgLabel x={500} y={115}>fixed T: slope V</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: GibbsFreeEnergySlopes } satisfies PhysicsDiagramDefinition;
