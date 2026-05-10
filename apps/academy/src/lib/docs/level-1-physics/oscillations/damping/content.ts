export const content = String.raw`## Principle

Damping removes oscillator energy through a velocity-dependent resistive force.

The undamped SHM model conserves mechanical energy. Damping adds a force that opposes motion.

## Notation

<Notation
  items={[
    { symbol: "x", meaning: "displacement from equilibrium", unit: "m" },
    { symbol: "b", meaning: "linear damping coefficient", unit: "kg s^{-1}" },
    { symbol: "\\beta", meaning: "damping rate", unit: "s^{-1}" },
    { symbol: "\\omega_0", meaning: "undamped angular frequency", unit: "rad s^{-1}" },
    { symbol: "\\omega_d", meaning: "damped angular frequency", unit: "rad s^{-1}" },
    { symbol: "A_0", meaning: "initial envelope amplitude", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Add a resistive force

For linear damping, the resistive force is proportional to velocity and points opposite the velocity.

<PhysicsDerivation
  items={[
    {
      label: "Damping force",
      tex: "F_d=-b\\frac{dx}{dt}",
    },
    {
      label: "Spring force",
      tex: "F_s=-kx",
    },
    {
      label: "Newton model",
      tex: "m\\frac{d^2x}{dt^2}=-b\\frac{dx}{dt}-kx",
    },
    {
      label: "Standard form",
      tex: "m\\frac{d^2x}{dt^2}+b\\frac{dx}{dt}+kx=0",
    },
  ]}
/>

### Derivation 2: Identify the damped oscillation

The exponential envelope comes from energy loss. The cosine remains only in the underdamped case.

<PhysicsDerivation
  items={[
    {
      label: "Damping rate",
      tex: "\\beta=\\frac{b}{2m}",
    },
    {
      label: "Natural frequency",
      tex: "\\omega_0=\\sqrt{\\frac{k}{m}}",
    },
    {
      label: "Underdamped condition",
      tex: "\\beta<\\omega_0",
    },
    {
      label: "Damped frequency",
      tex: "\\omega_d=\\sqrt{\\omega_0^2-\\beta^2}",
    },
    {
      label: "Displacement",
      tex: "x=A_0e^{-\\beta t}\\cos(\\omega_dt+\\phi)",
    },
  ]}
/>

The graph is a time history. The oscillation remains periodic-like, but the amplitude envelope shrinks.

<CartesianPhysicsGraph
  title="Underdamped motion"
  caption="The displacement oscillates inside a decaying envelope."
  xRange={{ min: 0, max: 8, step: 2, label: "t" }}
  yRange={{ min: -1.2, max: 1.2, step: 0.6, label: "x" }}
  curves={[
    {
      label: "x(t)",
      points: [
        { x: 0, y: 1 },
        { x: 0.2, y: 0.84 },
        { x: 0.4, y: 0.49 },
        { x: 0.6, y: 0.06 },
        { x: 0.8, y: -0.34 },
        { x: 1.0, y: -0.62 },
        { x: 1.2, y: -0.73 },
        { x: 1.4, y: -0.66 },
        { x: 1.6, y: -0.45 },
        { x: 1.8, y: -0.17 },
        { x: 2.0, y: 0.17 },
        { x: 2.2, y: 0.43 },
        { x: 2.4, y: 0.53 },
        { x: 2.6, y: 0.52 },
        { x: 2.8, y: 0.37 },
        { x: 3.0, y: 0.16 },
        { x: 3.2, y: -0.07 },
        { x: 3.4, y: -0.27 },
        { x: 3.6, y: -0.39 },
        { x: 3.8, y: -0.38 },
        { x: 4.0, y: -0.31 },
        { x: 4.2, y: -0.17 },
        { x: 4.4, y: 0.01 },
        { x: 4.6, y: 0.16 },
        { x: 4.8, y: 0.25 },
        { x: 5.0, y: 0.29 },
        { x: 5.2, y: 0.25 },
        { x: 5.4, y: 0.14 },
        { x: 5.6, y: 0.02 },
        { x: 5.8, y: -0.1 },
        { x: 6.0, y: -0.18 },
        { x: 6.2, y: -0.21 },
        { x: 6.4, y: -0.19 },
        { x: 6.6, y: -0.12 },
        { x: 6.8, y: -0.03 },
        { x: 7.0, y: 0.06 },
        { x: 7.2, y: 0.13 },
        { x: 7.4, y: 0.15 },
        { x: 7.6, y: 0.14 },
        { x: 7.8, y: 0.09 },
        { x: 8.0, y: 0.01 },
      ],
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Damped oscillator" tex="m\frac{d^2x}{dt^2}+b\frac{dx}{dt}+kx=0" />

<Equation label="Damping rate" tex="\beta=\frac{b}{2m}" />

<Equation label="Underdamped condition" tex="\beta<\omega_0" />

<Equation label="Damped frequency" tex="\omega_d=\sqrt{\omega_0^2-\beta^2}" />

<Equation label="Underdamped motion" tex="x=A_0e^{-\beta t}\cos(\omega_dt+\phi)" />

## Checks

- Damping force opposes velocity.
- Use the cosine form only for underdamping.
- Damping lowers frequency slightly.
- Mechanical energy decreases with time.`;
