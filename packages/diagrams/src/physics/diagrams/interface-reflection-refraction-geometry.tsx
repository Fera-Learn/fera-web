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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=69&figure=54",
  slug: "interface-reflection-refraction-geometry",
  summary:
    "Incident, reflected, and transmitted plane waves meeting one interface in a common plane of incidence.",
  tags: ["Reflection", "Refraction", "Snell law", "Phase matching"],
  title: "Reflection and refraction at a plane interface",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const WAVE = "var(--chart-5)";
const INTERFACE = "var(--chart-4)";
const FOREGROUND = "var(--foreground)";

type Point = { x: number; y: number };

function wavePath(start: Point, end: Point, amplitude = 9, cycles = 5) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.hypot(dx, dy);
  const nx = -dy / length;
  const ny = dx / length;

  return Array.from({ length: 81 }, (_, index) => {
    const t = index / 80;
    const offset = amplitude * Math.sin(2 * Math.PI * cycles * t);
    const x = start.x + dx * t + nx * offset;
    const y = start.y + dy * t + ny * offset;
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

function Ray({ end, label, start }: { end: Point; label: string; start: Point }) {
  const angle = (Math.atan2(end.y - start.y, end.x - start.x) * 180) / Math.PI;
  return (
    <g>
      <line stroke={FOREGROUND} strokeWidth="7" x1={start.x} x2={end.x} y1={start.y} y2={end.y} />
      <SvgArrowhead angle={angle} baseX={end.x} baseY={end.y} color={FOREGROUND} halfWidth={7} length={14} />
      <SvgLabel fill={FOREGROUND} x={(start.x + end.x) / 2} y={(start.y + end.y) / 2 - 14}>{label}</SvgLabel>
    </g>
  );
}

const origin = { x: 370, y: 230 } as const;

export function InterfaceReflectionRefractionGeometryDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 480">
        <rect fill="transparent" height="480" width="760" />

        <polygon fill="var(--muted)" fillOpacity="0.28" points="180,60 545,60 625,390 105,390" stroke={FOREGROUND} strokeWidth="1.2" />
        <polygon fill={INTERFACE} fillOpacity="0.82" points="245,190 690,190 555,335 110,335" stroke={FOREGROUND} strokeWidth="1.2" />
        <line stroke={FOREGROUND} strokeDasharray="7 6" strokeWidth="1.3" x1="370" x2="370" y1="65" y2="390" />

        <path d={wavePath({ x: 225, y: 78 }, origin)} fill="none" stroke={WAVE} strokeWidth="2" />
        <path d={wavePath(origin, { x: 510, y: 78 })} fill="none" stroke={WAVE} strokeWidth="2" />
        <path d={wavePath(origin, { x: 575, y: 355 })} fill="none" stroke={WAVE} strokeWidth="2" />

        <Ray end={{ x: 355, y: 214 }} label="kᵢ" start={{ x: 225, y: 78 }} />
        <Ray end={{ x: 510, y: 78 }} label="kᵣ" start={{ x: 385, y: 214 }} />
        <Ray end={{ x: 575, y: 355 }} label="kₜ" start={{ x: 384, y: 239 }} />

        <path d="M 370 158 A 72 72 0 0 0 320 178" fill="none" stroke={FOREGROUND} strokeWidth="1.5" />
        <SvgArrowhead angle={150} baseX={320} baseY={178} color={FOREGROUND} halfWidth={3} length={6} />
        <path d="M 370 158 A 72 72 0 0 1 419 178" fill="none" stroke={FOREGROUND} strokeWidth="1.5" />
        <SvgArrowhead angle={30} baseX={419} baseY={178} color={FOREGROUND} halfWidth={3} length={6} />
        <path d="M 370 302 A 72 72 0 0 1 430 270" fill="none" stroke={FOREGROUND} strokeWidth="1.5" />
        <SvgArrowhead angle={-28} baseX={430} baseY={270} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={327} y={154}>θᵢ</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={415} y={154}>θᵣ</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={430} y={300}>θₜ</SvgLabel>

        <circle cx={origin.x} cy={origin.y} fill={FOREGROUND} r="5" />
        <SvgLabel fill={FOREGROUND} x={382} y={213}>O</SvgLabel>
        <circle cx="335" cy="230" fill={FOREGROUND} r="3.5" />
        <circle cx="415" cy="230" fill={FOREGROUND} r="3.5" />
        <SvgLabel fill={FOREGROUND} x={335} y={216}>R₁</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={415} y={216}>R₂</SvgLabel>

        <SvgLabel fill={FOREGROUND} x={245} y={32}>Eᵢ/(R₁,t) + Eᵣ/(R₁,t)</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={535} y={32}>Eₜ/(R₂,t)</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={120} y={105}>Medium 1</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={120} y={129}>Refractive index n₁</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={580} y={384}>Medium 2</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={580} y={408}>Refractive index n₂</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={132} y={250}>Plane of incidence</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="250" x2="315" y1="374" y2="392" />
        <SvgLabel fill={FOREGROUND} x={283} y={416}>Interface</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="1.5" x1="650" x2="710" y1="420" y2="420" />
        <SvgArrowhead angle={0} baseX={710} baseY={420} color={FOREGROUND} halfWidth={3} length={6} />
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="650" x2="650" y1="420" y2="365" />
        <SvgArrowhead angle={-90} baseX={650} baseY={365} color={FOREGROUND} halfWidth={3} length={6} />
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="650" x2="620" y1="420" y2="449" />
        <SvgArrowhead angle={136} baseX={620} baseY={449} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={713} y={425}>y-axis</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={650} y={352}>z-axis</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={612} y={466}>x-axis</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: InterfaceReflectionRefractionGeometryDiagram,
} satisfies PhysicsDiagramDefinition;
