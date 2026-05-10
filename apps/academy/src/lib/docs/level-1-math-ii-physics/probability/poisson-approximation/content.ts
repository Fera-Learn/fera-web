export const content = String.raw`## Principle

A binomial count with many trials and a small success probability can often be approximated by a Poisson count. The Poisson parameter is the expected number of successes, \(\lambda=np\), not the success probability \(p\).

## Notation

<Notation
  items={[
    { symbol: "X\\sim\\operatorname{Bin}(n,p)", meaning: "binomial count with n trials and success probability p" },
    { symbol: "Y\\sim\\operatorname{Po}(\\lambda)", meaning: "Poisson approximation with parameter lambda" },
    { symbol: "\\lambda=np", meaning: "expected number of binomial successes" },
    { symbol: "k", meaning: "fixed count being approximated" },
    { symbol: "n(n-1)\\cdots(n-k+1)", meaning: "falling factorial for k selected successful positions" },
  ]}
/>

## Method

### Step 1: Match the mean count

Set \(\lambda=np\), so \(p=\lambda/n\). The approximation keeps the expected number of rare successes fixed while \(n\) is large.

### Step 2: Split the binomial probability

For fixed \(k\), rewrite the binomial PMF into pieces that have clear limits.

<PhysicsDerivation
  items={[
    { label: "Start with binomial", tex: "P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}" },
    { label: "Substitute p=lambda/n", tex: "P(X=k)=\\binom{n}{k}\\left(\\frac{\\lambda}{n}\\right)^k\\left(1-\\frac{\\lambda}{n}\\right)^{n-k}" },
    { label: "Expand the combination", tex: "P(X=k)=\\frac{n(n-1)\\cdots(n-k+1)}{k!}\\frac{\\lambda^k}{n^k}\\left(1-\\frac{\\lambda}{n}\\right)^{n-k}" },
    { label: "Separate the factors", tex: "P(X=k)=\\frac{n(n-1)\\cdots(n-k+1)}{n^k}\\frac{\\lambda^k}{k!}\\left(1-\\frac{\\lambda}{n}\\right)^n\\left(1-\\frac{\\lambda}{n}\\right)^{-k}" },
    { label: "Take limits", tex: "\\frac{n(n-1)\\cdots(n-k+1)}{n^k}\\to1,\\quad \\left(1-\\frac{\\lambda}{n}\\right)^n\\to e^{-\\lambda},\\quad \\left(1-\\frac{\\lambda}{n}\\right)^{-k}\\to1" },
    { label: "Poisson limit", tex: "P(X=k)\\to e^{-\\lambda}\\frac{\\lambda^k}{k!}" },
  ]}
/>

## Rules

<Equation label="Mean matching" tex="\lambda=np" />

<Equation label="Approximation" tex="X\sim\operatorname{Bin}(n,p)\quad\approx\quad Y\sim\operatorname{Po}(np)" />

<Equation label="Approximate probability" tex="P(X=k)\approx e^{-\lambda}\frac{\lambda^k}{k!}" />

<Equation label="Useful guide" tex="n\ge20\quad\text{and}\quad p\le0.05" />

<Equation label="Excellent guide" tex="n\ge100\quad\text{and}\quad np\le10" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A factory makes \\(200\\) gadgets, each defective independently with probability \\(0.01\\). Approximate the probability of exactly \\(3\\) defects.",
      answer: "Use \\(\\lambda=np=200(0.01)=2\\). Then \\[P(X=3)\\approx e^{-2}\\frac{2^3}{3!}.\\]",
    },
    {
      title: "Example 2",
      question: "In \\(1000\\) tiny time intervals, a rare decay occurs in each interval with probability \\(0.002\\). Approximate the probability of no decays.",
      answer: "The matched Poisson parameter is \\(\\lambda=1000(0.002)=2\\). Thus \\[P(X=0)\\approx e^{-2}\\frac{2^0}{0!}=e^{-2}.\\]",
    },
    {
      title: "Example 3",
      question: "For \\(n=120\\) and \\(p=0.04\\), decide whether the guide supports a Poisson approximation and state the parameter.",
      answer: "The conditions \\(n\\ge20\\) and \\(p\\le0.05\\) hold. Use \\(\\lambda=np=120(0.04)=4.8\\), so approximate with \\(\\operatorname{Po}(4.8)\\).",
    },
  ]}
/>

## Checks

- Use \(\lambda=np\), not \(p\), as the Poisson parameter.
- The approximation is designed for large \(n\) and small \(p\).
- The count \(k\) is fixed in the limiting calculation.
- A practical guide is \(n\ge20\) and \(p\le0.05\).
- The approximation is often excellent when \(n\ge100\) and \(np\le10\).`;
