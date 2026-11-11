export const content = String.raw`## The Field Problem

Soils differ in how much nutrient or contaminant charge they can retain on clay and humus rather than allowing it to remain in pore water and leach away.

## What Changes Underground

**Cation exchange capacity**, CEC, is the total charge of cations held on negatively charged clay and humus surfaces. Its unit is centimoles of charge per kilogram, \\(\mathrm{cmol_c\,kg^{-1}}\\), where 100 centimoles equal one mole.

CEC counts charge rather than ion number. One mole of \\(\mathrm{Na^+}\\) supplies one mole of charge, while one mole of \\(\mathrm{Ca^{2+}}\\) supplies two. Colloid type, amount, and pH therefore determine the bulk capacity.

## How We Detect It

Displace exchangeable cations from a weighed sample with a strong salt, measure each released ion, convert its amount to charge, and add the contributions. The result is derived from laboratory concentrations and sample mass.

Report the method and pH because pH-dependent surfaces can carry different charge under different measurement conditions.

## What the Evidence Means

High CEC indicates many negative exchange sites, not necessarily that they are occupied by beneficial cations. Smectite and humus commonly give high values; kaolinite and strongly weathered oxides give lower values.

CEC can contribute to surface conduction, but bulk conductivity also depends on water, pore ions, and connectivity. Use exchange composition and pore-water chemistry to interpret environmental behaviour.

<PhysicsExamples collapsible
  items={[
    {
      title: "Count charge, not ions",
      question: "A soil holds 2 cmol/kg of Na+ and 2 cmol/kg of Ca2+. What charge contribution does each make?",
      answer: "**Strategy:** multiply amount of each ion by its charge magnitude. Sodium contributes 2 × 1 = 2 cmolc/kg; calcium contributes 2 × 2 = 4 cmolc/kg. **Interpretation:** equal ion amounts do not occupy equal exchange charge, which is why CEC uses charge units.",
    },
    {
      title: "Compare soils with equal CEC",
      question: "Two soils have CEC = 30 cmolc/kg, but one is humus-rich and acidic while the other contains illite. Can equal CEC imply equal electrical behaviour?",
      answer: "**Strategy:** identify the charge source and current state. Humus charge varies strongly with pH and retains water; illite has more permanent mineral charge. Measure pH, moisture, exchange ions, and pore-water EC. **Interpretation:** equal total capacity does not guarantee equal surface conduction or nutrient status.",
    },
  ]}
/>
`;
