import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lectures12-13.pdf#page=5-7",
  slug: "two-level-thermodynamic-curves",
  summary: "A finite two-level system has saturating energy and entropy and a heat-capacity peak between its low- and high-temperature limits.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Two-level thermodynamic limits",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function TwoLevelThermodynamicCurves({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <line stroke="var(--foreground)" x1="60" x2="670" y1="340" y2="340"/><line stroke="var(--foreground)" x1="75" x2="75" y1="340" y2="45"/><path d="M 85 320 C 180 300 260 190 360 125 C 470 75 565 70 655 70" fill="none" stroke="var(--chart-1)" strokeWidth="4"/><path d="M 85 320 C 175 305 250 210 350 160 C 455 115 565 110 655 110" fill="none" stroke="var(--chart-3)" strokeWidth="4"/><path d="M 85 335 C 180 315 250 110 345 90 C 450 115 500 285 655 330" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><SvgLabel x={580} y={60}>U</SvgLabel><SvgLabel x={580} y={105}>S</SvgLabel><SvgLabel x={350} y={75}>Cᵥ</SvgLabel><SvgLabel x={650} y={370}>T</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: TwoLevelThermodynamicCurves } satisfies PhysicsDiagramDefinition;
