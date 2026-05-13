export const content = String.raw`## Argument of Complex Numbers

The argument of a complex number is the angle it makes with the positive real axis in the complex plane.

### Definition

<Equation label="Argument" tex="\arg(z) = \theta \quad \text{where} \quad z = re^{i\theta}" />

The argument can be expressed in radians or degrees.

### Principal Argument

The **principal argument** \(\text{Arg}(z)\) is the unique argument in the interval \((-\pi, \pi]\):

<Equation label="Principal Argument" tex="\text{Arg}(z) \in (-\pi, \pi]" />

For example:
- \(\text{Arg}(1 + i) = \frac{\pi}{4}\)
- \(\text{Arg}(1 - i) = -\frac{\pi}{4}\)
- \(\text{Arg}(-1) = \pi\)

### Multiple Values

The general argument has infinitely many values differing by integer multiples of \(2\pi\):

<Equation label="General Argument" tex="\arg(z) = \text{Arg}(z) + 2k\pi, \quad k \in \mathbb{Z}" />

For instance, \(\arg(1) = 2k\pi\) for any integer \(k\).

### Angle Notation

The shorthand notation \(\text{cis}\theta\) represents \(\cos\theta + i\sin\theta\):

<Equation label="Cis Notation" tex="\text{cis}\theta = \cos\theta + i\sin\theta = e^{i\theta}" />

This allows us to write polar form compactly as \(z = r\text{cis}\theta\).`;
