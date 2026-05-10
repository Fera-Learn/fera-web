export const content = String.raw`## Principle

Displacement current lets changing electric flux produce magnetic fields even where no charge crosses a gap.

## Notation

<Notation
  items={[
    { symbol: "I_d", meaning: "displacement current", unit: "A" },
    { symbol: "\\Phi_E", meaning: "electric flux", unit: "V m" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "F m^{-1}" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "I_{\\mathrm c}", meaning: "conduction current", unit: "A" },
    { symbol: "\\mu_0", meaning: "permeability of free space", unit: "N A^{-2}" },
  ]}
/>

## Method

### Derivation 1: Charging capacitor gap

Between capacitor plates, no conduction current crosses the gap, but the electric field and electric flux change.

<PhysicsDerivation
  items={[
    {
      label: "Electric flux",
      tex: "\\Phi_E=\\int\\vec E\\cdot d\\vec A",
    },
    {
      label: "Displacement current",
      tex: "I_d=\\epsilon_0\\frac{d\\Phi_E}{dt}",
    },
  ]}
/>

### Derivation 2: Consistency with charging current

For parallel plates with field \\(E=Q/(\\epsilon_0A)\\), the displacement current equals the wire current during charging.

<PhysicsDerivation
  items={[
    {
      label: "Flux between plates",
      tex: "\\Phi_E=EA=\\frac{Q}{\\epsilon_0}",
    },
    {
      label: "Displacement current",
      tex: "I_d=\\epsilon_0\\frac{d}{dt}\\left(\\frac{Q}{\\epsilon_0}\\right)",
    },
    {
      label: "Matches conduction",
      tex: "I_d=\\frac{dQ}{dt}=I_c",
    },
  ]}
/>

### Derivation 3: Ampere-Maxwell law

Maxwell's correction adds displacement current to Ampere's law.

<PhysicsDerivation
  items={[
    {
      label: "Ampere-Maxwell law",
      tex: "\\oint\\vec B\\cdot d\\vec\\ell=\\mu_0(I_c+I_d)",
    },
    {
      label: "Flux form",
      tex: "\\oint\\vec B\\cdot d\\vec\\ell=\\mu_0I_c+\\mu_0\\epsilon_0\\frac{d\\Phi_E}{dt}",
    },
  ]}
/>

## Rules

Use displacement current when electric flux changes.

<Equation label="Electric flux" tex="\Phi_E=\int\vec E\cdot d\vec A" />

<Equation label="Displacement current" tex="I_d=\epsilon_0\frac{d\Phi_E}{dt}" />

<Equation label="Ampere-Maxwell" tex="\oint\vec B\cdot d\vec\ell=\mu_0I_c+\mu_0\epsilon_0\frac{d\Phi_E}{dt}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A capacitor has electric flux increasing at \\(5.0\\times10^{10}\\,\\mathrm{V\\,m\\,s^{-1}}\\). Find \\(I_d\\).",
      answer: "\\[I_d=\\epsilon_0\\frac{d\\Phi_E}{dt}=(8.85\\times10^{-12})(5.0\\times10^{10})=0.443\\,\\mathrm{A}\\]",
    },
    {
      title: "Example 2",
      question: "Why is displacement current needed for a charging capacitor?",
      answer: "It gives the same magnetic circulation whether the Ampere surface cuts the wire or spans the capacitor gap. Without it, Ampere's law would depend on the chosen surface.",
    },
  ]}
/>

## Checks

- Displacement current is not charge crossing vacuum.
- It is caused by changing electric flux.
- It produces magnetic fields in Ampere-Maxwell law.
- For an ideal charging parallel-plate capacitor, \\(I_d=I_c\\).`;
