export const content = String.raw`## Principle

Quantum objects show both wave-like and particle-like behavior. Light travels and interferes as a wave, but exchanges energy and momentum in discrete photon packets.

Matter also has wave behavior, described by the de Broglie wavelength.

## Notation

<Notation
  items={[
    { symbol: "E", meaning: "particle or photon energy", unit: "J, eV" },
    { symbol: "p", meaning: "momentum magnitude", unit: "kg m s^{-1}" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "f", meaning: "frequency", unit: "s^{-1}" },
    { symbol: "h", meaning: "Planck constant", unit: "J s" },
    { symbol: "K", meaning: "non-relativistic kinetic energy", unit: "J" },
  ]}
/>

## Method

### Derivation 1: Photon relations

For light, wave variables and particle variables are linked by Planck's constant.

<PhysicsDerivation
  items={[
    {
      label: "Photon energy",
      tex: "E=hf",
    },
    {
      label: "Photon momentum",
      tex: "p=\\frac{h}{\\lambda}",
    },
  ]}
/>

### Derivation 2: Matter waves

A particle with momentum \\(p\\) has de Broglie wavelength.

<PhysicsDerivation
  items={[
    {
      label: "de Broglie wavelength",
      tex: "\\lambda=\\frac{h}{p}",
    },
    {
      label: "Non-relativistic momentum",
      tex: "p=\\sqrt{2mK}",
    },
  ]}
/>

### Derivation 3: Interpret experiments

Interference and diffraction reveal wave behavior. Localized detection and energy transfer reveal particle behavior.

<PhysicsDerivation
  items={[
    {
      label: "Photoelectric photon energy",
      tex: "K_{\\max}=hf-\\phi",
    },
    {
      label: "Diffraction scale",
      tex: "a\\sin\\theta\\sim\\lambda",
    },
  ]}
/>

## Rules

<Equation label="Photon energy" tex="E=hf" />

<Equation label="Photon momentum" tex="p=\frac{h}{\lambda}" />

<Equation label="de Broglie wavelength" tex="\lambda=\frac{h}{p}" />

<Equation label="Non-relativistic momentum" tex="p=\sqrt{2mK}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the photon momentum for \\(\\lambda=500\\,\\mathrm{nm}\\).",
      answer: "\\[p=\\frac{h}{\\lambda}=\\frac{6.63\\times10^{-34}}{500\\times10^{-9}}=1.33\\times10^{-27}\\,\\mathrm{kg\\,m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "An electron has momentum \\(8.0\\times10^{-25}\\,\\mathrm{kg\\,m\\,s^{-1}}\\). Find its de Broglie wavelength.",
      answer: "\\[\\lambda=\\frac{h}{p}=\\frac{6.63\\times10^{-34}}{8.0\\times10^{-25}}=8.3\\times10^{-10}\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- Wave-particle duality does not mean a classical wave plus a classical particle at the same time.
- The observed behavior depends on the measurement setup.
- Interference can build up one particle at a time.
- A smaller momentum means a larger de Broglie wavelength.`;
