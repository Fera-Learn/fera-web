import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoAxes, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lecture9.pdf#page=1-2&figure=22-23",
  slug: "single-component-phase-views",
  summary: "Pressure-temperature and pressure-volume views show coexistence boundaries, the triple point, and the critical point.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Single-component phase diagrams",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function SingleComponentPhaseViews({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <g transform="scale(.48 .9)"><ThermoAxes xLabel="T" yLabel="p"/><path d="M 110 305 C 230 270 310 220 360 175 C 430 145 500 120 590 95 M 335 60 C 345 110 355 150 360 175" fill="none" stroke="var(--foreground)" strokeWidth="5"/><circle cx="360" cy="175" fill="var(--chart-2)" r="8"/><circle cx="590" cy="95" fill="var(--chart-1)" r="8"/></g><g transform="translate(360 0) scale(.48 .9)"><ThermoAxes xLabel="V" yLabel="p"/><path d="M 115 300 C 175 90 280 105 350 230 C 435 125 520 120 620 120" fill="none" stroke="var(--chart-1)" strokeWidth="5"/><circle cx="350" cy="230" fill="var(--chart-2)" r="8"/></g><SvgLabel x={190} y={380}>p-T</SvgLabel><SvgLabel x={550} y={380}>p-V</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: SingleComponentPhaseViews } satisfies PhysicsDiagramDefinition;
