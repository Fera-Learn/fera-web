import { CartesianGrid, Curve, DashedLine, Point, Annotation } from "@repo/ui/diagrams";
import { PhysicsDiagramFrame, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";

export const metadata = {
  kind: "graph" as const,
  referenceImage: "capacitor-charging-discharging-exponential-graphs-equations.HEIC",
  slug: "capacitor-discharging",
  summary: "Exponential discharging curve for a capacitor through a resistor, showing the time constant τ = RC at 37% of the initial voltage.",
  tags: ["Capacitor", "Discharging", "Exponential", "RC", "Time Constant"],
  title: "Capacitor Discharging (RC circuit)",
  topic: "Electricity and magnetism",
};

const DISCHARGING_POINTS = Array.from({ length: 50 }, (_, i) => {
  const t = (i / 49) * 5;
  return { x: t, y: 10 * Math.exp(-t) };
});

export function CapacitorDischargingDiagram({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame caption={showCaption ? metadata.summary : undefined} className={className} style={{ maxWidth: 520, ...style }} title={metadata.title}>
      <CartesianGrid
        xRange={{ min: 0, max: 5, step: 1, label: "time (s)" }}
        yRange={{ min: 0, max: 10, step: 2, label: "voltage (V)" }}
      >
        <Curve points={DISCHARGING_POINTS} label="V = V₀e⁻ᵗ/ᴿᶜ" smooth />
        <DashedLine x={1} />
        <DashedLine y={3.7} />
        <Point x={1} y={3.7} label="37%" />
        <Annotation point={{ x: 1, y: 3.7 }} label="τ = RC" offset={{ x: 40, y: -30 }} />
      </CartesianGrid>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: CapacitorDischargingDiagram,
} satisfies PhysicsDiagramDefinition;
