export const content = String.raw`## The Field Problem

A summer water table can continue falling during rainy months because plants and evaporation remove water before it drains below the root zone. The atmospheric loss must be included in the soil-water balance.

## What Changes Underground

**Evaporation** changes water to vapour from soil, open water, and wet leaves using solar energy. **Transpiration** is water drawn through plants and lost through leaf stomata. Because the two occur together on land, their sum is **evapotranspiration**, or ET, reported in millimetres per day like rainfall.

Transpiration keeps leaf water potential low. Water moves from higher potential in soil through roots and leaves to much lower potential in air. As soil matric potential approaches about \\(-1500\,\mathrm{kPa}\\), most plants can no longer maintain uptake.

## How We Detect It

Track rainfall, soil water content at several root depths, and water-table elevation through time. The fall in stored water after accounting for drainage constrains ET over the monitored soil profile.

Potential ET ranges from under 1 mm/day in a temperate winter to 10–12 mm/day in hot, dry wind, but actual ET is limited by available soil water and roots.

## What the Evidence Means

A drying profile can reflect ET, drainage, or lateral flow. Root-zone drying concentrated around vegetation supports uptake, while simultaneous deeper drainage indicates another loss pathway.

Use a time series and water balance rather than one dry measurement. Soil moisture maps show where storage changed; they do not uniquely partition evaporation and transpiration.

<PhysicsExamples collapsible
  items={[
    {
      title: "Follow the potential gradient",
      question: "Water potentials are -50 kPa in soil, -70 kPa in roots, -500 kPa in leaves, and -20,000 kPa in air. State the expected movement direction.",
      answer: "**Strategy:** order the values from higher to lower potential. Water moves from soil (-50 kPa) to roots (-70 kPa), leaves (-500 kPa), and air (-20,000 kPa). **Interpretation:** transpiration maintains the gradient that pulls water upward while connected water remains available.",
    },
    {
      title: "Explain summer rainfall without recharge",
      question: "A site receives 40 mm of summer rain but root-zone storage rises by only 5 mm and no drainage is recorded. What is the bounded interpretation?",
      answer: "**Strategy:** apply a simple water balance and keep unmeasured terms explicit. Rain supplied 40 mm; 5 mm remained, so up to 35 mm left through ET, runoff, or lateral flow. Check runoff and deeper sensors before assigning all 35 mm to ET. **Interpretation:** the data show that little rain became stored or recharged groundwater, but they do not uniquely partition the losses.",
    },
  ]}
/>
`;
