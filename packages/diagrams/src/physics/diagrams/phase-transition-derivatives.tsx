import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lecture9.pdf#page=3-4&figure=24-25",
  slug: "phase-transition-derivatives",
  summary: "Transition order is identified by which derivative of Gibbs free energy first becomes discontinuous.",
  tags: ["Thermodynamics", "Source visual"],
  title: "First- and second-order phase transitions",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function PhaseTransitionDerivatives({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <line stroke="var(--foreground)" x1="55" x2="665" y1="340" y2="340"/><line stroke="var(--foreground)" x1="80" x2="80" y1="350" y2="45"/><path d="M 105 85 C 260 125 330 175 355 220 C 385 265 500 285 630 300" fill="none" stroke="var(--chart-1)" strokeWidth="4"/><path d="M 105 280 L 345 205 L 370 125 L 630 85" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><line stroke="var(--foreground)" strokeDasharray="6 5" x1="357" x2="357" y1="60" y2="340"/><SvgLabel x={357} y={375}>T𝚌</SvgLabel><SvgLabel x={210} y={115}>continuous G</SvgLabel><SvgLabel x={505} y={135}>derivative jump</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: PhaseTransitionDerivatives } satisfies PhysicsDiagramDefinition;
