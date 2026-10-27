import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoArrow, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "interaction",
  referenceImage: "Lecture1.pdf#page=5&figure=4",
  slug: "zeroth-law-thermometry",
  summary: "Two systems in equilibrium with one thermometer are in equilibrium with each other.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Zeroth law and thermometer calibration",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function ZerothLawThermometry({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <circle cx="190" cy="180" fill="none" r="75" stroke="var(--chart-2)" strokeWidth="3"/><circle cx="530" cy="180" fill="none" r="75" stroke="var(--chart-1)" strokeWidth="3"/><rect fill="none" height="235" stroke="var(--foreground)" strokeWidth="3" width="45" x="337" y="80"/><circle cx="359" cy="285" fill="var(--chart-2)" r="14"/><line stroke="var(--chart-2)" strokeWidth="8" x1="359" x2="359" y1="285" y2="145"/><ThermoArrow label="thermal contact" x1={270} x2={330} y1={180} y2={180}/><ThermoArrow label="thermal contact" x1={450} x2={390} y1={180} y2={180}/><SvgLabel x={190} y={185}>A</SvgLabel><SvgLabel x={530} y={185}>B</SvgLabel><SvgLabel x={359} y={55}>C</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: ZerothLawThermometry } satisfies PhysicsDiagramDefinition;
