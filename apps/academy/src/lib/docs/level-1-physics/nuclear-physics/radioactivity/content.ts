export const content = String.raw`## Principle

Radioactive decay is random for each nucleus but exponential for a large population.

## Notation

<Notation
  items={[
    { symbol: "N(t)", meaning: "number of undecayed nuclei", unit: "1" },
    { symbol: "N_0", meaning: "initial number of nuclei", unit: "1" },
    { symbol: "\\lambda", meaning: "decay constant", unit: "s^{-1}" },
    { symbol: "A(t)", meaning: "activity", unit: "Bq" },
    { symbol: "t_{1/2}", meaning: "half-life", unit: "s" },
    { symbol: "\\tau", meaning: "mean lifetime", unit: "s" },
  ]}
/>

## Method

### Derivation 1: Decay law

The number decaying per unit time is proportional to the number still present.

<PhysicsDerivation
  items={[
    {
      label: "Rate equation",
      tex: "\\frac{dN}{dt}=-\\lambda N",
    },
    {
      label: "Population",
      tex: "N(t)=N_0e^{-\\lambda t}",
    },
  ]}
/>

### Derivation 2: Activity

Activity is the decay rate magnitude.

<PhysicsDerivation
  items={[
    {
      label: "Activity definition",
      tex: "A=-\\frac{dN}{dt}",
    },
    {
      label: "Activity law",
      tex: "A(t)=\\lambda N(t)",
    },
  ]}
/>

### Derivation 3: Half-life

Half-life is the time required for the population to halve.

<PhysicsDerivation
  items={[
    {
      label: "Half condition",
      tex: "\\frac{N_0}{2}=N_0e^{-\\lambda t_{1/2}}",
    },
    {
      label: "Half-life",
      tex: "t_{1/2}=\\frac{\\ln2}{\\lambda}",
    },
  ]}
/>

## Rules

<Equation label="Decay law" tex="N=N_0e^{-\lambda t}" />

<Equation label="Activity" tex="A=\lambda N" />

<Equation label="Half-life" tex="t_{1/2}=\frac{\ln2}{\lambda}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "How much of a sample remains after three half-lives?",
      answer: "\\((1/2)^3=1/8\\) remains.",
    },
    {
      title: "Example 2",
      question: "If \\(\\lambda=0.010\\,\\mathrm{s^{-1}}\\), find \\(t_{1/2}\\).",
      answer: "\\(t_{1/2}=\\ln2/0.010=69\\,\\mathrm s\\).",
    },
  ]}
/>

## Checks

- Activity is measured in becquerels: \\(1\\,\\mathrm{Bq}=1\\,\\mathrm{s^{-1}}\\).
- Half-life is independent of the initial sample size.
- Exponential decay never reaches exactly zero in the model.
- Decay probability per nucleus per unit time is \\(\lambda\\).`;
