export const content = String.raw`## The Field Problem

Pure water conducts very weakly, while seawater and some mine waters carry current readily. The difference is the number, charge, and mobility of dissolved ions.

## What Changes Underground

Electrical current is movement of charge. In water, cations drift towards a negative electrode and anions towards a positive electrode. **Electrical conductivity**, EC or \\(\sigma\\), describes how easily the water carries current and is commonly reported in microsiemens per centimetre, \\(\mathrm{\mu S\,cm^{-1}}\\).

Deionised water is below about \\(1\,\mathrm{\mu S\,cm^{-1}}\\), Magnesian Limestone groundwater is represented by \\(867\,\mathrm{\mu S\,cm^{-1}}\\), and seawater by about \\(50{,}000\,\mathrm{\mu S\,cm^{-1}}\\). More ions usually increase EC, but ions differ in charge and mobility; \\(\mathrm{H^+}\\) and \\(\mathrm{OH^-}\\) move especially quickly.

## How We Detect It

A probe applies a small alternating voltage across electrodes and directly measures current. Calibration and probe geometry convert conductance to EC. The reciprocal property is resistivity \\(\rho\\); for these units,

\\[
\rho_w\,(\mathrm{\Omega\,m})=\frac{10{,}000}{\mathrm{EC}\,(\mathrm{\mu S\,cm^{-1}})}.
\\]

## What the Evidence Means

EC is a bulk property of the water, not a direct dissolved-mass measurement. Equal masses of different ions can produce different EC because their charge and mobility differ. Temperature also changes mobility.

Use EC to compare or screen waters after temperature correction, then use ion analysis to identify composition. A low resistivity indicates strong conduction but does not uniquely identify salinity or acidity.

<PhysicsExamples collapsible
  items={[
    {
      title: "Convert EC to water resistivity",
      question: "Magnesian Limestone groundwater has EC = 867 µS/cm. Estimate its resistivity.",
      answer: "**Strategy:** use the unit-specific reciprocal conversion. Resistivity is 10,000 / 867 = 11.5 ohm metres, about 12 ohm metres. **Interpretation:** this groundwater resists current far less than deionised water, but the value alone does not identify its dissolved ions.",
    },
    {
      title: "Equal dissolved mass, unequal EC",
      question: "Two waters contain the same dissolved mass but different ion mixtures and give different EC readings. Why is this possible?",
      answer: "**Strategy:** separate mass concentration from charge transport. Ion number, charge, and mobility all affect current; hydrogen and hydroxide are especially mobile. Measure individual ions, pH, and temperature. **Interpretation:** the EC difference is physically plausible and cannot be converted to a unique dissolved mass without a composition assumption.",
    },
  ]}
/>
`;
