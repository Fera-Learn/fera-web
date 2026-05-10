export const content = String.raw`## Principle

Modern particle physics and cosmology have successful models, but observations still point beyond them: dark matter, dark energy, neutrino masses, matter-antimatter asymmetry, and quantum gravity.

## Notation

<Notation
  items={[
    { symbol: "\\Omega_m", meaning: "matter density fraction", unit: "1" },
    { symbol: "\\Omega_\\Lambda", meaning: "dark-energy density fraction", unit: "1" },
    { symbol: "\\nu", meaning: "neutrino", unit: "" },
    { symbol: "m_\\nu", meaning: "neutrino mass", unit: "eV/c^{2}" },
    { symbol: "G", meaning: "gravitational constant", unit: "N m^{2} kg^{-2}" },
    { symbol: "H_0", meaning: "Hubble constant", unit: "s^{-1}, km s^{-1} Mpc^{-1}" },
  ]}
/>

## Method

### Derivation 1: Dark matter is inferred gravitationally

If visible matter cannot supply the gravitational field needed for observed motion, additional non-luminous mass is inferred.

<PhysicsDerivation
  items={[
    {
      label: "Circular motion",
      tex: "\\frac{v^2}{r}=\\frac{GM(r)}{r^2}",
    },
    {
      label: "Enclosed mass",
      tex: "M(r)=\\frac{v^2r}{G}",
    },
  ]}
/>

### Derivation 2: Dark energy is inferred from expansion

Accelerated expansion requires an energy component with different gravitational behaviour from matter.

<PhysicsDerivation
  items={[
    {
      label: "Matter plus dark energy",
      tex: "\\Omega_m+\\Omega_\\Lambda\\approx1",
    },
    {
      label: "Expansion scale",
      tex: "v=H_0d",
    },
  ]}
/>

### Derivation 3: Neutrino oscillations imply mass

Changing neutrino flavour during propagation means neutrino flavour states are not fixed mass states.

<PhysicsDerivation
  items={[
    {
      label: "Oscillation evidence",
      tex: "\\nu_e\\leftrightarrow\\nu_\\mu\\leftrightarrow\\nu_\\tau",
    },
    {
      label: "Mass implication",
      tex: "m_\\nu\\ne0",
    },
  ]}
/>

## Rules

<Equation label="Enclosed mass estimate" tex="M(r)=\frac{v^2r}{G}" />

<Equation label="Hubble law" tex="v=H_0d" />

<Equation label="Neutrino mass implication" tex="m_\nu\ne0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why does a flat galaxy rotation curve suggest unseen matter?",
      answer: "If \\(v\\) remains large far from the centre, \\(M(r)=v^2r/G\\) keeps increasing beyond the visible matter.",
    },
    {
      title: "Example 2",
      question: "Why is quantum gravity an open question?",
      answer: "The Standard Model is quantum, while general relativity describes gravity classically at large scales. A single tested quantum theory of gravity is not yet established.",
    },
  ]}
/>

## Checks

- Open questions should be tied to observations.
- Dark matter is not just ordinary dim matter in the current model.
- Dark energy is inferred from cosmic expansion data.
- Neutrino oscillations are evidence beyond the simplest original Standard Model.`;
