export const content = String.raw`## Principle

The central limit theorem says that sums and averages of many independent identically distributed variables are approximately normal under broad conditions. The individual observations do not need to be normally distributed.

## Notation

<Notation
  items={[
    { symbol: "X_1,X_2,\\ldots,X_n", meaning: "independent identically distributed random variables" },
    { symbol: "\\mu", meaning: "common mean E[X_j]" },
    { symbol: "\\sigma^2", meaning: "common variance Var(X_j)" },
    { symbol: "\\overline{X}", meaning: "sample mean random variable" },
    { symbol: "n", meaning: "number of observations" },
    { symbol: "Z", meaning: "standard normal variable used for approximation" },
  ]}
/>

## Method

### Step 1: Define the average

The sample mean is the random variable formed by adding the observations and dividing by the sample size.

<PhysicsDerivation
  items={[
    { label: "Sample mean", tex: "\\overline{X}=\\frac{1}{n}\\sum_{j=1}^{n}X_j" },
    { label: "Normal approximation", tex: "\\overline{X}\\approx N\\left(\\mu,\\frac{\\sigma^2}{n}\\right)" },
  ]}
/>

### Step 2: Standardise the sample mean

The standard deviation of \(\overline{X}\) is \(\sigma/\sqrt n\). Subtract the mean and divide by this standard deviation.

<PhysicsDerivation
  items={[
    { label: "Exact mean", tex: "E[\\overline{X}]=\\mu" },
    { label: "Exact variance", tex: "\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{n}" },
    { label: "Exact standard deviation", tex: "\\operatorname{SD}(\\overline{X})=\\frac{\\sigma}{\\sqrt n}" },
    { label: "Standardised average", tex: "\\frac{\\overline{X}-\\mu}{\\sigma/\\sqrt n}\\approx Z" },
  ]}
/>

## Rules

<Equation label="Sample mean" tex="\overline{X}=\frac{1}{n}\sum_{j=1}^{n}X_j" />

<Equation label="CLT for average" tex="\overline{X}\approx N\left(\mu,\frac{\sigma^2}{n}\right)" />

<Equation label="CLT standardisation" tex="\frac{\overline{X}-\mu}{\sigma/\sqrt n}\approx N(0,1)" />

<Equation label="CLT for sum" tex="\sum_{j=1}^{n}X_j\approx N(n\mu,n\sigma^2)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A simulation adds \\(50\\) independent uniform random numbers. What shape should the sum have approximately?",
      answer: "The individual terms are uniform, but the sum of many independent identically distributed terms is approximately normal by the central limit theorem.",
    },
    {
      title: "Example 2",
      question: "A quality-control rule shuts down a machine if the average of \\(64\\) measurements exceeds \\(10.3\\). The process has \\(\\mu=10\\) and \\(\\sigma=0.8\\). Express the shutdown probability.",
      answer: "The exact mean is \\(10\\) and the exact standard deviation of \\(\\overline{X}\\) is \\(0.8/\\sqrt{64}\\). Use the normal approximation \\(\\overline{X}\\approx N(10,0.8^2/64)\\): \\[P(\\overline{X}\\gt10.3)\\approx P\\left(Z\\gt\\frac{10.3-10}{0.8/\\sqrt{64}}\\right)=P(Z\\gt3).\\]",
    },
    {
      title: "Example 3",
      question: "A physics lab repeats a noisy time measurement \\(25\\) times. Why is the average easier to model than a single reading?",
      answer: "The average combines many independent readings. Its mean is exactly \\(\\mu\\) and its variance is exactly \\(\\sigma^2/25\\) under iid assumptions; its distribution is approximately normal even if one reading is not exactly normal.",
    },
  ]}
/>

## Checks

- The central limit theorem concerns sums and averages, not each individual observation becoming normal.
- The variables should be independent and identically distributed in this course statement.
- The average has variance \(\sigma^2/n\), so its spread shrinks as \(n\) grows.
- Standardise \(\overline{X}\) using \(\sigma/\sqrt n\).
- Larger \(n\) usually improves the normal approximation.`;
