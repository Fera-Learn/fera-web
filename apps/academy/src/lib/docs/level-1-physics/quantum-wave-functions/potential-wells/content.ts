export const content = String.raw`## Principle

A finite potential well confines bound states by oscillation inside the well and exponential decay outside it.

## Notation

<Notation
  items={[
    { symbol: "V_0", meaning: "well depth or outside potential height", unit: "J" },
    { symbol: "a", meaning: "half-width for a symmetric well", unit: "m" },
    { symbol: "E", meaning: "bound-state energy", unit: "J" },
    { symbol: "k", meaning: "oscillation wave number inside the well", unit: "m^{-1}" },
    { symbol: "\\kappa", meaning: "decay constant outside the well", unit: "m^{-1}" },
    { symbol: "\\ell", meaning: "penetration depth", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Two spatial behaviors

The time-independent equation changes character depending on the sign of kinetic energy.

<PhysicsDerivation
  items={[
    {
      label: "Classically allowed region",
      tex: "E>V\\Rightarrow \\frac{d^2\\psi}{dx^2}=-k^2\\psi",
    },
    {
      label: "Classically forbidden region",
      tex: "E<V\\Rightarrow \\frac{d^2\\psi}{dx^2}=\\kappa^2\\psi",
    },
  ]}
/>

### Derivation 2: Wave numbers

The allowed region oscillates; the forbidden region decays for a bound state.

<PhysicsDerivation
  items={[
    {
      label: "Inside a zero-potential well",
      tex: "k=\\frac{\\sqrt{2mE}}{\\hbar}",
    },
    {
      label: "Outside a finite well",
      tex: "\\kappa=\\frac{\\sqrt{2m(V_0-E)}}{\\hbar}",
    },
    {
      label: "Penetration depth",
      tex: "\\ell=\\frac{1}{\\kappa}",
    },
  ]}
/>

### Derivation 3: Matching conditions

Finite jumps in potential require smooth joining of the state and its slope.

<PhysicsDerivation
  items={[
    {
      label: "Continuity of wave function",
      tex: "\\psi_{\\mathrm{left}}=\\psi_{\\mathrm{right}}",
    },
    {
      label: "Continuity of derivative",
      tex: "\\frac{d\\psi_{\\mathrm{left}}}{dx}=\\frac{d\\psi_{\\mathrm{right}}}{dx}",
    },
  ]}
/>

## Rules

For a symmetric finite well with oscillatory interior and decaying exterior:

<Equation label="Inside wave number" tex="k=\frac{\sqrt{2mE}}{\hbar}" />

<Equation label="Outside decay constant" tex="\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}" />

<Equation label="Penetration depth" tex="\ell=\frac{1}{\kappa}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "If \\(E\\) approaches \\(V_0\\) from below, what happens to the outside tail?",
      answer: "The decay constant \\(\\kappa=\\sqrt{2m(V_0-E)}/\\hbar\\) decreases, so the penetration depth \\(1/\\kappa\\) increases.",
    },
    {
      title: "Example 2",
      question: "Why are finite-well energies lower than corresponding infinite-well energies for the same width?",
      answer: "The wave function leaks outside the finite well, increasing the effective confinement length and reducing curvature and kinetic energy.",
    },
  ]}
/>

## Checks

- Bound states require normalizable tails, not growing exponentials.
- Finite wells allow nonzero probability outside the classically allowed region.
- Deeper or wider wells support more bound states.
- Parity simplifies symmetric wells into even and odd solutions.`;
