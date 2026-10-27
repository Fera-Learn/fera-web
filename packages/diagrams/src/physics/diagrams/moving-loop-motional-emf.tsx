import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "apparatus",
  referenceImage:
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=19&figure=17",
  slug: "moving-loop-motional-emf",
  summary:
    "A conducting loop moving between magnetic pole pieces, with its width, velocity, magnetic field, and voltmeter shown.",
  tags: ["Motional emf", "Moving loop", "Magnetic field", "Voltmeter"],
  title: "Moving loop in a magnetic field",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-2)";
const LOOP = "var(--destructive)";
const FOREGROUND = "var(--foreground)";

const horizontalFieldLines = [132, 148, 164, 180, 196, 212, 228] as const;

export function MovingLoopMotionalEmfDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 -20 720 380">
        <rect fill="transparent" height="380" width="720" y="-20" />

        <path d="M 78 82 L 150 140 L 150 230 L 68 292" fill="none" stroke={FOREGROUND} strokeWidth="3" />
        <path d="M 642 82 L 570 140 L 570 230 L 652 292" fill="none" stroke={FOREGROUND} strokeWidth="3" />
        <SvgLabel fill={FOREGROUND} x={78} y={169}>Magnetic pole</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={78} y={193}>piece</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={642} y={169}>Magnetic pole</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={642} y={193}>piece</SvgLabel>

        <path d="M 170 126 C 190 92 530 92 550 126" fill="none" stroke={FIELD} strokeWidth="2" />
        <SvgArrowhead angle={34} baseX={550} baseY={126} color={FIELD} halfWidth={3.5} length={7} />
        {horizontalFieldLines.map((y) => (
          <g key={y}>
            <line stroke={FIELD} strokeWidth="2" x1="170" x2="543" y1={y} y2={y} />
            <SvgArrowhead angle={0} baseX={543} baseY={y} color={FIELD} halfWidth={3.5} length={7} />
          </g>
        ))}
        <path d="M 170 234 C 190 268 530 268 550 234" fill="none" stroke={FIELD} strokeWidth="2" />
        <SvgArrowhead angle={-34} baseX={550} baseY={234} color={FIELD} halfWidth={3.5} length={7} />

        <path d="M 329 60 L 396 42 L 396 214 L 329 248 Z" fill="none" stroke={LOOP} strokeWidth="2.2" />
        <path d="M 329 60 L 329 39 L 345 32" fill="none" stroke={LOOP} strokeWidth="2.2" />
        <path d="M 380 32 L 396 23 L 396 42" fill="none" stroke={LOOP} strokeWidth="2.2" />
        <circle cx="363" cy="31" fill="var(--background)" r="17" stroke={LOOP} strokeWidth="2" />
        <SvgLabel fill={FOREGROUND} x={363} y={37}>V</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="1.6" x1="324" x2="400" y1="19" y2="2" />
        <SvgArrowhead angle={168} baseX={324} baseY={19} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgArrowhead angle={-12} baseX={400} baseY={2} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={354} y={-4}>w</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="2" x1="370" x2="370" y1="207" y2="246" />
        <SvgArrowhead angle={90} baseX={370} baseY={246} color={FOREGROUND} halfWidth={4} length={8} />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={386} y={238}>u</SvgLabel>
        <SvgLabel fill={FIELD} x={360} y={326}>B-field</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: MovingLoopMotionalEmfDiagram,
} satisfies PhysicsDiagramDefinition;
