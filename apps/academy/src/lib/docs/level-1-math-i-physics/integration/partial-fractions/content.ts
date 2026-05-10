export const content = String.raw`## Partial Fraction Decomposition

**Partial fractions** decompose rational functions into simpler fractions that are easier to integrate.

### When to Use

For proper rational functions $\frac{P(x)}{Q(x)}$ where $\deg(P) < \deg(Q)$. If $\deg(P) \geq \deg(Q)$, first perform polynomial division.

### Types of Decompositions

#### 1. Linear Factors (Distinct)

For $\frac{P(x)}{(x-a)(x-b)(x-c)}$:

<Equation label="Linear Distinct" tex="\frac{P(x)}{(x-a)(x-b)(x-c)} = \frac{A}{x-a} + \frac{B}{x-b} + \frac{C}{x-c}" />

#### 2. Linear Factors (Repeated)

For $\frac{P(x)}{(x-a)^2(x-b)}$:

<Equation label="Linear Repeated" tex="\frac{P(x)}{(x-a)^2(x-b)} = \frac{A}{x-a} + \frac{B}{(x-a)^2} + \frac{C}{x-b}" />

#### 3. Quadratic Factors (Irreducible)

For $\frac{P(x)}{(x^2+ax+b)(x-c)}$:

<Equation label="Quadratic" tex="\frac{P(x)}{(x^2+ax+b)(x-c)} = \frac{Ax+B}{x^2+ax+b} + \frac{C}{x-c}" />

### Finding Coefficients

Multiply both sides by the denominator and equate coefficients, or use the cover-up method for linear factors.

### Example

Decompose $\frac{3x+5}{(x-1)(x+2)}$:

<Equation label="Setup" tex="\frac{3x+5}{(x-1)(x+2)} = \frac{A}{x-1} + \frac{B}{x+2}" />

Multiply: $3x+5 = A(x+2) + B(x-1)$

<Equation label="Coefficients" tex="3x+5 = (A+B)x + (2A-B)" />

Equate: $A+B=3$ and $2A-B=5$

Solving: $A=2$, $B=1$

<Equation label="Result" tex="\frac{3x+5}{(x-1)(x+2)} = \frac{2}{x-1} + \frac{1}{x+2}" />

### Integration of Partial Fractions

After decomposition:

<Equation label="Integration" tex="\int \frac{2}{x-1} \, dx + \int \frac{1}{x+2} \, dx = 2\ln|x-1| + \ln|x+2| + C" />
`
