import { diagram as capacitorChargingDiagram } from "./diagrams/capacitor-charging";
import { diagram as capacitorDischargingDiagram } from "./diagrams/capacitor-discharging";
import type { PhysicsDiagramDefinition } from "../shared/physics-diagram";

export const physicsDiagrams = [
  capacitorChargingDiagram,
  capacitorDischargingDiagram,
] as const satisfies readonly PhysicsDiagramDefinition[];

export type PhysicsDiagramSlug = (typeof physicsDiagrams)[number]["slug"];

export const physicsDiagramsBySlug = new Map(
  physicsDiagrams.map((diagram) => [diagram.slug, diagram]),
);

export function getPhysicsDiagram(slug: PhysicsDiagramSlug) {
  return physicsDiagramsBySlug.get(slug);
}
