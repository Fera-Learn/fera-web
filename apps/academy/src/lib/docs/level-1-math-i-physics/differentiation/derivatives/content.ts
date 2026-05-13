export const content = String.raw`## Derivatives

The **derivative** of a function \(f(x)\) measures the rate of change of \(f\) with respect to \(x\).

<Equation label="Definition" tex="f'(x) = \frac{df}{dx} = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />

## Notation

There are several common notations for derivatives:
- Leibniz notation: \(\frac{dy}{dx}\)
- Lagrange notation: \(f'(x)\)
- Euler notation: \(Df\)

## Basic Rules

<Equation label="Constant Multiple" tex="\frac{d}{dx}[cf(x)] = cf'(x)" />

<Equation label="Sum Rule" tex="\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)" />

<Equation label="Product Rule" tex="\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)" />

<Equation label="Quotient Rule" tex="\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}" />

## The Power Rule

<Equation label="Power Rule" tex="\frac{d}{dx}[x^n] = nx^{n-1}" />

This works for any real exponent \(n\).`;
