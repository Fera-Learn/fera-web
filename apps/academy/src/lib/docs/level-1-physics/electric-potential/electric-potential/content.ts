export const content = String.raw`## Principle

Electric potential is electric potential energy per unit charge, so it describes the source arrangement without choosing a particular test charge.

## Notation

<Notation
  items={[
    { symbol: "V", meaning: "electric potential", unit: "V" },
    { symbol: "\\Delta V", meaning: "potential difference", unit: "V" },
    { symbol: "U", meaning: "electric potential energy", unit: "J" },
    { symbol: "q", meaning: "charge placed at the point", unit: "C" },
    { symbol: "W_{\\mathrm{elec}}", meaning: "work done by the electric force", unit: "J" },
    { symbol: "Q", meaning: "source point charge", unit: "C" },
    { symbol: "r", meaning: "distance from source charge", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Divide energy by test charge

Potential is the energy change per unit charge for a small positive test charge. It is a scalar field, not a force vector.

<PhysicsDerivation
  items={[
    {
      label: "Energy definition",
      tex: "V=\\frac{U}{q}",
    },
    {
      label: "Potential difference",
      tex: "\\Delta V=\\frac{\\Delta U}{q}",
    },
    {
      label: "Energy from potential",
      tex: "\\Delta U=q\\Delta V",
    },
  ]}
/>

### Derivation 2: Connect potential difference to work

Use \\(\\Delta U=-W_\{\\mathrm\{elec\}}\\). The sign of the charge decides whether a particle gains or loses potential energy for a given \\(\\Delta V\\).

<PhysicsDerivation
  items={[
    {
      label: "Start with energy-work",
      tex: "\\Delta U=-W_{\\mathrm{elec}}",
    },
    {
      label: "Substitute potential",
      tex: "q\\Delta V=-W_{\\mathrm{elec}}",
    },
    {
      label: "Electric work",
      tex: "W_{\\mathrm{elec}}=-q\\Delta V",
    },
  ]}
/>

### Derivation 3: Potential of a point charge

Divide the two-charge potential energy by the test charge.

<PhysicsDerivation
  items={[
    {
      label: "Pair energy",
      tex: "U=k\\frac{Qq}{r}",
    },
    {
      label: "Divide by test charge",
      tex: "V=\\frac{U}{q}",
    },
    {
      label: "Point-charge potential",
      tex: "V=k\\frac{Q}{r}",
    },
  ]}
/>

## Rules

These are the compact potential relations.

<Equation label="Potential" tex="V=\frac{U}{q}" />

<Equation label="Potential difference" tex="\Delta U=q\Delta V" />

<Equation label="Electric work" tex="W_{\mathrm{elec}}=-q\Delta V" />

<Equation label="Point charge" tex="V=k\frac{Q}{r}\quad(V(\infty)=0)" />

<Equation label="Volt" tex="1\,\mathrm{V}=1\,\mathrm{J\,C^{-1}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(+3.0\\,\\mathrm{nC}\\) charge moves through a potential difference of \\(+20\\,\\mathrm{V}\\). Find \\(\\Delta U\\).",
      answer: "\\[\\Delta U=q\\Delta V=(3.0\\times10^{-9})(20)=6.0\\times10^{-8}\\,\\mathrm{J}\\]",
    },
    {
      title: "Example 2",
      question: "Find the potential \\(0.40\\,\\mathrm{m}\\) from a \\(+8.0\\,\\mathrm{nC}\\) point charge.",
      answer: "\\[V=k\\frac{Q}{r}=\\frac{(8.99\\times10^9)(8.0\\times10^{-9})}{0.40}=1.8\\times10^2\\,\\mathrm{V}\\]",
    },
  ]}
/>

## Checks

- Potential is scalar; electric field is vector.
- A positive charge loses potential energy when it moves to lower potential.
- A negative charge gains potential energy when it moves to lower potential.
- Potential differences matter physically; absolute potential needs a chosen reference.`;
