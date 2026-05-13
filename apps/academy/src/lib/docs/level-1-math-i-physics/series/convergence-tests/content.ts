export const content = String.raw`## Principle

Convergence tests decide whether a non-negative infinite series has a finite sum even when that sum is not known. They compare the tail of the series with behavior that is already understood.

This is often enough for physics models: knowing that an approximation stabilizes can be more important than knowing the exact limiting value.

## Notation

- \\(a_n\\) is the non-negative term of the series being tested.
- \\(b_n\\) is the term of a comparison series.
- \\(\rho\\) is the limiting value used in the ratio or root test.
- A comparison series is a known series used to bound or compare \\(\sum a_n\\).
- The ratio test studies \\(a_{n+1}/a_n\\).
- The root test studies \\(a_n^{1/n}\\).
- The integral test compares \\(\sum a_n\\) with an improper integral of a positive decreasing function.

## Method

Use a decision sequence rather than trying tests at random.

1. Check the term limit. If \\(a_n\\) does not tend to \\(0\\), the series diverges.
2. Compare with a known geometric series or \\(p\\)-series when the terms have similar size.
3. Try the ratio test for factorials, exponentials, and powers multiplied together.
4. Try the root test when the whole term is raised to a power depending on \\(n\\).
5. Try the integral test for terms coming from functions like \\(1/n^q\\), after checking positivity and decreasing behavior.

<Equation label="Ratio test" tex="\rho=\lim_{n\to\infty}\frac{a_{n+1}}{a_n}" />

<Equation label="Root test" tex="\rho=\lim_{n\to\infty}a_n^{1/n}" />

<Equation label="p-series result" tex="\sum_{n=1}^{\infty}\frac{1}{n^q}\text{ converges exactly when }q\gt1" />

## Rules

- Comparison test: if \\(0\le a_n\le b_n\\) eventually and \\(\sum b_n\\) converges, then \\(\sum a_n\\) converges.
- Comparison test for divergence: if \\(a_n\ge b_n\ge0\\) eventually and \\(\sum b_n\\) diverges, then \\(\sum a_n\\) diverges.
- Limit comparison: if \\(\lim_{n\to\infty}a_n/b_n=L\\) with \\(0\lt L\lt\infty\\), then \\(\sum a_n\\) and \\(\sum b_n\\) have the same convergence behavior.
- Ratio test: if \\(\rho\lt1\\), the series converges; if \\(\rho\gt1\\), it diverges; if \\(\rho=1\\), the test is inconclusive.
- Root test: if \\(\rho\lt1\\), the series converges; if \\(\rho\gt1\\), it diverges; if \\(\rho=1\\), the test is inconclusive.
- Integral test: if \\(a_n=f(n)\\) where \\(f\\) is positive and decreasing, then \\(\sum a_n\\) converges exactly when the corresponding improper integral has a finite limit.

## Examples

For \\(\sum_{n=1}^{\infty}n^2/2^n\\), use the ratio test because powers of \\(n\\) and exponentials appear together.

<Equation label="Ratio example" tex="\frac{a_{n+1}}{a_n}=\frac{(n+1)^2}{2^{n+1}}\frac{2^n}{n^2}=\frac12\left(1+\frac1n\right)^2\to\frac12" />

The limit is \\(\rho=1/2\lt1\\), so the series converges.

For a \\(p\\)-series \\(\sum_{n=1}^{\infty}1/n^q\\), the integral test uses \\(f(x)=1/x^q\\). The result is convergence exactly for \\(q\gt1\\) and divergence for \\(q\le1\\).

## Checks

- Verify that terms are non-negative before using positive-series comparison, ratio, root, or integral tests in this form.
- Interpret \\(\rho=1\\) as inconclusive, not as convergence.
- For the integral test, check that \\(f\\) is positive and decreasing on the tail of the series.
- Match the test to the term structure: comparisons for similar size, ratio for factorials and exponentials, root for powers of \\(n\\).`;
