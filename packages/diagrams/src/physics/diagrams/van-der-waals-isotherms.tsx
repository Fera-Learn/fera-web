import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoAxes, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lecture10.pdf#page=4-5&figure=28",
  slug: "van-der-waals-isotherms",
  summary: "Van der Waals isotherms change from monotonic to a two-phase loop below the critical temperature.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Real-gas isotherms",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function VanDerWaalsIsotherms({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <ThermoAxes xLabel="V" yLabel="p"/><path d="M 125 85 C 195 135 290 190 620 275" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><path d="M 125 110 C 210 205 300 205 375 210 C 455 215 530 245 620 295" fill="none" stroke="var(--chart-3)" strokeWidth="4"/><path d="M 125 140 C 205 285 280 120 390 250 C 470 310 550 305 620 315" fill="none" stroke="var(--chart-1)" strokeWidth="4"/><circle cx="375" cy="210" fill="var(--foreground)" r="6"/><SvgLabel x={535} y={235}>T &gt; T𝚌</SvgLabel><SvgLabel x={430} y={200}>T = T𝚌</SvgLabel><SvgLabel x={515} y={305}>T &lt; T𝚌</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: VanDerWaalsIsotherms } satisfies PhysicsDiagramDefinition;
