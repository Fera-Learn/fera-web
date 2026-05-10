export const content = String.raw`## Principle

Particles with momentum have de Broglie wavelengths and can show interference and diffraction.

## Notation

<Notation
  items={[
    { symbol: "\\lambda", meaning: "de Broglie wavelength", unit: "m" },
    { symbol: "h", meaning: "Planck constant", unit: "J s" },
    { symbol: "p", meaning: "momentum magnitude", unit: "kg m s^{-1}" },
    { symbol: "m_e", meaning: "electron mass", unit: "kg" },
    { symbol: "e", meaning: "elementary charge", unit: "C" },
    { symbol: "V", meaning: "accelerating potential difference", unit: "V" },
  ]}
/>

## Method

### Derivation 1: Attach a wavelength to momentum

The de Broglie relation assigns a wave scale to any particle with momentum.

<PhysicsDerivation
  items={[
    {
      label: "de Broglie relation",
      tex: "\\lambda=\\frac{h}{p}",
    },
    {
      label: "Nonrelativistic momentum",
      tex: "p=mv",
    },
  ]}
/>

### Derivation 2: Use an accelerating voltage

An electron accelerated from rest through \\(V\\) gains kinetic energy \\(eV\\).

<PhysicsDerivation
  items={[
    {
      label: "Energy gain",
      tex: "K=eV",
    },
    {
      label: "Momentum from energy",
      tex: "p=\\sqrt{2m_eK}=\\sqrt{2m_eeV}",
    },
    {
      label: "Electron wavelength",
      tex: "\\lambda=\\frac{h}{\\sqrt{2m_eeV}}",
    },
  ]}
/>

### Derivation 3: Read diffraction as wave evidence

If \\(\\lambda\\) is comparable with atomic spacing, electrons diffract from crystals like waves from a grating.

## Rules

<Equation label="de Broglie" tex="\lambda=\frac{h}{p}" />

<Equation label="Electron energy" tex="K=eV" />

<Equation label="Electron wavelength" tex="\lambda=\frac{h}{\sqrt{2m_eeV}}" />

<Equation label="Bragg condition" tex="2d\sin\theta=n\lambda" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An electron has momentum \\(2.00\\times10^{-24}\\,\\mathrm{kg\\,m\\,s^{-1}}\\). Find its de Broglie wavelength.",
      answer: "\\[\\lambda=\\frac{h}{p}=\\frac{6.63\\times10^{-34}}{2.00\\times10^{-24}}=3.32\\times10^{-10}\\,\\mathrm m\\]",
    },
    {
      title: "Example 2",
      question: "An electron is accelerated through \\(150\\,\\mathrm V\\). Estimate its nonrelativistic wavelength.",
      answer: "\\[\\lambda=\\frac{h}{\\sqrt{2m_eeV}}=1.00\\times10^{-10}\\,\\mathrm m\\]",
    },
  ]}
/>

## Checks

- Larger momentum means shorter wavelength.
- Use joules when substituting into \\(\lambda=h/p\\).
- Electron diffraction is strongest when wavelength and spacing are comparable.
- The voltage formula is nonrelativistic; high voltages need relativistic momentum.`;
