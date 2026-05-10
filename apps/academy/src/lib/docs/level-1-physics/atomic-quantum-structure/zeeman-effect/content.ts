export const content = String.raw`## Principle

The Zeeman effect is the splitting of atomic energy levels in an external magnetic field. It occurs because angular momentum gives an atom a magnetic moment that interacts with the field.

The simplest model treats the splitting as proportional to magnetic field strength and magnetic quantum number.

## Notation

<Notation
  items={[
    { symbol: "B", meaning: "external magnetic field", unit: "T" },
    { symbol: "\\mu_B", meaning: "Bohr magneton", unit: "J T^{-1}" },
    { symbol: "m_\\ell", meaning: "orbital magnetic quantum number", unit: "1" },
    { symbol: "m_j", meaning: "total angular momentum magnetic quantum number", unit: "1" },
    { symbol: "g", meaning: "g-factor", unit: "1" },
    { symbol: "\\Delta E", meaning: "energy shift or spacing", unit: "J" },
  ]}
/>

## Method

### Derivation 1: Magnetic moment in a field

A magnetic moment has energy that depends on its orientation relative to the field.

<PhysicsDerivation
  items={[
    {
      label: "Magnetic interaction",
      tex: "U=-\\vec\\mu\\cdot\\vec B",
    },
    {
      label: "Bohr magneton",
      tex: "\\mu_B=\\frac{e\\hbar}{2m_e}",
    },
  ]}
/>

### Derivation 2: Quantize the projection

The magnetic field selects a direction, so the angular-momentum projection matters.

<PhysicsDerivation
  items={[
    {
      label: "Normal Zeeman shift",
      tex: "\\Delta E=m_\\ell\\mu_BB",
    },
    {
      label: "Adjacent spacing",
      tex: "\\Delta E_{\\mathrm{adj}}=\\mu_BB",
    },
  ]}
/>

### Derivation 3: Convert energy splitting to frequency

Spectral lines split because transition energies split.

<PhysicsDerivation
  items={[
    {
      label: "Photon energy shift",
      tex: "\\Delta E=h\\Delta f",
    },
    {
      label: "Frequency spacing",
      tex: "\\Delta f=\\frac{\\mu_BB}{h}",
    },
  ]}
/>

## Rules

<Equation label="Magnetic interaction" tex="U=-\vec\mu\cdot\vec B" />

<Equation label="Bohr magneton" tex="\mu_B=\frac{e\hbar}{2m_e}" />

<Equation label="Normal Zeeman shift" tex="\Delta E=m_\ell\mu_BB" />

<Equation label="Frequency shift" tex="\Delta f=\frac{\Delta E}{h}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the adjacent Zeeman spacing for \\(B=1.50\\,\\mathrm{T}\\) using \\(\\mu_B=5.79\\times10^{-5}\\,\\mathrm{eV\\,T^{-1}}\\).",
      answer: "\\[\\Delta E=\\mu_BB=(5.79\\times10^{-5})(1.50)=8.69\\times10^{-5}\\,\\mathrm{eV}\\]",
    },
    {
      title: "Example 2",
      question: "What happens to the splitting if \\(B\\) is doubled?",
      answer: "The splitting is proportional to \\(B\\), so it doubles.",
    },
  ]}
/>

## Checks

- No magnetic field means no Zeeman splitting.
- Stronger fields produce larger splittings in the simple linear model.
- Splitting depends on allowed magnetic quantum numbers.
- Real atoms can require spin and total-angular-momentum g-factors.`;
