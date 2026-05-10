export const content = String.raw`## Principle

A transformer uses changing magnetic flux to transfer AC energy between coils. In an ideal transformer, voltage ratio equals turns ratio and input power equals output power.

## Notation

<Notation
  items={[
    { symbol: "N_p, N_s", meaning: "primary and secondary turns", unit: "" },
    { symbol: "V_p, V_s", meaning: "primary and secondary rms voltages", unit: "V" },
    { symbol: "I_p, I_s", meaning: "primary and secondary rms currents", unit: "A" },
    { symbol: "P_p, P_s", meaning: "primary and secondary power", unit: "W" },
    { symbol: "\\Phi_B", meaning: "magnetic flux through the core", unit: "Wb" },
    { symbol: "\\eta", meaning: "efficiency", unit: "" },
  ]}
/>

## Method

### Derivation 1: Use Faraday's law in both coils

Both coils link the same changing flux in the ideal core, so emf per turn is the same in each coil.

<PhysicsDerivation
  items={[
    {
      label: "Voltage ratio",
      tex: "\\frac{V_s}{V_p}=\\frac{N_s}{N_p}",
    },
  ]}
/>

### Derivation 2: Apply ideal power conservation

An ideal transformer has no losses, so input power equals output power.

<PhysicsDerivation
  items={[
    {
      label: "Power conservation",
      tex: "V_pI_p=V_sI_s",
    },
    {
      label: "Current ratio",
      tex: "\\frac{I_s}{I_p}=\\frac{N_p}{N_s}",
    },
  ]}
/>

### Derivation 3: Include efficiency when needed

Real transformers dissipate some power in windings, cores, and leakage fields. Efficiency compares useful output power with input power.

<PhysicsDerivation
  items={[
    {
      label: "Efficiency",
      tex: "\\eta=\\frac{P_s}{P_p}",
    },
  ]}
/>

## Rules

<Equation label="Voltage ratio" tex="\frac{V_s}{V_p}=\frac{N_s}{N_p}" />

<Equation label="Ideal power" tex="V_pI_p=V_sI_s" />

<Equation label="Current ratio" tex="\frac{I_s}{I_p}=\frac{N_p}{N_s}" />

<Equation label="Efficiency" tex="\eta=\frac{P_{\mathrm{out}}}{P_{\mathrm{in}}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A transformer has \\(N_p=200\\), \\(N_s=1000\\), and \\(V_p=24\\,\\mathrm V\\). Find \\(V_s\\).",
      answer: "\\[V_s=V_p\\frac{N_s}{N_p}=24\\frac{1000}{200}=120\\,\\mathrm V\\]",
    },
    {
      title: "Example 2",
      question: "An ideal transformer delivers \\(2.0\\,\\mathrm A\\) at \\(120\\,\\mathrm V\\). If the primary voltage is \\(240\\,\\mathrm V\\), find the primary current.",
      answer: "\\[V_pI_p=V_sI_s\\]\\[I_p=\\frac{V_sI_s}{V_p}=\\frac{(120)(2.0)}{240}=1.0\\,\\mathrm A\\]",
    },
  ]}
/>

## Checks

- Transformers require changing flux, so they work with AC, not steady DC.
- A step-up transformer increases voltage and decreases current.
- A step-down transformer decreases voltage and increases current.
- Real transformers have losses, so output power is less than input power.`;
