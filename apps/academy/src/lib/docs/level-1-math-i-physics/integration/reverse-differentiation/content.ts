export const content = String.raw`## Integration as Reverse Differentiation

Integration is fundamentally the **inverse operation** of differentiation. Where differentiation finds the rate of change, integration accumulates quantities.

### The Reversal

<Equation label="Derivative" tex="\frac{d}{dx}[F(x)] = f(x) \quad \Rightarrow \quad \int f(x) \, dx = F(x) + C" />

If \(\frac{d}{dx}(x^3) = 3x^2\), then \(\int 3x^2 \, dx = x^3 + C\).

### Power Rule Reversal

The differentiation rule: \(\frac{d}{dx}(x^n) = nx^{n-1}\)

The integration rule (reverse):

<Equation label="Integration Power Rule" tex="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad \text{for } n \neq -1" />

**Why this works:** Differentiating \(\frac{x^{n+1}}{n+1}\) gives \(x^n\).

### Common Patterns

| Differentiation | Integration (Reverse) |
|-----------------|------------------------|
| \(\frac{d}{dx}[\sin x] = \cos x\) | \(\int \cos x \, dx = \sin x + C\) |
| \(\frac{d}{dx}[\cos x] = -\sin x\) | \(\int \sin x \, dx = -\cos x + C\) |
| \(\frac{d}{dx}[e^x] = e^x\) | \(\int e^x \, dx = e^x + C\) |
| \(\frac{d}{dx}[\ln x] = \frac{1}{x}\) | \(\int \frac{1}{x} \, dx = \ln|x| + C\) |

### Linear Functions

For \(\int (ax + b)^n \, dx\) where \(n \neq -1\):

<Equation label="Linear Power" tex="\int (ax + b)^n \, dx = \frac{(ax + b)^{n+1}}{a(n+1)} + C" />

**Example:** \(\int (2x + 1)^4 \, dx = \frac{(2x+1)^5}{2 \cdot 5} + C = \frac{(2x+1)^5}{10} + C\)

### Verifying Results

Always differentiate your answer to verify it's correct:

<Equation label="Verification" tex="\frac{d}{dx}\left(\frac{x^{n+1}}{n+1} + C\right) = x^n \checkmark" />

This reverse relationship is why integration is often called "antidifferentiation."
`;
