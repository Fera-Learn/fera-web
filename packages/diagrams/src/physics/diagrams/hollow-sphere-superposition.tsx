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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=15&figure=12",
  slug: "hollow-sphere-superposition",
  summary:
    "A hollow positively charged sphere represented as the superposition of complete positive and negative spheres.",
  tags: ["Superposition", "Charged sphere", "Spherical cavity", "Charge density"],
  title: "Hollow-sphere superposition construction",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const VECTOR = "var(--chart-1)";
const POSITIVE = "var(--chart-5)";
const POSITIVE_STROKE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";
const BACKGROUND = "var(--background)";

export function HollowSphereSuperpositionDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 420">
        <rect fill="transparent" height="420" width="720" />

        <circle cx="185" cy="160" fill={POSITIVE} r="125" stroke={POSITIVE_STROKE} strokeWidth="1.5" />
        <circle cx="273" cy="160" fill={BACKGROUND} r="43" />
        <circle cx="185" cy="160" fill="var(--chart-4)" r="4.5" stroke={VECTOR} strokeWidth="1" />
        <line stroke={VECTOR} strokeWidth="2" x1="185" x2="248" y1="160" y2="44" />
        <line stroke={VECTOR} strokeWidth="2" x1="189" x2="254" y1="158" y2="132" />
        <SvgArrowhead angle={-22} baseX={254} baseY={132} color={VECTOR} halfWidth={4} length={8} />
        <line stroke={VECTOR} strokeWidth="2" x1="185" x2="265" y1="160" y2="160" />
        <SvgArrowhead angle={0} baseX={265} baseY={160} color={VECTOR} halfWidth={4} length={8} />
        <line stroke={VECTOR} strokeWidth="2" x1="273" x2="258" y1="160" y2="136" />
        <SvgArrowhead angle={-122} baseX={258} baseY={136} color={VECTOR} halfWidth={4} length={8} />
        <line stroke={VECTOR} strokeWidth="2" x1="273" x2="305" y1="160" y2="193" />
        <circle cx="258" cy="132" fill={VECTOR} r="3.5" />

        <SvgLabel fill={VECTOR} x={170} y={179}>O</SvgLabel>
        <SvgLabel fill={VECTOR} textAnchor="start" x={264} y={128}>P</SvgLabel>
        <SvgLabel fill={VECTOR} x={230} y={86}>rₗₛ</SvgLabel>
        <SvgLabel fill={VECTOR} x={220} y={133}>r₁</SvgLabel>
        <SvgLabel fill={VECTOR} x={283} y={137}>r₂</SvgLabel>
        <SvgLabel fill={VECTOR} x={315} y={181}>rₛₛ</SvgLabel>
        <SvgLabel fill={VECTOR} x={235} y={184}>(rₗₛ-rₛₛ) î</SvgLabel>
        <SvgLabel fill={POSITIVE_STROKE} x={185} y={316}>ρ : +ve</SvgLabel>

        <circle cx="485" cy="160" fill={POSITIVE} r="125" stroke={POSITIVE_STROKE} strokeWidth="1.5" />
        <circle cx="573" cy="160" fill="none" r="43" stroke={BACKGROUND} strokeDasharray="8 6" strokeWidth="2" />
        <circle cx="485" cy="160" fill="var(--chart-4)" r="4.5" stroke={VECTOR} strokeWidth="1" />
        <line stroke={VECTOR} strokeWidth="2" x1="485" x2="548" y1="160" y2="44" />
        <line stroke={VECTOR} strokeWidth="2" x1="489" x2="554" y1="158" y2="132" />
        <SvgArrowhead angle={-22} baseX={554} baseY={132} color={VECTOR} halfWidth={4} length={8} />
        <line stroke={VECTOR} strokeWidth="2" x1="573" x2="605" y1="160" y2="193" />
        <circle cx="558" cy="130" fill={VECTOR} r="3.5" />

        <SvgLabel fill={VECTOR} x={470} y={179}>O</SvgLabel>
        <SvgLabel fill={VECTOR} textAnchor="start" x={564} y={128}>P</SvgLabel>
        <SvgLabel fill={VECTOR} x={530} y={86}>rₗₛ</SvgLabel>
        <SvgLabel fill={VECTOR} x={520} y={133}>r₁</SvgLabel>
        <SvgLabel fill={VECTOR} x={615} y={181}>rₛₛ</SvgLabel>
        <SvgLabel fill={POSITIVE_STROKE} x={485} y={316}>ρ : +ve</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="4" x1="617" x2="591" y1="289" y2="218" />
        <SvgArrowhead angle={-115} baseX={591} baseY={218} color={FOREGROUND} halfWidth={6} length={12} />
        <circle cx="620" cy="338" fill={FOREGROUND} r="49" />
        <circle cx="572" cy="338" fill="var(--chart-4)" r="4.5" stroke={VECTOR} strokeWidth="1" />
        <circle cx="620" cy="300" fill="var(--chart-4)" r="3.5" stroke={VECTOR} strokeWidth="1" />
        <line stroke={VECTOR} strokeWidth="2" x1="572" x2="612" y1="338" y2="338" />
        <SvgArrowhead angle={0} baseX={612} baseY={338} color={VECTOR} halfWidth={4} length={8} />
        <line stroke={VECTOR} strokeWidth="2" x1="620" x2="620" y1="334" y2="309" />
        <SvgArrowhead angle={-90} baseX={620} baseY={309} color={VECTOR} halfWidth={4} length={8} />
        <line stroke={VECTOR} strokeWidth="2" x1="620" x2="654" y1="338" y2="374" />

        <SvgLabel fill={VECTOR} x={560} y={356}>O</SvgLabel>
        <SvgLabel fill={VECTOR} textAnchor="start" x={626} y={298}>P</SvgLabel>
        <SvgLabel fill={VECTOR} textAnchor="start" x={628} y={322}>r₂</SvgLabel>
        <SvgLabel fill={VECTOR} textAnchor="start" x={655} y={359}>rₛₛ</SvgLabel>
        <SvgLabel fill={VECTOR} x={598} y={365}>(rₗₛ-rₛₛ) î</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={620} y={408}>ρ : -ve</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: HollowSphereSuperpositionDiagram,
} satisfies PhysicsDiagramDefinition;
