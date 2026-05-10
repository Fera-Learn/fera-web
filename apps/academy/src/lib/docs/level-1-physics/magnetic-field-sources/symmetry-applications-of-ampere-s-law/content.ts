export const content = String.raw`## Principle

Ampere's law becomes a field calculator when symmetry fixes the field direction and magnitude along a chosen loop.

## Notation

<Notation
  items={[
    { symbol: "r", meaning: "radial distance from an axis", unit: "m" },
    { symbol: "R", meaning: "radius of a current-carrying cylinder", unit: "m" },
    { symbol: "n", meaning: "turns per unit length in a solenoid", unit: "m^{-1}" },
    { symbol: "N", meaning: "number of turns", unit: "" },
    { symbol: "I", meaning: "current", unit: "A" },
    { symbol: "\\mu_0", meaning: "permeability of free space", unit: "N A^{-2}" },
  ]}
/>

## Method

### Derivation 1: Long straight wire

Choose a circle centered on the wire. The field is tangent and has constant magnitude on the circle.

<PhysicsDerivation
  items={[
    {
      label: "Long wire",
      tex: "B=\\frac{\\mu_0 I}{2\\pi r}",
    },
  ]}
/>

### Derivation 2: Inside a uniform current cylinder

If current density is uniform through radius \\(R\\), only the current inside radius \\(r\\) is enclosed by a circular Amperian loop.

<PhysicsDerivation
  items={[
    {
      label: "Enclosed current for \\(r<R\\)",
      tex: "I_{\\mathrm{enc}}=I\\frac{r^2}{R^2}",
    },
    {
      label: "Inside field",
      tex: "B=\\frac{\\mu_0 I r}{2\\pi R^2}",
    },
    {
      label: "Outside field",
      tex: "B=\\frac{\\mu_0 I}{2\\pi r}",
    },
  ]}
/>

### Derivation 3: Solenoids and toroids

For a long solenoid, a rectangular Amperian loop gives a nearly uniform internal field and a negligible external field. For a toroid, a circular loop inside the core encloses \\(NI\\).

<PhysicsDerivation
  items={[
    {
      label: "Long solenoid",
      tex: "B=\\mu_0 nI",
    },
    {
      label: "Toroid inside core",
      tex: "B=\\frac{\\mu_0NI}{2\\pi r}",
    },
  ]}
/>

## Rules

<Equation label="Long wire" tex="B=\frac{\mu_0 I}{2\pi r}" />

<Equation label="Uniform current cylinder, inside" tex="B=\frac{\mu_0 I r}{2\pi R^2}\quad(r<R)" />

<Equation label="Long solenoid" tex="B=\mu_0 nI" />

<Equation label="Toroid" tex="B=\frac{\mu_0NI}{2\pi r}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A long solenoid has \\(n=800\\,\\mathrm{m^{-1}}\\) and current \\(0.50\\,\\mathrm A\\). Find its internal field.",
      answer: "\\[B=\\mu_0nI=(4\\pi\\times10^{-7})(800)(0.50)=5.0\\times10^{-4}\\,\\mathrm T\\]",
    },
    {
      title: "Example 2",
      question: "A wire of radius \\(2.0\\,\\mathrm{mm}\\) carries uniform current. How does \\(B\\) vary with radius inside the wire?",
      answer: "Inside a uniform current cylinder, \\(I_{\\mathrm{enc}}\\propto r^2\\). Ampere's law gives \\(B(2\\pi r)=\\mu_0I_{\\mathrm{enc}}\\), so \\(B\\propto r\\) for \\(r<R\\).",
    },
  ]}
/>

## Checks

- Pick the Amperian loop to match the symmetry.
- Include only the current enclosed by the loop.
- Ideal solenoid results assume the length is much larger than the radius.
- A toroid's field depends on \\(r\\) inside the core because the circular path length is \\(2\\pi r\\).`;
