export const content = String.raw`## Principle

Macroscopic matter properties come from molecule number, molecular mass, spacing, and intermolecular forces.

Thermal models become clearer when bulk quantities such as mass and density are connected to microscopic counts.

## Notation

<Notation
  items={[
    { symbol: "N", meaning: "number of molecules or atoms", unit: "1" },
    { symbol: "n", meaning: "amount of substance", unit: "mol" },
    { symbol: "N_A", meaning: "Avogadro constant", unit: "mol^{-1}" },
    { symbol: "M", meaning: "molar mass", unit: "kg mol^{-1}" },
    { symbol: "m", meaning: "total sample mass", unit: "kg" },
    { symbol: "m_0", meaning: "mass of one molecule", unit: "kg" },
    { symbol: "\\rho", meaning: "mass density", unit: "kg m^{-3}" },
    { symbol: "r", meaning: "typical molecular separation", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Count molecules from moles

The mole is a counting unit. Once the amount of substance is known, the molecular count follows.

<PhysicsDerivation
  items={[
    {
      label: "Molecule count",
      tex: "N=nN_A",
    },
    {
      label: "Mass per molecule",
      tex: "m_0=\\frac{M}{N_A}",
    },
    {
      label: "Total mass",
      tex: "m=Nm_0=nM",
    },
  ]}
/>

### Derivation 2: Connect density to spacing

Density is a bulk average. A rough microscopic spacing estimate comes from assigning each molecule an average volume \\(V/N\\).

<PhysicsDerivation
  items={[
    {
      label: "Number density",
      tex: "\\frac{N}{V}",
    },
    {
      label: "Average molecular volume",
      tex: "V_{\\mathrm{per}}=\\frac{V}{N}",
    },
    {
      label: "Spacing estimate",
      tex: "r\\sim\\left(\\frac{V}{N}\\right)^{1/3}",
    },
    {
      label: "Density relation",
      tex: "\\rho=\\frac{m}{V}=\\frac{nM}{V}",
    },
  ]}
/>

Intermolecular forces help explain phases. Solids keep molecules near fixed equilibrium positions, liquids keep short-range spacing but allow rearrangement, and gases have molecules separated enough that interactions are brief except during collisions.

## Rules

These are the compact molecular bookkeeping relations.

<Equation label="Molecule count" tex="N=nN_A" />

<Equation label="Molecule mass" tex="m_0=\frac{M}{N_A}" />

<Equation label="Sample mass" tex="m=nM" />

<Equation label="Density" tex="\rho=\frac{nM}{V}" />

<Equation label="Spacing estimate" tex="r\sim\left(\frac{V}{N}\right)^{1/3}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A sample contains \\(0.25\\,\\mathrm{mol}\\) of molecules. Estimate the number of molecules.",
      answer: "\\[N=nN_A=(0.25)(6.02\\times10^{23})=1.5\\times10^{23}\\]",
    },
    {
      title: "Example 2",
      question: "Nitrogen gas has molar mass \\(2.8\\times10^{-2}\\,\\mathrm{kg\\,mol^{-1}}\\). Find the mass of one molecule.",
      answer: "\\[m_0=\\frac{M}{N_A}=\\frac{2.8\\times10^{-2}}{6.02\\times10^{23}}=4.7\\times10^{-26}\\,\\mathrm{kg}\\]",
    },
  ]}
/>

## Checks

- Molar mass in SI is kilograms per mole, not grams per mole.
- Number density \\(N/V\\) is not the same as mass density \\(m/V\\).
- Molecular spacing estimates are order-of-magnitude models.
- Phase behavior depends on both molecular kinetic energy and intermolecular forces.`;
