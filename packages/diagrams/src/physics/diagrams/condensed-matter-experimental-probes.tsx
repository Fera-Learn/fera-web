import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "apparatus",
  referenceImage: "slides1(1) - Tagged.pdf#page=7",
  slug: "condensed-matter-experimental-probes",
  summary:
    "Scattering reveals structure through deflected beams, while transport reveals response through measured current and voltage.",
  tags: ["Scattering", "Transport", "Structure", "Response"],
  title: "Two experimental approaches to condensed matter",
  topic: "Condensed Matter Physics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";
const INCIDENT = "var(--chart-2)";
const SCATTERED = "var(--chart-1)";

export function CondensedMatterExperimentalProbes({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame caption={showCaption ? metadata.summary : undefined} className={className} style={{ maxWidth: 760, ...style }} title={metadata.title}>
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 360">
        <rect fill="transparent" height="360" width="760" />
        <SvgLabel fill={FOREGROUND} x={190} y={35}>Scattering</SvgLabel>
        {[122, 152, 182].map((y) => <line key={y} stroke={INCIDENT} strokeWidth="2.5" x1="35" x2="170" y1={y} y2={y} />)}
        <SvgArrowhead angle={0} baseX={170} baseY={152} color={INCIDENT} halfWidth={5} length={10} />
        {[122, 152, 182].map((y) => <line key={`out-${y}`} stroke={INCIDENT} strokeWidth="2.5" x1="250" x2="342" y1={y} y2={y} />)}
        <SvgArrowhead angle={0} baseX={342} baseY={152} color={INCIDENT} halfWidth={5} length={10} />
        {([[-20, -72], [18, -82], [62, -56], [72, 8], [55, 62], [8, 78], [-42, 62]] as const).map(([dx, dy], index) => (
          <g key={`${dx}-${dy}`}>
            <line stroke={SCATTERED} strokeWidth="2" x1="220" x2={220 + dx} y1="152" y2={152 + dy} />
            <SvgArrowhead angle={Math.atan2(dy, dx) * 180 / Math.PI} baseX={220 + dx} baseY={152 + dy} color={SCATTERED} halfWidth={4} length={8} />
            <circle cx={220 + dx * 0.2 + (index % 2) * 5} cy={152 + dy * 0.15} fill={FOREGROUND} r="5" />
          </g>
        ))}

        <line stroke="var(--border)" strokeWidth="2" x1="380" x2="380" y1="38" y2="322" />
        <path d="M 444 146 V 94 H 548 M 590 94 H 670 V 230 H 444 V 206" fill="none" stroke={FOREGROUND} strokeWidth="2.4" />
        <line stroke={FOREGROUND} strokeWidth="2.4" x1="548" x2="548" y1="72" y2="116" />
        <line stroke={FOREGROUND} strokeWidth="4" x1="590" x2="590" y1="82" y2="106" />
        <circle cx="444" cy="176" fill="var(--background)" r="30" stroke={FOREGROUND} strokeWidth="2.2" />
        <SvgLabel fill={FOREGROUND} x={444} y={183}>A</SvgLabel>
        <rect fill="var(--chart-2)" fillOpacity="0.2" height="38" stroke={FOREGROUND} strokeWidth="2" width="82" x="535" y="211" />
        <path d="M 520 230 V 292 H 632 V 230" fill="none" stroke={FOREGROUND} strokeWidth="2" />
        <circle cx="576" cy="292" fill="var(--background)" r="28" stroke={FOREGROUND} strokeWidth="2.2" />
        <SvgLabel fill={FOREGROUND} x={576} y={299}>V</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={646} y={258}>Transport</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = { ...metadata, component: CondensedMatterExperimentalProbes } satisfies PhysicsDiagramDefinition;
