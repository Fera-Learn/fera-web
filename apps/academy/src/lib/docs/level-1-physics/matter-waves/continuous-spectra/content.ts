export const content = String.raw`## Principle

Continuous spectra arise when emitted photon energies can vary over a range rather than fixed level gaps.

## Notation

<Notation
  items={[
    { symbol: "E_\gamma", meaning: "photon energy", unit: "J" },
    { symbol: "f", meaning: "frequency", unit: "Hz" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
    { symbol: "\\lambda_{\\max}", meaning: "peak thermal wavelength", unit: "m" },
    { symbol: "b", meaning: "Wien displacement constant", unit: "m K" },
  ]}
/>

## Method

### Derivation 1: Contrast line and continuous spectra

Line spectra come from fixed atomic energy gaps. Continuous spectra come from many available energies or thermal motion.

<PhysicsDerivation
  items={[
    {
      label: "Photon energy",
      tex: "E_\\gamma=hf=\\frac{hc}{\\lambda}",
    },
    {
      label: "Line spectrum",
      tex: "E_\\gamma=E_i-E_f",
    },
  ]}
/>

### Derivation 2: Use thermal radiation scale

A hot dense object emits a broad spectrum whose peak shifts with temperature.

<PhysicsDerivation
  items={[
    {
      label: "Wien law",
      tex: "\\lambda_{\\max}T=b",
    },
    {
      label: "Hotter source",
      tex: "T\\uparrow\\Rightarrow \\lambda_{\\max}\\downarrow",
    },
  ]}
/>

### Derivation 3: Identify bremsstrahlung continua

Accelerated charged particles can emit photons with a continuous range of energies, up to the available kinetic energy.

## Rules

<Equation label="Photon energy" tex="E_\gamma=hf=\frac{hc}{\lambda}" />

<Equation label="Wien law" tex="\lambda_{\max}T=b" />

<Equation label="Endpoint limit" tex="E_{\gamma,\max}=K_{\mathrm{available}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A thermal spectrum peaks at \\(500\\,\\mathrm{nm}\\). Estimate the temperature using \\(b=2.90\\times10^{-3}\\,\\mathrm{m\\,K}\\).",
      answer: "\\[T=\\frac{b}{\\lambda_{\\max}}=\\frac{2.90\\times10^{-3}}{500\\times10^{-9}}=5.80\\times10^3\\,\\mathrm K\\]",
    },
    {
      title: "Example 2",
      question: "An electron loses \\(20.0\\,\\mathrm{keV}\\) in one braking event. What is the largest photon energy possible?",
      answer: "The maximum photon energy is the available kinetic-energy loss: \\(20.0\\,\\mathrm{keV}\\).",
    },
  ]}
/>

## Checks

- A continuous spectrum is not evidence for one fixed transition.
- Hotter thermal sources peak at shorter wavelengths.
- Line spectra can sit on top of a continuum.
- A high-energy cutoff reveals the maximum available particle energy.`;
