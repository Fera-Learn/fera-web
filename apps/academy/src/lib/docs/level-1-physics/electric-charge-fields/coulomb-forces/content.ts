export const content = String.raw`## Principle

Coulomb's law gives the electric force between point charges as an inverse-square central interaction.

## Notation

<Notation
  items={[
    { symbol: "q_1,q_2", meaning: "interacting point charges", unit: "C" },
    { symbol: "\\vec r_1,\\vec r_2", meaning: "charge position vectors", unit: "m" },
    { symbol: "\\vec r_{12}", meaning: "vector from charge 1 to charge 2", unit: "m" },
    { symbol: "\\hat r_{12}", meaning: "unit vector from charge 1 to charge 2", unit: "1" },
    { symbol: "k", meaning: "Coulomb constant", unit: "N m^{2} C^{-2}" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "C^{2} N^{-1} m^{-2}" },
    { symbol: "\\vec F_{2\\leftarrow1}", meaning: "force on charge 2 by charge 1", unit: "N" },
  ]}
/>

## Method

### Derivation 1: Build the vector separation

The force direction is set by the line joining the two charges. Define the displacement from the source charge to the charge being acted on.

<PhysicsDerivation
  items={[
    {
      label: "Separation vector",
      tex: "\\vec r_{12}=\\vec r_2-\\vec r_1",
    },
    {
      label: "Distance",
      tex: "r=|\\vec r_{12}|",
    },
    {
      label: "Direction",
      tex: "\\hat r_{12}=\\frac{\\vec r_{12}}{r}",
    },
  ]}
/>

### Derivation 2: Attach magnitude and sign

The magnitude weakens as \\(1/r^2\\). The product \\(q_1q_2\\) supplies the sign: like charges repel and opposite charges attract.

<PhysicsDerivation
  items={[
    {
      label: "Magnitude scale",
      tex: "F\\propto\\frac{|q_1q_2|}{r^2}",
    },
    {
      label: "Coulomb constant",
      tex: "k=\\frac{1}{4\\pi\\epsilon_0}",
    },
    {
      label: "Vector force",
      tex: "\\vec F_{2\\leftarrow1}=k\\frac{q_1q_2}{r^2}\\hat r_{12}",
      note: "A negative charge product reverses the direction of \\(\\hat r_{12}\\).",
    },
  ]}
/>

### Derivation 3: Add forces by superposition

Electric forces from multiple source charges are vector forces on the same object, so they add component by component.

<PhysicsDerivation
  items={[
    {
      label: "Forces on charge 0",
      tex: "\\vec F_{\\mathrm{net}}=\\vec F_{0\\leftarrow1}+\\vec F_{0\\leftarrow2}+\\cdots",
    },
    {
      label: "Component form",
      tex: "\\vec F_{\\mathrm{net}}=(\\sum F_x)\\hat\\imath+(\\sum F_y)\\hat\\jmath",
    },
  ]}
/>

## Rules

These are the compact force results from the construction above.

<Equation label="Coulomb constant" tex="k=\frac{1}{4\pi\epsilon_0}=8.99\times10^9\,\mathrm{N\,m^2\,C^{-2}}" />

<Equation label="Force magnitude" tex="F=k\frac{|q_1q_2|}{r^2}" />

<Equation label="Vector force" tex="\vec F_{2\leftarrow1}=k\frac{q_1q_2}{r^2}\hat r_{12}" />

<Equation label="Superposition" tex="\vec F_{\mathrm{net}}=\sum_i \vec F_i" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two charges \\(+3.0\\,\\mathrm{nC}\\) and \\(-5.0\\,\\mathrm{nC}\\) are \\(0.20\\,\\mathrm{m}\\) apart. Find the force magnitude.",
      answer: "\\[F=k\\frac{|q_1q_2|}{r^2}=\\frac{(8.99\\times10^9)(3.0\\times10^{-9})(5.0\\times10^{-9})}{0.20^2}=3.4\\times10^{-6}\\,\\mathrm{N}\\] The force is attractive because the charges have opposite signs.",
    },
    {
      title: "Example 2",
      question: "A positive source charge is at the origin and a positive test charge is on the \\(+x\\)-axis. What is the force direction on the test charge?",
      answer: "The charges repel. The force on the test charge is in the \\(+x\\) direction, away from the source.",
    },
  ]}
/>

## Checks

- Use distance squared, not distance.
- Direction comes from the charge signs and the line joining the charges.
- Forces from several charges are vectors; add components.
- The two charges exert equal-magnitude opposite-direction forces on each other.`;
