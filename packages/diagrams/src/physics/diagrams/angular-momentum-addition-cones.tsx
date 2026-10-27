import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "interaction",
  referenceImage: "main.pdf#pages=68-69&figures=12-13",
  slug: "angular-momentum-addition-cones",
  summary:
    "Vector-model projection cones and the addition of orbital and spin angular momentum to form an allowed total J.",
  tags: ["Angular momentum addition", "Vector model", "Projection cone", "Total angular momentum"],
  title: "Adding angular momentum in the vector model",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";
const TOTAL = "var(--chart-5)";
const ORBITAL = "var(--chart-1)";
const SPIN = "var(--chart-2)";

function VectorArrow({
  color,
  label,
  labelX,
  labelY,
  x1,
  x2,
  y1,
  y2,
}: {
  color: string;
  label: string;
  labelX: number;
  labelY: number;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}) {
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  return (
    <g>
      <line stroke={FOREGROUND} strokeWidth="4.8" x1={x1} x2={x2} y1={y1} y2={y2} />
      <line stroke={color} strokeWidth="2.4" x1={x1} x2={x2} y1={y1} y2={y2} />
      <SvgArrowhead angle={angle} baseX={x2} baseY={y2} color={FOREGROUND} halfWidth={5} length={9} />
      <SvgArrowhead angle={angle} baseX={x2} baseY={y2} color={color} halfWidth={4} length={8} />
      <SvgLabel fill={FOREGROUND} x={labelX} y={labelY}>{label}</SvgLabel>
    </g>
  );
}

export function AngularMomentumAdditionConesDiagram({
  className,
  showCaption = true,
  style,
}: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame
      caption={showCaption ? metadata.summary : undefined}
      className={className}
      style={{ maxWidth: 780, ...style }}
      title={metadata.title}
    >
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 440">
        <rect fill="transparent" height="440" width="760" />

        <SvgLabel fill={FOREGROUND} x={190} y={30}>projection cones</SvgLabel>
        <line stroke={FOREGROUND} strokeDasharray="6 5" strokeWidth="1.4" x1="190" x2="190" y1="390" y2="48" />
        <SvgArrowhead angle={-90} baseX={190} baseY={48} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={207} y={55}>z</SvgLabel>

        <path d="M 190 370 L 105 132 L 275 132 Z" fill={ORBITAL} fillOpacity="0.16" stroke={ORBITAL} strokeWidth="1.5" />
        <ellipse cx="190" cy="132" fill={ORBITAL} fillOpacity="0.2" rx="85" ry="20" stroke={ORBITAL} strokeWidth="1.8" />
        <path d="M 190 370 L 135 240 L 245 240 Z" fill={SPIN} fillOpacity="0.17" stroke={SPIN} strokeWidth="1.5" />
        <ellipse cx="190" cy="240" fill={SPIN} fillOpacity="0.22" rx="55" ry="15" stroke={SPIN} strokeWidth="1.8" />
        <VectorArrow color={TOTAL} label="J" labelX={208} labelY={88} x1={190} x2={190} y1={370} y2={68} />
        <VectorArrow color={ORBITAL} label="L" labelX={269} labelY={149} x1={190} x2={263} y1={370} y2={116} />
        <VectorArrow color={SPIN} label="S" labelX={126} labelY={252} x1={190} x2={130} y1={370} y2={228} />
        <SvgLabel fill={FOREGROUND} x={190} y={413}>J = L + S</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={190} y={431}>|J| = √j(j+1) ℏ</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="1.2" x1="355" x2="355" y1="35" y2="410" />
        <SvgLabel fill={FOREGROUND} x={555} y={30}>one allowed vector addition</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.6" x1="500" x2="500" y1="370" y2="62" />
        <SvgArrowhead angle={-90} baseX={500} baseY={62} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={517} y={67}>Jz</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.6" x1="500" x2="688" y1="370" y2="400" />
        <SvgArrowhead angle={9} baseX={688} baseY={400} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={703} y={408}>Jx</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.6" x1="500" x2="690" y1="370" y2="300" />
        <SvgArrowhead angle={-20} baseX={690} baseY={300} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={706} y={302}>Jy</SvgLabel>

        <path d="M 500 370 L 430 165 Q 555 118 625 190 Z" fill={TOTAL} fillOpacity="0.3" stroke={TOTAL} strokeWidth="1.6" />
        <ellipse cx="528" cy="165" fill={TOTAL} fillOpacity="0.25" rx="100" ry="27" stroke={TOTAL} strokeWidth="1.6" />
        <path d="M 500 370 L 548 220 Q 632 185 676 225 Z" fill={SPIN} fillOpacity="0.3" stroke={SPIN} strokeWidth="1.6" />
        <ellipse cx="610" cy="220" fill={SPIN} fillOpacity="0.25" rx="66" ry="22" stroke={SPIN} strokeWidth="1.6" />
        <path d="M 500 370 L 452 245 Q 565 200 628 262 Z" fill={ORBITAL} fillOpacity="0.27" stroke={ORBITAL} strokeWidth="1.6" />
        <ellipse cx="540" cy="245" fill={ORBITAL} fillOpacity="0.22" rx="90" ry="24" stroke={ORBITAL} strokeWidth="1.6" />

        <VectorArrow color={ORBITAL} label="L" labelX={620} labelY={264} x1={500} x2={615} y1={370} y2={244} />
        <VectorArrow color={SPIN} label="S" labelX={650} labelY={188} x1={615} x2={565} y1={244} y2={155} />
        <VectorArrow color={TOTAL} label="J = L + S" labelX={594} labelY={112} x1={500} x2={565} y1={370} y2={155} />
        <line stroke={TOTAL} strokeDasharray="5 4" strokeWidth="1.4" x1="500" x2="565" y1="155" y2="155" />
        <SvgLabel fill={FOREGROUND} x={470} y={148}>m_j ℏ</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: AngularMomentumAdditionConesDiagram,
} satisfies PhysicsDiagramDefinition;
