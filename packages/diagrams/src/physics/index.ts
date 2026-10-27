export { getPhysicsDiagram, physicsDiagrams, physicsDiagramsBySlug } from "./registry";
export { PhysicsDiagram } from "./physics-diagram";

export { CapacitorChargingDiagram } from "./diagrams/capacitor-charging";
export { CapacitorDischargingDiagram } from "./diagrams/capacitor-discharging";
export { ElectricFluxGaussLawGeometryDiagram } from "./diagrams/electric-flux-gauss-law-geometry";

export type { PhysicsDiagramSlug } from "./registry";
export type { RegisteredPhysicsDiagramProps } from "./physics-diagram";
export type { PhysicsDiagramDefinition, PhysicsDiagramKind, PhysicsDiagramMetadata, PhysicsDiagramProps } from "../shared/physics-diagram";
