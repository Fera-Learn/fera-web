export const content = String.raw`## Complex Conjugate

The complex conjugate reflects a complex number across the real axis in the complex plane.

### Definition

For $z = a + bi$, the conjugate is:

<Equation label="Definition" tex="z^* = a - bi" />

The imaginary part changes sign while the real part stays the same.

### Key Properties

<Equation label="Product" tex="z \cdot z^* = a^2 + b^2 = |z|^2" />

<Equation label="Sum" tex="z + z^* = 2a = 2\text{Re}(z)" />

<Equation label="Difference" tex="z - z^* = 2bi = 2i\text{Im}(z)" />

### Conjugate Rules

<Equation label="SumConj" tex="(z_1 + z_2)^* = z_1^* + z_2^*" />

<Equation label="ProductConj" tex="(z_1 z_2)^* = z_1^* z_2^*" />

<Equation label="QuotientConj" tex="\left(\frac{z_1}{z_2}\right)^* = \frac{z_1^*}{z_2^*}" />

### Using Conjugate to Divide

The conjugate is essential for making the denominator real:

<Equation label="DivideUsing" tex="\frac{z_1}{z_2} = \frac{z_1 z_2^*}{z_2 z_2^*} = \frac{z_1 z_2^*}{|z_2|^2}" />

### In Polar Form

If $z = re^{i\theta}$, then:

<Equation label="PolarConj" tex="z^* = re^{-i\theta}" />

The modulus stays the same, but the angle is negated.`;