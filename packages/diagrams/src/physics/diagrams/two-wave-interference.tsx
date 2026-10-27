import { PhysicsDiagramFrame, SvgLabel, type PhysicsDiagramDefinition, type PhysicsDiagramProps } from "../../shared/physics-diagram";

export const metadata={kind:"graph",referenceImage:"overall.pdf#page=21",slug:"two-wave-interference",summary:"Equal waves add to a doubled amplitude in phase and cancel when separated by half a cycle.",tags:["Constructive interference","Destructive interference"],title:"Constructive and destructive interference",topic:"Optics"} as const satisfies Omit<PhysicsDiagramDefinition,"component">;
const path=(x0:number,y0:number,phase:number,scale=1)=>Array.from({length:81},(_,i)=>`${i?"L":"M"} ${(x0+i*3.1).toFixed(1)} ${(y0-28*scale*Math.sin(i*Math.PI/20+phase)).toFixed(1)}`).join(" ");
export function TwoWaveInterference({className,showCaption=true,style}:PhysicsDiagramProps){return <PhysicsDiagramFrame caption={showCaption?metadata.summary:undefined} className={className} style={{maxWidth:760,...style}} title={metadata.title}><svg aria-label={metadata.title} className="h-auto w-full" role="img" viewBox="0 0 760 400"><rect fill="transparent" height="400" width="760"/>
 <SvgLabel fill="var(--foreground)" x={190} y={35}>Constructive</SvgLabel><SvgLabel fill="var(--foreground)" x={570} y={35}>Destructive</SvgLabel>
 {[95,160].map((y,j)=><g key={y}><path d={path(65,y,0)} fill="none" stroke={j?"var(--chart-1)":"var(--chart-2)"} strokeWidth="2.5"/><path d={path(445,y,j?Math.PI:0)} fill="none" stroke={j?"var(--chart-1)":"var(--chart-2)"} strokeWidth="2.5"/></g>)}
 <path d={path(65,300,0,2)} fill="none" stroke="var(--foreground)" strokeWidth="3"/><line stroke="var(--foreground)" strokeWidth="3" x1="445" x2="695" y1="300" y2="300"/><SvgLabel fill="var(--foreground)" x={190} y={365}>E₁ + E₂</SvgLabel><SvgLabel fill="var(--foreground)" x={570} y={365}>E₁ + E₂ = 0</SvgLabel>
 </svg></PhysicsDiagramFrame>}
export const diagram={...metadata,component:TwoWaveInterference} satisfies PhysicsDiagramDefinition;
