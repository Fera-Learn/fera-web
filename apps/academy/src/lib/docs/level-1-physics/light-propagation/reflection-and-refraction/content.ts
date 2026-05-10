export const content = String.raw`## Principle

At a boundary, light can reflect back into the first medium and refract into the second. Reflection preserves the angle to the normal; refraction follows Snell's law.

## Notation

<Notation
  items={[
    { symbol: "\\theta_i", meaning: "angle of incidence measured from the normal", unit: "rad" },
    { symbol: "\\theta_r", meaning: "angle of reflection measured from the normal", unit: "rad" },
    { symbol: "\\theta_2", meaning: "angle of refraction measured from the normal", unit: "rad" },
    { symbol: "n_1, n_2", meaning: "refractive indices of the two media", unit: "" },
    { symbol: "v_1, v_2", meaning: "light speeds in the two media", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Apply reflection law

Angles are measured from the normal line, not from the surface.

<PhysicsDerivation
  items={[
    {
      label: "Reflection law",
      tex: "\\theta_r=\\theta_i",
    },
  ]}
/>

### Derivation 2: Apply Snell's law

Refraction changes direction because the wave speed changes at the boundary.

<PhysicsDerivation
  items={[
    {
      label: "Snell's law",
      tex: "n_1\\sin\\theta_1=n_2\\sin\\theta_2",
    },
    {
      label: "Speed form",
      tex: "\\frac{\\sin\\theta_1}{\\sin\\theta_2}=\\frac{v_1}{v_2}",
    },
  ]}
/>

### Derivation 3: Decide bending direction

Entering a higher-index medium makes light slow down and bend toward the normal. Entering a lower-index medium makes it speed up and bend away from the normal.

## Rules

<Equation label="Reflection" tex="\theta_r=\theta_i" />

<Equation label="Snell's law" tex="n_1\sin\theta_1=n_2\sin\theta_2" />

<Equation label="Speed-index relation" tex="v=\frac{c}{n}" />

<Equation label="Frequency across boundary" tex="f_1=f_2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A light ray hits a plane mirror at \\(35^\\circ\\) to the normal. Find the reflection angle.",
      answer: "The reflection angle is measured from the normal and equals the incidence angle: \\(35^\\circ\\).",
    },
    {
      title: "Example 2",
      question: "Light goes from air \\((n=1.00)\\) into glass \\((n=1.50)\\) at \\(30^\\circ\\). Find the refraction angle.",
      answer: "\\[1.00\\sin30^\\circ=1.50\\sin\\theta_2\\]\\[\\sin\\theta_2=0.333\\]\\[\\theta_2=19.5^\\circ\\]",
    },
  ]}
/>

## Checks

- Measure all optical angles from the normal.
- Higher refractive index means lower light speed.
- Bending toward the normal means the angle gets smaller.
- Refraction changes wavelength, not frequency.`;
