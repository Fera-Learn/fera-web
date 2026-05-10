export const content = String.raw`## Principle

Heat is energy transferred because of a temperature difference.

An object does not contain heat. It contains internal energy, and heat is one way that energy crosses the boundary of a system.

## Notation

<Notation
  items={[
    { symbol: "Q", meaning: "energy transferred as heat", unit: "J" },
    { symbol: "m", meaning: "mass", unit: "kg" },
    { symbol: "c", meaning: "specific heat capacity", unit: "J kg^{-1} K^{-1}" },
    { symbol: "C", meaning: "heat capacity of an object", unit: "J K^{-1}" },
    { symbol: "\\Delta T", meaning: "temperature change", unit: "K" },
    { symbol: "P", meaning: "power supplied to the object", unit: "W" },
  ]}
/>

## Method

For a single material with no phase change, the temperature change is proportional to the energy added and inversely proportional to the heat capacity.

<PhysicsDerivation
  items={[
    {
      label: "Object heat capacity",
      tex: "C=mc",
      note: "This is the heat required per unit temperature change for the whole object.",
    },
    {
      label: "Temperature-change energy",
      tex: "Q=C\\Delta T",
    },
    {
      label: "Specific heat form",
      tex: "Q=mc\\Delta T",
    },
    {
      label: "Sign convention",
      tex: "Q>0\\Rightarrow \\Delta T>0\\quad\\text{for }c>0",
    },
  ]}
/>

If power is supplied steadily and there is no heat loss, the same relation becomes a rate equation.

<PhysicsDerivation
  items={[
    {
      label: "Power input",
      tex: "P=\\frac{dQ}{dt}",
    },
    {
      label: "Temperature rate",
      tex: "P=mc\\frac{dT}{dt}",
    },
    {
      label: "Heating rate",
      tex: "\\frac{dT}{dt}=\\frac{P}{mc}",
    },
  ]}
/>

The sign convention belongs to the chosen system. Heat added to the system is positive; heat removed from it is negative.

## Rules

These are the compact relations for heat transfer that changes temperature without a phase change.

<Equation label="Heat capacity" tex="C=mc" />

<Equation label="Temperature change" tex="Q=mc\Delta T" />

<Equation label="Temperature interval" tex="\Delta T=T_f-T_i" />

<Equation label="Heating rate" tex="\frac{dT}{dt}=\frac{P}{mc}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "How much heat is required to warm \\(0.75\\,\\mathrm{kg}\\) of water from \\(18\\,\\mathrm{^\\circ C}\\) to \\(42\\,\\mathrm{^\\circ C}\\)? Use \\(c=4190\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\).",
      answer: "\\[\\Delta T=42-18=24\\,\\mathrm{K}\\] \\[Q=mc\\Delta T=(0.75)(4190)(24)=7.5\\times10^4\\,\\mathrm{J}\\]",
    },
    {
      title: "Example 2",
      question: "A \\(0.012\\,\\mathrm{kg}\\) component with \\(c=900\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\) absorbs electrical power at \\(3.0\\,\\mathrm{W}\\) with negligible loss. Estimate its initial heating rate.",
      answer: "\\[\\frac{dT}{dt}=\\frac{P}{mc}=\\frac{3.0}{(0.012)(900)}=0.28\\,\\mathrm{K\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Heat is energy in transfer, not energy stored in an object.
- Positive \\(Q\\) means energy enters the chosen system.
- The formula \\(Q=mc\\Delta T\\) does not include phase changes.
- A large heat capacity means the same heat input gives a smaller temperature change.`;
