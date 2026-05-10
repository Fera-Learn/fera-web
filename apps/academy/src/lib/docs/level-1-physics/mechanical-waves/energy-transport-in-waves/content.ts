export const content = String.raw`## Principle

Waves transport energy, and for a sinusoidal string wave that transported energy scales with the square of the amplitude.

The key point is that each small piece of the string oscillates, but the energy associated with that motion flows along the string with the wave.

## Notation

<Notation
  items={[
    { symbol: "\\mu", meaning: "mass per unit length", unit: "kg m^{-1}" },
    { symbol: "T", meaning: "string tension", unit: "N" },
    { symbol: "A", meaning: "wave amplitude", unit: "m" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "k", meaning: "wavenumber", unit: "rad m^{-1}" },
    { symbol: "u", meaning: "energy per unit length", unit: "J m^{-1}" },
    { symbol: "P", meaning: "power carried by the wave", unit: "W" },
    { symbol: "v_w", meaning: "wave speed", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Build the energy density terms

For a short string element \\(dx\\), the kinetic energy comes from the element's transverse speed. The elastic part comes from the extra stretch created by the slope of the string.

<PhysicsDerivation
  items={[
    {
      label: "Element mass",
      tex: "dm=\\mu\\,dx",
    },
    {
      label: "Kinetic density",
      tex: "u_K=\\frac{1}{2}\\mu\\left(\\frac{\\partial y}{\\partial t}\\right)^2",
    },
    {
      label: "Extra stretch",
      tex: "ds-dx\\approx \\frac{1}{2}\\left(\\frac{\\partial y}{\\partial x}\\right)^2dx",
    },
    {
      label: "Elastic density",
      tex: "u_U=\\frac{1}{2}T\\left(\\frac{\\partial y}{\\partial x}\\right)^2",
    },
  ]}
/>

### Derivation 2: Substitute a sinusoidal wave

Take \\(y=A\\cos(kx-\\omega t)\\). Differentiate it with respect to time and position, then substitute into the energy densities.

<PhysicsDerivation
  items={[
    {
      label: "Time derivative",
      tex: "\\frac{\\partial y}{\\partial t}=A\\omega\\sin(kx-\\omega t)",
    },
    {
      label: "Position derivative",
      tex: "\\frac{\\partial y}{\\partial x}=-Ak\\sin(kx-\\omega t)",
    },
    {
      label: "Kinetic density",
      tex: "u_K=\\frac{1}{2}\\mu A^2\\omega^2\\sin^2(kx-\\omega t)",
    },
    {
      label: "Elastic density",
      tex: "u_U=\\frac{1}{2}TA^2k^2\\sin^2(kx-\\omega t)",
    },
  ]}
/>

### Derivation 3: Use the wave-speed relation to simplify

For a string wave, \\(v_w^2=T/\\mu\\) and \\(v_w=\\omega/k\\). Together they give \\(Tk^2=\\mu\\omega^2\\), so the two energy contributions are equal.

<PhysicsDerivation
  items={[
    {
      label: "Match coefficients",
      tex: "Tk^2=\\mu\\omega^2",
    },
    {
      label: "Equal parts",
      tex: "u_K=u_U=\\frac{1}{2}\\mu A^2\\omega^2\\sin^2(kx-\\omega t)",
    },
    {
      label: "Total density",
      tex: "u=\\mu A^2\\omega^2\\sin^2(kx-\\omega t)",
    },
    {
      label: "Average density",
      tex: "\\langle u\\rangle=\\frac{1}{2}\\mu A^2\\omega^2",
      note: "The average of \\(\\sin^2\\) over a full cycle is \\(1/2\\).",
    },
    {
      label: "Average power",
      tex: "\\langle P\\rangle=\\langle u\\rangle v_w=\\frac{1}{2}\\mu A^2\\omega^2 v_w",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Kinetic density" tex="u_K=\frac{1}{2}\mu\left(\frac{\partial y}{\partial t}\right)^2" />

<Equation label="Elastic density" tex="u_U=\frac{1}{2}T\left(\frac{\partial y}{\partial x}\right)^2" />

<Equation label="Average energy density" tex="\langle u\rangle=\frac{1}{2}\mu A^2\omega^2" />

<Equation label="Average power" tex="\langle P\rangle=\frac{1}{2}\mu A^2\omega^2 v_w" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A sinusoidal string wave has \\(\\mu=0.020\\,\\mathrm{kg\\,m^{-1}}\\), amplitude \\(A=0.030\\,\\mathrm{m}\\), frequency \\(12\\,\\mathrm{Hz}\\), and speed \\(40\\,\\mathrm{m\\,s^{-1}}\\). Find the average power.",
      answer: "First find \\(\\omega=2\\pi f=75.4\\,\\mathrm{rad\\,s^{-1}}\\). Then \\[\\langle P\\rangle=\\frac{1}{2}\\mu A^2\\omega^2 v_w=\\frac{1}{2}(0.020)(0.030)^2(75.4)^2(40)=2.04\\,\\mathrm{W}\\]",
    },
  ]}
/>

## Checks

- Doubling amplitude makes the average power four times larger.
- The average transported energy is nonzero even though each element of the string oscillates about equilibrium.
- Kinetic and elastic contributions are equal on average for a sinusoidal string wave.
- This result is specific to linear string waves, not a universal formula for every medium.`;
