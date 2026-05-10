export const content = String.raw`## Principle

Sound waves interfere when coherent pressure variations superpose at the same point.

## Notation

<Notation
  items={[
    { symbol: "\\Delta r", meaning: "path difference", unit: "m" },
    { symbol: "\\Delta \\phi", meaning: "phase difference", unit: "rad" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "m", meaning: "integer order", unit: "1" },
    { symbol: "A", meaning: "pressure-amplitude scale", unit: "Pa" },
  ]}
/>

## Method

At a listener, two coherent sound waves add as pressure variations. The phase difference is set by source phase plus path difference.

<PhysicsDerivation
  items={[
    {
      label: "Path phase",
      tex: "\\Delta\\phi=\\frac{2\\pi\\Delta r}{\\lambda}",
    },
    {
      label: "Constructive condition",
      tex: "\\Delta r=m\\lambda",
    },
    {
      label: "Destructive condition",
      tex: "\\Delta r=\\left(m+\\frac{1}{2}\\right)\\lambda",
    },
    {
      label: "Equal amplitudes",
      tex: "A_{\\mathrm{res}}=2A\\left|\\cos\\left(\\frac{\\Delta\\phi}{2}\\right)\\right|",
    },
  ]}
/>

Stable constructive and destructive regions require the sources to keep a fixed phase relationship.

## Rules

These are the compact interference conditions.

<Equation label="Phase difference" tex="\Delta\phi=\frac{2\pi\Delta r}{\lambda}" />

<Equation label="Constructive" tex="\Delta r=m\lambda" />

<Equation label="Destructive" tex="\Delta r=\left(m+\frac{1}{2}\right)\lambda" />

<Equation label="Equal amplitudes" tex="A_{\mathrm{res}}=2A\left|\cos\left(\frac{\Delta\phi}{2}\right)\right|" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two in-phase speakers emit \\(680\\,\\mathrm{Hz}\\) sound in air. At a point, the path difference is \\(0.25\\,\\mathrm{m}\\). Use \\(v=340\\,\\mathrm{m\\,s^{-1}}\\) to classify the interference.",
      answer: "The wavelength is \\[\\lambda=\\frac{v}{f}=\\frac{340}{680}=0.50\\,\\mathrm{m}\\] The path difference is \\(0.25\\,\\mathrm{m}=\\lambda/2\\), so the interference is destructive for equal in-phase sources.",
    },
  ]}
/>

## Checks

- Interference adds pressure variations, not sound levels in decibels.
- Destructive interference needs comparable amplitudes to produce strong cancellation.
- Different frequencies do not produce a fixed spatial cancellation pattern.
- A path difference of one wavelength returns the waves to the same phase.`;
