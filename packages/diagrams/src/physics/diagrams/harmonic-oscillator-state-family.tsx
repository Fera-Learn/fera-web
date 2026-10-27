import {
  PhysicsDiagramFrame,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "wave",
  referenceImage: "main.pdf#page=33&figure=6",
  slug: "harmonic-oscillator-state-family",
  summary:
    "The first four harmonic-oscillator wavefunctions, their equally spaced energies, and corresponding probability densities.",
  tags: ["Harmonic oscillator", "Hermite polynomial", "Probability density", "Energy level"],
  title: "Harmonic-oscillator wavefunctions and probabilities",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const WAVE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";
const baselines = [390, 315, 240, 165] as const;

function hermite(n: number, x: number) {
  if (n === 0) return 1;
  if (n === 1) return 2 * x;
  if (n === 2) return 4 * x ** 2 - 2;
  return 8 * x ** 3 - 12 * x;
}

function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function psi(n: number, x: number) {
  const normalization = 1 / Math.sqrt(2 ** n * factorial(n) * Math.sqrt(Math.PI));
  return normalization * hermite(n, x) * Math.exp(-(x ** 2) / 2);
}

function sampledPath(n: number, baseline: number, probability: boolean) {
  const samples = Array.from({ length: 241 }, (_, index) => {
    const x = -3.2 + (6.4 * index) / 240;
    const value = psi(n, x);
    return { x, value: probability ? value ** 2 : value };
  });
  const maximum = Math.max(...samples.map(({ value }) => Math.abs(value)));
  const centerX = probability ? 600 : 150;

  return samples.map(({ x, value }, index) => {
    const screenX = centerX + 38 * x;
    const screenY = baseline - (34 * value) / maximum;
    return `${index === 0 ? "M" : "L"} ${screenX} ${screenY}`;
  }).join(" ");
}

const potentialPath = Array.from({ length: 161 }, (_, index) => {
  const xi = -2.2 + (4.4 * index) / 160;
  const x = 375 + 34 * xi;
  const y = 427.5 - 37.5 * xi ** 2;
  return `${index === 0 ? "M" : "L"} ${x} ${y}`;
}).join(" ");

export function HarmonicOscillatorStateFamilyDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 460">
        <rect fill="transparent" height="460" width="760" />
        <SvgLabel fill={FOREGROUND} x={150} y={32}>wavefunction ψₙ</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={375} y={32}>energy and potential</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={600} y={32}>probability |ψₙ|²</SvgLabel>

        <path d={potentialPath} fill="none" stroke={FOREGROUND} strokeWidth="2" />
        <SvgLabel fill={FOREGROUND} x={375} y={449}>V(x) = ½mω²x²</SvgLabel>

        {baselines.map((baseline, n) => {
          const turningOffset = 38 * Math.sqrt(2 * n + 1);
          return (
            <g key={baseline}>
              <line stroke={FOREGROUND} strokeOpacity="0.45" x1="25" x2="275" y1={baseline} y2={baseline} />
              <line stroke={FOREGROUND} strokeOpacity="0.45" x1="485" x2="735" y1={baseline} y2={baseline} />
              <line stroke={FOREGROUND} strokeDasharray="4 4" strokeOpacity="0.55" x1={150 - turningOffset} x2={150 - turningOffset} y1={baseline - 42} y2={baseline + 12} />
              <line stroke={FOREGROUND} strokeDasharray="4 4" strokeOpacity="0.55" x1={150 + turningOffset} x2={150 + turningOffset} y1={baseline - 42} y2={baseline + 12} />
              <path d={sampledPath(n, baseline, false)} fill="none" stroke={WAVE} strokeWidth="2" />
              <path d={sampledPath(n, baseline, true)} fill="none" stroke={WAVE} strokeWidth="2" />
              <line stroke={FOREGROUND} strokeDasharray="5 4" strokeWidth="1.3" x1="312" x2="438" y1={baseline} y2={baseline} />
              <SvgLabel fill={FOREGROUND} textAnchor="end" x={20} y={baseline + 5}>ψ{n}</SvgLabel>
              <SvgLabel fill={FOREGROUND} textAnchor="start" x={740} y={baseline + 5}>|ψ{n}|²</SvgLabel>
              <SvgLabel fill={FOREGROUND} x={375} y={baseline - 8}>E{n} = ({n}+½)ℏω</SvgLabel>
            </g>
          );
        })}
        <SvgLabel fill={FOREGROUND} x={150} y={435}>dashed lines: classical turning points</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: HarmonicOscillatorStateFamilyDiagram,
} satisfies PhysicsDiagramDefinition;
