export const content = String.raw`## Principle

Normal distributions can approximate cumulative probabilities for some discrete count distributions. The approximation is most useful for ranges of counts, and a continuity correction accounts for the fact that integer counts are being represented by intervals on a continuous scale.

## Notation

<Notation
  items={[
    { symbol: "X\\sim\\operatorname{Bin}(n,p)", meaning: "binomial count with n trials and success probability p" },
    { symbol: "Y\\sim\\operatorname{Po}(\\lambda)", meaning: "Poisson count with parameter lambda" },
    { symbol: "\\mu", meaning: "mean of the approximating normal distribution" },
    { symbol: "\\sigma^2", meaning: "variance of the approximating normal distribution" },
    { symbol: "Z", meaning: "standard normal variable after standardisation" },
    { symbol: "\\Phi", meaning: "standard normal cumulative distribution function" },
  ]}
/>

## Method

### Step 1: Match the count distribution mean and variance

For a binomial count, use \(\mu=np\) and \(\sigma^2=np(1-p)\). For a Poisson count, use \(\mu=\lambda\) and \(\sigma^2=\lambda\).

<PhysicsDerivation
  items={[
    { label: "Binomial approximation", tex: "X\\sim\\operatorname{Bin}(n,p)\\approx N(np,np(1-p))" },
    { label: "Poisson approximation", tex: "Y\\sim\\operatorname{Po}(\\lambda)\\approx N(\\lambda,\\lambda)" },
  ]}
/>

### Step 2: Apply a continuity correction for integer counts

An event such as \(X\gt40\) means \(X\ge41\) for an integer count. On the continuous normal scale, approximate this with the interval above \(40.5\).

<PhysicsDerivation
  items={[
    { label: "Upper-tail count", tex: "P(X\\gt40)=P(X\\ge41)" },
    { label: "Continuity correction", tex: "P(X\\ge41)\\approx P(N\\gt40.5)" },
    { label: "Standardise", tex: "P(N\\gt40.5)=P\\left(Z\\gt\\frac{40.5-\\mu}{\\sigma}\\right)" },
  ]}
/>

## Rules

<Equation label="Binomial mean" tex="\mu=np" />

<Equation label="Binomial variance" tex="\sigma^2=np(1-p)" />

<Equation label="Binomial guide" tex="np\ge10\quad\text{and}\quad np(1-p)\ge10" />

<Equation label="Poisson mean and variance" tex="\mu=\lambda,\quad \sigma^2=\lambda" />

<Equation label="Poisson guide" tex="\lambda\ge5" />

<Equation label="Standardisation" tex="Z=\frac{x-\mu}{\sigma}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A factory makes \\(1500\\) gadgets, each defective with probability \\(0.02\\). Approximate the probability of more than \\(40\\) defects.",
      answer: "For \\(X\\sim\\operatorname{Bin}(1500,0.02)\\), \\(\\mu=np=30\\) and \\(\\sigma^2=np(1-p)=29.4\\), so \\(\\sigma=\\sqrt{29.4}\\). More than \\(40\\) means at least \\(41\\), so use \\[P(X\\gt40)\\approx P\\left(Z\\gt\\frac{40.5-30}{\\sqrt{29.4}}\\right).\\]",
    },
    {
      title: "Example 2",
      question: "A detector records a Poisson count with \\(\\lambda=25\\). Approximate \\(P(Y\\le30)\\).",
      answer: "Use \\(Y\\approx N(25,25)\\), so \\(\\sigma=5\\). The continuity-corrected event is \\(Y\\le30.5\\), giving \\[P(Y\\le30)\\approx \\Phi\\left(\\frac{30.5-25}{5}\\right)=\\Phi(1.1).\\]",
    },
    {
      title: "Example 3",
      question: "For \\(X\\sim\\operatorname{Bin}(80,0.10)\\), should the normal guide be used?",
      answer: "Here \\(np=8\\) and \\(np(1-p)=7.2\\). Both are below \\(10\\), so the stated guide does not support the normal approximation.",
    },
  ]}
/>

## Checks

- Use the approximation for cumulative probabilities such as tails and intervals.
- Do not treat exact point probabilities as normal areas without care.
- For binomial counts, check both \(np\ge10\) and \(np(1-p)\ge10\).
- For Poisson counts, check \(\lambda\ge5\).
- Use continuity corrections because integer counts are approximated by a continuous variable.`;
