export const content = String.raw`## Principle

A normal distribution is a continuous bell-shaped model for quantities made from many small contributions. It is useful for heights, measurement errors, and many small independent disturbances in physics experiments.

Because the model is continuous, exact probabilities are not read from single points. They are areas under a density curve, so interval probabilities come from integrals.

## Notation

<Notation
  items={[
    { symbol: "X", meaning: "continuous random variable being modelled" },
    { symbol: "\\mu", meaning: "mean, the centre of the normal distribution" },
    { symbol: "\\sigma^2", meaning: "variance, the square of the spread parameter" },
    { symbol: "\\sigma", meaning: "standard deviation, with sigma positive" },
    { symbol: "f_X(x)", meaning: "density of X at the value x" },
    { symbol: "a,b", meaning: "interval endpoints with a\\le b" },
  ]}
/>

## Method

### Step 1: Use the density as a probability model

The curve height is density, not probability. Probability is area under the curve over an interval.

<PhysicsDerivation
  items={[
    { label: "Density is non-negative", tex: "f_X(x)\\ge0" },
    { label: "Total area is one", tex: "\\int_{-\\infty}^{\\infty} f_X(x)\\,dx=1" },
    { label: "Interval probability", tex: "P(a\\le X\\le b)=\\int_a^b f_X(x)\\,dx" },
    { label: "Exact value probability", tex: "P(X=a)=\\int_a^a f_X(x)\\,dx=0" },
  ]}
/>

### Step 2: Read the shape

The mean \(\mu\) is the line of symmetry. Values the same distance to the left and right of \(\mu\) have the same density, so equal-width matching intervals on opposite sides have equal area.

## Rules

<Equation label="Total area" tex="\int_{-\infty}^{\infty} f_X(x)\,dx=1" />

<Equation label="Interval probability" tex="P(a\le X\le b)=\int_a^b f_X(x)\,dx" />

<Equation label="Symmetry" tex="f_X(\mu-t)=f_X(\mu+t)" />

<Equation label="Point probability" tex="P(X=a)=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Adult heights in a large population are often roughly bell-shaped. What does the mean represent?",
      answer: "The mean \\(\\mu\\) represents the centre of the height distribution. The standard deviation \\(\\sigma\\) measures the typical spread of heights around that centre.",
    },
    {
      title: "Example 2",
      question: "A ruler measurement has many small effects: eye alignment, scale printing, and hand position. Why can a normal model be reasonable?",
      answer: "The total error is made from many small contributions. A bell-shaped density centred near zero can model the random error, and probabilities such as \\(P(-0.2\\le X\\le0.2)\\) are areas under that density.",
    },
    {
      title: "Example 3",
      question: "In a physics experiment, air currents, sensor noise, and vibration each add a small independent disturbance. What probability describes a reading between \\(a\\) and \\(b\\)?",
      answer: "Use the area under the density: \\[P(a\\le X\\le b)=\\int_a^b f_X(x)\\,dx.\\] The endpoints are values of the measured quantity, and the result is dimensionless probability.",
    },
  ]}
/>

## Checks

- A normal distribution is continuous, so a single exact value has probability zero.
- The total area under the density curve is \(1\).
- Probabilities are areas under the density, not heights of the curve.
- The mean is the symmetry centre, while the standard deviation measures spread.
- Exact normal probabilities are evaluated using integrals or tables/software based on those integrals.`;
