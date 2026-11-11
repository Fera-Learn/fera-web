export const content = String.raw`## The Field Problem

A wet core may contain much water yet still retain air. To decide how close it is to full saturation, compare water-filled volume with total pore volume rather than with the whole sample alone.

## What Changes Underground

Let dry bulk density \\(\rho_b\\) and particle density \\(\rho_p\\) use the same units. Total porosity is

\\[
\phi=1-\frac{\rho_b}{\rho_p},
\\]

where \\(\phi\\) is the fraction of total volume occupied by pores. If volumetric water content is \\(\theta_v\\), water saturation is

\\[
S_w=\frac{\theta_v}{\phi}.
\\]

The limiting values are \\(S_w=0\\) for no pore water and \\(S_w=1\\) when every pore is water-filled.

## How We Detect It

Measure wet and dry core mass and total volume. Use a measured particle density to derive \\(\phi\\), derive \\(\theta_v\\) from water volume, then calculate \\(S_w\\). A saturated-core method can provide an independent porosity estimate in the laboratory.

Each result represents the small sampled volume; stones, cracks, and spatially variable structure can make it unrepresentative of a survey cell.

## What the Evidence Means

For the River Browney core, \\(\rho_b=1.60\,\mathrm{g\,cm^{-3}}\\) and \\(\rho_p=2.85\,\mathrm{g\,cm^{-3}}\\) give \\(\phi=0.44\\). With \\(\theta_v=0.30\\), saturation is \\(S_w=0.30/0.44=0.68\\).

A conductive response may increase with saturation, but clay and dissolved ions can produce the same trend. Pair electrical evidence with core saturation and chemistry before assigning the cause.

<PhysicsExamples collapsible
  items={[
    {
      title: "Find the pore filling fraction",
      question: "A core has bulk density 1.60 g/cm³, particle density 2.85 g/cm³, and volumetric water content 0.30. Calculate porosity and water saturation.",
      answer: "**Strategy:** derive total pore fraction first, then compare water volume with it. Porosity is 1 - 1.60/2.85 = 0.439, about 0.44. Saturation is 0.30/0.44 = 0.68. **Interpretation:** about 68 percent of the pore space is water-filled, so the core is wet but not saturated.",
    },
    {
      title: "Interpret a wet peat core",
      question: "Moor House peat has bulk density 0.50 g/cm³, particle density 1.45 g/cm³, and volumetric water content 0.60. Find saturation and explain why using mineral particle density would be misleading.",
      answer: "**Strategy:** use the source-specific particle density. Porosity is 1 - 0.50/1.45 = 0.655, about 0.66; saturation is 0.60/0.66 = 0.91. **Interpretation:** about 91 percent of pores are filled. A quartz value of 2.65 g/cm³ would overestimate peat porosity because its organic solids are less dense.",
    },
  ]}
/>
`;
