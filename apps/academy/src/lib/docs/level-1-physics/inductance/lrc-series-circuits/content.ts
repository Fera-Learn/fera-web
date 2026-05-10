export const content = String.raw`## Principle

A series LRC circuit combines oscillation, damping, and resistance-controlled energy loss.

## Notation

<Notation
  items={[
    { symbol: "R", meaning: "series resistance", unit: "\\Omega" },
    { symbol: "L", meaning: "inductance", unit: "H" },
    { symbol: "C", meaning: "capacitance", unit: "F" },
    { symbol: "q(t)", meaning: "capacitor charge", unit: "C" },
    { symbol: "I(t)", meaning: "series current", unit: "A" },
    { symbol: "\\omega_0", meaning: "undamped natural angular frequency", unit: "rad s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Free series equation

For a source-free series LRC circuit, the inductor voltage, resistor drop, and capacitor voltage sum to zero.

<PhysicsDerivation
  items={[
    {
      label: "Loop equation",
      tex: "L\\frac{dI}{dt}+RI+\\frac{q}{C}=0",
    },
    {
      label: "Current relation",
      tex: "I=\\frac{dq}{dt}",
    },
    {
      label: "Charge equation",
      tex: "L\\frac{d^2q}{dt^2}+R\\frac{dq}{dt}+\\frac{q}{C}=0",
    },
  ]}
/>

### Derivation 2: Damping

Resistance removes electromagnetic energy and damps the oscillation.

<PhysicsDerivation
  items={[
    {
      label: "Undamped frequency",
      tex: "\\omega_0=\\frac{1}{\\sqrt{LC}}",
    },
    {
      label: "Damping coefficient",
      tex: "\\gamma=\\frac{R}{2L}",
    },
    {
      label: "Underdamped frequency",
      tex: "\\omega_d=\\sqrt{\\omega_0^2-\\gamma^2}",
    },
    {
      label: "Energy loss rate",
      tex: "\\frac{dU}{dt}=-I^2R",
    },
  ]}
/>

### Derivation 3: Regimes

The circuit oscillates only if damping is weak enough.

<PhysicsDerivation
  items={[
    {
      label: "Underdamped",
      tex: "R<2\\sqrt{\\frac{L}{C}}",
    },
    {
      label: "Critical damping",
      tex: "R=2\\sqrt{\\frac{L}{C}}",
    },
    {
      label: "Overdamped",
      tex: "R>2\\sqrt{\\frac{L}{C}}",
    },
  ]}
/>

## Rules

<Equation label="Series LRC equation" tex="\displaystyle L\frac{d^2q}{dt^2}+R\frac{dq}{dt}+\frac{q}{C}=0" />

<Equation label="Natural frequency" tex="\displaystyle \omega_0=\frac{1}{\sqrt{LC}}" />

<Equation label="Damping coefficient" tex="\displaystyle \gamma=\frac{R}{2L}" />

<Equation label="Damped frequency" tex="\displaystyle \omega_d=\sqrt{\frac{1}{LC}-\frac{R^2}{4L^2}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "For \\(L=0.50\\,\\mathrm{H}\\), \\(C=20\\,\\mu\\mathrm{F}\\), and \\(R=20\\,\\Omega\\), find \\(\\omega_0\\).",
      answer: "\\[\\omega_0=\\frac{1}{\\sqrt{LC}}=\\frac{1}{\\sqrt{(0.50)(20\\times10^{-6})}}=316\\,\\mathrm{rad\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "With the same \\(L\\) and \\(C\\), find the critical resistance.",
      answer: "\\[R_c=2\\sqrt{\\frac{L}{C}}=2\\sqrt{\\frac{0.50}{20\\times10^{-6}}}=316\\,\\Omega\\]",
    },
  ]}
/>

## Checks

- Resistance reduces total electromagnetic energy.
- Weak damping gives decaying oscillations; strong damping gives no oscillation.
- The AC-driven LRC resonance model is handled separately in the AC circuits section.`;
