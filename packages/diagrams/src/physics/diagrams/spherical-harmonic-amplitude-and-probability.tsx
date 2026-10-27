import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "wave",
  referenceImage: "main.pdf#page=46&figure=7",
  slug: "spherical-harmonic-amplitude-and-probability",
  summary:
    "Signed and phase-varying spherical-harmonic amplitudes compared with six nonnegative angular-probability cross-sections.",
  tags: ["Spherical harmonic", "Angular node", "Complex phase", "Angular probability"],
  title: "Spherical-harmonic amplitudes and angular probabilities",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const POSITIVE = "var(--destructive)";
const NEGATIVE = "var(--chart-1)";
const PROBABILITY = "var(--foreground)";
const GUIDE = "var(--muted-foreground)";

function angularAmplitude(l: number, m: number, theta: number) {
  const cosine = Math.cos(theta);
  const sine = Math.sin(theta);
  if (l === 0) return 1;
  if (l === 1 && m === 0) return cosine;
  if (l === 1) return sine;
  if (m === 0) return 0.5 * (3 * cosine ** 2 - 1);
  if (m === 1) return sine * cosine;
  return sine ** 2;
}

function probabilityPath(l: number, m: number, cx: number, cy: number, scale: number) {
  const samples = Array.from({ length: 241 }, (_, index) => {
    const theta = (2 * Math.PI * index) / 240;
    return { theta, value: angularAmplitude(l, m, theta) ** 2 };
  });
  const maximum = Math.max(...samples.map(({ value }) => value));

  return samples.map(({ theta, value }, index) => {
    const radius = (scale * value) / maximum;
    const x = cx + radius * Math.sin(theta);
    const y = cy - radius * Math.cos(theta);
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

const probabilityPanels = [
  { cx: 135, cy: 330, l: 0, m: 0, label: "|Y₀₀|²" },
  { cx: 375, cy: 330, l: 1, m: 0, label: "|Y₁₀|²" },
  { cx: 615, cy: 330, l: 1, m: 1, label: "|Y₁₁|²" },
  { cx: 135, cy: 505, l: 2, m: 0, label: "|Y₂₀|²" },
  { cx: 375, cy: 505, l: 2, m: 1, label: "|Y₂₁|²" },
  { cx: 615, cy: 505, l: 2, m: 2, label: "|Y₂₂|²" },
] as const;

export function SphericalHarmonicAmplitudeAndProbabilityDiagram({
  className,
  showCaption = true,
  style,
}: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame
      caption={showCaption ? metadata.summary : undefined}
      className={className}
      style={{ maxWidth: 780, ...style }}
      title={metadata.title}
    >
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 620">
        <rect fill="transparent" height="620" width="760" />

        <SvgLabel fill={PROBABILITY} x={190} y={30}>signed real amplitude Y₁₀</SvgLabel>
        <ellipse cx="190" cy="91" fill={POSITIVE} fillOpacity="0.75" rx="42" ry="54" />
        <ellipse cx="190" cy="199" fill={NEGATIVE} fillOpacity="0.75" rx="42" ry="54" />
        <SvgLabel fill="var(--background)" x={190} y={98}>+</SvgLabel>
        <g aria-label="negative amplitude">
          <line stroke="var(--background)" strokeWidth="2" x1="182" x2="198" y1="199" y2="199" />
        </g>
        <line stroke={GUIDE} strokeDasharray="5 4" x1="120" x2="260" y1="145" y2="145" />
        <SvgLabel fill={GUIDE} textAnchor="start" x={275} y={150}>angular node</SvgLabel>

        <SvgLabel fill={PROBABILITY} x={550} y={30}>complex phase of Y₁₁</SvgLabel>
        <circle cx="550" cy="145" fill="none" r="67" stroke={GUIDE} strokeWidth="22" />
        <path d="M 550 78 A 67 67 0 0 1 617 145" fill="none" stroke={POSITIVE} strokeWidth="22" />
        <path d="M 617 145 A 67 67 0 0 1 550 212" fill="none" stroke="var(--chart-4)" strokeWidth="22" />
        <path d="M 550 212 A 67 67 0 0 1 483 145" fill="none" stroke={NEGATIVE} strokeWidth="22" />
        <path d="M 483 145 A 67 67 0 0 1 550 78" fill="none" stroke="var(--chart-2)" strokeWidth="22" />
        <line stroke={PROBABILITY} strokeWidth="1.5" x1="550" x2="625" y1="145" y2="145" />
        <SvgArrowhead angle={0} baseX={625} baseY={145} color={PROBABILITY} halfWidth={3} length={6} />
        <SvgLabel fill={PROBABILITY} x={550} y={240}>phase winds as eⁱᵐφ</SvgLabel>

        <line stroke={GUIDE} strokeWidth="1.2" x1="35" x2="725" y1="270" y2="270" />

        {probabilityPanels.map(({ cx, cy, l, label, m }) => (
          <g key={label}>
            <line stroke={GUIDE} strokeOpacity="0.45" x1={cx} x2={cx} y1={cy - 68} y2={cy + 68} />
            <line stroke={GUIDE} strokeOpacity="0.45" x1={cx - 68} x2={cx + 68} y1={cy} y2={cy} />
            <path d={probabilityPath(l, m, cx, cy, 58)} fill="var(--chart-5)" fillOpacity="0.45" stroke={PROBABILITY} strokeWidth="2" />
            <SvgLabel fill={PROBABILITY} x={cx} y={cy - 76}>{label}</SvgLabel>
          </g>
        ))}
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: SphericalHarmonicAmplitudeAndProbabilityDiagram,
} satisfies PhysicsDiagramDefinition;
