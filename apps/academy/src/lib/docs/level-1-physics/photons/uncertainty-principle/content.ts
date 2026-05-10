export const content = String.raw`## Principle

The uncertainty principle is a limit on quantum states, not a defect in measuring tools. A state cannot have arbitrarily precise position and momentum at the same time.

Localising a particle more tightly requires a larger spread in momentum.

## Notation

<Notation
  items={[
    { symbol: "\\Delta x", meaning: "position uncertainty", unit: "m" },
    { symbol: "\\Delta p", meaning: "momentum uncertainty", unit: "kg m s^{-1}" },
    { symbol: "\\Delta E", meaning: "energy uncertainty", unit: "J" },
    { symbol: "\\Delta t", meaning: "time interval or lifetime scale", unit: "s" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "h", meaning: "Planck constant", unit: "J s" },
  ]}
/>

## Method

### Derivation 1: Position and momentum

Wave packets need a spread of wavelengths to be localized. A spread of wavelengths means a spread of momenta.

<PhysicsDerivation
  items={[
    {
      label: "Uncertainty relation",
      tex: "\\Delta x\\,\\Delta p\\ge\\frac{\\hbar}{2}",
    },
    {
      label: "Minimum momentum spread",
      tex: "\\Delta p\\ge\\frac{\\hbar}{2\\Delta x}",
    },
  ]}
/>

### Derivation 2: Energy and time

Short-lived states have an unavoidable spread in energy.

<PhysicsDerivation
  items={[
    {
      label: "Energy-time relation",
      tex: "\\Delta E\\,\\Delta t\\gtrsim\\frac{\\hbar}{2}",
    },
    {
      label: "Energy spread estimate",
      tex: "\\Delta E\\gtrsim\\frac{\\hbar}{2\\Delta t}",
    },
  ]}
/>

### Derivation 3: Connect to diffraction

A narrow slit localizes transverse position, but it produces transverse momentum spread and angular diffraction.

<PhysicsDerivation
  items={[
    {
      label: "Aperture localization",
      tex: "\\Delta y\\sim a",
    },
    {
      label: "Transverse momentum spread",
      tex: "\\Delta p_y\\sim\\frac{h}{a}",
    },
  ]}
/>

## Rules

<Equation label="Position momentum uncertainty" tex="\Delta x\,\Delta p\ge\frac{\hbar}{2}" />

<Equation label="Momentum uncertainty" tex="\Delta p\ge\frac{\hbar}{2\Delta x}" />

<Equation label="Energy time uncertainty" tex="\Delta E\,\Delta t\gtrsim\frac{\hbar}{2}" />

<Equation label="Reduced Planck constant" tex="\hbar=\frac{h}{2\pi}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An electron is localized to \\(0.100\\,\\mathrm{nm}\\). Estimate the minimum momentum uncertainty using \\(\\hbar=1.05\\times10^{-34}\\,\\mathrm{J\\,s}\\).",
      answer: "\\[\\Delta p\\ge\\frac{1.05\\times10^{-34}}{2(1.00\\times10^{-10})}=5.25\\times10^{-25}\\,\\mathrm{kg\\,m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A state lasts \\(1.0\\times10^{-9}\\,\\mathrm{s}\\). Estimate the minimum energy uncertainty.",
      answer: "\\[\\Delta E\\gtrsim\\frac{1.05\\times10^{-34}}{2(1.0\\times10^{-9})}=5.25\\times10^{-26}\\,\\mathrm{J}\\]",
    },
  ]}
/>

## Checks

- Reducing position uncertainty increases the minimum possible momentum uncertainty.
- The uncertainty principle applies even with ideal instruments.
- The lower bound is a product, so either uncertainty can be large.
- Energy-time uncertainty is often used as a lifetime-linewidth estimate.`;
