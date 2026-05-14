export const content = String.raw`## Principle

Normal modes are the discrete standing-wave patterns allowed by the string's boundary conditions.

The string length is fixed, so only wavelengths that fit an integer number of half-waves can survive as steady standing patterns.

## Notation

<Notation
  items={[
    { symbol: "n", meaning: "mode number", unit: "1" },
    { symbol: "L", meaning: "string length", unit: "m" },
    { symbol: "\\lambda_n", meaning: "wavelength of mode \\(n\\)", unit: "m" },
    { symbol: "f_n", meaning: "frequency of mode \\(n\\)", unit: "Hz" },
    { symbol: "v_w", meaning: "wave speed on the string", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Count how many half-waves fit in the string

For a string fixed at both ends, each end must be a node. The allowed shapes are therefore made of whole numbers of half-wavelengths.

<PhysicsDerivation
  items={[
    {
      label: "Mode geometry",
      tex: "L=n\\frac{\\lambda_n}{2}",
    },
    {
      label: "Allowed wavelengths",
      tex: "\\lambda_n=\\frac{2L}{n}",
    },
  ]}
/>

The first three modes are shown below. Each higher mode inserts one extra interior node.

<CartesianDiagram
  height={200}
  width={360}
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
  yRange={{ min: -1.2, max: 1.2, step: 0.6, label: "y" }}
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
    {
      color: "var(--chart-3)",
      points: [
        { x: 0, y: 0 },
        { x: 0.125, y: 0.71 },
        { x: 0.25, y: 1.0 },
        { x: 0.375, y: 0.71 },
        { x: 0.5, y: 0 },
        { x: 0.625, y: -0.71 },
        { x: 0.75, y: -1.0 },
        { x: 0.875, y: -0.71 },
        { x: 1.0, y: 0 },
      ],
      smooth: true,
    },
    {
      color: "var(--chart-5)",
      points: [
        { x: 0, y: 0 },
        { x: 0.083, y: 0.71 },
        { x: 0.167, y: 1.0 },
        { x: 0.25, y: 0.71 },
        { x: 0.333, y: 0 },
        { x: 0.417, y: -0.71 },
        { x: 0.5, y: -1.0 },
        { x: 0.583, y: -0.71 },
        { x: 0.667, y: 0 },
        { x: 0.75, y: 0.71 },
        { x: 0.833, y: 1.0 },
        { x: 0.917, y: 0.71 },
        { x: 1.0, y: 0 },
      ],
      smooth: true,
    },
  ]}
/>

### Derivation 2: Convert the allowed wavelengths to allowed frequencies

Use the wave-speed relation for a string.

<PhysicsDerivation
  items={[
    {
      label: "Wave-speed relation",
      tex: "v_w=f_n\\lambda_n",
    },
    {
      label: "Substitute allowed wavelength",
      tex: "f_n=\\frac{v_w}{\\lambda_n}=\\frac{nv_w}{2L}",
    },
  ]}
/>

### Derivation 3: Interpret the harmonic sequence

The frequencies are integer multiples of the fundamental.

<PhysicsDerivation
  items={[
    {
      label: "Fundamental",
      tex: "f_1=\\frac{v_w}{2L}",
    },
    {
      label: "Harmonics",
      tex: "f_n=nf_1",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Allowed wavelengths" tex="\lambda_n=\frac{2L}{n}" />

<Equation label="Allowed frequencies" tex="f_n=\frac{nv_w}{2L}" />

<Equation label="Harmonic sequence" tex="f_n=nf_1" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A string of length \\(0.75\\,\\mathrm{m}\\) supports waves at \\(180\\,\\mathrm{m\\,s^{-1}}\\). Find the first three normal-mode frequencies.",
      answer: "First find the fundamental: \\[f_1=\\frac{v_w}{2L}=\\frac{180}{2(0.75)}=120\\,\\mathrm{Hz}\\] Then \\[f_2=2f_1=240\\,\\mathrm{Hz},\\qquad f_3=3f_1=360\\,\\mathrm{Hz}\\]",
    },
  ]}
/>

## Checks

- Normal modes are discrete because the boundary conditions restrict the wavelengths.
- Higher mode number means shorter wavelength and higher frequency.
- The relation \\(f_n=nf_1\\) holds for an ideal string fixed at both ends.
- Extra interior nodes appear as the mode number increases.`;
