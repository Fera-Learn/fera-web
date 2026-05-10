export const content = String.raw`## Change of Variables in Limits

The substitution method for limits is analogous to u-substitution in integration. It allows us to transform complex limit problems into simpler ones by introducing a new variable.

### The Substitution Theorem

If $\lim_{x \to a} f(x) = L$ and we define a new variable u = g(x), then under appropriate conditions:

<Equation label="Variable Substitution" tex="\lim_{x \to a} f(g(x)) = \lim_{u \to g(a)} f(u)" />

The key requirement is that the inner function g(x) approaches g(a) as x → a, and f is continuous at g(a).

### Basic Substitution Example

Evaluate: $\lim_{x \to 2} (x^2 + 3)^5$

Let u = x² + 3. As x → 2, u → 2² + 3 = 7.

<Equation label="Basic Sub" tex="\lim_{x \to 2} (x^2 + 3)^5 = \lim_{u \to 7} u^5 = 7^5 = 16807" />

### Handling Indeterminate Forms

When direct substitution gives an indeterminate form, substitution can help:

Evaluate: $\lim_{x \to 0} \frac{\sin(3x)}{x}$

Let u = 3x. As x → 0, u → 0.

<Equation label="Trig Substitution" tex="\lim_{x \to 0} \frac{\sin(3x)}{x} = \lim_{u \to 0} \frac{\sin(u)}{u/3} = \lim_{u \to 0} 3 \cdot \frac{\sin(u)}{u} = 3 \cdot 1 = 3" />

### Composite Function Limits

For limits of composite functions f(g(x)), we need:

<Equation label="Composite Limit" tex="\lim_{x \to a} g(x) = b \text{ and } \lim_{u \to b} f(u) = f(b) \implies \lim_{x \to a} f(g(x)) = f(b)" />

This requires f to be continuous at b.

### Algebraic Substitutions

Sometimes algebraic manipulation is needed before substituting:

Evaluate: $\lim_{x \to 1} \frac{x^{1/3} - 1}{x - 1}$

Let u = x^(1/3), so x = u³. As x → 1, u → 1.

<Equation label="Algebraic Sub" tex="\lim_{x \to 1} \frac{x^{1/3} - 1}{x - 1} = \lim_{u \to 1} \frac{u - 1}{u^3 - 1} = \lim_{u \to 1} \frac{1}{u^2 + u + 1} = \frac{1}{3}" />

### Strategy for Substitution

1. Identify the inner function g(x)
2. Let u = g(x) and rewrite the expression in terms of u
3. Determine the new limit value for u
4. Evaluate the new limit
5. If the result is still indeterminate, try again with a different substitution

This technique transforms complex expressions into simpler forms that can be evaluated using known limits and limit laws.`;
