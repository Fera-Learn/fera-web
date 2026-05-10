export const content = String.raw`## Principle

Electric potential energy is stored energy associated with the positions of charges in a conservative electric interaction.

## Notation

<Notation
  items={[
    { symbol: "U", meaning: "electric potential energy", unit: "J" },
    { symbol: "\\Delta U", meaning: "change in electric potential energy", unit: "J" },
    { symbol: "W_{\\mathrm{elec}}", meaning: "work done by the electric force", unit: "J" },
    { symbol: "q_1,q_2", meaning: "point charges", unit: "C" },
    { symbol: "r", meaning: "separation between point charges", unit: "m" },
    { symbol: "k", meaning: "Coulomb constant", unit: "N m^{2} C^{-2}" },
  ]}
/>

## Method

### Derivation 1: Link field work to stored energy

The electric force from fixed charges is conservative. When that force does positive work, the stored electric potential energy decreases.

<PhysicsDerivation
  items={[
    {
      label: "Conservative-force rule",
      tex: "\\Delta U=-W_{\\mathrm{elec}}",
    },
    {
      label: "Energy conservation",
      tex: "\\Delta K+\\Delta U=0",
      note: "This form applies when the electric force is the only force doing work.",
    },
    {
      label: "External quasistatic work",
      tex: "W_{\\mathrm{ext}}=\\Delta U",
      note: "A slow external agent supplies the energy change without changing kinetic energy.",
    },
  ]}
/>

### Derivation 2: Choose the zero of energy

For two point charges, take \\(U=0\\) when the charges are infinitely far apart. Bringing the charges to separation \\(r\\) gives the standard point-charge potential energy.

<PhysicsDerivation
  items={[
    {
      label: "Zero reference",
      tex: "U(\\infty)=0",
    },
    {
      label: "Point-charge energy",
      tex: "U(r)=k\\frac{q_1q_2}{r}",
    },
    {
      label: "Like charges",
      tex: "q_1q_2>0\\Rightarrow U>0",
      note: "Work must be supplied to assemble like charges from infinity.",
    },
    {
      label: "Opposite charges",
      tex: "q_1q_2<0\\Rightarrow U<0",
      note: "The electric force releases energy as opposite charges come together.",
    },
  ]}
/>

## Rules

These are the compact energy relations.

<Equation label="Field work" tex="\Delta U=-W_{\mathrm{elec}}" />

<Equation label="External work" tex="W_{\mathrm{ext}}=\Delta U\quad\text{for quasistatic assembly}" />

<Equation label="Point-charge energy" tex="U=k\frac{q_1q_2}{r}\quad(U(\infty)=0)" />

<Equation label="Electric-only energy" tex="K+U=\mathrm{constant}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two charges \\(+2.0\\,\\mathrm{nC}\\) and \\(+5.0\\,\\mathrm{nC}\\) are \\(0.30\\,\\mathrm{m}\\) apart. Find their electric potential energy using \\(U(\\infty)=0\\).",
      answer: "\\[U=k\\frac{q_1q_2}{r}=\\frac{(8.99\\times10^9)(2.0\\times10^{-9})(5.0\\times10^{-9})}{0.30}=3.0\\times10^{-7}\\,\\mathrm{J}\\] The energy is positive because the charges are like-signed.",
    },
    {
      title: "Example 2",
      question: "The electric force does \\(4.0\\,\\mu\\mathrm{J}\\) of work on a moving charge. Find \\(\\Delta U\\).",
      answer: "\\[\\Delta U=-W_{\\mathrm{elec}}=-4.0\\,\\mu\\mathrm{J}\\]",
    },
  ]}
/>

## Checks

- Electric potential energy is a property of a charge arrangement, not of one isolated charge alone.
- The sign of \\(U=kq_1q_2/r\\) comes from the charge product.
- Positive electric work means potential energy decreases.
- Always state the zero reference when quoting a potential energy.`;
