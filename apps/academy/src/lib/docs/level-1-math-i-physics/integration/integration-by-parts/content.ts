export const content = String.raw`## Integration by Parts

**Integration by parts** integrates products of functions. It's based on the product rule for differentiation reversed.

### The Formula

<Equation label="IBP Formula" tex="\int u \, dv = uv - \int v \, du" />

This is derived from:
<Equation label="Derivation" tex="\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx} \Rightarrow u\,dv = d(uv) - v\,du" />

### Choosing u and dv

Use the **LIATE** rule (prioritize in this order):
- **L**ogarithmic
- **I**nverse trigonometric
- **A**lgebraic
- **T**rigonometric
- **E**xponential

### Examples

**Example 1:** \(\int x e^x \, dx\)

Let \(u = x\) (algebraic), \(dv = e^x \, dx\) (exponential):

<Equation label="Example 1" tex="u = x \Rightarrow du = dx, \quad dv = e^x \, dx \Rightarrow v = e^x" />

<Equation label="Result 1" tex="\int x e^x \, dx = xe^x - \int e^x \, dx = xe^x - e^x + C = e^x(x - 1) + C" />

**Example 2:** \(\int \ln x \, dx\)

Let \(u = \ln x\) (logarithmic), \(dv = dx\):

<Equation label="Example 2" tex="u = \ln x \Rightarrow du = \frac{1}{x}dx, \quad v = x" />

<Equation label="Result 2" tex="\int \ln x \, dx = x\ln x - \int x \cdot \frac{1}{x}dx = x\ln x - \int 1 \, dx = x\ln x - x + C" />

### Repeated Integration by Parts

For integrals like \(\int e^x \sin x \, dx\), apply IBP twice:

<Equation label="Repeated" tex="\int e^x \sin x \, dx = e^x \sin x - \int e^x \cos x \, dx" />

Then apply IBP again to the remaining integral and solve for the original integral algebraically.

### Tabular Method

For repeated differentiation of one factor, use a table:

| u | dv |
|---|----|
| \(x^2\) | \(e^x\) |
| \(2x\) | \(e^x\) |
| \(2\) | \(e^x\) |
| \(0\) | \(e^x\) |

This efficiently handles products like \(\int x^2 e^x \, dx\).
`;
