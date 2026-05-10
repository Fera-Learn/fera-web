export const content = String.raw`## Principle

Friction adjusts while surfaces stick and takes a fixed model value after sliding begins.

## Notation

<Notation
  items={[
    { symbol: "f_s", meaning: "static friction magnitude", unit: "N" },
    { symbol: "f_k", meaning: "kinetic friction magnitude", unit: "N" },
    { symbol: "\\mu_s", meaning: "coefficient of static friction", unit: "1" },
    { symbol: "\\mu_k", meaning: "coefficient of kinetic friction", unit: "1" },
    { symbol: "N", meaning: "normal reaction magnitude", unit: "N" },
  ]}
/>

## Method

### Derivation 1: Test whether sticking is possible

Static friction is not automatically at its maximum value. First find the friction required to keep the surfaces from slipping.

<PhysicsDerivation
  items={[
    {
      label: "Assume no slipping",
      tex: "a_{\\parallel}=0",
    },
    {
      label: "Find required friction",
      tex: "\\sum F_{\\parallel}=0\\Rightarrow f_{s,\\mathrm{req}}",
    },
    {
      label: "Compare with limit",
      tex: "f_{s,\\mathrm{req}}\\le\\mu_sN\\Rightarrow\\text{sticking is possible}",
    },
  ]}
/>

### Derivation 2: Switch model after slipping starts

If the required static friction is larger than the maximum available value, the surfaces slide and the kinetic-friction model replaces the static one.

<PhysicsDerivation
  items={[
    {
      label: "Static maximum",
      tex: "f_{s,\\max}=\\mu_sN",
    },
    {
      label: "Kinetic value",
      tex: "f_k=\\mu_kN",
    },
    {
      label: "Direction rule",
      tex: "\\vec f\\ \\text{opposes relative or impending relative slipping}",
    },
  ]}
/>

The free-body diagram shows a horizontal push and a friction force parallel to the surface. The normal force must be found before either friction model can be evaluated.

<FreeBodyDiagram
  title="Friction force model"
  caption="Friction acts along the contact surface; the normal force sets the friction scale."
  bodyLabel="m"
  surface="horizontal"
  forces={[
    { label: "N", angle: 90 },
    { label: "W", angle: 270 },
    { label: "F", angle: 0, color: "var(--chart-3)" },
    { label: "f", angle: 180, color: "var(--chart-5)" },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Static range" tex="0\le f_s\le \mu_sN" />

<Equation label="Static maximum" tex="f_{s,\max}=\mu_sN" />

<Equation label="Kinetic friction" tex="f_k=\mu_kN" />

<Equation label="Level normal" tex="N=mg" />

<Equation label="Slope normal" tex="N=mg\cos\theta" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An \\(8.0\\,\\mathrm{kg}\\) box is pushed horizontally by \\(25\\,\\mathrm{N}\\). If \\(\\mu_s=0.40\\), does it move?",
      answer: "On a level surface, \\(N=mg\\). The maximum static friction is \\[f_{s,\\max}=\\mu_smg=0.40(8.0)(9.8)=31.4\\,\\mathrm{N}\\] Since \\(25\\,\\mathrm{N}<31.4\\,\\mathrm{N}\\), it stays at rest and \\(f_s=25\\,\\mathrm{N}\\).",
    },
    {
      title: "Example 2",
      question: "A \\(6.0\\,\\mathrm{kg}\\) box slides on a horizontal surface with \\(\\mu_k=0.30\\). Find its acceleration while sliding.",
      answer: "Kinetic friction is \\[f_k=\\mu_kmg=0.30(6.0)(9.8)=17.6\\,\\mathrm{N}\\] If positive is the direction of motion, friction is negative: \\[a=-\\frac{17.6}{6.0}=-2.94\\,\\mathrm{m\\,s^{-2}}\\]",
    },
  ]}
/>

## Checks

- Static friction is not automatically equal to \\(\mu_sN\\).
- Kinetic friction is used only after slipping begins.
- Friction is parallel to the contact surface.
- Find the normal force before calculating a friction limit.
- Friction opposes relative slipping, not necessarily motion relative to the ground.`;
