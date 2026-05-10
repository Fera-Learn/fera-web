export const content = String.raw`## Principle

Particle processes are governed by four interactions: strong, electromagnetic, weak, and gravitational. Their different ranges, strengths, and exchange particles explain which processes occur.

## Notation

<Notation
  items={[
    { symbol: "\\gamma", meaning: "photon, electromagnetic exchange particle", unit: "" },
    { symbol: "g", meaning: "gluon, strong exchange particle", unit: "" },
    { symbol: "W^\\pm", meaning: "charged weak exchange bosons", unit: "" },
    { symbol: "Z^0", meaning: "neutral weak exchange boson", unit: "" },
    { symbol: "r", meaning: "interaction range", unit: "m" },
    { symbol: "m_X", meaning: "exchange-particle mass", unit: "kg, GeV/c^{2}" },
  ]}
/>

## Method

### Derivation 1: Range depends on exchange mass

Massless exchange particles give long-range interactions. Massive exchange particles give short-range interactions.

<PhysicsDerivation
  items={[
    {
      label: "Range estimate",
      tex: "r\\sim\\frac{\\hbar}{m_Xc}",
    },
    {
      label: "Massless exchange",
      tex: "m_X=0\\Rightarrow r\\to\\infty",
    },
  ]}
/>

### Derivation 2: Identify the interaction from what changes

Electromagnetic processes conserve particle flavour. Weak processes can change flavour and can involve neutrinos.

<PhysicsDerivation
  items={[
    {
      label: "Electromagnetic",
      tex: "q\\ \\mathrm{unchanged}",
    },
    {
      label: "Weak decay",
      tex: "n\\to p+e^-+\\bar\\nu_e",
    },
  ]}
/>

### Derivation 3: Strong interaction confines quarks

Gluons couple to colour charge, so isolated quarks are not observed at low energies.

<PhysicsDerivation
  items={[
    {
      label: "Hadron condition",
      tex: "\\mathrm{colour\\ neutral}",
    },
    {
      label: "Confinement",
      tex: "q\\ \\mathrm{not\\ isolated}",
    },
  ]}
/>

## Rules

<Equation label="Range estimate" tex="r\sim\frac{\hbar}{m_Xc}" />

<Equation label="Beta decay example" tex="n\to p+e^-+\bar\nu_e" />

<Equation label="Charge conservation" tex="\sum Q_i=\sum Q_f" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Which interaction is responsible for beta decay?",
      answer: "The weak interaction, because a neutron changes into a proton while emitting an electron and antineutrino.",
    },
    {
      title: "Example 2",
      question: "Why is electromagnetism long range?",
      answer: "Its exchange particle, the photon, is massless.",
    },
  ]}
/>

## Checks

- Strong interactions bind quarks inside hadrons.
- Electromagnetic interactions act on electric charge.
- Weak interactions allow flavour change and neutrino processes.
- Gravity is negligible in most particle experiments but important cosmologically.`;
