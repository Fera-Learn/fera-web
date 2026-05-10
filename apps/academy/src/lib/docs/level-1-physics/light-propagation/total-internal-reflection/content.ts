export const content = String.raw`## Principle

Total internal reflection occurs when light in a higher-index medium reaches a boundary with a lower-index medium above the critical angle.

## Notation

<Notation
  items={[
    { symbol: "n_1", meaning: "refractive index of incident medium", unit: "" },
    { symbol: "n_2", meaning: "refractive index of transmitted medium", unit: "" },
    { symbol: "\\theta_i", meaning: "angle of incidence in the higher-index medium", unit: "rad" },
    { symbol: "\\theta_c", meaning: "critical angle", unit: "rad" },
    { symbol: "\\theta_2", meaning: "refracted angle", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Check the direction of travel

Total internal reflection is only possible when light travels from higher refractive index to lower refractive index.

<PhysicsDerivation
  items={[
    {
      label: "Required condition",
      tex: "n_1>n_2",
    },
  ]}
/>

### Derivation 2: Find the critical angle

At the critical angle, the refracted ray would skim along the boundary, so \\(\theta_2=90^\\circ\\).

<PhysicsDerivation
  items={[
    {
      label: "Snell at critical angle",
      tex: "n_1\\sin\\theta_c=n_2\\sin90^\\circ",
    },
    {
      label: "Critical angle",
      tex: "\\sin\\theta_c=\\frac{n_2}{n_1}",
    },
  ]}
/>

### Derivation 3: Compare with the incident angle

If \\(\theta_i>\theta_c\\), no transmitted ray carries energy away in the ideal ray model; the light reflects internally.

## Rules

<Equation label="Critical angle" tex="\theta_c=\sin^{-1}\left(\frac{n_2}{n_1}\right)\quad(n_1>n_2)" />

<Equation label="Total internal reflection" tex="\theta_i>\theta_c\Rightarrow \text{total internal reflection}" />

<Equation label="Critical ray" tex="\theta_i=\theta_c\Rightarrow \theta_2=90^\circ" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the critical angle for glass \\((n=1.50)\\) to air \\((n=1.00)\\).",
      answer: "\\[\\theta_c=\\sin^{-1}\\left(\\frac{1.00}{1.50}\\right)=41.8^\\circ\\]",
    },
    {
      title: "Example 2",
      question: "Light in glass \\((n=1.50)\\) reaches an air boundary at \\(50^\\circ\\). Does total internal reflection occur?",
      answer: "Since \\(50^\\circ>41.8^\\circ\\), total internal reflection occurs.",
    },
  ]}
/>

## Checks

- Total internal reflection cannot occur from lower index to higher index.
- The critical angle is measured from the normal.
- At the critical angle, the refracted ray is along the boundary.
- Optical fibers use repeated total internal reflection to guide light.`;
