export const content = String.raw`## The Field Problem

A spill lies 1 km from a stream. Estimating arrival time requires the pore-water speed, not simply the Darcy flux reported for the aquifer.

## What Changes Underground

Let \\(L\\) be travel distance in metres and \\(v\\) average seepage velocity in metres per day. Advective travel time \\(t\\) is

\\[
t=\frac{L}{v}.
\\]

The velocity follows \\(v=K_{sat}i/\phi_e\\), where \\(K_{sat}\\) is saturated hydraulic conductivity, \\(i\\) hydraulic gradient, and \\(\phi_e\\) effective porosity. A longer path or slower velocity increases arrival time.

## How We Detect It

Measure heads to derive gradient, estimate \\(K_{sat}\\) with hydraulic tests, and constrain effective porosity and path length from the ground model. The travel time is calculated. Repeated contaminant sampling tests the estimate.

Use units consistently and define whether distance follows the flow path or is only a straight map distance.

## What the Evidence Means

The estimate assumes steady flow and ignores dispersion, sorption, reaction, and preferential pathways. It predicts average advective movement, not the first detectable arrival or the complete contaminant plume.

Uncertainty in \\(K_{sat}\\), gradient, and connected porosity should be propagated as a time range when the environmental decision depends on arrival.

<PhysicsExamples collapsible
  items={[
    {
      title: "Estimate travel to a stream",
      question: "For Ksat = 10 m/day, i = 0.01, effective porosity 0.30, and path length 1000 m, estimate groundwater travel time.",
      answer: "**Strategy:** derive flux, convert to seepage velocity, then divide distance by velocity. q = 10 m/day × 0.01 = 0.10 m/day; v = 0.10/0.30 = 0.33 m/day; t = 1000 m / 0.33 m/day ≈ 3000 days, about 8 years. **Interpretation:** the result is an average advective time under steady conditions.",
    },
    {
      title: "Identify the Darcy-flux mistake",
      question: "Using q = 0.10 m/day directly gives 10,000 days for the same aquifer. Why is that estimate about three times too long?",
      answer: "**Strategy:** inspect the area represented by each speed. Darcy flux divides discharge by the whole cross-section, while water moves only through the 0.30 connected pore fraction. Dividing q by 0.30 gives v = 0.33 m/day and the shorter time. **Interpretation:** 27 years results from using bulk flux as pore-water speed; repeated downstream sampling is still needed to test faster paths.",
    },
  ]}
/>
`;
