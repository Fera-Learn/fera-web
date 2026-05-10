export const content = String.raw`## Principle

The Bohr model explains hydrogen lines by quantizing electron angular momentum and energy.

## Notation

<Notation
  items={[
    { symbol: "n", meaning: "principal quantum number", unit: "" },
    { symbol: "r_n", meaning: "Bohr orbit radius", unit: "m" },
    { symbol: "E_n", meaning: "hydrogen energy level", unit: "eV" },
    { symbol: "a_0", meaning: "Bohr radius", unit: "m" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "m_e", meaning: "electron mass", unit: "kg" },
  ]}
/>

## Method

### Derivation 1: Quantize angular momentum

The standing-wave condition around a circular orbit gives integer angular momentum.

<PhysicsDerivation
  items={[
    {
      label: "Standing wave",
      tex: "2\\pi r_n=n\\lambda",
    },
    {
      label: "de Broglie relation",
      tex: "\\lambda=\\frac{h}{m_ev}",
    },
    {
      label: "Angular momentum",
      tex: "m_evr_n=n\\hbar",
    },
  ]}
/>

### Derivation 2: Use hydrogen level energies

Combining Coulomb attraction with angular-momentum quantization gives discrete radii and energies.

<PhysicsDerivation
  items={[
    {
      label: "Radius levels",
      tex: "r_n=n^2a_0",
    },
    {
      label: "Energy levels",
      tex: "E_n=-\\frac{13.6\\,\\mathrm{eV}}{n^2}",
    },
  ]}
/>

### Derivation 3: Calculate spectral lines

A photon energy equals the difference between two Bohr energy levels.

## Rules

<Equation label="Quantized angular momentum" tex="m_evr_n=n\hbar" />

<Equation label="Bohr radius levels" tex="r_n=n^2a_0" />

<Equation label="Hydrogen energies" tex="E_n=-\frac{13.6\,\mathrm{eV}}{n^2}" />

<Equation label="Transition photon" tex="E_\gamma=E_i-E_f" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the energy of the \\(n=2\\) hydrogen level.",
      answer: "\\[E_2=-\\frac{13.6}{2^2}=-3.40\\,\\mathrm{eV}\\]",
    },
    {
      title: "Example 2",
      question: "Find the photon energy for \\(n=3\\to n=2\\).",
      answer: "\\[E_3=-1.51\\,\\mathrm{eV},\\quad E_2=-3.40\\,\\mathrm{eV}\\]\\[E_\\gamma=E_3-E_2=1.89\\,\\mathrm{eV}\\]",
    },
  ]}
/>

## Checks

- Bound hydrogen levels have negative energy.
- Larger \\(n\\) means less negative energy and larger radius.
- Emission goes from higher \\(n\\) to lower \\(n\\).
- The Bohr model is useful for hydrogen-like atoms, not general multi-electron atoms.`;
