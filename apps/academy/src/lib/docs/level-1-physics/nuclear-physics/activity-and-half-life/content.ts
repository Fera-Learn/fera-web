export const content = String.raw`## Principle

Activity, count rate, and half-life connect measured radiation rates to the number of unstable nuclei.

## Notation

<Notation
  items={[
    { symbol: "C", meaning: "detected count rate", unit: "s^{-1}" },
    { symbol: "C_{\\mathrm b}", meaning: "background count rate", unit: "s^{-1}" },
    { symbol: "\\epsilon", meaning: "detection efficiency", unit: "1" },
    { symbol: "A", meaning: "source activity", unit: "Bq" },
    { symbol: "\\lambda", meaning: "decay constant", unit: "s^{-1}" },
    { symbol: "m", meaning: "sample mass", unit: "kg" },
  ]}
/>

## Method

### Derivation 1: Correcting count rate

The detector records a fraction of source decays plus background.

<PhysicsDerivation
  items={[
    {
      label: "Net count rate",
      tex: "C_{\\mathrm{net}}=C-C_{\\mathrm b}",
    },
    {
      label: "Activity estimate",
      tex: "A=\\frac{C_{\\mathrm{net}}}{\\epsilon}",
    },
  ]}
/>

### Derivation 2: Atoms from mass

Number of radioactive atoms links mass to activity.

<PhysicsDerivation
  items={[
    {
      label: "Number of nuclei",
      tex: "N=\\frac{m}{M}N_A",
    },
    {
      label: "Activity from mass",
      tex: "A=\\lambda\\frac{m}{M}N_A",
    },
  ]}
/>

### Derivation 3: Dating ratio

For a remaining fraction, solve the exponential decay law.

<PhysicsDerivation
  items={[
    {
      label: "Remaining fraction",
      tex: "f=\\frac{N}{N_0}=e^{-\\lambda t}",
    },
    {
      label: "Age",
      tex: "t=-\\frac{1}{\\lambda}\\ln f",
    },
  ]}
/>

## Rules

<Equation label="Net count" tex="C_{\mathrm{net}}=C-C_{\mathrm b}" />

<Equation label="Activity estimate" tex="A=\frac{C_{\mathrm{net}}}{\epsilon}" />

<Equation label="Dating age" tex="t=-\frac{1}{\lambda}\ln\left(\frac{N}{N_0}\right)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A detector reads \\(90\\,\\mathrm{s^{-1}}\\) with background \\(15\\,\\mathrm{s^{-1}}\\). Find net count rate.",
      answer: "\\(C_{\\mathrm{net}}=90-15=75\\,\\mathrm{s^{-1}}\\).",
    },
    {
      title: "Example 2",
      question: "A sample has \\(25\\%\\) of its original parent nuclei. How many half-lives passed?",
      answer: "\\(25\\%=1/4=(1/2)^2\\), so two half-lives passed.",
    },
  ]}
/>

## Checks

- Subtract background before inferring source activity.
- Count rate equals activity only for ideal geometry and efficiency.
- Use the same time units for \\(t\\), \\(t_{1/2}\\), and \\(\lambda\\).
- Dating assumes a closed system and known initial ratio.`;
