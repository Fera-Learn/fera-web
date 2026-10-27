import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoArrow, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "apparatus",
  referenceImage: "Lecture10.pdf#page=6-7&figure=29",
  slug: "joule-kelvin-inversion",
  summary: "A porous plug produces a steady constant-enthalpy pressure drop; the inversion curve separates cooling from heating.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Joule-Kelvin expansion and inversion",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function JouleKelvinInversion({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <rect fill="none" height="150" stroke="var(--foreground)" strokeWidth="3" width="500" x="50" y="45"/><rect fill="var(--muted)" height="150" stroke="var(--foreground)" strokeWidth="3" width="45" x="278" y="45"/><ThermoArrow color="var(--chart-1)" label="high p" x1={95} x2={255} y1={120} y2={120}/><ThermoArrow color="var(--chart-1)" label="low p" x1={345} x2={515} y1={120} y2={120}/><SvgLabel x={300} y={25}>porous plug</SvgLabel><line stroke="var(--foreground)" x1="80" x2="640" y1="355" y2="355"/><line stroke="var(--foreground)" x1="80" x2="80" y1="355" y2="225"/><path d="M 140 335 C 250 220 420 220 590 330" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><SvgLabel x={365} y={245}>inversion curve</SvgLabel><SvgLabel x={500} y={280}>cooling</SvgLabel><SvgLabel x={490} y={345}>heating</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: JouleKelvinInversion } satisfies PhysicsDiagramDefinition;
