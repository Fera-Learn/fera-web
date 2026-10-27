import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "interaction",
  referenceImage: "slides1(1) - Tagged.pdf#page=23-26",
  slug: "crystal-periodicity-translations",
  summary: "The same local motif repeats at equivalent lattice points under discrete translations.",
  tags: ["Crystal", "Periodicity", "Translation", "Lattice"],
  title: "Periodic order and translational symmetry",
  topic: "Condensed Matter Physics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const points = Array.from({ length: 35 }, (_, index) => {
  const row = Math.floor(index / 7);
  const column = index % 7;
  return [95 + column * 82 + row * 18, 70 + row * 58] as const;
});

export function CrystalPeriodicityTranslations({ className, showCaption = true, style }: PhysicsDiagramProps) {
  const foreground = "var(--foreground)";
  return (
    <PhysicsDiagramFrame caption={showCaption ? metadata.summary : undefined} className={className} style={{ maxWidth: 720, ...style }} title={metadata.title}>
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 390">
        <rect fill="transparent" height="390" width="720" />
        {points.map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} fill="var(--chart-1)" r="11" />
            <circle cx={cx + 18} cy={cy + 13} fill="var(--chart-2)" r="6" />
          </g>
        ))}
        <line stroke={foreground} strokeWidth="3" x1="177" x2="259" y1="345" y2="345" />
        <SvgArrowhead angle={0} baseX={259} baseY={345} color={foreground} halfWidth={5} length={10} />
        <line stroke={foreground} strokeWidth="3" x1="177" x2="195" y1="345" y2="287" />
        <SvgArrowhead angle={-73} baseX={195} baseY={287} color={foreground} halfWidth={5} length={10} />
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = { ...metadata, component: CrystalPeriodicityTranslations } satisfies PhysicsDiagramDefinition;
