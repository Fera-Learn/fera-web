export const content = String.raw`## Principle

Gauss's law solves fields directly only when symmetry makes the flux integral simple.

## Notation

<Notation
  items={[
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "r,R", meaning: "field radius and source radius", unit: "m" },
    { symbol: "q_{\\mathrm{enc}}", meaning: "charge enclosed by the Gaussian surface", unit: "C" },
    { symbol: "\\lambda", meaning: "linear charge density", unit: "C m^{-1}" },
    { symbol: "\\sigma", meaning: "surface charge density", unit: "C m^{-2}" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "C^{2} N^{-1} m^{-2}" },
  ]}
/>

## Method

### Derivation 1: Spherical symmetry

For a spherically symmetric charge distribution, the field is radial and has one magnitude at a fixed radius.

<PhysicsDerivation
  items={[
    {
      label: "Gaussian sphere",
      tex: "A=4\\pi r^2",
    },
    {
      label: "Flux",
      tex: "\\oint\\vec E\\cdot d\\vec A=E(4\\pi r^2)",
    },
    {
      label: "Gauss's law",
      tex: "E(4\\pi r^2)=\\frac{q_{\\mathrm{enc}}}{\\epsilon_0}",
    },
    {
      label: "Spherical field",
      tex: "E=\\frac{q_{\\mathrm{enc}}}{4\\pi\\epsilon_0r^2}",
    },
  ]}
/>

### Derivation 2: Cylindrical symmetry

For a long uniform line charge, choose a coaxial cylinder. The curved side contributes; the end caps do not.

<PhysicsDerivation
  items={[
    {
      label: "Curved area",
      tex: "A_{\\mathrm{side}}=2\\pi r\\ell",
    },
    {
      label: "Enclosed charge",
      tex: "q_{\\mathrm{enc}}=\\lambda\\ell",
    },
    {
      label: "Gauss's law",
      tex: "E(2\\pi r\\ell)=\\frac{\\lambda\\ell}{\\epsilon_0}",
    },
    {
      label: "Line-charge field",
      tex: "E=\\frac{\\lambda}{2\\pi\\epsilon_0r}",
    },
  ]}
/>

### Derivation 3: Planar symmetry

For an infinite charged sheet, use a pillbox that crosses the sheet. Equal flux leaves through both caps.

<PhysicsDerivation
  items={[
    {
      label: "Pillbox caps",
      tex: "\\Phi_E=EA+EA=2EA",
    },
    {
      label: "Enclosed charge",
      tex: "q_{\\mathrm{enc}}=\\sigma A",
    },
    {
      label: "Gauss's law",
      tex: "2EA=\\frac{\\sigma A}{\\epsilon_0}",
    },
    {
      label: "Sheet field",
      tex: "E=\\frac{\\sigma}{2\\epsilon_0}",
    },
  ]}
/>

## Rules

Use these only when the stated symmetry assumptions apply.

<Equation label="Spherical symmetry" tex="E=\frac{q_{\mathrm{enc}}}{4\pi\epsilon_0r^2}" />

<Equation label="Outside sphere" tex="E=\frac{1}{4\pi\epsilon_0}\frac{Q}{r^2}\quad(r\ge R)" />

<Equation label="Uniform solid sphere" tex="E=\frac{1}{4\pi\epsilon_0}\frac{Qr}{R^3}\quad(r<R)" />

<Equation label="Line charge" tex="E=\frac{\lambda}{2\pi\epsilon_0r}" />

<Equation label="Infinite sheet" tex="E=\frac{\sigma}{2\epsilon_0}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the field \\(0.40\\,\\mathrm{m}\\) from a long line with \\(\\lambda=5.0\\,\\mathrm{nC\\,m^{-1}}\\).",
      answer: "Use a coaxial cylinder. \\[E=\\frac{\\lambda}{2\\pi\\epsilon_0r}=\\frac{5.0\\times10^{-9}}{2\\pi(8.85\\times10^{-12})(0.40)}=2.25\\times10^2\\,\\mathrm{N\\,C^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A thin spherical shell has total charge \\(Q\\). What is the electric field inside the shell?",
      answer: "A Gaussian sphere inside the shell encloses no charge. By spherical symmetry, \\(E(4\\pi r^2)=0\\), so \\(E=0\\) inside the shell.",
    },
  ]}
/>

## Checks

- First identify symmetry; then choose the Gaussian surface.
- Pull \\(E\\) out of the integral only where it is constant.
- End caps of a line-charge cylinder have zero flux because the field is radial.
- Infinite-sheet field does not decrease with distance in the ideal model.`;
