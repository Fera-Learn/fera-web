export const content = String.raw`## Principle

Nuclear stability is set by energy lowering through binding, neutron balance, and allowed decay paths.

## Notation

<Notation
  items={[
    { symbol: "Q", meaning: "decay or reaction energy release", unit: "J, MeV" },
    { symbol: "B/A", meaning: "binding energy per nucleon", unit: "MeV" },
    { symbol: "N/Z", meaning: "neutron-to-proton ratio", unit: "1" },
    { symbol: "\\alpha", meaning: "helium-4 nucleus emitted in alpha decay", unit: "1" },
    { symbol: "\\beta^-", meaning: "electron emission from neutron-rich nuclei", unit: "1" },
    { symbol: "\\beta^+", meaning: "positron emission from proton-rich nuclei", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Energy criterion

A decay can occur spontaneously only if final rest energy is lower.

<PhysicsDerivation
  items={[
    {
      label: "Q value",
      tex: "Q=(m_{\\mathrm i}-m_{\\mathrm f})c^2",
    },
    {
      label: "Spontaneous condition",
      tex: "Q>0",
    },
  ]}
/>

### Derivation 2: Neutron balance

Stable heavy nuclei need extra neutrons to dilute proton repulsion.

<PhysicsDerivation
  items={[
    {
      label: "Light stable trend",
      tex: "N\\approx Z",
    },
    {
      label: "Heavy stable trend",
      tex: "N>Z",
    },
  ]}
/>

### Derivation 3: Direction of beta decay

Beta decay moves a nucleus toward a more stable neutron-proton balance.

<PhysicsDerivation
  items={[
    {
      label: "Neutron rich",
      tex: "n\\to p+e^-+\\bar\\nu_e",
    },
    {
      label: "Proton rich",
      tex: "p\\to n+e^++\\nu_e",
    },
  ]}
/>

## Rules

<Equation label="Q value" tex="Q=(m_{\mathrm i}-m_{\mathrm f})c^2" />

<Equation label="Beta minus" tex="^{A}_{Z}X\to\,^{A}_{Z+1}Y+e^-+\bar\nu_e" />

<Equation label="Beta plus" tex="^{A}_{Z}X\to\,^{A}_{Z-1}Y+e^++\nu_e" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A neutron-rich nucleus beta decays. Does \\(Z\\) rise or fall?",
      answer: "In \\(\\beta^-\\) decay, a neutron becomes a proton, so \\(Z\\) rises by 1.",
    },
    {
      title: "Example 2",
      question: "If \\(Q\<0\\) for a proposed decay, can it occur spontaneously?",
      answer: "No. A spontaneous decay requires final rest energy lower than initial rest energy, so \\(Q>0\\).",
    },
  ]}
/>

## Checks

- Stability is not just large binding energy; compare available lower-energy states.
- Heavy stable nuclei usually have \\(N/Z>1\\).
- Alpha decay lowers both \\(A\\) and \\(Z\\).
- Beta decay changes \\(Z\\) but leaves \\(A\\) unchanged.`;
