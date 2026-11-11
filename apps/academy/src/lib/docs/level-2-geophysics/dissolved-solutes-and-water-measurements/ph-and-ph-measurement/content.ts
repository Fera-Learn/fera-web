export const content = String.raw`## The Field Problem

Acid mine water and neutral groundwater can differ by thousands of times in hydrogen-ion concentration. pH compresses that range into a logarithmic scale and requires a temperature-aware electrochemical measurement.

## What Changes Underground

Let \\([\mathrm{H^+}]\\) be hydrogen-ion concentration in moles per litre. Then

\\[
\mathrm{pH}=-\log_{10}[\mathrm{H^+}].
\\]

At 25 °C, pure water has \\([\mathrm{H^+}]=[\mathrm{OH^-}]=10^{-7}\,\mathrm{mol\,L^{-1}}\\), so pH is 7, and their concentration product is \\(10^{-14}\\). One pH unit represents a factor of ten in hydrogen-ion concentration.

## How We Detect It

A glass electrode exchanges hydrogen ions at its wet surface and develops a voltage against a stable reference electrode. The meter measures about 59 mV per pH unit at 25 °C and uses temperature. Ions are required to complete the circuit, so deionised water gives drifting readings.

Check the probe against known waters and measure temperature with each sample.

## What the Evidence Means

pH is calculated from electrode voltage; it is not a direct count of ions. A difference from pH 8 to pH 4 means \\(10^4=10{,}000\\) times more hydrogen ion, not twice the acidity.

Very low ion content and temperature can make the reading unstable. Pair pH with EC and ion chemistry when interpreting acid sources or their electrical effect.

<PhysicsExamples collapsible
  items={[
    {
      title: "Compare two pH values",
      question: "How many times greater is hydrogen-ion concentration at pH 4 than at pH 8?",
      answer: "**Strategy:** use the four-unit difference on the base-10 scale. The concentration ratio is 10^(8 - 4) = 10^4 = 10,000. **Interpretation:** under the lecture's concentration definition, pH 4 water contains 10,000 times more H+ than pH 8 water.",
    },
    {
      title: "Interpret a drifting deionised-water reading",
      question: "A pH probe drifts in deionised water but is stable in mineral water. Does drift prove that pH is changing rapidly?",
      answer: "**Strategy:** check measurement conditions before assigning an environmental process. Deionised water has too few ions to complete the probe circuit reliably, so the voltage can drift. Verify calibration and add a suitable ionic-strength method. **Interpretation:** the unstable display is primarily a measurement limitation, not evidence of rapid chemical change.",
    },
  ]}
/>
`;
