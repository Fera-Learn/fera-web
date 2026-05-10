export const content = String.raw`## Principle

In AC circuits, resistors oppose current with resistance, while capacitors and inductors oppose current with frequency-dependent reactance.

## Notation

<Notation
  items={[
    { symbol: "R", meaning: "resistance", unit: "\\Omega" },
    { symbol: "X_C", meaning: "capacitive reactance", unit: "\\Omega" },
    { symbol: "X_L", meaning: "inductive reactance", unit: "\\Omega" },
    { symbol: "C", meaning: "capacitance", unit: "F" },
    { symbol: "L", meaning: "inductance", unit: "H" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "Z", meaning: "impedance magnitude", unit: "\\Omega" },
  ]}
/>

## Method

### Derivation 1: Resistor phase

For a resistor, voltage and current are in phase. The ratio of rms voltage to rms current is \\(R\\).

<PhysicsDerivation
  items={[
    {
      label: "Resistor",
      tex: "V_R=IR",
    },
    {
      label: "Phase",
      tex: "\\phi_R=0",
    },
  ]}
/>

### Derivation 2: Capacitive reactance

For a capacitor, current leads voltage by \\(90^\\circ\\). The reactance decreases as frequency increases.

<PhysicsDerivation
  items={[
    {
      label: "Capacitive reactance",
      tex: "X_C=\\frac{1}{\\omega C}",
    },
    {
      label: "Capacitor rms relation",
      tex: "V_C=IX_C",
    },
  ]}
/>

### Derivation 3: Inductive reactance

For an inductor, voltage leads current by \\(90^\\circ\\). The reactance increases as frequency increases.

<PhysicsDerivation
  items={[
    {
      label: "Inductive reactance",
      tex: "X_L=\\omega L",
    },
    {
      label: "Inductor rms relation",
      tex: "V_L=IX_L",
    },
  ]}
/>

## Rules

<Equation label="Resistor" tex="V_R=IR\quad\text{in phase}" />

<Equation label="Capacitor" tex="X_C=\frac{1}{\omega C},\qquad V_C=IX_C" />

<Equation label="Inductor" tex="X_L=\omega L,\qquad V_L=IX_L" />

<Equation label="Frequency trend" tex="X_C\downarrow\text{ as }\omega\uparrow,\qquad X_L\uparrow\text{ as }\omega\uparrow" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find \\(X_L\\) for \\(L=0.20\\,\\mathrm H\\) at \\(f=50\\,\\mathrm{Hz}\\).",
      answer: "\\[\\omega=2\\pi f=314\\,\\mathrm{rad\\,s^{-1}}\\]\\[X_L=\\omega L=(314)(0.20)=62.8\\,\\Omega\\]",
    },
    {
      title: "Example 2",
      question: "Find \\(X_C\\) for \\(C=20\\,\\mu\\mathrm F\\) at \\(f=50\\,\\mathrm{Hz}\\).",
      answer: "\\[X_C=\\frac{1}{\\omega C}=\\frac{1}{(314)(20\\times10^{-6})}=159\\,\\Omega\\]",
    },
  ]}
/>

## Checks

- Reactance has units of ohms.
- Capacitors pass high frequencies more easily than low frequencies.
- Inductors oppose high-frequency changes more strongly.
- Do not add \\(R\\), \\(X_L\\), and \\(X_C\\) as simple scalar voltages unless they are in phase.`;
