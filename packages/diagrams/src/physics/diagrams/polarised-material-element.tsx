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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=54&figure=41",
  slug: "polarised-material-element",
  summary:
    "A polarised dielectric element with displaced bound-charge faces, dimensions, field directions, and surface area.",
  tags: ["Polarisation", "Bound charge", "Surface charge", "Dielectric"],
  title: "Bound charge on a polarised material element",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-1)";
const POSITIVE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";

function HorizontalArrow({ color, left, right, y }: { color: string; left: number; right: number; y: number }) {
  const angle = right >= left ? 0 : 180;

  return (
    <g>
      <line stroke={color} strokeWidth="2" x1={left} x2={right} y1={y} y2={y} />
      <SvgArrowhead angle={angle} baseX={right} baseY={y} color={color} halfWidth={3.5} length={7} />
    </g>
  );
}

export function PolarisedMaterialElementDiagram({
  className,
  showCaption = true,
  style,
}: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame
      caption={showCaption ? metadata.summary : undefined}
      className={className}
      style={{ maxWidth: 760, ...style }}
      title={metadata.title}
    >
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 500">
        <rect fill="transparent" height="500" width="760" />

        <HorizontalArrow color={FIELD} left={30} right={190} y={92} />
        <SvgLabel fill={FOREGROUND} x={110} y={77}>E applied</SvgLabel>
        <HorizontalArrow color={FIELD} left={190} right={85} y={137} />
        <SvgLabel fill={FOREGROUND} x={140} y={122}>E dielectric</SvgLabel>
        <HorizontalArrow color={FIELD} left={30} right={140} y={182} />
        <SvgLabel fill={FOREGROUND} x={88} y={167}>E inside dielectric</SvgLabel>

        <polygon fill="var(--chart-5)" fillOpacity="0.75" points="265,155 475,155 475,355 265,355" stroke={FOREGROUND} strokeWidth="1.7" />
        <polygon fill="var(--chart-5)" fillOpacity="0.72" points="265,155 310,120 520,120 475,155" stroke={FOREGROUND} strokeWidth="1.7" />
        <polygon fill="var(--chart-5)" fillOpacity="0.45" points="475,155 520,120 520,320 475,355" stroke={FOREGROUND} strokeWidth="1.7" />
        <polygon fill={FOREGROUND} points="250,166 265,155 265,355 250,366" />

        <line stroke={FOREGROUND} strokeDasharray="3 3" strokeWidth="1.4" x1="310" x2="310" y1="120" y2="320" />
        <line stroke={FOREGROUND} strokeDasharray="3 3" strokeWidth="1.4" x1="310" x2="475" y1="320" y2="320" />
        <line stroke={FOREGROUND} strokeDasharray="3 3" strokeWidth="1.4" x1="265" x2="310" y1="355" y2="320" />

        <SvgLabel fill={FOREGROUND} x={280} y={37}>Slab: -ve charge</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={280} y={61}>Q(-ve) = -P(x)ΔyΔz</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="280" x2="258" y1="70" y2="146" />
        <SvgArrowhead angle={106} baseX={258} baseY={146} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={405} y={37}>Charge</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={405} y={61}>neutral</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="405" x2="405" y1="70" y2="108" />
        <SvgArrowhead angle={90} baseX={405} baseY={108} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={POSITIVE} x={565} y={37}>Slab: +ve charge</SvgLabel>
        <SvgLabel fill={POSITIVE} x={565} y={61}>Q(+ve) = P(x+Δx)ΔyΔz</SvgLabel>
        <line stroke={POSITIVE} strokeWidth="1.5" x1="565" x2="514" y1="70" y2="108" />
        <SvgArrowhead angle={143} baseX={514} baseY={108} color={POSITIVE} halfWidth={3} length={6} />

        <line stroke={FOREGROUND} strokeWidth="1.4" x1="250" x2="265" y1="145" y2="145" />
        <SvgArrowhead angle={180} baseX={250} baseY={145} color={FOREGROUND} halfWidth={2.5} length={5} />
        <SvgArrowhead angle={0} baseX={265} baseY={145} color={FOREGROUND} halfWidth={2.5} length={5} />
        <SvgLabel fill={FOREGROUND} x={257} y={132}>d</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="475" x2="492" y1="145" y2="132" />
        <SvgArrowhead angle={143} baseX={475} baseY={145} color={FOREGROUND} halfWidth={2.5} length={5} />
        <SvgArrowhead angle={-37} baseX={492} baseY={132} color={FOREGROUND} halfWidth={2.5} length={5} />
        <SvgLabel fill={FOREGROUND} x={505} y={137}>d</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="1.5" x1="265" x2="475" y1="375" y2="375" />
        <SvgArrowhead angle={180} baseX={265} baseY={375} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgArrowhead angle={0} baseX={475} baseY={375} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={370} y={399}>Δx</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="478" x2="516" y1="151" y2="122" />
        <SvgArrowhead angle={143} baseX={478} baseY={151} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgArrowhead angle={-37} baseX={516} baseY={122} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={470} y={126}>Δy</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="442" x2="442" y1="168" y2="341" />
        <SvgArrowhead angle={-90} baseX={442} baseY={168} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgArrowhead angle={90} baseX={442} baseY={341} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={414} y={259}>Δz</SvgLabel>

        <SvgLabel fill={POSITIVE} x={505} y={181}>+</SvgLabel>
        <SvgLabel fill={POSITIVE} x={505} y={231}>+</SvgLabel>
        <SvgLabel fill={POSITIVE} x={505} y={281}>+</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={245} y={212}>-</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={245} y={262}>-</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={245} y={312}>-</SvgLabel>

        <HorizontalArrow color={FOREGROUND} left={545} right={690} y={192} />
        <SvgLabel fill={FOREGROUND} x={618} y={161}>Direction of</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={618} y={184}>P and E</SvgLabel>
        <HorizontalArrow color={FOREGROUND} left={690} right={540} y={280} />
        <SvgLabel fill={FOREGROUND} x={620} y={264}>Area: S</SvgLabel>

        <circle cx="265" cy="355" fill={FOREGROUND} r="5" />
        <circle cx="475" cy="355" fill={FOREGROUND} r="5" />
        <circle cx="265" cy="420" fill={FOREGROUND} r="5" />
        <line stroke={FOREGROUND} strokeWidth="1.3" x1="265" x2="265" y1="355" y2="420" />
        <line stroke={FOREGROUND} strokeWidth="1.3" x1="65" x2="265" y1="450" y2="420" />
        <SvgLabel fill={FOREGROUND} x={287} y={345}>(x, y, z)</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={490} y={363}>(x+Δx, y, z)</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={285} y={431}>(x, y, 0)</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="1.7" x1="65" x2="235" y1="450" y2="450" />
        <SvgArrowhead angle={0} baseX={235} baseY={450} color={FOREGROUND} halfWidth={3.5} length={7} />
        <line stroke={FOREGROUND} strokeWidth="1.7" x1="65" x2="65" y1="450" y2="320" />
        <SvgArrowhead angle={-90} baseX={65} baseY={320} color={FOREGROUND} halfWidth={3.5} length={7} />
        <line stroke={FOREGROUND} strokeWidth="1.7" x1="65" x2="145" y1="450" y2="360" />
        <SvgArrowhead angle={-48} baseX={145} baseY={360} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={240} y={469}>x-axis</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={38} y={322}>z-axis</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={150} y={350}>y-axis</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: PolarisedMaterialElementDiagram,
} satisfies PhysicsDiagramDefinition;
