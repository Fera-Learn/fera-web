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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=72&figure=55-top",
  slug: "parallel-polarisation-interface",
  summary:
    "The source convention for p-polarised incident, reflected, and transmitted waves at an interface.",
  tags: ["P polarisation", "Fresnel equation", "Plane of incidence", "Signed amplitude"],
  title: "Parallel-polarisation convention at an interface",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-1)";
const FOREGROUND = "var(--foreground)";

function Vector({
  color = FOREGROUND,
  label,
  x1,
  x2,
  y1,
  y2,
}: {
  color?: string;
  label?: string;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}) {
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  return (
    <g>
      <line stroke={color} strokeWidth="1.8" x1={x1} x2={x2} y1={y1} y2={y2} />
      <SvgArrowhead angle={angle} baseX={x2} baseY={y2} color={color} halfWidth={3.5} length={7} />
      {label ? <SvgLabel fill={color} x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 10}>{label}</SvgLabel> : null}
    </g>
  );
}

export function ParallelPolarisationInterfaceDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 430">
        <rect fill="transparent" height="430" width="720" />
        <rect fill="var(--chart-4)" fillOpacity="0.75" height="170" stroke={FOREGROUND} strokeWidth="1.5" width="390" x="180" y="35" />
        <rect fill="var(--background)" height="180" stroke={FOREGROUND} strokeWidth="1.5" width="390" x="180" y="205" />
        <rect fill="var(--chart-4)" fillOpacity="0.35" height="14" width="390" x="180" y="198" />
        <line stroke={FOREGROUND} strokeDasharray="3 4" strokeWidth="1.2" x1="180" x2="570" y1="205" y2="205" />
        <line stroke={FOREGROUND} strokeWidth="1.3" x1="375" x2="375" y1="48" y2="373" />

        <SvgLabel fill={FOREGROUND} x={245} y={63}>Medium 2</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={245} y={87}>Refractive index: n₂</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={245} y={276}>Medium 1</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={245} y={300}>Refractive index: n₁</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={170} y={196}>Surface</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={650} y={210}>Plane of incidence</SvgLabel>

        <Vector label="kᵢ" x1={235} x2={370} y1={365} y2={211} />
        <Vector label="kᵣ" x1={370} x2={515} y1={211} y2={365} />
        <Vector label="kₜ" x1={380} x2={430} y1={196} y2={56} />

        <Vector color={FIELD} label="P₀ᵢ" x1={245} x2={295} y1={306} y2={351} />
        <Vector color={FIELD} x1={245} x2={295} y1={306} y2={306} />
        <SvgLabel fill={FIELD} x={315} y={298}>P₀ᵢ cos θᵢ</SvgLabel>
        <Vector color={FIELD} label="P₀ᵣ" x1={480} x2={530} y1={326} y2={281} />
        <Vector color={FIELD} x1={480} x2={530} y1={326} y2={326} />
        <SvgLabel fill={FIELD} x={544} y={348}>P₀ᵣ cos θᵣ</SvgLabel>
        <Vector color={FIELD} label="P₀ₜ" x1={420} x2={475} y1={116} y2={136} />
        <Vector color={FIELD} x1={420} x2={475} y1={116} y2={116} />
        <SvgLabel fill={FIELD} x={500} y={106}>P₀ₜ cos θₜ</SvgLabel>

        <path d="M 375 252 A 47 47 0 0 0 342 238" fill="none" stroke={FOREGROUND} strokeWidth="1.4" />
        <SvgArrowhead angle={205} baseX={342} baseY={238} color={FOREGROUND} halfWidth={3} length={6} />
        <path d="M 375 252 A 47 47 0 0 1 408 238" fill="none" stroke={FOREGROUND} strokeWidth="1.4" />
        <SvgArrowhead angle={-25} baseX={408} baseY={238} color={FOREGROUND} halfWidth={3} length={6} />
        <path d="M 375 161 A 44 44 0 0 1 391 164" fill="none" stroke={FOREGROUND} strokeWidth="1.4" />
        <SvgArrowhead angle={25} baseX={391} baseY={164} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={338} y={265}>θᵢ</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={412} y={265}>θᵣ</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={397} y={151}>θₜ</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="1.5" x1="92" x2="140" y1="355" y2="355" />
        <SvgArrowhead angle={0} baseX={140} baseY={355} color={FOREGROUND} halfWidth={3} length={6} />
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="92" x2="92" y1="355" y2="307" />
        <SvgArrowhead angle={-90} baseX={92} baseY={307} color={FOREGROUND} halfWidth={3} length={6} />
        <circle cx="92" cy="355" fill={FOREGROUND} r="6" />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={145} y={360}>x-axis</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={92} y={294}>y-axis</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={92} y={382}>z-axis</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: ParallelPolarisationInterfaceDiagram,
} satisfies PhysicsDiagramDefinition;
