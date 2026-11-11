export const content = String.raw`## The Field Problem

A handheld probe may display EC, total dissolved solids, and salinity from one immersion, but only the electrical response is measured directly. The other values depend on assumptions about the dissolved mixture.

## What Changes Underground

**Total dissolved solids**, TDS, is the mass of dissolved material per litre of water, in milligrams per litre, measured by evaporating a filtered sample. A probe estimates it from temperature-corrected conductivity:

\\[
\mathrm{TDS}\approx k\,\mathrm{EC}_{25},
\\]

where \\(k\\) is commonly 0.55–0.75 and depends on which ions are present. With EC in \\(\mathrm{\mu S\,cm^{-1}}\\), the numerical estimate is reported in \\(\mathrm{mg\,L^{-1}}\\). Probe salinity is also derived from EC and temperature while assuming seawater-like ion proportions.

## How We Detect It

The probe directly measures current and temperature, then calculates \\(\mathrm{EC}_{25}\\), TDS, and salinity. Gravimetric TDS requires filtering, evaporation, and weighing. Ion analysis tests whether the instrument's fixed conversion resembles the actual water.

Use the same correction and coefficient when comparing a time series.

## What the Evidence Means

One fixed \\(k\\) cannot represent every groundwater, mine water, or fertiliser mixture. Two waters with equal EC can contain different dissolved mass, and a non-seawater solution can receive a misleading salinity value.

Treat probe TDS and salinity as estimates. Confirm decisions tied to mass concentration or composition with gravimetric TDS and ion chemistry.

<PhysicsExamples collapsible
  items={[
    {
      title: "Estimate a TDS range",
      question: "Water has EC25 = 1000 µS/cm. Estimate TDS using k = 0.55–0.75.",
      answer: "**Strategy:** apply both ends of the composition-dependent coefficient. The lower estimate is 0.55 × 1000 = 550 mg/L; the upper is 0.75 × 1000 = 750 mg/L. **Interpretation:** EC supports a TDS range of 550–750 mg/L, not one exact mass, until composition or gravimetric TDS constrains k.",
    },
    {
      title: "Question a mine-water salinity display",
      question: "A probe reports salinity for sulphate-rich mine water. Why should the displayed value be treated cautiously?",
      answer: "**Strategy:** inspect the conversion assumption. Practical salinity assumes seawater ion proportions, while mine water may be dominated by sulphate, iron, and acidity. Compare EC, temperature, and laboratory ions. **Interpretation:** the measured EC is usable after correction, but seawater-calibrated salinity may not represent the mine-water composition.",
    },
  ]}
/>
`;
