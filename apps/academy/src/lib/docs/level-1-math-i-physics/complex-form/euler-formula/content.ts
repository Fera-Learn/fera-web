export const content = String.raw`## Euler's Formula

Euler's formula is one of the most beautiful results in mathematics, connecting exponential and trigonometric functions.

### The Formula

<Equation label="Euler's Formula" tex="e^{i\theta} = \cos\theta + i\sin\theta" />

This remarkable equation shows that complex exponentials are intimately related to circular motion.

### Derivation

Using the Taylor series expansions:

<Equation label="Exponential Series" tex="e^{i\theta} = 1 + i\theta + \frac{(i\theta)^2}{2!} + \frac{(i\theta)^3}{3!} + \cdots" />

<Equation label="Cosine Series" tex="\cos\theta = 1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots" />

<Equation label="Sine Series" tex="\sin\theta = \theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \cdots" />

Substituting and grouping real and imaginary terms yields \(e^{i\theta} = \cos\theta + i\sin\theta\).

### Special Cases

Setting \(\theta = \pi\) gives the famous **Euler's identity**:

<Equation label="Euler's Identity" tex="e^{i\pi} + 1 = 0" />

This connects five fundamental constants: \(e\), \(i\), \(\pi\), \(1\), and \(0\).

Other useful forms:
- \(e^{-i\theta} = \cos\theta - i\sin\theta\)
- \(\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}\)
- \(\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}\)`;
