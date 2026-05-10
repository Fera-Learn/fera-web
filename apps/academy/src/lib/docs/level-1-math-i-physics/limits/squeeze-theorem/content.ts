export const content = String.raw`## The Squeeze Theorem

The squeeze theorem (also called the sandwich theorem) is a powerful tool for evaluating limits when direct substitution or algebraic manipulation is difficult. It allows us to "squeeze" a function between two others whose limits we know.

### Statement of the Theorem

If g(x) ≤ f(x) ≤ h(x) for all x near a (except possibly at a), and:

<Equation label="Squeeze Theorem" tex="\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L \implies \lim_{x \to a} f(x) = L" />

The function f(x) is "squeezed" between g(x) and h(x), both of which approach the same limit L, so f(x) must also approach L.

### Geometric Interpretation

Think of f(x) as being trapped between two "walls" g(x) and h(x). If both walls approach the same height L as x approaches a, then f(x) must also approach that height—it's squeezed to the same limit.

### Classic Example: $\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right)$

The function $\sin(1/x)$ oscillates wildly as x → 0, but it's always bounded between -1 and 1:

<Equation label="Bounded Sine" tex="-1 \leq \sin\left(\frac{1}{x}\right) \leq 1" />

Multiplying by x² (which is positive for small x):

<Equation label="Squeezing" tex="-x^2 \leq x^2 \sin\left(\frac{1}{x}\right) \leq x^2" />

As x → 0, both -x² and x² approach 0:

<Equation label="Result" tex="\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) = 0" />

### Applications to Trigonometry

The squeeze theorem is essential for proving the fundamental limit:

<Equation label="Trig Squeeze" tex="\cos x \leq \frac{\sin x}{x} \leq 1 \implies \lim_{x \to 0} \frac{\sin x}{x} = 1" />

### Key Requirements

1. g(x) ≤ f(x) ≤ h(x) must hold near a (except possibly at a)
2. Both g(x) and h(x) must have the same limit L at a
3. The inequality doesn't need to hold at a itself, only near it

This theorem is invaluable for handling oscillating functions and functions that are difficult to analyze directly.`;
