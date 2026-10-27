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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=50&figure=36",
  slug: "meissner-field-penetration",
  summary:
    "Exponential magnetic-field penetration into a superconducting slab alongside flux exclusion from a superconductor.",
  tags: ["Meissner effect", "London penetration depth", "Superconductor", "Magnetic field"],
  title: "Magnetic-field penetration and flux exclusion",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-2)";
const FOREGROUND = "var(--foreground)";

const penetrationCurve = Array.from({ length: 61 }, (_, index) => {
  const scaledDepth = (4 * index) / 60;
  return {
    x: 110 + 55 * scaledDepth,
    y: 335 - 165 * Math.exp(-scaledDepth),
  };
});

const penetrationPath = penetrationCurve
  .map(({ x, y }, index) => `${index === 0 ? "M" : "L"} ${x} ${y}`)
  .join(" ");

const straightFieldLines = [405, 455, 625, 675] as const;

export function MeissnerFieldPenetrationDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 430">
        <rect fill="transparent" height="430" width="720" />

        <rect fill="var(--chart-4)" fillOpacity="0.3" height="255" width="220" x="110" y="80" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="110" x2="110" y1="335" y2="52" />
        <SvgArrowhead angle={-90} baseX={110} baseY={52} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={FOREGROUND} strokeWidth="2" x1="110" x2="345" y1="335" y2="335" />
        <SvgArrowhead angle={0} baseX={345} baseY={335} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={FIELD} strokeWidth="2" x1="20" x2="110" y1="170" y2="170" />
        <path d={penetrationPath} fill="none" stroke={FIELD} strokeWidth="2.4" />

        <SvgLabel fill={FOREGROUND} textAnchor="start" x={68} y={39}>B-field</SvgLabel>
        <g aria-label="B applied">
          <SvgLabel fill={FOREGROUND} x={52} y={163}>B</SvgLabel>
          <SvgLabel fill={FOREGROUND} textAnchor="start" x={62} y={170}>applied</SvgLabel>
        </g>
        <SvgLabel fill={FOREGROUND} x={226} y={125}>Superconducting</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={226} y={148}>semi-infinite slab</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="112" x2="165" y1="292" y2="292" />
        <SvgArrowhead angle={180} baseX={112} baseY={292} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgArrowhead angle={0} baseX={165} baseY={292} color={FOREGROUND} halfWidth={3} length={6} />
        <g aria-label="lambda L">
          <SvgLabel fill={FOREGROUND} x={133} y={315}>λ</SvgLabel>
          <SvgLabel fill={FOREGROUND} x={149} y={321}>L</SvgLabel>
        </g>
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={342} y={371}>Distance, x</SvgLabel>

        {straightFieldLines.map((x) => (
          <g key={x}>
            <line stroke={FIELD} strokeWidth="2" x1={x} x2={x} y1="380" y2="48" />
            <SvgArrowhead angle={-90} baseX={x} baseY={48} color={FIELD} halfWidth={3.5} length={7} />
            <SvgArrowhead angle={-90} baseX={x} baseY={214} color={FIELD} halfWidth={3} length={6} />
          </g>
        ))}
        <path
          d="M 505 380 L 505 350 C 505 335 493 332 493 315 L 493 125 C 493 108 505 105 505 90 L 505 48"
          fill="none"
          stroke={FIELD}
          strokeWidth="2"
        />
        <SvgArrowhead angle={-90} baseX={505} baseY={48} color={FIELD} halfWidth={3.5} length={7} />
        <SvgArrowhead angle={-90} baseX={493} baseY={214} color={FIELD} halfWidth={3} length={6} />
        <path
          d="M 575 380 L 575 350 C 575 335 587 332 587 315 L 587 125 C 587 108 575 105 575 90 L 575 48"
          fill="none"
          stroke={FIELD}
          strokeWidth="2"
        />
        <SvgArrowhead angle={-90} baseX={575} baseY={48} color={FIELD} halfWidth={3.5} length={7} />
        <SvgArrowhead angle={-90} baseX={587} baseY={214} color={FIELD} halfWidth={3} length={6} />

        <path
          d="M 527 116 A 13 13 0 0 1 553 116 L 553 319 A 13 13 0 0 1 527 319 Z"
          fill="var(--muted)"
          stroke="var(--muted-foreground)"
          strokeWidth="1.2"
        />
        <ellipse cx="540" cy="116" fill="var(--border)" rx="13" ry="16" stroke={FOREGROUND} strokeWidth="1" />
        <circle cx="540" cy="245" fill="var(--background)" r="4" stroke={FOREGROUND} strokeWidth="1.4" />
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="535" x2="465" y1="243" y2="205" />
        <g aria-label="B ≈ 0">
          <SvgLabel fill={FOREGROUND} x={430} y={199}>B</SvgLabel>
          <path d="M 442 191 C 446 187 450 195 454 191 C 458 187 462 195 466 191" fill="none" stroke={FOREGROUND} strokeWidth="1.4" />
          <path d="M 442 198 C 446 194 450 202 454 198 C 458 194 462 202 466 198" fill="none" stroke={FOREGROUND} strokeWidth="1.4" />
          <SvgLabel fill={FOREGROUND} x={480} y={199}>0</SvgLabel>
        </g>
        <SvgLabel fill={FIELD} x={540} y={410}>B-field</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: MeissnerFieldPenetrationDiagram,
} satisfies PhysicsDiagramDefinition;
