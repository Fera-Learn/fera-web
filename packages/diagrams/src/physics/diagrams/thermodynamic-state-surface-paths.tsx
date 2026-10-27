import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lecture1.pdf#page=3&figure=2",
  slug: "thermodynamic-state-surface-paths",
  summary: "States lie on an equation-of-state surface; different paths can connect the same endpoints.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Equilibrium states and thermodynamic paths",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function ThermodynamicStateSurfacePaths({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <path d="M 125 285 C 230 130 430 85 610 145 C 505 250 315 320 125 285 Z" fill="var(--chart-1)" fillOpacity="0.16" stroke="var(--foreground)" strokeWidth="2"/><path d="M 180 260 C 290 150 430 125 555 160" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><path d="M 180 260 C 315 295 470 250 555 160" fill="none" stroke="var(--chart-3)" strokeWidth="4"/><circle cx="180" cy="260" fill="var(--foreground)" r="6"/><circle cx="555" cy="160" fill="var(--foreground)" r="6"/><SvgLabel x={160} y={287}>A</SvgLabel><SvgLabel x={577} y={155}>B</SvgLabel><SvgLabel x={345} y={120}>p(V,T)=0</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: ThermodynamicStateSurfacePaths } satisfies PhysicsDiagramDefinition;
