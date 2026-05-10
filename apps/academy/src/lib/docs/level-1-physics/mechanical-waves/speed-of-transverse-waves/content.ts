export const content = String.raw`## Principle

The speed of a transverse wave on a string is set by the competition between tension and inertia.

Tension tries to straighten a curved segment, while the string's mass per unit length resists acceleration.

## Notation

<Notation
  items={[
    { symbol: "T", meaning: "string tension", unit: "N" },
    { symbol: "\\mu", meaning: "mass per unit length", unit: "kg m^{-1}" },
    { symbol: "y(x,t)", meaning: "transverse displacement", unit: "m" },
    { symbol: "\\Delta x", meaning: "small string element length", unit: "m" },
    { symbol: "v_w", meaning: "wave speed", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Find the net transverse force on a short segment

Take a short string element of length \\(\\Delta x\\). The tension has nearly the same magnitude at both ends, but the directions differ because the string is curved.

<PhysicsDerivation
  items={[
    {
      label: "Vertical force balance",
      tex: "F_y=T\\sin\\theta(x+\\Delta x)-T\\sin\\theta(x)",
    },
    {
      label: "Small-slope approximation",
      tex: "\\sin\\theta\\approx\\tan\\theta\\approx\\frac{\\partial y}{\\partial x}",
    },
    {
      label: "Slope difference",
      tex: "F_y\\approx T\\left[\\frac{\\partial y}{\\partial x}(x+\\Delta x)-\\frac{\\partial y}{\\partial x}(x)\\right]",
    },
    {
      label: "Curvature form",
      tex: "F_y\\approx T\\frac{\\partial^2 y}{\\partial x^2}\\Delta x",
    },
  ]}
/>

### Derivation 2: Apply Newton's second law to the segment

The mass of the segment is \\(\\mu\\Delta x\\). Its transverse acceleration is \\(\\partial^2 y/\\partial t^2\\).

<PhysicsDerivation
  items={[
    {
      label: "Segment mass",
      tex: "m=\\mu\\Delta x",
    },
    {
      label: "Newton's law",
      tex: "\\mu\\Delta x\\frac{\\partial^2 y}{\\partial t^2}=T\\frac{\\partial^2 y}{\\partial x^2}\\Delta x",
    },
    {
      label: "Wave equation form",
      tex: "\\frac{\\partial^2 y}{\\partial t^2}=\\frac{T}{\\mu}\\frac{\\partial^2 y}{\\partial x^2}",
    },
  ]}
/>

### Derivation 3: Read the wave speed from the equation

The standard one-dimensional wave equation is \\(\\partial^2 y/\\partial t^2=v_w^2\\,\\partial^2 y/\\partial x^2\\). Matching coefficients gives the string-wave speed.

<PhysicsDerivation
  items={[
    {
      label: "Coefficient match",
      tex: "v_w^2=\\frac{T}{\\mu}",
    },
    {
      label: "Transverse-wave speed",
      tex: "v_w=\\sqrt{\\frac{T}{\\mu}}",
    },
  ]}
/>

## Rules

These are the compact results from the derivation above.

<Equation label="String wave equation" tex="\frac{\partial^2 y}{\partial t^2}=\frac{T}{\mu}\frac{\partial^2 y}{\partial x^2}" />

<Equation label="Transverse-wave speed" tex="v_w=\sqrt{\frac{T}{\mu}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A string has tension \\(120\\,\\mathrm{N}\\) and linear density \\(0.030\\,\\mathrm{kg\\,m^{-1}}\\). Find the wave speed.",
      answer: "Use \\(v_w=\\sqrt{T/\\mu}\\): \\[v_w=\\sqrt{\\frac{120}{0.030}}=63.2\\,\\mathrm{m\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Increasing tension increases wave speed because the restoring force is larger.
- Increasing mass per unit length decreases wave speed because the same force accelerates more mass.
- The units of \\(T/\\mu\\) are meters squared per second squared, so the square root has units of speed.
- This formula is for a stretched string with small transverse displacements.`;
