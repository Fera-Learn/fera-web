export const content = String.raw`## The Field Problem

Some clay-rich soils do not swell strongly and add relatively little surface conduction. Kaolinite's tightly bonded one-to-one layers explain that response.

## What Changes Underground

Clay layers contain tetrahedral sheets of silicon and oxygen and octahedral sheets containing aluminium or magnesium with oxygen and hydroxyl. **Kaolinite** is a 1:1 clay: each layer has one sheet of each type.

Hydrogen bonds hold layers about 0.7 nm apart, preventing water and cations from entering between them. Only outer surfaces and edges carry exchange sites, so typical cation exchange capacity is low, about \\(10\,\mathrm{cmol_c\,kg^{-1}}\\). Kaolinite forms under intense weathering, including feldspar alteration.

## How We Detect It

Identify kaolinite mineralogically and measure low swelling, CEC, and pH. Profile context tests whether it formed through strong in-place weathering or arrived in transported material.

Electrical data can locate a clay-bearing interval but cannot identify a 1:1 layer structure directly.

## What the Evidence Means

Low CEC is consistent with kaolinite but can also result from low clay or humus content and acidic pH-dependent surfaces. Kaolinite still changes water retention even if its surface-conduction contribution is small.

Confirm mineral identity and amount before predicting bulk conductivity from the clay name.

<PhysicsExamples collapsible
  items={[
    {
      title: "Predict kaolinite behaviour",
      question: "A soil is dominated by kaolinite with CEC near 10 cmolc/kg. Predict swelling and surface-conduction behaviour.",
      answer: "**Strategy:** connect the locked 1:1 layer geometry to accessible surfaces. Hydrogen-bonded layers exclude interlayer water and cations, so swelling is slight and exchange charge is low. **Interpretation:** kaolinite should add less surface conduction than smectite, although pore water and moisture may still dominate bulk response.",
    },
    {
      title: "Question low CEC in an acid soil",
      question: "An acidic clay soil has low measured CEC. Why does that value not uniquely prove kaolinite dominance?",
      answer: "**Strategy:** check mineral quantity and pH-dependent charge. Humus, kaolinite edges, and oxides carry less negative charge at low pH, and a soil may simply contain little colloid. Measure mineralogy and CEC at stated pH. **Interpretation:** low CEC supports but does not uniquely identify a 1:1 clay assemblage.",
    },
  ]}
/>
`;
