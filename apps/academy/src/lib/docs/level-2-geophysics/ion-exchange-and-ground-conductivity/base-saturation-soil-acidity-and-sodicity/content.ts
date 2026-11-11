export const content = String.raw`## The Field Problem

Two soils with equal CEC can differ sharply in fertility, acidity, structure, and wetness because their exchange sites hold different cations.

## What Changes Underground

The base cations are \\(\mathrm{Ca^{2+}}\\), \\(\mathrm{Mg^{2+}}\\), \\(\mathrm{K^+}\\), and \\(\mathrm{Na^+}\\). **Base saturation** is the percentage of CEC occupied by their combined charge:

\\[
\text{base saturation}=\frac{\text{exchangeable base-cation charge}}{\mathrm{CEC}}\times100\%.
\\]

Humid-region leaching removes bases and leaves more \\(\mathrm{H^+}\\) and \\(\mathrm{Al^{3+}}\\), producing acidic soil. Dry regions retain more bases. If sodium exceeds about 15 percent of CEC, the soil is sodic; dispersed particles can clog pores and leave it poorly drained.

## How We Detect It

Measure CEC and each exchangeable cation as \\(\mathrm{cmol_c\,kg^{-1}}\\), then calculate percentages. Pair the result with pH, structure, infiltration, and moisture at the same horizon.

Electrical mapping may locate wet or salty sodic ground, but exchange chemistry establishes sodicity.

## What the Evidence Means

High base saturation is not automatically healthy if sodium dominates. Low pH can reflect exchange acidity, but current pore-water acidity and parent material also matter.

Use the cation shares rather than total CEC alone. Distinguish a fixed exchange condition from temporary surface salt or wetness before interpreting a low-resistivity zone.

<PhysicsExamples collapsible
  items={[
    {
      title: "Calculate base saturation",
      question: "A soil has CEC = 20 cmolc/kg and combined Ca, Mg, K, and Na charge of 12 cmolc/kg. Find base saturation.",
      answer: "**Strategy:** divide exchangeable base charge by total capacity and convert to percent. Base saturation is 12/20 × 100 percent = 60 percent. **Interpretation:** bases occupy 60 percent of exchange sites; their individual shares are still needed to assess sodium risk.",
    },
    {
      title: "Identify sodicity despite high bases",
      question: "A soil has high base saturation and Na+ occupies 18 percent of CEC. Why is 'well supplied with bases' an incomplete conclusion?",
      answer: "**Strategy:** inspect composition inside the total percentage. Sodium exceeds the lecture's approximate 15 percent sodicity threshold and can disperse particles and clog pores. Check structure, infiltration, and soluble salts. **Interpretation:** the soil is potentially sodic despite high base saturation; wetness or salinity alone cannot confirm the structural effect.",
    },
  ]}
/>
`;
