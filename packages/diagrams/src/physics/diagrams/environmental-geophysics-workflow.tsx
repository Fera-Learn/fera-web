import {
  PhysicsDiagramFrame,
  SvgArrowhead,
  SvgLabel,
  type PhysicsDiagramDefinition,
  type PhysicsDiagramProps,
} from "../../shared/physics-diagram";

export const metadata = {
  kind: "interaction",
  referenceImage: "resources/geophysics/lecture1.pptx#slide=3",
  slug: "environmental-geophysics-workflow",
  summary:
    "Geophysical tools support the definition, measurement, prediction, and solution of environmental challenges.",
  tags: ["Geophysical tools", "Environmental challenges", "Workflow"],
  title: "Environmental geophysics workflow",
  topic: "Environmental Geophysics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";

export function EnvironmentalGeophysicsWorkflow({
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
      <svg
        aria-label={metadata.title}
        className="h-auto w-full"
        role="img"
        viewBox="0 0 760 440"
      >
        <rect fill="transparent" height="440" width="760" />

        <SvgLabel
          className="text-[34px] font-bold"
          fill={FOREGROUND}
          x={380}
          y={58}
        >
          Environmental challenges
        </SvgLabel>

        <line
          stroke={FOREGROUND}
          strokeWidth="2.5"
          x1="380"
          x2="380"
          y1="167"
          y2="100"
        />
        <SvgArrowhead
          angle={-90}
          baseX={380}
          baseY={100}
          color={FOREGROUND}
          halfWidth={5}
          length={10}
        />

        <SvgLabel
          className="text-[23px] font-semibold italic"
          fill={FOREGROUND}
          x={380}
          y={211}
        >
          Define, measure, predict and find solutions
        </SvgLabel>

        <line
          stroke={FOREGROUND}
          strokeWidth="2.5"
          x1="380"
          x2="380"
          y1="324"
          y2="252"
        />
        <SvgArrowhead
          angle={-90}
          baseX={380}
          baseY={252}
          color={FOREGROUND}
          halfWidth={5}
          length={10}
        />

        <SvgLabel
          className="text-[34px] font-bold"
          fill={FOREGROUND}
          x={380}
          y={383}
        >
          Geophysical tools
        </SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: EnvironmentalGeophysicsWorkflow,
} satisfies PhysicsDiagramDefinition;
