import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "interaction",
  referenceImage:
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=51&figure=38;page=52&figure=39",
  slug: "polar-and-induced-dipoles",
  summary:
    "A permanent molecular dipole compared with field-induced charge displacement in a non-polar atom.",
  tags: ["Polar dielectric", "Non-polar dielectric", "Electric dipole", "Polarisation"],
  title: "Permanent and field-induced electric dipoles",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-1)";
const NUCLEUS = "var(--destructive)";
const LEADER = "var(--chart-4)";
const FOREGROUND = "var(--foreground)";
const BACKGROUND = "var(--background)";

function Leader({ x1, x2, y1, y2 }: { x1: number; x2: number; y1: number; y2: number }) {
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

  return (
    <g>
      <line stroke={LEADER} strokeWidth="1.6" x1={x1} x2={x2} y1={y1} y2={y2} />
      <SvgArrowhead angle={angle} baseX={x2} baseY={y2} color={LEADER} halfWidth={3} length={6} />
    </g>
  );
}

export function PolarAndInducedDipolesDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 720 500">
        <rect fill="transparent" height="500" width="720" />

        <circle cx="300" cy="136" fill={FOREGROUND} r="67" />
        <circle cx="220" cy="130" fill={FOREGROUND} r="25" />
        <circle cx="245" cy="201" fill={FOREGROUND} r="25" />
        <circle cx="300" cy="136" fill={NUCLEUS} r="18" />
        <circle cx="218" cy="129" fill={NUCLEUS} r="8" />
        <circle cx="244" cy="202" fill={NUCLEUS} r="8" />
        <circle cx="313" cy="91" fill="none" r="4" stroke={LEADER} strokeWidth="1.5" />
        <circle cx="274" cy="158" fill={BACKGROUND} r="4" stroke={LEADER} strokeWidth="1.5" />
        <SvgLabel fill={LEADER} x={251} y={165}>+</SvgLabel>
        <SvgLabel fill={LEADER} x={256} y={186}>+</SvgLabel>

        <SvgLabel fill={FOREGROUND} x={132} y={40}>Hydrogen</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={132} y={64}>nucleus</SvgLabel>
        <Leader x1={157} x2={211} y1={69} y2={117} />
        <SvgLabel fill={FOREGROUND} x={478} y={40}>Electron</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={478} y={64}>cloud</SvgLabel>
        <Leader x1={440} x2={320} y1={70} y2={91} />
        <SvgLabel fill={FOREGROUND} x={490} y={142}>Oxygen</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={490} y={166}>nucleus</SvgLabel>
        <Leader x1={446} x2={321} y1={153} y2={138} />
        <SvgLabel fill={FOREGROUND} x={140} y={244}>Centre of net</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={140} y={268}>positive charge</SvgLabel>
        <Leader x1={183} x2={248} y1={239} y2={174} />
        <SvgLabel fill={FOREGROUND} x={440} y={244}>Centre of net</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={440} y={268}>negative charge</SvgLabel>
        <Leader x1={403} x2={317} y1={238} y2={101} />

        <circle cx="180" cy="390" fill={FOREGROUND} r="53" />
        <circle cx="180" cy="390" fill={NUCLEUS} r="17" />
        <SvgLabel fill={FOREGROUND} x={180} y={306}>Nucleus</SvgLabel>
        <Leader x1={180} x2={180} y1={315} y2={365} />
        <SvgLabel fill={FOREGROUND} x={180} y={470}>Electron</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={180} y={492}>cloud</SvgLabel>
        <Leader x1={180} x2={180} y1={454} y2={421} />

        <line stroke={FIELD} strokeWidth="2" x1="392" x2="655" y1="282" y2="282" />
        <SvgArrowhead angle={0} baseX={655} baseY={282} color={FIELD} halfWidth={4} length={8} />
        <SvgLabel fill={FIELD} x={520} y={267}>E-field</SvgLabel>
        <circle cx="520" cy="390" fill={FOREGROUND} r="53" />
        <circle cx="545" cy="390" fill={NUCLEUS} r="17" />
        <SvgLabel fill={FOREGROUND} x={545} y={306}>Displaced</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={545} y={328}>Nucleus</SvgLabel>
        <Leader x1={545} x2={545} y1={333} y2={370} />
        <SvgLabel fill={FOREGROUND} x={520} y={470}>Electron</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={520} y={492}>cloud</SvgLabel>
        <Leader x1={520} x2={520} y1={454} y2={421} />
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: PolarAndInducedDipolesDiagram,
} satisfies PhysicsDiagramDefinition;
