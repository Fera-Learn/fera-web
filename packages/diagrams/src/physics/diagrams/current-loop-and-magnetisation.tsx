import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "field",
  referenceImage:
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=56&figures=43-44",
  slug: "current-loop-and-magnetisation",
  summary:
    "A current loop and its magnetic moment connected to aligned microscopic loops and a macroscopic magnetic field.",
  tags: ["Magnetic dipole", "Magnetisation", "Current loop", "Magnetic field"],
  title: "Current-loop moments and macroscopic magnetisation",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-2)";
const MOMENT = "var(--chart-1)";
const FOREGROUND = "var(--foreground)";

const coilRows = [92, 132, 172, 212, 252, 292] as const;
const dipoleRows = [108, 148, 188, 228, 268] as const;

export function CurrentLoopAndMagnetisationDiagram({
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

        <rect fill="none" height="230" stroke={MOMENT} strokeWidth="1.8" width="76" x="286" y="68" />
        {coilRows.map((y) => (
          <ellipse cx="324" cy={y} fill="none" key={y} rx="58" ry="9" stroke={FOREGROUND} strokeWidth="2" />
        ))}
        {dipoleRows.map((y) => (
          <g key={y}>
            <ellipse cx="313" cy={y} fill="none" rx="8" ry="3" stroke={MOMENT} strokeWidth="1.2" />
            <ellipse cx="338" cy={y + 10} fill="none" rx="8" ry="3" stroke={MOMENT} strokeWidth="1.2" />
            <line stroke={MOMENT} strokeWidth="1.2" x1="313" x2="313" y1={y + 3} y2={y - 11} />
            <SvgArrowhead angle={-90} baseX={313} baseY={y - 11} color={MOMENT} halfWidth={2} length={4} />
          </g>
        ))}

        <ellipse cx="150" cy="190" fill="none" rx="72" ry="35" stroke={FOREGROUND} strokeWidth="2" />
        <SvgLabel fill={FOREGROUND} x={150} y={184}>Current</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={150} y={208}>Source</SvgLabel>
        <path d="M 150 155 L 150 94 Q 150 78 166 78 L 266 78" fill="none" stroke={FOREGROUND} strokeWidth="2" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="150" x2="150" y1="225" y2="294" />
        <path d="M 150 294 Q 150 312 168 312 L 324 312 L 324 301" fill="none" stroke={FOREGROUND} strokeWidth="2" />
        <SvgArrowhead angle={90} baseX={150} baseY={132} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgArrowhead angle={90} baseX={150} baseY={270} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={126} y={126}>I</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={126} y={269}>I</SvgLabel>

        <path d="M 275 326 C 292 290 288 94 273 58" fill="none" stroke={FIELD} strokeWidth="2" />
        <SvgArrowhead angle={-110} baseX={273} baseY={58} color={FIELD} halfWidth={3.5} length={7} />
        <path d="M 373 326 C 356 290 360 94 375 58" fill="none" stroke={FIELD} strokeWidth="2" />
        <SvgArrowhead angle={-70} baseX={375} baseY={58} color={FIELD} halfWidth={3.5} length={7} />
        {[298, 315, 332, 349].map((x) => (
          <g key={x}>
            <line stroke={FIELD} strokeWidth="1.5" x1={x} x2={x} y1="78" y2="48" />
            <SvgArrowhead angle={-90} baseX={x} baseY={48} color={FIELD} halfWidth={2.5} length={5} />
            <line stroke={FIELD} strokeWidth="1.5" x1={x} x2={x} y1="298" y2="328" />
            <SvgArrowhead angle={90} baseX={x} baseY={328} color={FIELD} halfWidth={2.5} length={5} />
          </g>
        ))}
        <SvgLabel fill={FIELD} x={230} y={47}>B-field</SvgLabel>

        <ellipse cx="545" cy="240" fill="var(--chart-4)" rx="95" ry="42" stroke={FOREGROUND} strokeWidth="1.8" />
        <path d="M 459 226 A 95 42 0 0 1 520 201" fill="none" stroke={FOREGROUND} strokeWidth="2" />
        <SvgArrowhead angle={-18} baseX={520} baseY={201} color={FOREGROUND} halfWidth={3.5} length={7} />
        <path d="M 583 276 A 95 42 0 0 1 623 255" fill="none" stroke={FOREGROUND} strokeWidth="2" />
        <SvgArrowhead angle={-32} baseX={623} baseY={255} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={455} y={176}>Current, I</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="2" x1="545" x2="545" y1="240" y2="145" />
        <SvgArrowhead angle={-90} baseX={545} baseY={145} color={FOREGROUND} halfWidth={4} length={8} />
        <g aria-label="n hat">
          <SvgLabel fill={FOREGROUND} x={545} y={128}>n</SvgLabel>
          <path d="M 539 113 L 545 107 L 551 113" fill="none" stroke={FOREGROUND} strokeWidth="1.5" />
        </g>
        <circle cx="586" cy="227" fill="var(--chart-4)" r="4" stroke={FOREGROUND} strokeWidth="1.2" />
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="590" x2="668" y1="229" y2="266" />
        <SvgLabel fill={FOREGROUND} x={662} y={286}>Area, S</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={545} y={336}>m = ISn̂</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: CurrentLoopAndMagnetisationDiagram,
} satisfies PhysicsDiagramDefinition;
