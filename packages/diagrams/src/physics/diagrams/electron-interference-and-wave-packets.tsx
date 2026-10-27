import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "wave",
  referenceImage: "main.pdf#page=6&figures=1-2",
  slug: "electron-interference-and-wave-packets",
  summary:
    "Local electron detections building a two-slit interference pattern, followed by plane-wave, beat, and localized-packet superpositions.",
  tags: ["Double slit", "Electron interference", "Wave packet", "Superposition"],
  title: "Electron interference and wave-packet localisation",
  topic: "Quantum mechanics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const WAVE = "var(--chart-1)";
const PATH = "var(--destructive)";
const DETECTION = "var(--chart-2)";
const FOREGROUND = "var(--foreground)";
const xStart = 140;
const xEnd = 685;

function sampledWavePath(
  baseline: number,
  amplitude: (x: number) => number,
  phase: (x: number) => number,
) {
  return Array.from({ length: 241 }, (_, index) => {
    const fraction = index / 240;
    const x = xStart + (xEnd - xStart) * fraction;
    const y = baseline - amplitude(fraction) * Math.cos(phase(fraction));
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

const detectionBands = [58, 71, 88, 111, 137, 160, 177, 190] as const;

export function ElectronInterferenceAndWavePacketsDiagram({
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
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 590">
        <rect fill="transparent" height="590" width="760" />

        <SvgLabel fill={FOREGROUND} textAnchor="start" x={35} y={36}>Two-slit electron interference</SvgLabel>
        <circle cx="70" cy="124" fill={FOREGROUND} r="7" />
        <SvgLabel fill={FOREGROUND} x={70} y={99}>source</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="7" x1="230" x2="230" y1="45" y2="101" />
        <line stroke={FOREGROUND} strokeWidth="7" x1="230" x2="230" y1="112" y2="136" />
        <line stroke={FOREGROUND} strokeWidth="7" x1="230" x2="230" y1="147" y2="205" />
        <SvgLabel fill={FOREGROUND} x={230} y={224}>two slits</SvgLabel>
        <line stroke={FOREGROUND} strokeDasharray="6 5" strokeWidth="1.2" x1="70" x2="645" y1="124" y2="124" />
        <line stroke={PATH} strokeWidth="1.4" x1="70" x2="230" y1="124" y2="106" />
        <line stroke={PATH} strokeWidth="1.4" x1="70" x2="230" y1="124" y2="142" />
        <line stroke={PATH} strokeWidth="1.4" x1="230" x2="645" y1="106" y2="68" />
        <line stroke={PATH} strokeWidth="1.4" x1="230" x2="645" y1="142" y2="68" />
        <line stroke={PATH} strokeWidth="1.4" x1="230" x2="645" y1="106" y2="177" />
        <line stroke={PATH} strokeWidth="1.4" x1="230" x2="645" y1="142" y2="177" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="645" x2="645" y1="40" y2="208" />
        <SvgLabel fill={FOREGROUND} x={645} y={227}>detection screen</SvgLabel>
        {detectionBands.map((y, bandIndex) =>
          Array.from({ length: bandIndex % 2 === 0 ? 5 : 2 }, (_, dotIndex) => (
            <circle
              cx={654 + (dotIndex % 2) * 8}
              cy={y + (dotIndex - 2) * 2.3}
              fill={DETECTION}
              key={`${y}-${dotIndex}`}
              r="2.4"
            />
          )),
        )}
        <SvgLabel fill={DETECTION} textAnchor="start" x={676} y={130}>local hits</SvgLabel>
        <line stroke={FOREGROUND} strokeWidth="1.2" x1="70" x2="645" y1="239" y2="239" />
        <SvgArrowhead angle={0} baseX={645} baseY={239} color={FOREGROUND} halfWidth={3} length={6} />
        <SvgLabel fill={FOREGROUND} x={355} y={258}>distance D</SvgLabel>

        <SvgLabel fill={FOREGROUND} textAnchor="start" x={35} y={302}>One wave number</SvgLabel>
        <path
          d={sampledWavePath(315, () => 24, (fraction) => 16 * Math.PI * fraction)}
          fill="none"
          stroke={WAVE}
          strokeWidth="1.8"
        />
        <line stroke={FOREGROUND} strokeOpacity="0.35" x1={xStart} x2={xEnd} y1="315" y2="315" />

        <SvgLabel fill={FOREGROUND} textAnchor="start" x={35} y={402}>Two nearby wave numbers</SvgLabel>
        <path
          d={sampledWavePath(415, (fraction) => 30 * Math.cos(2 * Math.PI * (fraction - 0.5)), (fraction) => 16 * Math.PI * fraction)}
          fill="none"
          stroke={WAVE}
          strokeWidth="1.8"
        />
        <line stroke={FOREGROUND} strokeOpacity="0.35" x1={xStart} x2={xEnd} y1="415" y2="415" />

        <SvgLabel fill={FOREGROUND} textAnchor="start" x={35} y={502}>Many wave numbers</SvgLabel>
        <path
          d={sampledWavePath(515, (fraction) => 36 * Math.exp(-32 * (fraction - 0.5) ** 2), (fraction) => 17 * Math.PI * fraction)}
          fill="none"
          stroke={WAVE}
          strokeWidth="2"
        />
        <line stroke={FOREGROUND} strokeOpacity="0.35" x1={xStart} x2={xEnd} y1="515" y2="515" />
        <SvgLabel fill={WAVE} x={412} y={578}>localised wave packet</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: ElectronInterferenceAndWavePacketsDiagram,
} satisfies PhysicsDiagramDefinition;
