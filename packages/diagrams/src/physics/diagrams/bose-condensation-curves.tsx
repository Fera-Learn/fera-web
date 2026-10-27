import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoAxes, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lectures12-13.pdf#page=9&figure=33",
  slug: "bose-condensation-curves",
  summary: "Internal energy and heat capacity change character at the condensation temperature.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Bose-Einstein condensation curves",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function BoseCondensationCurves({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <ThermoAxes xLabel="T/T𝚌" yLabel="U or Cᵥ"/><path d="M 100 325 C 210 305 295 245 360 175 C 440 105 530 75 640 70" fill="none" stroke="var(--chart-1)" strokeWidth="4"/><path d="M 100 330 C 210 290 305 155 360 105 C 430 145 505 205 640 245" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><line stroke="var(--foreground)" strokeDasharray="6 5" x1="360" x2="360" y1="70" y2="330"/><SvgLabel x={360} y={360}>T𝚌</SvgLabel><SvgLabel x={560} y={80}>U</SvgLabel><SvgLabel x={520} y={220}>Cᵥ</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: BoseCondensationCurves } satisfies PhysicsDiagramDefinition;
