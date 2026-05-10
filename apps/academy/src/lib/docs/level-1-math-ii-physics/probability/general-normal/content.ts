export const content = String.raw`## Principle

A general normal random variable is obtained by shifting and scaling a standard normal random variable. The location parameter \(\mu\) sets the mean, and the positive scale \(\sigma\) sets the standard deviation.

## Notation

<Notation
  items={[
    { symbol: "X\\sim N(\\mu,\\sigma^2)", meaning: "normal random variable with mean mu and variance sigma squared" },
    { symbol: "\\mu", meaning: "mean and centre of X" },
    { symbol: "\\sigma", meaning: "standard deviation of X, with sigma positive" },
    { symbol: "\\sigma^2", meaning: "variance of X" },
    { symbol: "Z=(X-\\mu)/\\sigma", meaning: "standardised version of X" },
    { symbol: "\\Phi", meaning: "standard normal cumulative distribution function" },
  ]}
/>

## Method

### Step 1: Standardise

Subtract the centre and divide by the standard deviation. This converts the measured variable into standard normal units.

<PhysicsDerivation
  items={[
    { label: "Standardise", tex: "Z=\\frac{X-\\mu}{\\sigma}" },
    { label: "Solve for X", tex: "\\sigma Z=X-\\mu" },
    { label: "Shift back", tex: "X=\\sigma Z+\\mu" },
  ]}
/>

### Step 2: Derive mean and variance

Use \(E[Z]=0\), \(\operatorname{Var}(Z)=1\), and the fact that \(\mu\) is fixed.

<PhysicsDerivation
  items={[
    { label: "Start from scaled form", tex: "X=\\sigma Z+\\mu" },
    { label: "Expectation", tex: "E[X]=E[\\sigma Z+\\mu]" },
    { label: "Linearity", tex: "E[X]=\\sigma E[Z]+\\mu" },
    { label: "Use E[Z]=0", tex: "E[X]=\\sigma\\cdot0+\\mu=\\mu" },
    { label: "Variance", tex: "\\operatorname{Var}(X)=\\operatorname{Var}(\\sigma Z+\\mu)" },
    { label: "Shift does not change variance", tex: "\\operatorname{Var}(X)=\\operatorname{Var}(\\sigma Z)" },
    { label: "Scale variance", tex: "\\operatorname{Var}(X)=\\sigma^2\\operatorname{Var}(Z)" },
    { label: "Use Var(Z)=1", tex: "\\operatorname{Var}(X)=\\sigma^2" },
  ]}
/>

## Rules

<Equation label="Standardisation" tex="Z=\frac{X-\mu}{\sigma}" />

<Equation label="Density" tex="f_X(x)=\frac{1}{\sigma\sqrt{2\pi}}e^{-(x-\mu)^2/(2\sigma^2)}" />

<Equation label="CDF transformation" tex="P(X\le x)=\Phi\left(\frac{x-\mu}{\sigma}\right)" />

<Equation label="Interval transformation" tex="P(a\le X\le b)=\Phi\left(\frac{b-\mu}{\sigma}\right)-\Phi\left(\frac{a-\mu}{\sigma}\right)" />

<Equation label="Mean and variance" tex="E[X]=\mu,\quad \operatorname{Var}(X)=\sigma^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A measured length in mm is modelled by \\(X\\sim N(50,4)\\), meaning mean \\(50\\) mm and standard deviation \\(2\\) mm. Standardise \\(X=53\\) mm.",
      answer: "The standardised value is \\[z=\\frac{53-50}{2}=1.5.\\]",
    },
    {
      title: "Example 2",
      question: "For \\(X\\sim N(100,25)\\), express \\(P(95\\le X\\le110)\\) using \\(\\Phi\\).",
      answer: "Here \\(\\sigma=5\\). Standardise both endpoints: \\[P(95\\le X\\le110)=\\Phi\\left(\\frac{110-100}{5}\\right)-\\Phi\\left(\\frac{95-100}{5}\\right)=\\Phi(2)-\\Phi(-1).\\]",
    },
    {
      title: "Example 3",
      question: "A voltage error in volts is modelled by \\(X\\sim N(0,0.0004)\\). What are the units of \\(\\sigma\\)?",
      answer: "The variance has units V\\(^2\\), so \\(\\sigma=\\sqrt{0.0004}=0.02\\) V. Standard deviation has the same units as the measured quantity.",
    },
  ]}
/>

## Checks

- In \(N(\mu,\sigma^2)\), the second parameter is variance, not standard deviation.
- \(\sigma\) must be positive and has the same units as \(X\).
- Standardising subtracts \(\mu\) before dividing by \(\sigma\).
- Normal probabilities for \(X\) are converted to standard normal probabilities for \(Z\).
- The CDF transformation uses the endpoint \(x\), not an interval width.`;
