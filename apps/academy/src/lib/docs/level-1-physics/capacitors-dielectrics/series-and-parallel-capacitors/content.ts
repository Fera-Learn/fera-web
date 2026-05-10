export const content = String.raw`## Principle

Capacitor networks reduce by matching the constraint: common voltage in parallel, common charge in series.

## Notation

<Notation
  items={[
    { symbol: "C_{\\mathrm{eq}}", meaning: "equivalent capacitance", unit: "F" },
    { symbol: "C_i", meaning: "capacitance of capacitor i", unit: "F" },
    { symbol: "Q_i", meaning: "charge magnitude on capacitor i", unit: "C" },
    { symbol: "V_i", meaning: "voltage across capacitor i", unit: "V" },
    { symbol: "V", meaning: "voltage across the network", unit: "V" },
    { symbol: "Q", meaning: "charge supplied to the equivalent capacitor", unit: "C" },
  ]}
/>

## Method

### Derivation 1: Parallel capacitors

Parallel capacitors share the same two nodes, so they have the same voltage.

<PhysicsDerivation
  items={[
    {
      label: "Common voltage",
      tex: "V_i=V",
    },
    {
      label: "Total charge",
      tex: "Q=\\sum_i Q_i=\\sum_i C_iV",
    },
    {
      label: "Equivalent charge",
      tex: "Q=C_{\\mathrm{eq}}V",
    },
    {
      label: "Parallel rule",
      tex: "C_{\\mathrm{eq}}=\\sum_i C_i",
    },
  ]}
/>

### Derivation 2: Series capacitors

Series capacitors carry the same charge because the intermediate conductor plates receive equal and opposite induced charge.

<PhysicsDerivation
  items={[
    {
      label: "Common charge",
      tex: "Q_i=Q",
    },
    {
      label: "Total voltage",
      tex: "V=\\sum_i V_i=\\sum_i \\frac{Q}{C_i}",
    },
    {
      label: "Equivalent voltage",
      tex: "V=\\frac{Q}{C_{\\mathrm{eq}}}",
    },
    {
      label: "Series rule",
      tex: "\\frac{1}{C_{\\mathrm{eq}}}=\\sum_i\\frac{1}{C_i}",
    },
  ]}
/>

### Derivation 3: Series voltage division

Once \\(C_\{\\mathrm\{eq\}}\\) is known, the common series charge is \\(Q=C_\{\\mathrm\{eq\}}V\\).

<PhysicsDerivation
  items={[
    {
      label: "Capacitor voltage",
      tex: "V_i=\\frac{Q}{C_i}",
    },
    {
      label: "Substitute network charge",
      tex: "V_i=\\frac{C_{\\mathrm{eq}}}{C_i}V",
    },
  ]}
/>

## Rules

These are the network reduction rules.

<Equation label="Parallel voltage" tex="V_i=V" />

<Equation label="Parallel equivalent" tex="C_{\mathrm{eq}}=\sum_i C_i" />

<Equation label="Series charge" tex="Q_i=Q" />

<Equation label="Series equivalent" tex="\frac{1}{C_{\mathrm{eq}}}=\sum_i\frac{1}{C_i}" />

<Equation label="Series voltage" tex="V_i=\frac{C_{\mathrm{eq}}}{C_i}V" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the equivalent capacitance of \\(3.0\\,\\mu\\mathrm{F}\\) and \\(5.0\\,\\mu\\mathrm{F}\\) in parallel.",
      answer: "\\[C_{\\mathrm{eq}}=3.0+5.0=8.0\\,\\mu\\mathrm{F}\\]",
    },
    {
      title: "Example 2",
      question: "Find the equivalent capacitance of \\(3.0\\,\\mu\\mathrm{F}\\) and \\(6.0\\,\\mu\\mathrm{F}\\) in series.",
      answer: "\\[\\frac{1}{C_{\\mathrm{eq}}}=\\frac{1}{3.0}+\\frac{1}{6.0}=\\frac{1}{2.0}\\quad\\Rightarrow\\quad C_{\\mathrm{eq}}=2.0\\,\\mu\\mathrm{F}\\]",
    },
  ]}
/>

## Checks

- Parallel capacitors add to a larger capacitance than any one branch.
- Series equivalent capacitance is smaller than the smallest series capacitor.
- In series, voltages split inversely with capacitance.
- In parallel, charges split in proportion to capacitance.`;
