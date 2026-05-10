export const content = String.raw`## Principle

A random variable is a numerical function on outcomes. It turns each outcome in the sample space into a number, so probability questions can be asked about values such as a count, a sum, or a detector reading.

For a discrete random variable, the possible values form a finite or countable support, and probabilities are assigned value by value.

## Notation

<Notation
  items={[
    { symbol: "S", meaning: "sample space of possible outcomes" },
    { symbol: "s", meaning: "one outcome in S" },
    { symbol: "X:S\\to\\mathbb{R}", meaning: "random variable that assigns a number X(s) to each outcome s" },
    { symbol: "x", meaning: "a possible numerical value of X" },
    { symbol: "\\{X=x\\}", meaning: "event consisting of all outcomes s with X(s)=x" },
    { symbol: "D_X", meaning: "discrete support: the possible values of X" },
    { symbol: "p_X(x)=P(X=x)", meaning: "probability mass function, or PMF" },
    { symbol: "p_{X,Y}(x,y)=P(X=x,Y=y)", meaning: "joint distribution of X and Y" },
    { symbol: "p_X(x)=\\sum_y p_{X,Y}(x,y)", meaning: "marginal distribution of X from a joint table" },
  ]}
/>

## Method

### Step 1: Define the outcome rule

Start with outcomes \(s\in S\), then write the numerical rule \(X(s)\). The event \(X=x\) is not one outcome; it is the set of outcomes that produce the value \(x\).

<PhysicsDerivation
  items={[
    { label: "Value event", tex: "\\{X=x\\}=\\{s\\in S:X(s)=x\\}" },
    { label: "PMF value", tex: "p_X(x)=P(X=x)" },
    { label: "Total probability", tex: "\\sum_{x\\in D_X}p_X(x)=1" },
  ]}
/>

### Step 2: Build or read a probability table

A probability table lists each supported value and its probability. For two discrete random variables, a joint table lists probabilities for ordered pairs \((x,y)\).

<PhysicsDerivation
  items={[
    { label: "Joint table entries", tex: "p_{X,Y}(x,y)=P(X=x,Y=y)" },
    { label: "Marginal over Y", tex: "p_X(x)=\\sum_{y\\in D_Y}p_{X,Y}(x,y)" },
    { label: "Marginal over X", tex: "p_Y(y)=\\sum_{x\\in D_X}p_{X,Y}(x,y)" },
  ]}
/>

### Step 3: Add probabilities for requested values

For an interval, sum the PMF over the supported values inside the interval.

<PhysicsDerivation
  items={[
    { label: "Interval event", tex: "\\{a\\le X\\le b\\}=\\bigcup_{x\\in D_X,\\ a\\le x\\le b}\\{X=x\\}" },
    { label: "Disjoint value events", tex: "P(a\\le X\\le b)=\\sum_{x\\in D_X,\\ a\\le x\\le b}p_X(x)" },
  ]}
/>

## Rules

<Equation label="PMF" tex="p_X(x)=P(X=x)" />

<Equation label="Discrete total" tex="\sum_{x\in D_X}p_X(x)=1" />

<Equation label="Interval probability" tex="P(a\le X\le b)=\sum_{x\in D_X,\ a\le x\le b}p_X(x)" />

<Equation label="Marginal distribution" tex="p_X(x)=\sum_{y\in D_Y}p_{X,Y}(x,y)" />

<Equation label="Discrete independence" tex="p_{X,Y}(x,y)=p_X(x)p_Y(y)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two fair coins are tossed. Let \\(X\\) be the number of heads. Find the PMF.",
      answer: "The outcomes are \\(HH,HT,TH,TT\\). The values are \\(X=2,1,1,0\\), so \\[p_X(0)=\\frac14,\\quad p_X(1)=\\frac12,\\quad p_X(2)=\\frac14.\\]",
    },
    {
      title: "Example 2",
      question: "Two fair dice are rolled. Let \\(X\\) be the sum and \\(Y\\) be the maximum. What is \\(P(X=7,Y=5)\\), and what does a marginal do?",
      answer: "The event \\(X=7,Y=5\\) contains outcomes \\((2,5),(5,2)\\), so \\(p_{X,Y}(7,5)=2/36=1/18\\). A marginal such as \\(p_X(7)\\) adds all joint probabilities in the row \\(X=7\\): \\(p_X(7)=\\sum_y p_{X,Y}(7,y)\\).",
    },
    {
      title: "Example 3",
      question: "A detector records clicks in three short trials with probability table \\(P(X=0)=0.50\\), \\(P(X=1)=0.35\\), \\(P(X=2)=0.12\\), \\(P(X=3)=0.03\\). Find \\(P(1\\le X\\le2)\\).",
      answer: "Add the supported values in the interval: \\[P(1\\le X\\le2)=P(X=1)+P(X=2)=0.35+0.12=0.47.\\]",
    },
  ]}
/>

## Checks

- \(X=x\) is an event: it collects all outcomes that give the value \(x\).
- \(X\) is not the outcome itself; it is a function from outcomes to numbers.
- Every probability in a table must be non-negative.
- The probabilities in a complete table must sum to \(1\).
- Independence of discrete random variables must hold for every supported pair \((x,y)\), not just one pair.`;
