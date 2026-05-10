export const content = String.raw`## Principle

Probability assigns numbers from \(0\) to \(1\) to uncertain events. A probability of \(0\) means impossible in the model, a probability of \(1\) means certain in the model, and values between them measure how plausible the event is.

In physics, probability often describes repeated measurements: detector clicks, thermal fluctuations, radioactive decays, or noisy readings.

## Notation

<Notation
  items={[
    { symbol: "S", meaning: "sample space: the set of all possible outcomes of an experiment" },
    { symbol: "s", meaning: "one outcome, so s is an element of S" },
    { symbol: "A", meaning: "an event: a subset of S" },
    { symbol: "P(A)", meaning: "probability that event A occurs" },
    { symbol: "1", meaning: "probability unit: certainty, not a physical unit" },
  ]}
/>

## Method

### Step 1: Choose the experiment

State exactly what is being repeated or observed. The experiment could be rolling a die once or running a detector for a fixed time interval.

### Step 2: List the outcomes

Write the sample space \(S\). Each outcome should be a single possible result of the experiment.

### Step 3: Choose the event

Write the event as a set of outcomes. For example, an event might be all even die scores or all trials with at least one detector click.

### Step 4: Assign probabilities

Use symmetry, a model, or long-run data to assign probabilities. Check that the assigned probabilities add to \(1\) across the whole sample space.

<PhysicsDerivation
  items={[
    { label: "Equally likely finite model", tex: "S=\\{s_1,s_2,\\ldots,s_m\\}" },
    { label: "Single outcome", tex: "P(\\{s_i\\})=\\frac{1}{m}" },
    { label: "Event with k outcomes", tex: "P(A)=\\frac{k}{m}" },
  ]}
/>

## Rules

<Equation label="Probability range" tex="0\le P(A)\le 1" />

<Equation label="Certain event" tex="P(S)=1" />

<Equation label="Equally likely outcome" tex="P(\{s\})=\frac{1}{m}" />

<Equation label="Equally likely event" tex="P(A)=\frac{\text{number of outcomes in }A}{\text{number of outcomes in }S}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A fair die is rolled once. Find the probability of rolling an even number.",
      answer: "The sample space is \\(S=\\{1,2,3,4,5,6\\}\\). The event is \\(A=\\{2,4,6\\}\\). Since the six outcomes are equally likely, \\[P(A)=\\frac{3}{6}=\\frac{1}{2}.\\]",
    },
    {
      title: "Example 2",
      question: "A detector is tested in 100 identical trials. At least one click is observed in 37 trials. Estimate the probability of at least one click.",
      answer: "Let \\(A\\) be the event that at least one detector click occurs during a trial. The long-run frequency estimate is \\[P(A)\\approx\\frac{37}{100}=0.37.\\]",
    },
    {
      title: "Example 3",
      question: "What does \\(P(A)=0.2\\) mean in repeated measurements?",
      answer: "It means that in many trials run under the same conditions, the event \\(A\\) is expected to occur in about 20 percent of trials. The probability is not the count; the count depends on how many trials are run.",
    },
  ]}
/>

## Checks

- Probability is dimensionless; it has probability unit \(1\), not metres, seconds, or joules.
- An event is a set of outcomes, not a single number unless the sample space itself contains numbers.
- Probabilities are not counts. A count such as \(37\) can produce an estimate like \(0.37\) only after division by the number of trials.
- Every probability must lie between \(0\) and \(1\).`;
