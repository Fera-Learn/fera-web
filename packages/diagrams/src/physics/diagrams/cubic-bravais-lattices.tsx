import {
  PhysicsDiagramFrame,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "interaction",
  referenceImage: "slides1(1) - Tagged.pdf#page=27; slides2 - Tagged.pdf#page=4,8",
  slug: "cubic-bravais-lattices",
  summary: "Simple-, body-centred-, and face-centred-cubic conventional cells differ by their centring sites.",
  tags: ["Simple cubic", "Body-centred cubic", "Face-centred cubic"],
  title: "The three cubic Bravais lattices",
  topic: "Condensed Matter Physics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const corners = [[0, 0], [100, 0], [0, 100], [100, 100]] as const;

function Cell({ centerX, kind }: { centerX: number; kind: "bcc" | "fcc" | "sc" }) {
  const x = centerX - 65;
  const y = 95;
  const offset = 32;
  const foreground = "var(--foreground)";
  const nodes = [
    ...corners.map(([dx, dy]) => [x + dx, y + dy] as const),
    ...corners.map(([dx, dy]) => [x + dx + offset, y + dy - offset] as const),
  ];
  return (
    <g>
      <rect fill="none" height="100" stroke={foreground} strokeWidth="2" width="100" x={x} y={y} />
      <rect fill="none" height="100" stroke={foreground} strokeWidth="2" width="100" x={x + offset} y={y - offset} />
      {corners.map(([dx, dy]) => <line key={`${dx}-${dy}`} stroke={foreground} strokeWidth="2" x1={x + dx} x2={x + dx + offset} y1={y + dy} y2={y + dy - offset} />)}
      {nodes.map(([cx, cy]) => <circle cx={cx} cy={cy} fill="var(--chart-1)" key={`${cx}-${cy}`} r="7" stroke={foreground} />)}
      {kind === "bcc" ? <>
        {nodes.map(([cx, cy]) => <line key={`bcc-${cx}-${cy}`} stroke={foreground} strokeDasharray="5 5" strokeOpacity="0.45" x1={x + 66} x2={cx} y1={y + 34} y2={cy} />)}
        <circle cx={x + 66} cy={y + 34} fill="var(--chart-2)" r="9" stroke={foreground} />
      </> : null}
      {kind === "fcc" ? <>
        <path d={`M ${x} ${y} L ${x + 100} ${y + 100} M ${x + 100} ${y} L ${x} ${y + 100} M ${x + 32} ${y - 32} L ${x + 100} ${y} M ${x} ${y} L ${x + 132} ${y - 32}`} fill="none" stroke={foreground} strokeDasharray="5 5" strokeOpacity="0.4" />
        {([[50, 50], [82, 18], [66, -16], [66, 84], [16, 34], [116, 34]] as const).map(([dx, dy], index) => <circle cx={x + dx} cy={y + dy} fill="var(--chart-2)" key={`fcc-${index}`} opacity={index === 1 ? 0.65 : 1} r="8" stroke={foreground} />)}
      </> : null}
    </g>
  );
}

export function CubicBravaisLattices({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame caption={showCaption ? metadata.summary : undefined} className={className} style={{ maxWidth: 780, ...style }} title={metadata.title}>
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 780 310">
        <rect fill="transparent" height="310" width="780" />
        <Cell centerX={145} kind="sc" />
        <Cell centerX={390} kind="bcc" />
        <Cell centerX={635} kind="fcc" />
        <SvgLabel fill="var(--foreground)" x={145} y={245}>Simple cubic</SvgLabel>
        <SvgLabel fill="var(--foreground)" x={390} y={245}>Body-centred cubic</SvgLabel>
        <SvgLabel fill="var(--foreground)" x={635} y={245}>Face-centred cubic</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = { ...metadata, component: CubicBravaisLattices } satisfies PhysicsDiagramDefinition;
