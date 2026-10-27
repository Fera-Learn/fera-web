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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=88&figure=64",
  slug: "dipole-field-cycle",
  summary:
    "Electric and magnetic field geometry over a complete dipole cycle, with outward wavevector and Poynting direction.",
  tags: ["Near field", "Far field", "Hertzian dipole", "Poynting vector"],
  title: "Fields radiated during an oscillating-dipole cycle",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const ELECTRIC = "var(--chart-1)";
const MAGNETIC = "var(--chart-2)";
const POSITIVE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";
const center = { x: 360, y: 225 } as const;

function lobePath(side: -1 | 1, inner: number, width: number, height: number) {
  return Array.from({ length: 97 }, (_, index) => {
    const parameter = (2 * Math.PI * index) / 96;
    const radialOffset = inner + (width * (1 + Math.cos(parameter))) / 2;
    const x = center.x + side * radialOffset;
    const y = center.y + height * Math.sin(parameter);
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

function OutwardArrow({ x1, x2, y1, y2 }: { x1: number; x2: number; y1: number; y2: number }) {
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  return (
    <g>
      <line stroke={FOREGROUND} strokeWidth="1.8" x1={x1} x2={x2} y1={y1} y2={y2} />
      <SvgArrowhead angle={angle} baseX={x2} baseY={y2} color={FOREGROUND} halfWidth={3.5} length={7} />
    </g>
  );
}

const chevrons = [
  [205, 130, -1], [175, 180, 1], [170, 265, -1], [210, 325, 1],
  [260, 165, 1], [250, 225, -1], [270, 285, 1], [310, 205, -1],
  [515, 130, 1], [545, 180, -1], [550, 265, 1], [510, 325, -1],
  [460, 165, -1], [470, 225, 1], [450, 285, -1], [410, 205, 1],
] as const;

export function DipoleFieldCycleDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 450">
        <rect fill="transparent" height="450" width="720" />

        {[72, 132, 192].map((radius) => (
          <circle
            cx={center.x}
            cy={center.y}
            fill="none"
            key={radius}
            r={radius}
            stroke={FOREGROUND}
            strokeDasharray="7 6"
            strokeWidth="1.2"
          />
        ))}

        {[-1, 1].map((side) => (
          <g key={side}>
            <path d={lobePath(side as -1 | 1, 30, 165, 157)} fill="none" stroke={ELECTRIC} strokeWidth="2.4" />
            <path d={lobePath(side as -1 | 1, 27, 108, 102)} fill="none" stroke={ELECTRIC} strokeWidth="2" />
            <path d={lobePath(side as -1 | 1, 24, 58, 56)} fill="none" stroke={ELECTRIC} strokeWidth="1.8" />
          </g>
        ))}

        {chevrons.map(([x, y, direction]) => (
          <path
            d={direction > 0 ? `M ${x - 5} ${y + 5} L ${x} ${y} L ${x + 5} ${y + 5}` : `M ${x - 5} ${y - 5} L ${x} ${y} L ${x + 5} ${y - 5}`}
            fill="none"
            key={`${x}-${y}`}
            stroke={ELECTRIC}
            strokeWidth="1.5"
          />
        ))}

        <line stroke={ELECTRIC} strokeDasharray="5 4" strokeWidth="1.6" x1="360" x2="360" y1="25" y2="425" />
        <circle cx="360" cy="211" fill={POSITIVE} r="8" stroke={FOREGROUND} strokeWidth="1" />
        <circle cx="360" cy="239" fill={FOREGROUND} r="8" />
        <line stroke={POSITIVE} strokeWidth="1.8" x1="376" x2="376" y1="242" y2="208" />
        <SvgArrowhead angle={-90} baseX={376} baseY={208} color={POSITIVE} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={360} y={442}>Oscillating electric dipole</SvgLabel>

        <circle cx="232" cy="225" fill="var(--background)" r="10" stroke={MAGNETIC} strokeWidth="1.6" />
        <circle cx="232" cy="225" fill={MAGNETIC} r="3" />
        <SvgLabel fill={MAGNETIC} x={205} y={252}>B out</SvgLabel>
        <circle cx="488" cy="225" fill="var(--background)" r="10" stroke={MAGNETIC} strokeWidth="1.6" />
        <line stroke={MAGNETIC} strokeWidth="1.6" x1="482" x2="494" y1="219" y2="231" />
        <line stroke={MAGNETIC} strokeWidth="1.6" x1="494" x2="482" y1="219" y2="231" />
        <SvgLabel fill={MAGNETIC} x={515} y={252}>B in</SvgLabel>
        <SvgLabel fill={ELECTRIC} x={205} y={205}>E</SvgLabel>
        <SvgLabel fill={ELECTRIC} x={515} y={205}>E</SvgLabel>

        <OutwardArrow x1={215} x2={155} y1={92} y2={52} />
        <OutwardArrow x1={505} x2={565} y1={92} y2={52} />
        <OutwardArrow x1={215} x2={155} y1={358} y2={398} />
        <OutwardArrow x1={505} x2={565} y1={358} y2={398} />
        <SvgLabel fill={FOREGROUND} x={144} y={40}>k</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={576} y={40}>k</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={144} y={414}>k</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={576} y={414}>k</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={585} y={92}>k ∥ E × B</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: DipoleFieldCycleDiagram,
} satisfies PhysicsDiagramDefinition;
