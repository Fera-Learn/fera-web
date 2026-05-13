export const content = String.raw`## Principle

The coefficients of a power series determine the size and sign of each power. They control both the function represented by the series and how quickly the terms shrink.

<Equation label="Power series coefficients" tex="f(x)=a_0+a_1(x-c)+a_2(x-c)^2+\cdots" />

When a function has a Taylor series about \(c\), its coefficients come from derivatives at the centre. The constant term gives the value at the centre, and higher coefficients measure local rates of change.

## Notation

<Notation
  items={[
    { symbol: "a_n", meaning: "coefficient of (x-c)^n" },
    { symbol: "f^{(n)}(c)", meaning: "nth derivative of f evaluated at c" },
    { symbol: "n!", meaning: "factorial n(n-1)\\cdots2\\cdot1, with 0!=1" },
    { symbol: "a_0", meaning: "constant term, usually the value at the centre" },
    { symbol: "a_1", meaning: "linear coefficient, usually the first derivative at the centre" },
  ]}
/>

Coefficients can be read directly from a series that is already written in powers of \((x-c)\). If the powers are not in that form, rewrite first.

## Method

### Step 1: Match powers with the same centre

Put the expression in ascending powers of \((x-c)\):

<Equation label="Coefficient matching form" tex="a_0+a_1(x-c)+a_2(x-c)^2+\cdots" />

Then compare the coefficient beside each power.

### Step 2: Use derivative data for Taylor coefficients

If the series is a Taylor series for \(f\) about \(c\), use

<Equation label="Taylor coefficient" tex="a_n=\frac{f^{(n)}(c)}{n!}" />

The first few cases show the pattern:

<PhysicsDerivation
  items={[
    { label: "Value term", tex: "a_0=f(c)" },
    { label: "Slope term", tex: "a_1=f'(c)" },
    { label: "Quadratic term", tex: "a_2=\\frac{f''(c)}{2!}" },
    { label: "Cubic term", tex: "a_3=\\frac{f'''(c)}{3!}" },
  ]}
/>

### Step 3: Check whether the coefficients shrink fast enough

Large coefficients can make terms fail to shrink. Convergence tests compare \(a_{n+1}(x-c)^{n+1}\) with \(a_n(x-c)^n\) to see whether the terms become small.

## Rules

<Equation label="Taylor coefficient formula" tex="a_n=\frac{f^{(n)}(c)}{n!}" />

<Equation label="Coefficient extraction" tex="a_n=\text{coefficient of }(x-c)^n" />

<Equation label="Constant term" tex="a_0=f(c)" />

<Equation label="Linear term" tex="a_1=f'(c)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find \\(a_0,a_1,a_2\\) in \\(4+7(x-2)-3(x-2)^2\\).",
      answer: "The powers are already centred at \\(c=2\\). Match coefficients: \\(a_0=4\\), \\(a_1=7\\), and \\(a_2=-3\\).",
    },
    {
      title: "Example 2",
      question: "If \\(f(0)=5\\), \\(f'(0)=-1\\), and \\(f''(0)=8\\), find the quadratic Taylor coefficients about \\(0\\).",
      answer: "Use \\(a_0=f(0)=5\\), \\(a_1=f'(0)=-1\\), and \\(a_2=f''(0)/2!=8/2=4\\). The quadratic approximation is \\(5-x+4x^2\\).",
    },
    {
      title: "Example 3",
      question: "In a potential-energy approximation \\(U(x)=U_0+kx^2/2+\\cdots\\), what does the missing linear term suggest?",
      answer: "The coefficient of \\(x\\) is zero, so the first derivative at the expansion point is zero. In mechanics this is the local condition for an equilibrium point.",
    },
  ]}
/>

## Checks

- Coefficients must be matched using the same centre.
- The coefficient of \((x-c)^2\) is not automatically the second derivative; it is the second derivative divided by \(2!\).
- A zero coefficient means that power is absent.
- Coefficients can be physical constants when the series models measured behaviour.`;
