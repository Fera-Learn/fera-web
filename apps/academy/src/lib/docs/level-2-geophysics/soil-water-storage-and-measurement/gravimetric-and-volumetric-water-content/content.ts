export const content = String.raw`## The Field Problem

Two samples can contain the same water mass per dry mass yet store different water volumes per field volume. A core measurement must therefore state whether water content is by mass or by volume.

## What Changes Underground

Let \\(m_{\mathrm{wet}}\\) and \\(m_{\mathrm{dry}}\\) be wet and oven-dry sample masses in grams. Water mass is

\\[
m_w=m_{\mathrm{wet}}-m_{\mathrm{dry}}.
\\]

For fresh water of density \\(\rho_w=1.00\,\mathrm{g\,cm^{-3}}\\), water volume is \\(V_w=m_w/\rho_w\\). Gravimetric water content is \\(\theta_g=m_w/m_{\mathrm{dry}}\\), while volumetric water content is \\(\theta_v=V_w/V_t\\), where \\(V_t\\) is total core volume. Both are fractions, but \\(\theta_v\\) can also be written \\(\mathrm{m^3\,m^{-3}}\\).

## How We Detect It

Take a core of known volume, weigh it wet, dry it at 105 °C for 1–2 days, and weigh it again. The mass loss is measured water mass; water volume and both contents are derived. Soil probes estimate \\(\theta_v\\) after calibration rather than \\(\theta_g\\).

Preserve the core volume and avoid water loss before the wet weighing.

## What the Evidence Means

The River Browney example uses \\(V_t=400\,\mathrm{cm^3}\\), \\(m_{\mathrm{wet}}=760\,\mathrm{g}\\), and \\(m_{\mathrm{dry}}=640\,\mathrm{g}\\). It gives \\(m_w=120\,\mathrm{g}\\), \\(\theta_g=0.19\\), and \\(\theta_v=0.30\\).

Equal \\(\theta_g\\) values do not imply equal \\(\theta_v\\) because dry bulk density can differ. Saline water also has density above 1.00 \\(\mathrm{g\,cm^{-3}}\\), creating a small conversion bias if freshwater density is assumed.

<PhysicsExamples collapsible
  items={[
    {
      title: "Calculate both water contents",
      question: "A 400 cm³ core weighs 760 g wet and 640 g dry. Find water mass, gravimetric water content, and volumetric water content using 1.00 g/cm³ for water.",
      answer: "**Strategy:** find mass loss, convert it to water volume, then use the correct denominator. Water mass is 760 - 640 = 120 g; water volume is 120 g / 1.00 g/cm³ = 120 cm³. Gravimetric content is 120/640 = 0.1875, about 0.19; volumetric content is 120 cm³ / 400 cm³ = 0.30. **Interpretation:** water is 19 percent of dry mass but occupies 30 percent of the total core volume.",
    },
    {
      title: "Same mass ratio, different volume ratio",
      question: "A second 400 cm³ core contains 100 g water and 520 g dry soil. Compare it with the River Browney core even though both have gravimetric content near 0.19.",
      answer: "**Strategy:** calculate volume-based content rather than carrying the equal mass ratio across. With freshwater density, 100 g is 100 cm³, so volumetric content is 100/400 = 0.25, not 0.30. **Interpretation:** the samples have similar water per dry mass but different water per field volume because their dry bulk densities differ.",
    },
  ]}
/>
`;
