export const content = String.raw`## Principle

Interference happens when waves overlap and their fields add. A stable light interference pattern requires coherent sources with a fixed phase relationship.

## Notation

<Notation
  items={[
    { symbol: "\\Delta r", meaning: "path difference", unit: "m" },
    { symbol: "\\Delta\\phi", meaning: "phase difference at the observation point", unit: "rad" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "\\phi_0", meaning: "initial phase difference between sources", unit: "rad" },
    { symbol: "m", meaning: "integer interference order", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Superposition

Light interference is field superposition. The electric fields add first; intensity follows from the resultant field amplitude.

<PhysicsDerivation
  items={[
    {
      label: "Field sum",
      tex: "E_{\\mathrm{net}}=E_1+E_2",
    },
    {
      label: "Intensity link",
      tex: "I\\propto E_{\\mathrm{net},0}^2",
    },
  ]}
/>

### Derivation 2: Phase difference

Path difference changes phase because one wave travels farther than the other.

<PhysicsDerivation
  items={[
    {
      label: "Path phase",
      tex: "\\Delta\\phi_{\\mathrm{path}}=\\frac{2\\pi\\Delta r}{\\lambda}",
    },
    {
      label: "Total phase",
      tex: "\\Delta\\phi=\\phi_0+\\frac{2\\pi\\Delta r}{\\lambda}",
    },
  ]}
/>

### Derivation 3: Maxima and minima

For equal-amplitude waves, maxima and minima are set by phase.

<PhysicsDerivation
  items={[
    {
      label: "Constructive interference",
      tex: "\\Delta\\phi=2\\pi m",
    },
    {
      label: "Destructive interference",
      tex: "\\Delta\\phi=(2m+1)\\pi",
    },
  ]}
/>

## Rules

For in-phase sources, \\(\\phi_0=0\\).

<Equation label="Constructive path difference" tex="\Delta r=m\lambda" />

<Equation label="Destructive path difference" tex="\Delta r=\left(m+\frac12\right)\lambda" />

<Equation label="Phase from path" tex="\Delta\phi=\frac{2\pi\Delta r}{\lambda}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two coherent in-phase light waves have \\(\\Delta r=2\\lambda\\). Classify the interference.",
      answer: "Because \\(\\Delta r=m\\lambda\\) with \\(m=2\\), the interference is constructive.",
    },
    {
      title: "Example 2",
      question: "Two coherent in-phase light waves have \\(\\Delta r=1.5\\lambda\\). Classify the interference.",
      answer: "Because \\(\\Delta r=(m+1/2)\\lambda\\), the interference is destructive.",
    },
  ]}
/>

## Checks

- Coherence means the phase difference is stable long enough to observe a pattern.
- Interference conditions use path difference and any initial phase difference.
- Destructive interference is complete only when the amplitudes are equal.
- Add fields or amplitudes first, not intensities directly.`;
