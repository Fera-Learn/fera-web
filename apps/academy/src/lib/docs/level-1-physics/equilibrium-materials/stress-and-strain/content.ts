export const content = String.raw`## Principle

Stress measures internal load; strain measures fractional deformation.

## Notation

<Notation
  items={[
    { symbol: "\\sigma,\\tau", meaning: "normal and shear stress", unit: "Pa" },
    { symbol: "\\epsilon,\\gamma", meaning: "normal and shear strain", unit: "none" },
    { symbol: "F_{\\perp},F_{\\parallel}", meaning: "normal and parallel force components", unit: "N" },
    { symbol: "A", meaning: "loaded cross-sectional area", unit: "m^{2}" },
    { symbol: "\\Delta L,L_0", meaning: "length change and original length", unit: "m" },
    { symbol: "\\Delta x,h", meaning: "sideways shift and specimen height", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Normalize load by area

Stress uses the force component that acts on a chosen area, so it compares loading without depending on specimen size.

<PhysicsDerivation
  items={[
    {
      label: "Normal stress",
      tex: "\\sigma=\\frac{F_{\\perp}}{A}",
    },
    {
      label: "Shear stress",
      tex: "\\tau=\\frac{F_{\\parallel}}{A}",
    },
  ]}
/>

### Derivation 2: Normalize deformation by original size

Strain compares the change in shape with the original dimension that is being distorted.

<PhysicsDerivation
  items={[
    {
      label: "Normal strain",
      tex: "\\epsilon=\\frac{\\Delta L}{L_0}",
    },
    {
      label: "Shear strain",
      tex: "\\gamma=\\frac{\\Delta x}{h}",
    },
  ]}
/>

### Derivation 3: Separate geometry from material response

The stress-strain diagram shows material behavior after load and deformation have been normalized.

<StressStrainDiagram
  title="Stress and strain response"
  caption="Stress normalizes load by area; strain normalizes extension by original length."
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Normal stress" tex="\sigma=\frac{F_\perp}{A}" />

<Equation label="Normal strain" tex="\epsilon=\frac{\Delta L}{L_0}" />

<Equation label="Shear stress" tex="\tau=\frac{F_\parallel}{A}" />

<Equation label="Shear strain" tex="\gamma=\frac{\Delta x}{h}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(2000\\,\\mathrm{N}\\) tensile force acts on area \\(4.0\\times10^{-4}\\,\\mathrm{m^2}\\). Find stress.",
      answer: "\\[\\sigma=F/A=2000/(4.0\\times10^{-4})=5.0\\times10^6\\,\\mathrm{Pa}\\]",
    },
    {
      title: "Example 2",
      question: "A \\(2.0\\,\\mathrm{m}\\) wire extends by \\(1.0\\,\\mathrm{mm}\\). Find strain.",
      answer: "\\[\\epsilon=\\Delta L/L_0=1.0\\times10^{-3}/2.0=5.0\\times10^{-4}\\]",
    },
  ]}
/>

## Checks

- Stress has pressure units.
- Strain is dimensionless.
- Use loaded cross-sectional area.
- Large deformation breaks small-strain models.`;
