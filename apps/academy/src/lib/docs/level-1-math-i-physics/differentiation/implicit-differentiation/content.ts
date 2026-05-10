export const content = String.raw`## Implicit Differentiation

**Implicit differentiation** is used when $y$ is not explicitly solved as a function of $x$.

## Method

1. Differentiate both sides with respect to $x$
2. Treat $y$ as a function of $x$: $\frac{d}{dx}[y] = \frac{dy}{dx}$
3. Collect $\frac{dy}{dx}$ terms on one side
4. Solve for $\frac{dy}{dx}$

## Example: Circle

$x^2 + y^2 = r^2$

Differentiating:
<Equation label="Step 1" tex="2x + 2y\frac{dy}{dx} = 0" />

<Equation label="Result" tex="\frac{dy}{dx} = -\frac{x}{y}" />

## Example: Ellipse

$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$

<Equation label="Ellipse Derivative" tex="\frac{dy}{dx} = -\frac{b^2x}{a^2y}" />`;