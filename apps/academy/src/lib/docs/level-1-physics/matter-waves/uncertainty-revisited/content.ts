export const content = String.raw`## Principle

Wave packets require spreads in position and momentum, producing the uncertainty relation.

## Notation

<Notation
  items={[
    { symbol: "\\Delta x", meaning: "position uncertainty", unit: "m" },
    { symbol: "\\Delta p", meaning: "momentum uncertainty", unit: "kg m s^{-1}" },
    { symbol: "\\Delta E", meaning: "energy uncertainty", unit: "J" },
    { symbol: "\\Delta t", meaning: "time interval", unit: "s" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
  ]}
/>

## Method

### Derivation 1: Connect localization and wave number spread

A sharply localized wave packet requires many wavelengths. That creates a spread in momentum.

<PhysicsDerivation
  items={[
    {
      label: "Position momentum",
      tex: "\\Delta x\\Delta p\\ge\\frac{\\hbar}{2}",
    },
    {
      label: "Momentum estimate",
      tex: "\\Delta p\\gtrsim\\frac{\\hbar}{2\\Delta x}",
    },
  ]}
/>

### Derivation 2: Estimate confinement energy

If a particle is confined to width \\(L\\), its momentum uncertainty gives a minimum kinetic-energy scale.

<PhysicsDerivation
  items={[
    {
      label: "Confinement momentum",
      tex: "\\Delta p\\sim\\frac{\\hbar}{L}",
    },
    {
      label: "Energy scale",
      tex: "K\\sim\\frac{(\\Delta p)^2}{2m}",
    },
  ]}
/>

### Derivation 3: Use energy-time uncertainty carefully

Energy-time uncertainty estimates linewidths and lifetimes; it is not caused by a faulty clock.

## Rules

<Equation label="Position momentum" tex="\Delta x\Delta p\ge\frac{\hbar}{2}" />

<Equation label="Energy time" tex="\Delta E\Delta t\gtrsim\frac{\hbar}{2}" />

<Equation label="Confinement scale" tex="K\sim\frac{\hbar^2}{2mL^2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An electron is localized to \\(0.100\\,\\mathrm{nm}\\). Estimate the minimum \\(\\Delta p\\).",
      answer: "\\[\\Delta p\\ge\\frac{\\hbar}{2\\Delta x}=\\frac{1.05\\times10^{-34}}{2(1.00\\times10^{-10})}=5.25\\times10^{-25}\\,\\mathrm{kg\\,m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "If a state has lifetime \\(1.0\\,\\mathrm{ns}\\), estimate the minimum energy width.",
      answer: "\\[\\Delta E\\gtrsim\\frac{\\hbar}{2\\Delta t}=5.3\\times10^{-26}\\,\\mathrm J=3.3\\times10^{-7}\\,\\mathrm{eV}\\]",
    },
  ]}
/>

## Checks

- Uncertainty is not just instrument error.
- Smaller confinement length means larger momentum spread.
- Zero kinetic energy is incompatible with exact confinement.
- Energy-time uncertainty is used differently from position-momentum uncertainty.`;
