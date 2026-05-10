export const content = String.raw`## Principle

Interference intensity depends on phase difference because the electric-field amplitudes add as vectors before intensity is calculated.

## Notation

<Notation
  items={[
    { symbol: "I_0", meaning: "intensity from one source alone", unit: "W m^{-2}" },
    { symbol: "I", meaning: "resultant intensity", unit: "W m^{-2}" },
    { symbol: "\\delta", meaning: "phase difference between waves", unit: "rad" },
    { symbol: "E_0", meaning: "field amplitude from one wave", unit: "V m^{-1}" },
    { symbol: "V", meaning: "fringe visibility or contrast", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Equal amplitudes

Two equal sinusoidal fields with phase difference \\(\\delta\\) add to a resultant amplitude.

<PhysicsDerivation
  items={[
    {
      label: "Resultant field amplitude",
      tex: "E_{\\mathrm{net},0}=2E_0\\cos\\left(\\frac{\\delta}{2}\\right)",
    },
    {
      label: "Intensity",
      tex: "I=4I_0\\cos^2\\left(\\frac{\\delta}{2}\\right)",
    },
  ]}
/>

### Derivation 2: Unequal intensities

If the two beams have different intensities, the interference term is smaller than the maximum possible cancellation.

<PhysicsDerivation
  items={[
    {
      label: "General intensity",
      tex: "I=I_1+I_2+2\\sqrt{I_1I_2}\\cos\\delta",
    },
    {
      label: "Maximum",
      tex: "I_{\\max}=\\left(\\sqrt{I_1}+\\sqrt{I_2}\\right)^2",
    },
    {
      label: "Minimum",
      tex: "I_{\\min}=\\left(\\sqrt{I_1}-\\sqrt{I_2}\\right)^2",
    },
  ]}
/>

### Derivation 3: Visibility

Fringe contrast measures how clear the pattern is.

<PhysicsDerivation
  items={[
    {
      label: "Visibility",
      tex: "V=\\frac{I_{\\max}-I_{\\min}}{I_{\\max}+I_{\\min}}",
    },
  ]}
/>

## Rules

<Equation label="Equal-beam intensity" tex="I=4I_0\cos^2\left(\frac{\delta}{2}\right)" />

<Equation label="Phase from path" tex="\delta=\frac{2\pi\Delta r}{\lambda}" />

<Equation label="Unequal-beam intensity" tex="I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two equal beams each have intensity \\(I_0\\). Find the resultant intensity for \\(\\delta=0\\).",
      answer: "\\[I=4I_0\\cos^2(0)=4I_0\\]",
    },
    {
      title: "Example 2",
      question: "Two equal beams each have intensity \\(I_0\\). Find the resultant intensity for \\(\\delta=\\pi\\).",
      answer: "\\[I=4I_0\\cos^2(\\pi/2)=0\\]",
    },
  ]}
/>

## Checks

- Equal beams can produce zero intensity at destructive minima.
- Unequal beams cannot cancel completely.
- Maximum intensity from two equal beams is \\(4I_0\\), not \\(2I_0\\), because amplitudes add.
- Phase can come from path difference, reflection phase shifts, or source phase.`;
