import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "apparatus",
  referenceImage: "Lecture6.pdf#page=4-6&figure=18-20",
  slug: "otto-engine-cycle",
  summary: "Piston strokes map onto the two adiabatic and two constant-volume stages of the ideal Otto cycle.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Four-stroke engine and ideal Otto cycle",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function OttoEngineCycle({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <g><rect fill="none" height="180" stroke="var(--foreground)" strokeWidth="3" width="160" x="65" y="65"/><rect fill="var(--muted)" height="22" stroke="var(--foreground)" width="160" x="65" y="175"/><line stroke="var(--foreground)" strokeWidth="6" x1="145" x2="145" y1="197" y2="295"/><SvgLabel x={145} y={35}>four strokes</SvgLabel></g><g transform="translate(260 0)"><line stroke="var(--foreground)" x1="90" x2="390" y1="330" y2="330"/><line stroke="var(--foreground)" x1="90" x2="90" y1="330" y2="55"/><path d="M 145 280 C 125 200 145 120 245 90 L 245 160 C 205 190 195 250 205 280 Z" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><SvgLabel x={245} y={365}>V</SvgLabel><SvgLabel x={65} y={65}>p</SvgLabel><SvgLabel x={275} y={115}>Otto cycle</SvgLabel></g>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: OttoEngineCycle } satisfies PhysicsDiagramDefinition;
