export const content = String.raw`## Principle

Negative terms create cancellation. A series with mixed signs can behave differently from a positive series because later terms may subtract from earlier partial sums instead of only adding to them.

This matters in physics whenever opposite contributions appear, such as signed displacements, alternating corrections, or positive and negative charges.

## Notation

- \\(a_n\\) is the signed term of the series.
- A positive term has \\(a_n\gt0\\).
- A negative term has \\(a_n\lt0\\).
- \\(|a_n|\\) is the magnitude of the term, ignoring its sign.
- Finitely many negative terms means only a fixed initial or scattered finite set of terms is negative.
- An alternating series has signs that switch between positive and negative.
- A rearrangement changes the order in which terms are added.

## Method

Separate mixed-sign series into cases before choosing a test.

1. If only finitely many terms are negative, ignore those finite changes for convergence and test the non-negative tail.
2. If infinitely many signs occur, inspect the sign pattern.
3. If the signs alternate regularly, check whether an alternating-series argument applies.
4. Test the absolute-value series \\(\sum |a_n|\\) when rearrangement safety or stronger convergence is needed.
5. Keep the original order unless a convergence theorem justifies changing it.

<Equation label="Alternating harmonic series" tex="\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}=1-\frac12+\frac13-\frac14+\cdots" />

<Equation label="Alternating term form" tex="a_n=(-1)^{n+1}|a_n|" />

## Rules

- Changing finitely many initial terms does not change whether an infinite series converges.
- Cancellation can make a mixed-sign series converge even when the corresponding positive-term intuition is not enough.
- Positive-series tests apply directly only to non-negative terms; for mixed signs, apply them to \\(|a_n|\\) when testing absolute convergence.
- Rearranging conditionally convergent terms can change the sum, so order matters.

## Examples

The alternating harmonic series has terms that switch signs:

<Equation label="Alternating harmonic terms" tex="1,-\frac12,\frac13,-\frac14,\frac15,-\frac16,\ldots" />

Its magnitudes are \\(1,1/2,1/3,1/4,\ldots\\), which tend to \\(0\\), while the signs alternate. The cancellation between positive and negative terms is the feature that must be analyzed.

The signed terms are not non-negative, so a positive-series comparison cannot be applied directly to \\(\sum (-1)^{n+1}/n\\).

## Checks

- Do not apply positive-series tests directly to mixed-sign terms.
- Check whether the sign pattern is eventually alternating or irregular.
- Check whether there are only finitely many negative terms before treating the tail as non-negative.
- Do not rearrange terms unless absolute convergence has been established.`;
