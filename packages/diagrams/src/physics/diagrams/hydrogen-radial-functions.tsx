import {
  PhysicsDiagramFrame,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "wave",
  referenceImage: "main.pdf#page=49&figure=8",
  slug: "hydrogen-radial-functions",
  summary:
    "Representative hydrogen radial functions showing the nodes and shapes of the 1s, 2s, 2p, 3s, 3p, and 3d states.",
  tags: ["Hydrogen", "Radial wavefunction", "Radial node", "Atomic orbital"],
  title: "Hydrogen radial wavefunctions",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";
const S_CURVE = "var(--destructive)";
const P_CURVE = "var(--chart-1)";
const D_CURVE = "var(--chart-2)";

type RadialState = {
  color: string;
  label: string;
  orbital: "1s" | "2s" | "2p" | "3s" | "3p" | "3d";
  radiusMaximum: number;
  x: number;
  y: number;
};

const states: readonly RadialState[] = [
  { color: S_CURVE, label: "1s orbital", orbital: "1s", radiusMaximum: 6, x: 118, y: 72 },
  { color: S_CURVE, label: "2s orbital", orbital: "2s", radiusMaximum: 12, x: 118, y: 225 },
  { color: P_CURVE, label: "2p orbital", orbital: "2p", radiusMaximum: 12, x: 352, y: 225 },
  { color: S_CURVE, label: "3s orbital", orbital: "3s", radiusMaximum: 20, x: 118, y: 378 },
  { color: P_CURVE, label: "3p orbital", orbital: "3p", radiusMaximum: 20, x: 352, y: 378 },
  { color: D_CURVE, label: "3d orbital", orbital: "3d", radiusMaximum: 20, x: 568, y: 378 },
] as const;

function radialValue(orbital: RadialState["orbital"], radius: number) {
  if (orbital === "1s") return Math.exp(-radius);
  if (orbital === "2s") return (2 - radius) * Math.exp(-radius / 2);
  if (orbital === "2p") return radius * Math.exp(-radius / 2);
  if (orbital === "3s") {
    return (27 - 18 * radius + 2 * radius ** 2) * Math.exp(-radius / 3);
  }
  if (orbital === "3p") return radius * (6 - radius) * Math.exp(-radius / 3);
  return radius ** 2 * Math.exp(-radius / 3);
}

function radialPath(state: RadialState) {
  const width = state.orbital === "3d" ? 150 : 180;
  const baseline = state.y + 82;
  const samples = Array.from({ length: 241 }, (_, index) => {
    const radius = (state.radiusMaximum * index) / 240;
    return { radius, value: radialValue(state.orbital, radius) };
  });
  const maximum = Math.max(...samples.map(({ value }) => Math.abs(value)));

  return samples.map(({ radius, value }, index) => {
    const x = state.x + (width * radius) / state.radiusMaximum;
    const y = baseline - (68 * value) / maximum;
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

function RadialPanel({ state }: { state: RadialState }) {
  const width = state.orbital === "3d" ? 150 : 180;
  const baseline = state.y + 82;

  return (
    <g>
      <line stroke={FOREGROUND} strokeWidth="1.4" x1={state.x} x2={state.x} y1={state.y} y2={baseline + 28} />
      <line stroke={FOREGROUND} strokeWidth="1.4" x1={state.x} x2={state.x + width} y1={baseline} y2={baseline} />
      <path d={radialPath(state)} fill="none" stroke={state.color} strokeWidth="2.2" />
      <SvgLabel fill={FOREGROUND} textAnchor="end" x={state.x - 8} y={state.y + 22}>R(r)</SvgLabel>
      <SvgLabel fill={FOREGROUND} x={state.x + width / 2} y={baseline + 22}>r</SvgLabel>
      <SvgLabel fill={state.color} x={state.x + width * 0.68} y={state.y + 31}>{state.label}</SvgLabel>
    </g>
  );
}

export function HydrogenRadialFunctionsDiagram({
  className,
  showCaption = true,
  style,
}: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame
      caption={showCaption ? metadata.summary : undefined}
      className={className}
      style={{ maxWidth: 780, ...style }}
      title={metadata.title}
    >
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 540">
        <rect fill="transparent" height="540" width="760" />
        <SvgLabel fill="var(--chart-2)" x={380} y={32}>Plot of Radial Wave Function = f(r)</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={82} y={78}>(a)</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={82} y={231}>(b)</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={82} y={384}>(c)</SvgLabel>
        {states.map((state) => <RadialPanel key={state.orbital} state={state} />)}
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: HydrogenRadialFunctionsDiagram,
} satisfies PhysicsDiagramDefinition;
