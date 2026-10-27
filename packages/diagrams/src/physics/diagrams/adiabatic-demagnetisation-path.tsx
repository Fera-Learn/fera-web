import { SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";
import { ThermoArrow, ThermoAxes, ThermodynamicsDiagramShell } from "./thermodynamics-primitives";

export const metadata = {
  kind: "graph",
  referenceImage: "Lecture10.pdf#page=3-4&figure=27",
  slug: "adiabatic-demagnetisation-path",
  summary: "Isothermal magnetisation expels entropy as heat; reducing the field adiabatically then lowers temperature.",
  tags: ["Thermodynamics", "Source visual"],
  title: "Adiabatic demagnetisation",
  topic: "Thermodynamics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function AdiabaticDemagnetisationPath({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <ThermodynamicsDiagramShell ariaLabel={metadata.title} caption={metadata.summary} className={className} showCaption={showCaption} style={style} title={metadata.title}>
    <ThermoAxes xLabel="B" yLabel="T"/><path d="M 150 145 L 535 145" fill="none" stroke="var(--chart-2)" strokeWidth="4"/><ThermoArrow color="var(--chart-2)" x1={150} x2={525} y1={145} y2={145}/><path d="M 535 145 C 440 185 320 255 190 305" fill="none" stroke="var(--chart-1)" strokeWidth="4"/><ThermoArrow color="var(--chart-1)" x1={535} x2={200} y1={145} y2={301}/><SvgLabel x={345} y={130}>isothermal magnetisation</SvgLabel><SvgLabel x={390} y={245}>adiabatic demagnetisation</SvgLabel>
  </ThermodynamicsDiagramShell>;
}

export const diagram = { ...metadata, component: AdiabaticDemagnetisationPath } satisfies PhysicsDiagramDefinition;
