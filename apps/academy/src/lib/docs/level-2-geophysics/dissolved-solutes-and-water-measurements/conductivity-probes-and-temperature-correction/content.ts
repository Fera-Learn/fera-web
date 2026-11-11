export const content = String.raw`## The Field Problem

The same water reads more conductive when warm, and two probes would give different raw conductance if their electrode geometry differed. Calibration and temperature correction are needed before comparing sites.

## What Changes Underground

Conductance \\(G\\), in siemens, describes current through a particular electrode pair. Let electrode gap \\(L\\) and area \\(A\\) be measured in centimetres and square centimetres. The cell constant is \\(K=L/A\\), in \\(\mathrm{cm^{-1}}\\), and water conductivity is

\\[
\mathrm{EC}=KG.
\\]

Ion mobility rises with temperature. If \\(\mathrm{EC}_T\\) is measured at \\(T\\) °C, the lecture correction to 25 °C is

\\[
\mathrm{EC}_{25}=\frac{\mathrm{EC}_T}{1+0.02(T-25)}.
\\]

## How We Detect It

The probe applies alternating voltage, measures current, and records temperature. Calibrate the cell constant with a known standard such as \\(1413\,\mathrm{\mu S\,cm^{-1}}\\). Automatic temperature compensation then calculates \\(\mathrm{EC}_{25}\\), assuming about 2 percent change per degree Celsius.

Rinse between samples and wait for the temperature reading before comparing the small measurement volumes.

## What the Evidence Means

Current and temperature are direct readings; conductivity, corrected conductivity, TDS, and salinity are calculated outputs. The 2 percent coefficient is an approximation and may not fit every ion mixture.

Compare waters using \\(\mathrm{EC}_{25}\\), with calibration and correction settings recorded. A change smaller than drift or calibration error is not a resolved environmental contrast.

<PhysicsExamples collapsible
  items={[
    {
      title: "Correct a warm-water reading",
      question: "A probe reads 1200 µS/cm at 30 °C. Estimate EC25 using the 2 percent per °C correction.",
      answer: "**Strategy:** substitute temperature into the stated correction. The denominator is 1 + 0.02(30 - 25) = 1.10, so EC25 = 1200/1.10 = 1091 µS/cm, about 1090 µS/cm. **Interpretation:** correcting removes the expected warming effect before comparison with 25 °C samples.",
    },
    {
      title: "Diagnose a probe mismatch",
      question: "Two probes read different conductance in the same standard, but both display the correct EC after calibration. Is that inconsistent?",
      answer: "**Strategy:** distinguish electrode-specific conductance from water-specific conductivity. Different gaps or areas give different G, while each calibrated cell constant K converts its reading through EC = KG. **Interpretation:** matching corrected EC supports proper calibration; compare standards again if field samples diverge beyond uncertainty.",
    },
  ]}
/>
`;
