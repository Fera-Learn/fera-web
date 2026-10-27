import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "interaction",
  referenceImage: "main.pdf#page=77&figure=15",
  slug: "hydrogen-hyperfine-spin-flip",
  summary:
    "Parallel and antiparallel proton–electron spin configurations connected by the 1420 MHz hydrogen hyperfine transition.",
  tags: ["Hydrogen", "Hyperfine splitting", "Spin flip", "21 centimetre line"],
  title: "Hydrogen ground-state hyperfine spin flip",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";
const TRANSITION = "var(--destructive)";

function SpinArrow({ direction, x, y }: { direction: -1 | 1; x: number; y: number }) {
  const endY = y - 42 * direction;
  const angle = direction === 1 ? -90 : 90;
  return (
    <g>
      <line stroke={FOREGROUND} strokeWidth="2.2" x1={x} x2={x} y1={y} y2={endY} />
      <SvgArrowhead angle={angle} baseX={x} baseY={endY} color={FOREGROUND} halfWidth={4} length={8} />
    </g>
  );
}

const photonPath = Array.from({ length: 81 }, (_, index) => {
  const fraction = index / 80;
  const x = 492 + 145 * fraction;
  const y = 306 - 42 * fraction + 6 * Math.sin(12 * Math.PI * fraction);
  return `${index === 0 ? "M" : "L"} ${x} ${y}`;
}).join(" ");

export function HydrogenHyperfineSpinFlipDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 700 430">
        <rect fill="transparent" height="430" width="700" />

        <SvgLabel fill={FOREGROUND} textAnchor="start" x={70} y={75}>F = 1</SvgLabel>
        <ellipse cx="330" cy="125" fill="none" rx="145" ry="48" stroke={FOREGROUND} strokeDasharray="8 6" strokeWidth="1.8" />
        <circle cx="330" cy="125" fill={TRANSITION} r="23" />
        <circle cx="475" cy="125" fill={FOREGROUND} r="10" />
        <SpinArrow direction={1} x={330} y={125} />
        <SpinArrow direction={1} x={475} y={125} />

        <SvgLabel fill={FOREGROUND} textAnchor="start" x={70} y={277}>F = 0</SvgLabel>
        <ellipse cx="330" cy="315" fill="none" rx="145" ry="48" stroke={FOREGROUND} strokeDasharray="8 6" strokeWidth="1.8" />
        <circle cx="330" cy="315" fill={TRANSITION} r="23" />
        <circle cx="475" cy="315" fill={FOREGROUND} r="10" />
        <SpinArrow direction={1} x={330} y={315} />
        <SpinArrow direction={-1} x={475} y={315} />
        <SvgLabel fill={TRANSITION} textAnchor="start" x={500} y={337}>Spin-Flip</SvgLabel>

        <path d={photonPath} fill="none" stroke={TRANSITION} strokeWidth="2" />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={510} y={230}>f₀ = 1420 MHz</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={510} y={254}>λ₀ = 21 cm</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: HydrogenHyperfineSpinFlipDiagram,
} satisfies PhysicsDiagramDefinition;
