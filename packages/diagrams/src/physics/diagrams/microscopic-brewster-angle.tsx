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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=77&figure=58",
  slug: "microscopic-brewster-angle",
  summary:
    "Induced dipoles at the Brewster angle radiate no reflected p-polarised field along their oscillation axis.",
  tags: ["Brewster angle", "Induced dipole", "Zero radiation", "P polarisation"],
  title: "Microscopic origin of the Brewster-angle zero",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-1)";
const POSITIVE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";

function rotatedEllipsePath(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  angleDegrees: number,
) {
  const angle = (angleDegrees * Math.PI) / 180;

  return Array.from({ length: 65 }, (_, index) => {
    const parameter = (2 * Math.PI * index) / 64;
    const localX = rx * Math.cos(parameter);
    const localY = ry * Math.sin(parameter);
    const x = cx + localX * Math.cos(angle) - localY * Math.sin(angle);
    const y = cy + localX * Math.sin(angle) + localY * Math.cos(angle);
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

function PolarisedAtom({ x, y }: { x: number; y: number }) {
  const axis = { x: 0.743, y: -0.669 };
  const positive = { x: x + 18 * axis.x, y: y + 18 * axis.y };
  const negative = { x: x - 18 * axis.x, y: y - 18 * axis.y };

  return (
    <g>
      <path
        d={rotatedEllipsePath(x, y, 50, 18, -42)}
        fill="none"
        stroke={FIELD}
        strokeWidth="2"
      />
      <path
        d={rotatedEllipsePath(x, y, 22, 42, -42)}
        fill="none"
        stroke={FIELD}
        strokeWidth="1.5"
      />
      <circle cx={positive.x} cy={positive.y} fill="var(--background)" r="14" stroke={POSITIVE} strokeWidth="1.5" />
      <g aria-label="positive charge">
        <line stroke={POSITIVE} strokeWidth="1.6" x1={positive.x - 5} x2={positive.x + 5} y1={positive.y} y2={positive.y} />
        <line stroke={POSITIVE} strokeWidth="1.6" x1={positive.x} x2={positive.x} y1={positive.y - 5} y2={positive.y + 5} />
      </g>
      <circle cx={negative.x} cy={negative.y} fill="var(--background)" r="14" stroke={FOREGROUND} strokeWidth="1.5" />
      <g aria-label="negative charge">
        <line stroke={FOREGROUND} strokeWidth="1.6" x1={negative.x - 5} x2={negative.x + 5} y1={negative.y} y2={negative.y} />
      </g>
      <line
        stroke={FIELD}
        strokeWidth="1.5"
        x1={x - 14 * axis.x}
        x2={x + 35 * axis.x}
        y1={y - 14 * axis.y + 25}
        y2={y + 35 * axis.y + 25}
      />
      <SvgArrowhead
        angle={-42}
        baseX={x + 35 * axis.x}
        baseY={y + 35 * axis.y + 25}
        color={FIELD}
        halfWidth={3}
        length={6}
      />
    </g>
  );
}

export function MicroscopicBrewsterAngleDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 440">
        <rect fill="transparent" height="440" width="720" />
        <rect fill="var(--chart-4)" fillOpacity="0.8" height="280" stroke={FOREGROUND} strokeWidth="1.5" width="390" x="185" y="35" />
        <line stroke={FOREGROUND} strokeDasharray="3 4" strokeWidth="1.3" x1="185" x2="575" y1="315" y2="315" />
        <line stroke={FOREGROUND} strokeDasharray="3 4" strokeWidth="1.3" x1="320" x2="320" y1="45" y2="420" />
        <SvgLabel fill={FOREGROUND} x={118} y={82}>Medium 2</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={118} y={106}>Refractive index: n₂</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={490} y={372}>Medium 1</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={490} y={396}>Refractive index: n₁</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={175} y={307}>Interface</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={612} y={205}>Plane of incidence</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="2" x1="408" x2="325" y1="414" y2="321" />
        <SvgArrowhead angle={-132} baseX={325} baseY={321} color={FOREGROUND} halfWidth={4} length={8} />
        <SvgLabel fill={FOREGROUND} x={411} y={370}>E₀ᵢ</SvgLabel>
        <line stroke={FOREGROUND} strokeDasharray="7 5" strokeWidth="1.8" x1="320" x2="224" y1="315" y2="414" />
        <SvgArrowhead angle={134} baseX={224} baseY={414} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={244} y={404}>E₀ᵣ = 0</SvgLabel>

        <line stroke={FOREGROUND} strokeDasharray="5 4" strokeWidth="1.7" x1="320" x2="244" y1="315" y2="88" />
        <SvgArrowhead angle={-109} baseX={244} baseY={88} color={FOREGROUND} halfWidth={3.5} length={7} />
        <line stroke={FOREGROUND} strokeWidth="2" x1="320" x2="520" y1="315" y2="105" />
        <SvgArrowhead angle={-46} baseX={520} baseY={105} color={FOREGROUND} halfWidth={4} length={8} />
        <SvgLabel fill={FOREGROUND} x={442} y={174}>Zero radiation</SvgLabel>

        <path d="M 320 365 A 50 50 0 0 1 354 352" fill="none" stroke={FOREGROUND} strokeWidth="1.4" />
        <SvgLabel fill={FOREGROUND} x={360} y={371}>θᵢ = θᴮ</SvgLabel>
        <path d="M 320 266 A 49 49 0 0 0 291 275" fill="none" stroke={FOREGROUND} strokeWidth="1.4" />
        <SvgLabel fill={FOREGROUND} x={278} y={257}>θₜ</SvgLabel>
        <path d="M 320 365 A 50 50 0 0 0 286 352" fill="none" stroke={FOREGROUND} strokeWidth="1.4" />
        <SvgLabel fill={FOREGROUND} x={268} y={371}>θᵣ = θᴮ</SvgLabel>

        <PolarisedAtom x={355} y={110} />
        <PolarisedAtom x={485} y={118} />
        <PolarisedAtom x={520} y={238} />
        <SvgLabel fill={FOREGROUND} x={378} y={231}>θᵢ + θₜ = 90°</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: MicroscopicBrewsterAngleDiagram,
} satisfies PhysicsDiagramDefinition;
