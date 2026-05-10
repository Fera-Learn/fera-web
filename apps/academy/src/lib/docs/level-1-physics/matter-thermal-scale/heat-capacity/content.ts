export const content = String.raw`## Principle

Heat capacity measures how much energy is needed to change a system's temperature.

At the molecular scale, heat capacity depends on which microscopic energy modes can accept energy at the temperature of interest.

## Notation

<Notation
  items={[
    { symbol: "C", meaning: "heat capacity of an object", unit: "J K^{-1}" },
    { symbol: "c", meaning: "specific heat capacity", unit: "J kg^{-1} K^{-1}" },
    { symbol: "C_m", meaning: "molar heat capacity", unit: "J mol^{-1} K^{-1}" },
    { symbol: "m", meaning: "mass", unit: "kg" },
    { symbol: "n", meaning: "amount of substance", unit: "mol" },
    { symbol: "f", meaning: "active quadratic degrees of freedom", unit: "1" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
  ]}
/>

## Method

### Derivation 1: Define heat capacity at different scales

Heat capacity can refer to one object, one kilogram, or one mole. The physics is the same, but the normalization changes.

<PhysicsDerivation
  items={[
    {
      label: "Object capacity",
      tex: "C=\\frac{dQ}{dT}",
    },
    {
      label: "Specific form",
      tex: "dQ=mc\\,dT",
    },
    {
      label: "Molar form",
      tex: "dQ=nC_m\\,dT",
    },
    {
      label: "Connections",
      tex: "C=mc=nC_m",
    },
  ]}
/>

### Derivation 2: Use equipartition for a simple molecular model

Each active quadratic energy term contributes \\(\frac\{1\}\{2\}k_BT\\) per molecule, or \\(\frac\{1\}\{2\}RT\\) per mole. If a system has \\(f\\) active quadratic modes per molecule, its molar internal energy contribution is \\(\frac\{f\}\{2\}RT\\).

<PhysicsDerivation
  items={[
    {
      label: "Molar energy model",
      tex: "U_m=\\frac{f}{2}RT",
    },
    {
      label: "Molar heat capacity",
      tex: "C_m=\\frac{dU_m}{dT}=\\frac{f}{2}R",
    },
    {
      label: "Monatomic gas",
      tex: "f=3\\Rightarrow C_{V,m}=\\frac{3}{2}R",
    },
    {
      label: "High-temperature solid",
      tex: "f=6\\Rightarrow C_m\\approx3R",
      note: "This is the classical Dulong-Petit limit for many crystalline solids.",
    },
  ]}
/>

Not every mode is active at every temperature. Quantum energy spacing can suppress some rotational or vibrational contributions, especially at low temperature.

## Rules

These are the compact heat-capacity relations.

<Equation label="Object capacity" tex="C=\frac{dQ}{dT}" />

<Equation label="Specific heat" tex="Q=mc\Delta T" />

<Equation label="Molar heat" tex="Q=nC_m\Delta T" />

<Equation label="Capacity connection" tex="C=mc=nC_m" />

<Equation label="Equipartition" tex="C_m=\frac{f}{2}R" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(0.80\\,\\mathrm{kg}\\) object has \\(c=450\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\). Find its heat capacity.",
      answer: "\\[C=mc=(0.80)(450)=360\\,\\mathrm{J\\,K^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "Estimate the classical molar heat capacity of a crystalline solid in the high-temperature limit.",
      answer: "In the classical high-temperature solid model, each atom has three kinetic and three potential quadratic terms, so \\(f=6\\). \\[C_m\\approx\\frac{6}{2}R=3R=24.9\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\]",
    },
  ]}
/>

## Checks

- Heat capacity belongs to a whole object; specific heat and molar heat capacity are normalized versions.
- Use \\(C_m\\) with moles and \\(c\\) with mass.
- Equipartition is a model with a range of validity.
- Low-temperature heat capacities often fall below classical predictions.`;
