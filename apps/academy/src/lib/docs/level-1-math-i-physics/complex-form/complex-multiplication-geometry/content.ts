export const content = String.raw`## Geometric Interpretation of Complex Multiplication

Multiplication of complex numbers has an elegant geometric interpretation involving rotation and scaling.

### Multiplication as Rotation and Scaling

Let \(z_1 = r_1e^{i\theta_1}\) and \(z_2 = r_2e^{i\theta_2}\). Their product is:

<Equation label="Multiplication" tex="z_1 z_2 = r_1 r_2 e^{i(\theta_1 + \theta_2)}" />

This shows:
- The **moduli multiply**: \(|z_1 z_2| = |z_1| \cdot |z_2|\)
- The **arguments add**: \(\arg(z_1 z_2) = \arg(z_1) + \arg(z_2)\)

### Geometric Meaning

Multiplication by a complex number \(re^{i\theta}\) performs:
1. **Scaling** by factor \(r\) (stretch or shrink)
2. **Rotation** by angle \(\theta\) counterclockwise

For example, multiplying by \(i\) rotates by \(\frac{\pi}{2}\):
- \(i \cdot (a + bi) = -b + ai\)

### Special Cases

- Multiplying by \(e^{i\theta}\) rotates by \(\theta\) without scaling (\(r = 1\))
- Multiplying by \(-1\) rotates by \(\pi\) (180°)
- Multiplying by \(i\) rotates by \(\frac{\pi}{2}\) (90°)

<Equation label="Unit Circle" tex="|z| = 1 \implies z = e^{i\theta}, \quad \text{multiplication is pure rotation}" />

Complex multiplication unifies scaling and rotation into a single operation in the complex plane.`;
