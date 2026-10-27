import {
  PhysicsDiagramFrame,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "interaction",
  referenceImage: "slides2 - Tagged.pdf#page=7-8",
  slug: "lattice-plus-basis",
  summary: "Repeating the same multi-atom basis at every lattice point produces the full periodic crystal structure.",
  tags: ["Lattice", "Basis", "Crystal structure"],
  title: "A crystal structure is a lattice plus a basis",
  topic: "Condensed Matter Physics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const sites = Array.from({ length: 12 }, (_, index) => [78 + (index % 4) * 58, 88 + Math.floor(index / 4) * 58] as const);

export function LatticePlusBasis({ className, showCaption = true, style }: PhysicsDiagramProps) {
  const foreground = "var(--foreground)";
  return (
    <PhysicsDiagramFrame caption={showCaption ? metadata.summary : undefined} className={className} style={{ maxWidth: 760, ...style }} title={metadata.title}>
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 330">
        <rect fill="transparent" height="330" width="760" />
        <SvgLabel fill={foreground} x={165} y={35}>Lattice</SvgLabel>
        {sites.map(([cx, cy]) => <circle cx={cx} cy={cy} fill={foreground} key={`${cx}-${cy}`} r="5" />)}
        <SvgLabel fill={foreground} x={375} y={35}>Repeating object</SvgLabel>
        <circle cx="360" cy="145" fill="var(--chart-1)" r="19" stroke={foreground} />
        <circle cx="395" cy="168" fill="var(--chart-2)" r="13" stroke={foreground} />
        <SvgLabel fill={foreground} x={598} y={35}>Periodic structure</SvgLabel>
        {sites.map(([cx, cy]) => {
          const x = 508 + (cx - 78) * 0.82;
          const y = 78 + (cy - 88) * 0.82;
          return <g key={`${x}-${y}`}><circle cx={x} cy={y} fill="var(--chart-1)" r="10" stroke={foreground} /><circle cx={x + 18} cy={y + 12} fill="var(--chart-2)" r="7" stroke={foreground} /></g>;
        })}
        <SvgLabel fill={foreground} x={300} y={165}>×</SvgLabel>
        <SvgLabel fill={foreground} x={465} y={165}>=</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = { ...metadata, component: LatticePlusBasis } satisfies PhysicsDiagramDefinition;
