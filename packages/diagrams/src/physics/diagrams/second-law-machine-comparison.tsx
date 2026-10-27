import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoArrow, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "interaction",
  referenceImage: "Lecture5.pdf#page=1-3&figure=14-16",
  slug: "second-law-machine-comparison",
  summary: "The Kelvin and Clausius forbidden devices expose why no cyclic machine can convert one-reservoir heat wholly into work or move heat cold-to-hot without work.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Second-law machine comparison",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function SecondLawMachineComparison({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <circle cx="200" cy="190" fill="none" r="62" stroke="var(--foreground)" strokeWidth="3"/><circle cx="520" cy="190" fill="none" r="62" stroke="var(--foreground)" strokeWidth="3"/><SvgLabel x={200} y={196}>Kelvin?</SvgLabel><SvgLabel x={520} y={196}>Clausius?</SvgLabel><ThermoArrow color="var(--chart-2)" label="Q" x1={200} x2={200} y1={70} y2={120}/><ThermoArrow color="var(--chart-3)" label="W=Q" x1={262} x2={330} y1={190} y2={190}/><ThermoArrow color="var(--chart-1)" label="Q𝚌" x1={520} x2={520} y1={310} y2={258}/><ThermoArrow color="var(--chart-2)" label="Qₕ" x1={520} x2={520} y1={122} y2={70}/><SvgLabel fill="var(--chart-2)" x={200} y={350}>impossible</SvgLabel><SvgLabel fill="var(--chart-2)" x={520} y={350}>impossible without W</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: SecondLawMachineComparison } satisfies PhysicsDiagramDefinition;
