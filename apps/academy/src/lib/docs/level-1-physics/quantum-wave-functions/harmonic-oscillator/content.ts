export const content = String.raw`## Principle

The quantum harmonic oscillator has equally spaced energy levels and a nonzero ground-state energy.

## Notation

<Notation
  items={[
    { symbol: "V(x)", meaning: "oscillator potential energy", unit: "J" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "s^{-1}" },
    { symbol: "n", meaning: "oscillator quantum number", unit: "1" },
    { symbol: "E_n", meaning: "nth oscillator energy", unit: "J" },
    { symbol: "x_0", meaning: "ground-state length scale", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Oscillator potential

Near a stable equilibrium, many potentials are approximately quadratic.

<PhysicsDerivation
  items={[
    {
      label: "Quadratic potential",
      tex: "V(x)=\\frac12m\\omega^2x^2",
    },
    {
      label: "Time-independent equation",
      tex: "-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2}+\\frac12m\\omega^2x^2\\psi=E\\psi",
    },
  ]}
/>

### Derivation 2: Energy ladder

The oscillator spectrum rises in equal steps of \\(\\hbar\\omega\\).

<PhysicsDerivation
  items={[
    {
      label: "Allowed energies",
      tex: "E_n=\\left(n+\\frac12\\right)\\hbar\\omega",
    },
    {
      label: "Adjacent spacing",
      tex: "E_{n+1}-E_n=\\hbar\\omega",
    },
  ]}
/>

### Derivation 3: Ground-state width

The ground state balances kinetic energy from localization with potential energy from spreading.

<PhysicsDerivation
  items={[
    {
      label: "Length scale",
      tex: "x_0=\\sqrt{\\frac{\\hbar}{m\\omega}}",
    },
    {
      label: "Gaussian ground state",
      tex: "\\psi_0(x)=\\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4}e^{-m\\omega x^2/(2\\hbar)}",
    },
  ]}
/>

## Rules

For the one-dimensional quantum harmonic oscillator:

<Equation label="Potential energy" tex="V(x)=\frac12m\omega^2x^2" />

<Equation label="Energy spectrum" tex="E_n=\left(n+\frac12\right)\hbar\omega" />

<Equation label="Ground-state length" tex="x_0=\sqrt{\frac{\hbar}{m\omega}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "What is the energy difference between \\(n=4\\) and \\(n=1\\)?",
      answer: "\\(E_4-E_1=(4-1)\\hbar\\omega=3\\hbar\\omega\\).",
    },
    {
      title: "Example 2",
      question: "Why is \\(E_0\\) not zero?",
      answer: "A zero-energy oscillator would require exact position and momentum zero, which conflicts with quantum uncertainty. The ground state has \\(E_0=\\hbar\\omega/2\\).",
    },
  ]}
/>

## Checks

- The oscillator quantum number starts at \\(n=0\\).
- Energy spacing is constant even though the wave functions change shape.
- The ground-state probability density is centered at the equilibrium point.
- Large \\(n\\) states connect to classical turning-point behavior.`;
