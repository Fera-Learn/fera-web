export const content = String.raw`## Principle

An equation of state relates the macroscopic state variables of matter after the system has reached equilibrium.

For a gas, the most useful state variables are pressure, volume, amount of substance, and absolute temperature.

## Notation

<Notation
  items={[
    { symbol: "p", meaning: "absolute pressure", unit: "Pa" },
    { symbol: "V", meaning: "volume", unit: "m^{3}" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
    { symbol: "n", meaning: "amount of substance", unit: "mol" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "N", meaning: "number of molecules", unit: "1" },
    { symbol: "k_B", meaning: "Boltzmann constant", unit: "J K^{-1}" },
    { symbol: "a,b", meaning: "van der Waals constants", unit: "varies" },
  ]}
/>

## Method

### Derivation 1: Build the ideal-gas state relation

Experiments on dilute gases show that pressure increases with amount and temperature, and decreases when the same gas occupies a larger volume.

<PhysicsDerivation
  items={[
    {
      label: "Amount dependence",
      tex: "p\\propto n",
    },
    {
      label: "Temperature dependence",
      tex: "p\\propto T",
    },
    {
      label: "Volume dependence",
      tex: "p\\propto \\frac{1}{V}",
    },
    {
      label: "Ideal-gas equation",
      tex: "pV=nRT",
    },
  ]}
/>

For a fixed amount of ideal gas, \\(nR\\) is constant, so state comparisons can avoid explicitly finding \\(n\\).

<PhysicsDerivation
  items={[
    {
      label: "Fixed amount",
      tex: "\\frac{pV}{T}=nR",
    },
    {
      label: "Two states",
      tex: "\\frac{p_1V_1}{T_1}=\\frac{p_2V_2}{T_2}",
    },
  ]}
/>

### Derivation 2: Write the molecular form

Since \\(N=nN_A\\) and \\(R=N_Ak_B\\), the same equation can be written per molecule.

<PhysicsDerivation
  items={[
    {
      label: "Molecule count",
      tex: "N=nN_A",
    },
    {
      label: "Gas constants",
      tex: "R=N_Ak_B",
    },
    {
      label: "Molecular equation",
      tex: "pV=Nk_BT",
    },
  ]}
/>

Real gases depart from the ideal model when molecular size and intermolecular attractions matter. The van der Waals equation adds a volume correction and a pressure correction.

<PhysicsDerivation
  items={[
    {
      label: "Finite molecular size",
      tex: "V\\to V-nb",
    },
    {
      label: "Attraction correction",
      tex: "p\\to p+a\\frac{n^2}{V^2}",
    },
    {
      label: "Real-gas model",
      tex: "\\left(p+a\\frac{n^2}{V^2}\\right)(V-nb)=nRT",
    },
  ]}
/>

## Rules

These are the compact state equations used in this section.

<Equation label="Ideal gas" tex="pV=nRT" />

<Equation label="Fixed amount" tex="\frac{p_1V_1}{T_1}=\frac{p_2V_2}{T_2}" />

<Equation label="Molecular form" tex="pV=Nk_BT" />

<Equation label="Molecules and moles" tex="N=nN_A" />

<Equation label="van der Waals" tex="\left(p+a\frac{n^2}{V^2}\right)(V-nb)=nRT" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the volume of \\(0.50\\,\\mathrm{mol}\\) of ideal gas at \\(300\\,\\mathrm{K}\\) and \\(1.20\\times10^5\\,\\mathrm{Pa}\\).",
      answer: "\\[V=\\frac{nRT}{p}=\\frac{(0.50)(8.31)(300)}{1.20\\times10^5}=1.04\\times10^{-2}\\,\\mathrm{m^3}\\]",
    },
    {
      title: "Example 2",
      question: "A fixed amount of ideal gas has \\(p_1=100\\,\\mathrm{kPa}\\), \\(V_1=2.0\\,\\mathrm{L}\\), and \\(T_1=300\\,\\mathrm{K}\\). It is changed to \\(V_2=1.5\\,\\mathrm{L}\\) and \\(T_2=360\\,\\mathrm{K}\\). Find \\(p_2\\).",
      answer: "\\[p_2=p_1\\frac{V_1}{V_2}\\frac{T_2}{T_1}=100\\left(\\frac{2.0}{1.5}\\right)\\left(\\frac{360}{300}\\right)=160\\,\\mathrm{kPa}\\]",
    },
  ]}
/>

## Checks

- Use absolute pressure and absolute temperature in gas equations.
- Convert litres to cubic metres when using SI units.
- The ideal-gas equation is a model, not a universal equation for all matter.
- Real-gas corrections matter most at high density and low temperature.`;
