export const content = String.raw`## Principle

A traveling wave is a fixed shape shifted through space as time passes.

The important step is to turn that geometric shift into an equation before specializing to sinusoids.

## Notation

<Notation
  items={[
    { symbol: "y(x,t)", meaning: "wave displacement", unit: "m" },
    { symbol: "A", meaning: "amplitude", unit: "m" },
    { symbol: "k", meaning: "wavenumber", unit: "rad m^{-1}" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "\\phi", meaning: "phase constant", unit: "rad" },
    { symbol: "v_w", meaning: "wave speed", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Shift a profile to the right or left

Start with a shape \\(g(x)\\) at \\(t=0\\). If that exact shape moves right with speed \\(v_w\\), every feature originally at \\(x\\) appears later at \\(x+v_wt\\).

<PhysicsDerivation
  items={[
    {
      label: "Right-moving profile",
      tex: "y(x,t)=g(x-v_wt)",
    },
    {
      label: "Left-moving profile",
      tex: "y(x,t)=g(x+v_wt)",
    },
    {
      label: "Reason",
      tex: "x-v_wt=C",
      note: "A constant phase point travels with the wave.",
    },
  ]}
/>

The two curves below have the same shape. The later curve is the original profile shifted to the right, which is exactly what the argument \\(x-v_wt\\) means.

<CartesianDiagram
  height={180}
  width={360}
  xRange={{ min: 0, max: 8, step: 2, label: "x" }}
  yRange={{ min: -1.2, max: 1.2, step: 0.6, label: "y" }}
  curves={[
    {
      label: "t=0",
      points: [
        { x: 0, y: 0 },
        { x: 0.8, y: 0.59 },
        { x: 1.6, y: 0.95 },
        { x: 2.4, y: 0.95 },
        { x: 3.2, y: 0.59 },
        { x: 4.0, y: 0 },
        { x: 4.8, y: -0.59 },
        { x: 5.6, y: -0.95 },
        { x: 6.4, y: -0.95 },
        { x: 7.2, y: -0.59 },
        { x: 8.0, y: 0 },
      ],
      smooth: true,
    },
    {
      label: "later",
      color: "var(--chart-3)",
      points: [
        { x: 0, y: -0.59 },
        { x: 0.8, y: 0 },
        { x: 1.6, y: 0.59 },
        { x: 2.4, y: 0.95 },
        { x: 3.2, y: 0.95 },
        { x: 4.0, y: 0.59 },
        { x: 4.8, y: 0 },
        { x: 5.6, y: -0.59 },
        { x: 6.4, y: -0.95 },
        { x: 7.2, y: -0.95 },
        { x: 8.0, y: -0.59 },
      ],
      smooth: true,
    },
  ]}
/>

### Derivation 2: Choose a sinusoidal profile

For a sinusoidal wave, the phase must change by \\(2\\pi\\) over one wavelength and over one period.

<PhysicsDerivation
  items={[
    {
      label: "Spatial phase rate",
      tex: "k=\\frac{2\\pi}{\\lambda}",
    },
    {
      label: "Temporal phase rate",
      tex: "\\omega=\\frac{2\\pi}{T}",
    },
    {
      label: "Right-moving sinusoid",
      tex: "y(x,t)=A\\cos(kx-\\omega t+\\phi)",
    },
    {
      label: "Left-moving sinusoid",
      tex: "y(x,t)=A\\cos(kx+\\omega t+\\phi)",
    },
  ]}
/>

### Derivation 3: Recover the wave speed from the phase

A fixed phase point satisfies \\(kx-\\omega t+\\phi=C\\). Differentiating that condition gives the propagation speed.

<PhysicsDerivation
  items={[
    {
      label: "Constant phase",
      tex: "k\\,dx-\\omega\\,dt=0",
    },
    {
      label: "Phase speed",
      tex: "\\frac{dx}{dt}=\\frac{\\omega}{k}",
    },
    {
      label: "Wave-speed form",
      tex: "v_w=\\frac{\\omega}{k}",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Right-moving wave" tex="y(x,t)=g(x-v_wt)" />

<Equation label="Left-moving wave" tex="y(x,t)=g(x+v_wt)" />

<Equation label="Sinusoidal wave" tex="y(x,t)=A\cos(kx-\omega t+\phi)" />

<Equation label="Wavenumber" tex="k=\frac{2\pi}{\lambda}" />

<Equation label="Angular frequency" tex="\omega=\frac{2\pi}{T}" />

<Equation label="Phase speed" tex="v_w=\frac{\omega}{k}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "For \\(y(x,t)=0.040\\cos(5x-20t)\\), find the amplitude, wavenumber, angular frequency, speed, and direction of travel.",
      answer: "The amplitude is \\(0.040\\,\\mathrm{m}\\), the wavenumber is \\(k=5\\,\\mathrm{rad\\,m^{-1}}\\), and the angular frequency is \\(\\omega=20\\,\\mathrm{rad\\,s^{-1}}\\). The speed is \\[v_w=\\frac{\\omega}{k}=\\frac{20}{5}=4.0\\,\\mathrm{m\\,s^{-1}}\\] The form \\(kx-\\omega t\\) shows a right-moving wave.",
    },
  ]}
/>

## Checks

- The sign in the phase determines direction: \\(x-v_wt\\) moves right and \\(x+v_wt\\) moves left.
- \\(k\\) measures phase change per meter, not meters per cycle.
- \\(v_w=\\omega/k\\) is the same speed as \\(f\\lambda\\).
- A sinusoid is one special traveling profile, not the definition of all waves.`;
