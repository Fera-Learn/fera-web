export const content = String.raw`## Principle

A measurement can be modelled as a fixed true value plus random error. Random error varies from trial to trial, while systematic error shifts measurements in a consistent direction.

## Notation

<Notation
  items={[
    { symbol: "X", meaning: "measured value random variable" },
    { symbol: "\\mu", meaning: "fixed true value of the quantity being measured" },
    { symbol: "\\varepsilon", meaning: "random error in the measurement" },
    { symbol: "X=\\mu+\\varepsilon", meaning: "measurement model" },
    { symbol: "E[\\varepsilon]=0", meaning: "unbiased random error" },
    { symbol: "\\sigma^2", meaning: "variance of the random error" },
  ]}
/>

## Method

### Step 1: Separate true value from error

Treat \(\mu\) as fixed. The randomness in \(X\) comes from \(\varepsilon\).

<PhysicsDerivation
  items={[
    { label: "Measurement model", tex: "X=\\mu+\\varepsilon" },
    { label: "Expectation", tex: "E[X]=E[\\mu+\\varepsilon]" },
    { label: "Fixed true value", tex: "E[X]=\\mu+E[\\varepsilon]" },
    { label: "Unbiased error", tex: "E[X]=\\mu+0=\\mu" },
  ]}
/>

### Step 2: Derive the variance

A fixed shift changes the centre but not the spread.

<PhysicsDerivation
  items={[
    { label: "Start with variance", tex: "\\operatorname{Var}(X)=\\operatorname{Var}(\\mu+\\varepsilon)" },
    { label: "Fixed shift has no variance", tex: "\\operatorname{Var}(X)=\\operatorname{Var}(\\varepsilon)" },
    { label: "Error variance", tex: "\\operatorname{Var}(X)=\\sigma^2" },
  ]}
/>

## Rules

<Equation label="Measurement model" tex="X=\mu+\varepsilon" />

<Equation label="Unbiased random error" tex="E[\varepsilon]=0" />

<Equation label="Measured mean" tex="E[X]=\mu" />

<Equation label="Measured variance" tex="\operatorname{Var}(X)=\sigma^2" />

<Equation label="Biased calibration model" tex="X=\mu+b+\varepsilon" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A bolt has true diameter \\(\\mu\\). A calliper reading is \\(X=\\mu+\\varepsilon\\) with \\(E[\\varepsilon]=0\\). What is \\(E[X]\\)?",
      answer: "Since \\(\\mu\\) is fixed, \\(E[X]=E[\\mu+\\varepsilon]=\\mu+E[\\varepsilon]=\\mu\\). The measurement is unbiased.",
    },
    {
      title: "Example 2",
      question: "A voltmeter reading has random error variance \\(0.04\\) V\\(^2\\). If the true voltage is fixed, what is \\(\\operatorname{Var}(X)\\)?",
      answer: "The fixed true voltage does not add variance, so \\(\\operatorname{Var}(X)=\\operatorname{Var}(\\varepsilon)=0.04\\) V\\(^2\\).",
    },
    {
      title: "Example 3",
      question: "A detector calibration is high by \\(0.3\\) units every time, plus random zero-mean error. Is this random or systematic error?",
      answer: "The constant \\(0.3\\) shift is systematic error. A model is \\(X=\\mu+0.3+\\varepsilon\\), so \\(E[X]=\\mu+0.3\\), not \\(\\mu\\).",
    },
  ]}
/>

## Checks

- Random error changes from measurement to measurement.
- Systematic error is a consistent bias such as a calibration offset.
- If \(E[\varepsilon]=0\), then \(X\) is unbiased for the true value \(\mu\).
- After a measurement, the observed value of \(X\) is known, but \(\mu\) and \(\varepsilon\) may remain unknown.
- A fixed true value affects the mean of \(X\), not its variance.`;
