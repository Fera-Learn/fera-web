export const content = String.raw`## Imaginary Part Function

The imaginary part function extracts the imaginary coefficient of a complex number.

### Definition

For $z = a + bi$:

<Equation label="Definition" tex="\text{Im}(z) = b" />

Note: $\text{Im}(z)$ is a real number, not $bi$.

### Properties

<Equation label="Addition" tex="\text{Im}(z_1 + z_2) = \text{Im}(z_1) + \text{Im}(z_2)" />

<Equation label="Scalar" tex="\text{Im}(cz) = c\text{Im}(z) \quad \text{for } c \in \mathbb{R}" />

<Equation label="NotProduct" tex="\text{Im}(z_1 z_2) \neq \text{Im}(z_1)\text{Im}(z_2)" />

### Expressing Im(z) with Conjugate

<Equation label="ConjugateExpr" tex="\text{Im}(z) = \frac{z - z^*}{2i}" />

### In Polar Form

If $z = re^{i\theta}$:

<Equation label="PolarIm" tex="\text{Im}(z) = r\sin\theta" />

The imaginary part is the projection of the vector onto the imaginary axis.

### Example

<Equation label="Example" tex="\text{Im}(3 + 4i) = 4" />

<Equation label="PolarExample" tex="\text{Im}(5e^{i\pi/3}) = 5\sin\frac{\pi}{3} = 5 \cdot \frac{\sqrt{3}}{2} = \frac{5\sqrt{3}}{2}" />`;
