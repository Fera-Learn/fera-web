export const content = String.raw`## Polynomial Long Division

When integrating rational functions where the numerator's degree is greater than or equal to the denominator's degree, **polynomial long division** simplifies the integrand.

### When to Use

For $\int \frac{P(x)}{Q(x)} \, dx$ where $\deg(P) \geq \deg(Q)$, divide first to get a polynomial plus a proper fraction.

### Polynomial Long Division Steps

1. Arrange both polynomials in descending order
2. Divide the leading terms: (leading of numerator) ÷ (leading of denominator)
3. Multiply the divisor by this result, subtract from numerator
4. Repeat until degree of remainder < degree of divisor

### Example

Divide $2x^3 + 4x^2 - 3x + 1$ by $x^2 + 1$:

<Equation label="Division Setup" tex="\begin{aligned} 2x^3 + 4x^2 - 3x + 1 &\div (x^2 + 1) \end{aligned}" />

**Step 1:** $2x^3 \div x^2 = 2x$

Multiply: $2x(x^2 + 1) = 2x^3 + 2x$

Subtract: $(2x^3 + 4x^2 - 3x + 1) - (2x^3 + 2x) = 4x^2 - 5x + 1$

**Step 2:** $4x^2 \div x^2 = 4$

Multiply: $4(x^2 + 1) = 4x^2 + 4$

Subtract: $(4x^2 - 5x + 1) - (4x^2 + 4) = -5x - 3$

<Equation label="Result" tex="2x^3 + 4x^2 - 3x + 1 = (x^2 + 1)(2x + 4) + (-5x - 3)" />

So: $\frac{2x^3 + 4x^2 - 3x + 1}{x^2 + 1} = 2x + 4 + \frac{-5x - 3}{x^2 + 1}$

### Integration Application

<Equation label="Integration" tex="\int \frac{2x^3 + 4x^2 - 3x + 1}{x^2 + 1} \, dx = \int (2x + 4) \, dx + \int \frac{-5x - 3}{x^2 + 1} \, dx" />

<Equation label="Result" tex="= x^2 + 4x - \frac{5}{2}\ln(x^2+1) - 3\arctan x + C" />

This technique makes otherwise difficult rational integrals manageable.
`;
