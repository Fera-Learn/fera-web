export const content = String.raw`## Principle

Dispersion occurs when refractive index depends on wavelength. Different colors then travel at different speeds and refract by different amounts.

## Notation

<Notation
  items={[
    { symbol: "n(\\lambda)", meaning: "wavelength-dependent refractive index", unit: "" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "v", meaning: "wave speed in the material", unit: "m s^{-1}" },
    { symbol: "\\theta", meaning: "ray angle measured from the normal", unit: "rad" },
    { symbol: "\\Delta n", meaning: "index difference between colors", unit: "" },
  ]}
/>

## Method

### Derivation 1: Link color to wavelength

Visible colors correspond to different wavelengths. Violet light has shorter wavelength than red light.

<PhysicsDerivation
  items={[
    {
      label: "Material speed",
      tex: "v(\\lambda)=\\frac{c}{n(\\lambda)}",
    },
  ]}
/>

### Derivation 2: Use Snell's law for each wavelength

Each wavelength obeys Snell's law with its own refractive index.

<PhysicsDerivation
  items={[
    {
      label: "Color-dependent refraction",
      tex: "n_1\\sin\\theta_1=n_2(\\lambda)\\sin\\theta_2(\\lambda)",
    },
  ]}
/>

### Derivation 3: Interpret ordinary dispersion

In ordinary transparent materials, shorter wavelengths usually have larger refractive index. Violet light bends more strongly than red light in a prism.

## Rules

<Equation label="Dispersive index" tex="n=n(\lambda)" />

<Equation label="Speed in material" tex="v(\lambda)=\frac{c}{n(\lambda)}" />

<Equation label="Snell by wavelength" tex="n_1\sin\theta_1=n_2(\lambda)\sin\theta_2(\lambda)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "In ordinary glass, red light has \\(n=1.51\\) and violet light has \\(n=1.53\\). Which travels slower?",
      answer: "Violet light travels slower because \\(v=c/n\\), and violet has the larger refractive index.",
    },
    {
      title: "Example 2",
      question: "Light enters glass from air at \\(40^\\circ\\). Find refracted angles for red \\((n=1.51)\\) and violet \\((n=1.53)\\).",
      answer: "\\[\\sin\\theta_r=\\frac{\\sin40^\\circ}{1.51}=0.426\\Rightarrow\\theta_r=25.2^\\circ\\]\\[\\sin\\theta_v=\\frac{\\sin40^\\circ}{1.53}=0.420\\Rightarrow\\theta_v=24.8^\\circ\\] Violet bends slightly more toward the normal.",
    },
  ]}
/>

## Checks

- Dispersion needs refractive index to depend on wavelength.
- Frequency remains fixed when light crosses a boundary.
- Wavelength changes because the speed changes.
- A prism separates colors because different wavelengths refract by different amounts at its surfaces.`;
