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
- The translated copy of \(z_2\) runs from the tip of \(z_1\) to the final tip, but the resultant sum starts at the origin

<Equation label="VectorSum" tex="\overrightarrow{0z_1}+\overrightarrow{0z_2}=\overrightarrow{0(z_1+z_2)}" />

### Properties

Complex addition is:
- **Commutative**: \(z_1 + z_2 = z_2 + z_1\)
- **Associative**: \((z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)\)
- **Has identity** \(0\): \(z + 0 = z\)

### Example

<Equation label="Example" tex="(3 + 2i) + (1 + 4i) = 4 + 6i" />

The result has real part 4 and imaginary part 6.`;
