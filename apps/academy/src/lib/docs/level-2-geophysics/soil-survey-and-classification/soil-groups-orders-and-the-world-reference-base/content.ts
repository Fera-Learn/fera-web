export const content = String.raw`## The Field Problem

Local soil names help map one country, but environmental comparisons also need broader categories that organise related soils and communicate across regions.

## What Changes Underground

Classification is hierarchical. Profile observations support soil types and series; recurring series form associations; associations with similar characteristics can be grouped more broadly, and groups can be collected into orders. Each step sacrifices local detail to gain wider comparison.

The **World Reference Base** is a widely used global classification system with 32 reference groups represented in the lecture source, 13 of them occurring in the UK. A World Reference Base name describes diagnostic soil properties and formation, not a directly measured geophysical quantity.

## How We Detect It

Begin with a complete profile description and the diagnostic horizons or properties required by the chosen scheme. Apply one classification system consistently; do not combine ranks from different systems as though they were interchangeable.

Use maps to compare the distribution of broad groups, then return to series and profile evidence for local environmental work.

## What the Evidence Means

Broader classes do not remove within-class variation. Two soils in the same reference group can differ in thickness, water content, texture, or management history and therefore produce different geophysical responses.

Classification supplies a prior expectation. Site measurements determine the actual properties and interfaces relevant to the decision.

<PhysicsExamples collapsible
  items={[
    {
      title: "Choose the right classification scale",
      question: "A national map and a farm drainage survey describe the same area. Which classification level is more useful for each task?",
      answer: "**Strategy:** match classification breadth to decision scale. A broad group or order supports national comparison, while series and association information better represent recurring profiles and landscapes at farm scale. **Interpretation:** neither level replaces direct profiles; each organises evidence at a different spatial resolution.",
    },
    {
      title: "Classification is not a measurement",
      question: "Two profiles are both classified as Stagnosols, but only one is waterlogged during a survey. Is that a contradiction?",
      answer: "**Strategy:** separate diagnostic class from current state. The shared classification indicates seasonal stagnation-related properties, while present waterlogging also depends on recent weather, drainage, and local layering. **Interpretation:** use the class to anticipate risk, then use water-level and property measurements to establish current conditions.",
    },
  ]}
/>
`;
