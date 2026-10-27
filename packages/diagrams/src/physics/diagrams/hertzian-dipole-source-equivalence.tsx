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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=82&figure=59",
  slug: "hertzian-dipole-source-equivalence",
  summary:
    "Oscillating endpoint displacement, phase-shifted current, and the equivalent alternating-current element of a Hertzian dipole.",
  tags: ["Hertzian dipole", "Oscillating charge", "Alternating current", "Dipole moment"],
  title: "Equivalent charge and current descriptions of a Hertzian dipole",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const CURRENT = "var(--chart-1)";
const CHARGE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";

const xStart = 175;
const xEnd = 620;
const axisY = 220;

function harmonicPath(amplitude: number, phaseShift: number) {
  return Array.from({ length: 181 }, (_, index) => {
    const fraction = index / 180;
    const phase = 4 * Math.PI * fraction;
    const x = xStart + (xEnd - xStart) * fraction;
    const y = axisY - amplitude * Math.sin(phase + phaseShift);
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

const chargeSamples = Array.from({ length: 13 }, (_, index) => {
  const fraction = index / 12;
  const phase = 4 * Math.PI * fraction;
  return {
    x: xStart + (xEnd - xStart) * fraction,
    y: axisY - 115 * Math.sin(phase),
  };
});

export function HertzianDipoleSourceEquivalenceDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 430">
        <rect fill="transparent" height="430" width="760" />

        <line stroke={FOREGROUND} strokeWidth="1.8" x1="175" x2="646" y1={axisY} y2={axisY} />
        <SvgArrowhead angle={0} baseX={646} baseY={axisY} color={FOREGROUND} halfWidth={3.5} length={7} />
        <line stroke={FOREGROUND} strokeWidth="1.8" x1="175" x2="175" y1="365" y2="63" />
        <SvgArrowhead angle={-90} baseX={175} baseY={63} color={FOREGROUND} halfWidth={3.5} length={7} />
        <line stroke={FOREGROUND} strokeWidth="1.8" x1="95" x2="95" y1="365" y2="63" />
        <SvgArrowhead angle={-90} baseX={95} baseY={63} color={FOREGROUND} halfWidth={3.5} length={7} />

        <path d={harmonicPath(115, 0)} fill="none" stroke={CHARGE} strokeWidth="1.8" />
        <path d={harmonicPath(78, Math.PI / 2)} fill="none" stroke={CURRENT} strokeWidth="1.8" />

        {chargeSamples.map(({ x, y }, index) => (
          <g key={index}>
            <circle cx={x} cy={axisY} fill={FOREGROUND} r="10" />
            <circle cx={x} cy={y} fill={CHARGE} r="11" stroke={FOREGROUND} strokeWidth="0.8" />
          </g>
        ))}

        <SvgLabel fill={CHARGE} x={273} y={71}>+q</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={250} y={263}>-q</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={589} y={249}>Time (t)</SvgLabel>
        <SvgLabel fill={CURRENT} x={95} y={38}>Current (I)</SvgLabel>
        <SvgLabel fill={CHARGE} x={220} y={38}>Displacement of +ve charge (d)</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="1.4" x1="83" x2="108" y1="142" y2="142" />
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="83" x2="108" y1="298" y2="298" />
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={77} y={147}>Iᴹ</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={77} y={303}>-Iᴹ</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={163} y={225}>0</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="163" x2="187" y1="105" y2="105" />
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="163" x2="187" y1="335" y2="335" />
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={157} y={110}>dᴹ</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={157} y={340}>-dᴹ</SvgLabel>

        <ellipse cx="570" cy="365" fill="var(--background)" rx="55" ry="35" stroke={FOREGROUND} strokeWidth="2" />
        <SvgLabel fill={FOREGROUND} x={570} y={360}>A.C. current</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={570} y={383}>source</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="2" x1="625" x2="625" y1="342" y2="398" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="642" x2="642" y1="326" y2="414" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="625" x2="642" y1="342" y2="342" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="625" x2="642" y1="398" y2="398" />
        <line stroke={FOREGROUND} strokeWidth="1.7" x1="615" x2="615" y1="386" y2="350" />
        <SvgArrowhead angle={-90} baseX={615} baseY={350} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={600} y={352}>I</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={600} y={398}>I</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={642} y={311}>+</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={642} y={417}>-</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={650} y={375}>dᴹ</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: HertzianDipoleSourceEquivalenceDiagram,
} satisfies PhysicsDiagramDefinition;
