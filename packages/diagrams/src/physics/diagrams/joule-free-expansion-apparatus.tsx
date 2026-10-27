import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoArrow, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "apparatus",
  referenceImage: "Lecture3.pdf#page=3-4&figure=8",
  slug: "joule-free-expansion-apparatus",
  summary: "Removing a partition lets gas fill an evacuated chamber without heat transfer or boundary work.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Joule free expansion",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function JouleFreeExpansionApparatus({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <rect fill="none" height="220" stroke="var(--foreground)" strokeWidth="4" width="540" x="90" y="90"/><line stroke="var(--foreground)" strokeDasharray="8 6" strokeWidth="4" x1="360" x2="360" y1="90" y2="310"/>{[[145,140],[220,175],[285,125],[170,250],[265,265]].map(([x,y])=><circle cx={x} cy={y} fill="var(--chart-1)" key={x} r="11"/>)}<SvgLabel x={225} y={205}>gas</SvgLabel><SvgLabel x={495} y={205}>vacuum</SvgLabel><ThermoArrow label="partition removed" x1={360} x2={360} y1={75} y2={125}/><SvgLabel x={360} y={350}>adiabatic rigid walls</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: JouleFreeExpansionApparatus } satisfies PhysicsDiagramDefinition;
