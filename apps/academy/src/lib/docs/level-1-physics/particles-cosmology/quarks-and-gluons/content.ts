export const content = String.raw`## Principle

Quarks carry fractional electric charge and colour charge. Gluons mediate the strong interaction, and only colour-neutral hadrons are observed.

## Notation

<Notation
  items={[
    { symbol: "u", meaning: "up quark", unit: "" },
    { symbol: "d", meaning: "down quark", unit: "" },
    { symbol: "s", meaning: "strange quark", unit: "" },
    { symbol: "Q", meaning: "electric charge in units of e", unit: "1" },
    { symbol: "B", meaning: "baryon number", unit: "1" },
    { symbol: "S", meaning: "strangeness", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Quark charges build hadron charges

The light-quark charges explain proton, neutron, pion, and kaon charges.

<PhysicsDerivation
  items={[
    {
      label: "Up quark",
      tex: "Q_u=+\\frac23",
    },
    {
      label: "Down and strange quarks",
      tex: "Q_d=Q_s=-\\frac13",
    },
  ]}
/>

### Derivation 2: Baryon number is shared among quarks

Each quark has baryon number \\(+1/3\\), while each antiquark has baryon number \\(-1/3\\).

<PhysicsDerivation
  items={[
    {
      label: "Baryon",
      tex: "B=3\\left(\\frac13\\right)=1",
    },
    {
      label: "Meson",
      tex: "B=\\frac13-\\frac13=0",
    },
  ]}
/>

### Derivation 3: Colour-neutral combinations

Observed hadrons combine colour charges so the total state is colour neutral.

<PhysicsDerivation
  items={[
    {
      label: "Baryon colour",
      tex: "rgb",
    },
    {
      label: "Meson colour",
      tex: "c\\bar c",
    },
  ]}
/>

## Rules

<Equation label="Up charge" tex="Q_u=+\frac23" />

<Equation label="Down and strange charge" tex="Q_d=Q_s=-\frac13" />

<Equation label="Baryon number conservation" tex="\sum B_i=\sum B_f" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the charge of \\(udd\\).",
      answer: "\\(Q=+2/3-1/3-1/3=0\\), so \\(udd\\) is neutral.",
    },
    {
      title: "Example 2",
      question: "Find the charge of \\(u\\bar s\\).",
      answer: "\\(Q=+2/3+1/3=+1\\), because \\(\\bar s\\) has charge \\(+1/3\\).",
    },
  ]}
/>

## Checks

- Antiquarks have opposite charge and opposite baryon number to quarks.
- Mesons have baryon number zero.
- Baryons have baryon number \\(+1\\); antibaryons have \\(-1\\).
- Free isolated quarks are not seen because of confinement.`;
