export const content = String.raw`## Principle

Electron spin is intrinsic angular momentum. It is not literal rotation of a tiny sphere, but it behaves like angular momentum and gives the electron a magnetic moment.

Spin adds new quantum numbers and explains two-state outcomes in measurements such as Stern-Gerlach experiments.

## Notation

<Notation
  items={[
    { symbol: "s", meaning: "spin quantum number for electron", unit: "1" },
    { symbol: "m_s", meaning: "spin projection quantum number", unit: "1" },
    { symbol: "S", meaning: "spin angular momentum magnitude", unit: "J s" },
    { symbol: "S_z", meaning: "spin angular momentum projection", unit: "J s" },
    { symbol: "\\mu_s", meaning: "spin magnetic moment", unit: "J T^{-1}" },
    { symbol: "g_s", meaning: "electron spin g-factor", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Quantize spin magnitude

Spin angular momentum follows the same angular-momentum algebra as orbital angular momentum, but the electron has fixed \\(s=1/2\\).

<PhysicsDerivation
  items={[
    {
      label: "Electron spin quantum number",
      tex: "s=\\frac12",
    },
    {
      label: "Spin magnitude",
      tex: "S=\\sqrt{s(s+1)}\\hbar",
    },
  ]}
/>

### Derivation 2: Quantize spin projection

For an electron, measuring spin along a chosen axis gives two possible projections.

<PhysicsDerivation
  items={[
    {
      label: "Allowed projections",
      tex: "m_s=+\\frac12,\\,-\\frac12",
    },
    {
      label: "Projection",
      tex: "S_z=m_s\\hbar",
    },
  ]}
/>

### Derivation 3: Connect spin to magnetism

Electron spin has a magnetic moment, so external magnetic fields can split spin states.

<PhysicsDerivation
  items={[
    {
      label: "Spin magnetic moment scale",
      tex: "\\mu_s\\approx g_s\\mu_Bm_s",
    },
    {
      label: "Electron spin g-factor",
      tex: "g_s\\approx2",
    },
  ]}
/>

## Rules

<Equation label="Electron spin quantum number" tex="s=\frac12" />

<Equation label="Spin magnitude" tex="S=\sqrt{s(s+1)}\hbar" />

<Equation label="Spin projection" tex="S_z=m_s\hbar" />

<Equation label="Spin projections" tex="m_s=\pm\frac12" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "What are the possible measured values of \\(S_z\\) for an electron?",
      answer: "\\[S_z=+\\frac{\\hbar}{2}\\] or \\[S_z=-\\frac{\\hbar}{2}\\]",
    },
    {
      title: "Example 2",
      question: "Find the spin angular momentum magnitude for an electron.",
      answer: "\\[S=\\sqrt{\\frac12\\left(\\frac12+1\\right)}\\hbar=\\frac{\\sqrt3}{2}\\hbar\\]",
    },
  ]}
/>

## Checks

- Electron spin has only two projections along any chosen axis.
- Spin is intrinsic, not classical spinning motion.
- Spin affects magnetic interactions.
- Spin is required to explain electron filling in atoms.`;
