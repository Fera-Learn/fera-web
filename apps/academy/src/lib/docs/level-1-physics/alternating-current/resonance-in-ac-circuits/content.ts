export const content = String.raw`## Principle

Series resonance occurs when inductive and capacitive reactances are equal. The circuit impedance is then purely resistive and the current is maximum.

## Notation

<Notation
  items={[
    { symbol: "\\omega_0", meaning: "resonant angular frequency", unit: "rad s^{-1}" },
    { symbol: "f_0", meaning: "resonant frequency", unit: "Hz" },
    { symbol: "L", meaning: "inductance", unit: "H" },
    { symbol: "C", meaning: "capacitance", unit: "F" },
    { symbol: "R", meaning: "series resistance", unit: "\\Omega" },
    { symbol: "Q", meaning: "quality factor", unit: "" },
    { symbol: "\\Delta\\omega", meaning: "bandwidth", unit: "rad s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Set reactances equal

At resonance in a series LRC circuit, \\(X_L=X_C\\).

<PhysicsDerivation
  items={[
    {
      label: "Resonance condition",
      tex: "\\omega_0L=\\frac{1}{\\omega_0C}",
    },
    {
      label: "Resonant angular frequency",
      tex: "\\omega_0=\\frac{1}{\\sqrt{LC}}",
    },
    {
      label: "Resonant frequency",
      tex: "f_0=\\frac{1}{2\\pi\\sqrt{LC}}",
    },
  ]}
/>

### Derivation 2: Minimize impedance

At resonance, the reactive part \\(X_L-X_C\\) is zero, so \\(Z=R\\). The current is then as large as the resistance allows.

<PhysicsDerivation
  items={[
    {
      label: "Impedance at resonance",
      tex: "Z_{\\mathrm{res}}=R",
    },
    {
      label: "Maximum current",
      tex: "I_{\\max}=\\frac{V_{\\mathrm{rms}}}{R}",
    },
  ]}
/>

### Derivation 3: Measure sharpness

The quality factor describes how sharp the resonance is. A small resistance gives a large \\(Q\\) and a narrow bandwidth.

<PhysicsDerivation
  items={[
    {
      label: "Series quality factor",
      tex: "Q=\\frac{\\omega_0L}{R}=\\frac{1}{\\omega_0CR}",
    },
    {
      label: "Bandwidth estimate",
      tex: "\\Delta\\omega=\\frac{\\omega_0}{Q}",
    },
  ]}
/>

## Rules

<Equation label="Resonance condition" tex="X_L=X_C" />

<Equation label="Resonant angular frequency" tex="\omega_0=\frac{1}{\sqrt{LC}}" />

<Equation label="Resonant frequency" tex="f_0=\frac{1}{2\pi\sqrt{LC}}" />

<Equation label="Series quality factor" tex="Q=\frac{\omega_0L}{R}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find \\(f_0\\) for \\(L=0.20\\,\\mathrm H\\) and \\(C=5.0\\,\\mu\\mathrm F\\).",
      answer: "\\[f_0=\\frac{1}{2\\pi\\sqrt{LC}}=\\frac{1}{2\\pi\\sqrt{(0.20)(5.0\\times10^{-6})}}=159\\,\\mathrm{Hz}\\]",
    },
    {
      title: "Example 2",
      question: "At resonance, a series circuit has \\(R=40\\,\\Omega\\) and \\(V_{\\mathrm{rms}}=120\\,\\mathrm V\\). Find the rms current.",
      answer: "\\[I_{\\mathrm{rms}}=\\frac{V_{\\mathrm{rms}}}{R}=\\frac{120}{40}=3.0\\,\\mathrm A\\]",
    },
  ]}
/>

## Checks

- Resonance in a series LRC circuit maximizes current.
- At resonance, source voltage and current are in phase.
- The capacitor and inductor voltages can be large but opposite in phase.
- Increasing resistance broadens the resonance and lowers \\(Q\\).`;
