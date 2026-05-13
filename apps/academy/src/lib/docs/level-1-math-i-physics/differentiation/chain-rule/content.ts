export const content = String.raw`## Chain Rule

The **chain rule** is used to differentiate composite functions.

If \(y = f(g(x))\), then:
<Equation label="Chain Rule" tex="\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}" />

where \(u = g(x)\).

## Alternative Form

<Equation label="Chain Rule Alt" tex="\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)" />

## Example

Find \(\frac{d}{dx}[\sin(x^2)]\)

Let \(u = x^2\), so \(f(u) = \sin(u)\)

<Equation label="Example" tex="\frac{d}{dx}[\sin(x^2)] = \cos(x^2) \cdot 2x = 2x\cos(x^2)" />

## Power Chain Rule

For \(y = [g(x)]^n\):
<Equation label="Power Chain" tex="\frac{dy}{dx} = n[g(x)]^{n-1} \cdot g'(x)" />`;
