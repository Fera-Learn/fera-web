export const content = String.raw`## Principle

Independent events are events where knowing one occurred does not change the probability of the other. Independence is a probability statement, not just a statement that events sound unrelated.

## Notation

<Notation
  items={[
    { symbol: "A,B", meaning: "events in the same probability model" },
    { symbol: "P(A|B)", meaning: "probability of A given B, defined when P(B)\\gt 0" },
    { symbol: "P(A\\cap B)", meaning: "probability that both A and B occur" },
    { symbol: "P(A)P(B)", meaning: "product of the separate probabilities" },
    { symbol: "\\varnothing", meaning: "empty event" },
  ]}
/>

## Method

### Step 1: Compute the separate probabilities

Find \(P(A)\) and \(P(B)\).

### Step 2: Compute the joint probability

Find \(P(A\cap B)\), the probability that both events occur.

### Step 3: Compare with the product

If \(P(A\cap B)=P(A)P(B)\), the events are independent. If not, they are dependent.

<PhysicsDerivation
  items={[
    { label: "Conditional definition", tex: "P(A|B)=P(A)" },
    { label: "Use conditional probability", tex: "\\frac{P(A\\cap B)}{P(B)}=P(A)" },
    { label: "Multiply by P(B)", tex: "P(A\\cap B)=P(A)P(B)" },
  ]}
/>

Disjoint and independent are different ideas. If nonzero-probability events are disjoint, then one occurring makes the other impossible, so they are not independent.

## Rules

<Equation label="Conditional independence" tex="P(A|B)=P(A)\quad(P(B)\gt 0)" />

<Equation label="Product rule for independent events" tex="P(A\cap B)=P(A)P(B)" />

<Equation label="Symmetric conditional form" tex="P(B|A)=P(B)\quad(P(A)\gt 0)" />

<Equation label="Disjoint nonzero events are dependent" tex="A\cap B=\varnothing,\ P(A)\gt 0,\ P(B)\gt 0\quad\Rightarrow\quad P(A\cap B)\ne P(A)P(B)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two fair dice are rolled. Let \\(A\\) be first die is 6 and \\(B\\) be second die is 6. Are \\(A\\) and \\(B\\) independent?",
      answer: "Here \\(P(A)=1/6\\), \\(P(B)=1/6\\), and \\(P(A\\cap B)=1/36\\). Since \\(P(A)P(B)=1/36\\), the events are independent.",
    },
    {
      title: "Example 2",
      question: "A card is drawn from a deck, replaced, then another card is drawn. Compare this with no replacement for drawing two aces.",
      answer: "With replacement, \\(P(A_2|A_1)=4/52=P(A_2)\\), so the draws are independent. Without replacement, \\(P(A_2|A_1)=3/51\\), which differs from \\(4/52\\), so they are dependent.",
    },
    {
      title: "Example 3",
      question: "Two separate sensors have independent electronic noise. If sensor 1 exceeds its noise threshold with probability 0.02 and sensor 2 with probability 0.03, find the probability both exceed threshold.",
      answer: "Independent noise sources use the product rule: \\[0.02\\cdot0.03=0.0006.\\]",
    },
  ]}
/>

## Checks

- Test independence with probabilities; do not infer it from separate-looking event names.
- Disjoint events with positive probabilities are not independent.
- Independent events can occur together; their intersection usually has positive probability.
- If \(P(B)>0\), checking \(P(A|B)=P(A)\) is equivalent to checking \(P(A\cap B)=P(A)P(B)\).`;
