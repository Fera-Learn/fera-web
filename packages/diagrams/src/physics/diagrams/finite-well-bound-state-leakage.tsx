import {
  PhysicsDiagramFrame,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "wave",
  referenceImage: "main.pdf#page=29&figure=4-bottom",
  slug: "finite-well-bound-state-leakage",
  summary:
    "Four bound-state wavefunctions in an intermediate finite well, with oscillatory interiors and exponential exterior tails.",
  tags: ["Finite square well", "Bound state", "Evanescent tail", "Parity"],
  title: "Bound-state leakage from a finite square well",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const WAVE = "var(--chart-1)";
const FOREGROUND = "var(--foreground)";
const centerX = 360;
const scaleX = 120;
const states = [
  { baseline: 330, parity: "even", xRoot: 1.3064, yRoot: 4.8263 },
  { baseline: 250, parity: "odd", xRoot: 2.5957, yRoot: 4.2734 },
  { baseline: 170, parity: "even", xRoot: 3.8375, yRoot: 3.2053 },
  { baseline: 90, parity: "odd", xRoot: 4.9063, yRoot: 0.9635 },
] as const;

function statePath(state: (typeof states)[number]) {
  return Array.from({ length: 321 }, (_, index) => {
    const u = -2 + (4 * index) / 320;
    let amplitude: number;

    if (Math.abs(u) <= 1) {
      amplitude = state.parity === "even"
        ? Math.cos(state.xRoot * u)
        : Math.sin(state.xRoot * u);
    } else {
      const boundary = state.parity === "even"
        ? Math.cos(state.xRoot * Math.sign(u))
        : Math.sin(state.xRoot * Math.sign(u));
      amplitude = boundary * Math.exp(-state.yRoot * (Math.abs(u) - 1));
    }

    const x = centerX + scaleX * u;
    const y = state.baseline - 28 * amplitude;
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

export function FiniteWellBoundStateLeakageDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 420">
        <rect fill="transparent" height="420" width="720" />
        <rect fill="var(--muted)" height="350" width="120" x="120" y="35" />
        <rect fill="var(--muted)" height="350" width="120" x="480" y="35" />
        <path d="M 120 55 L 240 55 L 240 385 L 480 385 L 480 55 L 600 55" fill="none" stroke={FOREGROUND} strokeWidth="2" />
        <SvgLabel fill={FOREGROUND} x={625} y={60}>V₀</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={360} y={407}>well width L</SvgLabel>

        {states.map((state, index) => (
          <g key={state.baseline}>
            <line stroke={FOREGROUND} strokeDasharray="4 4" strokeOpacity="0.5" x1="95" x2="625" y1={state.baseline} y2={state.baseline} />
            <path d={statePath(state)} fill="none" stroke={index % 2 === 0 ? WAVE : "var(--destructive)"} strokeWidth="2" />
            <SvgLabel fill={FOREGROUND} textAnchor="start" x={630} y={state.baseline + 5}>E{index + 1}</SvgLabel>
          </g>
        ))}
        <SvgLabel fill={FOREGROUND} x={180} y={377}>exponential tail</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={540} y={377}>exponential tail</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: FiniteWellBoundStateLeakageDiagram,
} satisfies PhysicsDiagramDefinition;
