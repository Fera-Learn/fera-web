export const content = String.raw`## Principle

A resistor network can be reduced when the circuit geometry forces a simple constraint. Resistors in series carry the same current. Resistors in parallel share the same potential difference.

## Notation

<Notation
  items={[
    { symbol: "R_{\\mathrm{eq}}", meaning: "equivalent resistance at two terminals", unit: "\\Omega" },
    { symbol: "R_i", meaning: "individual resistance", unit: "\\Omega" },
    { symbol: "I", meaning: "current through a branch", unit: "A" },
    { symbol: "V", meaning: "potential difference across a network", unit: "V" },
    { symbol: "V_i", meaning: "potential difference across one resistor", unit: "V" },
    { symbol: "P", meaning: "electrical power dissipated", unit: "W" },
  ]}
/>

## Method

### Derivation 1: Series resistors

In a series chain, charge has only one path, so the current through every resistor is the same. The total potential difference is the sum of the drops.

<PhysicsDerivation
  items={[
    {
      label: "Potential drops add",
      tex: "V=V_1+V_2+\\cdots",
    },
    {
      label: "Use Ohm's law",
      tex: "V=IR_1+IR_2+\\cdots",
    },
    {
      label: "Factor the common current",
      tex: "V=I(R_1+R_2+\\cdots)",
    },
    {
      label: "Equivalent resistance",
      tex: "R_{\\mathrm{eq}}=R_1+R_2+\\cdots",
    },
  ]}
/>

### Derivation 2: Parallel resistors

In a parallel group, each branch connects to the same two nodes, so every branch has the same potential difference. The total current is the sum of branch currents.

<PhysicsDerivation
  items={[
    {
      label: "Currents add",
      tex: "I=I_1+I_2+\\cdots",
    },
    {
      label: "Use Ohm's law in each branch",
      tex: "I=\\frac{V}{R_1}+\\frac{V}{R_2}+\\cdots",
    },
    {
      label: "Factor the common voltage",
      tex: "I=V\\left(\\frac{1}{R_1}+\\frac{1}{R_2}+\\cdots\\right)",
    },
    {
      label: "Equivalent resistance",
      tex: "\\frac{1}{R_{\\mathrm{eq}}}=\\frac{1}{R_1}+\\frac{1}{R_2}+\\cdots",
    },
  ]}
/>

### Derivation 3: Divider relations

Once a network is reduced, the unreduced circuit still contains the individual currents and voltages. Dividers recover them from the common constraint.

<PhysicsDerivation
  items={[
    {
      label: "Series voltage divider",
      tex: "V_i=IR_i=\\frac{R_i}{R_{\\mathrm{eq}}}V",
    },
    {
      label: "Two-branch current divider",
      tex: "I_1=\\frac{V}{R_1}=\\frac{R_2}{R_1+R_2}I",
    },
  ]}
/>

## Rules

<Equation label="Ohm's law" tex="V=IR" />

<Equation label="Series resistors" tex="R_{\mathrm{eq}}=R_1+R_2+\cdots" />

<Equation label="Parallel resistors" tex="\frac{1}{R_{\mathrm{eq}}}=\frac{1}{R_1}+\frac{1}{R_2}+\cdots" />

<Equation label="Two resistors in parallel" tex="R_{\mathrm{eq}}=\frac{R_1R_2}{R_1+R_2}" />

<Equation label="Power in a resistor" tex="P=IV=I^2R=\frac{V^2}{R}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(12\\,\\mathrm{V}\\) source is connected to \\(3.0\\,\\Omega\\) and \\(5.0\\,\\Omega\\) in series. Find the current.",
      answer: "\\[R_{\\mathrm{eq}}=8.0\\,\\Omega,\\qquad I=\\frac{12}{8.0}=1.5\\,\\mathrm{A}\\]",
    },
    {
      title: "Example 2",
      question: "A \\(6.0\\,\\Omega\\) resistor and a \\(3.0\\,\\Omega\\) resistor are connected in parallel. Find \\(R_{\\mathrm{eq}}\\).",
      answer: "\\[R_{\\mathrm{eq}}=\\frac{(6.0)(3.0)}{6.0+3.0}=2.0\\,\\Omega\\]",
    },
  ]}
/>

## Checks

- A series equivalent resistance is larger than any individual resistor in the chain.
- A parallel equivalent resistance is smaller than the smallest branch resistance.
- In series, larger resistance gets a larger voltage drop.
- In parallel, smaller resistance gets a larger current.
- Equivalent resistance preserves the terminal current for the same terminal voltage; it does not erase the internal branch behavior.`;
