export const content = String.raw`## Principle

Binding energy is the energy equivalent of the mass missing from separated nucleons.

## Notation

<Notation
  items={[
    { symbol: "\\Delta m", meaning: "mass defect", unit: "kg, u" },
    { symbol: "B", meaning: "nuclear binding energy", unit: "J, MeV" },
    { symbol: "B/A", meaning: "binding energy per nucleon", unit: "MeV" },
    { symbol: "m_{\\mathrm p}", meaning: "proton mass", unit: "kg, u" },
    { symbol: "m_{\\mathrm n}", meaning: "neutron mass", unit: "kg, u" },
    { symbol: "M", meaning: "nuclear or atomic mass", unit: "kg, u" },
  ]}
/>

## Method

### Derivation 1: Mass defect

A bound nucleus has less mass than its separated nucleons.

<PhysicsDerivation
  items={[
    {
      label: "Separated nucleons",
      tex: "m_{\\mathrm{sep}}=Zm_{\\mathrm p}+Nm_{\\mathrm n}",
    },
    {
      label: "Mass defect",
      tex: "\\Delta m=m_{\\mathrm{sep}}-M_{\\mathrm{nucleus}}",
    },
  ]}
/>

### Derivation 2: Energy equivalent

Mass difference converts to binding energy by mass-energy equivalence.

<PhysicsDerivation
  items={[
    {
      label: "Binding energy",
      tex: "B=\\Delta mc^2",
    },
    {
      label: "Per nucleon",
      tex: "\\frac{B}{A}=\\frac{\\Delta mc^2}{A}",
    },
  ]}
/>

### Derivation 3: Atomic masses

Using neutral atomic masses cancels electron masses when the electron count balances.

<PhysicsDerivation
  items={[
    {
      label: "Hydrogen replacement",
      tex: "m_{\\mathrm p}+m_e\\approx m_{\\mathrm H}",
    },
    {
      label: "Atomic-mass form",
      tex: "\\Delta m=Zm_{\\mathrm H}+Nm_{\\mathrm n}-M_{\\mathrm{atom}}",
    },
  ]}
/>

## Rules

<Equation label="Mass defect" tex="\Delta m=Zm_{\mathrm p}+Nm_{\mathrm n}-M_{\mathrm{nucleus}}" />

<Equation label="Binding energy" tex="B=\Delta mc^2" />

<Equation label="Atomic-mass form" tex="\Delta m=Zm_{\mathrm H}+Nm_{\mathrm n}-M_{\mathrm{atom}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A nucleus has \\(\\Delta m=0.030\\,\\mathrm u\\). Find \\(B\\) in MeV.",
      answer: "Use \\(1\\,\\mathrm u\\,c^2=931.5\\,\\mathrm{MeV}\\): \\(B=0.030(931.5)=28\\,\\mathrm{MeV}\\).",
    },
    {
      title: "Example 2",
      question: "Why compare \\(B/A\\), not just \\(B\\), across nuclei?",
      answer: "\\(B\\) grows with size; \\(B/A\\) compares average binding per nucleon and therefore stability scale.",
    },
  ]}
/>

## Checks

- A positive mass defect gives a positive binding energy.
- Use nuclear masses or atomic masses consistently.
- Larger \\(B/A\\) means the nucleons are more tightly bound on average.
- Energy released in reactions comes from increased total binding energy.`;
