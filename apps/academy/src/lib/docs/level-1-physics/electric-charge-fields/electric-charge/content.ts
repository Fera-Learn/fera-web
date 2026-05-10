export const content = String.raw`## Principle

Electric charge is a conserved scalar property that appears in positive and negative units of the elementary charge.

## Notation

<Notation
  items={[
    { symbol: "q,Q", meaning: "electric charge", unit: "C" },
    { symbol: "e", meaning: "elementary charge magnitude", unit: "C" },
    { symbol: "N", meaning: "integer number of elementary charges", unit: "1" },
    { symbol: "n_p,n_e", meaning: "numbers of protons and electrons", unit: "1" },
    { symbol: "Q_{\\mathrm{tot}}", meaning: "total charge of an isolated system", unit: "C" },
  ]}
/>

## Method

### Derivation 1: Build net charge from carriers

Ordinary matter contains positive proton charge and negative electron charge. Net charge is the algebraic sum of those contributions.

<PhysicsDerivation
  items={[
    {
      label: "Proton contribution",
      tex: "Q_p=n_p e",
    },
    {
      label: "Electron contribution",
      tex: "Q_e=-n_e e",
    },
    {
      label: "Net charge",
      tex: "Q=(n_p-n_e)e",
    },
  ]}
/>

### Derivation 2: Quantization and conservation

Charge changes by moving charged particles, not by creating arbitrary fractions of charge in macroscopic matter.

<PhysicsDerivation
  items={[
    {
      label: "Quantized charge",
      tex: "q=Ne\\qquad N\\in\\mathbb{Z}",
    },
    {
      label: "Isolated system",
      tex: "\\Delta Q_{\\mathrm{tot}}=0",
      note: "Charges may move inside the system, but the algebraic total is unchanged.",
    },
    {
      label: "Transfer between bodies",
      tex: "\\Delta Q_A=-\\Delta Q_B",
    },
  ]}
/>

## Rules

These are the compact results from the charge model above.

<Equation label="Elementary charge" tex="e=1.60\times10^{-19}\,\mathrm{C}" />

<Equation label="Quantized charge" tex="q=Ne" />

<Equation label="Net matter charge" tex="Q=(n_p-n_e)e" />

<Equation label="Charge conservation" tex="\Delta Q_{\mathrm{tot}}=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A small object gains \\(2.5\\times10^8\\) electrons. Find its change in charge.",
      answer: "Gaining electrons gives negative charge. \\[\\Delta Q=-(2.5\\times10^8)(1.60\\times10^{-19})=-4.0\\times10^{-11}\\,\\mathrm{C}\\]",
    },
    {
      title: "Example 2",
      question: "Two isolated metal spheres exchange charge. Sphere A changes by \\(+6.0\\,\\mathrm{nC}\\). What is the charge change of sphere B?",
      answer: "The total charge of the isolated pair is conserved, so \\(\\Delta Q_B=-\\Delta Q_A=-6.0\\,\\mathrm{nC}\\).",
    },
  ]}
/>

## Checks

- Positive and negative charges add algebraically.
- A neutral object has zero net charge, not zero charged particles.
- Charge transfer changes where charge is, not the isolated total.
- A physical charge must be an integer multiple of \\(e\\).`;
