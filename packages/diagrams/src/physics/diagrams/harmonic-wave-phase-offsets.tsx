import { PhysicsDiagramFrame, SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";

export const metadata = {
  kind: "graph", referenceImage: "overall.pdf#page=6", slug: "harmonic-wave-phase-offsets",
  summary: "Two harmonic waves have the same wavelength and amplitude but reach corresponding points at different phases.",
  tags: ["Harmonic wave", "Initial phase"], title: "Harmonic waves with different initial phase", topic: "Optics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const wave = (phase: number) => Array.from({ length: 161 }, (_, index) => {
  const x = 70 + index * 3.35;
  const y = 160 - 78 * Math.sin(index * Math.PI / 40 + phase);
  return `${index ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`;
}).join(" ");

export function HarmonicWavePhaseOffsets({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return <PhysicsDiagramFrame caption={showCaption ? metadata.summary : undefined} className={className} style={{ maxWidth: 700, ...style }} title={metadata.title}>
    <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 700 330">
      <rect fill="transparent" height="330" width="700" />
      <line stroke="var(--foreground)" strokeWidth="2" x1="55" x2="630" y1="160" y2="160" />
      <line stroke="var(--foreground)" strokeWidth="2" x1="70" x2="70" y1="58" y2="262" />
      <path d={wave(0)} fill="none" stroke="var(--chart-2)" strokeWidth="3" />
      <path d={wave(Math.PI / 3)} fill="none" stroke="var(--chart-1)" strokeDasharray="8 6" strokeWidth="3" />
      <SvgLabel fill="var(--chart-2)" textAnchor="start" x={510} y={84}>φ₀ = 0</SvgLabel>
      <SvgLabel fill="var(--chart-1)" textAnchor="start" x={510} y={116}>φ₀ ≠ 0</SvgLabel>
      <SvgLabel fill="var(--foreground)" x={347} y={305}>position x</SvgLabel>
      <SvgLabel fill="var(--foreground)" x={35} y={68}>E</SvgLabel>
    </svg>
  </PhysicsDiagramFrame>;
}
export const diagram = { ...metadata, component: HarmonicWavePhaseOffsets } satisfies PhysicsDiagramDefinition;
