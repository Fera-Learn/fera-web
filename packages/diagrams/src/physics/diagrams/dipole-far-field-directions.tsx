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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=85&figure=61",
  slug: "dipole-far-field-directions",
  summary:
    "Far-zone electric and magnetic fields tangent to a sphere, with their cross product directed radially outward.",
  tags: ["Dipole radiation", "Far field", "Poynting vector", "Transverse wave"],
  title: "Far-field directions around a Hertzian dipole",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const ELECTRIC = "var(--chart-1)";
const MAGNETIC = "var(--chart-2)";
const OUTWARD = "var(--destructive)";
const FOREGROUND = "var(--foreground)";

function ellipsePath(cx: number, cy: number, rx: number, ry: number) {
  return Array.from({ length: 65 }, (_, index) => {
    const angle = (2 * Math.PI * index) / 64;
    const x = cx + rx * Math.cos(angle);
    const y = cy + ry * Math.sin(angle);
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

export function DipoleFarFieldDirectionsDiagram({
  className,
  showCaption = true,
  style,
}: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame
      caption={showCaption ? metadata.summary : undefined}
      className={className}
      style={{ maxWidth: 700, ...style }}
      title={metadata.title}
    >
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 700 380">
        <rect fill="transparent" height="380" width="700" />
        <circle cx="305" cy="190" fill="none" r="135" stroke={FOREGROUND} strokeWidth="2" />

        <path d={ellipsePath(305, 190, 48, 135)} fill="none" stroke={ELECTRIC} strokeDasharray="7 6" strokeWidth="1.8" />
        <path d={ellipsePath(305, 190, 88, 135)} fill="none" stroke={ELECTRIC} strokeDasharray="7 6" strokeWidth="1.4" />
        <path d={ellipsePath(305, 145, 128, 34)} fill="none" stroke={MAGNETIC} strokeDasharray="7 6" strokeWidth="1.6" />
        <path d={ellipsePath(305, 190, 135, 43)} fill="none" stroke={MAGNETIC} strokeDasharray="7 6" strokeWidth="1.8" />
        <path d={ellipsePath(305, 235, 128, 34)} fill="none" stroke={MAGNETIC} strokeDasharray="7 6" strokeWidth="1.6" />

        {[210, 260, 350, 400].map((x) => (
          <g key={x}>
            <line stroke={ELECTRIC} strokeWidth="1.5" x1={x} x2={x} y1="216" y2="180" />
            <SvgArrowhead angle={-90} baseX={x} baseY={180} color={ELECTRIC} halfWidth={2.8} length={5.5} />
          </g>
        ))}
        {[145, 190, 235].map((y) => (
          <g key={y}>
            <line stroke={MAGNETIC} strokeWidth="1.5" x1="280" x2="325" y1={y} y2={y} />
            <SvgArrowhead angle={0} baseX={325} baseY={y} color={MAGNETIC} halfWidth={2.8} length={5.5} />
          </g>
        ))}

        <line stroke={FOREGROUND} strokeWidth="1.6" x1="305" x2="365" y1="190" y2="95" />
        <SvgArrowhead angle={-58} baseX={365} baseY={95} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={344} y={132}>r</SvgLabel>
        <line stroke={OUTWARD} strokeWidth="1.8" x1="305" x2="305" y1="206" y2="174" />
        <SvgArrowhead angle={-90} baseX={305} baseY={174} color={OUTWARD} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={305} y={350}>Oscillating dipole</SvgLabel>

        <line stroke={ELECTRIC} strokeDasharray="6 5" strokeWidth="2" x1="505" x2="505" y1="155" y2="95" />
        <SvgArrowhead angle={-90} baseX={505} baseY={95} color={ELECTRIC} halfWidth={3.5} length={7} />
        <SvgLabel fill={ELECTRIC} x={545} y={91}>E-field</SvgLabel>
        <line stroke={MAGNETIC} strokeDasharray="6 5" strokeWidth="2" x1="555" x2="495" y1="175" y2="175" />
        <SvgArrowhead angle={180} baseX={495} baseY={175} color={MAGNETIC} halfWidth={3.5} length={7} />
        <SvgLabel fill={MAGNETIC} x={595} y={180}>B-field</SvgLabel>
        <line stroke={OUTWARD} strokeDasharray="6 5" strokeWidth="2" x1="505" x2="505" y1="285" y2="225" />
        <SvgArrowhead angle={90} baseX={505} baseY={285} color={OUTWARD} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={570} y={245}>E × H outward</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: DipoleFarFieldDirectionsDiagram,
} satisfies PhysicsDiagramDefinition;
