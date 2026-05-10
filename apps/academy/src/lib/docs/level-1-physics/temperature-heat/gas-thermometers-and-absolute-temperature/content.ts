export const content = String.raw`## Principle

A constant-volume gas thermometer defines an absolute temperature scale by using gas pressure as the measurable property.

For a fixed amount of dilute gas held at fixed volume, pressure is proportional to Kelvin temperature.

## Notation

<Notation
  items={[
    { symbol: "p", meaning: "absolute pressure of the gas", unit: "Pa" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
    { symbol: "T_C", meaning: "Celsius temperature", unit: "deg C" },
    { symbol: "p_1,p_2", meaning: "two gas pressures at fixed volume", unit: "Pa" },
    { symbol: "T_1,T_2", meaning: "two absolute temperatures", unit: "K" },
  ]}
/>

## Method

The gas thermometer is useful because a dilute gas at fixed volume gives a nearly linear pressure-temperature relation. Extrapolating that line identifies the zero of the absolute scale.

<PhysicsDerivation
  items={[
    {
      label: "Fixed gas sample",
      tex: "p\\propto T",
      note: "The amount of gas and volume are held constant.",
    },
    {
      label: "Pressure ratio",
      tex: "\\frac{p_1}{p_2}=\\frac{T_1}{T_2}",
    },
    {
      label: "Temperature from reference",
      tex: "T=T_{\\mathrm{ref}}\\frac{p}{p_{\\mathrm{ref}}}",
    },
    {
      label: "Celsius offset",
      tex: "T=T_C+273.15",
    },
  ]}
/>

The Kelvin scale is absolute because \\(T=0\\,\\mathrm\{K\}\\) corresponds to the extrapolated zero-pressure intercept of this gas-thermometer model. The gas would not remain an ordinary gas all the way to that point; the intercept defines the scale, not a practical gas state.

## Rules

These are the compact gas-thermometer and absolute-temperature relations.

<Equation label="Kelvin temperature" tex="T=T_C+273.15" />

<Equation label="Celsius temperature" tex="T_C=T-273.15" />

<Equation label="Fixed-volume ratio" tex="\frac{T_1}{T_2}=\frac{p_1}{p_2}" />

<Equation label="Reference calibration" tex="T=T_{\mathrm{ref}}\frac{p}{p_{\mathrm{ref}}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A constant-volume gas thermometer reads \\(1.20\\times10^5\\,\\mathrm{Pa}\\) at \\(300\\,\\mathrm{K}\\). What temperature corresponds to pressure \\(1.60\\times10^5\\,\\mathrm{Pa}\\)?",
      answer: "\\[T=T_{\\mathrm{ref}}\\frac{p}{p_{\\mathrm{ref}}}=300\\frac{1.60\\times10^5}{1.20\\times10^5}=400\\,\\mathrm{K}\\]",
    },
    {
      title: "Example 2",
      question: "Convert \\(-40.0\\,\\mathrm{^\\circ C}\\) to kelvins.",
      answer: "\\[T=T_C+273.15=-40.0+273.15=233.15\\,\\mathrm{K}\\]",
    },
  ]}
/>

## Checks

- Gas thermometer pressures must be absolute pressures.
- Kelvin temperatures are not written with degree symbols.
- Ratios such as \\(T_1/T_2\\) require absolute temperature, not Celsius temperature.
- The zero-pressure intercept defines the scale; it is not a claim that an ordinary gas can be cooled to \\(0\\,\\mathrm\{K\}\\).`;
