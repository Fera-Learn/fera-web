import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "wave",
  referenceImage: "main.pdf#page=30&figure=5",
  slug: "infinite-and-finite-well-comparison",
  summary:
    "Infinite-well wavefunctions ending at hard walls compared with finite-well wavefunctions leaking beyond the boundaries.",
  tags: ["Infinite square well", "Finite square well", "Wavefunction leakage", "Boundary condition"],
  title: "Infinite and finite square-well wavefunctions",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";
const WAVE = "var(--chart-1)";

function infinitePath(baseline: number, mode: number) {
  return Array.from({ length: 161 }, (_, index) => {
    const fraction = index / 160;
    const x = 105 + 210 * fraction;
    const y = baseline - 26 * Math.sin(mode * Math.PI * fraction);
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

function finitePath(baseline: number, mode: number) {
  return Array.from({ length: 241 }, (_, index) => {
    const u = -0.35 + (1.7 * index) / 240;
    const x = 430 + 210 * u;
    let amplitude: number;
    if (u < 0) amplitude = Math.sin(mode * Math.PI * 0.08) * Math.exp(6 * u);
    else if (u > 1) amplitude = Math.sin(mode * Math.PI * 0.92) * Math.exp(-6 * (u - 1));
    else amplitude = Math.sin(mode * Math.PI * (0.08 + 0.84 * u));
    const y = baseline - 26 * amplitude;
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

export function InfiniteAndFiniteWellComparisonDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 420">
        <rect fill="transparent" height="420" width="760" />
        <SvgLabel fill={FOREGROUND} x={210} y={32}>Infinite well</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={535} y={32}>Finite well</SvgLabel>

        <rect fill="var(--muted)" height="320" width="45" x="60" y="55" />
        <rect fill="var(--muted)" height="320" width="45" x="315" y="55" />
        <line stroke={FOREGROUND} strokeWidth="2.4" x1="105" x2="105" y1="55" y2="375" />
        <line stroke={FOREGROUND} strokeWidth="2.4" x1="315" x2="315" y1="55" y2="375" />
        {[310, 215, 120].map((baseline, index) => (
          <g key={baseline}>
            <line stroke={FOREGROUND} strokeOpacity="0.4" x1="105" x2="315" y1={baseline} y2={baseline} />
            <path d={infinitePath(baseline, index + 1)} fill="none" stroke={WAVE} strokeWidth="2.2" />
          </g>
        ))}
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="115" x2="305" y1="392" y2="392" />
        <SvgArrowhead angle={180} baseX={115} baseY={392} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgArrowhead angle={0} baseX={305} baseY={392} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={210} y={414}>L</SvgLabel>

        <rect fill="var(--muted)" height="320" width="75" x="355" y="55" />
        <rect fill="var(--muted)" height="320" width="75" x="640" y="55" />
        <path d="M 355 85 L 430 85 L 430 375 L 640 375 L 640 85 L 715 85" fill="none" stroke={FOREGROUND} strokeWidth="2.2" />
        <SvgLabel fill={FOREGROUND} x={690} y={72}>V₀</SvgLabel>
        {[310, 215, 120].map((baseline, index) => (
          <g key={baseline}>
            <line stroke={FOREGROUND} strokeOpacity="0.4" x1="380" x2="690" y1={baseline} y2={baseline} />
            <path d={finitePath(baseline, index + 1)} fill="none" stroke={index % 2 === 0 ? WAVE : "var(--destructive)"} strokeWidth="2.2" />
          </g>
        ))}
        <SvgLabel fill={FOREGROUND} x={392} y={350}>leakage</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={678} y={350}>leakage</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: InfiniteAndFiniteWellComparisonDiagram,
} satisfies PhysicsDiagramDefinition;
