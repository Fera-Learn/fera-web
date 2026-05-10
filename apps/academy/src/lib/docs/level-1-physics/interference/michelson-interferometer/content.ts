export const content = String.raw`## Principle

A Michelson interferometer splits one beam into two perpendicular arms and recombines them. Moving a mirror changes the optical path difference and shifts the interference fringes.

## Notation

<Notation
  items={[
    { symbol: "L_1,L_2", meaning: "arm lengths", unit: "m" },
    { symbol: "\\Delta L", meaning: "change in one mirror position", unit: "m" },
    { symbol: "\\Delta", meaning: "optical path difference", unit: "m" },
    { symbol: "N", meaning: "number of fringes shifted", unit: "1" },
    { symbol: "\\lambda", meaning: "wavelength of light", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Round-trip path

Each beam travels to a mirror and back, so a mirror displacement changes the path twice.

<PhysicsDerivation
  items={[
    {
      label: "Path difference",
      tex: "\\Delta=2(L_2-L_1)",
    },
    {
      label: "Mirror displacement",
      tex: "\\Delta(\\mathrm{path})=2\\Delta L",
    },
  ]}
/>

### Derivation 2: Fringe shift

One fringe passes when the path difference changes by one wavelength.

<PhysicsDerivation
  items={[
    {
      label: "Fringe count",
      tex: "N=\\frac{2\\Delta L}{\\lambda}",
    },
    {
      label: "Mirror displacement",
      tex: "\\Delta L=\\frac{N\\lambda}{2}",
    },
  ]}
/>

### Derivation 3: Index changes

Putting a medium in one arm changes the optical path length.

<PhysicsDerivation
  items={[
    {
      label: "Single-pass optical path change",
      tex: "\\Delta\\ell=(n-1)L",
    },
    {
      label: "Double-pass fringe shift",
      tex: "N=\\frac{2L(n-1)}{\\lambda}",
    },
  ]}
/>

## Rules

<Equation label="Michelson path difference" tex="\Delta=2(L_2-L_1)" />

<Equation label="Mirror-fringe relation" tex="N=\frac{2\Delta L}{\lambda}" />

<Equation label="Mirror displacement" tex="\Delta L=\frac{N\lambda}{2}" />

<Equation label="Index fringe shift" tex="N=\frac{2L(n-1)}{\lambda}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A Michelson mirror is moved \\(250\\,\\mathrm{nm}\\) using \\(500\\,\\mathrm{nm}\\) light. How many fringes shift?",
      answer: "\\[N=\\frac{2\\Delta L}{\\lambda}=\\frac{2(250\\,\\mathrm{nm})}{500\\,\\mathrm{nm}}=1\\]",
    },
    {
      title: "Example 2",
      question: "Using \\(632.8\\,\\mathrm{nm}\\) light, a mirror movement causes 20 fringes to pass. Find the mirror displacement.",
      answer: "\\[\\Delta L=\\frac{N\\lambda}{2}=\\frac{20(632.8\\,\\mathrm{nm})}{2}=6.33\\,\\mu\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- The factor of 2 appears because the light travels to the mirror and back.
- A full fringe shift corresponds to one wavelength of optical path difference.
- Michelson measurements compare optical path lengths, not just physical distances.
- The same instrument can measure tiny displacements, wavelengths, and refractive-index changes.`;
