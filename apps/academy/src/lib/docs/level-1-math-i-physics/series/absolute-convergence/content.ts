export const content = String.raw`## Principle

A series is absolutely convergent when the series of magnitudes converges. Absolute convergence is stronger than ordinary convergence: it proves the original signed series converges and gives much safer algebraic behavior.

For physics, this is useful when positive and negative corrections both occur but the total size of all corrections is still controlled.

## Notation

- \\(\sum a_n\\) is the original signed series.
- \\(\sum |a_n|\\) is the absolute-value series.
- \\(|a_n|\\) is the magnitude of the term \\(a_n\\).
- Absolute convergence means \\(\sum |a_n|\\) converges.
- Ordinary convergence means \\(\sum a_n\\) converges without first taking absolute values.

## Method

To test absolute convergence, convert the problem into a non-negative series.

1. Start with the original terms \\(a_n\\).
2. Replace each term by its magnitude \\(|a_n|\\).
3. Test the non-negative series \\(\sum |a_n|\\) using comparison, ratio, root, or integral tests.
4. If \\(\sum |a_n|\\) converges, conclude that \\(\sum a_n\\) converges absolutely and therefore ordinarily.
5. If \\(\sum |a_n|\\) diverges, ordinary convergence still needs a separate test.

<Equation label="Absolute convergence" tex="\sum_{n=1}^{\infty}|a_n|\text{ converges}" />

<Equation label="Absolute implies ordinary" tex="\sum |a_n|\text{ converges}\quad\Rightarrow\quad\sum a_n\text{ converges}" />

## Rules

- Absolute convergence implies ordinary convergence.
- Absolute convergence is stronger than ordinary convergence because it controls the total magnitude, not just cancellation.
- Comparison, ratio, and root tests can be applied to \\(|a_n|\\).
- Rearrangements are safe for absolutely convergent series; changing the order does not change the sum.
- Divergence of \\(\sum |a_n|\\) does not by itself prove divergence of \\(\sum a_n\\).

## Examples

The series \\(\sum_{n=1}^{\infty}(-1)^n/n^2\\) is absolutely convergent because its absolute-value series is a convergent p-series. The p-series rule says \\(\sum 1/n^p\\) converges when \\(p>1\\).

<Equation label="Alternating square example" tex="\sum_{n=1}^{\infty}\left|\frac{(-1)^n}{n^2}\right|=\sum_{n=1}^{\infty}\frac{1}{n^2}" />

Since \\(\sum_{n=1}^{\infty}1/n^2\\) converges, the original signed series also converges. The conclusion does not depend on cancellation; it follows from the positive series of magnitudes.

## Checks

- Do not drop absolute values before finishing the absolute-value test.
- Distinguish absolute convergence from ordinary convergence.
- Test \\(\sum |a_n|\\) independently; do not assume it behaves like \\(\sum a_n\\).
- If \\(\sum |a_n|\\) diverges, look for a separate ordinary-convergence argument before deciding the original series.`;
