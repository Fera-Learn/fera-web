export const content = String.raw`## Principle

A conservative force points in the direction where potential energy decreases fastest.

## Notation

<Notation
  items={[
    { symbol: "F_x", meaning: "x-component of force", unit: "N" },
    { symbol: "U(x)", meaning: "potential energy as a function of position", unit: "J" },
    { symbol: "\\vec{F}", meaning: "force vector", unit: "N" },
    { symbol: "\\nabla U", meaning: "gradient of potential energy", unit: "J m^{-1}" },
  ]}
/>

## Rules

<Equation label="One dimension" tex="F_x=-\frac{dU}{dx}" />

<Equation label="Three dimensions" tex="\vec{F}=-\nabla U" />

<Equation label="Equilibrium" tex="\frac{dU}{dx}=0" />

<Equation label="Stable equilibrium" tex="\frac{d^2U}{dx^2}>0" />

## Method

<PhysicsDerivation
  items={[
    {
      label: "Differentiate potential",
      tex: "\\frac{dU}{dx}",
    },
    {
      label: "Apply minus sign",
      tex: "F_x=-\\frac{dU}{dx}",
    },
    {
      label: "Classify equilibrium",
      tex: "U''(x)>0\\ \\text{stable},\\quad U''(x)<0\\ \\text{unstable}",
    },
  ]}
/>

<CartesianPhysicsGraph
  title="Force from potential slope"
  caption="The force points downhill on the potential-energy curve."
  xRange={{ min: -3, max: 3, step: 1, label: "x" }}
  yRange={{ min: 0, max: 8, step: 2, label: "U" }}
  curves={[
    {
      label: "U(x)",
      points: [
        { x: -3, y: 7 },
        { x: -2, y: 4 },
        { x: -1, y: 1.5 },
        { x: 0, y: 0.8 },
        { x: 1, y: 1.5 },
        { x: 2, y: 4 },
        { x: 3, y: 7 },
      ],
    },
  ]}
  vectors={[
    {
      label: "F",
      from: { x: 2, y: 4 },
      to: { x: 1, y: 4 },
      color: "var(--chart-5)",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "For \\(U(x)=\\frac{1}{2}kx^2\\), find \\(F_x\\).",
      answer: "\\(F_x=-\\frac{dU}{dx}=-kx\\). This recovers Hooke's law for a spring centered at \\(x=0\\).",
    },
    {
      title: "Example 2",
      question: "For \\(U(x)=ax^2-bx\\), find the equilibrium position.",
      answer: "Set \\(dU/dx=0\\). Since \\(dU/dx=2ax-b\\), equilibrium occurs at \\(x=\\frac{b}{2a}\\).",
    },
  ]}
/>

## Checks

- The force is minus the slope of \\(U(x)\\).
- A positive slope means force points negative.
- Equilibrium occurs where the slope is zero.
- Minima of \\(U\\) are stable equilibria.`;
