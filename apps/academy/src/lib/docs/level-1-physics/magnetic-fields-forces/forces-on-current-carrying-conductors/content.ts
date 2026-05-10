export const content = String.raw`## Principle

A current-carrying conductor feels magnetic force because its moving charges feel magnetic force.

## Notation

<Notation
  items={[
    { symbol: "\\vec F", meaning: "magnetic force on a wire segment", unit: "N" },
    { symbol: "I", meaning: "conventional current", unit: "A" },
    { symbol: "\\vec L", meaning: "length vector in current direction", unit: "m" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "\\theta", meaning: "angle between current and field", unit: "rad" },
  ]}
/>

## Method

Add the magnetic forces on the drifting charges in a wire segment. The result is a force on the conductor.

<PhysicsDerivation
  items={[
    {
      label: "Wire force law",
      tex: "\\vec F=I\\vec L\\times\\vec B",
    },
    {
      label: "Magnitude",
      tex: "F=ILB\\sin\\theta",
    },
    {
      label: "Perpendicular case",
      tex: "F=ILB",
    },
  ]}
/>

The length vector points in the direction of conventional current. The force direction follows the right-hand rule for \\(\vec L\times\vec B\\).

## Rules

<Equation label="Wire force" tex="\vec F=I\vec L\times\vec B" />

<Equation label="Wire force magnitude" tex="F=ILB\sin\theta" />

<Equation label="Force per length" tex="\frac{F}{L}=IB\sin\theta" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(0.40\\,\\mathrm{m}\\) wire carries \\(5.0\\,\\mathrm{A}\\) perpendicular to \\(0.20\\,\\mathrm{T}\\). Find the force.",
      answer: "\\[F=ILB=(5.0)(0.40)(0.20)=0.40\\,\\mathrm{N}\\]",
    },
    {
      title: "Example 2",
      question: "The same wire is parallel to the field. Find the force.",
      answer: "Here \\(\\theta=0\\), so \\(F=ILB\\sin0=0\\).",
    },
  ]}
/>

## Checks

- Use conventional current direction for \\(\vec L\\).
- The force is zero when current is parallel to the field.
- The force direction is perpendicular to both the current direction and the magnetic field.`;
