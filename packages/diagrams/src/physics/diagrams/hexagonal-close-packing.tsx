import {
  PhysicsDiagramFrame,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "interaction",
  referenceImage: "slides2 - Tagged.pdf#page=12",
  slug: "hexagonal-close-packing",
  summary: "Close-packed triangular layers repeat in an ABAB sequence in the hexagonal close-packed structure.",
  tags: ["HCP", "Close packing", "ABAB stacking"],
  title: "Hexagonal close-packed stacking",
  topic: "Condensed Matter Physics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const spheres = [
  [220, 267], [320, 267], [420, 267], [270, 292], [370, 292], [470, 292],
  [285, 194], [370, 209], [455, 194],
  [270, 109], [370, 109], [470, 109], [220, 142], [320, 142], [420, 142], [520, 142],
] as const;

export function HexagonalClosePacking({ className, showCaption = true, style }: PhysicsDiagramProps) {
  return (
    <PhysicsDiagramFrame caption={showCaption ? metadata.summary : undefined} className={className} style={{ maxWidth: 650, ...style }} title={metadata.title}>
      <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 650 360">
        <rect fill="transparent" height="360" width="650" />
        {spheres.map(([cx, cy], index) => (
          <circle cx={cx} cy={cy} fill={index >= 6 && index <= 8 ? "var(--chart-2)" : "var(--chart-1)"} key={`${cx}-${cy}-${index}`} r="55" stroke="var(--foreground)" strokeOpacity="0.4" />
        ))}
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = { ...metadata, component: HexagonalClosePacking } satisfies PhysicsDiagramDefinition;
