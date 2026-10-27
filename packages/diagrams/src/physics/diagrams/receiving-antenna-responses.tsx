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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=31&figure=22",
  slug: "receiving-antenna-responses",
  summary:
    "Loop and straight-wire antennas detecting the magnetic and electric fields of an incoming electromagnetic wave.",
  tags: ["Receiving antenna", "Loop antenna", "Dipole antenna", "Electromagnetic wave"],
  title: "Electric- and magnetic-field receiving antennas",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const ELECTRIC = "var(--chart-1)";
const MAGNETIC = "var(--chart-2)";
const WAVE = "var(--chart-4)";
const WIRE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";

const fieldLineXs = Array.from({ length: 19 }, (_, index) => 80 + index * 22);

function FieldLines({ color, top }: { color: string; top: number }) {
  return fieldLineXs.map((x) => (
    <g key={`${top}-${x}`}>
      <line stroke={color} strokeWidth="1.3" x1={x} x2={x} y1={top + 150} y2={top + 72} />
      <SvgArrowhead angle={-90} baseX={x} baseY={top + 72} color={color} halfWidth={2.5} length={5} />
      <line stroke={color} strokeWidth="1.3" x1={x} x2={x} y1={top + 60} y2={top + 10} />
    </g>
  ));
}

export function ReceivingAntennaResponsesDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 550">
        <rect fill="transparent" height="550" width="720" />

        <FieldLines color={MAGNETIC} top={48} />
        <path
          d="M 80 126 C 95 82 110 82 125 126 S 155 170 170 126 S 200 82 215 126 S 245 170 260 126 S 290 82 305 126 S 335 170 350 126 S 380 82 395 126 S 425 170 440 126 S 470 82 485 126"
          fill="none"
          stroke={WAVE}
          strokeWidth="2.2"
        />
        <ellipse cx="218" cy="126" fill="none" rx="78" ry="14" stroke={WIRE} strokeWidth="4" />
        <line stroke={WIRE} strokeWidth="4" x1="296" x2="510" y1="126" y2="126" />
        <rect fill="var(--background)" height="58" stroke={FOREGROUND} strokeWidth="1.5" width="150" x="510" y="97" />
        <SvgLabel fill={FOREGROUND} x={585} y={132}>Voltmeter</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.8" x1="180" x2="430" y1="38" y2="38" />
        <SvgArrowhead angle={0} baseX={430} baseY={38} color={FOREGROUND} halfWidth={4} length={8} />
        <SvgLabel fill={FOREGROUND} x={300} y={28}>Velocity of the wave</SvgLabel>
        <line stroke={MAGNETIC} strokeWidth="1.8" x1="160" x2="160" y1="242" y2="212" />
        <SvgArrowhead angle={-90} baseX={160} baseY={212} color={MAGNETIC} halfWidth={3.5} length={7} />
        <SvgLabel fill={MAGNETIC} textAnchor="start" x={181} y={232}>B-field</SvgLabel>
        <line stroke={WIRE} strokeWidth="4" x1="430" x2="510" y1="230" y2="230" />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={525} y={237}>Copper wire</SvgLabel>

        <FieldLines color={ELECTRIC} top={305} />
        <path
          d="M 80 383 C 95 339 110 339 125 383 S 155 427 170 383 S 200 339 215 383 S 245 427 260 383 S 290 339 305 383 S 335 427 350 383 S 380 339 395 383 S 425 427 440 383 S 470 339 485 383"
          fill="none"
          stroke={WAVE}
          strokeWidth="2.2"
        />
        <line stroke={WIRE} strokeWidth="4" x1="300" x2="300" y1="337" y2="459" />
        <line stroke={WIRE} strokeWidth="4" x1="300" x2="510" y1="383" y2="383" />
        <rect fill="var(--background)" height="58" stroke={FOREGROUND} strokeWidth="1.5" width="150" x="510" y="354" />
        <SvgLabel fill={FOREGROUND} x={585} y={389}>Voltmeter</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.8" x1="180" x2="430" y1="295" y2="295" />
        <SvgArrowhead angle={0} baseX={430} baseY={295} color={FOREGROUND} halfWidth={4} length={8} />
        <SvgLabel fill={FOREGROUND} x={300} y={285}>Velocity of the wave</SvgLabel>
        <line stroke={ELECTRIC} strokeWidth="1.8" x1="170" x2="170" y1="527" y2="497" />
        <SvgArrowhead angle={-90} baseX={170} baseY={497} color={ELECTRIC} halfWidth={3.5} length={7} />
        <SvgLabel fill={ELECTRIC} textAnchor="start" x={191} y={518}>E-field</SvgLabel>
        <line stroke={WIRE} strokeWidth="4" x1="430" x2="510" y1="516" y2="516" />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={525} y={523}>Copper wire</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: ReceivingAntennaResponsesDiagram,
} satisfies PhysicsDiagramDefinition;
