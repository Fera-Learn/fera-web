export const content = String.raw`## Principle

Hard-wall boundary conditions force standing waves, so a confined particle has discrete energies.

## Notation

<Notation
  items={[
    { symbol: "L", meaning: "box width", unit: "m" },
    { symbol: "n", meaning: "positive integer quantum number", unit: "1" },
    { symbol: "k_n", meaning: "allowed wave number", unit: "m^{-1}" },
    { symbol: "\\lambda_n", meaning: "allowed de Broglie wavelength", unit: "m" },
    { symbol: "\\psi_n", meaning: "nth normalized spatial eigenfunction", unit: "m^{-1/2}" },
    { symbol: "E_n", meaning: "nth energy eigenvalue", unit: "J" },
  ]}
/>

## Method

### Derivation 1: Boundary conditions

For an infinite square well, the wave function must vanish at both walls.

<PhysicsDerivation
  items={[
    {
      label: "General sinusoidal form",
      tex: "\\psi(x)=A\\sin kx+B\\cos kx",
    },
    {
      label: "Left wall",
      tex: "\\psi(0)=0\\Rightarrow B=0",
    },
    {
      label: "Right wall",
      tex: "\\psi(L)=0\\Rightarrow \\sin(kL)=0",
    },
  ]}
/>

### Derivation 2: Quantization

The right-wall condition selects only integer half-wavelengths.

<PhysicsDerivation
  items={[
    {
      label: "Allowed wave number",
      tex: "k_n=\\frac{n\\pi}{L}",
    },
    {
      label: "Allowed wavelength",
      tex: "\\lambda_n=\\frac{2L}{n}",
    },
  ]}
/>

### Derivation 3: Energy levels

Kinetic energy is set by the allowed momentum magnitude.

<PhysicsDerivation
  items={[
    {
      label: "Momentum magnitude",
      tex: "p_n=\\hbar k_n",
    },
    {
      label: "Energy",
      tex: "E_n=\\frac{p_n^2}{2m}=\\frac{n^2\\pi^2\\hbar^2}{2mL^2}",
    },
  ]}
/>

## Rules

For a particle in an infinite well from \\(0\\) to \\(L\\):

<Equation label="Eigenfunctions" tex="\psi_n(x)=\sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right)" />

<Equation label="Energy levels" tex="E_n=\frac{n^2\pi^2\hbar^2}{2mL^2}" />

<Equation label="Center expectation" tex="\langle x\rangle=\frac{L}{2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "What is the ratio \\(E_3/E_1\\) for an infinite square well?",
      answer: "Because \\(E_n\\propto n^2\\), \\(E_3/E_1=9\\).",
    },
    {
      title: "Example 2",
      question: "How many interior nodes does \\(\\psi_4\\) have?",
      answer: "The state \\(n=4\\) has \\(n-1=3\\) interior nodes.",
    },
  ]}
/>

## Checks

- The quantum number starts at \\(n=1\\), not \\(n=0\\).
- The ground-state energy is nonzero because confinement forces curvature.
- Larger boxes have more closely spaced energy levels.
- The probability density is symmetric about the center for every stationary state.`;
