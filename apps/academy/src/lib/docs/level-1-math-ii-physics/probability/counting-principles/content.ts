export const content = String.raw`## Principle

Counting principles find how many outcomes an event contains before probabilities are assigned. The main decision is whether order matters and whether repeated choices are allowed.

## Notation

<Notation
  items={[
    { symbol: "n!", meaning: "factorial: n(n-1)(n-2)...1 for a non-negative integer n, with 0!=1" },
    { symbol: "{}^nP_r", meaning: "permutations: ordered selections of r objects from n" },
    { symbol: "\\binom{n}{r}", meaning: "combinations: unordered selections of r objects from n" },
    { symbol: "\\binom{n}{n_1,n_2,\\ldots,n_k}", meaning: "multinomial coefficient for groups of sizes n_1 through n_k" },
    { symbol: "n_1+\\cdots+n_k=n", meaning: "the group sizes add to the total number of objects" },
  ]}
/>

## Method

### Step 1: Decide whether choices are sequential

If a process has stages, multiply the number of options at each stage.

### Step 2: Decide whether order matters

Role assignments, codes, and routes usually have order. Committees and hands of cards are usually unordered.

### Step 3: Decide whether repeats are allowed

Rolling dice allows repeated values. Arranging distinct objects without replacement does not.

### Step 4: Choose the formula

Use permutations for ordered selections without replacement, combinations for unordered selections, and multinomial coefficients for arranging repeated groups.

<PhysicsDerivation
  items={[
    { label: "Ordered without replacement", tex: "n(n-1)\\cdots(n-r+1)=\\frac{n!}{(n-r)!}" },
    { label: "Remove ordering from r selected objects", tex: "\\binom{n}{r}=\\frac{{}^nP_r}{r!}=\\frac{n!}{r!(n-r)!}" },
    { label: "Repeated groups", tex: "\\binom{n}{n_1,n_2,\\ldots,n_k}=\\frac{n!}{n_1!n_2!\\cdots n_k!}" },
  ]}
/>

## Rules

<Equation label="Multiplication principle" tex="N=N_1N_2\cdots N_k" />

<Equation label="Permutation" tex="{}^nP_r=\frac{n!}{(n-r)!}" />

<Equation label="Combination" tex="\binom{n}{r}=\frac{n!}{r!(n-r)!}" />

<Equation label="Multinomial" tex="\binom{n}{n_1,n_2,\ldots,n_k}=\frac{n!}{n_1!n_2!\cdots n_k!}" />

The multinomial denominator contains one factorial for each group size.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A signal can travel through 3 first-stage routes and then 4 second-stage routes. How many two-stage routes are possible?",
      answer: "Use the multiplication principle: \\[3\\cdot4=12.\\]",
    },
    {
      title: "Example 2",
      question: "Six dice are rolled. How many ordered outcomes show each value 1 through 6 exactly once?",
      answer: "The six values can be arranged in \\(6!\\) orders, so the count is \\[6!=720.\\]",
    },
    {
      title: "Example 3",
      question: "Choose a committee of 3 students from 10. How many committees are possible?",
      answer: "A committee is unordered, so use combinations: \\[\\binom{10}{3}=\\frac{10!}{3!7!}=120.\\]",
    },
    {
      title: "Example 4",
      question: "How many different arrangements are there of the letters in LEVEL?",
      answer: "There are 5 letters, with two Ls and two Es. Divide by the factorials for repeated groups: \\[\\frac{5!}{2!2!1!}=30.\\]",
    },
  ]}
/>

## Checks

- Cards dealt into a hand are unordered unless positions or roles are specified.
- Role assignments are ordered because president then secretary differs from secretary then president.
- Factorial arguments must be non-negative integers.
- Do not divide by \(r!\) when the order of the selected objects matters.`;
