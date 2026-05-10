export const content = String.raw`## Real Part Function

The real part function extracts the real component of a complex number.

### Definition

For $z = a + bi$:

<Equation label="Definition" tex="\text{Re}(z) = a" />

### Properties

<Equation label="Addition" tex="\text{Re}(z_1 + z_2) = \text{Re}(z_1) + \text{Re}(z_2)" />

<Equation label="Scalar" tex="\text{Re}(cz) = c\text{Re}(z) \quad \text{for } c \in \mathbb{R}" />

<Equation label="NotProduct" tex="\text{Re}(z_1 z_2) \neq \text{Re}(z_1)\text{Re}(z_2)" />

### Expressing Re(z) with Conjugate

<Equation label="ConjugateExpr" tex="\text{Re}(z) = \frac{z + z^*}{2}" />

### In Polar Form

If $z = re^{i\theta}$:

<Equation label="PolarRe" tex="\text{Re}(z) = r\cos\theta" />

The real part is the projection of the vector onto the real axis.

### Example

<Equation label="Example" tex="\text{Re}(3 + 4i) = 3" />

<Equation label="PolarExample" tex="\text{Re}(5e^{i\pi/3}) = 5\cos\frac{\pi}{3} = 5 \cdot \frac{1}{2} = 2.5" />`;