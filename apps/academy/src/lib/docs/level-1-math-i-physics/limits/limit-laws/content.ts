export const content = String.raw`## Limit Laws and Operations

When computing limits, we can use established laws that govern how limits interact with basic algebraic operations. These rules form the foundation for evaluating limits algebraically.

### Basic Limit Laws

If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$, then:

**Sum Law:**
<Equation label="Sum Rule" tex="\lim_{x \to a} [f(x) + g(x)] = L + M = \lim_{x \to a} f(x) + \lim_{x \to a} g(x)" />

**Difference Law:**
<Equation label="Difference Rule" tex="\lim_{x \to a} [f(x) - g(x)] = L - M = \lim_{x \to a} f(x) - \lim_{x \to a} g(x)" />

**Product Law:**
<Equation label="Product Rule" tex="\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x)" />

**Quotient Law:**
<Equation label="Quotient Rule" tex="\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}, \text{ provided } M \neq 0" />

### Constant Multiples

<Equation label="Constant Multiple" tex="\lim_{x \to a} [c \cdot f(x)] = c \cdot L, \text{ where } c \text{ is a constant}" />

### Power and Root Laws

<Equation label="Power Rule" tex="\lim_{x \to a} [f(x)]^n = L^n, \text{ for any positive integer } n" />

<Equation label="Root Rule" tex="\lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{L}, \text{ provided } L > 0 \text{ when } n \text{ is even}" />

### Applying the Laws

When using these laws, ensure:
1. Each individual limit exists
2. For quotients, the denominator limit is non-zero
3. The laws apply to sums, differences, products, and quotients of any finite number of functions

These algebraic properties make it possible to evaluate limits of complex expressions by breaking them into simpler components whose limits we already know.`;
