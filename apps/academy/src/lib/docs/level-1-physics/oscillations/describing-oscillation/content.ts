export const content = String.raw`## Principle

Oscillation is motion that repeats about an equilibrium state.

Position, velocity, and acceleration describe motion. This page adds the timing language used for repeated motion.

## Notation

<Notation
  items={[
    { symbol: "x(t)", meaning: "displacement from equilibrium", unit: "m" },
    { symbol: "A", meaning: "amplitude", unit: "m" },
    { symbol: "T", meaning: "period", unit: "s" },
    { symbol: "f", meaning: "frequency", unit: "Hz" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "\\phi", meaning: "phase constant", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Identify the repeated quantity

Measure displacement from the equilibrium position. A periodic oscillator returns to the same displacement, velocity, and acceleration after one period.

<PhysicsDerivation
  items={[
    {
      label: "Repeat displacement",
      tex: "x(t+T)=x(t)",
    },
    {
      label: "Repeat velocity",
      tex: "v(t+T)=v(t)",
    },
    {
      label: "Repeat acceleration",
      tex: "a(t+T)=a(t)",
      note: "A repeated position alone is not enough if the motion reverses differently each time.",
    },
  ]}
/>

### Derivation 2: Connect period, frequency, and phase

Frequency counts cycles per second. Angular frequency counts radians of phase per second, with one cycle equal to \\(2\\pi\\) radians.

<PhysicsDerivation
  items={[
    {
      label: "Cycle rate",
      tex: "f=\\frac{1}{T}",
    },
    {
      label: "One cycle",
      tex: "\\Delta\\varphi=2\\pi",
    },
    {
      label: "Phase rate",
      tex: "\\omega=\\frac{\\Delta\\varphi}{T}=\\frac{2\\pi}{T}",
    },
    {
      label: "Frequency form",
      tex: "\\omega=2\\pi f",
    },
  ]}
/>

### Derivation 3: Build the sinusoidal model

A sinusoid is the simplest smooth periodic model. The amplitude scales the displacement and the phase constant sets the initial position in the cycle.

<PhysicsDerivation
  items={[
    {
      label: "Start with phase",
      tex: "\\varphi(t)=\\omega t+\\phi",
    },
    {
      label: "Scale displacement",
      tex: "x(t)=A\\cos\\varphi(t)",
    },
    {
      label: "Substitute phase",
      tex: "x(t)=A\\cos(\\omega t+\\phi)",
    },
  ]}
/>

The graph below is a time history, not a path through space. Read the period horizontally and the amplitude vertically.

<CartesianDiagram
  title="Periodic displacement"
  caption="The pattern repeats after one period; amplitude is measured from equilibrium."
  xRange={{ min: 0, max: 6.3, step: 1, label: "t" }}
  yRange={{ min: -1.2, max: 1.2, step: 0.6, label: "x" }}
  curves={[
    {
      label: "x(t)",
      points: [
        { x: 0, y: 1 },
        { x: 0.2, y: 0.98 },
        { x: 0.4, y: 0.92 },
        { x: 0.6, y: 0.83 },
        { x: 0.8, y: 0.7 },
        { x: 1.0, y: 0.54 },
        { x: 1.2, y: 0.36 },
        { x: 1.4, y: 0.17 },
        { x: 1.57, y: 0 },
        { x: 1.8, y: -0.23 },
        { x: 2.0, y: -0.42 },
        { x: 2.2, y: -0.59 },
        { x: 2.4, y: -0.74 },
        { x: 2.6, y: -0.86 },
        { x: 2.8, y: -0.94 },
        { x: 3.0, y: -0.99 },
        { x: 3.14, y: -1 },
        { x: 3.3, y: -0.99 },
        { x: 3.5, y: -0.94 },
        { x: 3.7, y: -0.85 },
        { x: 3.9, y: -0.73 },
        { x: 4.1, y: -0.57 },
        { x: 4.3, y: -0.4 },
        { x: 4.5, y: -0.21 },
        { x: 4.71, y: 0 },
        { x: 4.9, y: 0.19 },
        { x: 5.1, y: 0.38 },
        { x: 5.3, y: 0.55 },
        { x: 5.5, y: 0.71 },
        { x: 5.7, y: 0.83 },
        { x: 5.9, y: 0.93 },
        { x: 6.1, y: 0.98 },
        { x: 6.28, y: 1 },
      ],
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Periodic condition" tex="x(t+T)=x(t)" />

<Equation label="Frequency definition" tex="f=\frac{1}{T}" />

<Equation label="Angular frequency" tex="\omega=2\pi f=\frac{2\pi}{T}" />

<Equation label="Sinusoidal displacement" tex="x(t)=A\cos(\omega t+\phi)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An oscillator completes \\(12\\) cycles in \\(6.0\\,\\mathrm{s}\\). Find \\(f\\), \\(T\\), and \\(\\omega\\).",
      answer: "\\[f=12/6.0=2.0\\,\\mathrm{Hz}\\] \\[T=1/f=0.50\\,\\mathrm{s}\\] \\[\\omega=2\\pi f=4\\pi\\,\\mathrm{rad\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Amplitude is measured from equilibrium, not peak to peak.
- Period is time per cycle.
- Frequency is cycles per second.
- Phase must be in radians in calculus formulas.`;
