export const content = String.raw`## Principle

Angular acceleration is the signed rate of change of angular velocity.

## Notation

<Notation
  items={[
    { symbol: "\\alpha", meaning: "angular acceleration", unit: "rad s^{-2}" },
    { symbol: "\\omega", meaning: "angular velocity", unit: "rad s^{-1}" },
    { symbol: "\\theta", meaning: "angular position", unit: "rad" },
    { symbol: "a_t", meaning: "tangential acceleration", unit: "m s^{-2}" },
    { symbol: "r", meaning: "distance from rotation axis", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Differentiate angular velocity

Angular acceleration is a slope on an angular-velocity graph. It tells how \\(\\omega\\) changes, not whether rotation is clockwise or counterclockwise by itself.

<PhysicsDerivation
  items={[
    {
      label: "Average angular acceleration",
      tex: "\\alpha_{\\mathrm{av}}=\\frac{\\Delta\\omega}{\\Delta t}",
    },
    {
      label: "Instantaneous angular acceleration",
      tex: "\\alpha=\\lim_{\\Delta t\\to0}\\frac{\\Delta\\omega}{\\Delta t}=\\frac{d\\omega}{dt}",
    },
    {
      label: "Second derivative",
      tex: "\\alpha=\\frac{d^2\\theta}{dt^2}",
    },
  ]}
/>

The graph shows the geometric reading: the slope of \\(\omega(t)\\) is \\(\alpha\\). A straight line means constant angular acceleration.

<CartesianDiagram
  title="Angular acceleration as slope"
  caption="The slope of an angular-velocity graph is angular acceleration."
  width={460}
  height={260}
  xRange={{ min: 0, max: 4, step: 1, label: "t / s" }}
  yRange={{ min: 0, max: 20, step: 5, label: "omega / rad s^-1" }}
  curves={[
    {
      label: "\\omega(t)",
      points: [
        { x: 0, y: 4 },
        { x: 1, y: 7 },
        { x: 2, y: 10 },
        { x: 3, y: 13 },
        { x: 4, y: 16 },
      ],
    },
  ]}
/>

### Derivation 2: Interpret sign and tangential acceleration

Angular speed increases when \\(\omega\\) and \\(\alpha\\) have the same sign. A point farther from the axis has the same \\(\alpha\\) but larger tangential acceleration.

<PhysicsDerivation
  items={[
    {
      label: "Speeding up",
      tex: "\\omega\\alpha>0",
    },
    {
      label: "Slowing down",
      tex: "\\omega\\alpha<0",
    },
    {
      label: "Tangential acceleration",
      tex: "a_t=r\\alpha",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Average angular acceleration" tex="\alpha_{\mathrm{av}}=\frac{\Delta\omega}{\Delta t}" />

<Equation label="Instantaneous angular acceleration" tex="\alpha=\frac{d\omega}{dt}" />

<Equation label="Second derivative" tex="\alpha=\frac{d^2\theta}{dt^2}" />

<Equation label="Tangential acceleration" tex="a_t=r\alpha" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A rotor changes from \\(4\\,\\mathrm{rad\\,s^{-1}}\\) to \\(16\\,\\mathrm{rad\\,s^{-1}}\\) in \\(3\\,\\mathrm{s}\\). Find \\(\\alpha_{\\mathrm{av}}\\).",
      answer: "\\[\\alpha_{\\mathrm{av}}=\\frac{16-4}{3}=4.0\\,\\mathrm{rad\\,s^{-2}}\\]",
    },
    {
      title: "Example 2",
      question: "If \\(\\theta(t)=2t^3-t\\), find \\(\\omega(t)\\) and \\(\\alpha(t)\\).",
      answer: "\\[\\omega(t)=\\frac{d\\theta}{dt}=6t^2-1\\] \\[\\alpha(t)=\\frac{d\\omega}{dt}=12t\\]",
    },
  ]}
/>

## Checks

- Angular acceleration is not automatically in the same direction as angular velocity.
- Positive \\(\alpha\\) means increasing \\(\omega\\), not necessarily increasing angular speed.
- Tangential acceleration grows with radius.
- Centripetal acceleration is separate from angular acceleration.`;
