export const content = String.raw`## Principle

Black-hole formation is tied to compactness: when the escape speed from a body's surface reaches the speed of light, the corresponding horizon scale is the Schwarzschild radius.

## Notation

<Notation
  items={[
    { symbol: "M", meaning: "mass of the compact body", unit: "kg" },
    { symbol: "r", meaning: "distance from the center", unit: "m" },
    { symbol: "r_s", meaning: "Schwarzschild radius", unit: "m" },
    { symbol: "v_{\\mathrm{esc}}", meaning: "escape speed", unit: "m s^{-1}" },
    { symbol: "G", meaning: "gravitational constant", unit: "N m^{2} kg^{-2}" },
    { symbol: "c", meaning: "speed of light in vacuum", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Build the escape-speed condition

Escape requires enough kinetic energy to climb out of the gravitational potential well. The threshold case arrives at infinity with zero remaining speed.

<PhysicsDerivation
  items={[
    {
      label: "Threshold energy at launch",
      tex: "\\frac12 mv_{\\mathrm{esc}}^2-\\frac{GMm}{r}=0",
    },
    {
      label: "Solve for escape speed",
      tex: "v_{\\mathrm{esc}}=\\sqrt{\\frac{2GM}{r}}",
    },
  ]}
/>

### Derivation 2: Define the horizon scale

If the threshold escape speed reaches \\(c\\), even light cannot escape outward from that radius. Setting the escape formula equal to \\(c\\) defines the characteristic radius.

<PhysicsDerivation
  items={[
    {
      label: "Set the threshold to light speed",
      tex: "c=\\sqrt{\\frac{2GM}{r_s}}",
    },
    {
      label: "Square both sides",
      tex: "c^2=\\frac{2GM}{r_s}",
    },
    {
      label: "Schwarzschild radius",
      tex: "r_s=\\frac{2GM}{c^2}",
    },
  ]}
/>

<PhysicsAside title="Model scope">
The escape-speed argument is a compact way to motivate the horizon scale. For a non-rotating black hole, the same radius appears exactly in general relativity.
</PhysicsAside>

## Rules

These are the compact results from the method above.

<Equation label="Escape speed" tex="v_{\mathrm{esc}}=\sqrt{\frac{2GM}{r}}" />

<Equation label="Schwarzschild radius" tex="r_s=\frac{2GM}{c^2}" />

<Equation label="Black-hole condition" tex="r\le r_s" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the Schwarzschild radius of an object with mass \\(8.0\\times10^{30}\\,\\mathrm{kg}\\). Use \\(c=3.00\\times10^8\\,\\mathrm{m\\,s^{-1}}\\).",
      answer: "\\[r_s=\\frac{2GM}{c^2}=\\frac{2(6.67\\times10^{-11})(8.0\\times10^{30})}{(3.00\\times10^8)^2}=1.19\\times10^4\\,\\mathrm{m}\\] So the Schwarzschild radius is about \\(11.9\\,\\mathrm{km}\\).",
    },
    {
      title: "Example 2",
      question: "A compact object has mass \\(5.0\\times10^{31}\\,\\mathrm{kg}\\) and radius \\(60\\,\\mathrm{km}\\). Does the radius lie inside its Schwarzschild radius?",
      answer: "\\[r_s=\\frac{2(6.67\\times10^{-11})(5.0\\times10^{31})}{(3.00\\times10^8)^2}=7.41\\times10^4\\,\\mathrm{m}=74.1\\,\\mathrm{km}\\] Since \\(60\\,\\mathrm{km}<74.1\\,\\mathrm{km}\\), the radius lies inside \\(r_s\\).",
    },
  ]}
/>

## Checks

- The event horizon is a radius scale, not a solid surface.
- A larger mass does not guarantee a black hole; the mass must be compressed inside \\(r_s\\).
- Escape speed depends on both mass and radius, so compactness matters.
- The Schwarzschild radius grows linearly with mass.`;
