export const content = String.raw`## Principle

A binomial distribution models the number of successes in a fixed number of independent Bernoulli trials, each with the same success probability.

## Notation

<Notation
  items={[
    { symbol: "Bernoulli trial", meaning: "one trial with two outcomes: success or failure" },
    { symbol: "p", meaning: "success probability on each trial" },
    { symbol: "1-p", meaning: "failure probability on each trial" },
    { symbol: "n", meaning: "fixed number of trials" },
    { symbol: "X", meaning: "count of successes in the n trials" },
    { symbol: "k", meaning: "a possible success count" },
    { symbol: "X\\sim\\operatorname{Bin}(n,p)", meaning: "X has a binomial distribution with n trials and success probability p" },
  ]}
/>

## Method

### Step 1: Check the trial structure

There must be a fixed number \(n\) of trials, each trial must have success or failure, trials must be independent, and the same \(p\) must apply to every trial.

### Step 2: Count success positions

To get exactly \(k\) successes, choose which \(k\) of the \(n\) trial positions are successes.

<PhysicsDerivation
  items={[
    { label: "Choose success positions", tex: "\\binom{n}{k}" },
    { label: "Probability for one fixed pattern", tex: "p^k(1-p)^{n-k}" },
    { label: "Multiply by number of patterns", tex: "P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}" },
  ]}
/>

## Rules

<Equation label="Binomial model" tex="X\sim \operatorname{Bin}(n,p)" />

<Equation label="Binomial PMF" tex="P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}" />

<Equation label="Allowed counts" tex="k=0,1,2,\ldots,n" />

<Equation label="Mean" tex="E[X]=np" />

<Equation label="Variance" tex="\operatorname{Var}(X)=np(1-p)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A fair coin is tossed \\(5\\) times. Find the probability of exactly \\(3\\) heads.",
      answer: "Here \\(X\\sim\\operatorname{Bin}(5,0.5)\\). \\[P(X=3)=\\binom53(0.5)^3(0.5)^2=10(0.5)^5=\\frac{10}{32}.\\]",
    },
    {
      title: "Example 2",
      question: "A batch has independent gadgets, each defective with probability \\(0.02\\). In \\(20\\) gadgets, find the probability of exactly one defective gadget.",
      answer: "Let success mean defective. Then \\(X\\sim\\operatorname{Bin}(20,0.02)\\), so \\[P(X=1)=\\binom{20}{1}(0.02)(0.98)^{19}.\\]",
    },
    {
      title: "Example 3",
      question: "A detector catches each incoming particle independently with probability \\(0.8\\). For \\(12\\) incoming particles, find the expected number and variance of detections.",
      answer: "The count is \\(X\\sim\\operatorname{Bin}(12,0.8)\\). \\[E[X]=12(0.8)=9.6,\\quad \\operatorname{Var}(X)=12(0.8)(0.2)=1.92.\\]",
    },
  ]}
/>

## Checks

- The number of trials \(n\) must be fixed before observing outcomes.
- The trials must be independent.
- The same success probability \(p\) must apply to every trial.
- The count must satisfy \(0\le k\le n\).
- The binomial variable counts successes, not the order in which they occurred.`;
