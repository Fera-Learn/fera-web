export const content = String.raw`## Principle

X-rays are produced when fast electrons strike a target. Sudden deceleration produces a continuous bremsstrahlung spectrum, while inner-shell transitions produce characteristic x-ray lines.

The shortest wavelength occurs when one electron gives all of its kinetic energy to one photon.

## Notation

<Notation
  items={[
    { symbol: "V", meaning: "accelerating potential", unit: "V" },
    { symbol: "eV", meaning: "electron kinetic energy after acceleration", unit: "J, eV" },
    { symbol: "E_\\gamma", meaning: "x-ray photon energy", unit: "J, eV" },
    { symbol: "\\lambda_{\\min}", meaning: "minimum x-ray wavelength", unit: "m" },
    { symbol: "\\Delta E", meaning: "atomic transition energy", unit: "J, eV" },
    { symbol: "f", meaning: "photon frequency", unit: "s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Accelerate the electron

An electron accelerated through potential difference \\(V\\) gains kinetic energy \\(eV\\).

<PhysicsDerivation
  items={[
    {
      label: "Electron energy",
      tex: "K=eV",
    },
    {
      label: "Maximum photon energy",
      tex: "E_{\\gamma,\\max}=eV",
    },
  ]}
/>

### Derivation 2: Minimum wavelength cutoff

The highest-energy photon has the shortest wavelength.

<PhysicsDerivation
  items={[
    {
      label: "Photon energy",
      tex: "E_\\gamma=\\frac{hc}{\\lambda}",
    },
    {
      label: "Cutoff wavelength",
      tex: "\\lambda_{\\min}=\\frac{hc}{eV}",
    },
  ]}
/>

### Derivation 3: Characteristic lines

If a target atom has an inner-shell vacancy, an outer electron can drop down and emit a photon with energy equal to the level difference.

<PhysicsDerivation
  items={[
    {
      label: "Characteristic photon",
      tex: "hf=\\Delta E",
    },
    {
      label: "Characteristic wavelength",
      tex: "\\lambda=\\frac{hc}{\\Delta E}",
    },
  ]}
/>

## Rules

<Equation label="Electron energy" tex="K=eV" />

<Equation label="Cutoff wavelength" tex="\lambda_{\min}=\frac{hc}{eV}" />

<Equation label="Characteristic photon" tex="hf=\Delta E" />

<Equation label="Photon wavelength" tex="\lambda=\frac{hc}{E_\gamma}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Electrons are accelerated through \\(25.0\\,\\mathrm{kV}\\). Find the maximum x-ray photon energy.",
      answer: "The maximum photon energy is \\[E_{\\gamma,\\max}=25.0\\,\\mathrm{keV}\\]",
    },
    {
      title: "Example 2",
      question: "Find the minimum wavelength using \\(hc=1240\\,\\mathrm{eV\\,nm}\\).",
      answer: "\\[\\lambda_{\\min}=\\frac{1240}{25.0\\times10^3}=0.0496\\,\\mathrm{nm}\\]",
    },
  ]}
/>

## Checks

- The cutoff wavelength depends on accelerating voltage, not target material.
- Characteristic line energies depend on target material.
- A continuous spectrum comes from many possible electron energy losses.
- A photon cannot carry more energy than the incident electron has.`;
