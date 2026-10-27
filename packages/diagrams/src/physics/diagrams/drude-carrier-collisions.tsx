import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "interaction",
  referenceImage:
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=42&figure=30",
  slug: "drude-carrier-collisions",
  summary:
    "Free charge carriers accelerating between collisions with fixed scattering sites in the Drude model.",
  tags: ["Drude model", "Charge carrier", "Scattering", "Relaxation time"],
  title: "Carrier motion and scattering in the Drude model",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const SCATTERER = "var(--chart-1)";
const FOREGROUND = "var(--foreground)";

const scatteringSites = [
  [105, 62], [200, 62], [295, 62], [390, 62], [485, 62], [580, 62],
  [105, 142], [200, 142], [295, 142], [390, 142], [485, 142], [580, 142],
  [105, 222], [200, 222], [295, 222], [390, 222], [485, 222], [580, 222],
] as const;

const freeCarriers = [
  [108, 104], [176, 182], [323, 102], [515, 104], [442, 232],
] as const;

export function DrudeCarrierCollisionsDiagram({
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

        {scatteringSites.map(([cx, cy]) => (
          <circle cx={cx} cy={cy} fill={SCATTERER} key={`${cx}-${cy}`} r="17" />
        ))}
        {freeCarriers.map(([cx, cy]) => (
          <circle cx={cx} cy={cy} fill={FOREGROUND} key={`${cx}-${cy}`} r="7" />
        ))}

        <path d="M 115 103 L 182 87 L 366 210 L 428 176" fill="none" stroke={FOREGROUND} strokeWidth="2.2" />
        <SvgArrowhead angle={-29} baseX={428} baseY={176} color={FOREGROUND} halfWidth={3.5} length={7} />
        <path d="M 183 181 L 246 148" fill="none" stroke={FOREGROUND} strokeWidth="2.2" />
        <SvgArrowhead angle={-28} baseX={246} baseY={148} color={FOREGROUND} halfWidth={3.5} length={7} />
        <path d="M 330 100 L 450 78 L 486 111" fill="none" stroke={FOREGROUND} strokeWidth="2.2" />
        <SvgArrowhead angle={43} baseX={486} baseY={111} color={FOREGROUND} halfWidth={3.5} length={7} />
        <path d="M 522 105 L 570 198 L 624 169" fill="none" stroke={FOREGROUND} strokeWidth="2.2" />
        <SvgArrowhead angle={-28} baseX={624} baseY={169} color={FOREGROUND} halfWidth={3.5} length={7} />

        <circle cx="168" cy="292" fill={FOREGROUND} r="7" />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={195} y={300}>Free charge carriers</SvgLabel>
        <circle cx="168" cy="335" fill={SCATTERER} r="17" />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={195} y={343}>Scattering sites</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: DrudeCarrierCollisionsDiagram,
} satisfies PhysicsDiagramDefinition;
