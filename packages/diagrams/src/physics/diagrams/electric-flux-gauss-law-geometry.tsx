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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=8&figure=4",
  slug: "electric-flux-gauss-law-geometry",
  summary:
    "A point charge inside arbitrary and circular closed surfaces, with the projected area geometry used in Gauss's law.",
  tags: ["Electric flux", "Gauss's law", "Closed surface", "Area vector"],
  title: "Electric flux through an arbitrary closed surface",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-1)";
const PROJECTION = "var(--destructive)";
const FOREGROUND = "var(--foreground)";
const MUTED = "var(--muted-foreground)";

export function ElectricFluxGaussLawGeometryDiagram({
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
      <svg
        aria-label={metadata.title}
        className="h-auto w-full"
        role="img"
        viewBox="0 0 720 400"
      >
        <rect fill="transparent" height="400" width="720" />
        <circle cx="245" cy="225" fill="none" r="174" stroke={PROJECTION} strokeDasharray="2 4" strokeWidth="2" />
        <path
          d="M 18 150 C 96 112 162 135 230 126 C 300 116 356 118 430 143 C 486 163 476 222 438 260 C 398 301 383 356 370 400"
          fill="none"
          stroke={FOREGROUND}
          strokeDasharray="13 9"
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        <path
          d="M 18 150 C 4 187 34 216 82 234 C 130 252 166 275 170 320 C 173 350 171 380 171 400"
          fill="none"
          stroke={FOREGROUND}
          strokeDasharray="13 9"
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        <line stroke={MUTED} strokeWidth="1.3" x1="245" x2="396" y1="225" y2="133" />
        <line stroke={MUTED} strokeWidth="1.3" x1="245" x2="407" y1="225" y2="143" />
        <line stroke={MUTED} strokeWidth="1.3" x1="245" x2="411" y1="225" y2="157" />
        <polygon fill="var(--chart-5)" points="390,126 420,139 408,166 378,152" stroke={PROJECTION} strokeWidth="1.5" />
        <circle cx="245" cy="225" fill="var(--chart-5)" r="34" stroke={PROJECTION} strokeWidth="1.5" />
        <line stroke={PROJECTION} strokeWidth="2" x1="252" x2="377" y1="222" y2="183" />
        <SvgArrowhead angle={-17} baseX={377} baseY={183} color={PROJECTION} />
        <line stroke={FIELD} strokeWidth="2.2" x1="407" x2="446" y1="130" y2="91" />
        <SvgArrowhead angle={-45} baseX={446} baseY={91} color={FIELD} />
        <line stroke={PROJECTION} strokeWidth="1.8" x1="404" x2="432" y1="145" y2="119" />
        <SvgArrowhead angle={-43} baseX={432} baseY={119} color={PROJECTION} halfWidth={4} length={8} />
        <line stroke={PROJECTION} strokeWidth="1.5" x1="409" x2="425" y1="162" y2="178" />
        <SvgLabel fill={PROJECTION} textAnchor="start" x={62} y={34}>Circular</SvgLabel>
        <SvgLabel fill={PROJECTION} textAnchor="start" x={62} y={58}>surface, S′</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={96} y={292}>Arbitrary</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={96} y={316}>surface, S</SvgLabel>
        <SvgLabel fill={PROJECTION} textAnchor="start" x={282} y={258}>+q</SvgLabel>
        <SvgLabel fill={PROJECTION} x={315} y={220}>r</SvgLabel>
        <SvgLabel fill={FIELD} textAnchor="start" x={454} y={80}>E-field</SvgLabel>
        <SvgLabel fill={PROJECTION} x={444} y={114}>n̂</SvgLabel>
        <SvgLabel fill={PROJECTION} textAnchor="start" x={431} y={185}>dS′</SvgLabel>
        <path d="M 515 231 C 555 218 624 218 694 231" fill="none" stroke={FOREGROUND} strokeDasharray="8 7" strokeWidth="2" />
        <line stroke={MUTED} strokeWidth="1.2" x1="525" x2="594" y1="265" y2="221" />
        <line stroke={MUTED} strokeWidth="1.2" x1="540" x2="605" y1="283" y2="229" />
        <line stroke={PROJECTION} strokeDasharray="2 4" strokeWidth="2" x1="552" x2="682" y1="178" y2="302" />
        <line stroke={FOREGROUND} strokeWidth="10" x1="579" x2="630" y1="220" y2="220" />
        <line stroke="var(--chart-5)" strokeWidth="11" x1="592" x2="618" y1="207" y2="233" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="603" x2="603" y1="215" y2="133" />
        <SvgArrowhead angle={-90} baseX={603} baseY={133} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={FIELD} strokeWidth="2.2" x1="609" x2="657" y1="218" y2="163" />
        <SvgArrowhead angle={-41} baseX={657} baseY={163} color={FIELD} />
        <line stroke={PROJECTION} strokeWidth="2" x1="611" x2="642" y1="220" y2="182" />
        <SvgArrowhead angle={-51} baseX={642} baseY={182} color={PROJECTION} halfWidth={4} length={8} />
        <line stroke={FOREGROUND} strokeWidth="2" x1="570" x2="592" y1="172" y2="205" />
        <SvgArrowhead angle={56} baseX={592} baseY={205} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={PROJECTION} strokeWidth="2.4" x1="576" x2="591" y1="293" y2="245" />
        <SvgArrowhead angle={-73} baseX={591} baseY={245} color={PROJECTION} halfWidth={4} length={8} />
        <path d="M 610 161 A 38 38 0 0 1 630 188" fill="none" stroke={FOREGROUND} strokeWidth="1.5" />
        <SvgArrowhead angle={60} baseX={630} baseY={188} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={602} y={124}>n̂</SvgLabel>
        <SvgLabel fill={FIELD} textAnchor="start" x={662} y={158}>E-field</SvgLabel>
        <SvgLabel fill={PROJECTION} textAnchor="start" x={648} y={180}>n̂</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={557} y={165}>dS</SvgLabel>
        <SvgLabel fill={PROJECTION} textAnchor="start" x={548} y={321}>dS′</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={618} y={197}>θ</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={600} y={354}>2D projection</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: ElectricFluxGaussLawGeometryDiagram,
} satisfies PhysicsDiagramDefinition;
