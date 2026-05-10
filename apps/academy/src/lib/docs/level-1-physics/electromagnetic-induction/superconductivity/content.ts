export const content = String.raw`## Principle

Superconductors have zero dc resistance and expel magnetic flux below their critical conditions.

## Notation

<Notation
  items={[
    { symbol: "T_c", meaning: "critical temperature", unit: "K" },
    { symbol: "B_c", meaning: "critical magnetic field scale", unit: "T" },
    { symbol: "J_c", meaning: "critical current density scale", unit: "A m^{-2}" },
    { symbol: "\\Phi_0", meaning: "magnetic flux quantum", unit: "Wb" },
    { symbol: "h", meaning: "Planck constant", unit: "J s" },
    { symbol: "e", meaning: "elementary charge", unit: "C" },
  ]}
/>

## Method

### Derivation 1: Zero resistance is not the whole story

A perfect conductor would preserve whatever magnetic flux it had before resistance vanished. A superconductor actively expels magnetic field from its interior in the Meissner effect.

<PhysicsDerivation
  items={[
    {
      label: "dc resistance",
      tex: "R=0",
    },
    {
      label: "Interior field",
      tex: "B\\approx0\\quad\\text{inside a bulk superconductor}",
    },
  ]}
/>

### Derivation 2: Critical conditions

Superconductivity is destroyed when temperature, field, or current density exceeds material-dependent critical values.

<PhysicsDerivation
  items={[
    {
      label: "Temperature condition",
      tex: "T<T_c",
    },
    {
      label: "Field condition",
      tex: "B<B_c",
    },
    {
      label: "Current condition",
      tex: "J<J_c",
    },
  ]}
/>

### Derivation 3: Flux quantization

In superconducting rings, magnetic flux appears in discrete units because the coherent charge carriers have charge \\(2e\\).

<PhysicsDerivation
  items={[
    {
      label: "Flux quantum",
      tex: "\\Phi_0=\\frac{h}{2e}",
    },
    {
      label: "Allowed flux",
      tex: "\\Phi=n\\Phi_0",
    },
  ]}
/>

## Rules

These are core superconductivity facts for induction contexts.

<Equation label="Zero resistance" tex="R=0" />

<Equation label="Meissner interior" tex="B\approx0" />

<Equation label="Flux quantum" tex="\Phi_0=\frac{h}{2e}" />

<Equation label="Quantized flux" tex="\Phi=n\Phi_0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why can a persistent current flow in a superconducting ring?",
      answer: "With \\(R=0\\), there is no ohmic power loss \\(I^2R\\), so a current can persist without a battery once established.",
    },
    {
      title: "Example 2",
      question: "What distinguishes a superconductor from a perfect conductor?",
      answer: "A superconductor expels magnetic field in the Meissner effect. A merely perfect conductor would only keep magnetic flux from changing.",
    },
  ]}
/>

## Checks

- Zero resistance does not by itself explain the Meissner effect.
- Superconductivity only holds below critical temperature, field, and current limits.
- Flux quantization uses charge \\(2e\\), not \\(e\\).
- Type-II superconductors can admit quantized vortices between critical field values.`;
