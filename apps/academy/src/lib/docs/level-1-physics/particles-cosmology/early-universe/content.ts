export const content = String.raw`## Principle

The early universe was hotter, denser, and more radiation dominated. As it expanded, it cooled, allowing particles, nuclei, atoms, and the cosmic microwave background to form.

## Notation

<Notation
  items={[
    { symbol: "T", meaning: "temperature", unit: "K" },
    { symbol: "a", meaning: "scale factor", unit: "1" },
    { symbol: "z", meaning: "redshift", unit: "1" },
    { symbol: "k_B", meaning: "Boltzmann constant", unit: "J K^{-1}" },
    { symbol: "E", meaning: "typical particle energy", unit: "J, eV" },
    { symbol: "\\rho", meaning: "energy density", unit: "J m^{-3}" },
  ]}
/>

## Method

### Derivation 1: Expansion cools radiation

Photon wavelengths stretch with the scale factor, so photon energies and radiation temperature fall as the universe expands.

<PhysicsDerivation
  items={[
    {
      label: "Photon energy",
      tex: "E=\\frac{hc}{\\lambda}",
    },
    {
      label: "Temperature scaling",
      tex: "T\\propto\\frac1a",
    },
  ]}
/>

### Derivation 2: Redshift gives past temperature

Because \\(1+z=a_0/a\\), the temperature at redshift \\(z\\) was higher by the same factor.

<PhysicsDerivation
  items={[
    {
      label: "Scale factor",
      tex: "1+z=\\frac{a_0}{a}",
    },
    {
      label: "Temperature-redshift relation",
      tex: "T(z)=T_0(1+z)",
    },
  ]}
/>

### Derivation 3: Matter and radiation dilute differently

Matter density falls with volume, while radiation also loses photon energy through redshift.

<PhysicsDerivation
  items={[
    {
      label: "Matter density",
      tex: "\\rho_m\\propto a^{-3}",
    },
    {
      label: "Radiation density",
      tex: "\\rho_r\\propto a^{-4}",
    },
  ]}
/>

## Rules

<Equation label="Temperature scaling" tex="T\propto\frac1a" />

<Equation label="Redshift temperature" tex="T(z)=T_0(1+z)" />

<Equation label="Thermal energy scale" tex="E\sim k_BT" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "If today's CMB temperature is \\(2.7\\,\\mathrm K\\), estimate the temperature at \\(z=999\\).",
      answer: "\\(T=T_0(1+z)=2.7(1000)=2700\\,\\mathrm K\\).",
    },
    {
      title: "Example 2",
      question: "Why did neutral atoms form only after the universe cooled?",
      answer: "Before cooling, typical photon energies were high enough to ionize atoms. After cooling, electrons could remain bound to nuclei.",
    },
  ]}
/>

## Checks

- Earlier times correspond to smaller \\(a\\), larger \\(z\\), and higher \\(T\\).
- Nucleosynthesis required hot dense conditions but not temperatures so high that nuclei were instantly broken apart.
- The CMB comes from the epoch when photons decoupled from matter.
- Radiation density falls faster than matter density during expansion.`;
