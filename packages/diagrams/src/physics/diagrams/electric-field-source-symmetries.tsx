import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "field",
  referenceImage:
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=40&figure=29",
  slug: "electric-field-source-symmetries",
  summary:
    "Radial field symmetry around a charged sphere compared with the nearly uniform field between parallel plates.",
  tags: ["Field symmetry", "Divergence", "Charged sphere", "Parallel plates"],
  title: "Electric-field symmetry for spherical and planar sources",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-1)";
const POSITIVE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";

const radialAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330] as const;

function SourceFreeFieldLabel({ x }: { x: number }) {
  return (
    <g aria-label="∇ · E = 0, E ≠ 0">
      <path d={`M ${x - 82} 332 L ${x - 74} 348 L ${x - 66} 332 Z`} fill="none" stroke={FOREGROUND} strokeWidth="1.5" />
      <SvgLabel fill={FOREGROUND} textAnchor="start" x={x - 60} y={347}>· E = 0, E</SvgLabel>
      <line stroke={FOREGROUND} strokeWidth="1.4" x1={x + 38} x2={x + 50} y1="339" y2="339" />
      <line stroke={FOREGROUND} strokeWidth="1.4" x1={x + 38} x2={x + 50} y1="345" y2="345" />
      <line stroke={FOREGROUND} strokeWidth="1.4" x1={x + 39} x2={x + 49} y1="348" y2="336" />
      <SvgLabel fill={FOREGROUND} textAnchor="start" x={x + 56} y={347}>0</SvgLabel>
    </g>
  );
}

export function ElectricFieldSourceSymmetriesDiagram({
  className,
  showCaption = true,
  style,
}: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame
      caption={showCaption ? metadata.summary : undefined}
      className={className}
      style={{ maxWidth: 720, ...style }}
      title={metadata.title}
    >
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 360">
        <rect fill="transparent" height="360" width="720" />

        <circle cx="180" cy="150" fill="var(--chart-5)" r="76" stroke={POSITIVE} strokeWidth="1.5" />
        {radialAngles.map((angle) => {
          const radians = (angle * Math.PI) / 180;
          const startX = 180 + 28 * Math.cos(radians);
          const startY = 150 + 28 * Math.sin(radians);
          const baseX = 180 + 108 * Math.cos(radians);
          const baseY = 150 + 108 * Math.sin(radians);

          return (
            <g key={angle}>
              <line stroke={FIELD} strokeWidth="1.8" x1={startX} x2={baseX} y1={startY} y2={baseY} />
              <SvgArrowhead angle={angle} baseX={baseX} baseY={baseY} color={FIELD} halfWidth={3.5} length={7} />
            </g>
          );
        })}
        <SvgLabel fill={FIELD} x={180} y={34}>E-field ↑</SvgLabel>
        <circle cx="150" cy="282" fill="var(--background)" r="4" stroke={FOREGROUND} strokeWidth="1.3" />
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="154" x2="170" y1="286" y2="330" />
        <SourceFreeFieldLabel x={180} />

        <polygon fill="var(--muted)" points="410,95 435,82 466,82 442,95 442,245 410,258" stroke={FOREGROUND} strokeWidth="1.2" />
        <polygon fill="var(--chart-5)" points="442,95 466,82 466,232 442,245" stroke={POSITIVE} strokeWidth="1.3" />
        <polygon fill="var(--border)" points="555,95 579,82 610,82 586,95 586,245 555,258" stroke={FOREGROUND} strokeWidth="1.2" />
        <polygon fill="var(--muted)" points="586,95 610,82 610,232 586,245" stroke={FOREGROUND} strokeWidth="1.3" />
        {[112, 150, 188, 226].map((y) => (
          <g key={y}>
            <line stroke={FIELD} strokeWidth="2" x1="466" x2="541" y1={y} y2={y} />
            <SvgArrowhead angle={0} baseX={541} baseY={y} color={FIELD} halfWidth={4} length={8} />
            <SvgLabel fill={POSITIVE} x={484} y={y - 8}>+</SvgLabel>
            <SvgLabel fill={FOREGROUND} x={540} y={y - 8}>-</SvgLabel>
          </g>
        ))}
        <path d="M 470 76 C 495 52 555 52 581 76" fill="none" stroke={FIELD} strokeWidth="2" />
        <SvgArrowhead angle={16} baseX={581} baseY={76} color={FIELD} halfWidth={3.5} length={7} />
        <path d="M 470 264 C 495 288 555 288 581 264" fill="none" stroke={FIELD} strokeWidth="2" />
        <SvgArrowhead angle={-16} baseX={581} baseY={264} color={FIELD} halfWidth={3.5} length={7} />
        <SvgLabel fill={FIELD} x={520} y={34}>E-field</SvgLabel>
        <circle cx="520" cy="282" fill="var(--background)" r="4" stroke={FOREGROUND} strokeWidth="1.3" />
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="520" x2="512" y1="286" y2="330" />
        <SourceFreeFieldLabel x={520} />
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: ElectricFieldSourceSymmetriesDiagram,
} satisfies PhysicsDiagramDefinition;
