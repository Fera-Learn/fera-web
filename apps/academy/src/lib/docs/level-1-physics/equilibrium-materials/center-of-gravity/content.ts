export const content = String.raw`## Principle

The center of gravity is the point where a body's total weight can be treated as acting.

## Notation

<Notation
  items={[
    { symbol: "x_{\\mathrm{cg}}", meaning: "center-of-gravity coordinate", unit: "m" },
    { symbol: "W", meaning: "total weight", unit: "N" },
    { symbol: "M", meaning: "total mass", unit: "kg" },
    { symbol: "g", meaning: "gravitational field strength", unit: "m s^{-2}" },
    { symbol: "m_i,dm", meaning: "discrete mass or small mass element", unit: "kg" },
    { symbol: "dW", meaning: "small weight element", unit: "N" },
    { symbol: "x_i", meaning: "mass coordinate", unit: "m" },
    { symbol: "x_{\\mathrm{left}},x_{\\mathrm{right}}", meaning: "left and right support limits", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Replace many weights with one equivalent weight

In a uniform gravitational field each small mass element contributes a downward force proportional to its mass, so the total weight is still proportional to total mass.

<PhysicsDerivation
  items={[
    {
      label: "Element weight",
      tex: "dW=g\\,dm",
    },
    {
      label: "Total weight",
      tex: "W=\\int dW=g\\int dm=Mg",
    },
    {
      label: "Match moments about the origin",
      tex: "Wx_{\\mathrm{cg}}=\\int x\\,dW",
    },
    {
      label: "Substitute the element weight",
      tex: "Mgx_{\\mathrm{cg}}=g\\int x\\,dm",
    },
    {
      label: "Continuous result",
      tex: "x_{\\mathrm{cg}}=\\frac{1}{M}\\int x\\,dm",
    },
  ]}
/>

### Derivation 2: Reduce the result to discrete masses

For separated masses, the integral becomes a sum of mass-weighted positions.

<PhysicsDerivation
  items={[
    {
      label: "Total mass",
      tex: "M=\\sum_i m_i",
    },
    {
      label: "Torque match",
      tex: "Mgx_{\\mathrm{cg}}=\\sum_i m_i g x_i",
    },
    {
      label: "Discrete result",
      tex: "x_{\\mathrm{cg}}=\\frac{\\sum_i m_i x_i}{\\sum_i m_i}",
    },
  ]}
/>

### Derivation 3: Test whether the body can remain supported

The support sketch shows the practical condition: the vertical weight line must pass through the support base.

<RigidBodyDiagram
  title="Center of gravity and support"
  caption="Stability requires the vertical weight line to intersect the support base."
  beamLength={4}
  supports={[
    { x: 0.8, type: "roller", label: "base" },
    { x: 3.2, type: "roller", label: "base" },
  ]}
  loads={[
    { x: 2.6, angle: -90, label: "W", color: "var(--chart-5)" },
  ]}
/>

<PhysicsDerivation
  items={[
    {
      label: "Left edge condition",
      tex: "x_{\\mathrm{cg}}\\ge x_{\\mathrm{left}}",
    },
    {
      label: "Right edge condition",
      tex: "x_{\\mathrm{cg}}\\le x_{\\mathrm{right}}",
    },
    {
      label: "Support test",
      tex: "x_{\\mathrm{left}}\\le x_{\\mathrm{cg}}\\le x_{\\mathrm{right}}",
      note: "Outside this interval the weight produces an unbalanced tipping moment.",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Discrete masses" tex="x_{\mathrm{cg}}=\frac{\sum_i m_i x_i}{\sum_i m_i}" />

<Equation label="Continuous body" tex="x_{\mathrm{cg}}=\frac{1}{M}\int x\,dm" />

<Equation label="Total weight" tex="W=Mg" />

<Equation label="Support condition" tex="x_{\mathrm{left}}\le x_{\mathrm{cg}}\le x_{\mathrm{right}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Masses \\(2\\,\\mathrm{kg}\\) and \\(6\\,\\mathrm{kg}\\) sit at \\(x=0\\) and \\(x=4\\,\\mathrm{m}\\). Find \\(x_{\\mathrm{cg}}\\).",
      answer: "\\[x_{\\mathrm{cg}}=\\frac{2(0)+6(4)}{8}=3.0\\,\\mathrm{m}\\]",
    },
    {
      title: "Example 2",
      question: "A uniform rod of mass \\(M\\) and length \\(L\\) has an added point mass \\(M\\) at its right end. Find \\(x_{\\mathrm{cg}}\\) from the left end.",
      answer: "\\[x_{\\mathrm{cg}}=\\frac{M(L/2)+ML}{2M}=\\frac{3L}{4}\\]",
    },
  ]}
/>

## Checks

- Weight positions are mass weighted.
- In uniform gravity, center of gravity and center of mass coincide.
- Symmetry works only with symmetric density.
- Tipping starts outside the support base.`;
