export const content = String.raw`## Principle

A wave function is a probability amplitude; its squared magnitude gives probability density, not material displacement.

## Notation

<Notation
  items={[
    { symbol: "\\psi(x,t)", meaning: "one-dimensional wave function", unit: "m^{-1/2}" },
    { symbol: "|\\psi|^2", meaning: "probability density", unit: "m^{-1}" },
    { symbol: "A", meaning: "normalization constant", unit: "varies" },
    { symbol: "\\langle x\\rangle", meaning: "expectation value of position", unit: "m" },
    { symbol: "\\Delta x", meaning: "standard uncertainty in position", unit: "m" },
    { symbol: "\\phi", meaning: "phase of a complex wave function", unit: "rad" },
  ]}
/>

## Method

### Derivation 1: Probability from amplitude

The wave function itself is not a directly measured density. Probability comes from its modulus squared.

<PhysicsDerivation
  items={[
    {
      label: "Probability density",
      tex: "\\rho(x,t)=|\\psi(x,t)|^2",
    },
    {
      label: "Interval probability",
      tex: "P_{[a,b]}=\\int_a^b |\\psi(x,t)|^2\\,dx",
    },
  ]}
/>

### Derivation 2: Normalization

If the particle must be somewhere on the allowed line, the total probability is one.

<PhysicsDerivation
  items={[
    {
      label: "Normalizable state",
      tex: "\\int_{-\\infty}^{\\infty}|\\psi(x,t)|^2\\,dx=1",
    },
    {
      label: "Find a constant",
      tex: "|A|^2\\int |f(x)|^2\\,dx=1",
    },
  ]}
/>

### Derivation 3: Averages

Expectation values are probability-weighted averages over many identically prepared systems.

<PhysicsDerivation
  items={[
    {
      label: "Mean position",
      tex: "\\langle x\\rangle=\\int_{-\\infty}^{\\infty}x|\\psi|^2\\,dx",
    },
    {
      label: "Position spread",
      tex: "(\\Delta x)^2=\\langle x^2\\rangle-\\langle x\\rangle^2",
    },
  ]}
/>

## Rules

These formulas apply to a normalized one-dimensional state.

<Equation label="Normalization" tex="\int_{-\infty}^{\infty}|\psi|^2\,dx=1" />

<Equation label="Interval probability" tex="P_{[a,b]}=\int_a^b|\psi|^2\,dx" />

<Equation label="Position expectation" tex="\langle x\rangle=\int_{-\infty}^{\infty}x|\psi|^2\,dx" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A particle is described by \\(\\psi=A\\sin(\\pi x/L)\\) on \\(0\\le x\\le L\\), zero elsewhere. Find \\(A\\).",
      answer: "Use \\(1=|A|^2\\int_0^L\\sin^2(\\pi x/L)\\,dx=|A|^2L/2\\), so \\(A=\\sqrt{2/L}\\).",
    },
    {
      title: "Example 2",
      question: "If \\(\\psi\\) is multiplied by \\(e^{i\\alpha}\\), what changes in \\(|\\psi|^2\\)?",
      answer: "Nothing changes, because \\(|e^{i\\alpha}\\psi|^2=|\\psi|^2\\). A global phase has no probability effect.",
    },
  ]}
/>

## Checks

- Normalize before calculating probabilities or expectation values.
- Use \\(|\\psi|^2\\), not \\(\psi\\), as the probability density.
- A global phase is unobservable; relative phase can affect interference.
- A physically bound state must be square-integrable.`;
