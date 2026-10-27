import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "graph",
  referenceImage: "main.pdf#pages=50-51&figures=9-10",
  slug: "hydrogen-transitions-and-balmer-spectrum",
  summary:
    "Hydrogen transitions grouped into Lyman, Balmer, and Paschen series beside the converging visible Balmer spectral lines.",
  tags: ["Hydrogen", "Energy transition", "Balmer series", "Emission spectrum"],
  title: "Hydrogen transition series and Balmer lines",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";
const LYMAN = "var(--destructive)";
const BALMER = "var(--chart-1)";
const PASCHEN = "var(--chart-2)";

const levels = [
  { label: "n = 1", n: 1, y: 346 },
  { label: "n = 2", n: 2, y: 192 },
  { label: "n = 3", n: 3, y: 132 },
  { label: "n = 4", n: 4, y: 105 },
  { label: "n = 5", n: 5, y: 91 },
  { label: "n = ∞", n: Number.POSITIVE_INFINITY, y: 72 },
] as const;

const balmerWavelengths = [
  { color: "#dc2626", wavelength: 656.3 },
  { color: "#06b6d4", wavelength: 486.1 },
  { color: "#2563eb", wavelength: 434.1 },
  { color: "#4f46e5", wavelength: 410.2 },
  { color: "#6d28d9", wavelength: 397.0 },
  { color: "#7c3aed", wavelength: 388.9 },
  { color: "#7c3aed", wavelength: 383.5 },
  { color: "#7c3aed", wavelength: 379.8 },
  { color: "#7c3aed", wavelength: 377.1 },
  { color: "#7c3aed", wavelength: 375.0 },
  { color: "#7c3aed", wavelength: 373.4 },
  { color: "#7c3aed", wavelength: 372.2 },
] as const;
const balmerSeriesLimit = 364.6;

function TransitionArrow({ color, targetY, x, y }: { color: string; targetY: number; x: number; y: number }) {
  const baseY = targetY - 7;
  return (
    <g>
      <line stroke={color} strokeWidth="1.7" x1={x} x2={x} y1={y} y2={baseY} />
      <SvgArrowhead angle={90} baseX={x} baseY={baseY} color={color} halfWidth={3} length={7} />
    </g>
  );
}

function spectrumX(wavelength: number) {
  return 455 + ((wavelength - 360) / 340) * 255;
}

export function HydrogenTransitionsAndBalmerSpectrumDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 430">
        <rect fill="transparent" height="430" width="760" />

        {levels.map(({ label, y }) => (
          <g key={label}>
            <line stroke={FOREGROUND} strokeWidth="1.3" x1="78" x2="364" y1={y} y2={y} />
            {label === "n = ∞" ? (
              <g aria-label="n = ∞">
                <SvgLabel fill={FOREGROUND} textAnchor="end" x={53} y={y + 5}>n =</SvgLabel>
                <path
                  d={`M 57 ${y} C 61 ${y - 6} 66 ${y - 6} 70 ${y} C 74 ${y + 6} 79 ${y + 6} 83 ${y} C 79 ${y - 6} 74 ${y - 6} 70 ${y} C 66 ${y + 6} 61 ${y + 6} 57 ${y}`}
                  fill="none"
                  stroke={FOREGROUND}
                  strokeWidth="1.4"
                />
              </g>
            ) : (
              <SvgLabel fill={FOREGROUND} textAnchor="end" x={68} y={y + 5}>{label}</SvgLabel>
            )}
          </g>
        ))}
        <SvgLabel fill={FOREGROUND} x={221} y={401}>stationary states of hydrogen</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={370} y={351}>ground state</SvgLabel>

        <TransitionArrow color={LYMAN} targetY={346} x={112} y={192} />
        <TransitionArrow color={LYMAN} targetY={346} x={124} y={132} />
        <TransitionArrow color={LYMAN} targetY={346} x={136} y={105} />
        <TransitionArrow color={LYMAN} targetY={346} x={148} y={91} />
        <SvgLabel fill={LYMAN} x={137} y={310}>Lyman series</SvgLabel>

        <TransitionArrow color={BALMER} targetY={192} x={218} y={132} />
        <TransitionArrow color={BALMER} targetY={192} x={230} y={105} />
        <TransitionArrow color={BALMER} targetY={192} x={242} y={91} />
        <TransitionArrow color={BALMER} targetY={192} x={254} y={72} />
        <SvgLabel fill={BALMER} x={238} y={218}>Balmer series</SvgLabel>

        <TransitionArrow color={PASCHEN} targetY={132} x={312} y={105} />
        <TransitionArrow color={PASCHEN} targetY={132} x={324} y={91} />
        <TransitionArrow color={PASCHEN} targetY={132} x={336} y={72} />
        <SvgLabel fill={PASCHEN} x={321} y={154}>Paschen series</SvgLabel>

        <rect fill="#09090b" height="100" rx="4" width="270" x="445" y="128" />
        {balmerWavelengths.map(({ color, wavelength }) => {
          const x = spectrumX(wavelength);
          return <line key={wavelength} stroke={color} strokeWidth={wavelength > 400 ? 2.2 : 1.2} x1={x} x2={x} y1="136" y2="220" />;
        })}
        <SvgLabel fill={FOREGROUND} x={580} y={257}>Balmer spectral lines</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={458} y={279}>series limit</SvgLabel>
        <line
          stroke={FOREGROUND}
          strokeWidth="1.2"
          x1={spectrumX(balmerSeriesLimit)}
          x2={spectrumX(balmerSeriesLimit)}
          y1="266"
          y2="229"
        />
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: HydrogenTransitionsAndBalmerSpectrumDiagram,
} satisfies PhysicsDiagramDefinition;
