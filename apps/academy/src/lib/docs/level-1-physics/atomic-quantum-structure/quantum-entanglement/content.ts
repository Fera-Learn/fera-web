export const content = String.raw`## Principle

Entanglement occurs when a combined quantum state cannot be described as independent states for its parts. Measurements on one part are correlated with measurements on the other, even when the parts are far apart.

Entanglement gives stronger correlations than ordinary ignorance about pre-existing values, but it does not allow faster-than-light signalling.

## Notation

<Notation
  items={[
    { symbol: "|0\\rangle,|1\\rangle", meaning: "two-state basis vectors", unit: "1" },
    { symbol: "|\\uparrow\\rangle,|\\downarrow\\rangle", meaning: "spin basis states", unit: "1" },
    { symbol: "|\\Psi\\rangle", meaning: "combined quantum state", unit: "1" },
    { symbol: "P", meaning: "measurement probability", unit: "1" },
    { symbol: "A,B", meaning: "two subsystems", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Compare product and entangled states

A product state factors into a state for subsystem A times a state for subsystem B. An entangled state does not.

<PhysicsDerivation
  items={[
    {
      label: "Product state",
      tex: "|\\Psi\\rangle=|\\psi_A\\rangle|\\psi_B\\rangle",
    },
    {
      label: "Bell-like entangled state",
      tex: "|\\Psi\\rangle=\\frac{1}{\\sqrt2}(|0\\rangle_A|1\\rangle_B+|1\\rangle_A|0\\rangle_B)",
    },
  ]}
/>

### Derivation 2: Extract probabilities

The squared magnitude of each amplitude gives the probability of that joint outcome.

<PhysicsDerivation
  items={[
    {
      label: "Equal amplitudes",
      tex: "\\left|\\frac{1}{\\sqrt2}\\right|^2=\\frac12",
    },
    {
      label: "Allowed outcomes",
      tex: "P(01)=\\frac12,\\quad P(10)=\\frac12",
    },
  ]}
/>

### Derivation 3: Interpret correlations

Measuring one subsystem updates the state used to predict the other subsystem. It does not send a controllable message.

<PhysicsDerivation
  items={[
    {
      label: "Marginal randomness",
      tex: "P(A=0)=P(A=1)=\\frac12",
    },
    {
      label: "Perfect anticorrelation",
      tex: "A=0\\Rightarrow B=1",
    },
  ]}
/>

## Rules

<Equation label="Product state" tex="|\Psi\rangle=|\psi_A\rangle|\psi_B\rangle" />

<Equation label="Bell-like state" tex="|\Psi\rangle=\frac{1}{\sqrt2}(|0\rangle_A|1\rangle_B+|1\rangle_A|0\rangle_B)" />

<Equation label="Born rule" tex="P=|\mathrm{amplitude}|^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "For \\(|\\Psi\\rangle=(|01\\rangle+|10\\rangle)/\\sqrt2\\), what are the possible joint outcomes?",
      answer: "The possible outcomes are \\(01\\) and \\(10\\), each with probability \\(1/2\\).",
    },
    {
      title: "Example 2",
      question: "If subsystem A is measured as \\(0\\) in that state, what is predicted for subsystem B?",
      answer: "Subsystem B is predicted to be \\(1\\) with certainty for the same basis measurement.",
    },
  ]}
/>

## Checks

- Entanglement is a property of the combined state.
- Each local result can be random even when joint results are strongly correlated.
- Entanglement cannot be used to send controllable faster-than-light messages.
- Bell tests distinguish entanglement from simple local hidden-variable models.`;
