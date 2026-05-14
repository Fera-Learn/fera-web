export const content = String.raw`## Principle

Angular velocity is the signed rate of change of angular position.

## Notation

<Notation
  items={[
    { symbol: "\\theta", meaning: "angular position", unit: "rad" },
    { symbol: "\\Delta\\theta", meaning: "angular displacement", unit: "rad" },
    { symbol: "\\omega", meaning: "angular velocity", unit: "rad s^{-1}" },
    { symbol: "T", meaning: "period for one revolution", unit: "s" },
    { symbol: "f", meaning: "rotation frequency", unit: "Hz" },
  ]}
/>

## Method

### Derivation 1: Define signed angular displacement

Choose a positive rotation direction first. Angular displacement is then a signed change in angle, not the total angle swept.

<PhysicsDerivation
  items={[
    {
      label: "Angular change",
      tex: "\\Delta\\theta=\\theta_f-\\theta_i",
    },
    {
      label: "Average rate",
      tex: "\\omega_{\\mathrm{av}}=\\frac{\\Delta\\theta}{\\Delta t}",
    },
    {
      label: "Instantaneous rate",
      tex: "\\omega=\\lim_{\\Delta t\\to0}\\frac{\\Delta\\theta}{\\Delta t}=\\frac{d\\theta}{dt}",
    },
  ]}
/>

The sketch fixes what \\(\\Delta\\theta\\) means: both radius vectors are measured from the same reference direction, and the sign comes from the chosen positive sense.

<PolarDiagram
  title="Angular displacement"
  caption="Angular velocity uses signed angular displacement about the axis."
  maxRadius={4}
  spokes={[0, 30, 60, 90, 120]}
  curves={[
    {
      points: [
        { radius: 3, angle: 25 },
        { radius: 3, angle: 45 },
        { radius: 3, angle: 65 },
        { radius: 3, angle: 85 },
        { radius: 3, angle: 105 },
      ],
    },
  ]}
  vectors={[
    { radius: 3, angle: 25, label: "\\theta_i" },
    { radius: 3, angle: 105, label: "\\theta_f", color: "var(--chart-3)" },
  ]}
/>

### Derivation 2: Connect period and frequency

Uniform rotation repeats the same angular displacement, \\(2\\pi\\), every period.

<PhysicsDerivation
  items={[
    {
      label: "One revolution",
      tex: "1\\,\\mathrm{rev}=2\\pi\\,\\mathrm{rad}",
    },
    {
      label: "Period relation",
      tex: "\\omega=\\frac{2\\pi}{T}",
    },
    {
      label: "Frequency relation",
      tex: "f=\\frac1T\\Rightarrow\\omega=2\\pi f",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Average angular velocity" tex="\omega_{\mathrm{av}}=\frac{\Delta\theta}{\Delta t}" />

<Equation label="Instantaneous angular velocity" tex="\omega=\frac{d\theta}{dt}" />

<Equation label="One revolution" tex="1\,\mathrm{rev}=2\pi\,\mathrm{rad}" />

<Equation label="Period relation" tex="\omega=\frac{2\pi}{T}=2\pi f" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A wheel turns through \\(18\\,\\mathrm{rad}\\) in \\(3.0\\,\\mathrm{s}\\). Find average angular velocity.",
      answer: "\\[\\omega_{\\mathrm{av}}=\\frac{18}{3.0}=6.0\\,\\mathrm{rad\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A turntable rotates at \\(45\\,\\mathrm{rev\\,min^{-1}}\\). Find \\(\\omega\\) in \\(\\mathrm{rad\\,s^{-1}}\\).",
      answer: "\\[\\omega=45\\frac{2\\pi\\,\\mathrm{rad}}{60\\,\\mathrm{s}}=4.71\\,\\mathrm{rad\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Use radians in angular equations.
- Angular velocity can be negative.
- Average angular velocity uses net angular displacement.
- The angular-velocity vector direction follows the right-hand rule.`;
