export const content = String.raw`## Principle

A positive series has non-negative terms. Its partial sums can only stay the same or increase, so the key question is boundedness: do the increasing partial sums stay below some fixed ceiling, or do they grow without bound?

For physics, positive series occur when adding magnitudes, energies, probabilities, or other contributions that cannot subtract from the total.

## Notation

- \\(a_n\ge0\\) means every term is non-negative.
- \\(S_N\\) is the partial sum through index \\(N\\).
- Bounded above means there is a fixed number \\(M\\) such that \\(S_N\le M\\) for every \\(N\\).
- An increasing sequence satisfies \\(S_{N+1}\ge S_N\\) for every \\(N\\).
- Convergence means the partial sums approach a finite limit.
- Divergence to infinity means the partial sums grow beyond every finite bound.

## Method

To analyze a positive series, focus on partial sums.

1. Verify that \\(a_n\ge0\\) for all relevant indices.
2. Write the partial sums \\(S_N\\).
3. Use non-negativity to show the partial sums are increasing.
4. Decide whether the increasing partial sums are bounded above.
5. If they are bounded above, the series converges; if they are unbounded, it diverges to infinity.

<Equation label="Positive terms" tex="a_n\ge0\quad\text{for all }n" />

<Equation label="Increasing partial sums" tex="S_{N+1}=S_N+a_{N+1}\ge S_N" />

<Equation label="Bounded convergence idea" tex="0\le S_N\le M\quad\text{for all }N" />

## Rules

- Non-negative terms make the partial sums increasing.
- An increasing sequence of partial sums converges when it is bounded above.
- Unbounded positive partial sums diverge to infinity.
- For positive series, convergence tests often prove boundedness without giving the exact sum.

## Examples

The series \\(\sum_{n=1}^{\infty}1/n^2\\) has positive terms because \\(1/n^2\gt0\\) for every positive integer \\(n\\). Its partial sums increase:

<Equation label="Positive square partial sums" tex="S_N=1+\frac14+\frac19+\cdots+\frac{1}{N^2}" />

The exact sum is not needed to discuss convergence. A comparison test can show that these increasing partial sums stay bounded, so the series converges even before its value is known.

This is the typical positive-series pattern: increasing is automatic, and boundedness is the real issue.

## Checks

- Verify non-negativity before applying positive-series tests.
- Do not assume increasing partial sums are divergent; increasing and bounded is convergent.
- Do not confuse knowing a series converges with knowing its exact sum.
- Look for an upper bound when terms are non-negative.`;
