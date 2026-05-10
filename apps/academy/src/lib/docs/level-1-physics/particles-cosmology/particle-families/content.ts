export const content = String.raw`## Principle

Matter particles are organized into leptons and quarks. Quarks form hadrons, while each particle has an antiparticle with opposite additive quantum numbers.

## Notation

<Notation
  items={[
    { symbol: "Q", meaning: "electric charge in units of e", unit: "1" },
    { symbol: "B", meaning: "baryon number", unit: "1" },
    { symbol: "L", meaning: "lepton number", unit: "1" },
    { symbol: "q", meaning: "quark", unit: "" },
    { symbol: "\\bar q", meaning: "antiquark", unit: "" },
    { symbol: "e", meaning: "elementary charge magnitude", unit: "C" },
  ]}
/>

## Method

### Derivation 1: Classify by constituents

Leptons are fundamental in the Standard Model. Hadrons are composite states made from quarks.

<PhysicsDerivation
  items={[
    {
      label: "Baryon content",
      tex: "qqq",
    },
    {
      label: "Meson content",
      tex: "q\\bar q",
    },
  ]}
/>

### Derivation 2: Add charges

Hadron charge is the sum of constituent quark charges.

<PhysicsDerivation
  items={[
    {
      label: "Proton",
      tex: "uud:\\quad Q=\\frac23+\\frac23-\\frac13=+1",
    },
    {
      label: "Neutron",
      tex: "udd:\\quad Q=\\frac23-\\frac13-\\frac13=0",
    },
  ]}
/>

### Derivation 3: Antiparticles reverse additive quantum numbers

Antiparticles have the same rest mass but opposite charge, baryon number, lepton number, and other additive quantum numbers.

<PhysicsDerivation
  items={[
    {
      label: "Particle",
      tex: "Q,B,L",
    },
    {
      label: "Antiparticle",
      tex: "-Q,-B,-L",
    },
  ]}
/>

## Rules

<Equation label="Baryon structure" tex="\mathrm{baryon}=qqq" />

<Equation label="Meson structure" tex="\mathrm{meson}=q\bar q" />

<Equation label="Charge conservation" tex="\sum Q_i=\sum Q_f" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the charge of a \\(u\\bar d\\) meson.",
      answer: "\\(Q=+2/3+1/3=+1\\), so the meson is positively charged.",
    },
    {
      title: "Example 2",
      question: "Why is a proton a baryon?",
      answer: "It is made from three quarks, \\(uud\\), and has baryon number \\(+1\\).",
    },
  ]}
/>

## Checks

- Leptons are not made of quarks.
- Baryons contain three quarks or three antiquarks.
- Mesons contain a quark and an antiquark.
- Charge, baryon number, and lepton number must balance in allowed reactions.`;
