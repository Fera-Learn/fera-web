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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=67&figure=52",
  slug: "electric-interface-boundary-geometry",
  summary:
    "Pillbox and narrow-loop constructions across a dielectric interface, with normal and tangential electric-field components.",
  tags: ["Electric boundary condition", "Dielectric interface", "Pillbox", "Tangential field"],
  title: "Electric-field components at a dielectric interface",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-1)";
const POSITIVE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";

export function ElectricInterfaceBoundaryGeometryDiagram({
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
        <SvgLabel fill={FOREGROUND} x={225} y={103}>ε₂ = 2</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={395} y={343}>Medium 1</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={395} y={367}>ε₁ = 1</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={150} y={213}>Interface</SvgLabel>

        <line stroke={POSITIVE} strokeWidth="9" x1="185" x2="300" y1="355" y2="368" />
        <SvgLabel fill={POSITIVE} x={190} y={340}>+</SvgLabel>
        <SvgLabel fill={POSITIVE} x={225} y={344}>+</SvgLabel>
        <SvgLabel fill={POSITIVE} x={260} y={348}>+</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="9" x1="315" x2="418" y1="65" y2="127" />
        <SvgLabel fill={FOREGROUND} x={325} y={112}>-</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={360} y={130}>-</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={395} y={148}>-</SvgLabel>

        <line stroke={FIELD} strokeWidth="2" x1="215" x2="279" y1="318" y2="225" />
        <SvgArrowhead angle={-55} baseX={279} baseY={225} color={FIELD} halfWidth={4} length={8} />
        <SvgLabel fill={FIELD} x={224} y={294}>E₁</SvgLabel>
        <line stroke={FIELD} strokeWidth="2" x1="279" x2="350" y1="225" y2="132" />
        <SvgArrowhead angle={-53} baseX={350} baseY={132} color={FIELD} halfWidth={4} length={8} />
        <SvgLabel fill={FIELD} x={331} y={171}>E₂</SvgLabel>

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

        <SvgLabel fill={FIELD} x={560} y={80}>E-field</SvgLabel>
        <line stroke={FIELD} strokeWidth="1.8" x1="510" x2="580" y1="245" y2="245" />
        <SvgArrowhead angle={0} baseX={580} baseY={245} color={FIELD} halfWidth={3.5} length={7} />
        <line stroke={FIELD} strokeWidth="1.8" x1="580" x2="580" y1="245" y2="135" />
        <SvgArrowhead angle={-90} baseX={580} baseY={135} color={FIELD} halfWidth={3.5} length={7} />
        <line stroke={FIELD} strokeWidth="2" x1="510" x2="580" y1="245" y2="135" />
        <SvgArrowhead angle={-58} baseX={580} baseY={135} color={FIELD} halfWidth={4} length={8} />
        <line stroke={FIELD} strokeWidth="2" x1="510" x2="580" y1="245" y2="190" />
        <SvgArrowhead angle={-38} baseX={580} baseY={190} color={FIELD} halfWidth={4} length={8} />
        <SvgLabel fill={FIELD} x={500} y={199}>E₁</SvgLabel>
        <SvgLabel fill={FIELD} x={600} y={143}>E₂</SvgLabel>
        <g aria-label="D₂⊥ = D₁⊥">
          <SvgLabel fill={FIELD} textAnchor="start" x={610} y={188}>D₂</SvgLabel>
          <SvgNormalMark color={FIELD} x={634} y={178} />
          <SvgLabel fill={FIELD} textAnchor="start" x={650} y={188}>= D₁</SvgLabel>
          <SvgNormalMark color={FIELD} x={691} y={178} />
        </g>
        <g aria-label="E₂⊥ = ½E₁⊥">
          <SvgLabel fill={FIELD} textAnchor="start" x={610} y={222}>E₂</SvgLabel>
          <SvgNormalMark color={FIELD} x={634} y={212} />
          <SvgLabel fill={FIELD} textAnchor="start" x={650} y={222}>= ½E₁</SvgLabel>
          <SvgNormalMark color={FIELD} x={707} y={212} />
        </g>
        <g aria-label="E₂∥ = E₁∥">
          <SvgLabel fill={FIELD} textAnchor="start" x={500} y={286}>E₂</SvgLabel>
          <SvgParallelMark color={FIELD} x={524} y={276} />
          <SvgLabel fill={FIELD} textAnchor="start" x={540} y={286}>= E₁</SvgLabel>
          <SvgParallelMark color={FIELD} x={581} y={276} />
        </g>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: ElectricInterfaceBoundaryGeometryDiagram,
} satisfies PhysicsDiagramDefinition;
