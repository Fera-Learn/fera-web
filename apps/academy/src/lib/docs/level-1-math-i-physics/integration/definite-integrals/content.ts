export const content = String.raw`## Definite Integrals

A **definite integral** has upper and lower limits (bounds) and computes a specific numerical value, typically representing the signed area under a curve.

### Definition

<Equation label="Definite Integral" tex="\int_a^b f(x) \, dx = F(b) - F(a)" />

where $F(x)$ is any antiderivative of $f(x)$. This is the **Evaluation Theorem**, also called the **Second Fundamental Theorem of Calculus**.

### Area Under a Curve

When $f(x) \geq 0$ on $[a,b]$, the definite integral represents the area between the curve and the x-axis:

<Equation label="Area" tex="\text{Area} = \int_a^b f(x) \, dx \quad \text{when } f(x) \geq 0" />

### Properties of Definite Integrals

<Equation label="Property 1" tex="\int_a^a f(x) \, dx = 0" />

<Equation label="Property 2" tex="\int_a^b f(x) \, dx = -\int_b^a f(x) \, dx" />

<Equation label="Property 3" tex="\int_a^b [f(x) + g(x)] \, dx = \int_a^b f(x) \, dx + \int_a^b g(x) \, dx" />

<Equation label="Property 4" tex="\int_a^b cf(x) \, dx = c \int_a^b f(x) \, dx \quad \text{for constant } c" />

### Example

Evaluate $\int_0^2 x^2 \, dx$:

<Equation label="Example" tex="\int_0^2 x^2 \, dx = \left[\frac{x^3}{3}\right]_0^2 = \frac{8}{3} - 0 = \frac{8}{3}" />

### Area Between Curves

The area between two curves $f(x)$ and $g(x)$ from $a$ to $b$:

<Equation label="Between Curves" tex="\text{Area} = \int_a^b |f(x) - g(x)| \, dx" />

When $f(x) \geq g(x)$ on $[a,b]$: $\int_a^b [f(x) - g(x)] \, dx$
`
