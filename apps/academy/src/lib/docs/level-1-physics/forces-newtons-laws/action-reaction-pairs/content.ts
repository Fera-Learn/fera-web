export const content = String.raw`## Principle

Each interaction creates equal and opposite forces on two different objects.

## Notation

<Notation
  items={[
    { symbol: "\\vec{F}_{AB}", meaning: "force on A by B", unit: "N" },
    { symbol: "\\vec{F}_{BA}", meaning: "force on B by A", unit: "N" },
    { symbol: "m_A", meaning: "mass of object A", unit: "kg" },
    { symbol: "m_B", meaning: "mass of object B", unit: "kg" },
    { symbol: "\\vec{a}_A", meaning: "acceleration of A", unit: "m s^{-2}" },
    { symbol: "\\vec{a}_B", meaning: "acceleration of B", unit: "m s^{-2}" },
  ]}
/>

## Method

The third law is about one interaction, but Newton's second law must still be applied to each object separately.

<PhysicsDerivation
  items={[
    {
      label: "Name the pair",
      tex: "\\text{force on A by B}\\leftrightarrow\\text{force on B by A}",
    },
    {
      label: "Apply direction",
      tex: "\\vec{F}_{AB}=-\\vec{F}_{BA}",
    },
    {
      label: "Draw separately",
      tex: "\\vec{F}_{AB}\\in\\text{diagram for A},\\qquad \\vec{F}_{BA}\\in\\text{diagram for B}",
    },
    {
      label: "Find accelerations",
      tex: "\\vec{a}_A=\\frac{\\sum\\vec{F}_A}{m_A},\\qquad \\vec{a}_B=\\frac{\\sum\\vec{F}_B}{m_B}",
    },
  ]}
/>

The graph separates the paired forces by object so they are not mistaken for canceling forces on one diagram.

<CartesianPhysicsGraph
  title="Third-law pair"
  caption="The equal and opposite forces act on different objects, so they do not cancel in either object's force sum."
  xRange={{ min: -5, max: 5, step: 1, label: "F_x / N" }}
  yRange={{ min: -1, max: 2, step: 1, label: "object" }}
  vectors={[
    { from: { x: 0, y: 1 }, to: { x: 4, y: 1 }, label: "F_{AB}" },
    { from: { x: 0, y: 0 }, to: { x: -4, y: 0 }, label: "F_{BA}" },
  ]}
  points={[
    { x: 0, y: 1, label: "A" },
    { x: 0, y: 0, label: "B" },
  ]}
/>

Because the arrows sit on different objects, each object gets its own resultant force and acceleration.

## Rules

These are the compact interaction-pair and object-dynamics statements.

<Equation label="Third law" tex="\vec{F}_{AB}=-\vec{F}_{BA}" />

<Equation label="Equal magnitudes" tex="|\vec{F}_{AB}|=|\vec{F}_{BA}|" />

<Equation label="Object A" tex="\sum\vec{F}_A=m_A\vec{a}_A" />

<Equation label="Object B" tex="\sum\vec{F}_B=m_B\vec{a}_B" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A hand pushes a box right with \\(25\\,\\mathrm{N}\\). State the paired force.",
      answer: "The box pushes the hand left with \\(25\\,\\mathrm{N}\\). The forces are equal in size and act on different objects.",
    },
    {
      title: "Example 2",
      question: "Two carts push apart with force magnitude \\(18\\,\\mathrm{N}\\). Cart A has mass \\(3.0\\,\\mathrm{kg}\\), cart B \\(6.0\\,\\mathrm{kg}\\). Compare acceleration magnitudes.",
      answer: "\\[a_A=\\frac{18}{3.0}=6.0\\,\\mathrm{m\\,s^{-2}}\\] \\[a_B=\\frac{18}{6.0}=3.0\\,\\mathrm{m\\,s^{-2}}\\] The accelerations point in opposite directions.",
    },
  ]}
/>

## Checks

- The two forces act on different objects.
- The forces are the same interaction type.
- Equal force magnitudes do not imply equal accelerations.
- Third-law pairs never cancel in one object's force sum.`;
