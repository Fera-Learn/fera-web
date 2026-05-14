export const content = String.raw`## Principle

Variable-force work is the signed accumulation of force along a path.

## Notation

<Notation
  items={[
    { symbol: "F_x(x)", meaning: "position-dependent force component", unit: "N" },
    { symbol: "x_i,x_f", meaning: "initial and final positions", unit: "m" },
    { symbol: "W", meaning: "work over the interval", unit: "J" },
    { symbol: "k", meaning: "spring constant", unit: "N m^{-1}" },
    { symbol: "d\\vec{r}", meaning: "infinitesimal displacement", unit: "m" },
  ]}
/>

## Method

The force-position graph shows why an integral is needed: each thin slice contributes a small signed work amount.

<CartesianDiagram
  title="Work as signed area"
  caption="Area above the axis is positive work; area below is negative work."
  xRange={{ min: 0, max: 5, step: 1, label: "x" }}
  yRange={{ min: -4, max: 8, step: 2, label: "F_x" }}
  curves={[
    {
      label: "F_x(x)",
      points: [
        { x: 0, y: 6 },
        { x: 1, y: 5 },
        { x: 2, y: 3 },
        { x: 3, y: 0 },
        { x: 4, y: -2 },
        { x: 5, y: -3 },
      ],
    },
  ]}
/>

Adding the signed slices gives the work. For one-dimensional motion, the dot product reduces to the force component times \\(dx\\).

<PhysicsDerivation
  items={[
    {
      label: "Small work",
      tex: "dW=\\vec{F}\\cdot d\\vec{r}",
    },
    {
      label: "Path integral",
      tex: "W=\\int_{\\vec{r}_i}^{\\vec{r}_f}\\vec{F}\\cdot d\\vec{r}",
    },
    {
      label: "One dimension",
      tex: "d\\vec{r}=dx\\,\\hat{\\imath}\\Rightarrow dW=F_x(x)\\,dx",
    },
    {
      label: "Signed area",
      tex: "W=\\int_{x_i}^{x_f}F_x(x)\\,dx",
    },
    {
      label: "Spring work",
      tex: "W_s=\\int_{x_i}^{x_f}(-kx)\\,dx=\\frac{1}{2}k(x_i^2-x_f^2)",
    },
  ]}
/>

## Rules

<Equation label="Line integral" tex="W=\int_{\vec{r}_i}^{\vec{r}_f}\vec{F}\cdot d\vec{r}" />

<Equation label="One dimension" tex="W=\int_{x_i}^{x_f}F_x(x)\,dx" />

<Equation label="Graph area" tex="W=\text{signed area under }F_x\text{ against }x" />

<Equation label="Spring work" tex="W_s=\frac{1}{2}k(x_i^2-x_f^2)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A force varies as \\(F_x=5x\\). Find the work from \\(x=0\\) to \\(x=2\\,\\mathrm{m}\\).",
      answer: "\\[W=\\int_0^2 5x\\,dx=\\left[\\frac{5}{2}x^2\\right]_0^2=10\\,\\mathrm{J}\\]",
    },
    {
      title: "Example 2",
      question: "A spring with \\(k=100\\,\\mathrm{N\\,m^{-1}}\\) moves from \\(x=0.20\\,\\mathrm{m}\\) to \\(x=0\\). Find spring work.",
      answer: "\\[W_s=\\frac{1}{2}k(x_i^2-x_f^2)=\\frac{1}{2}(100)(0.20^2)=2.0\\,\\mathrm{J}\\]",
    },
  ]}
/>

## Checks

- Force times distance gives joules.
- Area below the axis is negative.
- Spring force points toward equilibrium.
- Path-dependent work needs the actual path.`;
