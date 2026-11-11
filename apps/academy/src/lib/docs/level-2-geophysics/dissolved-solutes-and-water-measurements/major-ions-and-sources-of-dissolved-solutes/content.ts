export const content = String.raw`## The Field Problem

Rainwater, limestone groundwater, seawater, and mine water conduct differently because their dissolved ions come from different pathways through the environment. Identifying those sources helps explain a water-chemistry or electrical anomaly.

## What Changes Underground

Six ions make up more than 90 percent of dissolved solids in almost every natural water: the cations \\(\mathrm{Ca^{2+}}\\), \\(\mathrm{Mg^{2+}}\\), and \\(\mathrm{Na^+}\\), and the anions \\(\mathrm{HCO_3^-}\\), \\(\mathrm{SO_4^{2-}}\\), and \\(\mathrm{Cl^-}\\).

Rain and sea spray supply sodium and chloride. Carbonate weathering supplies calcium, magnesium, and bicarbonate; silicate weathering also releases cations and forms clay. Pyrite oxidation in Coal Measures can supply sulphate, iron, and acidity. Road salt and fertiliser add sodium, chloride, nitrate, and potassium.

## How We Detect It

Measure electrical conductivity in the field, then analyse filtered water for individual ions in the laboratory. Sample along the flow path from soil water to groundwater and rivers, keeping depth and time comparable.

Conductivity directly measures a bulk electrical response. Ion concentrations identify the charge carriers and are needed to attribute a source.

## What the Evidence Means

High dissolved-ion content generally raises conductivity, but one EC value cannot identify which ions or source are present. Seawater, mine drainage, and road-salt water can overlap in bulk response while carrying different chemical risks.

Use ion patterns, geology, land use, and upstream–downstream change together. Mixing and seasonal dilution limit how specifically one sample can locate a source.

<PhysicsExamples collapsible
  items={[
    {
      title: "Link ions to limestone weathering",
      question: "Groundwater from a carbonate aquifer contains abundant calcium, magnesium, and bicarbonate. Which source pathway is supported?",
      answer: "**Strategy:** match the measured ions to the minerals and reaction products. Dissolution of calcite or dolomite releases calcium or magnesium with bicarbonate. **Interpretation:** carbonate weathering is supported, but a water analysis and geological context are required because mixing can add the same ions from other sources.",
    },
    {
      title: "Separate road salt from mine water",
      question: "A conductive stream receives drainage from both a salted road and Coal Measures. Which measurements discriminate the sources?",
      answer: "**Strategy:** sample above and below each input and compare diagnostic ion patterns. Sodium plus chloride supports road salt; sulphate, iron, and acidity support pyrite-bearing mine drainage. **Interpretation:** conductivity locates a bulk solute increase, while ions and pH distinguish the likely contributions and any mixing.",
    },
  ]}
/>
`;
