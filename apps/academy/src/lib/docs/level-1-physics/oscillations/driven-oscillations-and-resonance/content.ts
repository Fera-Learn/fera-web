export const content = String.raw`## Principle

Resonance occurs when periodic driving transfers energy faster than damping removes it.

This page adds an external periodic force to the damped oscillator model.

## Notation

<Notation
  items={[
    { symbol: "F_0", meaning: "driving-force amplitude", unit: "N" },
    { symbol: "\\omega", meaning: "driving angular frequency", unit: "rad s^{-1}" },
    { symbol: "\\omega_0", meaning: "natural angular frequency", unit: "rad s^{-1}" },
    { symbol: "b", meaning: "linear damping coefficient", unit: "kg s^{-1}" },
    { symbol: "A", meaning: "steady-state amplitude", unit: "m" },
    { symbol: "\\phi", meaning: "phase lag of displacement", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Add a periodic drive

The drive supplies energy at a chosen angular frequency. Damping removes energy, so the long-time motion reaches a steady response.

<PhysicsDerivation
  items={[
    {
      label: "Damped oscillator",
      tex: "m\\frac{d^2x}{dt^2}+b\\frac{dx}{dt}+kx=0",
    },
    {
      label: "Driving force",
      tex: "F_d(t)=F_0\\cos\\omega t",
    },
    {
      label: "Driven model",
      tex: "m\\frac{d^2x}{dt^2}+b\\frac{dx}{dt}+kx=F_0\\cos\\omega t",
    },
  ]}
/>

### Derivation 2: Describe the steady state

After transients die away, the oscillator moves at the driving frequency, not at its own natural frequency.

<PhysicsDerivation
  items={[
    {
      label: "Steady response",
      tex: "x=A\\cos(\\omega t-\\phi)",
    },
    {
      label: "Natural frequency",
      tex: "\\omega_0=\\sqrt{\\frac{k}{m}}",
    },
    {
      label: "Amplitude response",
      tex: "A=\\frac{F_0/m}{\\sqrt{(\\omega_0^2-\\omega^2)^2+(b\\omega/m)^2}}",
      note: "The denominator compares spring-inertia mismatch with damping.",
    },
  ]}
/>

### Derivation 3: Interpret resonance

With light damping, the amplitude is largest near the natural frequency. More damping lowers and broadens the peak.

<PhysicsDerivation
  items={[
    {
      label: "Light damping",
      tex: "b\\ \\text{small}",
    },
    {
      label: "Near peak",
      tex: "\\omega_{\\mathrm{res}}\\approx\\omega_0",
    },
    {
      label: "Finite amplitude",
      tex: "b>0\\Rightarrow A_{\\mathrm{peak}}\\ \\text{finite}",
    },
  ]}
/>

The graph shows steady-state amplitude against drive frequency. It is not the displacement-time graph.

<CartesianPhysicsGraph
  title="Resonance curve"
  caption="Small damping gives a taller, narrower response near the natural frequency."
  xRange={{ min: 0, max: 2, step: 0.5, label: "omega / omega0" }}
  yRange={{ min: 0, max: 5, step: 1, label: "A" }}
  curves={[
    {
      label: "light damping",
      points: [
        { x: 0, y: 0.9 },
        { x: 0.1, y: 0.91 },
        { x: 0.2, y: 0.94 },
        { x: 0.3, y: 0.99 },
        { x: 0.4, y: 1.08 },
        { x: 0.5, y: 1.22 },
        { x: 0.6, y: 1.43 },
        { x: 0.7, y: 1.75 },
        { x: 0.8, y: 2.35 },
        { x: 0.85, y: 2.85 },
        { x: 0.9, y: 3.55 },
        { x: 0.95, y: 4.2 },
        { x: 1.0, y: 4.45 },
        { x: 1.05, y: 3.95 },
        { x: 1.1, y: 3.1 },
        { x: 1.15, y: 2.35 },
        { x: 1.2, y: 1.8 },
        { x: 1.3, y: 1.2 },
        { x: 1.4, y: 0.82 },
        { x: 1.5, y: 0.62 },
        { x: 1.6, y: 0.48 },
        { x: 1.7, y: 0.39 },
        { x: 1.8, y: 0.32 },
        { x: 1.9, y: 0.27 },
        { x: 2.0, y: 0.23 },
      ],
    },
    {
      label: "heavier damping",
      color: "var(--chart-3)",
      points: [
        { x: 0, y: 0.85 },
        { x: 0.1, y: 0.86 },
        { x: 0.2, y: 0.88 },
        { x: 0.3, y: 0.91 },
        { x: 0.4, y: 0.96 },
        { x: 0.5, y: 1.02 },
        { x: 0.6, y: 1.1 },
        { x: 0.7, y: 1.2 },
        { x: 0.8, y: 1.3 },
        { x: 0.9, y: 1.37 },
        { x: 1.0, y: 1.4 },
        { x: 1.1, y: 1.34 },
        { x: 1.2, y: 1.2 },
        { x: 1.3, y: 1.02 },
        { x: 1.4, y: 0.84 },
        { x: 1.5, y: 0.68 },
        { x: 1.6, y: 0.55 },
        { x: 1.7, y: 0.46 },
        { x: 1.8, y: 0.38 },
        { x: 1.9, y: 0.33 },
        { x: 2.0, y: 0.29 },
      ],
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Driven oscillator" tex="m\frac{d^2x}{dt^2}+b\frac{dx}{dt}+kx=F_0\cos\omega t" />

<Equation label="Steady response" tex="x=A\cos(\omega t-\phi)" />

<Equation label="Amplitude response" tex="A=\frac{F_0/m}{\sqrt{(\omega_0^2-\omega^2)^2+(b\omega/m)^2}}" />

<Equation label="Resonance estimate" tex="\omega_{\mathrm{res}}\approx\omega_0\quad\text{for light damping}" />

## Checks

- Resonance is a steady-state effect.
- Damping limits the peak amplitude.
- Phase lag changes with drive frequency.
- Driving at high frequency gives small response.`;
