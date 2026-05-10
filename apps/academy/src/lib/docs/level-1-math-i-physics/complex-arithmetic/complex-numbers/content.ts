export const content = String.raw`## Introduction to Complex Numbers

Complex numbers extend the real number system to solve equations that have no real solutions. A complex number combines a real part and an imaginary part.

### Definition

A complex number $z$ is written in **standard form** as:

<Equation label="StandardForm" tex="z = a + bi" />

where:
- $a$ is the **real part** (Re(z))
- $b$ is the **imaginary coefficient**
- $i$ is the **imaginary unit** with property $i^2 = -1$

### Real and Imaginary Parts

<Equation label="RealPart" tex="\text{Re}(z) = a" />

<Equation label="ImagPart" tex="\text{Im}(z) = b" />

### Modulus (Magnitude)

The modulus of $z$ represents its distance from the origin in the complex plane:

<Equation label="Modulus" tex="|z| = \sqrt{a^2 + b^2}" />

### Complex Conjugate

The conjugate of $z$ reflects it across the real axis:

<Equation label="Conjugate" tex="z^* = a - bi" />

### Euler's Formula Connection

Complex numbers can be expressed in **polar form** using Euler's formula:

<Equation label="EulerForm" tex="z = re^{i\theta} = r(\cos\theta + i\sin\theta)" />

where:
- $r = |z|$ is the modulus
- $\theta = \arg(z)$ is the argument (angle)

This connection between algebraic and exponential forms is fundamental to complex analysis.`;
