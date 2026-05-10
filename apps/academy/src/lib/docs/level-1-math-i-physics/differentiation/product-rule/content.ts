export const content = String.raw`## Product Rule

Used to differentiate products of functions.

<Equation label="Product Rule" tex="\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)" />

## Memory Aid

"First times derivative of second plus second times derivative of first"

## Example

Find $\frac{d}{dx}[x^2 \sin(x)]$

Let $f(x) = x^2$, $g(x) = \sin(x)$

<Equation label="Example" tex="\frac{d}{dx}[x^2 \sin(x)] = 2x \cdot \sin(x) + x^2 \cdot \cos(x)" />

## Multiple Functions

For three functions:
<Equation label="Three Functions" tex="\frac{d}{dx}[fgh] = f'gh + fg'h + fgh'" />

## Leibniz Notation

<Equation label="Leibniz" tex="\frac{d(uv)}{dx} = v\frac{du}{dx} + u\frac{dv}{dx}" />`;