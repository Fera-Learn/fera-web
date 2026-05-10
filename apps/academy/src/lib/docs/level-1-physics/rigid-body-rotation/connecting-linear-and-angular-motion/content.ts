export const content = String.raw`## Principle

For a rigid body, linear motion at a point scales with distance from the axis.

## Notation

<Notation
  items={[
    { symbol: "r", meaning: "distance from rotation axis", unit: "m" },
    { symbol: "s", meaning: "arc length", unit: "m" },
    { symbol: "v_t", meaning: "tangential speed", unit: "m s^{-1}" },
    { symbol: "a_t", meaning: "tangential acceleration", unit: "m s^{-2}" },
    { symbol: "a_c", meaning: "centripetal acceleration", unit: "m s^{-2}" },
    { symbol: "R", meaning: "rolling radius", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Start with arc length

Radians are defined so that angular displacement times radius gives arc length. This is why angular formulas connect to linear formulas through \\(r\\).

<PhysicsDerivation
  items={[
    {
      label: "Arc length",
      tex: "s=r\\theta",
    },
    {
      label: "Differentiate once",
      tex: "v_t=\\frac{ds}{dt}=r\\frac{d\\theta}{dt}=r\\omega",
    },
    {
      label: "Differentiate again",
      tex: "a_t=\\frac{dv_t}{dt}=r\\frac{d\\omega}{dt}=r\\alpha",
    },
  ]}
/>

### Derivation 2: Separate tangential and radial acceleration

Tangential acceleration changes speed along the path. Centripetal acceleration changes direction and points inward.

<PhysicsDerivation
  items={[
    {
      label: "Tangential part",
      tex: "a_t=r\\alpha",
    },
    {
      label: "Radial part",
      tex: "a_c=r\\omega^2",
    },
    {
      label: "Using tangential speed",
      tex: "a_c=\\frac{v_t^2}{r}",
    },
  ]}
/>

### Derivation 3: Apply the no-slip rolling constraint

Rolling without slipping means the surface contact does not slide. The center advances by one circumference for each full revolution.

<PhysicsDerivation
  items={[
    {
      label: "No-slip displacement",
      tex: "\\Delta x_{\\mathrm{cm}}=R\\Delta\\theta",
    },
    {
      label: "No-slip speed",
      tex: "v_{\\mathrm{cm}}=R\\omega",
    },
    {
      label: "No-slip acceleration",
      tex: "a_{\\mathrm{cm}}=R\\alpha",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Arc length" tex="s=r\theta" />

<Equation label="Tangential speed" tex="v_t=r\omega" />

<Equation label="Tangential acceleration" tex="a_t=r\alpha" />

<Equation label="Centripetal acceleration" tex="a_c=r\omega^2=\frac{v_t^2}{r}" />

<Equation label="Rolling constraint" tex="v_{\mathrm{cm}}=R\omega,\qquad a_{\mathrm{cm}}=R\alpha" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A point \\(0.30\\,\\mathrm{m}\\) from an axis has \\(\\omega=8.0\\,\\mathrm{rad\\,s^{-1}}\\). Find tangential speed.",
      answer: "\\[v_t=r\\omega=0.30(8.0)=2.4\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A wheel of radius \\(0.25\\,\\mathrm{m}\\) rolls without slipping through \\(5.0\\,\\mathrm{m}\\). Find angular displacement.",
      answer: "\\[\\Delta\\theta=\\frac{\\Delta x_{\\mathrm{cm}}}{R}=\\frac{5.0}{0.25}=20\\,\\mathrm{rad}\\]",
    },
  ]}
/>

## Checks

- Points farther from the axis have larger tangential speed.
- \\(a_t\\) changes speed; \\(a_c\\) changes direction.
- Rolling without slipping is a constraint, not an automatic property.
- The contact point is instantaneously at rest only relative to the surface.`;
