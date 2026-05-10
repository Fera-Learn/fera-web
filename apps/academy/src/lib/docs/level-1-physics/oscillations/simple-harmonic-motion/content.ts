export const content = String.raw`## Principle

Simple harmonic motion has acceleration opposite and proportional to displacement.

## Notation

<Notation
  items={[
    { symbol: "x", meaning: "displacement from equilibrium", unit: "m" },
    { symbol: "v", meaning: "velocity", unit: "m s^{-1}" },
    { symbol: "a", meaning: "acceleration", unit: "m s^{-2}" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "k", meaning: "spring constant", unit: "N m^{-1}" },
    { symbol: "m", meaning: "oscillating mass", unit: "kg" },
    { symbol: "A", meaning: "amplitude", unit: "m" },
    { symbol: "\\phi", meaning: "phase constant", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Start from a restoring force

A restoring force points back toward equilibrium. For a spring-like oscillator, that force is linear in displacement.

<PhysicsDerivation
  items={[
    {
      label: "Linear restoring force",
      tex: "F=-kx",
    },
    {
      label: "Apply Newton's law",
      tex: "m\\frac{d^2x}{dt^2}=-kx",
    },
    {
      label: "Isolate acceleration",
      tex: "\\frac{d^2x}{dt^2}=-\\frac{k}{m}x",
    },
    {
      label: "Define angular frequency",
      tex: "\\omega^2=\\frac{k}{m}",
      note: "This defines \\(\\omega\\) as the characteristic frequency of the system.",
    },
    {
      label: "Standard SHM equation",
      tex: "\\frac{d^2x}{dt^2}=-\\omega^2x",
    },
  ]}
/>

### Derivation 2: Solve the differential equation

The general solution to \\(\frac{d^2x}{dt^2}=-\\omega^2x\\) is a linear combination of sine and cosine.

<PhysicsDerivation
  items={[
    {
      label: "Try exponential form",
      tex: "x=e^{\\lambda t}\\Rightarrow\\lambda^2e^{\\lambda t}=-\\omega^2e^{\\lambda t}",
    },
    {
      label: "Characteristic equation",
      tex: "\\lambda^2=-\\omega^2\\Rightarrow\\lambda=\\pm i\\omega",
      note: "Complex roots mean the solution is oscillatory, not exponential.",
    },
    {
      label: "General solution",
      tex: "x(t)=C_1\\cos\\omega t+C_2\\sin\\omega t",
      note: "Any linear combination of sine and cosine is also a solution.",
    },
    {
      label: "Combine using phase",
      tex: "C_1\\cos\\omega t+C_2\\sin\\omega t=A\\cos(\\omega t+\\phi)",
      note: "The amplitude A and phase constant \\(\\phi\\) are determined by initial conditions.",
    },
    {
      label: "Find A and \\(\\phi\\)",
      tex: "A=\\sqrt{C_1^2+C_2^2},\\qquad\\tan\\phi=\\frac{C_2}{C_1}",
    },
  ]}
/>

### Derivation 3: Verify the sinusoidal solution

Differentiating twice reproduces the original function with a negative factor, confirming the sinusoidal form.

<PhysicsDerivation
  items={[
    {
      label: "Sinusoidal position",
      tex: "x=A\\cos(\\omega t+\\phi)",
    },
    {
      label: "First derivative (velocity)",
      tex: "v=\\frac{dx}{dt}=-A\\omega\\sin(\\omega t+\\phi)",
    },
    {
      label: "Second derivative (acceleration)",
      tex: "a=\\frac{d^2x}{dt^2}=-A\\omega^2\\cos(\\omega t+\\phi)",
    },
    {
      label: "Recover displacement",
      tex: "a=-\\omega^2x",
      note: "This matches the SHM condition exactly.",
    },
  ]}
/>

### Derivation 4: Convert angular frequency to period

One full oscillation is one phase increase of \\(2\\pi\\).

<PhysicsDerivation
  items={[
    {
      label: "One cycle",
      tex: "\\omega T=2\\pi",
    },
    {
      label: "Period",
      tex: "T=\\frac{2\\pi}{\\omega}",
    },
    {
      label: "Spring period",
      tex: "T=2\\pi\\sqrt{\\frac{m}{k}}",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="SHM condition" tex="a=-\omega^2x" />

<Equation label="Angular frequency" tex="\omega=\sqrt{\frac{k}{m}}" />

<Equation label="Position solution" tex="x=A\cos(\omega t+\phi)" />

<Equation label="Velocity solution" tex="v=-A\omega\sin(\omega t+\phi)" />

<Equation label="Oscillation period" tex="T=\frac{2\pi}{\omega}=2\pi\sqrt{\frac{m}{k}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A mass \\(m\\) on a spring \\(k\\) starts from rest at \\(x=A\\). Write \\(x(t)\\).",
      answer: "Starting from rest at maximum displacement means \\(v(0)=0\\) and \\(x(0)=A\\). With \\(x(t)=A\\cos(\\omega t+\\phi)\\), we need \\(\\cos\\phi=1\\) so \\(\\phi=0\\). The result is \\[x(t)=A\\cos\\left(\\sqrt{\\frac{k}{m}}t\\right)\\]",
    },
    {
      title: "Example 2",
      question: "A mass-spring system has \\(k=200\\,\\mathrm{N/m}\\) and \\(m=0.50\\,\\mathrm{kg}\\). Find the period.",
      answer: "\\[\\omega=\\sqrt{\\frac{k}{m}}=\\sqrt{\\frac{200}{0.50}}=20\\,\\mathrm{rad/s}\\]\[T=\\frac{2\\pi}{\\omega}=\\frac{2\\pi}{20}=0.31\\,\\mathrm{s}\]",
    },
  ]}
/>

## Checks

- Acceleration always points toward equilibrium.
- Larger mass lowers the oscillation frequency.
- Larger spring constant raises the oscillation frequency.
- The phase constant \\(\\phi\\) is determined by initial conditions, not the system properties.
- SHM requires a linear restoring force model.`;
