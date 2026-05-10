export const content = String.raw`## Principle

Magnetic field lines show field direction by tangent and field strength by density.

## Notation

<Notation
  items={[
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "N", meaning: "north pole label", unit: "" },
    { symbol: "S", meaning: "south pole label", unit: "" },
    { symbol: "\\Delta A", meaning: "small area pierced by field lines", unit: "m^{2}" },
  ]}
/>

## Method

Field lines are a representation, not physical strings. They encode direction and relative magnitude.

<PhysicsDerivation
  items={[
    {
      label: "Direction",
      tex: "\\text{line tangent}\\parallel\\vec B",
    },
    {
      label: "Relative strength",
      tex: "\\text{larger line density}\\rightarrow\\text{larger }B",
    },
    {
      label: "Closed loops",
      tex: "\\text{magnetic field lines form closed curves}",
    },
  ]}
/>

Outside a bar magnet, field lines leave the north pole and enter the south pole. Inside the magnet, they continue from south to north to close the loops.

## Rules

<Equation label="Tangent rule" tex="\vec B\parallel\text{field-line tangent}" />

<Equation label="Flux idea" tex="\Phi_B\sim B\Delta A" />

<Equation label="Closed-line rule" tex="\nabla\cdot\vec B=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Where is a bar magnet's external field strongest in a field-line diagram?",
      answer: "Near the poles, where the field lines are most densely packed.",
    },
    {
      title: "Example 2",
      question: "Can two magnetic field lines cross?",
      answer: "No. A crossing would assign two directions to \\(\\vec B\\) at one point.",
    },
  ]}
/>

## Checks

- Field lines never cross.
- Magnetic field lines form loops, unlike electrostatic field lines from isolated charges.
- Dense lines indicate large field magnitude, not larger particle speed.`;
