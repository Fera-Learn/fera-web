export const content = String.raw`## Principle

Conditional convergence occurs when a signed series converges because of cancellation, but the series of absolute values diverges. The convergence is real, but it depends on the order and signs of the terms.

This is the mathematical warning behind many alternating approximations in physics: cancellation can stabilize a value, while the total magnitude of all corrections is not finite.

## Notation

- \\(a_n\\) is the signed term of the series.
- \\(|a_n|\\) is the magnitude of the term.
- An alternating series has terms whose signs switch between positive and negative.
- Decreasing magnitudes means \\(|a_{n+1}|\le |a_n|\\) eventually.
- Conditional convergence means \\(\sum a_n\\) converges but \\(\sum |a_n|\\) diverges.
- Absolute convergence means \\(\sum |a_n|\\) converges.

## Method

To test for conditional convergence, compare ordinary convergence with absolute convergence.

1. Test the original signed series \\(\sum a_n\\) for ordinary convergence.
2. Test the absolute-value series \\(\sum |a_n|\\).
3. If the signed series converges but the absolute-value series diverges, the convergence is conditional.
4. For an alternating series, check that the magnitudes tend to \\(0\\) and eventually decrease.
5. Keep the order of a conditionally convergent series fixed unless a theorem justifies the change.

<Equation label="Conditional convergence" tex="\sum a_n\text{ converges but }\sum |a_n|\text{ diverges}" />

<Equation label="Alternating sign test" tex="|a_n|\to0\quad\text{and}\quad |a_{n+1}|\le |a_n|\text{ eventually}" />

## Rules

- The alternating sign test proves ordinary convergence when magnitudes tend to zero and eventually decrease.
- The alternating sign test does not prove absolute convergence.
- Conditional convergence requires two facts: the original series converges, and the absolute-value series diverges.
- Rearranging a conditionally convergent series can change its sum, so rearrangements are not casual algebra.

## Examples

The alternating harmonic series is conditionally convergent.

<Equation label="Alternating harmonic absolute values" tex="\sum_{n=1}^{\infty}\left|\frac{(-1)^{n+1}}{n}\right|=\sum_{n=1}^{\infty}\frac1n" />

For ordinary convergence, the magnitudes \\(1/n\\) tend to \\(0\\) and decrease as \\(n\\) increases, so the alternating sign test applies.

For absolute convergence, the absolute-value series is the harmonic series \\(\sum_{n=1}^{\infty}1/n\\), and the harmonic series diverges. Therefore the alternating harmonic series converges conditionally.

## Checks

- Verify both alternating-test conditions: magnitudes tend to \\(0\\), and magnitudes eventually decrease.
- Check absolute convergence separately; ordinary convergence is not enough.
- Confirm that the harmonic absolute-value series diverges in the alternating harmonic example.
- Never rearrange a conditionally convergent series casually.`;
