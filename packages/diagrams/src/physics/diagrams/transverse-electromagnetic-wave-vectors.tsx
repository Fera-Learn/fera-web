import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "wave",
  referenceImage:
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=26&figure=20",
  slug: "transverse-electromagnetic-wave-vectors",
  summary:
    "Mutually perpendicular electric and magnetic fields propagating along the direction of their cross product.",
  tags: ["Electromagnetic wave", "Transverse field", "Wavevector", "Polarisation"],
  title: "Vector structure of a transverse electromagnetic wave",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const ELECTRIC = "var(--chart-1)";
const MAGNETIC = "var(--chart-2)";
const FOREGROUND = "var(--foreground)";

export function TransverseElectromagneticWaveVectorsDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 470">
        <rect fill="transparent" height="470" width="720" />

        <path d="M 105 250 C 125 125 188 128 220 225 L 105 250 Z" fill={ELECTRIC} />
        <path d="M 220 225 C 245 330 300 304 330 200 L 220 225 Z" fill={ELECTRIC} />
        <path d="M 330 200 C 355 85 410 91 440 175 L 330 200 Z" fill={ELECTRIC} />
        <path d="M 440 175 C 465 272 520 244 560 145 L 440 175 Z" fill={ELECTRIC} />

        <path d="M 105 250 C 113 360 178 348 220 225 L 105 250 Z" fill={MAGNETIC} />
        <path d="M 220 225 C 237 95 300 84 330 200 L 220 225 Z" fill={MAGNETIC} />
        <path d="M 330 200 C 342 320 410 286 440 175 L 330 200 Z" fill={MAGNETIC} />
        <path d="M 440 175 C 452 34 525 30 560 145 L 440 175 Z" fill={MAGNETIC} />

        <line stroke={FOREGROUND} strokeWidth="2.2" x1="105" x2="560" y1="250" y2="145" />
        <line stroke={FOREGROUND} strokeWidth="1.8" x1="80" x2="80" y1="335" y2="125" />
        <SvgArrowhead angle={-90} baseX={80} baseY={125} color={FOREGROUND} halfWidth={4} length={8} />
        <SvgArrowhead angle={90} baseX={80} baseY={335} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="80" x2="98" y1="180" y2="176" />
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="80" x2="98" y1="306" y2="302" />

        <SvgLabel fill={ELECTRIC} textAnchor="start" x={64} y={85}>E - field</SvgLabel>
        <SvgLabel fill={MAGNETIC} textAnchor="start" x={44} y={370}>B - field</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={45} y={181}>E₀</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={45} y={307}>B₀</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="2" x1="190" x2="190" y1="405" y2="344" />
        <SvgArrowhead angle={-90} baseX={190} baseY={344} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={FOREGROUND} strokeWidth="2" x1="190" x2="275" y1="405" y2="405" />
        <SvgArrowhead angle={0} baseX={275} baseY={405} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={FOREGROUND} strokeWidth="2" x1="190" x2="145" y1="405" y2="449" />
        <SvgArrowhead angle={136} baseX={145} baseY={449} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={FOREGROUND} strokeWidth="2" x1="190" x2="323" y1="405" y2="213" />
        <SvgArrowhead angle={-55} baseX={323} baseY={213} color={FOREGROUND} halfWidth={4} length={8} />
        <SvgLabel fill={FOREGROUND} x={178} y={425}>O</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={165} y={334}>z-axis</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={284} y={420}>y-axis</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={135} y={454}>x-axis</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={292} y={292}>r</SvgLabel>

        <SvgLabel fill={FOREGROUND} x={442} y={34}>kᵣₑₐₗ :</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={456} y={72}>Direction of propagation</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.8" x1="515" x2="574" y1="43" y2="29" />
        <SvgArrowhead angle={-13} baseX={574} baseY={29} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={520} y={304}>E × B // kᵣₑₐₗ</SvgLabel>

        <rect fill="none" height="112" stroke={FOREGROUND} strokeWidth="1.5" width="188" x="510" y="342" />
        <line stroke={FOREGROUND} strokeWidth="1.6" x1="548" x2="665" y1="414" y2="387" />
        <SvgArrowhead angle={-13} baseX={665} baseY={387} color={FOREGROUND} halfWidth={3.5} length={7} />
        <ellipse cx="570" cy="408" fill={ELECTRIC} rx="10" ry="24" />
        <ellipse cx="594" cy="402" fill={MAGNETIC} rx="10" ry="24" />
        <ellipse cx="618" cy="397" fill={ELECTRIC} rx="10" ry="24" />
        <ellipse cx="642" cy="391" fill={MAGNETIC} rx="10" ry="24" />
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="544" x2="544" y1="426" y2="376" />
        <SvgArrowhead angle={-90} baseX={544} baseY={376} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgArrowhead angle={90} baseX={544} baseY={426} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={526} y={381}>E₀</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={526} y={430}>B₀</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={548} y={438}>O</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={659} y={379}>x-axis</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: TransverseElectromagneticWaveVectorsDiagram,
} satisfies PhysicsDiagramDefinition;
