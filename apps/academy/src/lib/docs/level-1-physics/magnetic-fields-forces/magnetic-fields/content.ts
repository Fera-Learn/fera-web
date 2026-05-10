export const content = String.raw`## Principle

A magnetic field is defined by the force it exerts on moving charge.

## Notation

<Notation
  items={[
    { symbol: "\\vec F_B", meaning: "magnetic force on a particle", unit: "N" },
    { symbol: "q", meaning: "particle charge", unit: "C" },
    { symbol: "\\vec v", meaning: "particle velocity", unit: "m s^{-1}" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "\\theta", meaning: "angle between velocity and field", unit: "rad" },
  ]}
/>

## Method

Magnetic force depends on the component of velocity perpendicular to the field.

<PhysicsDerivation
  items={[
    {
      label: "Vector law",
      tex: "\\vec F_B=q\\vec v\\times\\vec B",
    },
    {
      label: "Magnitude",
      tex: "F_B=|q|vB\\sin\\theta",
    },
    {
      label: "Perpendicular speed",
      tex: "v_{\\perp}=v\\sin\\theta",
    },
    {
      label: "Force magnitude",
      tex: "F_B=|q|v_{\\perp}B",
    },
  ]}
/>

Use the right-hand rule for \\(\vec v\times\vec B\\). Reverse the direction for a negative charge.

## Rules

<Equation label="Magnetic force" tex="\vec F_B=q\vec v\times\vec B" />

<Equation label="Force magnitude" tex="F_B=|q|vB\sin\theta" />

<Equation label="Tesla" tex="1\,\mathrm{T}=1\,\mathrm{N\,C^{-1}\,m^{-1}\,s}" />

<Equation label="No work" tex="\vec F_B\cdot\vec v=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A proton moves perpendicular to a \\(0.20\\,\\mathrm{T}\\) field at \\(3.0\\times10^5\\,\\mathrm{m\\,s^{-1}}\\). Find \\(F_B\\).",
      answer: "\\[F_B=qvB=(1.60\\times10^{-19})(3.0\\times10^5)(0.20)=9.6\\times10^{-15}\\,\\mathrm{N}\\]",
    },
    {
      title: "Example 2",
      question: "The same proton moves parallel to the field. Find the magnetic force.",
      answer: "Here \\(\\theta=0\\), so \\(F_B=qvB\\sin0=0\\).",
    },
  ]}
/>

## Checks

- Only the perpendicular component of velocity matters.
- Positive and negative charges curve in opposite directions.
- The force is perpendicular to both \\(\vec v\\) and \\(\vec B\\).`;
