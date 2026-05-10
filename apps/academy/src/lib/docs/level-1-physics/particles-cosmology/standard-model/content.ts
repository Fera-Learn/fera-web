export const content = String.raw`## Principle

The Standard Model organizes matter into quarks and leptons, and interactions into exchange bosons. It explains a wide range of particle data but does not include every known feature of the universe.

## Notation

<Notation
  items={[
    { symbol: "q", meaning: "quark", unit: "" },
    { symbol: "\\ell", meaning: "charged lepton", unit: "" },
    { symbol: "\\nu", meaning: "neutrino", unit: "" },
    { symbol: "\\gamma", meaning: "photon", unit: "" },
    { symbol: "W^\\pm,Z^0", meaning: "weak bosons", unit: "" },
    { symbol: "H", meaning: "Higgs boson", unit: "" },
  ]}
/>

## Method

### Derivation 1: Matter particles are fermions

Fermions are grouped in three generations. Ordinary matter mostly uses first-generation particles.

<PhysicsDerivation
  items={[
    {
      label: "First generation",
      tex: "u,d,e^-,\\nu_e",
    },
    {
      label: "Higher generations",
      tex: "\\mu,\\tau,c,s,t,b",
    },
  ]}
/>

### Derivation 2: Interactions use bosons

Each interaction in the Standard Model has associated exchange particles.

<PhysicsDerivation
  items={[
    {
      label: "Electromagnetic",
      tex: "\\gamma",
    },
    {
      label: "Weak",
      tex: "W^\\pm,Z^0",
    },
    {
      label: "Strong",
      tex: "g",
    },
  ]}
/>

### Derivation 3: Conservation laws test reactions

Allowed particle processes must satisfy exact conservation laws such as charge and energy-momentum conservation.

<PhysicsDerivation
  items={[
    {
      label: "Charge conservation",
      tex: "\\sum Q_i=\\sum Q_f",
    },
    {
      label: "Energy-momentum conservation",
      tex: "p_i^\\mu=p_f^\\mu",
    },
  ]}
/>

## Rules

<Equation label="Charge conservation" tex="\sum Q_i=\sum Q_f" />

<Equation label="First generation" tex="u,d,e^-,\nu_e" />

<Equation label="Weak bosons" tex="W^\pm,\ Z^0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Classify an electron in the Standard Model.",
      answer: "An electron is a first-generation charged lepton.",
    },
    {
      title: "Example 2",
      question: "Which boson is associated with electromagnetic interactions?",
      answer: "The photon, \\(\\gamma\\).",
    },
  ]}
/>

## Checks

- Quarks and leptons are matter fermions.
- Photons, gluons, and weak bosons are interaction bosons.
- The Higgs field is associated with elementary-particle masses.
- The Standard Model is powerful but incomplete.`;
