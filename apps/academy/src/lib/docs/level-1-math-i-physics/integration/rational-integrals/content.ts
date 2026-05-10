export const content = String.raw`## Integrating Rational Functions

A **rational function** is a ratio of two polynomials $\frac{P(x)}{Q(x)}$. The integration approach depends on whether it's proper or improper.

### Proper vs Improper Fractions

- **Proper fraction**: $\deg(P) < \deg(Q)$
- **Improper fraction**: $\deg(P) \geq \deg(Q)$

### Step 1: Polynomial Division

If improper, divide first:

<Equation label="Division" tex="\frac{P(x)}{Q(x)} = S(x) + \frac{R(x)}{Q(x)}" />

where $\deg(R) < \deg(Q)$

### Step 2: Factor the Denominator

Factor $Q(x)$ into linear and/or irreducible quadratic factors.

### Step 3: Partial Fraction Decomposition

Set up and solve for partial fractions:

<Equation label="Linear" tex="\frac{ax+b}{(x-c)(x-d)} = \frac{A}{x-c} + \frac{B}{x-d}" />

<Equation label="Repeated" tex="\frac{ax+b}{(x-c)^2} = \frac{A}{x-c} + \frac{B}{(x-c)^2}" />

<Equation label="Quadratic" tex="\frac{ax+b}{x^2+k} = \frac{Ax+B}{x^2+k}" />

### Integration Cases

| Case | Integral Form | Result |
|------|---------------|--------|
| Linear distinct | $\int \frac{dx}{x-a}$ | $\ln|x-a|$ |
| Linear repeated | $\int \frac{dx}{(x-a)^n}$ | $-\frac{1}{n-1}(x-a)^{1-n}$ |
| Quadratic | $\int \frac{dx}{x^2+a^2}$ | $\frac{1}{a}\arctan\frac{x}{a}$ |
| Linear/Quadratic | $\int \frac{x \, dx}{x^2+a^2}$ | $\frac{1}{2}\ln(x^2+a^2)$ |

### Example

Integrate $\int \frac{2x^3 - x^2 - 4x + 3}{x^2 - 1} \, dx$

**Step 1:** Division: $2x^3 - x^2 - 4x + 3 = (x^2 - 1)(2x - 1) + (-2x + 2)$

<Equation label="After Division" tex="\frac{2x^3 - x^2 - 4x + 3}{x^2-1} = 2x - 1 + \frac{-2x+2}{x^2-1}" />

**Step 2:** Factor: $x^2 - 1 = (x-1)(x+1)$

**Step 3:** Partial fractions: $\frac{-2x+2}{(x-1)(x+1)} = \frac{A}{x-1} + \frac{B}{x+1}$

Solving: $A = 2$, $B = -4$

<Equation label="Final" tex="\int (2x-1) \, dx + \int \frac{2}{x-1} \, dx - \int \frac{4}{x+1} \, dx = x^2 - x + 2\ln|x-1| - 4\ln|x+1| + C" />
`
