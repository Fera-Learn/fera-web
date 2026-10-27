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
    "Live Summary of EM lecture notes - 25-26 20260305.pdf#page=24&figure=19",
  slug: "right-hand-vector-conventions",
  summary:
    "Right-hand screw conventions for an ordered cross product and for the direction of curl.",
  tags: ["Right-hand rule", "Cross product", "Curl", "Vector convention"],
  title: "Right-hand conventions for cross product and curl",
  topic: "Electromagnetism",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

const FOREGROUND = "var(--foreground)";
const BACKGROUND = "var(--background)";

const handOutline =
  "M 28 220 C 7 214 2 195 15 180 C 1 168 3 148 18 137 C 4 123 9 104 28 96 L 42 96 L 42 35 C 42 14 52 2 66 2 C 80 2 88 16 88 35 L 88 105 C 102 113 111 126 111 143 L 111 171 L 151 171 C 168 171 178 181 178 196 L 178 214 L 120 214 C 104 234 76 239 28 220 Z";

function Hand({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 52)`}>
      <path d={handOutline} fill={BACKGROUND} stroke={FOREGROUND} strokeLinejoin="round" strokeWidth="2" />
      <path d="M 22 103 C 5 112 7 131 23 139 C 48 150 82 149 104 139" fill="none" stroke={FOREGROUND} strokeWidth="2" />
      <path d="M 17 138 C 2 149 6 167 23 175 C 51 186 84 183 110 172" fill="none" stroke={FOREGROUND} strokeWidth="2" />
      <path d="M 17 174 C 5 187 11 203 29 210 C 55 219 86 215 111 202" fill="none" stroke={FOREGROUND} strokeWidth="2" />
      <path d="M 42 97 C 57 91 75 94 83 106 C 91 119 86 131 73 137" fill="none" stroke={FOREGROUND} strokeWidth="2" />
      <path d="M 107 171 C 91 166 84 153 88 139" fill="none" stroke={FOREGROUND} strokeWidth="2" />
    </g>
  );
}

export function RightHandVectorConventionsDiagram({
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
        <Hand x={110} />
        <Hand x={420} />

        <line stroke={FOREGROUND} strokeWidth="2" x1="176" x2="176" y1="151" y2="32" />
        <SvgArrowhead angle={-90} baseX={176} baseY={32} color={FOREGROUND} halfWidth={4} length={8} />
        <SvgLabel fill={FOREGROUND} x={210} y={34}>c</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="2" x1="176" x2="92" y1="325" y2="374" />
        <SvgArrowhead angle={150} baseX={92} baseY={374} color={FOREGROUND} halfWidth={4} length={8} />
        <line stroke={FOREGROUND} strokeWidth="2" x1="176" x2="260" y1="325" y2="374" />
        <SvgArrowhead angle={30} baseX={260} baseY={374} color={FOREGROUND} halfWidth={4} length={8} />
        <path d="M 128 363 A 58 58 0 0 0 223 365" fill="none" stroke={FOREGROUND} strokeWidth="1.8" />
        <SvgArrowhead angle={5} baseX={223} baseY={365} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={112} y={342}>a</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={241} y={342}>b</SvgLabel>
        <SvgLabel fill={FOREGROUND} x={176} y={373}>θ</SvgLabel>

        <line stroke={FOREGROUND} strokeWidth="2" x1="486" x2="486" y1="151" y2="32" />
        <SvgArrowhead angle={-90} baseX={486} baseY={32} color={FOREGROUND} halfWidth={4} length={8} />
        <g aria-label="∇ × A">
          <path d="M 372 20 L 380 38 L 388 20 Z" fill="none" stroke={FOREGROUND} strokeWidth="1.8" />
          <SvgLabel fill={FOREGROUND} x={418} y={34}>× A</SvgLabel>
        </g>
        <SvgLabel fill={FOREGROUND} x={600} y={34}>Curl of A</SvgLabel>

        <path d="M 468 280 C 430 294 427 334 454 350 C 487 370 530 348 526 314" fill="none" stroke={FOREGROUND} strokeWidth="2" />
        <SvgArrowhead angle={-82} baseX={526} baseY={314} color={FOREGROUND} halfWidth={4} length={8} />
        <path d="M 450 274 C 404 304 411 377 474 396 C 535 414 591 375 581 326" fill="none" stroke={FOREGROUND} strokeWidth="2" />
        <SvgArrowhead angle={-102} baseX={581} baseY={326} color={FOREGROUND} halfWidth={4} length={8} />
        <path d="M 477 294 C 458 307 461 330 478 338 C 499 348 517 334 516 316" fill="none" stroke={FOREGROUND} strokeWidth="1.8" />
        <SvgArrowhead angle={-86} baseX={516} baseY={316} color={FOREGROUND} halfWidth={3.5} length={7} />
        <SvgLabel fill={FOREGROUND} x={626} y={348}>A</SvgLabel>
      </svg>
    </PhysicsDiagramFrame>
  );
}

export const diagram = {
  ...metadata,
  component: RightHandVectorConventionsDiagram,
} satisfies PhysicsDiagramDefinition;
