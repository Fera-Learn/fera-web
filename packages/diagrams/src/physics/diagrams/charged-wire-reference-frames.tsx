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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=38&figure=28",
  slug: "charged-wire-reference-frames",
  summary:
    "Positive and negative charge spacings in their two rest frames, showing the frame-dependent net line charge.",
  tags: ["Special relativity", "Lorentz contraction", "Line charge", "Reference frame"],
  title: "Charged wire in two inertial frames",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const POSITIVE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";

export function ChargedWireReferenceFramesDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 450">
        <rect fill="transparent" height="450" width="720" />

        <SvgLabel fill={FOREGROUND} textAnchor="start" x={70} y={34}>Observer N</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="70" x2="175" y1="40" y2="40" />
        <SvgLabel fill={FOREGROUND} x={245} y={70}>Proper frame</SvgLabel>
        <circle cx="180" cy="112" fill={FOREGROUND} r="13" />
        <circle cx="310" cy="112" fill={FOREGROUND} r="13" />
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="185" x2="305" y1="143" y2="143" />
        <SvgArrowhead angle={180} baseX={185} baseY={143} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgArrowhead angle={0} baseX={305} baseY={143} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={333} y={120}>-e</SvgLabel>

        <SvgLabel fill={POSITIVE} x={245} y={172}>Lorentz contraction</SvgLabel>
        <circle cx="180" cy="206" fill="var(--chart-5)" r="13" stroke={POSITIVE} strokeWidth="1.2" />
        <circle cx="310" cy="206" fill="var(--chart-5)" r="13" stroke={POSITIVE} strokeWidth="1.2" />
        <line stroke={POSITIVE} strokeWidth="1.8" x1="168" x2="135" y1="206" y2="206" />
        <SvgArrowhead angle={180} baseX={135} baseY={206} color={POSITIVE} halfWidth={3.5} length={7} />
        <line stroke={POSITIVE} strokeWidth="1.8" x1="298" x2="265" y1="206" y2="206" />
        <SvgArrowhead angle={180} baseX={265} baseY={206} color={POSITIVE} halfWidth={3.5} length={7} />
        <line stroke={POSITIVE} strokeWidth="1.4" x1="180" x2="310" y1="236" y2="236" />
        <SvgArrowhead angle={180} baseX={180} baseY={236} color={POSITIVE} halfWidth={3} length={6} />
        <SvgArrowhead angle={0} baseX={310} baseY={236} color={POSITIVE} halfWidth={3} length={6} />
        <SvgLabel fill={POSITIVE} textAnchor="start" x={333} y={214}>+e</SvgLabel>

        <SvgLabel fill={FOREGROUND} x={560} y={42}>Charge per</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={560} y={66}>unit length</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={560} y={118}>-nₗe:</SvgLabel>
        <SvgLabel fill={POSITIVE} x={560} y={206}>+nₗe</SvgLabel>

        <SvgLabel fill={POSITIVE} textAnchor="start" x={70} y={274}>Observer P</SvgLabel>
        <line stroke={POSITIVE} strokeWidth="1.5" x1="70" x2="175" y1="280" y2="280" />
        <SvgLabel fill={FOREGROUND} x={245} y={310}>Lorentz contraction</SvgLabel>
        <circle cx="180" cy="344" fill={FOREGROUND} r="13" />
        <circle cx="235" cy="344" fill={FOREGROUND} r="13" />
        <line stroke={FOREGROUND} strokeWidth="1.8" x1="193" x2="214" y1="344" y2="344" />
        <SvgArrowhead angle={0} baseX={214} baseY={344} color={FOREGROUND} halfWidth={3.5} length={7} />
        <line stroke={FOREGROUND} strokeWidth="1.8" x1="248" x2="269" y1="344" y2="344" />
        <SvgArrowhead angle={0} baseX={269} baseY={344} color={FOREGROUND} halfWidth={3.5} length={7} />
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="185" x2="230" y1="373" y2="373" />
        <SvgArrowhead angle={180} baseX={185} baseY={373} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgArrowhead angle={0} baseX={230} baseY={373} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={284} y={352}>-e</SvgLabel>
        <SvgLabel fill={POSITIVE} x={270} y={404}>Proper frame</SvgLabel>
        <circle cx="180" cy="418" fill="var(--chart-5)" r="13" stroke={POSITIVE} strokeWidth="1.2" />
        <circle cx="380" cy="418" fill="var(--chart-5)" r="13" stroke={POSITIVE} strokeWidth="1.2" />
        <line stroke={POSITIVE} strokeWidth="1.4" x1="185" x2="375" y1="418" y2="418" />
        <SvgArrowhead angle={180} baseX={185} baseY={418} color={POSITIVE} halfWidth={3} length={6} />
        <SvgArrowhead angle={0} baseX={375} baseY={418} color={POSITIVE} halfWidth={3} length={6} />
        <SvgLabel fill={POSITIVE} textAnchor="start" x={402} y={426}>+e</SvgLabel>

        <SvgLabel fill={FOREGROUND} x={560} y={344}>-γnₗe</SvgLabel>
        <SvgLabel fill={POSITIVE} x={560} y={388}>+nₗe</SvgLabel>
        <line stroke={POSITIVE} strokeWidth="1.3" x1="530" x2="590" y1="397" y2="397" />
        <SvgLabel fill={POSITIVE} x={560} y={420}>γ</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: ChargedWireReferenceFramesDiagram,
} satisfies PhysicsDiagramDefinition;
