export const content = String.raw`## Principle

A continuous random variable has probabilities described by area under a density curve. Individual exact values have probability zero; intervals have probability equal to integrated density.

## Notation

<Notation
  items={[
    { symbol: "X", meaning: "continuous random variable" },
    { symbol: "x", meaning: "a possible measured value of X" },
    { symbol: "f_X(x)", meaning: "probability density function, or PDF" },
    { symbol: "F_X(x)", meaning: "cumulative distribution function, or CDF" },
    { symbol: "D_X", meaning: "support where the density may be nonzero" },
    { symbol: "a,b", meaning: "interval endpoints with a\\le b" },
    { symbol: "[f_X]", meaning: "density unit, the inverse unit of X" },
  ]}
/>

## Method

### Step 1: Identify the support and density unit

The support states where the variable can lie. If \(X\) is measured in seconds, then \(f_X(x)\) is measured in per second, so density times interval length is dimensionless probability.

### Step 2: Integrate density over intervals

Continuous probability is area. The endpoints do not change the probability because a single point has probability zero.

<PhysicsDerivation
  items={[
    { label: "Interval probability", tex: "P(a\\le X\\le b)=\\int_a^b f_X(x)\\,dx" },
    { label: "CDF definition", tex: "F_X(x)=P(X\\le x)" },
    { label: "CDF as accumulated area", tex: "F_X(x)=\\int_{-\\infty}^{x} f_X(t)\\,dt" },
    { label: "Density from CDF where differentiable", tex: "F_X'(x)=f_X(x)" },
    { label: "Point probability", tex: "P(X=x)=\\int_x^x f_X(t)\\,dt=0" },
  ]}
/>

## Rules

<Equation label="Density total area" tex="\int_{-\infty}^{\infty}f_X(x)\,dx=1" />

<Equation label="Interval probability" tex="P(a\le X\le b)=\int_a^b f_X(x)\,dx" />

<Equation label="CDF" tex="F_X(x)=P(X\le x)" />

<Equation label="CDF derivative where differentiable" tex="F_X'(x)=f_X(x)" />

<Equation label="Point probability" tex="P(X=x)=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A value is uniformly distributed on \\([2,6]\\). Find the density and \\(P(3\\le X\\le5)\\).",
      answer: "The support length is \\(4\\), so \\(f_X(x)=1/4\\) on \\([2,6]\\). Then \\[P(3\\le X\\le5)=\\int_3^5\\frac{1}{4}\\,dx=\\frac{5-3}{4}=\\frac{1}{2}.\\]",
    },
    {
      title: "Example 2",
      question: "A waiting time \\(T\\) in seconds has density \\(f_T(t)=0.2e^{-0.2t}\\) for \\(t\\ge0\\). Find \\(P(T\\le3)\\).",
      answer: "Integrate from \\(0\\) to \\(3\\): \\[P(T\\le3)=\\int_0^3 0.2e^{-0.2t}\\,dt=1-e^{-0.6}.\\] The density unit is per second.",
    },
    {
      title: "Example 3",
      question: "A measurement error \\(E\\) in millimetres has density concentrated near \\(0\\). What does \\(P(-0.1\\le E\\le0.1)\\) represent?",
      answer: "It is the area under the error density between \\(-0.1\\) mm and \\(0.1\\) mm: \\[P(-0.1\\le E\\le0.1)=\\int_{-0.1}^{0.1}f_E(e)\\,de.\\]",
    },
  ]}
/>

## Checks

- A density value can exceed \(1\); it is not itself a probability.
- Integrated area, not height, must be between \(0\) and \(1\).
- The total area under a valid PDF must be \(1\).
- The density unit is the inverse of the unit of the random variable.
- For continuous variables, \(P(X=x)=0\) even when \(x\) lies in the support.`;
