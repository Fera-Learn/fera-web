export const content = String.raw`## The Field Problem

A soil containing only a few percent humus can hold most of its exchangeable cations. That capacity also changes with pH, linking organic matter, acidity, nutrient retention, and electrical response.

## What Changes Underground

**Humus** is dark, well-decomposed soil organic matter. Hydroxyl groups on humus lose hydrogen ions as pH rises, creating more negative surface charge. Its charge is therefore mostly pH-dependent rather than fixed.

Humus has the highest typical CEC of the lecture colloids: about \\(200\,\mathrm{cmol_c\,kg^{-1}}\\) at pH 7. In one clayey soil containing only 2.5 percent humus, the humus supplied about 75 percent of total CEC. Humus and peat also hold much water, so both exchange surfaces and moisture can raise conductivity.

## How We Detect It

Measure organic matter, pH, and CEC on the same sample and report the measurement pH. Compare horizons or treatments while controlling clay mineralogy. Pore-water EC and water content constrain the other conductivity pathways.

Spatial electrical mapping can trace an organic-rich wet horizon but does not directly measure humus charge.

## What the Evidence Means

Raising pH can increase negative charge without adding humus. Conversely, acidic humus may show lower CEC than a pH-7 reference. A conductive peat may reflect water storage as much as exchange charge.

Interpret organic influence from the joint pH–humus–CEC pattern and keep current moisture and salinity separate.

<PhysicsExamples collapsible
  items={[
    {
      title: "Predict a pH increase",
      question: "The pH of a humus-rich soil rises while organic content stays fixed. How should its surface charge change?",
      answer: "**Strategy:** follow the pH-dependent hydroxyl groups. At higher pH, more groups lose H+, leaving more negative sites. **Interpretation:** CEC should rise, provided the same humus remains and the laboratory measurement captures charge at the new pH.",
    },
    {
      title: "Interpret conductive peat",
      question: "A peat horizon is much more conductive than mineral soil below. Why can high humus CEC not be accepted as the sole cause?",
      answer: "**Strategy:** measure the coupled properties. Peat commonly combines high pH-dependent charge with high water content and dissolved ions. Compare CEC, pH, moisture, and pore-water EC at matching depths. **Interpretation:** humus surface conduction is supported only after the water and solute contributions are constrained.",
    },
  ]}
/>
`;
