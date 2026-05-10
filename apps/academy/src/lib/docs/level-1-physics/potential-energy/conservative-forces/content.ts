export const content = String.raw`## Principle

A conservative force lets work be accounted for as a reversible change in potential energy.

## Notation

<Notation
  items={[
    { symbol: "\\vec F_c", meaning: "conservative force", unit: "N" },
    { symbol: "d\\vec r", meaning: "small displacement along a path", unit: "m" },
    { symbol: "W_c", meaning: "work by conservative forces", unit: "J" },
    { symbol: "W_{nc}", meaning: "work by nonconservative forces", unit: "J" },
    { symbol: "K", meaning: "kinetic energy", unit: "J" },
    { symbol: "U", meaning: "potential energy", unit: "J" },
    { symbol: "E", meaning: "mechanical energy", unit: "J" },
  ]}
/>

## Method

The work-energy principle says total work changes kinetic energy. Split the work into conservative work, which can be stored and returned, and nonconservative work, which changes the mechanical energy of the chosen system.

<PhysicsDerivation
  items={[
    {
      label: "Split the work",
      tex: "\\Delta K=W_c+W_{nc}",
      note: "This is the work-energy principle with conservative and nonconservative work separated.",
    },
    {
      label: "Define potential change",
      tex: "W_c=-\\Delta U",
      note: "When a conservative force does positive work, stored potential energy decreases.",
    },
    {
      label: "Substitute stored energy",
      tex: "\\Delta K+\\Delta U=W_{nc}",
    },
    {
      label: "Define mechanical energy",
      tex: "E=K+U",
    },
    {
      label: "Energy accounting",
      tex: "\\Delta E=W_{nc}",
      note: "Mechanical energy is conserved only when nonconservative work is zero.",
    },
    {
      label: "Conservative-only motion",
      tex: "W_{nc}=0\\Rightarrow K_i+U_i=K_f+U_f",
    },
  ]}
/>

The graph shows two different paths between the same endpoints. For a conservative force, the endpoints set the potential energy change, so both paths have the same conservative work.

<CartesianPhysicsGraph
  title="Path independence"
  caption="Conservative work depends on endpoints, not on the path shape."
  xRange={{ min: 0, max: 6, step: 1, label: "x" }}
  yRange={{ min: 0, max: 4, step: 1, label: "y" }}
  curves={[
    {
      label: "path A",
      points: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 4, y: 3 },
        { x: 5, y: 1 },
      ],
    },
    {
      label: "path B",
      dashed: true,
      color: "var(--chart-3)",
      points: [
        { x: 1, y: 1 },
        { x: 3, y: 0.5 },
        { x: 5, y: 1 },
      ],
    },
  ]}
  points={[
    { x: 1, y: 1, label: "A" },
    { x: 5, y: 1, label: "B" },
  ]}
/>

If path A is followed from A to B and path B is followed back from B to A, the start and finish are the same state. A conservative force therefore does zero net work around the closed loop.

<PhysicsDerivation
  items={[
    {
      label: "Endpoint work",
      tex: "W_{A\\to B}=U_A-U_B",
    },
    {
      label: "Reverse endpoint work",
      tex: "W_{B\\to A}=U_B-U_A",
    },
    {
      label: "Closed path",
      tex: "\\oint \\vec F_c\\cdot d\\vec r=0",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Work-potential" tex="W_c=-\Delta U" />

<Equation label="Mechanical energy" tex="E=K+U" />

<Equation label="Energy accounting" tex="K_i+U_i+W_{nc}=K_f+U_f" />

<Equation label="Conservative only" tex="K_i+U_i=K_f+U_f" />

<Equation label="Closed path" tex="\oint \vec F_c\cdot d\vec r=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A particle moves from A to B with \\(U_A=18\\,\\text{J}\\), \\(U_B=6\\,\\text{J}\\), and no nonconservative work. Find the change in kinetic energy.",
      answer: "\\[\\Delta K+\\Delta U=0\\] \\[\\Delta U=6-18=-12\\,\\text{J}\\] \\[\\Delta K=12\\,\\text{J}\\] The lost potential energy appears as kinetic energy.",
    },
    {
      title: "Example 2",
      question: "A particle returns to its starting point while only a conservative force acts. What is the work by that force over the full loop?",
      answer: "The initial and final potential energies are equal. \\[\\Delta U=0\\] \\[W_c=-\\Delta U=0\\] Conservative work over a closed path is zero.",
    },
  ]}
/>

## Checks

- Conservative work is path independent.
- Positive conservative work lowers potential energy.
- Mechanical energy is conserved only when nonconservative work is zero.
- A closed-loop conservative work result must be zero.`;
