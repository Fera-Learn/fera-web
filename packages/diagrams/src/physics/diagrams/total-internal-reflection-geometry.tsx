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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=75&figure=57-top",
  slug: "total-internal-reflection-geometry",
  summary:
    "Rays leaving water for air at transmission, Brewster, critical, and total-internal-reflection angles.",
  tags: ["Critical angle", "Total internal reflection", "Brewster angle", "Refraction"],
  title: "From transmission to total internal reflection",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const RAY = "var(--foreground)";
const FIELD = "var(--chart-1)";

function Ray({
  dashed = false,
  x1,
  x2,
  y1,
  y2,
}: {
  dashed?: boolean;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}) {
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

  return (
    <g>
      <line
        stroke={RAY}
        strokeDasharray={dashed ? "7 5" : undefined}
        strokeWidth="2"
        x1={x1}
        x2={x2}
        y1={y1}
        y2={y2}
      />
      <SvgArrowhead angle={angle} baseX={x2} baseY={y2} color={RAY} halfWidth={3.5} length={7} />
    </g>
  );
}

const source = { x: 95, y: 345 } as const;

export function TotalInternalReflectionGeometryDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 430">
        <rect fill="transparent" height="430" width="760" />
        <rect fill="var(--chart-4)" fillOpacity="0.8" height="195" width="610" x="75" y="190" />
        <line stroke={RAY} strokeWidth="1.6" x1="75" x2="685" y1="190" y2="190" />
        <SvgLabel fill={RAY} x={637} y={166}>Air</SvgLabel>
        <SvgLabel fill={RAY} x={637} y={224}>Water</SvgLabel>

        <circle cx={source.x} cy={source.y} fill={RAY} r="5" />
        <line stroke={RAY} strokeWidth="1.5" x1={source.x} x2={source.x} y1="355" y2="75" />
        <SvgArrowhead angle={-90} baseX={source.x} baseY={75} color={RAY} halfWidth={3.5} length={7} />

        <Ray x1={source.x} x2={205} y1={source.y} y2={190} />
        <Ray x1={205} x2={305} y1={190} y2={75} />
        <Ray x1={205} x2={270} y1={190} y2={278} />
        <line stroke={RAY} strokeDasharray="4 4" strokeWidth="1.2" x1="205" x2="205" y1="145" y2="235" />
        <path d="M 205 224 A 34 34 0 0 0 185 218" fill="none" stroke={RAY} strokeWidth="1.3" />
        <path d="M 205 156 A 34 34 0 0 1 228 165" fill="none" stroke={RAY} strokeWidth="1.3" />
        <SvgLabel fill={RAY} x={185} y={247}>θᵢ</SvgLabel>
        <SvgLabel fill={RAY} x={238} y={237}>θᵣ</SvgLabel>
        <SvgLabel fill={RAY} x={228} y={147}>θₜ</SvgLabel>

        <Ray x1={source.x} x2={315} y1={source.y} y2={190} />
        <Ray x1={315} x2={420} y1={190} y2={124} />
        <line stroke={RAY} strokeDasharray="4 4" strokeWidth="1.2" x1="315" x2="315" y1="150" y2="226" />
        <SvgLabel fill={RAY} x={290} y={218}>θᴮ</SvgLabel>
        <line stroke={FIELD} strokeWidth="2" x1="330" x2="360" y1="166" y2="196" />
        <SvgArrowhead angle={45} baseX={360} baseY={196} color={FIELD} halfWidth={3.5} length={7} />
        <SvgLabel fill={FIELD} x={349} y={154}>E</SvgLabel>

        <Ray x1={source.x} x2={410} y1={source.y} y2={190} />
        <Ray x1={410} x2={530} y1={190} y2={190} />
        <line stroke={RAY} strokeDasharray="4 4" strokeWidth="1.2" x1="410" x2="410" y1="150" y2="226" />
        <SvgLabel fill={RAY} x={389} y={219}>θ꜀</SvgLabel>

        <Ray x1={source.x} x2={520} y1={source.y} y2={190} />
        <Ray dashed x1={520} x2={690} y1={190} y2={330} />
        <line stroke={RAY} strokeDasharray="4 4" strokeWidth="1.2" x1="520" x2="520" y1="150" y2="226" />
        <SvgLabel fill={RAY} x={430} y={309}>Totally internally reflected wave</SvgLabel>

        <SvgLabel fill={RAY} x={500} y={46}>θₜ: angle of transmission</SvgLabel>
        <SvgLabel fill={RAY} x={500} y={70}>θᵢ: angle of incidence</SvgLabel>
        <SvgLabel fill={RAY} x={500} y={94}>θᵣ: angle of reflection</SvgLabel>
        <SvgLabel fill={RAY} x={500} y={118}>θᴮ: Brewster angle (36.8°)</SvgLabel>
        <SvgLabel fill={RAY} x={500} y={142}>θ꜀: critical angle (48.6°)</SvgLabel>
        <SvgLabel fill={RAY} x={555} y={376}>nₜ/nᵢ = nAir/nWater = 3/4</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: TotalInternalReflectionGeometryDiagram,
} satisfies PhysicsDiagramDefinition;
