export const content = String.raw`## The Field Problem

Two wells show different groundwater heads across a saturated sand layer. Darcy's law converts that head drop, material conductivity, and flow area into the discharge crossing the section.

## What Changes Underground

Let \\(Q\\) be discharge in cubic metres per second, \\(K_{sat}\\) saturated hydraulic conductivity in metres per second, and \\(A\\) cross-sectional area perpendicular to flow in square metres. Define \\(\Delta h\\) as the positive head drop along flow over distance \\(L\\), both in metres, so hydraulic gradient is \\(i=\Delta h/L\\). Darcy's law is

\\[
Q=K_{sat}A\frac{\Delta h}{L}=K_{sat}Ai.
\\]

Discharge increases with conductivity, area, or gradient. If the head drop is zero, this one-dimensional model gives zero flow.

## How We Detect It

Measure hydraulic head in wells screened in the same saturated layer and survey their separation. Obtain \\(K_{sat}\\) from a hydraulic test and define the cross-section of the flow model. Then calculate \\(Q\\); it is not directly measured unless flow is collected independently.

Use consistent elevation datums and do not substitute depth-to-water for head without accounting for ground elevation.

## What the Evidence Means

Darcy's law assumes saturated, representative flow through the chosen section. Layering, fractures, changing area, and uncertain \\(K_{sat}\\) can dominate error. The calculated discharge is a model result for that geometry, not the speed of individual water molecules.

Check the direction against the measured heads and test the magnitude with pumping or streamflow evidence where available.

<PhysicsExamples collapsible
  items={[
    {
      title: "Calculate saturated discharge",
      question: "A saturated layer has Ksat = 2 × 10^-5 m/s, area 12 m², and a 0.6 m head drop over 30 m. Find Q.",
      answer: "**Strategy:** calculate the dimensionless gradient, then apply Darcy's law. The gradient is 0.6 m / 30 m = 0.020. Discharge is (2 × 10^-5 m/s)(12 m²)(0.020) = 4.8 × 10^-6 m³/s. **Interpretation:** this is the modelled volume rate through the full section towards lower head.",
    },
    {
      title: "Avoid a false gradient",
      question: "Depth to water is 4 m in an upslope well and 2 m in a downslope well. Why can those depths alone not give flow direction?",
      answer: "**Strategy:** convert both readings to hydraulic-head elevation using surveyed ground levels. A shallower depth at lower ground can still have lower head. Confirm that both wells screen the same layer. **Interpretation:** flow direction follows head elevation, not depth below local ground, so the gradient remains unresolved without the datum correction.",
    },
  ]}
/>
`;
