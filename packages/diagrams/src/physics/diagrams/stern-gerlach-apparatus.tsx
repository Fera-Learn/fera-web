import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "apparatus",
  referenceImage: "main.pdf#page=56&figure=11",
  slug: "stern-gerlach-apparatus",
  summary:
    "A collimated atomic beam crossing a nonuniform magnet and separating into two discrete traces on a screen.",
  tags: ["Stern-Gerlach experiment", "Spin", "Magnetic-field gradient", "Beam splitting"],
  title: "Stern–Gerlach apparatus and beam splitting",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";
const BEAM = "var(--chart-1)";
const MAGNET = "var(--muted-foreground)";

function BeamArrow({ x1, x2, y1, y2 }: { x1: number; x2: number; y1: number; y2: number }) {
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  return (
    <g>
      <line stroke={BEAM} strokeWidth="2.5" x1={x1} x2={x2} y1={y1} y2={y2} />
      <SvgArrowhead angle={angle} baseX={x2} baseY={y2} color={BEAM} halfWidth={4} length={8} />
    </g>
  );
}

export function SternGerlachApparatusDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 360">
        <rect fill="transparent" height="360" width="760" />

        <rect fill={MAGNET} height="64" rx="5" stroke={FOREGROUND} strokeWidth="1.5" width="78" x="650" y="148" />
        <circle cx="659" cy="180" fill="var(--destructive)" r="8" />
        <SvgLabel fill={FOREGROUND} x={689} y={183}>1</SvgLabel>

        <rect fill="var(--background)" height="70" stroke={FOREGROUND} strokeWidth="1.8" width="24" x="585" y="145" />
        <rect fill={FOREGROUND} height="12" width="24" x="585" y="174" />
        <SvgLabel fill={FOREGROUND} x={597} y={132}>2</SvgLabel>

        <path d="M 350 62 L 550 62 L 550 145 L 430 158 L 350 130 Z" fill={MAGNET} stroke={FOREGROUND} strokeWidth="1.8" />
        <path d="M 350 298 L 550 298 L 550 215 L 430 202 L 350 230 Z" fill={MAGNET} stroke={FOREGROUND} strokeWidth="1.8" />
        <SvgLabel fill="var(--background)" x={455} y={112}>N</SvgLabel>
        <SvgLabel fill="var(--background)" x={455} y={258}>S</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={535} y={242}>3</SvgLabel>

        <BeamArrow x1={650} x2={612} y1={180} y2={180} />
        <BeamArrow x1={584} x2={450} y1={180} y2={180} />
        <BeamArrow x1={430} x2={185} y1={176} y2={108} />
        <BeamArrow x1={430} x2={185} y1={184} y2={252} />

        <path d="M 128 52 L 172 68 L 172 292 L 128 308 Z" fill="var(--muted)" stroke={FOREGROUND} strokeWidth="2" />
        <ellipse cx="155" cy="108" fill={BEAM} rx="5" ry="16" />
        <ellipse cx="155" cy="252" fill={BEAM} rx="5" ry="16" />
        <SvgLabel fill={FOREGROUND} x={112} y={68}>4</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={183} y={97}>5</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={183} y={271}>5</SvgLabel>

        <line stroke={FOREGROUND} strokeDasharray="5 5" strokeOpacity="0.5" x1="155" x2="650" y1="180" y2="180" />
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: SternGerlachApparatusDiagram,
} satisfies PhysicsDiagramDefinition;
