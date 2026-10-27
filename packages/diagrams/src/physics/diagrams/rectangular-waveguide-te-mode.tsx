import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "wave",
  referenceImage:
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=32&figure=24",
  slug: "rectangular-waveguide-te-mode",
  summary:
    "A rectangular hollow waveguide carrying a transverse-electric mode, with transverse field direction and axial half-wavelength shown.",
  tags: ["Waveguide", "TE mode", "Cutoff", "Transverse electric field"],
  title: "Transverse-electric mode in a rectangular waveguide",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const GUIDE = "var(--chart-1)";
const FOREGROUND = "var(--foreground)";

const nearFieldRows = [235, 270, 305, 340] as const;
const farFieldRows = [102, 132, 162, 192] as const;

export function RectangularWaveguideTeModeDiagram({
  className,
  showCaption = true,
  style,
}: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame
      caption={showCaption ? metadata.summary : undefined}
      className={className}
      style={{ maxWidth: 720, ...style }}
      title={metadata.title}
    >
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 420">
        <rect fill="transparent" height="420" width="720" />

        <rect fill="none" height="160" stroke={GUIDE} strokeWidth="7" width="210" x="180" y="200" />
        <line stroke={GUIDE} strokeWidth="7" x1="180" x2="350" y1="200" y2="50" />
        <line stroke={GUIDE} strokeWidth="7" x1="390" x2="560" y1="200" y2="50" />
        <line stroke={GUIDE} strokeWidth="7" x1="390" x2="560" y1="360" y2="210" />
        <path d="M 350 50 L 560 50 L 560 210 L 350 210 Z" fill="none" stroke={GUIDE} strokeDasharray="14 10" strokeWidth="4" />

        {nearFieldRows.map((y) => (
          <g key={`near-${y}`}>
            <line stroke={FOREGROUND} strokeWidth="1.7" x1="220" x2="318" y1={y} y2={y} />
            <SvgArrowhead angle={0} baseX={318} baseY={y} color={FOREGROUND} halfWidth={3.5} length={7} />
          </g>
        ))}
        {farFieldRows.map((y) => (
          <g key={`far-${y}`}>
            <line stroke={FOREGROUND} strokeWidth="1.7" x1="515" x2="420" y1={y} y2={y} />
            <SvgArrowhead angle={180} baseX={420} baseY={y} color={FOREGROUND} halfWidth={3.5} length={7} />
          </g>
        ))}
        <SvgLabel fill={FOREGROUND} x={335} y={286}>Eᵧ</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={404} y={126}>Eᵧ</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="1.8" x1="180" x2="180" y1="360" y2="155" />
        <SvgArrowhead angle={-90} baseX={180} baseY={155} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={FOREGROUND} strokeWidth="1.8" x1="180" x2="455" y1="360" y2="360" />
        <SvgArrowhead angle={0} baseX={455} baseY={360} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={FOREGROUND} strokeWidth="1.8" x1="180" x2="492" y1="360" y2="85" />
        <SvgArrowhead angle={-41} baseX={492} baseY={85} color={FOREGROUND} halfWidth={4} length={8} />
        <SvgLabel fill={FOREGROUND} x={137} y={165}>x-axis</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={470} y={382}>y-axis</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={492} y={67}>z-axis</SvgLabel>

        <SvgLabel fill={FOREGROUND} x={158} y={284}>a</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={390} y={389}>b</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="430" x2="551" y1="350" y2="244" />
        <SvgArrowhead angle={139} baseX={430} baseY={350} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgArrowhead angle={-41} baseX={551} baseY={244} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={526} y={316}>λ_z/2</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: RectangularWaveguideTeModeDiagram,
} satisfies PhysicsDiagramDefinition;
