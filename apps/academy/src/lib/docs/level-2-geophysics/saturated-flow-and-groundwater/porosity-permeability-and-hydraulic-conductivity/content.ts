export const content = String.raw`## The Field Problem

Clay can have more pore space than sand yet pass water a million times more slowly. Groundwater flow depends on the size and connection of water-filled pores, not simply on how much pore space exists.

## What Changes Underground

**Porosity** is the fraction of total volume occupied by pores. **Permeability** describes how well connected pore geometry transmits fluid. **Saturated hydraulic conductivity**, \\(K_{sat}\\), is the resulting flow ease for water when every pore is full, expressed as a speed such as metres per second.

Lecture ranges overlap in porosity but differ greatly in \\(K_{sat}\\): gravel spans about \\(10^{-4}\\)–\\(10^{-1}\,\mathrm{m\,s^{-1}}\\), sand \\(10^{-6}\\)–\\(10^{-2}\\), silt \\(10^{-9}\\)–\\(10^{-5}\\), and clay \\(10^{-12}\\)–\\(10^{-9}\,\mathrm{m\,s^{-1}}\\). Flow through a pore scales approximately with the square of its width.

## How We Detect It

Derive porosity from core density or saturation. Measure \\(K_{sat}\\) by applying a known hydraulic gradient to a saturated sample or field interval and recording discharge. Material logs and pumping response constrain connected pathways at larger scales.

Core values sample centimetres; fractures or lenses can dominate metre- to field-scale flow.

## What the Evidence Means

Fine sand at \\(10^{-4}\,\mathrm{m\,s^{-1}}\\) and clay at \\(10^{-10}\,\mathrm{m\,s^{-1}}\\) differ by a factor of one million even though clay can have greater porosity. High porosity therefore does not imply high conductivity.

Bulk geophysical evidence may respond to water-filled porosity but cannot uniquely determine \\(K_{sat}\\). Calibrate flow interpretations with hydraulic tests and structural evidence.

<PhysicsExamples collapsible
  items={[
    {
      title: "Compare fine sand and clay",
      question: "Fine sand has Ksat = 10^-4 m/s and clay has Ksat = 10^-10 m/s. How many times larger is the sand value?",
      answer: "**Strategy:** divide the conductivities and retain their common units. The ratio is 10^-4 / 10^-10 = 10^6, so fine sand transmits saturated water about one million times faster under the same geometry and gradient. **Interpretation:** pore size and connection dominate the flow contrast; porosity alone would miss it.",
    },
    {
      title: "Fractured rock with low matrix porosity",
      question: "A rock core has low porosity, but a pumping test shows rapid field-scale flow. How can the observations agree?",
      answer: "**Strategy:** compare support volumes and possible pathways. The core measures matrix pores over centimetres, while a pumping test can intersect connected fractures over metres. Log fractures and compare water-level response in nearby wells. **Interpretation:** low matrix porosity can coexist with high bulk permeability where fractures provide connected flow paths.",
    },
  ]}
/>
`;
