import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoAxes, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lecture5.pdf#page=5",
  slug: "entropy-thermal-equilibration",
  summary: "System and surroundings entropy changes oppose one another, while the total remains non-negative.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Entropy during thermal equilibration",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function EntropyThermalEquilibration({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <ThermoAxes xLabel="T/Tᵣ" yLabel="ΔS"/><path d="M 110 300 C 230 245 350 170 620 70" fill="none" stroke="var(--chart-1)" strokeWidth="4"/><path d="M 110 75 C 245 150 390 235 620 310" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><path d="M 110 210 C 270 170 430 175 620 220" fill="none" stroke="var(--chart-3)" strokeWidth="4"/><SvgLabel x={540} y={75}>system</SvgLabel><SvgLabel x={535} y={300}>surroundings</SvgLabel><SvgLabel x={505} y={200}>total ≥ 0</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: EntropyThermalEquilibration } satisfies PhysicsDiagramDefinition;
