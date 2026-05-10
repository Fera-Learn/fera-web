export const content = String.raw`## Principle

Polarization describes the direction of the electric field oscillation in a transverse light wave. Linear polarizers transmit the electric-field component along their transmission axis.

## Notation

<Notation
  items={[
    { symbol: "I_0", meaning: "incident intensity", unit: "W m^{-2}" },
    { symbol: "I", meaning: "transmitted intensity", unit: "W m^{-2}" },
    { symbol: "\\theta", meaning: "angle between polarization direction and polarizer axis", unit: "rad" },
    { symbol: "\\theta_B", meaning: "Brewster angle", unit: "rad" },
    { symbol: "n_1, n_2", meaning: "refractive indices at an interface", unit: "" },
  ]}
/>

## Method

### Derivation 1: Use transverse-wave direction

For a light wave traveling in a fixed direction, the electric field oscillates perpendicular to the direction of travel. Linear polarization means the electric field stays in one plane.

### Derivation 2: Apply Malus's law

A polarizer passes the field component along its axis. Intensity is proportional to field amplitude squared.

<PhysicsDerivation
  items={[
    {
      label: "Malus's law",
      tex: "I=I_0\\cos^2\\theta",
    },
    {
      label: "Unpolarized light through one polarizer",
      tex: "I=\\frac{I_0}{2}",
    },
  ]}
/>

### Derivation 3: Recognize polarization by reflection

At Brewster's angle, reflected light is strongly plane-polarized.

<PhysicsDerivation
  items={[
    {
      label: "Brewster angle",
      tex: "\\tan\\theta_B=\\frac{n_2}{n_1}",
    },
  ]}
/>

## Rules

<Equation label="Malus's law" tex="I=I_0\cos^2\theta" />

<Equation label="Unpolarized through one polarizer" tex="I=\frac{I_0}{2}" />

<Equation label="Brewster angle" tex="\tan\theta_B=\frac{n_2}{n_1}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Unpolarized light of intensity \\(100\\,\\mathrm{W\\,m^{-2}}\\) passes through one ideal polarizer. Find the transmitted intensity.",
      answer: "\\[I=\\frac{I_0}{2}=50\\,\\mathrm{W\\,m^{-2}}\\]",
    },
    {
      title: "Example 2",
      question: "Plane-polarized light enters a polarizer whose axis is \\(30^\\circ\\) from the light's polarization. Find \\(I/I_0\\).",
      answer: "\\[\\frac{I}{I_0}=\\cos^230^\\circ=0.75\\]",
    },
  ]}
/>

## Checks

- Polarization is evidence that light is transverse.
- Malus's law applies to already plane-polarized light entering an ideal polarizer.
- Unpolarized light through one ideal polarizer loses half its intensity.
- A second polarizer at \\(90^\\circ\\) to the first blocks ideal linearly polarized light.`;
