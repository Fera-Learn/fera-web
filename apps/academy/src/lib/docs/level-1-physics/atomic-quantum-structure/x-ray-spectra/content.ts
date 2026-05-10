export const content = String.raw`## Principle

Atomic x-ray spectra come from transitions involving inner electron shells. If an inner-shell vacancy is created, an outer electron can drop to fill it and emit a photon with energy equal to the level difference.

Because inner-shell energies depend strongly on nuclear charge, characteristic x-ray lines identify elements.

## Notation

<Notation
  items={[
    { symbol: "E_i,E_f", meaning: "initial and final atomic energy levels", unit: "eV" },
    { symbol: "E_\\gamma", meaning: "emitted photon energy", unit: "eV" },
    { symbol: "\\lambda", meaning: "photon wavelength", unit: "m, nm" },
    { symbol: "Z", meaning: "atomic number", unit: "1" },
    { symbol: "K_\\alpha", meaning: "transition from L shell to K shell", unit: "1" },
    { symbol: "K_\\beta", meaning: "transition from M shell to K shell", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Use energy differences

The photon energy equals the loss of atomic energy in the transition.

<PhysicsDerivation
  items={[
    {
      label: "Photon energy",
      tex: "E_\\gamma=E_i-E_f",
    },
    {
      label: "Wavelength",
      tex: "\\lambda=\\frac{hc}{E_\\gamma}",
    },
  ]}
/>

### Derivation 2: Name common lines

The shell that receives the electron names the series. The shell the electron comes from identifies the line.

<PhysicsDerivation
  items={[
    {
      label: "K alpha",
      tex: "L\\to K",
    },
    {
      label: "K beta",
      tex: "M\\to K",
    },
  ]}
/>

### Derivation 3: Estimate nuclear-charge scaling

For inner shells, shielding can be approximated with an effective nuclear charge.

<PhysicsDerivation
  items={[
    {
      label: "Moseley scaling",
      tex: "f\\propto (Z-b)^2",
    },
    {
      label: "Energy scaling",
      tex: "E_\\gamma=hf",
    },
  ]}
/>

## Rules

<Equation label="Characteristic photon" tex="E_\gamma=E_i-E_f" />

<Equation label="Photon wavelength" tex="\lambda=\frac{hc}{E_\gamma}" />

<Equation label="Moseley scaling" tex="f\propto(Z-b)^2" />

<Equation label="K alpha transition" tex="K_\alpha:L\to K" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A characteristic x-ray has energy \\(8.0\\,\\mathrm{keV}\\). Find its wavelength using \\(hc=1240\\,\\mathrm{eV\\,nm}\\).",
      answer: "\\[\\lambda=\\frac{1240}{8000}=0.155\\,\\mathrm{nm}\\]",
    },
    {
      title: "Example 2",
      question: "Which line has larger energy, \\(K_\\alpha\\) or \\(K_\\beta\\)?",
      answer: "\\(K_\\beta\\) usually has larger energy because the electron falls from a higher shell to the K shell.",
    },
  ]}
/>

## Checks

- Characteristic x-rays depend on target element.
- The continuous x-ray spectrum comes from electron deceleration, not shell transitions.
- K-series lines end in the K shell.
- Higher photon energy means shorter wavelength.`;
