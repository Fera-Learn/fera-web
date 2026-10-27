import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoArrow, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "apparatus",
  referenceImage: "Lecture1.pdf#page=2-3&figure=1",
  slug: "thermodynamic-system-boundaries",
  summary: "Matter and energy arrows distinguish open, closed, and isolated boundaries.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Open, closed, and isolated thermodynamic systems",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function ThermodynamicSystemBoundaries({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <SvgLabel x={140} y={55}>open</SvgLabel><SvgLabel x={360} y={55}>closed</SvgLabel><SvgLabel x={580} y={55}>isolated</SvgLabel>{[140,360,580].map((x)=><circle cx={x} cy="205" fill="none" key={x} r="82" stroke="var(--foreground)" strokeWidth="3"/>)}<ThermoArrow color="var(--chart-2)" label="energy" x1={35} x2={92} y1={165} y2={165}/><ThermoArrow color="var(--chart-1)" label="matter" x1={35} x2={92} y1={245} y2={245}/><ThermoArrow color="var(--chart-2)" label="energy" x1={255} x2={312} y1={205} y2={205}/><path d="M 515 120 L 645 290" stroke="var(--foreground)" strokeDasharray="7 6" strokeWidth="3"/>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: ThermodynamicSystemBoundaries } satisfies PhysicsDiagramDefinition;
