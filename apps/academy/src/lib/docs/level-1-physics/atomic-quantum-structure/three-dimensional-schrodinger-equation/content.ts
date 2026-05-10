export const content = String.raw`## Principle

The three-dimensional Schrodinger equation applies the same energy-operator idea as the one-dimensional equation, but the kinetic-energy operator uses the full spatial curvature of the wave function.

For a time-independent potential, stationary states solve an eigenvalue equation for allowed energies and spatial wave functions.

## Notation

<Notation
  items={[
    { symbol: "\\psi(\\vec r,t)", meaning: "time-dependent wave function", unit: "m^{-3/2}" },
    { symbol: "\\phi(\\vec r)", meaning: "stationary-state spatial wave function", unit: "m^{-3/2}" },
    { symbol: "U(\\vec r)", meaning: "potential energy", unit: "J" },
    { symbol: "\\nabla^2", meaning: "three-dimensional Laplacian", unit: "m^{-2}" },
    { symbol: "\\hat H", meaning: "Hamiltonian operator", unit: "J" },
    { symbol: "E", meaning: "energy eigenvalue", unit: "J" },
  ]}
/>

## Method

### Derivation 1: Build the Hamiltonian

In three dimensions, the kinetic-energy operator uses the Laplacian.

<PhysicsDerivation
  items={[
    {
      label: "Classical energy",
      tex: "E=\\frac{p_x^2+p_y^2+p_z^2}{2m}+U(\\vec r)",
    },
    {
      label: "Laplacian",
      tex: "\\nabla^2=\\frac{\\partial^2}{\\partial x^2}+\\frac{\\partial^2}{\\partial y^2}+\\frac{\\partial^2}{\\partial z^2}",
    },
    {
      label: "Hamiltonian",
      tex: "\\hat H=-\\frac{\\hbar^2}{2m}\\nabla^2+U(\\vec r)",
    },
  ]}
/>

### Derivation 2: Separate stationary states

If the potential is not time dependent, energy eigenstates separate into a spatial wave function and a phase factor.

<PhysicsDerivation
  items={[
    {
      label: "Separated state",
      tex: "\\psi(\\vec r,t)=\\phi(\\vec r)e^{-iEt/\\hbar}",
    },
    {
      label: "Time-independent equation",
      tex: "-\\frac{\\hbar^2}{2m}\\nabla^2\\phi+U\\phi=E\\phi",
    },
  ]}
/>

### Derivation 3: Normalize probability

Probability density is integrated over volume, not just along a line.

<PhysicsDerivation
  items={[
    {
      label: "Probability density",
      tex: "\\rho(\\vec r)=|\\psi(\\vec r,t)|^2",
    },
    {
      label: "Normalization",
      tex: "\\int |\\psi(\\vec r,t)|^2\\,dV=1",
    },
  ]}
/>

## Rules

<Equation label="Three-dimensional TDSE" tex="i\hbar\frac{\partial\psi}{\partial t}=\left[-\frac{\hbar^2}{2m}\nabla^2+U(\vec r)\right]\psi" />

<Equation label="Three-dimensional TISE" tex="-\frac{\hbar^2}{2m}\nabla^2\phi+U(\vec r)\phi=E\phi" />

<Equation label="Laplacian" tex="\nabla^2=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}+\frac{\partial^2}{\partial z^2}" />

<Equation label="Normalization" tex="\int|\psi|^2\,dV=1" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A free particle has \\(\\phi=e^{i\\vec k\\cdot\\vec r}\\). What does \\(\\nabla^2\\phi\\) equal?",
      answer: "\\[\\nabla^2\\phi=-k^2\\phi\\] so \\[E=\\frac{\\hbar^2k^2}{2m}\\].",
    },
    {
      title: "Example 2",
      question: "What normalization condition applies to a bound three-dimensional state?",
      answer: "\\[\\int |\\psi(x,y,z,t)|^2\\,dx\\,dy\\,dz=1\\]",
    },
  ]}
/>

## Checks

- The Laplacian replaces the one-dimensional second derivative.
- Normalization uses a volume integral.
- Energy eigenvalues come from boundary conditions and normalizability.
- A stationary state's probability density can be time independent even though its phase changes.`;
