export const content = String.raw`## Inverse Derivatives

If \(y = f^{-1}(x)\), then \(f(y) = x\).

Differentiating implicitly:
<Equation label="Starting" tex="f(y) = x" />

<Equation label="Differentiate" tex="f'(y) \cdot \frac{dy}{dx} = 1" />

<Equation label="Result" tex="\frac{dy}{dx} = \frac{1}{f'(y)} = \frac{1}{f'(f^{-1}(x))}" />

## Example: \(\arcsin(x)\)

If \(y = \arcsin(x)\), then \(\sin(y) = x\)

<Equation label="Example" tex="\cos(y) \cdot \frac{dy}{dx} = 1" />

Since \(y=\arcsin x\) lies in the principal range \([-\pi/2,\pi/2]\), we have \(\cos y\ge0\). This justifies using the positive square root.

<Equation label="Result" tex="\frac{dy}{dx} = \frac{1}{\cos(y)} = \frac{1}{\sqrt{1 - \sin^2(y)}} = \frac{1}{\sqrt{1 - x^2}}" />

## General Formula

<Equation label="General" tex="\frac{d}{dx}[f^{-1}(x)] = \frac{1}{f'(f^{-1}(x))}" />`;
