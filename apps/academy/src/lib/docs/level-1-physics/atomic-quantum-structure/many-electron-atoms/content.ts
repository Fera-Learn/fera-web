export const content = String.raw`## Principle

Many-electron atoms cannot be described as independent hydrogen atoms because electrons repel each other and shield nuclear charge. Atomic structure is built by filling orbitals using quantum numbers and energy ordering.

The effective nuclear charge felt by an electron is less than the full nuclear charge because other electrons partially screen the nucleus.

## Notation

<Notation
  items={[
    { symbol: "Z", meaning: "atomic number", unit: "1" },
    { symbol: "Z_{\\mathrm{eff}}", meaning: "effective nuclear charge", unit: "1" },
    { symbol: "n", meaning: "principal quantum number", unit: "1" },
    { symbol: "\\ell", meaning: "orbital angular momentum quantum number", unit: "1" },
    { symbol: "m_\\ell", meaning: "magnetic quantum number", unit: "1" },
    { symbol: "m_s", meaning: "spin projection quantum number", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Start with orbital labels

Orbitals are labelled by \\(n\\) and subshell letters set by \\(\ell\\).

<PhysicsDerivation
  items={[
    {
      label: "Subshell labels",
      tex: "\\ell=0,1,2,3\\Rightarrow s,p,d,f",
    },
    {
      label: "Orbitals in a subshell",
      tex: "N_{\\mathrm{orbitals}}=2\\ell+1",
    },
  ]}
/>

### Derivation 2: Count electron capacity

Each orbital can hold two electrons with opposite spin projections.

<PhysicsDerivation
  items={[
    {
      label: "Subshell capacity",
      tex: "N_e=2(2\\ell+1)",
    },
    {
      label: "Shell capacity",
      tex: "N_e=2n^2",
    },
  ]}
/>

### Derivation 3: Fill lower-energy states first

The Aufbau pattern orders orbitals by energy, modified by shielding and penetration.

<PhysicsDerivation
  items={[
    {
      label: "Effective charge idea",
      tex: "Z_{\\mathrm{eff}}=Z-S",
    },
    {
      label: "Hydrogen-like scaling",
      tex: "E_n\\propto-\\frac{Z_{\\mathrm{eff}}^2}{n^2}",
    },
  ]}
/>

## Rules

<Equation label="Subshell orbitals" tex="N_{\mathrm{orbitals}}=2\ell+1" />

<Equation label="Subshell electron capacity" tex="N_e=2(2\ell+1)" />

<Equation label="Shell electron capacity" tex="N_e=2n^2" />

<Equation label="Effective nuclear charge" tex="Z_{\mathrm{eff}}=Z-S" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "How many electrons fit in a \\(p\\) subshell?",
      answer: "For a \\(p\\) subshell, \\(\\ell=1\\), so \\(2(2\\ell+1)=2(3)=6\\).",
    },
    {
      title: "Example 2",
      question: "Write the ground-state electron configuration of carbon.",
      answer: "Carbon has \\(Z=6\\), so the configuration is \\(1s^2 2s^2 2p^2\\).",
    },
  ]}
/>

## Checks

- Multi-electron energies depend on both \\(n\\) and \\(\ell\\).
- Shielding reduces the effective attraction felt by outer electrons.
- Each orbital holds at most two electrons.
- Electron configurations are built by filling lower-energy orbitals first.`;
