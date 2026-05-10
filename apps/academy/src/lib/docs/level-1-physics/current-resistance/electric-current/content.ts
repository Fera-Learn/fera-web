export const content = String.raw`## Principle

Electric current measures the rate at which charge crosses a chosen surface.

## Notation

<Notation
  items={[
    { symbol: "I", meaning: "electric current", unit: "A" },
    { symbol: "\\Delta Q", meaning: "charge crossing a surface", unit: "C" },
    { symbol: "dQ", meaning: "small amount of charge crossing a surface", unit: "C" },
    { symbol: "\\Delta t", meaning: "time interval", unit: "s" },
    { symbol: "\\vec J", meaning: "current density", unit: "A m^{-2}" },
    { symbol: "A", meaning: "cross-sectional area", unit: "m^{2}" },
  ]}
/>

## Method

### Derivation 1: Define current from charge flow

Choose a surface in a wire or device. Current counts signed charge crossing that surface per unit time.

<PhysicsDerivation
  items={[
    {
      label: "Average current",
      tex: "I_{\\mathrm{avg}}=\\frac{\\Delta Q}{\\Delta t}",
    },
    {
      label: "Instantaneous current",
      tex: "I=\\frac{dQ}{dt}",
    },
    {
      label: "Ampere",
      tex: "1\\,\\mathrm{A}=1\\,\\mathrm{C\\,s^{-1}}",
    },
  ]}
/>

### Derivation 2: Current direction is conventional

Current direction is defined as the direction positive charge would move. In metals, mobile electrons drift opposite the conventional current.

<PhysicsDerivation
  items={[
    {
      label: "Positive carriers",
      tex: "q>0\\Rightarrow \\vec v_{\\mathrm{drift}}\\parallel\\vec I",
    },
    {
      label: "Electron carriers",
      tex: "q<0\\Rightarrow \\vec v_{\\mathrm{drift}}\\ \\text{opposite conventional current}",
    },
  ]}
/>

### Derivation 3: Spread current over an area

If current is distributed uniformly through a cross-section, current density is current per area.

<PhysicsDerivation
  items={[
    {
      label: "Uniform current density",
      tex: "J=\\frac{I}{A}",
    },
    {
      label: "Recover current",
      tex: "I=JA",
    },
  ]}
/>

## Rules

These are the compact current definitions.

<Equation label="Average current" tex="I_{\mathrm{avg}}=\frac{\Delta Q}{\Delta t}" />

<Equation label="Instantaneous current" tex="I=\frac{dQ}{dt}" />

<Equation label="Current density" tex="J=\frac{I}{A}\quad\text{for uniform flow}" />

<Equation label="Ampere" tex="1\,\mathrm{A}=1\,\mathrm{C\,s^{-1}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A charge of \\(18\\,\\mathrm{C}\\) crosses a wire cross-section in \\(6.0\\,\\mathrm{s}\\). Find the average current.",
      answer: "\\[I=\\frac{\\Delta Q}{\\Delta t}=\\frac{18}{6.0}=3.0\\,\\mathrm{A}\\]",
    },
    {
      title: "Example 2",
      question: "A metal wire carries conventional current to the right. Which way do conduction electrons drift?",
      answer: "Electrons are negative, so their drift velocity is opposite the conventional current: to the left.",
    },
  ]}
/>

## Checks

- Current needs a chosen surface and a direction convention.
- Conventional current follows positive charge motion.
- Electron drift in a metal is opposite conventional current.
- Current density is a vector in general, even though many wire problems use its magnitude.`;
