export const content = String.raw`## Complex Trigonometric Formulae

Complex exponentials let us rewrite trigonometric functions as exponential combinations. This is useful in physics because oscillations, rotations, and wave phases often simplify when written with exponentials.

## Notation

<Notation
  items={[
    { symbol: "\\theta", meaning: "an angle or phase" },
    { symbol: "x", meaning: "a real or complex input variable" },
    { symbol: "\\cosh x", meaning: "hyperbolic cosine of x" },
    { symbol: "\\sinh x", meaning: "hyperbolic sine of x" },
  ]}
/>

## Complex Exponential Forms

Euler's formula is the starting point:

<Equation label="Euler's" tex="e^{i\theta} = \cos\theta + i\sin\theta" />

Adding the equations for \(e^{i\theta}\) and \(e^{-i\theta}\) isolates cosine. Subtracting them isolates sine:

<Equation label="Cosine from Exponential" tex="\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}" />

<Equation label="Sine from Exponential" tex="\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}" />

## Hyperbolic Connections

The hyperbolic functions are defined by similar exponential combinations, but without the imaginary unit in the exponent:

<Equation label="Hyperbolic Cosine" tex="\cosh x = \frac{e^x + e^{-x}}{2}" />

<Equation label="Hyperbolic Sine" tex="\sinh x = \frac{e^x - e^{-x}}{2}" />

## Useful Identities

<Equation label="Circular Identity" tex="\cos^2\theta + \sin^2\theta = 1" />

<Equation label="Hyperbolic Identity" tex="\cosh^2 x - \sinh^2 x = 1" />`;
