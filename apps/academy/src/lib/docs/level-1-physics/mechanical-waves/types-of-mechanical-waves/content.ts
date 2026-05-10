export const content = String.raw`## Principle

Mechanical waves are organized by how the medium moves compared with how the disturbance travels.

The central idea is to keep two motions separate: local oscillation of the medium and transport of the wave pattern.

## Notation

<Notation
  items={[
    { symbol: "\\vec \\xi", meaning: "displacement of a small part of the medium", unit: "m" },
    { symbol: "\\vec v_w", meaning: "wave-propagation velocity", unit: "m s^{-1}" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "T", meaning: "period", unit: "s" },
    { symbol: "f", meaning: "frequency", unit: "Hz" },
  ]}
/>

## Method

### Derivation 1: Separate medium motion from wave motion

A wave is a moving pattern. A small piece of the medium usually oscillates about equilibrium instead of traveling with the pattern.

<PhysicsDerivation
  items={[
    {
      label: "Local displacement",
      tex: "\\vec \\xi(t)",
    },
    {
      label: "Pattern speed",
      tex: "\\vec v_w=\\frac{\\Delta \\vec r_{\\text{same phase}}}{\\Delta t}",
      note: "Follow a crest, compression, or any other fixed phase point.",
    },
  ]}
/>

### Derivation 2: Classify the wave by direction

Once those two directions are separated, the wave type is set by geometry.

<PhysicsDerivation
  items={[
    {
      label: "Transverse case",
      tex: "\\vec \\xi\\perp \\vec v_w",
      note: "The medium moves across the direction the pattern travels.",
    },
    {
      label: "Longitudinal case",
      tex: "\\vec \\xi\\parallel \\vec v_w",
      note: "The medium moves along the same line as the wave propagation.",
    },
  ]}
/>

For the transverse snapshot below, the plotted curve shows the shape of the medium at one instant. The particle displacement is vertical, while the wave pattern advances horizontally.

<CartesianPhysicsGraph
  height={180}
  width={340}
  xRange={{
    min: 0,
    max: 6.28,
    label: "x",
    ticks: [
      { value: 0, label: "0" },
      { value: 1.57, label: "\\pi/2" },
      { value: 3.14, label: "\\pi" },
      { value: 4.71, label: "3\\pi/2" },
      { value: 6.28, label: "2\\pi" },
    ],
  }}
  yRange={{ min: -1.2, max: 1.2, step: 0.6, label: "y" }}
  curves={[
    {
      points: [
        { x: 0, y: 0 },
        { x: 0.52, y: 0.5 },
        { x: 1.05, y: 0.87 },
        { x: 1.57, y: 1.0 },
        { x: 2.09, y: 0.87 },
        { x: 2.62, y: 0.5 },
        { x: 3.14, y: 0 },
        { x: 3.67, y: -0.5 },
        { x: 4.19, y: -0.87 },
        { x: 4.71, y: -1.0 },
        { x: 5.24, y: -0.87 },
        { x: 5.76, y: -0.5 },
        { x: 6.28, y: 0 },
      ],
      smooth: true,
    },
  ]}
  vectors={[
    {
      from: { x: 1.57, y: 0 },
      to: { x: 1.57, y: 1.0 },
      label: "particle",
      color: "var(--chart-3)",
    },
    {
      from: { x: 4.7, y: 0.82 },
      to: { x: 5.9, y: 0.82 },
      label: "v_w",
      color: "var(--chart-5)",
    },
  ]}
/>

The same logic classifies sound in air as longitudinal: air parcels oscillate back and forth along the same line that the compression pattern travels.

### Derivation 3: Recover the standard wave-speed relation

A periodic wave repeats after one period. During that time, a fixed phase point moves forward by one wavelength.

<PhysicsDerivation
  items={[
    {
      label: "One-period shift",
      tex: "v_w=\\frac{\\lambda}{T}",
    },
    {
      label: "Use frequency",
      tex: "f=\\frac{1}{T}",
    },
    {
      label: "Wave-speed form",
      tex: "v_w=f\\lambda",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Transverse condition" tex="\vec \xi\perp \vec v_w" />

<Equation label="Longitudinal condition" tex="\vec \xi\parallel \vec v_w" />

<Equation label="Wave speed" tex="v_w=\frac{\lambda}{T}=f\lambda" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A wave on a string has wavelength \\(0.80\\,\\mathrm{m}\\) and frequency \\(12\\,\\mathrm{Hz}\\). Find its speed and identify the wave type.",
      answer: "The speed is \\[v_w=f\\lambda=(12)(0.80)=9.6\\,\\mathrm{m\\,s^{-1}}\\] A string wave is transverse because the string elements move across the direction of propagation.",
    },
  ]}
/>

## Checks

- A material point in the medium is not usually carried forward with the wave.
- The classification uses the direction of local displacement, not the shape of the graph.
- A wave can be periodic and still be either transverse or longitudinal.
- Use the speed of the pattern, not the speed of an individual particle in the medium.`;
