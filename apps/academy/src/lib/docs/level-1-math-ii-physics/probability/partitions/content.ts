export const content = String.raw`## Principle

A partition breaks the sample space into exhaustive, non-overlapping cases. Total probability computes an event by adding its probability across those cases.

## Notation

<Notation
  items={[
    { symbol: "S", meaning: "sample space" },
    { symbol: "E_1,E_2,\\ldots,E_n", meaning: "partition events" },
    { symbol: "E_i\\cap E_j=\\varnothing", meaning: "different partition cases do not overlap" },
    { symbol: "E_1\\cup\\cdots\\cup E_n=S", meaning: "the cases are exhaustive" },
    { symbol: "A", meaning: "event whose probability is being computed" },
    { symbol: "P(A|E_i)", meaning: "probability of A within case E_i" },
  ]}
/>

## Method

### Step 1: Check the cases form a partition

Every outcome must be in exactly one case \(E_i\). This means the cases are exhaustive and non-overlapping.

### Step 2: Split the event by cases

Intersect \(A\) with each partition case.

<PhysicsDerivation
  items={[
    { label: "Start with exhaustive cases", tex: "S=E_1\\cup E_2\\cup\\cdots\\cup E_n" },
    { label: "Intersect with A", tex: "A=A\\cap S" },
    { label: "Substitute the partition", tex: "A=A\\cap(E_1\\cup E_2\\cup\\cdots\\cup E_n)" },
    { label: "Distribute intersection", tex: "A=(A\\cap E_1)\\cup(A\\cap E_2)\\cup\\cdots\\cup(A\\cap E_n)" },
    { label: "Use disjoint additivity", tex: "P(A)=P(A\\cap E_1)+P(A\\cap E_2)+\\cdots+P(A\\cap E_n)" },
    { label: "Use multiplication rule", tex: "P(A)=P(A|E_1)P(E_1)+\\cdots+P(A|E_n)P(E_n)" },
  ]}
/>

## Rules

<Equation label="Partition conditions" tex="E_i\cap E_j=\varnothing\ (i\ne j),\qquad E_1\cup\cdots\cup E_n=S" />

<Equation label="Total probability" tex="P(A)=\sum_{i=1}^n P(A\cap E_i)" />

<Equation label="Conditional total probability" tex="P(A)=\sum_{i=1}^n P(A|E_i)P(E_i)" />

<Equation label="Two-case form" tex="P(A)=P(A|E)P(E)+P(A|E^c)P(E^c)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A disease affects 2 percent of a population. A test is positive with probability 0.95 for diseased people and 0.04 for non-diseased people. Find the probability of a positive test.",
      answer: "Use the partition diseased and not diseased: \\[P(T)=0.95\\cdot0.02+0.04\\cdot0.98=0.019+0.0392=0.0582.\\]",
    },
    {
      title: "Example 2",
      question: "A particle source is type A with probability 0.3 and type B with probability 0.7. A click occurs with probabilities 0.8 and 0.2 for the two types. Find the click probability.",
      answer: "The source type cases form a partition: \\[P(C)=P(C|A)P(A)+P(C|B)P(B)=0.8\\cdot0.3+0.2\\cdot0.7=0.38.\\]",
    },
    {
      title: "Example 3",
      question: "A detector sees low, medium, and high energy particles with probabilities 0.5, 0.3, and 0.2. Detection efficiencies are 0.1, 0.4, and 0.9. Find the overall detection probability.",
      answer: "Weight each efficiency by its case probability: \\[P(D)=0.1\\cdot0.5+0.4\\cdot0.3+0.9\\cdot0.2=0.35.\\]",
    },
  ]}
/>

## Checks

- Partition cases must be exhaustive: together they cover all of \(S\).
- Partition cases must be non-overlapping: no outcome belongs to two different cases.
- Each conditional probability \(P(A|E_i)\) requires \(P(E_i)>0\).
- Total probability is a weighted sum of case probabilities.`;
