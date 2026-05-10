export const content = String.raw`## Principle

Expectation is a probability-weighted average. It describes the long-run centre of a random quantity, not necessarily a value that can occur in one trial.

## Notation

<Notation
  items={[
    { symbol: "X,Y", meaning: "random variables" },
    { symbol: "E[X]", meaning: "expectation, or mean, of X" },
    { symbol: "p_X(x)", meaning: "PMF of a discrete random variable" },
    { symbol: "f_X(x)", meaning: "PDF of a continuous random variable" },
    { symbol: "g(X)", meaning: "a function of the random variable X" },
    { symbol: "a,b", meaning: "constants" },
  ]}
/>

## Method

### Step 1: Multiply each value by its probability or density weight

For a discrete variable, add value times probability. For a continuous variable, integrate value times density.

<PhysicsDerivation
  items={[
    { label: "Discrete expectation", tex: "E[X]=\\sum_{x\\in D_X}x\\,p_X(x)" },
    { label: "Continuous expectation", tex: "E[X]=\\int_{-\\infty}^{\\infty}x f_X(x)\\,dx" },
  ]}
/>

### Step 2: Average functions by applying the function first

If the quantity of interest is \(g(X)\), weight \(g(x)\), not \(x\).

<PhysicsDerivation
  items={[
    { label: "Discrete function", tex: "E[g(X)]=\\sum_{x\\in D_X}g(x)p_X(x)" },
    { label: "Continuous function", tex: "E[g(X)]=\\int_{-\\infty}^{\\infty}g(x)f_X(x)\\,dx" },
  ]}
/>

### Step 3: Use expectation rules to simplify

Linearity lets constants pass through expectation and lets sums be averaged term by term.

## Rules

<Equation label="Discrete mean" tex="E[X]=\sum_{x\in D_X}x p_X(x)" />

<Equation label="Continuous mean" tex="E[X]=\int_{-\infty}^{\infty}x f_X(x)\,dx" />

<Equation label="Function of a variable" tex="E[g(X)]=\sum_{x\in D_X}g(x)p_X(x)" />

<Equation label="Linearity" tex="E[aX+b]=aE[X]+b" />

<Equation label="Additivity" tex="E[X+Y]=E[X]+E[Y]" />

<Equation label="Positivity" tex="X\ge0\quad\Rightarrow\quad E[X]\ge0" />

<Equation label="Independent product" tex="X,Y\ \text{independent}\quad\Rightarrow\quad E[XY]=E[X]E[Y]" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the expected score on a fair die.",
      answer: "Each value has probability \\(1/6\\): \\[E[X]=1\\cdot\\frac16+2\\cdot\\frac16+3\\cdot\\frac16+4\\cdot\\frac16+5\\cdot\\frac16+6\\cdot\\frac16=\\frac{21}{6}=3.5.\\]",
    },
    {
      title: "Example 2",
      question: "A detector count has \\(P(X=0)=0.50\\), \\(P(X=1)=0.35\\), \\(P(X=2)=0.12\\), \\(P(X=3)=0.03\\). Find \\(E[X]\\).",
      answer: "Weight each count by its probability: \\[E[X]=0(0.50)+1(0.35)+2(0.12)+3(0.03)=0.68.\\] The expected count need not be an integer count seen in one trial.",
    },
    {
      title: "Example 3",
      question: "A measured length is \\(M=L+E\\), where \\(L=2.00\\) m and the measurement error has \\(E[E]=0.01\\) m. Find \\(E[M]\\).",
      answer: "Use additivity and constants: \\[E[M]=E[L+E]=E[L]+E[E]=2.00+0.01=2.01\\text{ m}.\\]",
    },
  ]}
/>

## Checks

- Expectation has the same unit as the random variable.
- An expected value need not be a possible observed value.
- Probabilities or densities must define a valid distribution before computing expectation.
- Additivity does not require independence.
- The product rule \(E[XY]=E[X]E[Y]\) does require independence in this course setting.`;
