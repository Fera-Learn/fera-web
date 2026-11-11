export const content = String.raw`## The Field Problem

A handful of soil may feel gritty, smooth, or sticky because its mineral grains occupy different size ranges. Those proportions affect pore geometry and provide a first constraint on water and geophysical behaviour.

## What Changes Underground

**Soil texture** is the distribution of mineral particle-size classes. In the lecture classification, clay is smaller than 0.002 mm, silt is 0.002–0.06 mm, and sand is 0.06–2 mm. Particles larger than 2 mm are stones rather than part of the sand–silt–clay texture percentages.

Most mineral soils are mixtures. Names such as loam, sandy loam, silt loam, clay loam, sandy clay, silty clay, and clay describe different combinations of the three fractions.

## How We Detect It

Collect a representative sample from a defined horizon, remove material larger than 2 mm, and measure the mass fractions of sand, silt, and clay. The three percentages must sum to 100 percent before a textural class is assigned.

Field feel gives a rapid estimate; laboratory separation provides the evidence needed for reproducible classification.

## What the Evidence Means

Texture describes particle size, not how particles are arranged and not their current water content. Two soils with the same texture can have different structure, pore connectivity, and bulk response because of aggregation or compaction.

Use texture as a relatively persistent framework, then measure structure and wetness for the current environmental function.

<PhysicsExamples collapsible
  items={[
    {
      title: "Assign particles to size classes",
      question: "A separated sample contains grains of 1.2 mm, 0.020 mm, 0.001 mm, and 4 mm diameter. Classify each fraction.",
      answer: "**Strategy:** compare each diameter with the stated class boundaries. The 1.2 mm grains are sand, 0.020 mm grains are silt, 0.001 mm grains are clay, and 4 mm fragments are stones. **Interpretation:** only the sand, silt, and clay fractions enter the texture percentages; stones must be reported separately.",
    },
    {
      title: "Check a texture analysis",
      question: "A laboratory reports 48 percent sand, 37 percent silt, and 18 percent clay for one horizon. Can the result be plotted directly on a texture triangle?",
      answer: "**Strategy:** verify the mass balance before classification. The reported fractions total 103 percent, not 100 percent, so rounding or analytical error must be resolved or the values normalised with that adjustment stated. **Interpretation:** a textural name from the uncorrected values would imply more precision than the measurements support.",
    },
  ]}
/>
`;
