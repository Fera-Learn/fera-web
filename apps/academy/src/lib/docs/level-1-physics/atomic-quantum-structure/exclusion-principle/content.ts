export const content = String.raw`## Principle

The Pauli exclusion principle says no two identical fermions in the same system can occupy the same quantum state. For electrons in atoms, no two electrons can have the same four quantum numbers.

This principle explains shell structure, chemical periodicity, and the two-electron capacity of each orbital.

## Notation

<Notation
  items={[
    { symbol: "n", meaning: "principal quantum number", unit: "1" },
    { symbol: "\\ell", meaning: "orbital angular momentum quantum number", unit: "1" },
    { symbol: "m_\\ell", meaning: "magnetic quantum number", unit: "1" },
    { symbol: "m_s", meaning: "spin projection quantum number", unit: "1" },
    { symbol: "N", meaning: "number of states or electrons", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Label a one-electron state

An atomic electron state is specified by four quantum numbers.

<PhysicsDerivation
  items={[
    {
      label: "State label",
      tex: "(n,\\ell,m_\\ell,m_s)",
    },
    {
      label: "Spin choices",
      tex: "m_s=\\pm\\frac12",
    },
  ]}
/>

### Derivation 2: Count orbital occupancy

A spatial orbital has fixed \\(n\\), \\(\ell\\), and \\(m_\ell\\). The only remaining distinction is spin.

<PhysicsDerivation
  items={[
    {
      label: "One spatial orbital",
      tex: "m_s=+\\frac12\\quad\\mathrm{or}\\quad-\\frac12",
    },
    {
      label: "Maximum orbital occupancy",
      tex: "N_{\\mathrm{orbital}}=2",
    },
  ]}
/>

### Derivation 3: Count shell capacity

Counting all allowed \\(\ell\\), \\(m_\ell\\), and spin states in shell \\(n\\) gives \\(2n^2\\) states.

<PhysicsDerivation
  items={[
    {
      label: "Spatial orbitals in shell",
      tex: "N_{\\mathrm{orbitals}}=n^2",
    },
    {
      label: "Electron capacity",
      tex: "N_e=2n^2",
    },
  ]}
/>

## Rules

<Equation label="Electron state label" tex="(n,\ell,m_\ell,m_s)" />

<Equation label="Spin choices" tex="m_s=\pm\frac12" />

<Equation label="Orbital capacity" tex="N_{\mathrm{orbital}}=2" />

<Equation label="Shell capacity" tex="N_e=2n^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why can a \\(1s\\) orbital hold only two electrons?",
      answer: "The \\(1s\\) orbital fixes \\(n=1\\), \\(\\ell=0\\), and \\(m_\\ell=0\\). Only two spin values remain, so only two electrons can occupy it.",
    },
    {
      title: "Example 2",
      question: "How many electrons can the \\(n=3\\) shell hold?",
      answer: "\\[N_e=2n^2=2(3^2)=18\\]",
    },
  ]}
/>

## Checks

- Pauli exclusion applies to identical fermions.
- Electrons in the same orbital must have opposite spin projections.
- A subshell with \\(2\ell+1\\) orbitals holds \\(2(2\ell+1)\\) electrons.
- Shell filling follows from quantum-state counting.`;
