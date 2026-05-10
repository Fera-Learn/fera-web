export const content = String.raw`## Principle

Gas molecules do not all move at the same speed.

At a fixed temperature, molecular speeds form a distribution, and useful averages describe different features of that distribution.

## Notation

<Notation
  items={[
    { symbol: "v", meaning: "molecular speed", unit: "m s^{-1}" },
    { symbol: "v_{\\mathrm{mp}}", meaning: "most probable speed", unit: "m s^{-1}" },
    { symbol: "\\bar v", meaning: "mean speed", unit: "m s^{-1}" },
    { symbol: "v_{\\mathrm{rms}}", meaning: "root-mean-square speed", unit: "m s^{-1}" },
    { symbol: "M", meaning: "molar mass", unit: "kg mol^{-1}" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
    { symbol: "\\lambda", meaning: "mean free path", unit: "m" },
    { symbol: "r", meaning: "molecular radius in a collision model", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Compare common speed averages

The Maxwell-Boltzmann distribution gives a curve of how many molecules lie in each speed interval. Three speed measures are commonly used.

<PhysicsDerivation
  items={[
    {
      label: "Most probable speed",
      tex: "v_{\\mathrm{mp}}=\\sqrt{\\frac{2RT}{M}}",
    },
    {
      label: "Mean speed",
      tex: "\\bar v=\\sqrt{\\frac{8RT}{\\pi M}}",
    },
    {
      label: "RMS speed",
      tex: "v_{\\mathrm{rms}}=\\sqrt{\\frac{3RT}{M}}",
    },
    {
      label: "Ordering",
      tex: "v_{\\mathrm{mp}}<\\bar v<v_{\\mathrm{rms}}",
    },
  ]}
/>

Increasing temperature shifts the distribution toward larger speeds and broadens it. Increasing molar mass shifts the speeds lower.

### Derivation 2: Estimate collision spacing

The mean free path is the average distance a molecule travels between collisions. A simple hard-sphere model says collisions become more likely when molecules are larger or number density is higher.

<PhysicsDerivation
  items={[
    {
      label: "Number density",
      tex: "\\frac{N}{V}",
    },
    {
      label: "Collision cross-section",
      tex: "\\pi(2r)^2=4\\pi r^2",
    },
    {
      label: "Mean free path",
      tex: "\\lambda=\\frac{1}{4\\sqrt{2}\\pi r^2(N/V)}",
    },
    {
      label: "Mean free time",
      tex: "t_{\\mathrm{mean}}=\\frac{\\lambda}{v}",
    },
  ]}
/>

## Rules

These are the compact speed-distribution and collision estimates.

<Equation label="Most probable" tex="v_{\mathrm{mp}}=\sqrt{\frac{2RT}{M}}" />

<Equation label="Mean speed" tex="\bar v=\sqrt{\frac{8RT}{\pi M}}" />

<Equation label="RMS speed" tex="v_{\mathrm{rms}}=\sqrt{\frac{3RT}{M}}" />

<Equation label="Mean free path" tex="\lambda=\frac{1}{4\sqrt{2}\pi r^2(N/V)}" />

<Equation label="Mean free time" tex="t_{\mathrm{mean}}=\frac{\lambda}{v}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Estimate \\(v_{\\mathrm{rms}}\\) for nitrogen molecules at \\(300\\,\\mathrm{K}\\), using \\(M=2.8\\times10^{-2}\\,\\mathrm{kg\\,mol^{-1}}\\).",
      answer: "\\[v_{\\mathrm{rms}}=\\sqrt{\\frac{3RT}{M}}=\\sqrt{\\frac{3(8.31)(300)}{2.8\\times10^{-2}}}=5.2\\times10^2\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "If a gas temperature is quadrupled while molar mass is unchanged, what happens to \\(v_{\\mathrm{rms}}\\)?",
      answer: "Since \\(v_{\\mathrm{rms}}\\propto\\sqrt{T}\\), quadrupling \\(T\\) doubles \\(v_{\\mathrm{rms}}\\).",
    },
  ]}
/>

## Checks

- Use kelvins in speed formulas.
- The RMS speed is larger than the mean speed for the Maxwell-Boltzmann distribution.
- At the same temperature, lighter molecules move faster on average.
- Mean free path depends on number density and molecular size, not directly on molecular speed.`;
