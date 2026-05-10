export const content = String.raw`## Quotient Rule

Used to differentiate quotients of functions.

<Equation label="Quotient Rule" tex="\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}" />

## Memory Aid

"Low d-high minus high d-low, over low squared"

## Example

Find $\frac{d}{dx}\left[\frac{x}{\sin(x)}\right]$

<Equation label="Example" tex="= \frac{1 \cdot \sin(x) - x \cdot \cos(x)}{[\sin(x)]^2}" />

<Equation label="Simplified" tex="= \frac{\sin(x) - x\cos(x)}{\sin^2(x)}" />

## Alternative: Product Rule

Sometimes it's easier to rewrite:
<Equation label="Alternative" tex="\frac{d}{dx}\left[\frac{f}{g}\right] = f \cdot g^{-1}" />

Then use the chain rule with the product rule.`;
