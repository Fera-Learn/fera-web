export const content = String.raw`## Principle

Rigid-body equilibrium is solved by matching independent balances to unknown reactions.

## Notation

<Notation
  items={[
    { symbol: "R_x,R_y", meaning: "pin or hinge reaction components", unit: "N" },
    { symbol: "T", meaning: "tension", unit: "N" },
    { symbol: "W", meaning: "weight", unit: "N" },
    { symbol: "\\tau_z", meaning: "torque component about the chosen pivot axis", unit: "N m" },
    { symbol: "f_s,N", meaning: "static friction and normal reaction", unit: "N" },
    { symbol: "\\mu_s", meaning: "static friction coefficient", unit: "none" },
  ]}
/>

## Method

### Derivation 1: Keep only the external forces

<RigidBodyDiagram
  title="Beam equilibrium setup"
  caption="Torque about the hinge solves the cable force before the hinge reactions."
  beamLength={4}
  supports={[
    { x: 0, type: "pin", label: "hinge" },
  ]}
  loads={[
    { x: 2, angle: -90, label: "W_b" },
    { x: 4, angle: -90, label: "W_s", color: "var(--chart-5)" },
    { x: 4, angle: 140, label: "T", color: "var(--chart-3)" },
  ]}
/>

<PhysicsDerivation
  items={[
    {
      label: "Free body",
      tex: "\\text{external forces only}",
      note: "Weight acts at the center of gravity; contacts act at contacts.",
    },
    {
      label: "Unknown reactions",
      tex: "\\text{solve for }R_x,\\ R_y,\\ T\\ \\text{or contact forces}",
    },
  ]}
/>

### Derivation 2: Choose a pivot that removes the most unknowns

The beam sketch is set up so torque about the hinge removes the two hinge reactions from the first equation.

<PhysicsDerivation
  items={[
    {
      label: "Zero torque through the pivot",
      tex: "\\tau_{\\mathrm{pivot}}(R_x)=\\tau_{\\mathrm{pivot}}(R_y)=0",
    },
    {
      label: "Torque equation",
      tex: "\\sum\\tau_z=0",
    },
  ]}
/>

### Derivation 3: Recover the remaining reactions from force balance

Once one unknown is found from moments, the horizontal and vertical balances determine the support reactions.

<PhysicsDerivation
  items={[
    {
      label: "Horizontal balance",
      tex: "\\sum F_x=0",
    },
    {
      label: "Vertical balance",
      tex: "\\sum F_y=0",
    },
  ]}
/>

### Derivation 4: Check the contact model

Static friction does not automatically equal its maximum value; it takes whatever value is needed up to the limit.

<PhysicsDerivation
  items={[
    {
      label: "Friction bound",
      tex: "|f_s|\\le\\mu_s N",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Horizontal balance" tex="\sum F_x=0" />

<Equation label="Vertical balance" tex="\sum F_y=0" />

<Equation label="Torque balance" tex="\sum\tau_z=0" />

<Equation label="Static-friction limit" tex="|f_s|\le \mu_s N" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A uniform \\(4\\,\\mathrm{m}\\) beam of weight \\(100\\,\\mathrm{N}\\) is hinged at one end and held horizontal by a vertical cable at the far end. Find cable tension.",
      answer: "Torque about the hinge gives \\[T(4)-100(2)=0\\] so \\[T=50\\,\\mathrm{N}\\]",
    },
    {
      title: "Example 2",
      question: "A horizontal beam has end supports and a \\(300\\,\\mathrm{N}\\) load one quarter of the length from the left. Ignore beam weight. Find the reactions.",
      answer: "Torque about the left support gives \\[R_RL=300(L/4)\\Rightarrow R_R=75\\,\\mathrm{N}\\] Vertical balance gives \\[R_L=225\\,\\mathrm{N}\\]",
    },
  ]}
/>

## Checks

- Do not include internal forces.
- A pin can exert force but no torque.
- Friction takes the needed value up to its maximum.
- Negative contact force means contact is lost.`;
