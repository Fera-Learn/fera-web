export const content = String.raw`## The Field Problem

Calling a soil “clayey” does not tell you whether it is well aggregated or densely compacted. Texture and structure answer different questions and must not be used as interchangeable explanations.

## What Changes Underground

**Texture** describes particle-size proportions: sand, silt, and clay. It is relatively persistent and strongly linked to parent material. **Structure** describes particle arrangement into single grains, massive material, or aggregates. It responds more quickly to biology, wetting–drying, freezing–thawing, and management.

Texture sets the potential framework for water and nutrient behaviour; structure modifies pore arrangement and connectivity within that framework.

## How We Detect It

Measure texture on a representative disturbed sample after separating particle sizes. Describe structure on an undisturbed face or core, because crushing the sample destroys the arrangement being assessed.

Pair both with pore or flow measurements when the environmental decision concerns drainage, aeration, or root access.

## What the Evidence Means

Texture cannot reveal recent compaction, and structure cannot replace a particle-size analysis. Similar geophysical responses may arise from clay-rich texture, wetness caused by poor structure, or both.

State which property was measured and use the other only when independent evidence supports it.

<PhysicsExamples collapsible
  items={[
    {
      title: "Classify two observations",
      question: "A laboratory reports 32 percent clay, while a field face breaks into rounded crumbs. Which observation describes texture and which describes structure?",
      answer: "**Strategy:** separate composition by size from arrangement. The clay percentage is texture; the rounded crumbs are granular structure. **Interpretation:** together they describe a clay-containing soil whose particles are currently well aggregated, not two names for the same property.",
    },
    {
      title: "Explain a rapid field change",
      question: "A plot becomes poorly drained after one season of heavy traffic, but its sand–silt–clay fractions are unchanged. Which property most plausibly changed?",
      answer: "**Strategy:** compare the timescale of each property. Texture cannot change rapidly without material addition or removal, while traffic can compact aggregates and pores within a season. **Interpretation:** structural degradation is the leading explanation; bulk density and infiltration measurements should test it.",
    },
  ]}
/>
`;
