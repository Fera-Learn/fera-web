export const content = String.raw`## De Moivre's Theorem

De Moivre's theorem provides a powerful formula for raising complex numbers to integer powers.

### The Theorem

For any real angle \(\theta\) and integer \(n\):

<Equation label="De Moivre" tex="(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)" />

This can also be written using exponential form:

<Equation label="Exponential Form" tex="(e^{i\theta})^n = e^{in\theta}" />

### Applications to Powers

De Moivre's theorem simplifies calculating powers of complex numbers in polar form.

If \(z = r(\cos\theta + i\sin\theta)\), then:

<Equation label="Power" tex="z^n = r^n(\cos(n\theta) + i\sin(n\theta))" />

For example, to find \((1 + i)^4\):
- Write in polar form: \(1 + i = \sqrt{2} \text{cis} \frac{\pi}{4}\)
- Apply De Moivre: \((\sqrt{2})^4 \text{cis} \pi = 4 \text{cis} \pi = -4\)

### Finding Roots

To find the \(n\)-th roots of a complex number \(z = r\text{cis}\theta\):

<Equation label="Roots" tex="z_k = r^{1/n} \text{cis}\left(\frac{\theta + 2k\pi}{n}\right), \quad k = 0, 1, \dots, n-1" />

This gives \(n\) distinct roots evenly spaced around a circle in the complex plane.`;
