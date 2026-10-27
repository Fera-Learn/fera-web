import {
  PhysicsDiagramFrame,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "interaction",
  referenceImage: "slides2 - Tagged.pdf#page=13-14",
  slug: "miller-index-plane-construction",
  summary: "Representative cubic planes show how axis intercepts determine the Miller labels (100), (110), and (111).",
  tags: ["Miller indices", "Crystal plane", "Intercepts"],
  title: "Constructing Miller-index planes",
  topic: "Condensed Matter Physics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

function Axes({ x }: { x: number }) {
  const y = 226;
  const stroke = "var(--foreground)";
  return <g>
    <path d={`M ${x} ${y} L ${x + 105} ${y} L ${x + 145} ${y - 42} L ${x + 40} ${y - 42} Z M ${x} ${y} L ${x} ${y - 112} L ${x + 40} ${y - 154} L ${x + 145} ${y - 154} L ${x + 145} ${y - 42} M ${x} ${y - 112} L ${x + 105} ${y - 112} L ${x + 145} ${y - 154} M ${x + 105} ${y - 112} L ${x + 105} ${y}`} fill="none" stroke={stroke} strokeWidth="1.8" />
    <SvgLabel fill={stroke} textAnchor="start" x={x + 108} y={y + 9}>x</SvgLabel>
    <SvgLabel fill={stroke} textAnchor="start" x={x + 42} y={y - 48}>y</SvgLabel>
    <SvgLabel fill={stroke} textAnchor="end" x={x - 5} y={y - 117}>z</SvgLabel>
  </g>;
}

export function MillerIndexPlaneConstruction({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame caption={showCaption ? metadata.summary : undefined} className={className} style={{ maxWidth: 780, ...style }} title={metadata.title}>
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 780 330">
        <rect fill="transparent" height="330" width="780" />
        <Axes x={45} /><Axes x={300} /><Axes x={555} />
        <polygon fill="var(--chart-1)" fillOpacity="0.32" points="150,114 190,72 190,184 150,226" stroke="var(--chart-1)" strokeWidth="2" />
        <polygon fill="var(--chart-2)" fillOpacity="0.32" points="405,226 340,184 340,72 405,114" stroke="var(--chart-2)" strokeWidth="2" />
        <polygon fill="var(--chart-3)" fillOpacity="0.34" points="660,226 595,184 555,114" stroke="var(--chart-3)" strokeWidth="2" />
        <SvgLabel fill="var(--foreground)" x={118} y={287}>(100)</SvgLabel>
        <SvgLabel fill="var(--foreground)" x={373} y={287}>(110)</SvgLabel>
        <SvgLabel fill="var(--foreground)" x={628} y={287}>(111)</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = { ...metadata, component: MillerIndexPlaneConstruction } satisfies PhysicsDiagramDefinition;
