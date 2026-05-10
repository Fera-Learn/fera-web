export const content = String.raw`## Principle

Beats are slow amplitude variations from superposing nearby frequencies.

## Notation

<Notation
  items={[
    { symbol: "f_1,f_2", meaning: "two sound frequencies", unit: "Hz" },
    { symbol: "f_{\\mathrm{beat}}", meaning: "beat frequency", unit: "Hz" },
    { symbol: "f_{\\mathrm{avg}}", meaning: "average tone frequency", unit: "Hz" },
    { symbol: "\\omega_1,\\omega_2", meaning: "angular frequencies", unit: "rad s^{-1}" },
    { symbol: "A", meaning: "individual amplitude", unit: "varies" },
  ]}
/>

## Method

Add two equal-amplitude waves at one position, with slightly different angular frequencies.

<PhysicsDerivation
  items={[
    {
      label: "Two tones",
      tex: "s(t)=A\\cos(\\omega_1t)+A\\cos(\\omega_2t)",
    },
    {
      label: "Trig identity",
      tex: "s(t)=2A\\cos\\left(\\frac{\\omega_1-\\omega_2}{2}t\\right)\\cos\\left(\\frac{\\omega_1+\\omega_2}{2}t\\right)",
    },
    {
      label: "Beat frequency",
      tex: "f_{\\mathrm{beat}}=|f_1-f_2|",
    },
    {
      label: "Average tone",
      tex: "f_{\\mathrm{avg}}=\\frac{f_1+f_2}{2}",
    },
  ]}
/>

The ear hears a tone near \\(f_\{\\mathrm\{avg\}}\\) whose loudness rises and falls at \\(f_\{\\mathrm\{beat\}}\\).

## Rules

These are the compact beat relations.

<Equation label="Beat frequency" tex="f_{\mathrm{beat}}=|f_1-f_2|" />

<Equation label="Average tone" tex="f_{\mathrm{avg}}=\frac{f_1+f_2}{2}" />

<Equation label="Two-tone sum" tex="s(t)=2A\cos\left(\frac{\omega_1-\omega_2}{2}t\right)\cos\left(\frac{\omega_1+\omega_2}{2}t\right)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two tuning forks produce \\(440\\,\\mathrm{Hz}\\) and \\(446\\,\\mathrm{Hz}\\). Find the beat frequency.",
      answer: "\\[f_{\\mathrm{beat}}=|446-440|=6\\,\\mathrm{Hz}\\] The loudness rises and falls six times per second.",
    },
  ]}
/>

## Checks

- Beats require nearby frequencies; identical frequencies give no beat envelope.
- The beat frequency is a difference, not an average.
- The heard pitch is usually near the average frequency.
- Beat loudness varies even when each source has steady amplitude.`;
