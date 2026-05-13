export const content = String.raw`## Adding Complex Numbers

Complex addition is performed component-wise, adding real parts and imaginary parts separately.

### Component-Wise Addition

For two complex numbers \(z_1 = a + bi\) and \(z_2 = c + di\):

<Equation label="Addition" tex="z_1 + z_2 = (a + c) + (b + d)i" />

### Geometric Interpretation

Adding complex numbers corresponds to **vector addition** in the complex plane:
- Each complex number is a vector from the origin
- Adding \(z_1 + z_2\) means placing the vectors tip-to-tail
- The resulting vector goes from the origin to the sum

<Equation label="VectorSum" tex="\vec{z_1} + \vec{z_2} = \overrightarrow{\text{tip of } z_1 \text{ to tip of combined}}" />

### Properties

Complex addition is:
- **Commutative**: \(z_1 + z_2 = z_2 + z_1\)
- **Associative**: \((z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)\)
- **Has identity** \(0\): \(z + 0 = z\)

### Example

<Equation label="Example" tex="(3 + 2i) + (1 + 4i) = 4 + 6i" />

The result has real part 4 and imaginary part 6.`;
