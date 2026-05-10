export const content = String.raw`## Principle

A Poisson distribution models a count of events in a region or time interval when events occur at an average rate and are sufficiently independent. The model has no fixed upper bound on the count.

## Notation

<Notation
  items={[
    { symbol: "r", meaning: "average event rate per unit interval" },
    { symbol: "s", meaning: "interval length, area, volume, or exposure size" },
    { symbol: "\\lambda=rs", meaning: "mean count in the interval" },
    { symbol: "X", meaning: "event count in the interval" },
    { symbol: "k", meaning: "a possible count: 0,1,2,..." },
    { symbol: "X\\sim\\operatorname{Po}(\\lambda)", meaning: "X has a Poisson distribution with mean lambda" },
  ]}
/>

## Method

### Step 1: Convert rate and interval length to expected count

If the rate is \(r\) per unit and the interval length is \(s\) units, then \(\lambda=rs\). The units cancel to give a dimensionless expected count.

### Step 2: Apply the Poisson PMF

Use \(k\) for the count requested. The support is all non-negative integers.

## Rules

<Equation label="Mean count" tex="\lambda=rs" />

<Equation label="Poisson model" tex="X\sim \operatorname{Po}(\lambda)" />

<Equation label="Poisson PMF" tex="P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}" />

<Equation label="Mean" tex="E[X]=\lambda" />

<Equation label="Variance" tex="\operatorname{Var}(X)=\lambda" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A radioactive sample emits particles at an average rate of \\(3\\) per minute. Find the probability of exactly \\(2\\) emissions in one minute.",
      answer: "Here \\(\\lambda=3\\cdot1=3\\). \\[P(X=2)=e^{-3}\\frac{3^2}{2!}.\\]",
    },
    {
      title: "Example 2",
      question: "A website receives \\(5\\) arrivals per minute on average. Find the probability of no arrivals in \\(30\\) seconds.",
      answer: "The interval is \\(s=0.5\\) minutes, so \\(\\lambda=5(0.5)=2.5\\). \\[P(X=0)=e^{-2.5}\\frac{2.5^0}{0!}=e^{-2.5}.\\]",
    },
    {
      title: "Example 3",
      question: "Particles occur in a material at average density \\(4\\) per cubic centimetre. For a \\(0.25\\text{ cm}^3\\) sample, find the mean and variance of the particle count.",
      answer: "The mean count is \\(\\lambda=4(0.25)=1\\). For a Poisson count, \\[E[X]=1,\\quad \\operatorname{Var}(X)=1.\\]",
    },
  ]}
/>

## Checks

- A Poisson count has no fixed upper bound.
- The events must be independent enough for the model to be reasonable.
- \(\lambda\) is a dimensionless count expectation, even when computed from a rate and interval length.
- The possible counts are \(0,1,2,\ldots\).
- Mean and variance are both \(\lambda\) for a Poisson random variable.`;
