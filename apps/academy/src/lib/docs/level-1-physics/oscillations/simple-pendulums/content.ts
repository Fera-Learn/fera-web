export const content = String.raw`## Principle

A simple pendulum is harmonic only in the small-angle limit.

The motion is angular, but the restoring effect comes from the tangential component of gravity.

## Notation

<Notation
  items={[
    { symbol: "\\theta", meaning: "angular displacement from vertical", unit: "rad" },
    { symbol: "L", meaning: "pendulum length", unit: "m" },
    { symbol: "g", meaning: "gravitational field strength", unit: "m s^{-2}" },
    { symbol: "s", meaning: "arc displacement", unit: "m" },
    { symbol: "\\omega", meaning: "small-angle angular frequency", unit: "rad s^{-1}" },
    { symbol: "T", meaning: "period", unit: "s" },
  ]}
/>

## Method

### Derivation 1: Relate angle to arc motion

The bob moves along a circular arc of fixed radius \\(L\\), so angular displacement determines tangential displacement.

<PhysicsDerivation
  items={[
    {
      label: "Arc displacement",
      tex: "s=L\\theta",
    },
    {
      label: "Tangential acceleration",
      tex: "a_t=\\frac{d^2s}{dt^2}=L\\frac{d^2\\theta}{dt^2}",
    },
  ]}
/>

### Derivation 2: Resolve gravity tangentially

Tension is radial, so it does not restore the angle. The tangential component of weight points toward equilibrium.

<PhysicsDerivation
  items={[
    {
      label: "Tangential force",
      tex: "F_t=-mg\\sin\\theta",
    },
    {
      label: "Tangential Newton law",
      tex: "mL\\frac{d^2\\theta}{dt^2}=-mg\\sin\\theta",
    },
    {
      label: "Cancel mass",
      tex: "\\frac{d^2\\theta}{dt^2}=-\\frac{g}{L}\\sin\\theta",
    },
  ]}
/>

### Derivation 3: Apply the small-angle limit

The equation becomes SHM only when the angle is small enough that \\(\\sin\\theta\\approx\\theta\\) in radians.

<PhysicsDerivation
  items={[
    {
      label: "Small-angle approximation",
      tex: "\\sin\\theta\\approx\\theta",
    },
    {
      label: "SHM equation",
      tex: "\\frac{d^2\\theta}{dt^2}=-\\frac{g}{L}\\theta",
    },
    {
      label: "Angular frequency",
      tex: "\\omega=\\sqrt{\\frac{g}{L}}",
    },
    {
      label: "Period",
      tex: "T=2\\pi\\sqrt{\\frac{L}{g}}",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Arc displacement" tex="s=L\theta" />

<Equation label="Small-angle equation" tex="\frac{d^2\theta}{dt^2}=-\frac{g}{L}\theta" />

<Equation label="Pendulum frequency" tex="\omega=\sqrt{\frac{g}{L}}" />

<Equation label="Pendulum period" tex="T=2\pi\sqrt{\frac{L}{g}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A small-angle pendulum has length \\(0.80\\,\\mathrm{m}\\). Find its period using \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\).",
      answer: "\\[T=2\\pi\\sqrt{\\frac{0.80}{9.8}}=1.79\\,\\mathrm{s}\\]",
    },
  ]}
/>

## Checks

- Angle must be in radians.
- Mass cancels for a simple pendulum.
- Larger length gives longer period.
- Large amplitudes are not exactly SHM.`;
