export const content = String.raw`## Principle

Constant angular acceleration makes angular velocity change linearly with time.

## Notation

<Notation
  items={[
    { symbol: "\\theta", meaning: "angular position", unit: "rad" },
    { symbol: "\\theta_0", meaning: "initial angular position", unit: "rad" },
    { symbol: "\\omega_0", meaning: "initial angular velocity", unit: "rad s^{-1}" },
    { symbol: "\\omega", meaning: "final angular velocity", unit: "rad s^{-1}" },
    { symbol: "\\alpha", meaning: "constant angular acceleration", unit: "rad s^{-2}" },
  ]}
/>

## Method

### Derivation 1: Integrate constant angular acceleration

The constant-\\(\alpha\\) equations come from the definitions of angular velocity and angular acceleration.

<PhysicsDerivation
  items={[
    {
      label: "Start from constant acceleration",
      tex: "\\alpha=\\frac{d\\omega}{dt}",
    },
    {
      label: "Integrate once",
      tex: "\\omega=\\omega_0+\\alpha t",
    },
    {
      label: "Use angular velocity",
      tex: "\\omega=\\frac{d\\theta}{dt}",
    },
    {
      label: "Integrate again",
      tex: "\\theta=\\theta_0+\\omega_0t+\\frac12\\alpha t^2",
    },
  ]}
/>

With constant \\(\alpha\\), the graph of \\(\omega\\) against time is a straight line. The slope is \\(\alpha\\), and the area under the line is angular displacement.

<CartesianDiagram
  title="Constant angular acceleration"
  caption="Slope gives alpha; area under omega(t) gives angular displacement."
  width={460}
  height={260}
  xRange={{ min: 0, max: 5, step: 1, label: "t / s" }}
  yRange={{ min: 0, max: 15, step: 3, label: "omega / rad s^-1" }}
  curves={[
    {
      label: "\\omega=\\omega_0+\\alpha t",
      points: [
        { x: 0, y: 3 },
        { x: 1, y: 5 },
        { x: 2, y: 7 },
        { x: 3, y: 9 },
        { x: 4, y: 11 },
        { x: 5, y: 13 },
      ],
    },
  ]}
/>

### Derivation 2: Eliminate time when needed

If time is not needed, combine the velocity equation with the average angular velocity for constant acceleration.

<PhysicsDerivation
  items={[
    {
      label: "Mean angular velocity",
      tex: "\\Delta\\theta=\\frac12(\\omega_0+\\omega)t",
    },
    {
      label: "Eliminate time",
      tex: "t=\\frac{\\omega-\\omega_0}{\\alpha}",
    },
    {
      label: "No-time equation",
      tex: "\\omega^2=\\omega_0^2+2\\alpha(\\theta-\\theta_0)",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Angular velocity" tex="\omega=\omega_0+\alpha t" />

<Equation label="Angular position" tex="\theta=\theta_0+\omega_0t+\frac12\alpha t^2" />

<Equation label="No time" tex="\omega^2=\omega_0^2+2\alpha(\theta-\theta_0)" />

<Equation label="Mean velocity" tex="\theta-\theta_0=\frac12(\omega_0+\omega)t" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A wheel starts from rest with \\(\\alpha=3.0\\,\\mathrm{rad\\,s^{-2}}\\) for \\(4.0\\,\\mathrm{s}\\). Find \\(\\omega\\) and \\(\\Delta\\theta\\).",
      answer: "\\[\\omega=0+3.0(4.0)=12\\,\\mathrm{rad\\,s^{-1}}\\] \\[\\Delta\\theta=\\frac12(3.0)(4.0)^2=24\\,\\mathrm{rad}\\]",
    },
    {
      title: "Example 2",
      question: "A rotor slows from \\(20\\,\\mathrm{rad\\,s^{-1}}\\) to rest with \\(\\alpha=-5.0\\,\\mathrm{rad\\,s^{-2}}\\). Find the angle turned.",
      answer: "\\[0^2=20^2+2(-5.0)\\Delta\\theta\\] \\[\\Delta\\theta=40\\,\\mathrm{rad}\\]",
    },
  ]}
/>

## Checks

- Use angular displacement, not arc length.
- Convert revolutions to radians before substitution.
- A negative \\(\alpha\\) can either slow or speed rotation depending on \\(\omega\\).
- The constant-\\(\alpha\\) equations require \\(\alpha\\) to be constant.`;
