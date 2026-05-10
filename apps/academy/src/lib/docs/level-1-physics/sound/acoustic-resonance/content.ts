export const content = String.raw`## Principle

Acoustic resonance occurs when driving efficiently excites an allowed air-column mode.

## Notation

<Notation
  items={[
    { symbol: "f", meaning: "driving frequency", unit: "Hz" },
    { symbol: "f_n", meaning: "natural frequency", unit: "Hz" },
    { symbol: "L", meaning: "resonator length", unit: "m" },
    { symbol: "v", meaning: "sound speed", unit: "m s^{-1}" },
    { symbol: "Q", meaning: "quality factor", unit: "1" },
  ]}
/>

## Method

A resonator stores acoustic energy in a standing wave. The response is largest when the drive matches one of the allowed frequencies.

<PhysicsDerivation
  items={[
    {
      label: "Resonance condition",
      tex: "f=f_n",
    },
    {
      label: "Open-open modes",
      tex: "f_n=\\frac{nv}{2L}",
    },
    {
      label: "Open-closed modes",
      tex: "f_n=\\frac{(2n-1)v}{4L}",
    },
    {
      label: "Sharpness measure",
      tex: "Q=\\frac{f_0}{\\Delta f}",
      note: "\\Delta f is the frequency width of the strong-response region.",
    },
  ]}
/>

Changing the effective length changes the resonant frequencies. Changing temperature changes them through the sound speed.

## Rules

These are the compact resonance relations.

<Equation label="Resonance" tex="f=f_n" />

<Equation label="Open-open modes" tex="f_n=\frac{nv}{2L}" />

<Equation label="Open-closed modes" tex="f_n=\frac{(2n-1)v}{4L}" />

<Equation label="Quality factor" tex="Q=\frac{f_0}{\Delta f}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A closed tube resonates at its fundamental when driven at \\(170\\,\\mathrm{Hz}\\). Estimate its length using \\(v=340\\,\\mathrm{m\\,s^{-1}}\\).",
      answer: "For an open-closed fundamental, \\[f_1=\\frac{v}{4L}\\] so \\[L=\\frac{v}{4f_1}=\\frac{340}{4(170)}=0.50\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- Resonance amplifies an allowed mode; it does not create arbitrary frequencies.
- Effective length can differ from the physical tube length near open ends.
- A higher \\(Q\\) means a narrower resonance peak.
- Strong resonance still needs energy input from the driver.`;
