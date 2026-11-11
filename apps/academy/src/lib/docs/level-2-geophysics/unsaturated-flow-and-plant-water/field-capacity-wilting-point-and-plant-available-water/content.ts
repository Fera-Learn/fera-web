export const content = String.raw`## The Field Problem

Clay can store more total water than loam yet provide less water that roots can use. Plant supply is the water retained between drainage and permanent wilting, not all water present in the soil.

## What Changes Underground

**Field capacity** is the water remaining 1–3 days after soaking, once rapid gravity drainage has nearly stopped. Its matric potential is commonly about \\(-10\\) to \\(-30\,\mathrm{kPa}\\). The **permanent wilting point** is reached near \\(-1500\,\mathrm{kPa}\\), when most plants can no longer extract enough water and do not recover without added water.

If water contents at those states are \\(\theta_{FC}\\) and \\(\theta_{WP}\\), plant-available water is their difference:

\\[
\theta_{AW}=\theta_{FC}-\theta_{WP}.
\\]

## How We Detect It

Measure a retention curve that pairs volumetric water content with matric potential. Field observations after heavy rain constrain field capacity; laboratory pressure methods are needed for the much drier wilting point.

Convert the available fraction to storage over a stated root-zone depth only after confirming that the sampled horizon represents that depth.

## What the Evidence Means

Sand drains quickly and holds little at field capacity. Clay holds much water, but a large fraction remains below root-accessible potential. Loams and silt loams commonly have the largest difference between field capacity and wilting point.

Texture is not the only control: each extra 1 percent organic matter in the lecture's silt-loam example adds about \\(0.04\,\mathrm{m^3\,m^{-3}}\\), or 4 mm over 0.1 m of soil. Root depth and species still limit actual use.

<PhysicsExamples collapsible
  items={[
    {
      title: "Calculate available water",
      question: "A soil contains 0.32 m³/m³ at field capacity and 0.12 m³/m³ at permanent wilting. Find the plant-available fraction.",
      answer: "**Strategy:** subtract the water that remains unavailable at wilting from the field-capacity content. The available fraction is 0.32 - 0.12 = 0.20 m³/m³. **Interpretation:** each metre of uniformly rooted soil could store 0.20 m, or 200 mm, between those limits; actual access depends on root depth and profile variation.",
    },
    {
      title: "Compare clay with loam",
      question: "Clay has higher field-capacity water content than loam but also a much higher water content at wilting. Which soil may supply more water to plants?",
      answer: "**Strategy:** compare the differences, not the field-capacity values alone. Calculate field capacity minus wilting content for each soil and use the same root-zone depth. **Interpretation:** loam can provide more plant-available water even while storing less total water, because clay retains a larger share too tightly for roots.",
    },
  ]}
/>
`;
