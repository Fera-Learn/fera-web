export const content = String.raw`## The Field Problem

Compacted and well-aggregated soils can contain the same mineral grains but different masses in the same field volume. Dry bulk density converts that packing difference into a measurable quantity.

## What Changes Underground

Let \\(m_{\mathrm{dry}}\\) be oven-dry solid mass and \\(V_t\\) the total sample volume, including solids and pores. Dry bulk density is

\\[
\rho_b=\frac{m_{\mathrm{dry}}}{V_t}.
\\]

Its common soil unit is \\(\mathrm{g\,cm^{-3}}\\). More compaction generally increases \\(\rho_b\\); organic matter and well-developed pore structure tend to lower it. Typical ranges in the lecture are about 0.5–1.0 for organic soil, 1.0–1.5 for clay, 1.2–1.6 for loam, and 1.4–1.8 \\(\mathrm{g\,cm^{-3}}\\) for sand.

## How We Detect It

Push a cylinder of known volume into an undisturbed horizon, dry the recovered soil, and divide dry mass by the full cylinder volume. Avoid losing fine material or including unrepresentative stones and voids.

Compare samples at the same depth and moisture history when testing a lateral compaction boundary.

## What the Evidence Means

Bulk density is not particle density: its denominator includes pores. A high value may indicate compaction, naturally dense sandy packing, low organic matter, or sampling bias.

Interpret density relative to texture, organic content, structure, and a suitable local reference.

<PhysicsExamples collapsible
  items={[
    {
      title: "Calculate dry bulk density",
      question: "A 250 cm³ core contains 300 g of oven-dry soil. Find its dry bulk density.",
      answer: "**Strategy:** divide dry mass by total core volume. The calculation is 300 g divided by 250 cm³, giving 1.20 g/cm³. **Interpretation:** the number describes solids packed into the total volume; whether 1.20 g/cm³ indicates compaction depends on the soil's texture, organic matter, and reference condition.",
    },
    {
      title: "Compare a wheel track",
      question: "At the same depth, an untrafficked loam has 1.25 g/cm³ and a wheel track has 1.55 g/cm³. What conclusion is justified?",
      answer: "**Strategy:** use the nearby soil as the control and check that texture and organic content match. The track is 0.30 g/cm³ denser, consistent with reduced pore space under traffic. **Interpretation:** compaction is strongly supported if structure and infiltration measurements show the corresponding pore degradation.",
    },
  ]}
/>
`;
