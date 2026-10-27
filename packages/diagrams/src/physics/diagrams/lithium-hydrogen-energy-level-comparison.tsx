import {
  PhysicsDiagramFrame,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "graph",
  referenceImage: "main.pdf#page=78&figure=16",
  slug: "lithium-hydrogen-energy-level-comparison",
  summary:
    "Lithium energy levels split by orbital quantum number compared with the n-only degeneracy of hydrogen levels.",
  tags: ["Lithium", "Hydrogen", "Multi-electron atom", "Core penetration", "Shielding"],
  title: "Lithium energy levels compared with hydrogen",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";
const LITHIUM = "var(--destructive)";
const HYDROGEN = "var(--chart-1)";
const GUIDE = "var(--muted-foreground)";

const columns = [
  { l: 0, label: "l = 0", x: 190 },
  { l: 1, label: "l = 1", x: 290 },
  { l: 2, label: "l = 2", x: 390 },
  { l: 3, label: "l = 3", x: 490 },
  { l: 4, label: "l = 4", x: 570 },
] as const;

const lithiumLevels = [
  { energy: -5.39, l: 0, label: "2s", n: 2 },
  { energy: -2.02, l: 0, label: "3s", n: 3 },
  { energy: -1.05, l: 0, label: "4s", n: 4 },
  { energy: -0.64, l: 0, label: "5s", n: 5 },
  { energy: -3.54, l: 1, label: "2p", n: 2 },
  { energy: -1.56, l: 1, label: "3p", n: 3 },
  { energy: -0.87, l: 1, label: "4p", n: 4 },
  { energy: -0.56, l: 1, label: "5p", n: 5 },
  { energy: -1.51, l: 2, label: "3d", n: 3 },
  { energy: -0.85, l: 2, label: "4d", n: 4 },
  { energy: -0.544, l: 2, label: "5d", n: 5 },
  { energy: -0.85, l: 3, label: "4f", n: 4 },
  { energy: -0.544, l: 3, label: "5f", n: 5 },
  { energy: -0.544, l: 4, label: "5g", n: 5 },
] as const;

const hydrogenLevels = [
  { energy: -3.4, label: "n = 2", n: 2 },
  { energy: -1.511, label: "n = 3", n: 3 },
  { energy: -0.85, label: "n = 4", n: 4 },
  { energy: -0.544, label: "n = 5", n: 5 },
] as const;

function energyY(energy: number) {
  return 55 + (-energy / 5.5) * 345;
}

export function LithiumHydrogenEnergyLevelComparisonDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 480">
        <rect fill="transparent" height="480" width="760" />

        <line stroke={FOREGROUND} strokeWidth="1.6" x1="82" x2="82" y1="55" y2="400" />
        {Array.from({ length: 6 }, (_, index) => -index).map((energy) => {
          const y = energyY(energy);
          return (
            <g key={energy}>
              <line stroke={FOREGROUND} strokeWidth="1.2" x1="76" x2="88" y1={y} y2={y} />
              <SvgLabel fill={FOREGROUND} textAnchor="end" x={70} y={y + 4}>{energy}</SvgLabel>
            </g>
          );
        })}
        <SvgLabel fill={FOREGROUND} x={30} y={225}>Energy (eV)</SvgLabel>

        {columns.map(({ label, x }) => (
          <SvgLabel fill={FOREGROUND} key={label} x={x} y={35}>{label}</SvgLabel>
        ))}

        {[2, 3, 4, 5].map((n) => {
          const shellLevels = lithiumLevels.filter((level) => level.n === n);
          const hydrogenLevel = hydrogenLevels.find((level) => level.n === n);
          if (!hydrogenLevel) return null;
          const points = [
            ...shellLevels.map((level) => {
              const column = columns.find(({ l }) => l === level.l);
              return `${column?.x ?? 0},${energyY(level.energy)}`;
            }),
            `665,${energyY(hydrogenLevel.energy)}`,
          ].join(" ");
          return <polyline fill="none" key={n} points={points} stroke={GUIDE} strokeOpacity="0.45" strokeWidth="1" />;
        })}

        {lithiumLevels.map(({ energy, l, label }) => {
          const x = columns.find((column) => column.l === l)?.x ?? 0;
          const y = energyY(energy);
          return (
            <g key={label}>
              <line stroke={LITHIUM} strokeWidth="2" x1={x - 34} x2={x + 34} y1={y} y2={y} />
              <SvgLabel fill={FOREGROUND} x={x} y={y - 7}>{label}</SvgLabel>
            </g>
          );
        })}

        {hydrogenLevels.map(({ energy, label }) => {
          const y = energyY(energy);
          return (
            <g key={label}>
              <line stroke={HYDROGEN} strokeDasharray="6 4" strokeWidth="1.8" x1="665" x2="720" y1={y} y2={y} />
              <SvgLabel fill={HYDROGEN} textAnchor="end" x={655} y={y + 4}>{label}</SvgLabel>
            </g>
          );
        })}

        <SvgLabel fill={FOREGROUND} x={410} y={438}>Lithium energy level diagram</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={690} y={438}>Hydrogen levels</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={230} y={energyY(-5.39) + 5}>Ground state</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: LithiumHydrogenEnergyLevelComparisonDiagram,
} satisfies PhysicsDiagramDefinition;
