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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=58&figure=45;page=60&figure=47",
  slug: "bound-current-cancellation",
  summary:
    "Neighboring microscopic currents cancel at a shared face, while unmatched current remains where magnetisation varies or meets a boundary.",
  tags: ["Bound current", "Magnetisation", "Surface current", "Volume current"],
  title: "Cancellation and survival of bound currents",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const CURRENT = "var(--chart-1)";
const MATERIAL = "var(--chart-4)";
const FOREGROUND = "var(--foreground)";

function LineArrow({
  color = FOREGROUND,
  x1,
  x2,
  y1,
  y2,
}: {
  color?: string;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}) {
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

  return (
    <g>
      <line stroke={color} strokeWidth="1.7" x1={x1} x2={x2} y1={y1} y2={y2} />
      <SvgArrowhead angle={angle} baseX={x2} baseY={y2} color={color} halfWidth={3} length={6} />
    </g>
  );
}

export function BoundCurrentCancellationDiagram({
  className,
  showCaption = true,
  style,
}: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame
      caption={showCaption ? metadata.summary : undefined}
      className={className}
      style={{ maxWidth: 740, ...style }}
      title={metadata.title}
    >
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 740 440">
        <rect fill="transparent" height="440" width="740" />

        <rect fill="none" height="112" stroke={FOREGROUND} strokeWidth="1.5" width="185" x="90" y="78" />
        <rect fill="none" height="112" stroke={FOREGROUND} strokeWidth="1.5" width="185" x="90" y="190" />
        <path d="M 90 78 L 120 52 L 305 52 L 275 78 M 275 78 L 305 52 L 305 164 L 275 190" fill="none" stroke={FOREGROUND} strokeWidth="1.5" />
        <path d="M 275 190 L 305 164 L 305 276 L 275 302 M 90 302 L 120 276 L 305 276" fill="none" stroke={FOREGROUND} strokeWidth="1.5" />
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="90" x2="120" y1="190" y2="164" />
        <line stroke={FOREGROUND} strokeWidth="1.5" x1="120" x2="305" y1="164" y2="164" />

        <LineArrow color={CURRENT} x1={135} x2={220} y1={69} y2={69} />
        <LineArrow color={CURRENT} x1={132} x2={132} y1={96} y2={145} />
        <LineArrow color={CURRENT} x1={250} x2={250} y1={145} y2={96} />
        <LineArrow color={CURRENT} x1={230} x2={165} y1={178} y2={178} />
        <SvgLabel fill={FOREGROUND} x={234} y={91}>I₂</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={146} y={148}>I₂</SvgLabel>

        <LineArrow color={CURRENT} x1={135} x2={220} y1={177} y2={177} />
        <LineArrow color={CURRENT} x1={132} x2={132} y1={211} y2={270} />
        <LineArrow color={CURRENT} x1={250} x2={250} y1={270} y2={211} />
        <LineArrow color={CURRENT} x1={230} x2={165} y1={289} y2={289} />
        <SvgLabel fill={FOREGROUND} x={234} y={210}>I₁</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={146} y={272}>I₁</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={218} y={157}>Jᵧ(z)</SvgLabel>

        <LineArrow x1={310} x2={372} y1={110} y2={110} />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={379} y={116}>Mₓ(z+Δz)</SvgLabel>
        <LineArrow x1={310} x2={372} y1={247} y2={247} />
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={379} y={253}>Mₓ(z)</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="326" x2="282" y1="180" y2="180" />
        <SvgArrowhead angle={180} baseX={282} baseY={180} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={349} y={183}>Area, S</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="1.4" x1="90" x2="275" y1="322" y2="322" />
        <SvgArrowhead angle={180} baseX={90} baseY={322} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgArrowhead angle={0} baseX={275} baseY={322} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={183} y={344}>Δx</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="72" x2="72" y1="190" y2="302" />
        <SvgArrowhead angle={-90} baseX={72} baseY={190} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgArrowhead angle={90} baseX={72} baseY={302} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={48} y={250}>Δz</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="92" x2="119" y1="184" y2="162" />
        <SvgArrowhead angle={141} baseX={92} baseY={184} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgArrowhead angle={-39} baseX={119} baseY={162} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={84} y={155}>Δy</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={92} y={368}>(x, y, z)</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={92} y={42}>(x, y, z+Δz)</SvgLabel>

        <path
          d="M 487 220 C 468 191 492 169 514 174 C 520 146 550 142 566 159 C 586 135 619 151 618 178 C 649 177 659 208 644 227 C 668 245 653 278 628 279 C 629 309 595 318 578 297 C 560 323 525 310 526 284 C 494 293 474 264 490 242 C 474 235 475 225 487 220 Z"
          fill={MATERIAL}
          stroke="none"
        />
        <path d="M 475 105 L 545 132 L 510 205 L 440 178 Z" fill="none" stroke={FOREGROUND} strokeDasharray="8 6" strokeWidth="1.5" />
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="455" x2="487" y1="95" y2="38" />
        <SvgLabel fill={FOREGROUND} x={459} y={30}>L</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.4" x1="468" x2="498" y1="157" y2="143" />
        <SvgArrowhead angle={-25} baseX={498} baseY={143} color={FOREGROUND} halfWidth={3} length={6} />
        <g aria-label="n hat">
          <SvgLabel fill={FOREGROUND} x={455} y={169}>n</SvgLabel>
          <path d="M 449 154 L 455 148 L 461 154" fill="none" stroke={FOREGROUND} strokeWidth="1.4" />
        </g>
        <circle cx="526" cy="121" fill={FOREGROUND} r="5" />
        <SvgLabel fill={FOREGROUND} x={498} y={107}>I length</SvgLabel>
        <LineArrow x1={568} x2={568} y1={263} y2={186} />
        <SvgLabel fill={FOREGROUND} x={590} y={233}>M</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: BoundCurrentCancellationDiagram,
} satisfies PhysicsDiagramDefinition;
