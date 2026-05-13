export const content = String.raw`## Polar Form of Complex Numbers

A complex number \(z = a + bi\) can be expressed in polar form as \(z = r(\cos\theta + i\sin\theta)\), where \(r\) is the modulus (or absolute value) and \(\theta\) is the argument.

### Modulus and Argument

The modulus of a complex number is its distance from the origin in the complex plane:

<Equation label="Modulus" tex="r = |z| = \sqrt{a^2 + b^2}" />

The argument is the angle measured from the positive real axis:

<Equation label="Argument" tex="\theta = \arg(z) = \arctan\left(\frac{b}{a}\right)" />

### Polar (Modulus-Argument) Form

Using Euler's formula \(e^{i\theta} = \cos\theta + i\sin\theta\), we can write:

<Equation label="Polar Form" tex="z = r(\cos\theta + i\sin\theta) = re^{i\theta}" />

This is known as the **modulus-argument form** or **polar form** of a complex number.

### Conversion from Cartesian

To convert from Cartesian form \(z = a + bi\) to polar form:

1. Calculate the modulus: \(r = \sqrt{a^2 + b^2}\)
2. Calculate the argument: \(\theta = \arctan\left(\frac{b}{a}\right)\)
3. Adjust quadrant based on signs of \(a\) and \(b\)

For example, for \(z = 1 + i\):
- \(r = \sqrt{1^2 + 1^2} = \sqrt{2}\)
- \(\theta = \arctan(1) = \frac{\pi}{4}\)

So \(z = \sqrt{2} \text{cis} \frac{\pi}{4}\) where \(\text{cis}\theta = \cos\theta + i\sin\theta\).`;
