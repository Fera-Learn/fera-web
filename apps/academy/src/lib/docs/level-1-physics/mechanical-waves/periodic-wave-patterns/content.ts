export const content = String.raw`## Principle

Amplitude, wavelength, period, and frequency describe how a wave repeats in space and time.

This page makes the geometry of a wave snapshot and the timing at a fixed point line up into one consistent model.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "amplitude", unit: "m" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "T", meaning: "period", unit: "s" },
    { symbol: "f", meaning: "frequency", unit: "Hz" },
    { symbol: "v_w", meaning: "wave speed", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Read a spatial snapshot

Freeze the wave at one instant and compare positions along the medium. The amplitude is the largest displacement from equilibrium, and the wavelength is the distance between neighboring points in the same phase.

<PhysicsDerivation
  items={[
    {
      label: "Amplitude",
      tex: "A=|y|_{\\max}",
    },
    {
      label: "Same-phase spacing",
      tex: "y(x+\\lambda,t)=y(x,t)",
      note: "Crest-to-crest and trough-to-trough distances are both wavelengths.",
    },
  ]}
/>

The graph is scaled so the horizontal axis is measured in wavelength units. Adjacent crests are one unit apart on that scale.

<CartesianDiagram
  height={180}
  width={340}
  xRange={{
    min: 0,
    max: 2,
    step: 0.5,
    label: "x / lambda",
  }}
  yRange={{ min: -1.2, max: 1.2, step: 0.6, label: "y / A" }}
  curves={[
    {
      points: [
        { x: 0, y: 1.0 },
        { x: 0.125, y: 0.71 },
        { x: 0.25, y: 0 },
        { x: 0.375, y: -0.71 },
        { x: 0.5, y: -1.0 },
        { x: 0.625, y: -0.71 },
        { x: 0.75, y: 0 },
        { x: 0.875, y: 0.71 },
        { x: 1.0, y: 1.0 },
        { x: 1.125, y: 0.71 },
        { x: 1.25, y: 0 },
        { x: 1.375, y: -0.71 },
        { x: 1.5, y: -1.0 },
        { x: 1.625, y: -0.71 },
        { x: 1.75, y: 0 },
        { x: 1.875, y: 0.71 },
        { x: 2.0, y: 1.0 },
      ],
      smooth: true,
    },
  ]}
  vectors={[
    {
      from: { x: 0.1, y: 0 },
      to: { x: 0.1, y: 1.0 },
      label: "A",
      color: "var(--chart-3)",
    },
  ]}
/>

### Derivation 2: Read the time history at one point

Now keep position fixed and watch one point of the medium oscillate.

<PhysicsDerivation
  items={[
    {
      label: "Period definition",
      tex: "y(x,t+T)=y(x,t)",
    },
    {
      label: "Frequency definition",
      tex: "f=\\frac{1}{T}",
    },
  ]}
/>

### Derivation 3: Link the spatial and temporal repeats

After one period, the same crest has advanced by one wavelength. That is the bridge between snapshot geometry and time history.

<PhysicsDerivation
  items={[
    {
      label: "Distance in one period",
      tex: "v_w=\\frac{\\lambda}{T}",
    },
    {
      label: "Use frequency",
      tex: "v_w=f\\lambda",
    },
  ]}
/>

## Rules

These are the compact results from the derivation above.

<Equation label="Frequency" tex="f=\frac{1}{T}" />

<Equation label="Wave speed" tex="v_w=\frac{\lambda}{T}=f\lambda" />

<Equation label="Same-phase repeat" tex="y(x+\lambda,t)=y(x,t)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A water wave has wavelength \\(1.5\\,\\mathrm{m}\\) and period \\(0.60\\,\\mathrm{s}\\). Find the frequency and the wave speed.",
      answer: "The frequency is \\[f=\\frac{1}{T}=\\frac{1}{0.60}=1.67\\,\\mathrm{Hz}\\] and the wave speed is \\[v_w=\\frac{\\lambda}{T}=\\frac{1.5}{0.60}=2.5\\,\\mathrm{m\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Amplitude is measured from equilibrium to a crest or trough, not crest to trough.
- Wavelength is a distance in space; period is a time interval.
- Two nearby points can have different displacements even though they belong to the same wave.
- The relation \\(v_w=f\\lambda\\) links one spatial repeat with one temporal repeat.`;
