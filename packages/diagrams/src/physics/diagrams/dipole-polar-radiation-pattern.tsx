import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "graph",
  referenceImage:
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=85&figure=62-right",
  slug: "dipole-polar-radiation-pattern",
  summary:
    "Polar cross-section of the normalized sin-squared dipole power pattern, including maximum and half-power directions.",
  tags: ["Dipole radiation", "Polar plot", "Half-power beamwidth", "Radiation pattern"],
  title: "Polar dipole-radiation pattern",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const PATTERN = "var(--foreground)";
const GUIDE = "var(--muted-foreground)";
const EMPHASIS = "var(--destructive)";
const origin = { x: 165, y: 190 } as const;
const scale = 145;
const polarAngles = [
  { angle: 0, label: "0°" },
  { angle: 30, label: "30°" },
  { angle: 60, label: "60°" },
  { angle: 90, label: "90°" },
  { angle: 120, label: "120°" },
  { angle: 150, label: "150°" },
  { angle: 180, label: "180°" },
] as const;

const patternPath = Array.from({ length: 181 }, (_, index) => {
  const theta = (Math.PI * index) / 180;
  const radius = scale * Math.sin(theta) ** 2;
  const x = origin.x + radius * Math.sin(theta);
  const y = origin.y - radius * Math.cos(theta);
  return `${index === 0 ? "M" : "L"} ${x} ${y}`;
}).join(" ");

function radialPoint(angleDegrees: number, radius: number) {
  const theta = (angleDegrees * Math.PI) / 180;
  return {
    x: origin.x + radius * Math.sin(theta),
    y: origin.y - radius * Math.cos(theta),
  };
}

export function DipolePolarRadiationPatternDiagram({
  className,
  showCaption = true,
  style,
}: PhysicsDiagramProps) {
  const halfPowerUpper = radialPoint(45, scale / 2);
  const halfPowerLower = radialPoint(135, scale / 2);

  return (
    <PhysicsDiagramFrame
      caption={showCaption ? metadata.summary : undefined}
      className={className}
      style={{ maxWidth: 560, ...style }}
      title={metadata.title}
    >
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 520 380">
        <rect fill="transparent" height="380" width="520" />

        {[scale / 4, scale / 2, (3 * scale) / 4, scale].map((radius) => (
          <path
            d={`M ${origin.x} ${origin.y - radius} A ${radius} ${radius} 0 0 1 ${origin.x} ${origin.y + radius}`}
            fill="none"
            key={radius}
            stroke={GUIDE}
            strokeOpacity="0.55"
            strokeWidth="1"
          />
        ))}
        {polarAngles.map(({ angle, label }) => {
          const endpoint = radialPoint(angle, scale);
          return (
            <g key={angle}>
              <line stroke={GUIDE} strokeOpacity="0.55" strokeWidth="1" x1={origin.x} x2={endpoint.x} y1={origin.y} y2={endpoint.y} />
              <SvgLabel fill={GUIDE} x={endpoint.x + 14} y={endpoint.y + (angle === 0 ? -4 : angle === 180 ? 12 : 4)}>{label}</SvgLabel>
            </g>
          );
        })}

        <path d={patternPath} fill="none" stroke={PATTERN} strokeWidth="3" />
        <line stroke={EMPHASIS} strokeWidth="1.8" x1={origin.x} x2={origin.x + scale} y1={origin.y} y2={origin.y} />
        <SvgArrowhead angle={0} baseX={origin.x + scale} baseY={origin.y} color={EMPHASIS} halfWidth={3.5} length={7} />
        <SvgLabel fill={EMPHASIS} textAnchor="start" x={origin.x + scale + 12} y={origin.y - 14}>P max</SvgLabel>

        <line stroke={EMPHASIS} strokeWidth="1.5" x1={origin.x} x2={halfPowerUpper.x} y1={origin.y} y2={halfPowerUpper.y} />
        <line stroke={EMPHASIS} strokeWidth="1.5" x1={origin.x} x2={halfPowerLower.x} y1={origin.y} y2={halfPowerLower.y} />
        <SvgLabel fill={EMPHASIS} x={halfPowerUpper.x + 43} y={halfPowerUpper.y - 8}>½ P max</SvgLabel>
        <SvgLabel fill={EMPHASIS} x={halfPowerLower.x + 43} y={halfPowerLower.y + 16}>½ P max</SvgLabel>
        <path
          d={`M ${radialPoint(45, 170).x} ${radialPoint(45, 170).y} A 170 170 0 0 1 ${radialPoint(135, 170).x} ${radialPoint(135, 170).y}`}
          fill="none"
          stroke={EMPHASIS}
          strokeWidth="1.6"
        />
        <SvgLabel fill={EMPHASIS} textAnchor="start" x={405} y={origin.y + 5}>half-power width</SvgLabel>
        <circle cx={origin.x} cy={origin.y} fill={PATTERN} r="3.5" />
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: DipolePolarRadiationPatternDiagram,
} satisfies PhysicsDiagramDefinition;
