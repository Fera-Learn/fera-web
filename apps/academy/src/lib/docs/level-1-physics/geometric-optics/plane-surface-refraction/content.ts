export const content = String.raw`## Principle

Refraction changes ray direction because light speed changes at a boundary.

## Notation

<Notation
  items={[
    { symbol: "n", meaning: "index of refraction", unit: "1" },
    { symbol: "v", meaning: "speed of light in a medium", unit: "m s^{-1}" },
    { symbol: "\\theta_1", meaning: "incident angle from the normal", unit: "rad" },
    { symbol: "\\theta_2", meaning: "refracted angle from the normal", unit: "rad" },
    { symbol: "\\lambda", meaning: "wavelength in the medium", unit: "m" },
    { symbol: "f", meaning: "light frequency", unit: "Hz" },
  ]}
/>

## Method

### Derivation 1: Index and speed

The refractive index compares vacuum light speed with the speed in a medium.

<PhysicsDerivation
  items={[
    {
      label: "Index definition",
      tex: "n=\\frac{c}{v}",
    },
    {
      label: "Medium speed",
      tex: "v=\\frac{c}{n}",
    },
  ]}
/>

### Derivation 2: Snell's law

Frequency is continuous across a boundary. The wavelength changes with speed, changing the ray direction.

<PhysicsDerivation
  items={[
    {
      label: "Boundary law",
      tex: "n_1\\sin\\theta_1=n_2\\sin\\theta_2",
    },
    {
      label: "Wavelength in medium",
      tex: "\\lambda=\\frac{\\lambda_0}{n}",
    },
    {
      label: "Frequency unchanged",
      tex: "f_1=f_2",
    },
  ]}
/>

## Rules

<Equation label="Refractive index" tex="n=\frac{c}{v}" />

<Equation label="Snell's law" tex="n_1\sin\theta_1=n_2\sin\theta_2" />

<Equation label="Medium wavelength" tex="\lambda=\lambda_0/n" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Light goes from air into glass \\((n=1.50)\\) at \\(30^\\circ\\). Find the refracted angle.",
      answer: "\\[1.00\\sin30^\\circ=1.50\\sin\\theta_2\\]\\[\\theta_2=19.5^\\circ\\]",
    },
    {
      title: "Example 2",
      question: "Find light speed in water with \\(n=1.33\\).",
      answer: "\\[v=\\frac{c}{n}=\\frac{3.00\\times10^8}{1.33}=2.26\\times10^8\\,\\mathrm{m\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Entering a larger \\(n\\) bends a ray toward the normal.
- Frequency does not change at a boundary.
- Wavelength and speed change in the same ratio.`;
