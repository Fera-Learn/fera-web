export const content = String.raw`## Dividing Complex Numbers

Complex division requires eliminating the imaginary part from the denominator.

### Division Formula

For $z_1 = a + bi$ and $z_2 = c + di \neq 0$:

<Equation label="Division" tex="\frac{z_1}{z_2} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}" />

### Method: Using the Conjugate

Multiply numerator and denominator by the conjugate of the denominator:

<Equation label="ConjugateMethod" tex="\frac{z_1}{z_2} = \frac{z_1 \cdot z_2^*}{z_2 \cdot z_2^*}" />

### Reciprocal of a Complex Number

<Equation label="Reciprocal" tex="\frac{1}{a + bi} = \frac{a - bi}{a^2 + b^2}" />

The denominator $a^2 + b^2 = |z|^2$ is always real and positive.

### Verification

<Equation label="Verify" tex="(a + bi)\frac{a - bi}{a^2 + b^2} = \frac{a^2 + b^2}{a^2 + b^2} = 1" />

### Example

<Equation label="Example" tex="\frac{1 + i}{2 - i} = \frac{(1 + i)(2 + i)}{(2 - i)(2 + i)} = \frac{2 + i + 2i + i^2}{4 + 1} = \frac{1 + 3i}{5} = \frac{1}{5} + \frac{3}{5}i" />`;
