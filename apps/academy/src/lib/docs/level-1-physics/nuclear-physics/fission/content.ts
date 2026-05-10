export const content = String.raw`## Principle

Fission releases energy when a heavy nucleus splits into more tightly bound medium-mass nuclei.

## Notation

<Notation
  items={[
    { symbol: "Q", meaning: "fission energy release", unit: "J, MeV" },
    { symbol: "\\nu", meaning: "average neutrons emitted per fission", unit: "1" },
    { symbol: "k", meaning: "neutron multiplication factor", unit: "1" },
    { symbol: "E_f", meaning: "energy released per fission", unit: "J, MeV" },
    { symbol: "P", meaning: "reactor power", unit: "W" },
    { symbol: "\\Phi", meaning: "neutron flux", unit: "m^{-2} s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Binding-energy gain

Heavy nuclei sit below the peak of the binding-energy-per-nucleon curve.

<PhysicsDerivation
  items={[
    {
      label: "Energy release",
      tex: "Q=(m_i-m_f)c^2",
    },
    {
      label: "Binding-energy form",
      tex: "Q=B_f-B_i",
    },
  ]}
/>

### Derivation 2: Chain reaction

Emitted neutrons can trigger further fissions.

<PhysicsDerivation
  items={[
    {
      label: "Subcritical",
      tex: "k<1",
    },
    {
      label: "Critical",
      tex: "k=1",
    },
    {
      label: "Supercritical",
      tex: "k>1",
    },
  ]}
/>

### Derivation 3: Power from fission rate

Macroscopic power is microscopic energy release times event rate.

<PhysicsDerivation
  items={[
    {
      label: "Fission rate",
      tex: "\\dot N_f=\\frac{P}{E_f}",
    },
    {
      label: "Energy over time",
      tex: "E=P\\Delta t",
    },
  ]}
/>

## Rules

<Equation label="Fission Q" tex="Q=(m_i-m_f)c^2" />

<Equation label="Power relation" tex="P=\dot N_fE_f" />

<Equation label="Criticality" tex="k=1" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "If one fission releases \\(200\\,\\mathrm{MeV}\\), estimate joules per fission.",
      answer: "\\(200\\,\\mathrm{MeV}=200(1.60\\times10^{-13})=3.2\\times10^{-11}\\,\\mathrm J\\).",
    },
    {
      title: "Example 2",
      question: "What does \\(k=1\\) mean in a reactor?",
      answer: "Each generation of neutrons produces, on average, one further generation; the chain reaction is steady.",
    },
  ]}
/>

## Checks

- Fission energy mostly appears as fragment kinetic energy, then heat.
- Delayed neutrons make controlled reactors possible.
- Critical does not mean explosive; it means steady neutron population.
- Control rods reduce the effective multiplication factor.`;
