export const content = String.raw`## Principle

A sinusoidal electromagnetic wave has electric and magnetic fields that oscillate together with the same phase, frequency, wavelength, and propagation speed.

## Notation

<Notation
  items={[
    { symbol: "E_0", meaning: "electric-field amplitude", unit: "V m^{-1}" },
    { symbol: "B_0", meaning: "magnetic-field amplitude", unit: "T" },
    { symbol: "\\phi", meaning: "phase", unit: "rad" },
    { symbol: "T", meaning: "period", unit: "s" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Field forms

For a wave moving in the \\(+x\\) direction, choose \\(\\vec E\\) along \\(y\\) and \\(\\vec B\\) along \\(z\\).

<PhysicsDerivation
  items={[
    {
      label: "Electric field",
      tex: "E_y(x,t)=E_0\\cos(kx-\\omega t+\\phi)",
    },
    {
      label: "Magnetic field",
      tex: "B_z(x,t)=B_0\\cos(kx-\\omega t+\\phi)",
    },
  ]}
/>

### Derivation 2: Amplitude relation

The field amplitudes are linked by the wave speed.

<PhysicsDerivation
  items={[
    {
      label: "Vacuum relation",
      tex: "E_0=cB_0",
    },
    {
      label: "Instantaneous relation",
      tex: "E=cB",
    },
  ]}
/>

### Derivation 3: Periodic quantities

Use the same wave relationships as mechanical sinusoidal waves.

<PhysicsDerivation
  items={[
    {
      label: "Period and frequency",
      tex: "T=\\frac{1}{f}",
    },
    {
      label: "Angular frequency",
      tex: "\\omega=2\\pi f",
    },
    {
      label: "Wave number",
      tex: "k=\\frac{2\\pi}{\\lambda}",
    },
  ]}
/>

## Rules

<Equation label="Sinusoidal electric field" tex="E_y=E_0\cos(kx-\omega t+\phi)" />

<Equation label="Sinusoidal magnetic field" tex="B_z=B_0\cos(kx-\omega t+\phi)" />

<Equation label="Amplitude ratio" tex="\frac{E_0}{B_0}=c" />

<Equation label="Wave speed" tex="c=\lambda f=\frac{\omega}{k}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A sinusoidal wave has \\(\\lambda=600\\,\\mathrm{nm}\\). Find its frequency in vacuum.",
      answer: "\\[f=\\frac{c}{\\lambda}=\\frac{3.0\\times10^8}{600\\times10^{-9}}=5.0\\times10^{14}\\,\\mathrm{Hz}\\]",
    },
    {
      title: "Example 2",
      question: "A wave has \\(B_0=2.0\\times10^{-7}\\,\\mathrm{T}\\). Find \\(E_0\\).",
      answer: "\\[E_0=cB_0=(3.0\\times10^8)(2.0\\times10^{-7})=60\\,\\mathrm{V\\,m^{-1}}\\]",
    },
  ]}
/>

## Checks

- The electric and magnetic fields reach maxima and zeros together in a traveling sinusoidal plane wave.
- A negative sign in \\(kx-\\omega t\\) means travel in the \\(+x\\) direction.
- A positive sign in \\(kx+\\omega t\\) means travel in the \\(-x\\) direction.
- Use radians when working with \\(k\\), \\(\\omega\\), and phase.`;
