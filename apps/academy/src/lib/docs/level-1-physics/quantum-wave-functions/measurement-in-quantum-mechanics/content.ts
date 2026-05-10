export const content = String.raw`## Principle

A measurement yields an eigenvalue with probability set by the state's projection onto the corresponding eigenstate.

## Notation

<Notation
  items={[
    { symbol: "\\hat A", meaning: "observable operator", unit: "varies" },
    { symbol: "a_n", meaning: "eigenvalue of the observable", unit: "varies" },
    { symbol: "|a_n\\rangle", meaning: "eigenstate of the observable", unit: "1" },
    { symbol: "c_n", meaning: "probability amplitude in an eigenbasis", unit: "1" },
    { symbol: "P_n", meaning: "probability of result n", unit: "1" },
    { symbol: "\\langle A\\rangle", meaning: "expectation value of A", unit: "unit of A" },
  ]}
/>

## Method

### Derivation 1: Eigenvalue model

An ideal measurement of an observable returns one of its eigenvalues.

<PhysicsDerivation
  items={[
    {
      label: "Eigenvalue equation",
      tex: "\\hat A|a_n\\rangle=a_n|a_n\\rangle",
    },
    {
      label: "State expansion",
      tex: "|\\psi\\rangle=\\sum_n c_n|a_n\\rangle",
    },
  ]}
/>

### Derivation 2: Born rule

The squared magnitude of each coefficient gives the corresponding outcome probability.

<PhysicsDerivation
  items={[
    {
      label: "Outcome probability",
      tex: "P_n=|c_n|^2",
    },
    {
      label: "Normalized amplitudes",
      tex: "\\sum_n |c_n|^2=1",
    },
  ]}
/>

### Derivation 3: Expectation value

The expectation value is the probability-weighted average of repeated measurement outcomes.

<PhysicsDerivation
  items={[
    {
      label: "Discrete expectation",
      tex: "\\langle A\\rangle=\\sum_n a_n|c_n|^2",
    },
    {
      label: "Operator expectation",
      tex: "\\langle A\\rangle=\\langle\\psi|\\hat A|\\psi\\rangle",
    },
  ]}
/>

## Rules

For an ideal projective measurement:

<Equation label="Born probability" tex="P_n=|\langle a_n|\psi\rangle|^2" />

<Equation label="Expectation value" tex="\langle A\rangle=\langle\psi|\hat A|\psi\rangle" />

<Equation label="Uncertainty" tex="\Delta A=\sqrt{\langle A^2\rangle-\langle A\rangle^2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A state is \\(|\\psi\\rangle=(3/5)|a_1\\rangle+(4/5)|a_2\\rangle\\). What are the two measurement probabilities?",
      answer: "\\(P_1=|3/5|^2=9/25\\) and \\(P_2=|4/5|^2=16/25\\).",
    },
    {
      title: "Example 2",
      question: "What state remains immediately after measuring result \\(a_2\\) in a nondegenerate ideal measurement?",
      answer: "The state becomes the eigenstate \\(|a_2\\rangle\\), up to an overall phase.",
    },
  ]}
/>

## Checks

- Probabilities come from amplitudes in the measurement basis.
- The expectation value need not be an allowed single-shot measurement result.
- Repeating the same ideal measurement immediately gives the same result.
- Noncommuting observables cannot generally have sharp values in the same state.`;
