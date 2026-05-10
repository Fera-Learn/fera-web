export const content = String.raw`## Principle

The probability axioms give the minimum rules that any finite probability model must satisfy. From them, common formulas such as complements and inclusion-exclusion follow rather than being separate assumptions.

## Notation

<Notation
  items={[
    { symbol: "S", meaning: "sample space" },
    { symbol: "A,B", meaning: "events, each a subset of S" },
    { symbol: "A^c", meaning: "complement of A inside S" },
    { symbol: "\\varnothing", meaning: "empty event" },
    { symbol: "A\\cup B", meaning: "event that A or B occurs" },
    { symbol: "A\\cap B", meaning: "event that both A and B occur" },
    { symbol: "P(A)", meaning: "probability of event A" },
  ]}
/>

## Method

### Derive the complement rule

<PhysicsDerivation
  items={[
    { label: "Split the sample space", tex: "S=A\\cup A^c" },
    { label: "The pieces are disjoint", tex: "A\\cap A^c=\\varnothing" },
    { label: "Use disjoint additivity", tex: "P(S)=P(A)+P(A^c)" },
    { label: "Use certainty", tex: "1=P(A)+P(A^c)" },
    { label: "Subtract P(A)", tex: "P(A^c)=1-P(A)" },
  ]}
/>

### Derive the empty event rule

<PhysicsDerivation
  items={[
    { label: "Add the empty event", tex: "S=S\\cup\\varnothing" },
    { label: "The pieces are disjoint", tex: "S\\cap\\varnothing=\\varnothing" },
    { label: "Use disjoint additivity", tex: "P(S)=P(S)+P(\\varnothing)" },
    { label: "Subtract P(S)", tex: "P(\\varnothing)=0" },
  ]}
/>

### Derive inclusion-exclusion

<PhysicsDerivation
  items={[
    { label: "Split the union into disjoint parts", tex: "A\\cup B=(A\\setminus B)\\cup(A\\cap B)\\cup(B\\setminus A)" },
    { label: "Add disjoint parts", tex: "P(A\\cup B)=P(A\\setminus B)+P(A\\cap B)+P(B\\setminus A)" },
    { label: "Write P(A)", tex: "P(A)=P(A\\setminus B)+P(A\\cap B)" },
    { label: "Write P(B)", tex: "P(B)=P(B\\setminus A)+P(A\\cap B)" },
    { label: "Add P(A) and P(B)", tex: "P(A)+P(B)=P(A\\setminus B)+P(B\\setminus A)+2P(A\\cap B)" },
    { label: "Remove one overlap", tex: "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)" },
  ]}
/>

## Rules

<Equation label="Non-negativity and upper bound" tex="0\le P(A)\le 1" />

<Equation label="Certainty" tex="P(S)=1" />

<Equation label="Disjoint additivity" tex="A\cap B=\varnothing\quad\Rightarrow\quad P(A\cup B)=P(A)+P(B)" />

<Equation label="Complement" tex="P(A^c)=1-P(A)" />

<Equation label="Empty event" tex="P(\varnothing)=0" />

<Equation label="Inclusion-exclusion" tex="P(A\cup B)=P(A)+P(B)-P(A\cap B)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "If \\(P(A)=0.73\\), find \\(P(A^c)\\).",
      answer: "Use the complement rule: \\[P(A^c)=1-P(A)=1-0.73=0.27.\\]",
    },
    {
      title: "Example 2",
      question: "Two detector events have \\(P(D_1)=0.45\\), \\(P(D_2)=0.30\\), and \\(P(D_1\\cap D_2)=0.12\\). Find the probability that at least one clicks.",
      answer: "At least one click is \\(D_1\\cup D_2\\). Since the events overlap, subtract the overlap once: \\[P(D_1\\cup D_2)=0.45+0.30-0.12=0.63.\\]",
    },
    {
      title: "Example 3",
      question: "If \\(A\\subseteq B\\), compare \\(P(A)\\) and \\(P(B)\\).",
      answer: "Write \\(B=A\\cup(B\\setminus A)\\), with disjoint pieces. Then \\(P(B)=P(A)+P(B\\setminus A)\\ge P(A)\\).",
    },
  ]}
/>

## Checks

- Add probabilities directly only for disjoint events.
- For overlapping events, subtract the intersection once.
- The empty event has probability \(0\), but an event with probability \(0\) need not be impossible in every advanced model.
- If \(A\subseteq B\), then \(P(A)\le P(B)\).`;
