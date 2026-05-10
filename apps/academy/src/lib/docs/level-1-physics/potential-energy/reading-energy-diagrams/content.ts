export const content = String.raw`## Principle

An energy diagram compares total mechanical energy with potential energy to show where motion is possible.

## Notation

<Notation
  items={[
    { symbol: "E", meaning: "total mechanical energy", unit: "J" },
    { symbol: "U(x)", meaning: "potential energy curve", unit: "J" },
    { symbol: "K", meaning: "kinetic energy", unit: "J" },
    { symbol: "x_t", meaning: "turning point", unit: "m" },
  ]}
/>

## Rules

<Equation label="Kinetic energy from diagram" tex="K=E-U(x)" />

<Equation label="Allowed region" tex="E\ge U(x)" />

<Equation label="Turning point" tex="E=U(x)" />

<Equation label="Speed" tex="v=\sqrt{\frac{2(E-U)}{m}}" />

## Method

<PhysicsDerivation
  items={[
    {
      label: "Compare levels",
      tex: "K=E-U(x)",
    },
    {
      label: "Find allowed x",
      tex: "E\\ge U(x)",
    },
    {
      label: "Find turning points",
      tex: "E=U(x)",
    },
  ]}
/>

<CartesianPhysicsGraph
  title="Allowed motion"
  caption="The particle can move where the total-energy line is above the potential curve."
  xRange={{ min: -4, max: 4, step: 2, label: "x" }}
  yRange={{ min: 0, max: 10, step: 2, label: "energy" }}
  curves={[
    {
      label: "U(x)",
      points: [
        { x: -4, y: 8 },
        { x: -3, y: 4 },
        { x: -2, y: 2 },
        { x: -1, y: 3 },
        { x: 0, y: 6 },
        { x: 1, y: 3 },
        { x: 2, y: 2 },
        { x: 3, y: 4 },
        { x: 4, y: 8 },
      ],
    },
    {
      label: "E",
      color: "var(--chart-3)",
      dashed: true,
      points: [
        { x: -4, y: 5 },
        { x: 4, y: 5 },
      ],
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "At a point where \\(E=20\\,\\text{J}\\) and \\(U=12\\,\\text{J}\\), find \\(K\\).",
      answer: "\\(K=E-U=20-12=8\\,\\text{J}\\).",
    },
    {
      title: "Example 2",
      question: "A particle reaches a point where \\(E=U\\). What happens there?",
      answer: "\\(K=0\\), so the speed is zero. If the force pushes it back into the allowed region, this point is a turning point.",
    },
  ]}
/>

## Checks

- Motion is allowed only where \\(E\ge U\\).
- Turning points occur where \\(K=0\\).
- Potential minima are stable equilibria.
- The vertical gap \\(E-U\\) is kinetic energy.`;
