import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoAxes, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lectures12-13.pdf#page=9-10&figure=34-35",
  slug: "quantum-statistical-distributions",
  summary: "The Fermi step broadens with temperature, while Bose-Einstein and Fermi-Dirac occupations approach the classical tail at low occupancy.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Quantum statistical distributions",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function QuantumStatisticalDistributions({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <ThermoAxes xLabel="(ε−μ)/kT" yLabel="occupation"/><path d="M 100 90 L 340 90 L 340 320 L 640 320" fill="none" stroke="var(--chart-1)" strokeWidth="4"/><path d="M 100 95 C 260 105 305 145 340 205 C 385 275 485 310 640 320" fill="none" stroke="var(--chart-1)" strokeDasharray="7 5" strokeWidth="4"/><path d="M 380 65 C 415 115 455 210 640 320" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><path d="M 370 145 C 430 205 505 275 640 320" fill="none" stroke="var(--chart-3)" strokeWidth="4"/><SvgLabel x={220} y={75}>Fermi-Dirac, T=0</SvgLabel><SvgLabel x={530} y={145}>Bose-Einstein</SvgLabel><SvgLabel x={535} y={235}>classical limit</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: QuantumStatisticalDistributions } satisfies PhysicsDiagramDefinition;
