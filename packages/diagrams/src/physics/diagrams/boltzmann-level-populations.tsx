import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lectures12-13.pdf#page=1-3&figure=31-32",
  slug: "boltzmann-level-populations",
  summary: "Increasing temperature spreads a Boltzmann population over more energy levels while preserving normalisation.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Thermal populations of energy levels",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function BoltzmannLevelPopulations({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    {[95,155,215,275].map((y,i)=><g key={y}><line stroke="var(--foreground)" strokeWidth="3" x1="100" x2="300" y1={y} y2={y}/><line stroke="var(--foreground)" strokeWidth="3" x1="420" x2="620" y1={y} y2={y}/>{Array.from({length:i===3?6:Math.max(1,2**(i-1))},(_,j)=><circle cx={145+j*25} cy={y-8} fill="var(--chart-1)" key={j} r="7"/>)}{Array.from({length:3},(_,j)=><circle cx={465+j*35} cy={y-8} fill="var(--chart-2)" key={j} r="7"/>)}</g>)}<SvgLabel x={200} y={350}>low T</SvgLabel><SvgLabel x={520} y={350}>higher T</SvgLabel><SvgLabel x={45} y={95}>E</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: BoltzmannLevelPopulations } satisfies PhysicsDiagramDefinition;
