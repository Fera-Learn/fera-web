export const content = String.raw`## Principle

Ampere's law relates the circulation of the magnetic field around a closed path to the current enclosed by that path.

## Notation

<Notation
  items={[
    { symbol: "\\oint \\vec B\\cdot d\\vec l", meaning: "magnetic circulation around a closed path", unit: "T m" },
    { symbol: "I_{\\mathrm{enc}}", meaning: "net current through the surface bounded by the path", unit: "A" },
    { symbol: "d\\vec l", meaning: "small path element in the chosen loop direction", unit: "m" },
    { symbol: "\\mu_0", meaning: "permeability of free space", unit: "N A^{-2}" },
  ]}
/>

## Method

### Derivation 1: State the law

Choose a closed path and a direction around it. The enclosed current is signed by the right-hand rule relative to that path direction.

<PhysicsDerivation
  items={[
    {
      label: "Ampere's law",
      tex: "\\oint \\vec B\\cdot d\\vec l=\\mu_0 I_{\\mathrm{enc}}",
    },
  ]}
/>

### Derivation 2: Choose a useful Amperian loop

Ampere's law is most useful when symmetry makes \\(\vec B\\) tangent to the loop and constant in magnitude along parts of it.

<PhysicsDerivation
  items={[
    {
      label: "Constant tangent field",
      tex: "\\oint \\vec B\\cdot d\\vec l=B\\oint dl",
    },
    {
      label: "Circular path",
      tex: "\\oint dl=2\\pi r",
    },
  ]}
/>

### Derivation 3: Recover the straight-wire field

For a long straight wire, a circular loop of radius \\(r\\) encloses current \\(I\\). The field is tangent and constant on the circle.

<PhysicsDerivation
  items={[
    {
      label: "Apply Ampere's law",
      tex: "B(2\\pi r)=\\mu_0 I",
    },
    {
      label: "Straight-wire result",
      tex: "B=\\frac{\\mu_0 I}{2\\pi r}",
    },
  ]}
/>

## Rules

<Equation label="Ampere's law" tex="\oint \vec B\cdot d\vec l=\mu_0 I_{\mathrm{enc}}" />

<Equation label="Signed current" tex="I_{\mathrm{enc}}=\sum I_{\mathrm{through\ surface}}" />

<Equation label="Best use case" tex="\vec B\cdot d\vec l=B\,dl\quad\text{when symmetry allows}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A circular Amperian loop surrounds a long wire carrying \\(6.0\\,\\mathrm A\\). What is \\(\\oint\\vec B\\cdot d\\vec l\\)?",
      answer: "\\[\\oint\\vec B\\cdot d\\vec l=\\mu_0 I_{\\mathrm{enc}}=(4\\pi\\times10^{-7})(6.0)=7.5\\times10^{-6}\\,\\mathrm{T\\,m}\\]",
    },
    {
      title: "Example 2",
      question: "Why is Ampere's law not usually enough by itself for a short bent wire?",
      answer: "The law is always true, but without strong symmetry \\(B\\) is not constant or simply directed along a convenient path. The integral cannot be simplified enough to solve for \\(B\\) directly.",
    },
  ]}
/>

## Checks

- The path is closed.
- The current must pierce a surface bounded by the path.
- Currents are signed by the right-hand rule.
- Ampere's law is powerful for high-symmetry fields, not a universal shortcut for every geometry.`;
