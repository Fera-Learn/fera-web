export const content = String.raw`## Principle

In a linear medium, overlapping waves add displacement point by point.

Superposition is the reason interference patterns appear: the medium responds to the sum of disturbances, not to one wave at a time.

## Notation

<Notation
  items={[
    { symbol: "y_1(x,t)", meaning: "first wave displacement", unit: "m" },
    { symbol: "y_2(x,t)", meaning: "second wave displacement", unit: "m" },
    { symbol: "y(x,t)", meaning: "resultant displacement", unit: "m" },
    { symbol: "A", meaning: "individual wave amplitude", unit: "m" },
    { symbol: "\\Delta\\phi", meaning: "phase difference", unit: "rad" },
    { symbol: "A_{\\mathrm{res}}", meaning: "resultant amplitude", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Add the displacements directly

For a linear wave equation, the sum of two solutions is another solution. That means the medium displacement is the algebraic sum of the individual displacements.

<PhysicsDerivation
  items={[
    {
      label: "Superposition rule",
      tex: "y(x,t)=y_1(x,t)+y_2(x,t)",
    },
  ]}
/>

The graph shows two sinusoidal waves at the same instant and the displacement produced when they overlap.

<CartesianPhysicsGraph
  height={180}
  width={360}
  xRange={{ min: 0, max: 5.5, step: 1.0, label: "x" }}
  yRange={{ min: -2.2, max: 2.2, step: 1.1, label: "y" }}
  curves={[
    {
      label: "y_1",
      dashed: true,
      points: [
        { x: 0, y: 0 },
        { x: 0.5, y: 0.48 },
        { x: 1.0, y: 0.84 },
        { x: 1.5, y: 1.0 },
        { x: 2.0, y: 0.91 },
        { x: 2.5, y: 0.60 },
        { x: 3.0, y: 0.14 },
        { x: 3.5, y: -0.35 },
        { x: 4.0, y: -0.76 },
        { x: 4.5, y: -0.98 },
        { x: 5.0, y: -0.96 },
        { x: 5.5, y: -0.71 },
      ],
      smooth: true,
    },
    {
      label: "y_2",
      dashed: true,
      color: "var(--chart-3)",
      points: [
        { x: 0, y: 0.72 },
        { x: 0.5, y: 0.96 },
        { x: 1.0, y: 0.97 },
        { x: 1.5, y: 0.75 },
        { x: 2.0, y: 0.33 },
        { x: 2.5, y: -0.18 },
        { x: 3.0, y: -0.65 },
        { x: 3.5, y: -0.94 },
        { x: 4.0, y: -1.00 },
        { x: 4.5, y: -0.82 },
        { x: 5.0, y: -0.44 },
        { x: 5.5, y: 0.06 },
      ],
      smooth: true,
    },
    {
      label: "y",
      color: "var(--chart-5)",
      points: [
        { x: 0, y: 0.72 },
        { x: 0.5, y: 1.44 },
        { x: 1.0, y: 1.81 },
        { x: 1.5, y: 1.75 },
        { x: 2.0, y: 1.24 },
        { x: 2.5, y: 0.42 },
        { x: 3.0, y: -0.51 },
        { x: 3.5, y: -1.29 },
        { x: 4.0, y: -1.76 },
        { x: 4.5, y: -1.80 },
        { x: 5.0, y: -1.40 },
        { x: 5.5, y: -0.65 },
      ],
      smooth: true,
    },
  ]}
/>

### Derivation 2: Add two equal sinusoids with a phase difference

Now take two waves with the same amplitude, frequency, and wavenumber:
\\[
y_1=A\\cos(kx-\\omega t)
\\]
\\[
y_2=A\\cos(kx-\\omega t+\\Delta\\phi)
\\]

Use the cosine-sum identity to rewrite the total as a single sinusoid.

<PhysicsDerivation
  items={[
    {
      label: "Add the waves",
      tex: "y=y_1+y_2",
    },
    {
      label: "Trig identity",
      tex: "y=2A\\cos\\left(\\frac{\\Delta\\phi}{2}\\right)\\cos\\left(kx-\\omega t+\\frac{\\Delta\\phi}{2}\\right)",
    },
    {
      label: "Resultant amplitude",
      tex: "A_{\\mathrm{res}}=2A\\cos\\left(\\frac{\\Delta\\phi}{2}\\right)",
    },
  ]}
/>

### Derivation 3: Interpret interference

The phase difference controls whether the waves reinforce or cancel.

<PhysicsDerivation
  items={[
    {
      label: "Constructive case",
      tex: "\\Delta\\phi=0\\Rightarrow A_{\\mathrm{res}}=2A",
    },
    {
      label: "Destructive case",
      tex: "\\Delta\\phi=\\pi\\Rightarrow A_{\\mathrm{res}}=0",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Superposition" tex="y=y_1+y_2" />

<Equation label="Equal-wave resultant" tex="A_{\mathrm{res}}=2A\cos\left(\frac{\Delta\phi}{2}\right)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two equal sinusoidal waves each have amplitude \\(3.0\\,\\mathrm{mm}\\) and phase difference \\(120^\\circ\\). Find the resultant amplitude.",
      answer: "Convert the phase difference to radians or use the known cosine value: \\[A_{\\mathrm{res}}=2A\\cos\\left(\\frac{120^\\circ}{2}\\right)=2(3.0\\,\\mathrm{mm})\\cos60^\\circ=3.0\\,\\mathrm{mm}\\]",
    },
  ]}
/>

## Checks

- Superposition adds displacements, not energies.
- Complete cancellation requires equal amplitudes and a phase difference of \\(\\pi\\).
- Constructive interference doubles amplitude and therefore quadruples intensity or power in many wave models.
- Interference can vary from point to point because phase difference can depend on position.`;
