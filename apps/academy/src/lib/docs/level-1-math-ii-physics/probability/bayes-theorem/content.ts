export const content = String.raw`## Principle

Bayes theorem reverses conditional probability. It updates a prior belief about a hypothesis after an observation is made.

## Notation

<Notation
  items={[
    { symbol: "H", meaning: "hypothesis event" },
    { symbol: "B", meaning: "observed evidence event" },
    { symbol: "P(H)", meaning: "prior probability of the hypothesis before observing B" },
    { symbol: "P(B|H)", meaning: "likelihood: probability of the evidence if H is true" },
    { symbol: "P(B)", meaning: "evidence probability: total probability of observing B" },
    { symbol: "P(H|B)", meaning: "posterior probability of H after observing B" },
    { symbol: "E_1,\\ldots,E_n", meaning: "partition events: exactly one of these cases occurs" },
  ]}
/>

## Method

### Derive Bayes theorem

<PhysicsDerivation
  items={[
    { label: "Use the multiplication rule one way", tex: "P(H\\cap B)=P(H|B)P(B)" },
    { label: "Use the multiplication rule the other way", tex: "P(H\\cap B)=P(B|H)P(H)" },
    { label: "Equate the same intersection", tex: "P(H|B)P(B)=P(B|H)P(H)" },
    { label: "Divide by the evidence probability", tex: "P(H|B)=\\frac{P(B|H)P(H)}{P(B)}" },
  ]}
/>

### Use a partition for the denominator

If \(E_1,\ldots,E_n\) are exhaustive and non-overlapping cases, then the evidence can happen through any one of them.

<PhysicsDerivation
  items={[
    { label: "Split the evidence", tex: "B=(B\\cap E_1)\\cup\\cdots\\cup(B\\cap E_n)" },
    { label: "Add disjoint pieces", tex: "P(B)=P(B\\cap E_1)+\\cdots+P(B\\cap E_n)" },
    { label: "Use multiplication rule", tex: "P(B)=P(B|E_1)P(E_1)+\\cdots+P(B|E_n)P(E_n)" },
    { label: "Summation form", tex: "P(B)=\\sum_{i=1}^n P(B|E_i)P(E_i)" },
  ]}
/>

## Rules

<Equation label="Bayes theorem" tex="P(H|B)=\frac{P(B|H)P(H)}{P(B)}" />

<Equation label="Evidence from a partition" tex="P(B)=\sum_{i=1}^n P(B|E_i)P(E_i)" />

<Equation label="Bayes with partition denominator" tex="P(E_j|B)=\frac{P(B|E_j)P(E_j)}{\sum_{i=1}^n P(B|E_i)P(E_i)}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A disease affects 1 percent of people. A test is positive with probability 0.99 if diseased and 0.05 if not diseased. Find the probability of disease given a positive test.",
      answer: "Let \\(D\\) be disease and \\(T\\) be positive. The denominator includes true positives and false positives: \\[P(D|T)=\\frac{0.99\\cdot0.01}{0.99\\cdot0.01+0.05\\cdot0.99}=\\frac{0.0099}{0.0594}=\\frac{1}{6}.\\]",
    },
    {
      title: "Example 2",
      question: "A detector click can come from source A or source B. Given \\(P(A)=0.4\\), \\(P(B)=0.6\\), \\(P(C|A)=0.8\\), and \\(P(C|B)=0.3\\), find \\(P(A|C)\\).",
      answer: "Use source cases in the denominator: \\[P(A|C)=\\frac{0.8\\cdot0.4}{0.8\\cdot0.4+0.3\\cdot0.6}=\\frac{0.32}{0.50}=0.64.\\]",
    },
    {
      title: "Example 3",
      question: "Two hypotheses have priors \\(P(H_1)=0.7\\), \\(P(H_2)=0.3\\). An observation \\(B\\) has likelihoods \\(P(B|H_1)=0.2\\) and \\(P(B|H_2)=0.9\\). Find \\(P(H_2|B)\\).",
      answer: "The evidence probability is \\(0.2\\cdot0.7+0.9\\cdot0.3=0.41\\). Thus \\[P(H_2|B)=\\frac{0.9\\cdot0.3}{0.41}=\\frac{27}{41}.\\]",
    },
  ]}
/>

## Checks

- The denominator must include all ways the observation can happen.
- A high likelihood does not guarantee a high posterior when the prior is small.
- Posterior probabilities across all partition hypotheses should add to \(1\).
- Bayes theorem reverses conditioning; it does not say \(P(H|B)=P(B|H)\).`;
