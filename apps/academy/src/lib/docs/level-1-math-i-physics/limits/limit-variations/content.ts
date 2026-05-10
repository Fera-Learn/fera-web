export const content = String.raw`## Variations of Limits

Beyond the standard two-sided limits at finite points, calculus considers several other important limit scenarios: one-sided limits, limits at infinity, and infinite limits.

### One-Sided Limits

A one-sided limit considers only one direction of approach:

**Left-hand limit** (approaching from below):
<Equation label="Left Hand Limit" tex="\lim_{x \to a^-} f(x) = L \text{ means } f(x) \to L \text{ as } x \to a \text{ from the left}" />

**Right-hand limit** (approaching from above):
<Equation label="Right Hand Limit" tex="\lim_{x \to a^+} f(x) = L \text{ means } f(x) \to L \text{ as } x \to a \text{ from the right}" />

The two-sided limit exists if and only if both one-sided limits exist and are equal:

<Equation label="Two-Sided Existence" tex="\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = L = \lim_{x \to a^+} f(x)" />

### Limits at Infinity

As x grows without bound, we examine behavior at infinity:

<Equation label="Limit at Infinity" tex="\lim_{x \to \infty} f(x) = L \text{ means } f(x) \to L \text{ as } x \text{ becomes arbitrarily large}" />

For rational functions, compare the highest-degree terms:

<Equation label="Rational Infinity" tex="\lim_{x \to \infty} \frac{3x^2 + 2x}{5x^2 - 1} = \lim_{x \to \infty} \frac{3x^2}{5x^2} = \frac{3}{5}" />

### Infinite Limits

When a function grows without bound:

<Equation label="Positive Infinity" tex="\lim_{x \to a^+} f(x) = +\infty \text{ means } f(x) \text{ exceeds any bound as } x \to a^+" />

<Equation label="Negative Infinity" tex="\lim_{x \to a^-} f(x) = -\infty \text{ means } f(x) \text{ falls below any bound as } x \to a^-" />

For rational functions at vertical asymptotes:

<Equation label="Vertical Asymptote" tex="\lim_{x \to 2^+} \frac{1}{x-2} = +\infty \quad \text{and} \quad \lim_{x \to 2^-} \frac{1}{x-2} = -\infty" />

### Summary of Limit Types

| Type | Notation | Meaning |
|------|----------|---------|
| Two-sided | $\lim_{x \to a} f(x)$ | Approaches from both sides |
| Left-hand | $\lim_{x \to a^-} f(x)$ | Approaches from below |
| Right-hand | $\lim_{x \to a^+} f(x)$ | Approaches from above |
| At infinity | $\lim_{x \to \infty} f(x)$ | x grows arbitrarily large |
| Infinite limit | $\lim_{x \to a} f(x) = \pm\infty$ | Function unbounded |

Understanding these variations is essential for analyzing the complete behavior of functions.`;