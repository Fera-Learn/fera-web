export const content = String.raw`## Algebraic Methods for Evaluating Limits

While direct substitution works for many functions, algebraic manipulation is often necessary when direct substitution produces an indeterminate form like \(\frac{0}{0}\).

### Direct Substitution

For polynomial functions, we can substitute the value directly:

<Equation label="Direct Substitution" tex="\lim_{x \to 2} (3x^2 - 5x + 1) = 3(2)^2 - 5(2) + 1 = 12 - 10 + 1 = 3" />

For rational functions, direct substitution works when the denominator is non-zero:

<Equation label="Rational Limit" tex="\lim_{x \to 3} \frac{x^2 + 1}{x - 1} = \frac{3^2 + 1}{3 - 1} = \frac{10}{2} = 5" />

### Factoring Method

When direct substitution gives \(\frac{0}{0}\), factor and cancel:

<Equation label="Factoring Example" tex="\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2} (x+2) = 4" />

The key is identifying the common factor that causes the zero in the denominator, then canceling it before taking the limit.

### Rationalizing

For expressions with square roots, rationalize by multiplying by the conjugate:

<Equation label="Rationalizing" tex="\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4} = \lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4} \cdot \frac{\sqrt{x} + 2}{\sqrt{x} + 2} = \lim_{x \to 4} \frac{x - 4}{(x-4)(\sqrt{x} + 2)} = \lim_{x \to 4} \frac{1}{\sqrt{x} + 2} = \frac{1}{4}" />

### Difference of Cubes and Special Products

For expressions involving differences of cubes:

<Equation label="Difference of Cubes" tex="\lim_{x \to 8} \frac{x^{2/3} - 4}{x - 8} = \lim_{x \to 8} \frac{(x^{1/3} - 2)(x^{1/3} + 2)}{x - 8}" />

Let \(u = x^{1/3}\), so when \(x \to 8\), \(u \to 2\):

<Equation label="Substituted Form" tex="= \lim_{u \to 2} \frac{(u-2)(u+2)}{u^3 - 8} = \lim_{u \to 2} \frac{u+2}{u^2 + 2u + 4} = \frac{4}{12} = \frac{1}{3}" />

### Strategy Summary

1. Try direct substitution first
2. If result is \(\frac{0}{0}\), factor and cancel
3. If radicals are present, rationalize
4. Consider substitution for complex expressions
5. Apply limit laws after simplification`;
