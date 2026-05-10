export const content = String.raw`## Principle

Large-angle alpha scattering shows that atomic positive charge is concentrated in a tiny nucleus.

## Notation

<Notation
  items={[
    { symbol: "Z", meaning: "nuclear charge number", unit: "" },
    { symbol: "e", meaning: "elementary charge", unit: "C" },
    { symbol: "r", meaning: "distance from nucleus", unit: "m" },
    { symbol: "K", meaning: "alpha-particle kinetic energy", unit: "J" },
    { symbol: "k", meaning: "Coulomb constant", unit: "N m^{2} C^{-2}" },
    { symbol: "b", meaning: "impact parameter", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Model the alpha-nucleus force

An alpha particle has charge \\(+2e\\). A nucleus with charge \\(+Ze\\) repels it by Coulomb's law.

<PhysicsDerivation
  items={[
    {
      label: "Coulomb force",
      tex: "F=\\frac{k(2e)(Ze)}{r^2}",
    },
    {
      label: "Potential energy",
      tex: "U=\\frac{k(2e)(Ze)}{r}",
    },
  ]}
/>

### Derivation 2: Estimate closest approach

For a head-on approach, the alpha particle momentarily stops at closest approach.

<PhysicsDerivation
  items={[
    {
      label: "Energy conversion",
      tex: "K=\\frac{2kZe^2}{r_{\\min}}",
    },
    {
      label: "Closest approach",
      tex: "r_{\\min}=\\frac{2kZe^2}{K}",
    },
  ]}
/>

### Derivation 3: Interpret rare large deflections

Most alpha particles pass through because atoms are mostly empty space. Rare large deflections require a compact massive positive centre.

## Rules

<Equation label="Alpha charge" tex="q_\alpha=+2e" />

<Equation label="Nuclear charge" tex="q_N=+Ze" />

<Equation label="Closest approach" tex="r_{\min}=\frac{2kZe^2}{K}" />

<Equation label="Nuclear scale" tex="R\sim10^{-15}\,\mathrm m" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An alpha particle scatters through a large angle. What does that imply about the atom?",
      answer: "It passed close to a concentrated positive nucleus. A diffuse positive charge would not produce the strong repulsive force needed for a large deflection.",
    },
    {
      title: "Example 2",
      question: "If an atom is \\(10^{-10}\\,\\mathrm m\\) across and its nucleus is \\(10^{-15}\\,\\mathrm m\\), compare the scales.",
      answer: "The atom is about \\(10^5\\) times wider than the nucleus, so most of the atomic volume is empty space.",
    },
  ]}
/>

## Checks

- Large deflections are rare but decisive.
- The nucleus carries positive charge and most atomic mass.
- Electrons occupy the surrounding atomic region.
- Classical nuclear orbits alone cannot explain stable atoms.`;
