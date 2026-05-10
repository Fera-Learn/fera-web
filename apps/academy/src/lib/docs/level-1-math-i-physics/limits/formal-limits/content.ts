export const content = String.raw`## Introduction to Formal Limits

The concept of a limit is fundamental to calculus. It describes the behavior of a function as its input approaches a particular value, not necessarily at that value itself.

### The Epsilon-Delta Definition

The formal definition of a limit states that the limit of f(x) as x approaches a equals L if and only if for every ε > 0, there exists a δ > 0 such that:

<Equation label="Epsilon-Delta Definition" tex="\lim_{x \to a} f(x) = L \iff \forall \epsilon > 0, \exists \delta > 0 : 0 < |x - a| < \delta \implies |f(x) - L| < \epsilon" />

This definition captures the precise meaning of "f(x) gets arbitrarily close to L as x gets arbitrarily close to a."

### Understanding the Quantifiers

The epsilon-delta definition has two quantifiers that must be understood:
- **For all ε > 0**: No matter how small the tolerance, we can find...
- **There exists δ > 0**: A corresponding distance in the domain

The order matters: we first choose any ε, then we find an appropriate δ.

### Visual Interpretation

Consider the graph of a function. The limit L exists at x = a if:
1. As we approach a from the left, f(x) approaches L
2. As we approach a from the right, f(x) approaches L
3. Both approaches give the same value L

<Equation label="Two-Sided Limit" tex="\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = L \text{ and } \lim_{x \to a^+} f(x) = L" />

### Why Formal Definitions Matter

The epsilon-delta definition provides:
- **Rigorous proof**: We can prove limits exist or don't exist
- **Precision**: Clear criteria for limit existence
- **Foundation**: Builds the entire framework of calculus

Understanding this definition is crucial for higher-level analysis and proving theorems about continuous functions and derivatives.`;
