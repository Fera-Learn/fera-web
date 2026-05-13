export const content = String.raw`## The Fundamental Sine Limit

One of the most important limits in calculus is \(\lim_{x \to 0} \frac{\sin x}{x} = 1\). This limit appears frequently in trigonometry and forms the basis for deriving derivatives of trigonometric functions.

### The Fundamental Limit

<Equation label="Sine Limit" tex="\lim_{x \to 0} \frac{\sin x}{x} = 1" />

This limit is remarkable because both the numerator and denominator approach 0, yet their ratio approaches 1.

### Proof Using the Squeeze Theorem

We can prove this using geometry. Consider the unit circle and compare areas of triangles and sectors:

<Equation label="Geometric Bounds" tex="\cos x \leq \frac{\sin x}{x} \leq 1 \quad \text{for } 0 < x < \frac{\pi}{2}" />

As x → 0, cos x → 1, so by the squeeze theorem:

<Equation label="Squeeze Result" tex="\lim_{x \to 0} \frac{\sin x}{x} = 1" />

### Related Limits

From the fundamental limit, we can derive several important results:

<Equation label="Cosine Limit" tex="\lim_{x \to 0} \frac{1 - \cos x}{x} = 0" />

<Equation label="Tangent Limit" tex="\lim_{x \to 0} \frac{\tan x}{x} = \lim_{x \to 0} \frac{\sin x}{x} \cdot \frac{1}{\cos x} = 1 \cdot 1 = 1" />

### Small Angle Approximations

For small angles measured in radians:

<Equation label="Small Angle Sine" tex="\sin x \approx x \quad \text{when } x \to 0" />

<Equation label="Small Angle Cosine" tex="\cos x \approx 1 - \frac{x^2}{2} \quad \text{when } x \to 0" />

<Equation label="Small Angle Tangent" tex="\tan x \approx x \quad \text{when } x \to 0" />

These approximations are essential in physics and engineering for simplifying calculations involving small angles.

### Applications

This limit is crucial for:
- Finding derivatives of sin x and cos x
- Evaluating limits involving trigonometric functions
- Proving other important limits in calculus
- Understanding wave motion and oscillations`;
