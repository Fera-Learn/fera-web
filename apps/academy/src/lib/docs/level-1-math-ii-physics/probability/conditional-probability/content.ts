export const content = String.raw`## Principle

Conditional probability updates the sample space after information is known. The probability \(P(A|B)\) is the probability of \(A\) after restricting attention to outcomes in \(B\), and it is defined only when \(P(B)>0\).

## Notation

<Notation
  items={[
    { symbol: "A,B", meaning: "events in the same sample space" },
    { symbol: "P(A|B)", meaning: "probability of A given that B occurred" },
    { symbol: "P(B)\\gt 0", meaning: "condition required before conditioning on B" },
    { symbol: "A\\cap B", meaning: "event that both A and B occur" },
  ]}
/>

## Method

### Step 1: Identify the given event

The event after the vertical bar is the new reference event. For \(P(A|B)\), restrict attention to \(B\).

### Step 2: Find the overlap

Only outcomes in \(A\cap B\) count as favourable after conditioning on \(B\).

### Step 3: Divide by the probability of the given event

The new total probability is \(P(B)\), so divide the overlap probability by \(P(B)\).

<PhysicsDerivation
  items={[
    { label: "New sample space", tex: "B" },
    { label: "Favourable part inside B", tex: "A\\cap B" },
    { label: "Conditional probability", tex: "P(A|B)=\\frac{P(A\\cap B)}{P(B)}" },
    { label: "Multiply by P(B)", tex: "P(A\\cap B)=P(A|B)P(B)" },
  ]}
/>

## Rules

<Equation label="Conditional probability" tex="P(A|B)=\frac{P(A\cap B)}{P(B)}\quad(P(B)\gt 0)" />

<Equation label="Multiplication rule" tex="P(A\cap B)=P(A|B)P(B)" />

<Equation label="Reverse multiplication" tex="P(A\cap B)=P(B|A)P(A)\quad(P(A)\gt 0)" />

<Equation label="Chain form" tex="P(A\cap B)=P(A)P(B|A)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A fair die is rolled. Given that the result is even, find the probability that it is greater than 3.",
      answer: "Let \\(B=\\{2,4,6\\}\\) and \\(A=\\{4,5,6\\}\\). Then \\(A\\cap B=\\{4,6\\}\\), so \\[P(A|B)=\\frac{P(A\\cap B)}{P(B)}=\\frac{2/6}{3/6}=\\frac{2}{3}.\\]",
    },
    {
      title: "Example 2",
      question: "A source is active with event \\(S_a\\). A detector triggers with event \\(D\\). If \\(P(D\\cap S_a)=0.18\\) and \\(P(S_a)=0.30\\), find \\(P(D|S_a)\\).",
      answer: "Condition on the active source state: \\[P(D|S_a)=\\frac{P(D\\cap S_a)}{P(S_a)}=\\frac{0.18}{0.30}=0.60.\\]",
    },
    {
      title: "Example 3",
      question: "A box has 3 red and 2 blue counters. Two counters are drawn without replacement. Find the probability of red then blue.",
      answer: "Use the multiplication rule for stages: \\[P(R_1\\cap B_2)=P(R_1)P(B_2|R_1)=\\frac{3}{5}\\cdot\\frac{2}{4}=\\frac{3}{10}.\\]",
    },
  ]}
/>

## Checks

- The conditioning event must have nonzero probability.
- \(P(A|B)\) need not equal \(P(B|A)\).
- The event after the vertical bar is the information being assumed.
- Conditional probabilities are still probabilities, so they must lie between \(0\) and \(1\).`;
