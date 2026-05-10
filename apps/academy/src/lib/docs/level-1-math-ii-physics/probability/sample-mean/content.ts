export const content = String.raw`## Principle

The sample mean is a random variable before data are observed and a number after data are recorded. Averaging independent measurements preserves the population mean and reduces variance by a factor of \(n\).

## Notation

<Notation
  items={[
    { symbol: "X_1,X_2,\\ldots,X_n", meaning: "independent identically distributed measurements" },
    { symbol: "\\overline{X}", meaning: "sample mean random variable before observation" },
    { symbol: "\\overline{x}", meaning: "observed sample mean after data are recorded" },
    { symbol: "n", meaning: "sample size" },
    { symbol: "\\mu", meaning: "population mean E[X_j]" },
    { symbol: "\\sigma^2", meaning: "population variance Var(X_j)" },
  ]}
/>

## Method

### Step 1: Define the sample mean

Add the measurements and divide by the number of measurements.

<PhysicsDerivation
  items={[
    { label: "Sample mean random variable", tex: "\\overline{X}=\\frac{1}{n}\\sum_{j=1}^{n}X_j" },
    { label: "Observed sample mean", tex: "\\overline{x}=\\frac{1}{n}\\sum_{j=1}^{n}x_j" },
  ]}
/>

### Step 2: Derive the mean

Use linearity of expectation. Independence is not needed for this mean calculation.

<PhysicsDerivation
  items={[
    { label: "Start", tex: "E[\\overline{X}]=E\\left[\\frac{1}{n}\\sum_{j=1}^{n}X_j\\right]" },
    { label: "Pull out constant", tex: "E[\\overline{X}]=\\frac{1}{n}E\\left[\\sum_{j=1}^{n}X_j\\right]" },
    { label: "Linearity", tex: "E[\\overline{X}]=\\frac{1}{n}\\sum_{j=1}^{n}E[X_j]" },
    { label: "Identical means", tex: "E[\\overline{X}]=\\frac{1}{n}\\sum_{j=1}^{n}\\mu" },
    { label: "Simplify", tex: "E[\\overline{X}]=\\frac{n\\mu}{n}=\\mu" },
  ]}
/>

### Step 3: Derive the variance

Use independence so the variance of the sum is the sum of variances.

<PhysicsDerivation
  items={[
    { label: "Start", tex: "\\operatorname{Var}(\\overline{X})=\\operatorname{Var}\\left(\\frac{1}{n}\\sum_{j=1}^{n}X_j\\right)" },
    { label: "Scale variance", tex: "\\operatorname{Var}(\\overline{X})=\\frac{1}{n^2}\\operatorname{Var}\\left(\\sum_{j=1}^{n}X_j\\right)" },
    { label: "Independence", tex: "\\operatorname{Var}(\\overline{X})=\\frac{1}{n^2}\\sum_{j=1}^{n}\\operatorname{Var}(X_j)" },
    { label: "Identical variances", tex: "\\operatorname{Var}(\\overline{X})=\\frac{1}{n^2}\\sum_{j=1}^{n}\\sigma^2" },
    { label: "Simplify", tex: "\\operatorname{Var}(\\overline{X})=\\frac{n\\sigma^2}{n^2}=\\frac{\\sigma^2}{n}" },
  ]}
/>

## Rules

<Equation label="Sample mean" tex="\overline{X}=\frac{1}{n}\sum_{j=1}^{n}X_j" />

<Equation label="Observed mean" tex="\overline{x}=\frac{1}{n}\sum_{j=1}^{n}x_j" />

<Equation label="Expected sample mean" tex="E[\overline{X}]=\mu" />

<Equation label="Variance of sample mean" tex="\operatorname{Var}(\overline{X})=\frac{\sigma^2}{n}" />

<Equation label="Standard deviation of sample mean" tex="\operatorname{SD}(\overline{X})=\frac{\sigma}{\sqrt n}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Eight independent dice-pair sums are recorded. If one dice-pair sum has mean \\(7\\), what is the expected sample mean?",
      answer: "The measurements are identically distributed with \\(\\mu=7\\). Therefore \\(E[\\overline{X}]=\\mu=7\\).",
    },
    {
      title: "Example 2",
      question: "Repeated diameter measurements have population standard deviation \\(0.12\\) mm. What is the standard deviation of the mean of \\(9\\) measurements?",
      answer: "Use \\(\\operatorname{SD}(\\overline{X})=\\sigma/\\sqrt n\\). Thus \\(0.12/\\sqrt9=0.04\\) mm.",
    },
    {
      title: "Example 3",
      question: "If the sample size is multiplied by \\(4\\), what happens to the standard deviation of the sample mean?",
      answer: "The standard deviation becomes \\(\\sigma/\\sqrt{4n}=\\sigma/(2\\sqrt n)\\). It is halved, not divided by \\(4\\).",
    },
  ]}
/>

## Checks

- \(\overline{X}\) is random before data are observed; \(\overline{x}\) is the observed number.
- The sample mean has expected value \(\mu\).
- Independence is needed to add variances in the variance derivation.
- The variance of the sample mean is \(\sigma^2/n\).
- The standard deviation of the sample mean is \(\sigma/\sqrt n\), not \(\sigma/n\).`;
