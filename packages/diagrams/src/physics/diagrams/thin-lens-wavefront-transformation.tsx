import { PhysicsDiagramFrame, SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";

export const metadata = {
  kind: "wave", referenceImage: "overall.pdf#page=17-20", slug: "thin-lens-wavefront-transformation",
  summary: "A lens adds an optical-path-dependent phase so plane incident fronts become converging spherical fronts.",
  tags: ["Thin lens", "Wavefront", "Focal length", "Quadratic phase"], title: "Thin lens acting on wavefronts", topic: "Optics",
} as const satisfies Omit<PhysicsDiagramDefinition, "component">;

export function ThinLensWavefrontTransformation({ className, showCaption=true, style }: PhysicsDiagramProps){
 const fg="var(--foreground)", a="var(--chart-1)";
 return <PhysicsDiagramFrame caption={showCaption?metadata.summary:undefined} className={className} style={{maxWidth:760,...style}} title={metadata.title}><svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 390">
  <rect fill="transparent" height="390" width="760"/>
  {[90,140,190,240].map(x=><line key={x} stroke={a} strokeWidth="2" x1={x} x2={x} y1="70" y2="305"/>)}
  <path d="M 305 58 Q 365 188 305 318 Q 245 188 305 58 Z" fill="var(--chart-3)" fillOpacity="0.2" stroke={fg} strokeWidth="2"/>
  {[70,115,160,205].map(r=><path d={`M ${620-r*.82} ${188-r*.57} A ${r} ${r} 0 0 1 ${620-r*.82} ${188+r*.57}`} fill="none" key={r} stroke={a} strokeWidth="2"/>)}
  <circle cx="620" cy="188" fill={fg} r="5"/><line stroke={fg} strokeDasharray="6 5" x1="350" x2="650" y1="188" y2="188"/>
  <line stroke={fg} x1="245" x2="365" y1="340" y2="340"/><line stroke={fg} x1="245" x2="245" y1="333" y2="347"/><line stroke={fg} x1="365" x2="365" y1="333" y2="347"/>
  <SvgLabel fill={fg} x={305} y={365}>t₀</SvgLabel><SvgLabel fill={fg} x={470} y={175}>Rₗ</SvgLabel><SvgLabel fill={fg} x={620} y={216}>f</SvgLabel>
 </svg></PhysicsDiagramFrame>;
}
export const diagram={...metadata,component:ThinLensWavefrontTransformation} satisfies PhysicsDiagramDefinition;
