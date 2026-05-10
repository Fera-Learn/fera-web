export const content = String.raw`## Modulus (Absolute Value)

The modulus of a complex number represents its distance from the origin in the complex plane.

### Definition

For $z = a + bi$:

<Equation label="Definition" tex="|z| = \sqrt{a^2 + b^2}" />

The modulus is always a non-negative real number.

### Geometric Interpretation

The modulus is the **length of the vector** representing $z$ in the complex plane. By the Pythagorean theorem:

<Equation label="Pythagorean" tex="|z|^2 = a^2 + b^2" />

### Properties

<Equation label="Positive" tex="|z| \geq 0 \quad \text{and} \quad |z| = 0 \iff z = 0" />

<Equation label="Product" tex="|z_1 z_2| = |z_1| \cdot |z_2|" />

<Equation label="Quotient" tex="\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|} \quad (z_2 \neq 0)" />

### Connection to Conjugate

<Equation label="Conjugate" tex="|z|^2 = z \cdot z^*" />

This provides an alternative formula: $|z| = \sqrt{z \cdot z^*}$

### In Polar Form

If $z = re^{i\theta}$, then:

<Equation label="PolarMod" tex="|z| = r" />

The modulus in polar form is simply $r$, the distance from origin.

### Example

<Equation label="Example" tex="|3 + 4i| = \sqrt{9 + 16} = \sqrt{25} = 5" />`;
