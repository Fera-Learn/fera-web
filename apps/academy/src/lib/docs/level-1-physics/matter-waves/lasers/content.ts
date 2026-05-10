export const content = String.raw`## Principle

A laser amplifies light by stimulated emission from an inverted population of atoms or molecules.

## Notation

<Notation
  items={[
    { symbol: "E_2,E_1", meaning: "upper and lower laser levels", unit: "J" },
    { symbol: "f", meaning: "laser frequency", unit: "Hz" },
    { symbol: "\\lambda", meaning: "laser wavelength", unit: "m" },
    { symbol: "N_2,N_1", meaning: "populations of upper and lower levels", unit: "" },
    { symbol: "h", meaning: "Planck constant", unit: "J s" },
    { symbol: "c", meaning: "speed of light", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Match the transition energy

Stimulated emission occurs when an incoming photon triggers an excited atom to emit a matching photon.

<PhysicsDerivation
  items={[
    {
      label: "Transition energy",
      tex: "E_2-E_1=hf",
    },
    {
      label: "Laser wavelength",
      tex: "\\lambda=\\frac{c}{f}=\\frac{hc}{E_2-E_1}",
    },
  ]}
/>

### Derivation 2: Invert the population

Net amplification requires more atoms in the upper laser level than the lower level.

<PhysicsDerivation
  items={[
    {
      label: "Population inversion",
      tex: "N_2>N_1",
    },
  ]}
/>

### Derivation 3: Use feedback

A cavity reflects light back through the gain medium. Allowed cavity modes are reinforced, and one output mirror lets out the beam.

## Rules

<Equation label="Photon energy" tex="E_\gamma=hf" />

<Equation label="Laser wavelength" tex="\lambda=\frac{hc}{E_2-E_1}" />

<Equation label="Inversion condition" tex="N_2>N_1" />

<Equation label="Cavity modes" tex="2L=m\lambda" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A laser transition has energy gap \\(1.96\\,\\mathrm{eV}\\). Find the wavelength.",
      answer: "\\[\\lambda=\\frac{1240\\,\\mathrm{eV\\,nm}}{1.96\\,\\mathrm{eV}}=633\\,\\mathrm{nm}\\]",
    },
    {
      title: "Example 2",
      question: "Why does a two-level system not make an efficient laser?",
      answer: "Pumping also drives absorption from the lower level. It is difficult to keep \\(N_2>N_1\\) in a true two-level system, so sustained gain is not achieved.",
    },
  ]}
/>

## Checks

- Stimulated photons match frequency, phase, direction, and polarization.
- Population inversion is a nonequilibrium condition.
- A cavity narrows the allowed directions and frequencies.
- Laser light is coherent, but not automatically perfectly monochromatic.`;
