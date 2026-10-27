import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoArrow, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "interaction",
  referenceImage: "Lecture1.pdf#page=4&figure=3",
  slug: "microscopic-heat-transfer",
  summary: "Random molecular motion transfers energy across a diathermal boundary without organised displacement.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Microscopic transfer of heat",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function MicroscopicHeatTransfer({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <rect fill="none" height="250" stroke="var(--foreground)" strokeWidth="3" width="260" x="70" y="80"/><rect fill="none" height="250" stroke="var(--foreground)" strokeWidth="3" width="260" x="390" y="80"/>{([[115,125],[180,170],[260,120],[130,260],[230,280],[440,130],[520,175],[600,115],[470,270],[580,265]] as const).map(([x,y],i)=><g key={i}><circle cx={x} cy={y} fill={i<5?'var(--chart-2)':'var(--chart-1)'} r="10"/><line stroke="var(--foreground)" x1={x-15} x2={x+18} y1={y+14} y2={y-12}/></g>)}<ThermoArrow color="var(--chart-2)" label="Q" x1={325} x2={395} y1={205} y2={205}/><SvgLabel x={200} y={55}>hot</SvgLabel><SvgLabel x={520} y={55}>cold</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: MicroscopicHeatTransfer } satisfies PhysicsDiagramDefinition;
