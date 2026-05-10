export const content = String.raw`## Principle

Variance is the expected squared deviation from the mean. Standard deviation is the square root of variance, so it returns the spread to the original unit of the random variable.

## Notation

<Notation
  items={[
    { symbol: "X", meaning: "random variable" },
    { symbol: "\\mu=E[X]", meaning: "mean of X" },
    { symbol: "\\operatorname{Var}(X)", meaning: "variance of X" },
    { symbol: "\\sigma_X", meaning: "standard deviation of X" },
    { symbol: "a,b", meaning: "constants in an affine transformation aX+b" },
  ]}
/>

## Method

### Step 1: Find the mean

Compute \(\mu=E[X]\). Deviations are measured from this centre.

### Step 2: Average squared deviations

Square each deviation before averaging, so positive and negative deviations both contribute to spread.

<PhysicsDerivation
  items={[
    { label: "Definition", tex: "\\operatorname{Var}(X)=E[(X-\\mu)^2]" },
    { label: "Expand the square", tex: "(X-\\mu)^2=X^2-2\\mu X+\\mu^2" },
    { label: "Take expectation", tex: "E[(X-\\mu)^2]=E[X^2-2\\mu X+\\mu^2]" },
    { label: "Use linearity", tex: "E[(X-\\mu)^2]=E[X^2]-2\\mu E[X]+\\mu^2" },
    { label: "Substitute E[X]=mu", tex: "E[(X-\\mu)^2]=E[X^2]-2\\mu^2+\\mu^2" },
    { label: "Simplify", tex: "\\operatorname{Var}(X)=E[X^2]-\\mu^2=E[X^2]-E[X]^2" },
  ]}
/>

### Step 3: Take the square root for standard deviation

Variance is in squared units. Standard deviation is easier to interpret physically because it has the original unit.

## Rules

<Equation label="Variance definition" tex="\operatorname{Var}(X)=E[(X-\mu)^2]" />

<Equation label="Computational formula" tex="\operatorname{Var}(X)=E[X^2]-E[X]^2" />

<Equation label="Standard deviation" tex="\sigma_X=\sqrt{\operatorname{Var}(X)}" />

<Equation label="Affine rule" tex="\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)" />

<Equation label="Independent sum" tex="X,Y\ \text{independent}\quad\Rightarrow\quad \operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A random variable has \\(P(X=0)=0.2\\), \\(P(X=1)=0.5\\), and \\(P(X=2)=0.3\\). Find its variance.",
      answer: "First \\(E[X]=0(0.2)+1(0.5)+2(0.3)=1.1\\). Then \\(E[X^2]=0^2(0.2)+1^2(0.5)+2^2(0.3)=1.7\\). Hence \\[\\operatorname{Var}(X)=1.7-(1.1)^2=0.49.\\]",
    },
    {
      title: "Example 2",
      question: "A sensor error has variance \\(0.0004\\text{ m}^2\\). Find the standard deviation.",
      answer: "Take the square root: \\[\\sigma=\\sqrt{0.0004\\text{ m}^2}=0.02\\text{ m}.\\]",
    },
    {
      title: "Example 3",
      question: "Two independent noise sources have variances \\(4\\text{ mV}^2\\) and \\(9\\text{ mV}^2\\). Find the variance and standard deviation of their sum.",
      answer: "Independent variances add: \\[\\operatorname{Var}(X+Y)=4+9=13\\text{ mV}^2,\\quad \\sigma=\\sqrt{13}\\text{ mV}.\\]",
    },
  ]}
/>

## Checks

- Variance units are squared units.
- Standard deviation has the original unit of the random variable.
- Adding a constant does not change variance: \(\operatorname{Var}(X+b)=\operatorname{Var}(X)\).
- Multiplying by \(a\) multiplies standard deviation by \(|a|\) and variance by \(a^2\).
- Variances add directly only when the variables are independent in this rule.`;
