export const content = String.raw`## Principle

Thin-film interference comes from superposing light reflected from the top and bottom surfaces of a film. Reflection phase shifts and optical path difference decide whether a color is bright or dark.

## Notation

<Notation
  items={[
    { symbol: "t", meaning: "film thickness", unit: "m" },
    { symbol: "n", meaning: "film refractive index", unit: "1" },
    { symbol: "\\lambda_0", meaning: "wavelength in vacuum or air", unit: "m" },
    { symbol: "\\lambda_f", meaning: "wavelength inside the film", unit: "m" },
    { symbol: "m", meaning: "interference order", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Film wavelength and path

At near-normal incidence, the extra distance inside the film is approximately down and back through the film.

<PhysicsDerivation
  items={[
    {
      label: "Wavelength in film",
      tex: "\\lambda_f=\\frac{\\lambda_0}{n}",
    },
    {
      label: "Optical path difference",
      tex: "\\Delta=2nt",
    },
  ]}
/>

### Derivation 2: Reflection phase shifts

Reflection from a boundary to higher refractive index adds a half-cycle phase shift. Reflection from higher to lower index does not.

<PhysicsDerivation
  items={[
    {
      label: "Higher-index reflection",
      tex: "\\Delta\\phi_{\\mathrm{refl}}=\\pi",
    },
    {
      label: "Lower-index reflection",
      tex: "\\Delta\\phi_{\\mathrm{refl}}=0",
    },
  ]}
/>

### Derivation 3: One phase reversal

The most common coating case has exactly one reflection phase reversal.

<PhysicsDerivation
  items={[
    {
      label: "Reflected bright",
      tex: "2nt=\\left(m+\\frac12\\right)\\lambda_0",
    },
    {
      label: "Reflected dark",
      tex: "2nt=m\\lambda_0",
    },
  ]}
/>

## Rules

For reflected light with exactly one phase reversal:

<Equation label="Constructive reflection" tex="2nt=\left(m+\frac12\right)\lambda_0" />

<Equation label="Destructive reflection" tex="2nt=m\lambda_0" />

For reflected light with zero or two phase reversals, these conditions swap.

<Equation label="Quarter-wave coating" tex="t=\frac{\lambda_0}{4n}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the minimum nonzero thickness of an anti-reflection coating with \\(n=1.25\\) for \\(\\lambda_0=500\\,\\mathrm{nm}\\), assuming one phase reversal.",
      answer: "\\[t=\\frac{\\lambda_0}{4n}=\\frac{500\\,\\mathrm{nm}}{4(1.25)}=100\\,\\mathrm{nm}\\]",
    },
    {
      title: "Example 2",
      question: "A film has \\(n=1.40\\), \\(t=200\\,\\mathrm{nm}\\). Find \\(2nt\\).",
      answer: "\\[2nt=2(1.40)(200\\,\\mathrm{nm})=560\\,\\mathrm{nm}\\]",
    },
  ]}
/>

## Checks

- Always count reflection phase reversals before choosing bright or dark conditions.
- Use wavelength in air or vacuum in \\(2nt=m\\lambda_0\\) forms.
- At oblique incidence, path geometry changes; these rules assume near-normal incidence.
- A film can be bright for one wavelength and dark for another.`;
