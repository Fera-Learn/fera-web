export const content = String.raw`## Principle

A moving charge produces a magnetic field. The field circles around the direction of motion and is strongest to the side of the moving charge.

## Notation

<Notation
  items={[
    { symbol: "q", meaning: "source charge", unit: "C" },
    { symbol: "\\vec v", meaning: "velocity of the source charge", unit: "m s^{-1}" },
    { symbol: "\\vec r", meaning: "vector from the charge to the field point", unit: "m" },
    { symbol: "\\hat r", meaning: "unit vector from the charge to the field point", unit: "" },
    { symbol: "\\theta", meaning: "angle between \\(\\vec v\\) and \\(\\vec r\\)", unit: "rad" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "\\mu_0", meaning: "permeability of free space", unit: "N A^{-2}" },
  ]}
/>

## Method

### Derivation 1: Use the moving-charge field law

For a slowly moving point charge, the magnetic field at a point displaced by \\(\vec r\\) from the charge is proportional to charge, speed, and the sine of the angle to the line of sight.

<PhysicsDerivation
  items={[
    {
      label: "Vector field",
      tex: "\\vec B=\\frac{\\mu_0}{4\\pi}\\frac{q\\vec v\\times \\hat r}{r^2}",
    },
    {
      label: "Magnitude",
      tex: "B=\\frac{\\mu_0}{4\\pi}\\frac{|q|v\\sin\\theta}{r^2}",
    },
  ]}
/>

### Derivation 2: Determine the direction

For a positive charge, point the fingers of your right hand along \\(\vec v\\) and curl toward \\(\hat r\\). Your thumb gives \\(\vec v\times\hat r\\), which is the field direction. A negative source charge reverses the direction.

### Derivation 3: Recognize zero-field directions

If the field point lies directly ahead of or behind the moving charge, then \\(\theta=0\\) or \\(\theta=\\pi\\). The cross product is zero, so the magnetic field from this motion is zero at that instant.

## Rules

<Equation label="Moving charge field" tex="\vec B=\frac{\mu_0}{4\pi}\frac{q\vec v\times\hat r}{r^2}" />

<Equation label="Magnitude" tex="B=\frac{\mu_0}{4\pi}\frac{|q|v\sin\theta}{r^2}" />

<Equation label="Field vanishes on the velocity line" tex="\theta=0\text{ or }\pi\Rightarrow B=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A positive charge moves to the right. What is the magnetic field direction at a point directly above the charge?",
      answer: "Use \\(\\vec v\\times\\hat r\\). Right crossed with up points out of the page, so \\(\\vec B\\) is out of the page.",
    },
    {
      title: "Example 2",
      question: "A charge \\(q=2.0\\times10^{-6}\\,\\mathrm C\\) moves at \\(3.0\\times10^4\\,\\mathrm{m\\,s^{-1}}\\). Find \\(B\\) at a point \\(0.20\\,\\mathrm m\\) away, perpendicular to the velocity.",
      answer: "\\[B=\\frac{\\mu_0}{4\\pi}\\frac{qv}{r^2}=(10^{-7})\\frac{(2.0\\times10^{-6})(3.0\\times10^4)}{0.20^2}=1.5\\times10^{-10}\\,\\mathrm T\\]",
    },
  ]}
/>

## Checks

- The field is magnetic only because the charge is moving.
- The field is perpendicular to both \\(\vec v\\) and \\(\hat r\\).
- A negative source charge reverses the right-hand-rule direction.
- The equation is the low-speed point-charge result, not a full relativistic field model.`;
