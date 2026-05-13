export const content = String.raw`## Principle

A function of a complex variable takes a complex input and returns a complex output. The main functions needed here are the exponential, trigonometric, and hyperbolic functions.

<Equation label="Complex input" tex="z=x+iy,\quad x,y\in\mathbb R" />

The complex exponential is the central example because it connects growth, rotation, and periodicity.

## Notation

- \(z=x+iy\) is a complex input.
- \(x=\operatorname{Re}(z)\) is the real part.
- \(y=\operatorname{Im}(z)\) is the imaginary part.
- \(e^z\) is the complex exponential.
- \(\sin z\), \(\cos z\), \(\sinh z\), and \(\cosh z\) are complex-valued functions.

## Method

Write \(z=x+iy\) and split the exponential:

<Equation label="Split exponential" tex="e^z=e^{x+iy}=e^xe^{iy}" />

Use Euler's formula for the imaginary exponential:

<Equation label="Euler substitution" tex="e^{iy}=\cos y+i\sin y" />

Therefore:

<Equation label="Complex exponential form" tex="e^z=e^x(\cos y+i\sin y)" />

This immediately gives:

<Equation label="Real part" tex="\operatorname{Re}(e^z)=e^x\cos y" />

<Equation label="Imaginary part" tex="\operatorname{Im}(e^z)=e^x\sin y" />

<Equation label="Modulus" tex="|e^z|=e^x=e^{\operatorname{Re}(z)}" />

<Equation label="Argument" tex="\arg(e^z)=y\quad\text{mod }2\pi" />

## Rules

Define the trigonometric and hyperbolic functions using exponentials:

<Equation label="Cosine definition" tex="\cos z=\frac{e^{iz}+e^{-iz}}{2}" />

<Equation label="Sine definition" tex="\sin z=\frac{e^{iz}-e^{-iz}}{2i}" />

<Equation label="Hyperbolic cosine definition" tex="\cosh z=\frac{e^z+e^{-z}}{2}" />

<Equation label="Hyperbolic sine definition" tex="\sinh z=\frac{e^z-e^{-z}}{2}" />

Useful identities follow by substituting \(iz\):

<Equation label="Complex trig hyperbolic links" tex="\cos(iz)=\cosh z,\quad \sin(iz)=i\sinh z" />

<Equation label="Complex hyperbolic trig links" tex="\cosh(iz)=\cos z,\quad \sinh(iz)=i\sin z" />

## Examples

Find the modulus of:

<Equation label="Example target" tex="e^{(1+i)(2-i)}" />

First multiply the exponent:

<Equation label="Exponent product" tex="(1+i)(2-i)=2-i+2i-i^2=3+i" />

So:

<Equation label="Example exponential" tex="e^{(1+i)(2-i)}=e^{3+i}" />

The modulus of \(e^{x+iy}\) is \(e^x\), so:

<Equation label="Example modulus" tex="|e^{3+i}|=e^3" />

## Checks

- The exponential \(e^z\) is periodic in the imaginary direction: \(e^{z+2\pi i}=e^z\).
- The exponential never equals zero because \(|e^z|=e^{\operatorname{Re}(z)}\gt0\).
- The argument of \(e^z\) is only determined modulo \(2\pi\).
- Complex trigonometric and hyperbolic functions usually have complex values, even when their names are familiar from real calculus.`;
