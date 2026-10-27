export const content = String.raw`## Principle

A reciprocating engine converts pressure forces on a piston into crankshaft rotation. The piston moves between a minimum-volume top-dead-centre position and a maximum-volume bottom-dead-centre position. In a four-stroke petrol engine, intake, compression, power, and exhaust require four piston strokes and two crankshaft revolutions.

## Notation

<Notation
  items={[
    { symbol: "V_{\\min}", meaning: "clearance volume at top dead centre", unit: "m^{3}" },
    { symbol: "V_{\\max}", meaning: "maximum cylinder volume at bottom dead centre", unit: "m^{3}" },
    { symbol: "V_s", meaning: "displacement or swept volume", unit: "m^{3}" },
    { symbol: "V", meaning: "instantaneous cylinder volume", unit: "m^{3}" },
    { symbol: "r", meaning: "geometric compression ratio", unit: "1" },
    { symbol: "p_{\\mathrm{ext}}", meaning: "external pressure acting at the moving boundary", unit: "Pa" },
    { symbol: "W", meaning: "signed boundary work done by the cylinder gas", unit: "J" },
    { symbol: "N_{\\mathrm{rev}}", meaning: "number of crankshaft revolutions", unit: "1" },
    { symbol: "N_{\\mathrm{cycle}}", meaning: "number of complete four-stroke cycles", unit: "1" },
  ]}
/>

## The Core Method

The piston mechanism supplies intake, compression, power, and exhaust strokes. The ideal Otto model keeps the compression and expansion but replaces combustion and exhaust details with constant-volume heat transfers.

<PhysicsDiagram slug="otto-engine-cycle" />

The swept volume is the change between the dead-centre positions, and the compression ratio compares the largest and smallest volumes:

\\[
V_s=V_{\max}-V_{\min},
\qquad
r=\frac{V_{\max}}{V_{\min}}>1.
\tag*{[1]}
\\]

The four physical strokes are:

1. Intake: the intake valve opens, the exhaust valve closes, and the descending piston draws in fresh charge.
2. Compression: both valves close and the ascending piston compresses the charge.
3. Power or expansion: ignition raises pressure, both valves remain closed, and the descending piston delivers useful work.
4. Exhaust: the exhaust valve opens and the ascending piston expels combustion products.

With work done by the gas positive, piston-boundary work is

\\[
W=\int p_{\mathrm{ext}}\,dV.
\tag*{[2]}
\\]

Expansion has \\(dV>0\\) and therefore positive gas work; compression has \\(dV<0\\) and negative gas work. Intake and exhaust also require pressure-volume work, so a real cycle is not identical to the four idealised closed-system processes used in an Otto model.

One complete four-stroke cycle requires two crankshaft revolutions:

\\[
N_{\mathrm{cycle}}=\frac{N_{\mathrm{rev}}}{2}.
\tag*{[3]}
\\]

The stroke sequence must not be confused with the separate ideal Otto state labels, which describe thermodynamic model processes rather than the valve-by-valve real-engine strokes.

<PhysicsExamples collapsible
  items={[
    {
      title: "Cylinder geometry and cycle rate",
      question: "A cylinder has \\(V_{\\max}=500\\,\\mathrm{cm^{3}}\\) and \\(V_{\\min}=50\\,\\mathrm{cm^{3}}\\). Its crankshaft turns at \\(3000\\,\\mathrm{rev\\,min^{-1}}\\). Find the swept volume, compression ratio, and complete cycles per second for that cylinder.",
      answer: "Equation \\([1]\\) gives \\[V_s=500\\,\\mathrm{cm^{3}}-50\\,\\mathrm{cm^{3}}=450\\,\\mathrm{cm^{3}},\\qquad r=\\frac{500}{50}=10.\\] Equation \\([3]\\) gives \\[N_{\\mathrm{cycle}}=\\frac{3000}{2}=1500\\,\\mathrm{min^{-1}}=\\frac{1500}{60}\\,\\mathrm{s^{-1}}=25\\,\\mathrm{s^{-1}}.\\] **Final result:** \\(V_s=450\\,\\mathrm{cm^{3}}\\), \\(r=10\\), and the cylinder completes \\(25\\) four-stroke cycles per second.",
    },
    {
      title: "Diagnosing a stroke from valve motion",
      question: "The piston is moving upward, the intake valve is closed, and the exhaust valve is open. Identify the stroke and state the sign of the gas boundary work.",
      answer: "An open exhaust valve during upward piston motion identifies the exhaust stroke: the decreasing cylinder volume pushes combustion products out. Since \\(dV\\lt 0\\), equation \\([2]\\) gives negative work done by the cylinder gas under the stated sign convention. The crankshaft and other cylinders supply the required work. **Final result:** the process is the exhaust stroke, and the gas boundary work is negative.",
    },
  ]}
/>
`;
