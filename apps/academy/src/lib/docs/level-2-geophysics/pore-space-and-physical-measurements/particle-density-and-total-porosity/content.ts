export const content = String.raw`## The Field Problem

Bulk density says how much dry solid occupies a soil volume, but estimating pore space also requires the density of the solid particles themselves.

## What Changes Underground

Particle density \\(\rho_p\\) is dry solid mass divided by solid volume only. Dry bulk density \\(\rho_b\\) uses total volume, including pores. The total porosity fraction is

\\[
\phi=1-\frac{\rho_b}{\rho_p}.
\\]

Multiply \\(\phi\\) by 100 for percent pore space. Quartz-rich mineral material is commonly represented by \\(\rho_p=2.65\,\mathrm{g\,cm^{-3}}\\), while organic matter is much less dense at about \\(1.0\,\mathrm{g\,cm^{-3}}\\).

## How We Detect It

Measure bulk density from an undisturbed core. Use an appropriate measured or justified particle density for its solids, then calculate porosity. Do not automatically use the quartz value for organic-rich soil.

Compare the result with structure and pore-size evidence because total porosity does not show connectivity.

## What the Evidence Means

Clay commonly has high total porosity because many tiny pores fit between small particles, yet those pores may transmit water slowly. A porosity estimate also inherits error from both density measurements.

Use porosity to quantify total space, not to claim a flow rate or water content without further evidence.

<PhysicsExamples collapsible
  items={[
    {
      title: "Calculate mineral-soil porosity",
      question: "A mineral soil has dry bulk density 1.40 g/cm³ and particle density 2.65 g/cm³. Estimate total porosity.",
      answer: "**Strategy:** divide bulk density by particle density, then subtract from one. The ratio is 1.40/2.65 = 0.528, so porosity is 1 - 0.528 = 0.472, or about 47 percent. **Interpretation:** roughly 47 percent of the total volume is pore space; the calculation does not show how much is water-filled or connected.",
    },
    {
      title: "Avoid the quartz assumption in peat",
      question: "Why would using 2.65 g/cm³ as particle density overstate or distort porosity for an organic-rich horizon?",
      answer: "**Strategy:** check whether the assumed solid material matches the sample. Organic matter has particle density near 1.0 g/cm³, far below quartz, so a mineral-only value is inappropriate. **Interpretation:** measure or estimate a composition-specific particle density before calculating peat porosity; otherwise the apparent precision is misleading.",
    },
  ]}
/>
`;
