export const content = String.raw`## Principle

Partial sums turn an infinite series into a sequence of finite calculations. If those finite sums approach one stable finite value, the infinite series converges to that value; if they do not, the series diverges.

For physics models, partial sums are the practical approximations: use the first few contributions, then decide whether adding more terms is settling the result or driving it away.

## Notation

- \\(S_N\\) is the partial sum using terms up to the index \\(N\\).
- \\(a_n\\) is the term with index \\(n\\).
- \\(N\\) is the number of included terms when the series starts at \\(n=1\\).
- \\(\lim_{N\to\infty}S_N\\) is the limiting value of the partial sums, if it exists.
- A series converges when \\(S_N\\) approaches a finite limit.
- A series diverges when \\(S_N\\) has no finite limit.

## Method

To test an infinite series using partial sums, keep the terms and the partial sums separate.

1. Write the term formula \\(a_n\\).
2. Form the finite partial sum \\(S_N\\).
3. Study \\(\lim_{N\to\infty}S_N\\).
4. Before doing more work, check the necessary term condition: if \\(a_n\\) does not tend to \\(0\\), the series diverges.
5. If \\(a_n\to0\\), continue with a stronger argument; the term condition alone does not prove convergence.

<Equation label="Partial sum" tex="S_N=\sum_{n=1}^{N}a_n" />

<Equation label="Series convergence" tex="\sum_{n=1}^{\infty}a_n=S\quad\text{means}\quad \lim_{N\to\infty}S_N=S" />

## Rules

- The partial sum is \\(S_N=\sum_{n=1}^{N}a_n\\) when the series starts at \\(n=1\\).
- Convergence means the sequence \\(S_1,S_2,S_3,\ldots\\) has a finite limit.
- If \\(\lim_{n\to\infty}a_n\ne0\\), then \\(\sum a_n\\) diverges.
- The condition \\(a_n\to0\\) is necessary for convergence but not sufficient.
- Infinite sums should not be rearranged unless a valid convergence result permits it.

## Examples

For the arithmetic series \\(\sum_{n=1}^{\infty}n\\), the partial sums are explicit:

<Equation label="Arithmetic partial sum" tex="\sum_{n=1}^{N}n=\frac{N(N+1)}{2}" />

As \\(N\\) grows, \\(N(N+1)/2\\) grows without bound, so the arithmetic series diverges.

For the harmonic series \\(\sum_{n=1}^{\infty}1/n\\), the terms \\(a_n=1/n\\) tend to \\(0\\). That passes only the necessary term check. The partial sums still grow without a finite limiting value, so the harmonic series diverges.

The contrast is important: \\(\sum n\\) fails because the terms do not tend to zero, while \\(\sum 1/n\\) shows that terms tending to zero can still leave divergent partial sums.

## Checks

- Check the limit of partial sums, not only the limit of the terms.
- Do not treat \\(a_n\to0\\) as proof of convergence.
- If \\(a_n\\) does not tend to \\(0\\), stop: the series diverges.
- Avoid rearranging the terms of an infinite series without a convergence reason.`;
