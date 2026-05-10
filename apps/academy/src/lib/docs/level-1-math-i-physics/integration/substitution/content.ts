export const content = String.raw`## U-Substitution

**U-substitution** (also called **reverse chain rule**) is a technique for integrating composite functions. It reverses the chain rule from differentiation.

### The Method

For $\int f(g(x)) \cdot g'(x) \, dx$, let $u = g(x)$, then $du = g'(x) \, dx$:

<Equation label="U-Substitution" tex="\int f(g(x)) \cdot g'(x) \, dx = \int f(u) \, du" />

### Steps

1. Choose $u$ as the inner function
2. Compute $du = u' \, dx$
3. Rewrite the integral in terms of $u$
4. Integrate with respect to $u$
5. Substitute back $u = g(x)$

### Examples

**Example 1:** $\int 2x \cos(x^2) \, dx$

Let $u = x^2$, then $du = 2x \, dx$:

<Equation label="Example 1" tex="\int 2x \cos(x^2) \, dx = \int \cos(u) \, du = \sin(u) + C = \sin(x^2) + C" />

**Example 2:** $\int \frac{x}{\sqrt{x^2 + 1}} \, dx$

Let $u = x^2 + 1$, then $du = 2x \, dx$:

<Equation label="Example 2" tex="\int \frac{x}{\sqrt{x^2 + 1}} \, dx = \frac{1}{2} \int u^{-1/2} \, du = \frac{1}{2} \cdot 2u^{1/2} + C = \sqrt{x^2 + 1} + C" />

### Definite Integrals with U-Substitution

When using u-substitution with definite integrals, you must change the limits:

<Equation label="Definite U-Sub" tex="\int_a^b f(g(x)) g'(x) \, dx = \int_{u(a)}^{u(b)} f(u) \, du" />

**Example:** $\int_0^1 2x(x^2 + 1)^3 \, dx$

<Equation label="Definite Example" tex="u = x^2 + 1, \quad du = 2x \, dx; \quad x = 0 \Rightarrow u = 1, \quad x = 1 \Rightarrow u = 2" />

<Equation label="Result" tex="\int_1^2 u^3 \, du = \left[\frac{u^4}{4}\right]_1^2 = \frac{16}{4} - \frac{1}{4} = \frac{15}{4}" />
`;
