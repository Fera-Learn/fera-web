export const content = String.raw`## Principle

A dielectric increases capacitance by reducing the field needed for a given free charge.

## Notation

<Notation
  items={[
    { symbol: "\\kappa", meaning: "dielectric constant", unit: "1" },
    { symbol: "C_0", meaning: "capacitance without dielectric", unit: "F" },
    { symbol: "C", meaning: "capacitance with dielectric", unit: "F" },
    { symbol: "\\epsilon", meaning: "permittivity of the dielectric", unit: "F m^{-1}" },
    { symbol: "E_0", meaning: "field without dielectric for the same free charge", unit: "V m^{-1}" },
    { symbol: "E", meaning: "field inside the dielectric", unit: "V m^{-1}" },
  ]}
/>

## Method

### Derivation 1: Field reduction at fixed free charge

For a dielectric filling the gap, polarization produces bound charge whose field partly opposes the field from the free plate charge.

<PhysicsDerivation
  items={[
    {
      label: "Field reduction",
      tex: "E=\\frac{E_0}{\\kappa}",
    },
    {
      label: "Voltage reduction",
      tex: "V=Ed=\\frac{E_0d}{\\kappa}=\\frac{V_0}{\\kappa}",
    },
    {
      label: "Capacitance increase",
      tex: "C=\\frac{Q}{V}=\\kappa\\frac{Q}{V_0}=\\kappa C_0",
    },
  ]}
/>

### Derivation 2: Permittivity form

The dielectric constant is usually folded into the material permittivity.

<PhysicsDerivation
  items={[
    {
      label: "Material permittivity",
      tex: "\\epsilon=\\kappa\\epsilon_0",
    },
    {
      label: "Plate capacitance",
      tex: "C=\\epsilon\\frac{A}{d}=\\kappa\\epsilon_0\\frac{A}{d}",
    },
  ]}
/>

### Derivation 3: Fixed voltage versus fixed charge

The mechanical and energy consequences depend on whether the capacitor stays connected to a battery.

<PhysicsDerivation
  items={[
    {
      label: "Fixed voltage",
      tex: "Q=CV\\quad\\Rightarrow\\quad Q\\text{ increases by }\\kappa",
    },
    {
      label: "Fixed charge",
      tex: "V=\\frac{Q}{C}\\quad\\Rightarrow\\quad V\\text{ decreases by }\\kappa",
    },
  ]}
/>

## Rules

These relations assume the dielectric completely fills the field region.

<Equation label="Dielectric capacitance" tex="C=\kappa C_0" />

<Equation label="Permittivity" tex="\epsilon=\kappa\epsilon_0" />

<Equation label="Filled plates" tex="C=\kappa\epsilon_0\frac{A}{d}" />

<Equation label="Fixed charge field" tex="E=\frac{E_0}{\kappa}" />

<Equation label="Fixed charge voltage" tex="V=\frac{V_0}{\kappa}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(40\\,\\mathrm{pF}\\) air capacitor is filled with dielectric \\(\\kappa=3.0\\). Find the new capacitance.",
      answer: "\\[C=\\kappa C_0=(3.0)(40\\,\\mathrm{pF})=120\\,\\mathrm{pF}\\]",
    },
    {
      title: "Example 2",
      question: "An isolated capacitor is filled with dielectric \\(\\kappa=4.0\\). What happens to its voltage?",
      answer: "The charge is fixed, so \\(V=Q/C\\). Since \\(C\\) increases by \\(4.0\\), the voltage falls to one quarter of its original value.",
    },
  ]}
/>

## Checks

- \\(\kappa\\ge 1\\) for ordinary dielectrics, so a filled capacitor has larger capacitance.
- Fixed \\(Q\\) and fixed \\(V\\) are different physical constraints.
- A dielectric reduces the internal field for a given free charge.
- The simple \\(C=\\kappa C_0\\) rule requires the dielectric to fill the same field region.`;
