import {
  PhysicsDiagramFrame,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "graph",
  referenceImage: "main.pdf#page=75&figure=14",
  slug: "hydrogen-fine-structure-levels",
  summary:
    "The n equals 1, 2, and 3 hydrogen levels splitting into fine-structure energies labelled by total angular momentum j.",
  tags: ["Hydrogen", "Fine structure", "Energy splitting", "Spectroscopic notation"],
  title: "Hydrogen fine-structure energy splitting",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";
const SPLIT = "var(--chart-1)";

const unperturbedLevels = [
  { labels: ["3S₁/₂", "3P₁/₂", "3P₃/₂", "3D₃/₂", "3D₅/₂"], y: 95 },
  { labels: ["2S₁/₂", "2P₁/₂", "2P₃/₂"], y: 205 },
  { labels: ["1S₁/₂"], y: 340 },
] as const;

const splitLevels = [
  { labels: ["3D₅/₂"], y: 76 },
  { labels: ["3P₃/₂", "3D₃/₂"], y: 94 },
  { labels: ["3S₁/₂", "3P₁/₂"], y: 122 },
  { labels: ["2P₃/₂"], y: 193 },
  { labels: ["2S₁/₂", "2P₁/₂"], y: 220 },
  { labels: ["1S₁/₂"], y: 340 },
] as const;

function LevelLabels({ labels, x, y }: { labels: readonly string[]; x: number; y: number }) {
  return (
    <SvgLabel fill={FOREGROUND} textAnchor="end" x={x} y={y + 4}>
      {labels.join("  ")}
    </SvgLabel>
  );
}

export function HydrogenFineStructureLevelsDiagram({
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

        {unperturbedLevels.map(({ labels, y }) => (
          <g key={y}>
            <LevelLabels labels={labels} x={165} y={y} />
            <line stroke={FOREGROUND} strokeWidth="1.8" x1="180" x2="330" y1={y} y2={y} />
          </g>
        ))}

        {splitLevels.map(({ labels, y }) => (
          <g key={y}>
            <line stroke={SPLIT} strokeWidth="1.8" x1="490" x2="650" y1={y} y2={y} />
            <SvgLabel fill={FOREGROUND} textAnchor="start" x={662} y={y + 4}>{labels.join("  ")}</SvgLabel>
          </g>
        ))}

        <line stroke={FOREGROUND} strokeDasharray="4 4" strokeOpacity="0.65" x1="330" x2="490" y1="95" y2="76" />
        <line stroke={FOREGROUND} strokeDasharray="4 4" strokeOpacity="0.65" x1="330" x2="490" y1="95" y2="94" />
        <line stroke={FOREGROUND} strokeDasharray="4 4" strokeOpacity="0.65" x1="330" x2="490" y1="95" y2="122" />
        <line stroke={FOREGROUND} strokeDasharray="4 4" strokeOpacity="0.65" x1="330" x2="490" y1="205" y2="193" />
        <line stroke={FOREGROUND} strokeDasharray="4 4" strokeOpacity="0.65" x1="330" x2="490" y1="205" y2="220" />
        <line stroke={FOREGROUND} strokeDasharray="4 4" strokeOpacity="0.65" x1="330" x2="490" y1="340" y2="340" />

        <SvgLabel fill={FOREGROUND} x={255} y={392}>unperturbed</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={570} y={392}>+ fine structure</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: HydrogenFineStructureLevelsDiagram,
} satisfies PhysicsDiagramDefinition;
