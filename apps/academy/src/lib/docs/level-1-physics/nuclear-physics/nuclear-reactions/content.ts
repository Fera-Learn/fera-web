export const content = String.raw`## Principle

Nuclear reactions conserve charge, nucleon number, energy, momentum, and relevant quantum numbers.

## Notation

<Notation
  items={[
    { symbol: "Q", meaning: "reaction energy release", unit: "J, MeV" },
    { symbol: "m_i", meaning: "initial total rest mass", unit: "kg, u" },
    { symbol: "m_f", meaning: "final total rest mass", unit: "kg, u" },
    { symbol: "K", meaning: "kinetic energy", unit: "J, MeV" },
    { symbol: "A", meaning: "total nucleon number", unit: "1" },
    { symbol: "Z", meaning: "total proton number", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Conservation checks

Balance nucleon number and charge before using energy.

<PhysicsDerivation
  items={[
    {
      label: "Nucleon conservation",
      tex: "\\sum A_i=\\sum A_f",
    },
    {
      label: "Charge conservation",
      tex: "\\sum Z_i=\\sum Z_f",
    },
  ]}
/>

### Derivation 2: Q value

Mass difference becomes kinetic energy, radiation, or excitation energy.

<PhysicsDerivation
  items={[
    {
      label: "Mass-energy balance",
      tex: "Q=(m_i-m_f)c^2",
    },
    {
      label: "Kinetic-energy form",
      tex: "Q=K_f-K_i",
    },
  ]}
/>

### Derivation 3: Threshold idea

If \\(Q<0\\), incoming kinetic energy must supply the missing rest energy and momentum constraint.

<PhysicsDerivation
  items={[
    {
      label: "Endothermic reaction",
      tex: "Q<0",
    },
    {
      label: "Threshold condition",
      tex: "K_{\\mathrm{in}}>|Q|\\quad\\text{in the lab frame}",
    },
  ]}
/>

## Rules

<Equation label="A conservation" tex="\sum A_i=\sum A_f" />

<Equation label="Z conservation" tex="\sum Z_i=\sum Z_f" />

<Equation label="Q value" tex="Q=(m_i-m_f)c^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A reaction has \\(m_i-m_f=0.0040\\,\\mathrm u\\). Find \\(Q\\).",
      answer: "\\(Q=0.0040(931.5)=3.7\\,\\mathrm{MeV}\\).",
    },
    {
      title: "Example 2",
      question: "What does \\(Q\<0\\) mean physically?",
      answer: "The final rest mass is larger, so the reaction needs supplied kinetic energy.",
    },
  ]}
/>

## Checks

- Balance \\(A\\) and \\(Z\\) before calculating \\(Q\\).
- Positive \\(Q\\) means rest mass decreased.
- Momentum conservation affects kinetic-energy sharing.
- Atomic masses can be used when electron counts balance.`;
