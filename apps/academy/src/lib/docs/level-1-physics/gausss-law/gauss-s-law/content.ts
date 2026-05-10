export const content = String.raw`## Principle

Gauss's law links the net electric flux through a closed surface to the charge enclosed.

## Notation

<Notation
  items={[
    { symbol: "\\Phi_E", meaning: "net electric flux through a closed surface", unit: "N m^{2} C^{-1}" },
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "d\\vec A", meaning: "outward area vector", unit: "m^{2}" },
    { symbol: "q_{\\mathrm{enc}}", meaning: "net charge enclosed by the Gaussian surface", unit: "C" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "C^{2} N^{-1} m^{-2}" },
    { symbol: "S", meaning: "closed Gaussian surface", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Check a point charge with a sphere

For a point charge at the center of a sphere, the electric field is radial and has the same magnitude everywhere on the sphere.

<PhysicsDerivation
  items={[
    {
      label: "Point-charge field",
      tex: "E=\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}",
    },
    {
      label: "Spherical area",
      tex: "A=4\\pi r^2",
    },
    {
      label: "Flux product",
      tex: "\\Phi_E=EA=\\frac{q}{\\epsilon_0}",
    },
  ]}
/>

### Derivation 2: State the closed-surface law

The result depends only on the net charge inside the closed surface. Charges outside can reshape the local field, but their field lines enter and leave the surface in equal net amount.

<PhysicsDerivation
  items={[
    {
      label: "Closed flux",
      tex: "\\Phi_E=\\oint_S\\vec E\\cdot d\\vec A",
    },
    {
      label: "Gauss's law",
      tex: "\\oint_S\\vec E\\cdot d\\vec A=\\frac{q_{\\mathrm{enc}}}{\\epsilon_0}",
    },
    {
      label: "No enclosed charge",
      tex: "q_{\\mathrm{enc}}=0\\Rightarrow\\Phi_E=0",
    },
  ]}
/>

### Derivation 3: Use the law only after choosing the surface

A Gaussian surface is imaginary. It helps find \\(\vec E\\) only when symmetry makes the flux integral simple.

<PhysicsDerivation
  items={[
    {
      label: "Choose surface",
      tex: "S\\ \\text{matches the field symmetry}",
    },
    {
      label: "Simplify flux",
      tex: "\\oint_S\\vec E\\cdot d\\vec A=EA",
    },
    {
      label: "Solve field",
      tex: "E=\\frac{q_{\\mathrm{enc}}}{\\epsilon_0 A}",
    },
  ]}
/>

## Rules

These are the compact forms of Gauss's law.

<Equation label="Gauss's law" tex="\oint_S\vec E\cdot d\vec A=\frac{q_{\mathrm{enc}}}{\epsilon_0}" />

<Equation label="Net flux" tex="\Phi_E=\frac{q_{\mathrm{enc}}}{\epsilon_0}" />

<Equation label="Zero enclosed charge" tex="q_{\mathrm{enc}}=0\Rightarrow\Phi_E=0" />

<Equation label="Symmetric field step" tex="EA=\frac{q_{\mathrm{enc}}}{\epsilon_0}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A closed surface encloses \\(+4.0\\,\\mathrm{nC}\\). Find the net electric flux.",
      answer: "\\[\\Phi_E=\\frac{q_{\\mathrm{enc}}}{\\epsilon_0}=\\frac{4.0\\times10^{-9}}{8.85\\times10^{-12}}=4.5\\times10^2\\,\\mathrm{N\\,m^2\\,C^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A charge outside a closed surface creates a nonzero field on the surface. What is its contribution to net flux?",
      answer: "Its net contribution is zero. Field lines from an external charge enter and leave the closed surface in equal net amount.",
    },
  ]}
/>

## Checks

- Gauss's law uses net enclosed charge, not nearby charge.
- The surface must be closed for \\(q_\{\\mathrm\{enc\}}/\\epsilon_0\\).
- Zero net flux does not imply zero field everywhere on the surface.
- Gauss's law gives flux always, but field magnitude only when symmetry simplifies the integral.`;
