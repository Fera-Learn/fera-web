export const content = String.raw`## Principle

A current loop in a magnetic field experiences torque that aligns its magnetic moment.

## Notation

<Notation
  items={[
    { symbol: "\\vec\\mu", meaning: "magnetic dipole moment of a loop", unit: "A m^{2}" },
    { symbol: "N", meaning: "number of turns", unit: "" },
    { symbol: "I", meaning: "loop current", unit: "A" },
    { symbol: "A", meaning: "area of one loop", unit: "m^{2}" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "\\tau", meaning: "torque magnitude", unit: "N m" },
  ]}
/>

## Method

For a flat loop, opposite sides feel equal and opposite magnetic forces. They make a couple rather than a net force.

<PhysicsDerivation
  items={[
    {
      label: "Dipole moment",
      tex: "\\mu=NIA",
    },
    {
      label: "Torque vector",
      tex: "\\vec\\tau=\\vec\\mu\\times\\vec B",
    },
    {
      label: "Torque magnitude",
      tex: "\\tau=NIAB\\sin\\theta",
    },
    {
      label: "Potential energy",
      tex: "U=-\\vec\\mu\\cdot\\vec B",
    },
  ]}
/>

The direction of \\(\vec\mu\\) is set by a right-hand rule: curl fingers with conventional current; thumb points along \\(\vec\mu\\).

## Rules

<Equation label="Magnetic moment" tex="\mu=NIA" />

<Equation label="Loop torque" tex="\vec\tau=\vec\mu\times\vec B" />

<Equation label="Torque magnitude" tex="\tau=NIAB\sin\theta" />

<Equation label="Dipole energy" tex="U=-\vec\mu\cdot\vec B" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(50\\)-turn coil has area \\(2.0\\times10^{-3}\\,\\mathrm{m^2}\\), current \\(0.40\\,\\mathrm{A}\\), and is in \\(0.30\\,\\mathrm{T}\\). Find maximum torque.",
      answer: "\\[\\tau_{\\max}=NIAB=(50)(0.40)(2.0\\times10^{-3})(0.30)=1.2\\times10^{-2}\\,\\mathrm{N\\,m}\\]",
    },
    {
      title: "Example 2",
      question: "When is the torque zero?",
      answer: "When \\(\\vec\\mu\\) is parallel or antiparallel to \\(\\vec B\\), because \\(\\sin\\theta=0\\).",
    },
  ]}
/>

## Checks

- Area vector and magnetic moment use the right-hand rule for current.
- Maximum torque occurs when \\(\vec\mu\\) is perpendicular to \\(\vec B\\).
- Stable alignment has \\(\vec\mu\\) parallel to \\(\vec B\\).`;
