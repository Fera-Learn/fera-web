export const content = String.raw`## Principle

Elastic potential energy is stored when a spring or elastic element is displaced from equilibrium.

## Notation

<Notation
  items={[
    { symbol: "U_s", meaning: "elastic potential energy", unit: "J" },
    { symbol: "k", meaning: "spring constant", unit: "N m^{-1}" },
    { symbol: "x", meaning: "extension or compression from equilibrium", unit: "m" },
    { symbol: "F_s", meaning: "spring force", unit: "N" },
  ]}
/>

## Rules

<Equation label="Spring force" tex="F_s=-kx" />

<Equation label="Elastic potential energy" tex="U_s=\frac{1}{2}kx^2" />

<Equation label="Work by spring" tex="W_s=-\Delta U_s" />

<Equation label="Energy exchange" tex="\frac{1}{2}kx_i^2+K_i=\frac{1}{2}kx_f^2+K_f" />

## Method

<PhysicsDerivation
  items={[
    {
      label: "Measure from equilibrium",
      tex: "x=0\\ \\text{at the spring's natural length}",
    },
    {
      label: "Store energy",
      tex: "U_s=\\frac{1}{2}kx^2",
    },
    {
      label: "Convert energy",
      tex: "\\Delta K=-\\Delta U_s",
    },
  ]}
/>

<CartesianPhysicsGraph
  title="Spring force and energy"
  caption="Spring force changes sign with displacement; stored energy is quadratic."
  xRange={{ min: -3, max: 3, step: 1, label: "x" }}
  yRange={{ min: -4, max: 8, step: 2, label: "F_s or U_s" }}
  curves={[
    {
      label: "F_s",
      color: "var(--chart-5)",
      points: [
        { x: -3, y: 3 },
        { x: -2, y: 2 },
        { x: -1, y: 1 },
        { x: 0, y: 0 },
        { x: 1, y: -1 },
        { x: 2, y: -2 },
        { x: 3, y: -3 },
      ],
    },
    {
      label: "U_s",
      color: "var(--chart-3)",
      points: [
        { x: -3, y: 4.5 },
        { x: -2, y: 2 },
        { x: -1, y: 0.5 },
        { x: 0, y: 0 },
        { x: 1, y: 0.5 },
        { x: 2, y: 2 },
        { x: 3, y: 4.5 },
      ],
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A spring with constant \\(k\\) is compressed by \\(x\\). Find the launch speed of a mass \\(m\\) on a frictionless surface.",
      answer: "\\(\\frac{1}{2}kx^2=\\frac{1}{2}mv^2\\), so \\(v=x\\sqrt{\\frac{k}{m}}\\).",
    },
    {
      title: "Example 2",
      question: "A spring is stretched twice as far. What happens to stored energy?",
      answer: "Because \\(U_s=\\frac{1}{2}kx^2\\), doubling \\(x\\) makes the energy four times larger.",
    },
  ]}
/>

## Checks

- Elastic energy is never negative for an ideal spring.
- The sign of \\(x\\) affects force direction, not stored energy sign.
- Spring energy grows quadratically with displacement.
- Hooke's-law spring formulas apply only within the elastic range.`;
