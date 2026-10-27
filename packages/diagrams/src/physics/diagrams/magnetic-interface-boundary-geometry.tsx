import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  SvgNormalMark,
  SvgParallelMark,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "field",
  referenceImage:
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=68&figure=53",
  slug: "magnetic-interface-boundary-geometry",
  summary:
    "Pillbox and narrow-loop constructions across a magnetic-material interface, with normal and tangential field components.",
  tags: ["Magnetic boundary condition", "Permeability interface", "Pillbox", "Tangential field"],
  title: "Magnetic-field components at a material interface",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-2)";
const SOURCE = "var(--chart-1)";
const FOREGROUND = "var(--foreground)";

const coilRows = [318, 330, 342, 354] as const;

export function MagneticInterfaceBoundaryGeometryDiagram({
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

        <rect fill="var(--chart-5)" fillOpacity="0.65" height="175" stroke={FOREGROUND} strokeWidth="1.8" width="300" x="160" y="45" />
        <rect fill="var(--background)" height="165" stroke={FOREGROUND} strokeWidth="1.8" width="300" x="160" y="220" />
        <rect fill="var(--chart-4)" fillOpacity="0.55" height="18" width="300" x="160" y="211" />
        <line stroke={FOREGROUND} strokeDasharray="3 4" strokeWidth="1.2" x1="160" x2="460" y1="220" y2="220" />

        <SvgLabel fill={FOREGROUND} x={225} y={79}>Medium 2</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={225} y={103}>μ₂ = 2</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={395} y={343}>Medium 1</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={395} y={367}>μ₁ = 1</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={150} y={213}>Interface</SvgLabel>

        {coilRows.map((y) => (
          <ellipse cx="230" cy={y} fill="none" key={y} rx="35" ry="6" stroke={SOURCE} strokeWidth="1.7" />
        ))}
        {[75, 87, 99].map((y) => (
          <path d={`M 360 ${y} C 380 ${y - 12} 410 ${y - 12} 430 ${y}`} fill="none" key={y} stroke={SOURCE} strokeWidth="1.7" />
        ))}

        <line stroke={FIELD} strokeWidth="2" x1="225" x2="282" y1="313" y2="225" />
        <SvgArrowhead angle={-57} baseX={282} baseY={225} color={FIELD} halfWidth={4} length={8} />
        <SvgLabel fill={FIELD} x={238} y={289}>B₁</SvgLabel>
        <line stroke={FIELD} strokeWidth="2" x1="282" x2="390" y1="225" y2="132" />
        <SvgArrowhead angle={-41} baseX={390} baseY={132} color={FIELD} halfWidth={4} length={8} />
        <SvgLabel fill={FIELD} x={360} y={171}>B₂</SvgLabel>

        <ellipse cx="235" cy="221" fill="var(--muted)" rx="27" ry="8" stroke={FOREGROUND} strokeWidth="1.2" />
        <path d="M 208 221 L 208 244 A 27 8 0 0 0 262 244 L 262 221" fill="var(--muted)" stroke={FOREGROUND} strokeWidth="1.2" />
        <SvgLabel fill={FOREGROUND} x={235} y={205}>S</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.3" x1="273" x2="273" y1="211" y2="252" />
        <SvgArrowhead angle={-90} baseX={273} baseY={211} color={FOREGROUND} halfWidth={2.5} length={5} />
        <SvgArrowhead angle={90} baseX={273} baseY={252} color={FOREGROUND} halfWidth={2.5} length={5} />
        <SvgLabel fill={FOREGROUND} x={287} y={237}>h</SvgLabel>

        <rect fill="none" height="38" stroke={FOREGROUND} strokeWidth="1.5" width="58" x="330" y="202" />
        <line stroke={FOREGROUND} strokeWidth="1.7" x1="380" x2="340" y1="202" y2="202" />
        <SvgArrowhead angle={180} baseX={340} baseY={202} color={FOREGROUND} halfWidth={3} length={6} />
        <line stroke={FOREGROUND} strokeWidth="1.3" x1="398" x2="398" y1="202" y2="240" />
        <SvgArrowhead angle={-90} baseX={398} baseY={202} color={FOREGROUND} halfWidth={2.5} length={5} />
        <SvgArrowhead angle={90} baseX={398} baseY={240} color={FOREGROUND} halfWidth={2.5} length={5} />
        <SvgLabel fill={FOREGROUND} x={411} y={225}>h</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.3" x1="330" x2="388" y1="255" y2="255" />
        <SvgArrowhead angle={180} baseX={330} baseY={255} color={FOREGROUND} halfWidth={2.5} length={5} />
        <SvgArrowhead angle={0} baseX={388} baseY={255} color={FOREGROUND} halfWidth={2.5} length={5} />
        <SvgLabel fill={FOREGROUND} x={359} y={275}>l</SvgLabel>

        <SvgLabel fill={FIELD} x={560} y={80}>B-field</SvgLabel>
        <line stroke={FIELD} strokeWidth="1.8" x1="505" x2="620" y1="245" y2="245" />
        <SvgArrowhead angle={0} baseX={620} baseY={245} color={FIELD} halfWidth={3.5} length={7} />
        <line stroke={FIELD} strokeWidth="1.8" x1="620" x2="620" y1="245" y2="175" />
        <SvgArrowhead angle={-90} baseX={620} baseY={175} color={FIELD} halfWidth={3.5} length={7} />
        <line stroke={FIELD} strokeWidth="2" x1="505" x2="555" y1="245" y2="175" />
        <SvgArrowhead angle={-54} baseX={555} baseY={175} color={FIELD} halfWidth={4} length={8} />
        <line stroke={FIELD} strokeWidth="2" x1="505" x2="620" y1="245" y2="175" />
        <SvgArrowhead angle={-31} baseX={620} baseY={175} color={FIELD} halfWidth={4} length={8} />
        <SvgLabel fill={FIELD} x={540} y={194}>B₁</SvgLabel>
        <SvgLabel fill={FIELD} x={623} y={161}>B₂</SvgLabel>

        <g aria-label="B₂⊥ = B₁⊥">
          <SvgLabel fill={FIELD} textAnchor="start" x={560} y={290}>B₂</SvgLabel>
          <SvgNormalMark color={FIELD} x={584} y={280} />
          <SvgLabel fill={FIELD} textAnchor="start" x={600} y={290}>= B₁</SvgLabel>
          <SvgNormalMark color={FIELD} x={641} y={280} />
        </g>
        <g aria-label="H₂∥ = H₁∥">
          <SvgLabel fill={FIELD} textAnchor="start" x={500} y={326}>H₂</SvgLabel>
          <SvgParallelMark color={FIELD} x={526} y={316} />
          <SvgLabel fill={FIELD} textAnchor="start" x={542} y={326}>= H₁</SvgLabel>
          <SvgParallelMark color={FIELD} x={585} y={316} />
        </g>
        <g aria-label="B₂∥ = 2B₁∥">
          <SvgLabel fill={FIELD} textAnchor="start" x={500} y={362}>B₂</SvgLabel>
          <SvgParallelMark color={FIELD} x={524} y={352} />
          <SvgLabel fill={FIELD} textAnchor="start" x={540} y={362}>= 2B₁</SvgLabel>
          <SvgParallelMark color={FIELD} x={594} y={352} />
        </g>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: MagneticInterfaceBoundaryGeometryDiagram,
} satisfies PhysicsDiagramDefinition;
