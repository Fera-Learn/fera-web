export const content = String.raw`## The Binomial Theorem

The binomial theorem provides a formula for expanding expressions of the form \((a + b)^n\) where \(n\) is a non-negative integer.

<Equation label="Binomial Theorem" tex="(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k" />

This expansion produces \(n + 1\) terms, with the coefficients given by binomial coefficients \(\binom{n}{k}\).

### Expansion Pattern

For \((a + b)^n\):
- Term \(k+1\) (for \(k = 0, 1, \ldots, n\)): \(\binom{n}{k} a^{n-k} b^k\)
- Powers of \(a\) decrease from \(n\) to \(0\)
- Powers of \(b\) increase from \(0\) to \(n\)

### Examples

**\((a + b)^2 = a^2 + 2ab + b^2\)**

**\((a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\)**

**\((x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4\)**

## Binomial Coefficients in Expansion

The coefficients \(\binom{n}{0}, \binom{n}{1}, \ldots, \binom{n}{n}\) appear in the expansion of \((a + b)^n\). These can be found using Pascal's triangle or the factorial formula.

<Equation label="General Term" tex="T_{k+1} = \binom{n}{k} a^{n-k} b^k \quad \text{for } k = 0, 1, \ldots, n" />

## The Binomial Series

The binomial series extends the binomial theorem to cases where \(n\) is not a positive integer. For \(|x| < 1\):

<Equation label="Binomial Series" tex="(1 + x)^n = \sum_{k=0}^{\infty} \binom{n}{k} x^k" />

where for any real \(n\):
<Equation label="Generalized Binomial Coefficient" tex="\binom{n}{k} = \frac{n(n-1)(n-2)\cdots(n-k+1)}{k!}" />

### Special Cases

<Equation label="Series for (1+x)^{-1}" tex="(1 + x)^{-1} = 1 - x + x^2 - x^3 + \cdots" />

<Equation label="Series for (1+x)^{1/2}" tex="(1 + x)^{1/2} = 1 + \frac{1}{2}x - \frac{1}{8}x^2 + \frac{1}{16}x^3 - \cdots"</ />
`;
