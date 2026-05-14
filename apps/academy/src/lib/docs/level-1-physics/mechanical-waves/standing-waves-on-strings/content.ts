export const content = String.raw`## Principle

Standing waves form when equal waves of the same frequency travel in opposite directions.

On a string, reflections at the ends can supply the oppositely traveling wave and lock the pattern into fixed nodes and antinodes.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "amplitude of each traveling wave", unit: "m" },
    { symbol: "k", meaning: "wavenumber", unit: "rad m^{-1}" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "L", meaning: "string length", unit: "m" },
    { symbol: "f_1", meaning: "fundamental frequency", unit: "Hz" },
    { symbol: "v_w", meaning: "wave speed", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Add two oppositely traveling waves

Take two waves with equal amplitude and frequency, one moving right and one moving left.

<PhysicsDerivation
  items={[
    {
      label: "Right-moving wave",
      tex: "y_1=A\\sin(kx-\\omega t)",
    },
    {
      label: "Left-moving wave",
      tex: "y_2=A\\sin(kx+\\omega t)",
    },
    {
      label: "Add them",
      tex: "y=y_1+y_2=2A\\sin(kx)\\cos(\\omega t)",
      note: "This is no longer a traveling profile. The spatial and temporal parts separate.",
    },
  ]}
/>

### Derivation 2: Identify nodes and antinodes

The factor \\(\\sin(kx)\\) controls how large the oscillation is at each position.

<PhysicsDerivation
  items={[
    {
      label: "Nodes",
      tex: "\\sin(kx)=0",
    },
    {
      label: "Node positions",
      tex: "x=\\frac{m\\pi}{k}=m\\frac{\\lambda}{2}",
    },
    {
      label: "Antinodes",
      tex: "|\\sin(kx)|=1",
    },
  ]}
/>

The standing-wave snapshot below has fixed nodes at the ends and one antinode in the middle.

<CartesianDiagram
  height={180}
  width={340}
  xRange={{
    min: 0,
    max: 1,
    label: "x",
    ticks: [
      { value: 0, label: "0" },
      { value: 0.5, label: "L/2" },
      { value: 1, label: "L" },
    ],
  }}
  yRange={{ min: -0.2, max: 1.2, step: 0.4, label: "y" }}
  curves={[
    {
      points: [
        { x: 0, y: 0 },
        { x: 0.125, y: 0.38 },
        { x: 0.25, y: 0.71 },
        { x: 0.375, y: 0.92 },
        { x: 0.5, y: 1.0 },
        { x: 0.625, y: 0.92 },
        { x: 0.75, y: 0.71 },
        { x: 0.875, y: 0.38 },
        { x: 1.0, y: 0 },
      ],
      smooth: true,
    },
  ]}
  points={[
    { x: 0, y: 0, label: "node" },
    { x: 0.5, y: 1.0, label: "antinode" },
    { x: 1.0, y: 0, label: "node" },
  ]}
/>

### Derivation 3: Read the fundamental for a string with fixed ends

For the lowest standing mode, the string holds half a wavelength between its ends.

<PhysicsDerivation
  items={[
    {
      label: "Fundamental geometry",
      tex: "L=\\frac{\\lambda_1}{2}",
    },
    {
      label: "Fundamental wavelength",
      tex: "\\lambda_1=2L",
    },
    {
      label: "Fundamental frequency",
      tex: "f_1=\\frac{v_w}{2L}",
    },
  ]}
/>

## Rules

These are the compact results from the derivation above.

<Equation label="Standing-wave form" tex="y=2A\sin(kx)\cos(\omega t)" />

<Equation label="Node positions" tex="x=m\frac{\lambda}{2}" />

<Equation label="Fundamental wavelength" tex="\lambda_1=2L" />

<Equation label="Fundamental frequency" tex="f_1=\frac{v_w}{2L}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A string of length \\(0.80\\,\\mathrm{m}\\) carries waves at \\(120\\,\\mathrm{m\\,s^{-1}}\\). Find its fundamental frequency.",
      answer: "For the fundamental, \\[f_1=\\frac{v_w}{2L}=\\frac{120}{2(0.80)}=75\\,\\mathrm{Hz}\\]",
    },
  ]}
/>

## Checks

- Nodes do not move; antinodes have the largest oscillation amplitude.
- A standing wave is not a single traveling crest moving along the string.
- The spacing between neighboring nodes is \\(\\lambda/2\\).
- The fundamental mode is the lowest-frequency mode with nodes at both ends.`;
