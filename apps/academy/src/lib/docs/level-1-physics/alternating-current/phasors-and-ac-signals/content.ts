export const content = String.raw`## Principle

Alternating-current signals vary sinusoidally in time. A phasor represents a sinusoid as a rotating vector, so phase differences become angle differences.

## Notation

<Notation
  items={[
    { symbol: "v(t)", meaning: "instantaneous voltage", unit: "V" },
    { symbol: "i(t)", meaning: "instantaneous current", unit: "A" },
    { symbol: "V_0, I_0", meaning: "peak voltage and current", unit: "V, A" },
    { symbol: "V_{\\mathrm{rms}}, I_{\\mathrm{rms}}", meaning: "root-mean-square voltage and current", unit: "V, A" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "f", meaning: "frequency", unit: "Hz" },
    { symbol: "\\phi", meaning: "phase angle", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Write the sinusoid

An AC source is often modeled by a sine or cosine with fixed amplitude and angular frequency.

<PhysicsDerivation
  items={[
    {
      label: "Voltage signal",
      tex: "v(t)=V_0\\cos(\\omega t+\\phi_v)",
    },
    {
      label: "Current signal",
      tex: "i(t)=I_0\\cos(\\omega t+\\phi_i)",
    },
    {
      label: "Frequency relation",
      tex: "\\omega=2\\pi f",
    },
  ]}
/>

### Derivation 2: Convert peak to rms

RMS values give the equivalent DC value for heating in a resistor. For a sinusoid, the rms value is the peak value divided by \\(\sqrt2\\).

<PhysicsDerivation
  items={[
    {
      label: "RMS voltage",
      tex: "V_{\\mathrm{rms}}=\\frac{V_0}{\\sqrt2}",
    },
    {
      label: "RMS current",
      tex: "I_{\\mathrm{rms}}=\\frac{I_0}{\\sqrt2}",
    },
  ]}
/>

### Derivation 3: Compare phases

The phase difference is \\(\phi_v-\phi_i\\). If the voltage phasor is ahead of the current phasor, voltage leads current. If it is behind, voltage lags current.

## Rules

<Equation label="Angular frequency" tex="\omega=2\pi f" />

<Equation label="Period" tex="T=\frac{1}{f}=\frac{2\pi}{\omega}" />

<Equation label="Sinusoidal rms" tex="V_{\mathrm{rms}}=\frac{V_0}{\sqrt2},\qquad I_{\mathrm{rms}}=\frac{I_0}{\sqrt2}" />

<Equation label="Phase difference" tex="\phi=\phi_v-\phi_i" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A sinusoidal voltage has peak value \\(170\\,\\mathrm V\\). Find its rms value.",
      answer: "\\[V_{\\mathrm{rms}}=\\frac{V_0}{\\sqrt2}=\\frac{170}{\\sqrt2}=120\\,\\mathrm V\\]",
    },
    {
      title: "Example 2",
      question: "An AC signal has frequency \\(50\\,\\mathrm{Hz}\\). Find \\(\\omega\\).",
      answer: "\\[\\omega=2\\pi f=2\\pi(50)=314\\,\\mathrm{rad\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Use peak values in instantaneous sinusoid equations.
- Use rms values for average power calculations.
- Phase is an angle, so keep radians and degrees consistent.
- Phasors are a steady-state sinusoidal tool; they do not describe transients by themselves.`;
