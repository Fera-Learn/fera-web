export const content = String.raw`## The Field Problem

A clay soil can contain more total pore space than sand yet transmit water much more slowly. The missing information is pore size and whether the pores connect.

## What Changes Underground

In the lecture classification, **macropores** are wider than 0.08 mm. They drain rapidly and include cracks, root channels, and spaces between aggregates. **Micropores** are narrower than 0.08 mm, commonly occur within aggregates, and hold water that requires suction to remove.

Pores arise from grain packing, cracks between aggregates, and biological activity. Inter-pedal pores lie between aggregates; intra-pedal pores lie within them. A connected macropore network can dominate flow even when it occupies a small fraction of the soil.

## How We Detect It

Describe pores on undisturbed samples and profile faces, noting diameter, orientation, origin, and continuity. Water-retention measurements constrain smaller pores; infiltration and repeated moisture profiles test connected larger pathways.

Geophysical observations respond to water-filled pore volume and connection over a larger support volume, so point-scale pore descriptions must be upscaled cautiously.

## What the Evidence Means

Total porosity alone cannot predict permeability. Many isolated micropores can give high porosity but slow flow, while fewer connected cracks can transmit water rapidly.

Interpret environmental function from pore-size distribution and connectivity together, not from pore fraction alone.

<PhysicsExamples collapsible
  items={[
    {
      title: "Classify two pore pathways",
      question: "A 0.2 mm root channel crosses a horizon while 0.02 mm pores occur inside its aggregates. Classify the pores and compare their expected roles.",
      answer: "**Strategy:** compare each diameter with the 0.08 mm boundary and include location. The root channel is a macropore likely to drain and aerate rapidly; the intra-aggregate pores are micropores that retain water. **Interpretation:** the horizon can store water in small pores while transmitting some water quickly through the connected root channel.",
    },
    {
      title: "High porosity but slow drainage",
      question: "A clay horizon has high total porosity but remains wet above a sand layer. Why is high porosity not evidence of high permeability?",
      answer: "**Strategy:** separate space from connected flow paths. Clay can contain many tiny pores that hold water strongly and connect poorly, whereas sand contains larger pathways. **Interpretation:** slow drainage is consistent with micropore-dominated porosity; pore size and hydraulic measurements are needed before assigning permeability.",
    },
  ]}
/>
`;
