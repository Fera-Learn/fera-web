export const content = String.raw`## Geometric Interpretation of Complex Addition

Complex numbers can be added geometrically using vectors in the complex plane.

### Vector Representation

Each complex number $z = a + bi$ corresponds to a vector from the origin to the point $(a, b)$. The addition of two complex numbers follows the **parallelogram law**.

### The Parallelogram Law

To add $z_1 = a_1 + b_1i$ and $z_2 = a_2 + b_2i$:

<Equation label="Complex Addition" tex="z_1 + z_2 = (a_1 + a_2) + (b_1 + b_2)i" />

Geometrically:
1. Draw vectors representing $z_1$ and $z_2$ from the origin
2. Complete the parallelogram with these as adjacent sides
3. The diagonal from the origin gives the sum $z_1 + z_2$

### Geometric Properties

The modulus of the sum satisfies the **triangle inequality**:

<Equation label="Triangle Inequality" tex="|z_1 + z_2| \leq |z_1| + |z_2|" />

Equality holds when the vectors point in the same direction.

Also, the difference $z_1 - z_2$ represents the vector from $z_2$ to $z_1$:

<Equation label="Complex Subtraction" tex="z_1 - z_2 = (a_1 - a_2) + (b_1 - b_2)i" />

This geometric interpretation makes complex addition equivalent to vector addition in $\mathbb{R}^2$.`;
