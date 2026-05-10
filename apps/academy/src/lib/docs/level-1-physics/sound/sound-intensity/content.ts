export const content = String.raw`## Principle

Sound intensity is average power transmitted per unit area.

## Notation

<Notation
  items={[
    { symbol: "I", meaning: "sound intensity", unit: "W m^{-2}" },
    { symbol: "P", meaning: "average sound power", unit: "W" },
    { symbol: "A", meaning: "area crossed by the sound", unit: "m^{2}" },
    { symbol: "\\Delta p_{\\max}", meaning: "pressure amplitude", unit: "Pa" },
    { symbol: "\\rho", meaning: "medium density", unit: "kg m^{-3}" },
    { symbol: "\\beta", meaning: "sound intensity level", unit: "dB" },
  ]}
/>

## Method

Intensity measures energy transport, not pressure itself. For a plane sinusoidal sound wave, intensity scales with the square of pressure amplitude.

<PhysicsDerivation
  items={[
    {
      label: "Power per area",
      tex: "I=\\frac{P}{A}",
    },
    {
      label: "Pressure-amplitude form",
      tex: "I=\\frac{(\\Delta p_{\\max})^2}{2\\rho v}",
    },
    {
      label: "Spherical spreading",
      tex: "I=\\frac{P}{4\\pi r^2}",
      note: "Use this for an ideal point source radiating equally in all directions.",
    },
    {
      label: "Decibel level",
      tex: "\\beta=10\\log_{10}\\left(\\frac{I}{I_0}\\right)",
    },
  ]}
/>

The logarithmic level compares an intensity with a reference intensity \\(I_0\\), commonly \\(10^\{-12\}\\,\\mathrm\{W\\,m^\{-2\}}\\) in air acoustics.

## Rules

These are the compact intensity relations.

<Equation label="Intensity" tex="I=\frac{P}{A}" />

<Equation label="Pressure form" tex="I=\frac{(\Delta p_{\max})^2}{2\rho v}" />

<Equation label="Point source" tex="I=\frac{P}{4\pi r^2}" />

<Equation label="Decibel level" tex="\beta=10\log_{10}\left(\frac{I}{I_0}\right)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A source radiates \\(0.50\\,\\mathrm{W}\\) uniformly. Find the intensity \\(4.0\\,\\mathrm{m}\\) away.",
      answer: "\\[I=\\frac{P}{4\\pi r^2}=\\frac{0.50}{4\\pi(4.0)^2}=2.5\\times10^{-3}\\,\\mathrm{W\\,m^{-2}}\\]",
    },
    {
      title: "Example 2",
      question: "Find the sound level for \\(I=1.0\\times10^{-6}\\,\\mathrm{W\\,m^{-2}}\\) using \\(I_0=10^{-12}\\,\\mathrm{W\\,m^{-2}}\\).",
      answer: "\\[\\beta=10\\log_{10}\\left(\\frac{10^{-6}}{10^{-12}}\\right)=60\\,\\mathrm{dB}\\]",
    },
  ]}
/>

## Checks

- Doubling pressure amplitude quadruples intensity in the plane-wave model.
- Moving twice as far from an ideal point source reduces intensity by a factor of four.
- Decibels are logarithmic; adding \\(10\\,\\mathrm\{dB\}\\) multiplies intensity by \\(10\\).
- Intensity is always nonnegative.`;
