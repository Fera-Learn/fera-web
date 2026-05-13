export const content = String.raw`## Multiplying Complex Numbers

Complex multiplication uses the distributive property and the key identity \(i^2 = -1\).

### Multiplication Formula

For \(z_1 = a + bi\) and \(z_2 = c + di\):

<Equation label="Multiplication" tex="z_1 \cdot z_2 = (ac - bd) + (ad + bc)i" />

### Derivation

<Equation label="FOIL" tex="(a + bi)(c + di) = ac + adi + bci + bdi^2" />

<Equation label="Simplify" tex="= ac + adi + bci - bd" />

<Equation label="Combine" tex="= (ac - bd) + (ad + bc)i" />

### Geometric Meaning

Multiplication by a complex number causes both **rotation and scaling**:
- The modulus multiplies: \(|z_1 z_2| = |z_1| \cdot |z_2|\)
- The argument adds: \(\arg(z_1 z_2) = \arg(z_1) + \arg(z_2)\)

<Equation label="PolarMult" tex="(r_1 e^{i\theta_1})(r_2 e^{i\theta_2}) = r_1 r_2 e^{i(\theta_1 + \theta_2)}" />

This makes multiplication by \(e^{i\theta}\) a pure rotation by angle \(\theta\).

### Example

<Equation label="Example" tex="(1 + i)(2 + 3i) = 2 + 3i + 2i + 3i^2 = -1 + 5i" />`;
