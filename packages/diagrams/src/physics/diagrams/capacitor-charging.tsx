import { CartesianGrid, Curve, DashedLine, Point, Annotation } from "@repo/ui/diagrams";
import { PhysicsDiagramFrame, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";

export const metadata = {
  kind: "graph" as const,
  referenceImage: "capacitor-charging-discharging-exponential-graphs-equations.HEIC",
  slug: "capacitor-charging",
  summary: "Exponential charging curve for a capacitor through a resistor, showing the time constant τ = RC at 63% of the final voltage.",
  tags: ["Capacitor", "Charging", "Exponential", "RC", "Time Constant"],
  title: "Capacitor Charging (RC circuit)",
  topic: "Electricity and magnetism",
};

const CHARGING_POINTS = Array.from({ length: 50 }, (_, i) => {
  const t = (i / 49) * 5;
  return { x: t, y: 10 * (1 - Math.exp(-t)) };
});

export function CapacitorChargingDiagram({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame caption={showCaption ? metadata.summary : undefined} className={className} style={{ maxWidth: 520, ...style }} title={metadata.title}>
      <CartesianGrid
        xRange={{ min: 0, max: 5, step: 1, label: "time (s)" }}
        yRange={{ min: 0, max: 10, step: 2, label: "voltage (V)" }}
      >
        <Curve points={CHARGING_POINTS} label="V = V₀(1 − e⁻ᵗ/ᴿᶜ)" smooth />
        <DashedLine x={1} />
        <DashedLine y={6.3} />
        <Point x={1} y={6.3} label="63%" />
        <Annotation point={{ x: 1, y: 6.3 }} label="τ = RC" offset={{ x: 40, y: -30 }} />
      </CartesianGrid>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: CapacitorChargingDiagram,
} satisfies PhysicsDiagramDefinition;
