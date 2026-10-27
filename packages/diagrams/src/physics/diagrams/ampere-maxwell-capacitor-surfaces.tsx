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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=22&figure=18",
  slug: "ampere-maxwell-capacitor-surfaces",
  summary:
    "A charging capacitor with wire-cutting and gap-crossing surfaces used to motivate the Ampere-Maxwell law.",
  tags: ["Ampere-Maxwell law", "Displacement current", "Charging capacitor", "Spanning surface"],
  title: "Alternative surfaces around a charging capacitor",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-1)";
const POSITIVE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";
const MUTED = "var(--muted-foreground)";

const electricFieldLines = [172, 216, 260, 304] as const;

export function AmpereMaxwellCapacitorSurfacesDiagram({
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

        <path
          d="M 350 55 C 330 145 330 320 350 405 L 480 405 C 505 320 505 145 480 55 Z"
          fill="var(--chart-4)"
          fillOpacity="0.28"
        />
        <ellipse cx="120" cy="230" fill="none" rx="22" ry="175" stroke={FOREGROUND} strokeDasharray="9 7" strokeWidth="1.6" />
        <ellipse cx="480" cy="230" fill="none" rx="22" ry="175" stroke={FOREGROUND} strokeDasharray="9 7" strokeWidth="1.6" />
        <circle cx="120" cy="55" fill={FOREGROUND} r="4.5" />
        <circle cx="480" cy="55" fill={FOREGROUND} r="4.5" />

        <line stroke={FOREGROUND} strokeWidth="2" x1="42" x2="96" y1="230" y2="230" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="144" x2="380" y1="230" y2="230" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="565" x2="682" y1="230" y2="230" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="248" x2="310" y1="230" y2="230" />
        <SvgArrowhead angle={0} baseX={310} baseY={230} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="245" x2="335" y1="210" y2="210" />
        <SvgArrowhead angle={0} baseX={335} baseY={210} color={FOREGROUND} halfWidth={3.5} length={7} />
        <line stroke={FOREGROUND} strokeWidth="2" x1="620" x2="667" y1="230" y2="230" />
        <SvgArrowhead angle={0} baseX={667} baseY={230} color={FOREGROUND} halfWidth={4} length={8} />

        <line stroke={FOREGROUND} strokeWidth="2" x1="45" x2="45" y1="230" y2="65" />
        <SvgArrowhead angle={-90} baseX={45} baseY={65} color={FOREGROUND} halfWidth={4} length={8} />

        <polygon fill="var(--chart-4)" points="378,160 404,145 434,145 408,160 408,310 378,326" stroke={FOREGROUND} strokeWidth="1.2" />
        <polygon fill="var(--chart-5)" points="408,160 434,145 434,295 408,310" stroke={POSITIVE} strokeWidth="1.3" />
        <polygon fill="var(--muted)" points="540,160 566,145 590,145 565,160 565,310 540,326" stroke={FOREGROUND} strokeWidth="1.2" />
        <polygon fill="var(--border)" points="565,160 590,145 590,295 565,310" stroke={FOREGROUND} strokeWidth="1.3" />

        {electricFieldLines.map((y) => (
          <g key={y}>
            <line stroke={FIELD} strokeWidth="2" x1="434" x2="530" y1={y} y2={y} />
            <SvgArrowhead angle={0} baseX={530} baseY={y} color={FIELD} halfWidth={4} length={8} />
          </g>
        ))}
        {[172, 201, 230, 259].map((y) => (
          <SvgLabel fill={POSITIVE} key={`positive-${y}`} x={465} y={y}>+</SvgLabel>
        ))}
        {[172, 201, 230, 259].map((y) => (
          <SvgLabel fill={FOREGROUND} key={`negative-${y}`} x={523} y={y}>-</SvgLabel>
        ))}

        <SvgLabel fill={FOREGROUND} x={120} y={30}>Point (1)</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={480} y={30}>Point (2)</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={160} y={95}>Path A</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={520} y={95}>Path B</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={278} y={202}>Volume D</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={63} y={145}>r</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={290} y={257}>I</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={653} y={257}>I</SvgLabel>
        <SvgLabel fill={POSITIVE} x={405} y={356}>+q(t)</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={565} y={356}>-q(t)</SvgLabel>
        <SvgLabel fill={FIELD} textAnchor="start" x={540} y={414}>E-field :</SvgLabel>
        <line stroke={FIELD} strokeWidth="2" x1="620" x2="660" y1="409" y2="409" />
        <SvgArrowhead angle={0} baseX={660} baseY={409} color={FIELD} halfWidth={4} length={8} />
        <line stroke={MUTED} strokeWidth="1" x1="35" x2="96" y1="230" y2="230" />
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: AmpereMaxwellCapacitorSurfacesDiagram,
} satisfies PhysicsDiagramDefinition;
