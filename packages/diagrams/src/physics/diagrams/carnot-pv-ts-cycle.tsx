import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lecture4.pdf#page=4-5&figure=13",
  slug: "carnot-pv-ts-cycle",
  summary: "The four reversible Carnot stages form closed loops on pressure-volume and temperature-entropy diagrams.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Carnot cycle on p-V and T-S axes",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function CarnotPvTsCycle({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <g transform="translate(-20 0)"><line stroke="var(--foreground)" x1="75" x2="345" y1="330" y2="330"/><line stroke="var(--foreground)" x1="75" x2="75" y1="330" y2="55"/><path d="M 120 105 C 185 125 235 155 285 185 C 275 240 245 285 195 305 C 150 275 128 205 120 105 Z" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><SvgLabel x={112} y={90}>1</SvgLabel><SvgLabel x={300} y={185}>2</SvgLabel><SvgLabel x={200} y={325}>3</SvgLabel><SvgLabel x={112} y={245}>4</SvgLabel><SvgLabel x={210} y={370}>V</SvgLabel><SvgLabel x={48} y={65}>p</SvgLabel></g><g transform="translate(350 0)"><line stroke="var(--foreground)" x1="25" x2="295" y1="330" y2="330"/><line stroke="var(--foreground)" x1="25" x2="25" y1="330" y2="55"/><rect fill="none" height="180" stroke="var(--chart-1)" strokeWidth="4" width="170" x="75" y="105"/><SvgLabel x={62} y={100}>1</SvgLabel><SvgLabel x={258} y={100}>2</SvgLabel><SvgLabel x={258} y={300}>3</SvgLabel><SvgLabel x={62} y={300}>4</SvgLabel><SvgLabel x={160} y={370}>S</SvgLabel><SvgLabel x={0} y={65}>T</SvgLabel><SvgLabel x={160} y={93}>Tₕ</SvgLabel><SvgLabel x={160} y={310}>T𝚌</SvgLabel></g>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: CarnotPvTsCycle } satisfies PhysicsDiagramDefinition;
