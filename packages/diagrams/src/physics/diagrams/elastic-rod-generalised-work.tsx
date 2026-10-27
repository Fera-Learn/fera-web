import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoArrow, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "apparatus",
  referenceImage: "Lecture10.pdf#page=1&figure=26",
  slug: "elastic-rod-generalised-work",
  summary: "Opposing tensions extend a rod, pairing the generalised force with a change in length.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Elastic rod work coordinates",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function ElasticRodGeneralisedWork({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <rect fill="var(--chart-1)" fillOpacity="0.2" height="90" stroke="var(--foreground)" strokeWidth="3" width="350" x="185" y="155"/><ThermoArrow color="var(--chart-2)" label="−F" x1={185} x2={75} y1={200} y2={200}/><ThermoArrow color="var(--chart-2)" label="F" x1={535} x2={645} y1={200} y2={200}/><line stroke="var(--foreground)" x1="185" x2="535" y1="280" y2="280"/><line stroke="var(--foreground)" x1="185" x2="185" y1="270" y2="290"/><line stroke="var(--foreground)" x1="535" x2="535" y1="270" y2="290"/><SvgLabel x={360} y={310}>L, dL</SvgLabel><SvgLabel x={360} y={205}>area A</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: ElasticRodGeneralisedWork } satisfies PhysicsDiagramDefinition;
