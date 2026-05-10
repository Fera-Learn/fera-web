export const content = String.raw`## Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (FTC) establishes the profound connection between differentiation and integration - two seemingly opposite operations.

### Part 1: The Integral as an Antiderivative

If $f$ is continuous on $[a,b]$, define:

<Equation label="FTC Part 1" tex="F(x) = \int_a^x f(t) \, dt" />

Then $F$ is differentiable and $F'(x) = f(x)$.

This tells us that **integration can be reversed by differentiation**.

<Equation label="Derivative of Integral" tex="\frac{d}{dx}\int_a^x f(t) \, dt = f(x)" />

### Part 2: Evaluation Theorem

If $f$ is continuous on $[a,b]$ and $F$ is any antiderivative of $f$, then:

<Equation label="FTC Part 2" tex="\int_a^b f(x) \, dx = F(b) - F(a)" />

This provides a **practical method** to evaluate definite integrals.

### Why This Matters

The FTC allows us to:
1. Compute definite integrals without using Riemann sums
2. Understand that differentiation and integration are inverse operations
3. Solve real-world problems involving accumulation

### Example Using FTC Part 2

Evaluate $\int_1^4 (2x + 1) \, dx$:

<Equation label="Example" tex="\int (2x + 1) \, dx = x^2 + x + C" />

<Equation label="Evaluate" tex="\int_1^4 (2x + 1) \, dx = [x^2 + x]_1^4 = (16 + 4) - (1 + 1) = 20 - 2 = 18" />

### Connecting Derivatives and Integrals

The two parts of the FTC show:

<Equation label="Connection" tex="\frac{d}{dx}\int_a^x f(t) \, dt = f(x) \quad \text{and} \quad \int_a^b F'(x) \, dx = F(b) - F(a)" />

This duality is central to mathematical analysis and enables solving problems in physics, engineering, and economics involving rates of change and accumulated quantities.
`;
