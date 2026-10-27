import {
  PhysicsDiagramFrame,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "graph",
  referenceImage: "slides1(1) - Tagged.pdf#page=5",
  slug: "water-phase-diagram",
  summary:
    "Pressure-temperature phase map for water, including its negatively sloped melting line, triple point, and critical point.",
  tags: ["Water", "Phase diagram", "Triple point", "Critical point"],
  title: "Phase diagram of water",
  topic: "Condensed Matter Physics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";
const MUTED = "var(--muted-foreground)";

export function WaterPhaseDiagram({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame
      caption={showCaption ? metadata.summary : undefined}
      className={className}
      style={{ maxWidth: 680, ...style }}
      title={metadata.title}
    >
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 680 430">
        <rect fill="transparent" height="430" width="680" />
        <path d="M 92 338 C 178 312 247 278 315 225 L 318 370 L 92 370 Z" fill="var(--chart-3)" fillOpacity="0.18" />
        <path d="M 315 225 C 390 184 478 139 565 96 L 610 96 L 610 370 L 318 370 Z" fill="var(--chart-1)" fillOpacity="0.16" />
        <path d="M 92 58 L 282 58 L 315 225 C 247 278 178 312 92 338 Z" fill="var(--chart-2)" fillOpacity="0.18" />
        <path d="M 282 58 L 610 58 L 610 96 L 565 96 C 478 139 390 184 315 225 Z" fill="var(--chart-4)" fillOpacity="0.18" />

        <line stroke={FOREGROUND} strokeWidth="2" x1="92" x2="92" y1="370" y2="54" />
        <line stroke={FOREGROUND} strokeWidth="2" x1="92" x2="614" y1="370" y2="370" />
        <path d="M 92 338 C 178 312 247 278 315 225" fill="none" stroke={FOREGROUND} strokeWidth="2.5" />
        <path d="M 282 58 C 292 112 304 174 315 225" fill="none" stroke={FOREGROUND} strokeWidth="2.5" />
        <path d="M 315 225 C 390 184 478 139 565 96" fill="none" stroke={FOREGROUND} strokeWidth="2.5" />
        <circle cx="315" cy="225" fill={FOREGROUND} r="5" />
        <circle cx="565" cy="96" fill={FOREGROUND} r="5" />

        <SvgLabel fill={FOREGROUND} x={194} y={168}>Ice</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={414} y={146}>Water</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={449} y={300}>Steam</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="start" x={326} y={219}>Triple point</SvgLabel>
        <SvgLabel fill={FOREGROUND} textAnchor="end" x={555} y={82}>Critical point</SvgLabel>
        <SvgLabel fill={MUTED} x={350} y={414}>Temperature (°C)</SvgLabel>
        <text fill={MUTED} fontSize="15" textAnchor="middle" transform="rotate(-90 42 214)" x="42" y="214">Pressure (bar)</text>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = { ...metadata, component: WaterPhaseDiagram } satisfies PhysicsDiagramDefinition;
