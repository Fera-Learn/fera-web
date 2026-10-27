import { PhysicsDiagramFrame, SvgArrowhead, SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";

export const metadata = {
  kind: "wave", referenceImage: "overall.pdf#page=11-15", slug: "wavefronts-and-paraxial-geometry",
  summary: "Plane fronts stay parallel, spherical fronts spread from a point, and paraxial rays make only a small angle to the optical axis.",
  tags: ["Wavefront", "Wavevector", "Plane wave", "Spherical wave", "Paraxial"], title: "Wavefront shape and paraxial geometry", topic: "Optics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function WavefrontsAndParaxialGeometry({ className, showCaption = true, style }: PhysicsDiagramProps) {
  const fg="var(--foreground)", accent="var(--chart-1)";
  return <PhysicsDiagramFrame caption={showCaption ? metadata.summary : undefined} className={className} style={{ maxWidth: 760, ...style }} title={metadata.title}>
    <svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 430">
      <rect fill="transparent" height="430" width="760" />
      {[90,140,190,240].map(x=><line key={x} stroke={accent} strokeWidth="2" x1={x} x2={x} y1="65" y2="235" />)}
      <line stroke={fg} strokeWidth="2.5" x1="72" x2="270" y1="150" y2="150" /><SvgArrowhead angle={0} baseX={270} baseY={150} color={fg} halfWidth={5} length={10}/><SvgLabel fill={fg} x={265} y={132}>k</SvgLabel>
      {[55,95,135,175].map(r=><path d={`M ${455-r} 235 A ${r} ${r} 0 0 1 ${455+r} 235`} fill="none" key={r} stroke={accent} strokeWidth="2" />)}
      <circle cx="455" cy="235" fill={fg} r="5" />
      <line stroke={fg} strokeWidth="2.5" x1="455" x2="615" y1="235" y2="106" /><SvgArrowhead angle={-39} baseX={615} baseY={106} color={fg} halfWidth={5} length={10}/><SvgLabel fill={fg} x={590} y={123}>k</SvgLabel>
      <line stroke={fg} strokeWidth="2" x1="70" x2="675" y1="355" y2="355" />
      <line stroke={accent} strokeWidth="2.5" x1="120" x2="650" y1="355" y2="305" /><SvgArrowhead angle={-5.4} baseX={650} baseY={305} color={accent} halfWidth={5} length={10}/>
      <path d="M 210 355 A 70 70 0 0 0 278 348" fill="none" stroke={fg} strokeWidth="1.8" />
      <SvgLabel fill={fg} x={252} y={340}>θ</SvgLabel><SvgLabel fill={fg} x={690} y={361}>z</SvgLabel><SvgLabel fill={fg} x={645} y={293}>r</SvgLabel>
    </svg>
  </PhysicsDiagramFrame>;
}
export const diagram = { ...metadata, component: WavefrontsAndParaxialGeometry } satisfies PhysicsDiagramDefinition;
