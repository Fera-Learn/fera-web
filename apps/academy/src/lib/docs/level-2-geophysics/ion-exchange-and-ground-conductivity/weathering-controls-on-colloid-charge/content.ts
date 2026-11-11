export const content = String.raw`## The Field Problem

Young and strongly weathered soils can contain equally fine material but differ greatly in ion retention and surface conduction because weathering changes which colloids survive.

## What Changes Underground

Mild weathering preserves 2:1 clays such as mica, vermiculite, and smectite. Their mostly negative charge gives high CEC and almost no AEC. Further weathering breaks these minerals down to kaolinite and then iron and aluminium oxides. Along that sequence, CEC falls and AEC rises.

Young soils can therefore retain many cations, while old, strongly weathered tropical soils may retain fewer. In low-charge weathered soils, pore-water ions make a larger relative contribution to electrical conductivity.

## How We Detect It

Compare clay mineralogy, CEC, AEC, pH, and parent material along a profile or weathering sequence. Use the same measurement pH because kaolinite and oxide charge is strongly pH-dependent.

Electrical surveys can trace a conductivity contrast, but samples are needed to decide whether weathering changed surfaces, pore-water chemistry, or both.

## What the Evidence Means

Soil age alone does not determine weathering intensity; climate, drainage, parent material, and erosion also control the mineral pathway. Humus can give high CEC even where mineral colloids are strongly weathered.

Infer weathering control only where mineral transformations and exchange measurements agree. Treat low surface charge as a reason pore-water chemistry may dominate, not as proof of salty water.

<PhysicsExamples collapsible
  items={[
    {
      title: "Follow a weathering sequence",
      question: "A profile changes from smectite-rich material at depth to kaolinite and iron oxides near the surface. Predict the broad CEC and AEC trends.",
      answer: "**Strategy:** follow the lecture sequence from 2:1 clay to 1:1 clay and oxides. CEC should decrease upward as permanent negative charge is lost, while AEC should increase where pH-dependent positive oxide sites become important. **Interpretation:** the charge trend supports stronger weathering only if pH and humus are measured alongside mineralogy.",
    },
    {
      title: "Interpret equal conductivity",
      question: "A young smectitic soil and an old oxide-rich soil have equal bulk conductivity. Why can their controlling pathways differ?",
      answer: "**Strategy:** partition surface and pore-water contributions. Smectite can conduct strongly along charged surfaces, whereas the low-charge oxide soil may require more conductive pore water. Measure CEC, moisture, and pore-water EC. **Interpretation:** equal bulk response does not imply equal weathering state or salinity.",
    },
  ]}
/>
`;
