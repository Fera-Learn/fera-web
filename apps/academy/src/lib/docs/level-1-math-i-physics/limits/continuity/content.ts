export const content = String.raw`## Continuity and Discontinuities

A function is continuous at a point if its graph has no breaks, jumps, or holes at that point. This concept is essential for understanding calculus operations like differentiation and integration.

### Definition of Continuity

A function f is continuous at x = a if:

<Equation label="Continuity Definition" tex="f \text{ is continuous at } a \iff \lim_{x \to a} f(x) = f(a)" />

This requires three conditions:
1. f(a) is defined
2. \(\lim_{x \to a} f(x)\) exists
3. The limit equals the function value

### Types of Discontinuities

**Removable Discontinuity:** A hole in the graph where the limit exists but f(a) is either undefined or doesn't match the limit.

<Equation label="Removable" tex="\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4, \text{ but } f(2) \text{ is undefined}" />

**Jump Discontinuity:** The left-hand and right-hand limits exist but are different.

<Equation label="Jump" tex="\lim_{x \to 0^-} \text{sgn}(x) = -1 \neq \lim_{x \to 0^+} \text{sgn}(x) = 1" />

**Infinite Discontinuity:** The function approaches infinity as x approaches the point.

<Equation label="Infinite" tex="\lim_{x \to 0^+} \frac{1}{x} = +\infty \text{ and } \lim_{x \to 0^-} \frac{1}{x} = -\infty" />

### Intermediate Value Theorem

If f is continuous on [a, b] and N is between f(a) and f(b), then there exists c ∈ [a, b] such that f(c) = N.

<Equation label="IVT" tex="f \text{ continuous on } [a,b] \text{ and } f(a) < N < f(b) \implies \exists c \in (a,b) : f(c) = N" />

This theorem guarantees that continuous functions take on every value between any two points—they cannot "skip" values.

### Continuity of Combined Functions

- Sum, difference, product: If f and g are continuous at a, so are f+g, f-g, and fg
- Quotient: If f and g are continuous at a and g(a) ≠ 0, then f/g is continuous at a
- Composition: If g is continuous at a and f is continuous at g(a), then f ∘ g is continuous at a

Continuity is preserved under these operations, making it easy to determine where complex functions are continuous based on their component functions.`;
