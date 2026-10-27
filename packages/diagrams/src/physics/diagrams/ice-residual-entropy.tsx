import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "interaction",
  referenceImage: "Lecture11.pdf#page=1-2&figure=30",
  slug: "ice-residual-entropy",
  summary: "Different proton arrangements obey the ice rules yet remain microscopically distinct at low temperature.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Residual entropy in ice",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function IceResidualEntropy({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    {([[180,110],[360,110],[540,110],[180,290],[360,290],[540,290]] as const).map(([x,y])=><circle cx={x} cy={y} fill="var(--chart-1)" key={`${x}-${y}`} r="20"/>)}{([[180,110,360,110],[360,110,540,110],[180,290,360,290],[360,290,540,290],[180,110,180,290],[360,110,360,290],[540,110,540,290]] as const).map(([x1,y1,x2,y2],i)=><g key={i}><line stroke="var(--foreground)" strokeWidth="3" x1={x1} x2={x2} y1={y1} y2={y2}/><circle cx={(2*x1+x2)/3} cy={(2*y1+y2)/3} fill="var(--chart-2)" r="7"/></g>)}<SvgLabel x={360} y={375}>many allowed proton arrangements: S(0) &gt; 0</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: IceResidualEntropy } satisfies PhysicsDiagramDefinition;
