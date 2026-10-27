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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=11&figure=8",
  slug: "biot-savart-current-element-geometry",
  summary:
    "A directed current element, the displacement to a field point, and the circulating magnetic-field contribution used in the Biot-Savart law.",
  tags: ["Biot-Savart law", "Current element", "Magnetic field", "Cross product"],
  title: "Biot-Savart current-element geometry",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FIELD = "var(--chart-2)";
const DIPOLE = "var(--chart-1)";
const CHARGE = "var(--destructive)";
const FOREGROUND = "var(--foreground)";
const BACKGROUND = "var(--background)";

const fieldDirectionArrows = [
  { angle: 170, baseX: 245, baseY: 92, fromX: 270, fromY: 88 },
  { angle: -170, baseX: 495, baseY: 93, fromX: 520, fromY: 98 },
  { angle: 14, baseX: 250, baseY: 196, fromX: 225, fromY: 190 },
  { angle: -12, baseX: 500, baseY: 193, fromX: 475, fromY: 198 },
  { angle: -170, baseX: 405, baseY: 116, fromX: 430, fromY: 121 },
  { angle: 14, baseX: 335, baseY: 176, fromX: 310, fromY: 170 },
] as const;

export function BiotSavartCurrentElementGeometryDiagram({
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
        <line stroke={FOREGROUND} strokeDasharray="3 5" strokeWidth="2" x1="360" x2="360" y1="32" y2="398" />
        <SvgArrowhead angle={-90} baseX={360} baseY={32} color={FOREGROUND} halfWidth={4} length={8} />

        <ellipse cx="360" cy="145" fill="none" rx="245" ry="62" stroke={FIELD} strokeWidth="2" />
        <ellipse cx="360" cy="145" fill="none" rx="90" ry="32" stroke={FIELD} strokeWidth="2" />
        {fieldDirectionArrows.map((arrow) => {
          const radians = (arrow.angle * Math.PI) / 180;
          const eraseX = arrow.baseX + 14 * Math.cos(radians);
          const eraseY = arrow.baseY + 14 * Math.sin(radians);

          return (
            <g key={`${arrow.baseX}-${arrow.baseY}`}>
              <line
                stroke={BACKGROUND}
                strokeWidth="7"
                x1={arrow.fromX}
                x2={eraseX}
                y1={arrow.fromY}
                y2={eraseY}
              />
              <line
                stroke={FIELD}
                strokeWidth="2"
                x1={arrow.fromX}
                x2={arrow.baseX}
                y1={arrow.fromY}
                y2={arrow.baseY}
              />
              <SvgArrowhead
                angle={arrow.angle}
                baseX={arrow.baseX}
                baseY={arrow.baseY}
                color={FIELD}
                halfWidth={3.5}
                length={7}
              />
            </g>
          );
        })}

        <circle cx="82" cy="145" fill={FIELD} r="8" />
        <line stroke={FIELD} strokeWidth="5" x1="628" x2="642" y1="138" y2="152" />
        <line stroke={FIELD} strokeWidth="5" x1="642" x2="628" y1="138" y2="152" />
        <circle cx="585" cy="175" fill={FOREGROUND} r="4.5" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="360" x2="581" y1="370" y2="178" />

        <circle cx="360" cy="325" fill="var(--chart-5)" r="10" stroke={CHARGE} strokeWidth="1.5" />
        <circle cx="360" cy="370" fill={FOREGROUND} r="10" />
        <line stroke={DIPOLE} strokeWidth="2.4" x1="360" x2="360" y1="362" y2="337" />
        <SvgArrowhead angle={-90} baseX={360} baseY={337} color={DIPOLE} halfWidth={4} length={8} />

        <line stroke={FOREGROUND} strokeWidth="2" x1="450" x2="450" y1="373" y2="323" />
        <SvgArrowhead angle={-90} baseX={450} baseY={323} color={FOREGROUND} halfWidth={4} length={8} />
        <path d="M 360 286 A 42 42 0 0 1 392 306" fill="none" stroke={FOREGROUND} strokeWidth="1.5" />
        <SvgArrowhead angle={52} baseX={392} baseY={306} color={FOREGROUND} halfWidth={3.5} length={7} />

        <SvgLabel fill={FIELD} x={458} y={72}>dB-field</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={570} y={153}>P</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={503} y={267}>r</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={384} y={322}>θ</SvgLabel>
        <SvgLabel fill={CHARGE} textAnchor="end" x={342} y={313}>+q</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={342} y={394}>-q</SvgLabel>
        <SvgLabel fill={DIPOLE} textAnchor="end" x={322} y={348}>dl</SvgLabel>
        <SvgLabel fill={DIPOLE} textAnchor="start" x={120} y={326}>Dipole</SvgLabel>
        <SvgLabel fill={DIPOLE} textAnchor="start" x={86} y={350}>moment, qdl</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={466} y={352}>dl</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={500} y={326}>Current-length</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={500} y={350}>element, Idl</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: BiotSavartCurrentElementGeometryDiagram,
} satisfies PhysicsDiagramDefinition;
