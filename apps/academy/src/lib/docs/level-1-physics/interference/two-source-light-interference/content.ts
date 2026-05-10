export const content = String.raw`## Principle

Two coherent light sources, such as the two slits in Young's experiment, form bright and dark fringes because the path difference varies across the screen.

## Notation

<Notation
  items={[
    { symbol: "d", meaning: "source or slit separation", unit: "m" },
    { symbol: "L", meaning: "distance from sources to screen", unit: "m" },
    { symbol: "\\theta", meaning: "angle from the central axis", unit: "rad" },
    { symbol: "y_m", meaning: "screen position of order m", unit: "m" },
    { symbol: "\\lambda", meaning: "wavelength in the medium", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Path difference

For a distant screen, the path difference from two slits separated by \\(d\\) is approximately \\(d\\sin\\theta\\).

<PhysicsDerivation
  items={[
    {
      label: "Path difference",
      tex: "\\Delta r=d\\sin\\theta",
    },
    {
      label: "Small-angle screen position",
      tex: "\\sin\\theta\\approx\\tan\\theta\\approx\\frac{y}{L}",
    },
  ]}
/>

### Derivation 2: Bright fringes

Bright fringes occur where the waves arrive in phase.

<PhysicsDerivation
  items={[
    {
      label: "Constructive condition",
      tex: "d\\sin\\theta=m\\lambda",
    },
    {
      label: "Screen position",
      tex: "y_m\\approx\\frac{m\\lambda L}{d}",
    },
  ]}
/>

### Derivation 3: Dark fringes

Dark fringes occur where the waves arrive half a cycle out of phase.

<PhysicsDerivation
  items={[
    {
      label: "Destructive condition",
      tex: "d\\sin\\theta=\\left(m+\\frac12\\right)\\lambda",
    },
    {
      label: "Fringe spacing",
      tex: "\\Delta y=\\frac{\\lambda L}{d}",
    },
  ]}
/>

## Rules

<Equation label="Bright fringes" tex="d\sin\theta=m\lambda" />

<Equation label="Dark fringes" tex="d\sin\theta=\left(m+\frac12\right)\lambda" />

<Equation label="Bright-fringe position" tex="y_m\approx\frac{m\lambda L}{d}" />

<Equation label="Fringe spacing" tex="\Delta y\approx\frac{\lambda L}{d}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A double slit has \\(d=0.20\\,\\mathrm{mm}\\), \\(L=2.0\\,\\mathrm{m}\\), and \\(\\lambda=500\\,\\mathrm{nm}\\). Find the bright-fringe spacing.",
      answer: "\\[\\Delta y=\\frac{\\lambda L}{d}=\\frac{(500\\times10^{-9})(2.0)}{0.20\\times10^{-3}}=5.0\\times10^{-3}\\,\\mathrm{m}\\]",
    },
    {
      title: "Example 2",
      question: "For \\(d=0.30\\,\\mathrm{mm}\\) and \\(\\lambda=600\\,\\mathrm{nm}\\), find \\(\\theta\\) for the first bright fringe.",
      answer: "\\[\\sin\\theta=\\frac{m\\lambda}{d}=\\frac{600\\times10^{-9}}{0.30\\times10^{-3}}=2.0\\times10^{-3}\\] so \\(\\theta\\approx2.0\\times10^{-3}\\,\\mathrm{rad}\\).",
    },
  ]}
/>

## Checks

- The central bright fringe is \\(m=0\\).
- Use the wavelength in the medium where the light travels.
- The small-angle formula is valid only when \\(y\\ll L\\).
- Larger slit spacing gives smaller fringe spacing.`;
