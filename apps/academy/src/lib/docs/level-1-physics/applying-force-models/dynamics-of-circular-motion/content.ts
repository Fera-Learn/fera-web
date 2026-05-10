export const content = String.raw`## Principle

Circular motion requires the net radial force to match the inward centripetal acceleration.

## Notation

<Notation
  items={[
    { symbol: "r", meaning: "radius of curvature", unit: "m" },
    { symbol: "v", meaning: "speed along the path", unit: "m s^{-1}" },
    { symbol: "\\omega", meaning: "angular velocity", unit: "rad s^{-1}" },
    { symbol: "a_c", meaning: "centripetal acceleration magnitude", unit: "m s^{-2}" },
    { symbol: "\\sum F_r", meaning: "net force in the inward radial direction", unit: "N" },
    { symbol: "\\theta", meaning: "bank angle", unit: "rad or deg" },
  ]}
/>

## Method

### Derivation 1: Convert circular kinematics into a force equation

Earlier circular kinematics gave the inward acceleration magnitude. Newton's second law turns that acceleration requirement into a required inward resultant force.

<PhysicsDerivation
  items={[
    {
      label: "Centripetal acceleration",
      tex: "a_c=\\frac{v^2}{r}=r\\omega^2",
    },
    {
      label: "Radial second law",
      tex: "\\sum F_r=ma_c",
      note: "Take inward as the positive radial direction for this equation.",
    },
    {
      label: "Radial force law",
      tex: "\\sum F_r=m\\frac{v^2}{r}=mr\\omega^2",
    },
  ]}
/>

### Derivation 2: Find the flat-curve speed limit

On a flat curve, the normal force and weight cancel vertically. Static friction is the only horizontal force available to point inward.

<PhysicsDerivation
  items={[
    {
      label: "Friction supplies radial force",
      tex: "f_s=m\\frac{v^2}{r}",
    },
    {
      label: "Use the static limit",
      tex: "f_s\\le\\mu_sN=\\mu_smg",
    },
    {
      label: "Maximum speed",
      tex: "v_{\\max}=\\sqrt{\\mu_sgr}",
    },
  ]}
/>

The free-body diagram below is a flat-curve model: weight and normal balance vertically, while static friction points inward and supplies the radial resultant.

<FreeBodyDiagram
  title="Flat-curve force model"
  caption="Static friction is the inward resultant for a flat curve."
  bodyLabel="car"
  bodyShape="point"
  forces={[
    { label: "N", angle: 90 },
    { label: "W", angle: 270 },
    { label: "f_s", angle: 180, color: "var(--chart-3)" },
  ]}
/>

### Derivation 3: Read a frictionless banked curve

For a frictionless bank, the normal force tilts. Its horizontal component supplies the radial force and its vertical component balances weight.

<PhysicsDerivation
  items={[
    {
      label: "Vertical balance",
      tex: "N\\cos\\theta=mg",
    },
    {
      label: "Radial balance",
      tex: "N\\sin\\theta=m\\frac{v^2}{r}",
    },
    {
      label: "Divide equations",
      tex: "\\tan\\theta=\\frac{v^2}{rg}",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Radial law" tex="\sum F_r=m\frac{v^2}{r}" />

<Equation label="Angular form" tex="\sum F_r=mr\omega^2" />

<Equation label="Flat curve limit" tex="v_{\max}=\sqrt{\mu_sgr}" />

<Equation label="Banked curve" tex="\tan\theta=\frac{v^2}{rg}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(900\\,\\mathrm{kg}\\) car takes a flat curve of radius \\(80\\,\\mathrm{m}\\) at \\(12\\,\\mathrm{m\\,s^{-1}}\\). Find the required static friction.",
      answer: "Static friction supplies the radial force: \\[f_s=m\\frac{v^2}{r}=900\\frac{12^2}{80}=1620\\,\\mathrm{N}\\]",
    },
    {
      title: "Example 2",
      question: "A \\(70\\,\\mathrm{kg}\\) rider crosses the top of a circular hill with \\(r=50\\,\\mathrm{m}\\) and \\(v=10\\,\\mathrm{m\\,s^{-1}}\\). Find \\(N\\).",
      answer: "At the top, inward is downward. The radial equation is \\[mg-N=m\\frac{v^2}{r}\\] so \\[N=m\\left(g-\\frac{v^2}{r}\\right)=70(9.8-2.0)=546\\,\\mathrm{N}\\]",
    },
  ]}
/>

## Checks

- The required radial resultant points inward.
- A centripetal force is not a new force type; it is the inward resultant.
- Constant speed still requires radial acceleration.
- At the top of a hill or loop, inward is downward.
- If the radial force is too small, the object cannot follow that circular path.`;
