export const content = String.raw`## Principle

An ideal LC circuit swaps energy between electric and magnetic fields sinusoidally.

## Notation

<Notation
  items={[
    { symbol: "L", meaning: "inductance", unit: "H" },
    { symbol: "C", meaning: "capacitance", unit: "F" },
    { symbol: "q(t)", meaning: "capacitor charge", unit: "C" },
    { symbol: "I(t)", meaning: "circuit current", unit: "A" },
    { symbol: "\\omega_0", meaning: "natural angular frequency", unit: "rad s^{-1}" },
    { symbol: "T", meaning: "oscillation period", unit: "s" },
  ]}
/>

## Method

### Derivation 1: Loop equation

In an ideal LC circuit, the capacitor voltage and inductor voltage sum to zero.

<PhysicsDerivation
  items={[
    {
      label: "Loop equation",
      tex: "L\\frac{dI}{dt}+\\frac{q}{C}=0",
    },
    {
      label: "Current-charge relation",
      tex: "I=\\frac{dq}{dt}",
    },
    {
      label: "Oscillator equation",
      tex: "\\frac{d^2q}{dt^2}+\\frac{1}{LC}q=0",
    },
  ]}
/>

### Derivation 2: Natural frequency

The charge obeys the same mathematical form as simple harmonic motion.

<PhysicsDerivation
  items={[
    {
      label: "Angular frequency",
      tex: "\\omega_0=\\frac{1}{\\sqrt{LC}}",
    },
    {
      label: "Period",
      tex: "T=2\\pi\\sqrt{LC}",
    },
    {
      label: "Charge solution",
      tex: "q(t)=Q\\cos(\\omega_0t+\\phi)",
    },
  ]}
/>

### Derivation 3: Energy exchange

Energy moves between capacitor electric field and inductor magnetic field.

<PhysicsDerivation
  items={[
    {
      label: "Capacitor energy",
      tex: "U_E=\\frac{q^2}{2C}",
    },
    {
      label: "Inductor energy",
      tex: "U_B=\\frac{1}{2}LI^2",
    },
    {
      label: "Total energy",
      tex: "U=\\frac{q^2}{2C}+\\frac{1}{2}LI^2",
    },
  ]}
/>

## Rules

<Equation label="Natural frequency" tex="\displaystyle \omega_0=\frac{1}{\sqrt{LC}}" />

<Equation label="Period" tex="T=2\pi\sqrt{LC}" />

<Equation label="Energy conservation" tex="\displaystyle \frac{q^2}{2C}+\frac12LI^2=\text{constant}" />

<Equation label="Maximum current" tex="\displaystyle I_{\max}=\frac{Q}{\sqrt{LC}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An LC circuit has \\(L=0.20\\,\\mathrm{H}\\) and \\(C=50\\,\\mu\\mathrm{F}\\). Find \\(\\omega_0\\).",
      answer: "\\[\\omega_0=\\frac{1}{\\sqrt{LC}}=\\frac{1}{\\sqrt{(0.20)(50\\times10^{-6})}}=316\\,\\mathrm{rad\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A capacitor starts with charge \\(Q\\) and zero current. When \\(q=0\\), what is the energy form?",
      answer: "All ideal circuit energy is magnetic: \\(U=\\frac12LI_{\\max}^2\\).",
    },
  ]}
/>

## Checks

- Ideal LC oscillations require no resistance.
- Current is largest when capacitor charge is zero.
- Capacitor energy is largest when current is zero.`;
