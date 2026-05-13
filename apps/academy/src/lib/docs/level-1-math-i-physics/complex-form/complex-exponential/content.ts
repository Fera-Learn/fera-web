export const content = String.raw`## Complex Exponentials

The exponential function extends naturally to complex arguments, providing powerful tools for complex analysis.

### Definition

For any complex number \(z = x + iy\):

<Equation label="Complex Exponential" tex="e^z = e^{x+iy} = e^x(\cos y + i\sin y)" />

This definition preserves the key property \(e^{z_1 + z_2} = e^{z_1} \cdot e^{z_2}\).

### Properties

The complex exponential shares fundamental properties with its real counterpart:

<Equation label="Product Rule" tex="e^{z_1 + z_2} = e^{z_1} e^{z_2}" />

<Equation label="Quotient Rule" tex="\frac{e^{z_1}}{e^{z_2}} = e^{z_1 - z_2}" />

<Equation label="Periodicity" tex="e^{z + 2\pi i} = e^z" />

The complex exponential is periodic with period \(2\pi i\).

### Relationship to De Moivre's Theorem

Using Euler's formula, we can derive De Moivre's theorem:

<Equation label="From Euler" tex="(e^{i\theta})^n = e^{in\theta} = \cos(n\theta) + i\sin(n\theta)" />

This unified view connects:
- Complex exponentials
- Trigonometric functions
- Complex multiplication (rotation and scaling)

### Complex Powers

For any complex base \(a\) and exponent \(b\):

<Equation label="Complex Power" tex="a^b = e^{b \ln a}" />

where \(\ln a\) is the complex logarithm, having infinitely many values due to the periodicity of the exponential.`;
