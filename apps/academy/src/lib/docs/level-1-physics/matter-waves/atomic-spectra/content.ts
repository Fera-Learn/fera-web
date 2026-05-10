export const content = String.raw`## Principle

Atomic line spectra come from photons emitted or absorbed between discrete energy levels.

## Notation

<Notation
  items={[
    { symbol: "E_i,E_f", meaning: "initial and final atomic energies", unit: "J" },
    { symbol: "\\Delta E", meaning: "energy difference", unit: "J" },
    { symbol: "f", meaning: "photon frequency", unit: "Hz" },
    { symbol: "\\lambda", meaning: "photon wavelength", unit: "m" },
    { symbol: "h", meaning: "Planck constant", unit: "J s" },
    { symbol: "c", meaning: "speed of light", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Connect energy gaps to photons

An atom emits a photon when it moves from a higher energy level to a lower one.

<PhysicsDerivation
  items={[
    {
      label: "Emission energy",
      tex: "hf=E_i-E_f",
    },
    {
      label: "Photon wavelength",
      tex: "\\lambda=\\frac{c}{f}",
    },
    {
      label: "Energy wavelength",
      tex: "E_i-E_f=\\frac{hc}{\\lambda}",
    },
  ]}
/>

### Derivation 2: Absorb only allowed energies

Absorption occurs when the photon energy matches an available upward transition.

<PhysicsDerivation
  items={[
    {
      label: "Absorption condition",
      tex: "hf=E_f-E_i",
    },
  ]}
/>

### Derivation 3: Use spectra as fingerprints

Different atoms have different level spacings, so their line spectra identify the element.

## Rules

<Equation label="Photon energy" tex="E_\gamma=hf=\frac{hc}{\lambda}" />

<Equation label="Emission" tex="E_\gamma=E_i-E_f" />

<Equation label="Absorption" tex="E_\gamma=E_f-E_i" />

<Equation label="Electronvolt" tex="1\,\mathrm{eV}=1.60\times10^{-19}\,\mathrm J" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A transition releases \\(3.00\\,\\mathrm{eV}\\). Find the photon wavelength using \\(hc=1240\\,\\mathrm{eV\\,nm}\\).",
      answer: "\\[\\lambda=\\frac{hc}{E}=\\frac{1240}{3.00}=413\\,\\mathrm{nm}\\]",
    },
    {
      title: "Example 2",
      question: "An atom absorbs a \\(2.10\\,\\mathrm{eV}\\) photon. What happens to its internal energy?",
      answer: "The atom moves to a higher allowed level, increasing its internal energy by \\(2.10\\,\\mathrm{eV}\\).",
    },
  ]}
/>

## Checks

- Emission: atom loses energy, photon carries the gap.
- Absorption: atom gains energy, photon must match an allowed gap.
- Shorter wavelength means larger photon energy.
- Line spectra imply discrete atomic energies.`;
