export const content = String.raw`## Principle

Standing electromagnetic waves form when waves of the same frequency travel in opposite directions and interfere. Cavities and transmission lines support only certain resonant patterns.

## Notation

<Notation
  items={[
    { symbol: "L", meaning: "cavity length", unit: "m" },
    { symbol: "n", meaning: "mode number", unit: "1" },
    { symbol: "\\lambda_n", meaning: "allowed wavelength", unit: "m" },
    { symbol: "f_n", meaning: "resonant frequency", unit: "Hz" },
    { symbol: "E_0", meaning: "traveling-wave electric amplitude", unit: "V m^{-1}" },
  ]}
/>

## Method

### Derivation 1: Superposition

Add equal waves traveling in opposite directions.

<PhysicsDerivation
  items={[
    {
      label: "Right-moving wave",
      tex: "E_1=E_0\\sin(kx-\\omega t)",
    },
    {
      label: "Left-moving wave",
      tex: "E_2=E_0\\sin(kx+\\omega t)",
    },
    {
      label: "Standing electric field",
      tex: "E=2E_0\\sin(kx)\\cos(\\omega t)",
    },
  ]}
/>

### Derivation 2: Conducting boundaries

At a perfect conductor, the tangential electric field must be zero.

<PhysicsDerivation
  items={[
    {
      label: "Electric nodes at both ends",
      tex: "E(0,t)=0,\\quad E(L,t)=0",
    },
    {
      label: "Allowed lengths",
      tex: "L=\\frac{n\\lambda_n}{2}",
    },
  ]}
/>

### Derivation 3: Resonant frequencies

Use \\(c=f\\lambda\\) for waves in vacuum.

<PhysicsDerivation
  items={[
    {
      label: "Allowed wavelengths",
      tex: "\\lambda_n=\\frac{2L}{n}",
    },
    {
      label: "Allowed frequencies",
      tex: "f_n=\\frac{nc}{2L}",
    },
  ]}
/>

## Rules

<Equation label="Standing electric field" tex="E=2E_0\sin(kx)\cos(\omega t)" />

<Equation label="Allowed wavelengths" tex="\lambda_n=\frac{2L}{n}" />

<Equation label="Resonant frequencies" tex="f_n=\frac{nc}{2L}" />

<Equation label="Adjacent node spacing" tex="\Delta x=\frac{\lambda}{2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A vacuum cavity is \\(0.75\\,\\mathrm{m}\\) long. Find the fundamental frequency.",
      answer: "\\[f_1=\\frac{c}{2L}=\\frac{3.0\\times10^8}{2(0.75)}=2.0\\times10^8\\,\\mathrm{Hz}\\]",
    },
    {
      title: "Example 2",
      question: "For \\(L=1.2\\,\\mathrm{m}\\), find \\(\\lambda_3\\).",
      answer: "\\[\\lambda_3=\\frac{2L}{3}=\\frac{2(1.2)}{3}=0.80\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- Electric-field nodes are fixed positions where the tangential electric field is always zero.
- Magnetic-field nodes and electric-field nodes are shifted by one quarter wavelength in a simple standing EM wave.
- Resonant frequencies are integer multiples of the fundamental for a cavity with nodes at both ends.
- A standing wave stores energy in place rather than transporting net energy steadily in one direction.`;
