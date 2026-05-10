export const content = String.raw`## Principle

The Schrodinger equation evolves the wave function by applying the total-energy operator to it.

## Notation

<Notation
  items={[
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "V(x)", meaning: "potential energy function", unit: "J" },
    { symbol: "\\hat H", meaning: "Hamiltonian operator", unit: "J" },
    { symbol: "E", meaning: "energy eigenvalue", unit: "J" },
    { symbol: "\\psi(x,t)", meaning: "time-dependent wave function", unit: "m^{-1/2}" },
  ]}
/>

## Method

### Derivation 1: Energy operator

In one dimension, total energy is kinetic plus potential energy.

<PhysicsDerivation
  items={[
    {
      label: "Classical energy form",
      tex: "E=\\frac{p^2}{2m}+V(x)",
    },
    {
      label: "Momentum operator",
      tex: "\\hat p=-i\\hbar\\frac{\\partial}{\\partial x}",
    },
    {
      label: "Hamiltonian",
      tex: "\\hat H=-\\frac{\\hbar^2}{2m}\\frac{\\partial^2}{\\partial x^2}+V(x)",
    },
  ]}
/>

### Derivation 2: Time evolution

The Hamiltonian generates time evolution of the state.

<PhysicsDerivation
  items={[
    {
      label: "Time-dependent equation",
      tex: "i\\hbar\\frac{\\partial\\psi}{\\partial t}=\\hat H\\psi",
    },
    {
      label: "Full one-dimensional form",
      tex: "i\\hbar\\frac{\\partial\\psi}{\\partial t}= -\\frac{\\hbar^2}{2m}\\frac{\\partial^2\\psi}{\\partial x^2}+V(x)\\psi",
    },
  ]}
/>

### Derivation 3: Stationary states

When \\(V\\) has no time dependence, energy eigenstates separate into space and time factors.

<PhysicsDerivation
  items={[
    {
      label: "Separated form",
      tex: "\\psi(x,t)=\\phi(x)e^{-iEt/\\hbar}",
    },
    {
      label: "Time-independent equation",
      tex: "-\\frac{\\hbar^2}{2m}\\frac{d^2\\phi}{dx^2}+V(x)\\phi=E\\phi",
    },
  ]}
/>

## Rules

These equations use a nonrelativistic particle in one spatial dimension.

<Equation label="Time-dependent Schrodinger equation" tex="i\hbar\frac{\partial\psi}{\partial t}=\left[-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+V(x)\right]\psi" />

<Equation label="Time-independent Schrodinger equation" tex="-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2}+V(x)\phi=E\phi" />

<Equation label="Stationary-state time factor" tex="\psi(x,t)=\phi(x)e^{-iEt/\hbar}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "If \\(V=0\\), what spatial equation does a stationary state satisfy?",
      answer: "It satisfies \\(d^2\\phi/dx^2=-(2mE/\\hbar^2)\\phi\\), so free-particle stationary states are sinusoidal or complex exponential.",
    },
    {
      title: "Example 2",
      question: "Why does \\(|\\psi(x,t)|^2\\) not change in time for a single energy eigenstate?",
      answer: "The time factor has unit modulus: \\(|e^{-iEt/\\hbar}|^2=1\\), so the probability density is \\(|\\phi(x)|^2\\).",
    },
  ]}
/>

## Checks

- The kinetic-energy operator contains a second spatial derivative.
- The equation is linear, so superpositions of solutions are also solutions.
- Energy eigenvalues come from boundary conditions and normalizability.
- A stationary state may have time-dependent phase without time-dependent density.`;
