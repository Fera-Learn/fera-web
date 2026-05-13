export const content = String.raw`## Principle

A series is a sum of terms. A finite series adds a fixed number of terms, while an infinite series describes an unending sum whose value may or may not settle to a finite number.

In physics, total quantities are often built from many separate contributions: masses from particles, field values from source elements, or measured signals from repeated samples. Series notation is the compact language for those sums.

## Notation

- \\(a_n\\) is the term with index \\(n\\).
- \\(n\\) is the summation index, the integer that changes from term to term.
- \\(N\\) is a finite upper limit, usually a positive integer.
- \\(\sum\\) means add the terms indicated by the limits and formula.
- \\(\sum_{n=1}^{N}a_n\\) is the finite sum from \\(n=1\\) to \\(n=N\\).
- \\(\sum_{n=1}^{\infty}a_n\\) is the infinite series starting at \\(n=1\\).

## Method

To read sigma notation, identify each part before expanding.

1. Find the summation index.
2. Find the lower limit, which gives the first index value.
3. Find the upper limit, which gives the last index value or shows that the series is infinite.
4. Substitute each allowed index value into the term formula.
5. Add the resulting terms in order.

<Equation label="Finite series" tex="\sum_{n=1}^{N}a_n=a_1+a_2+\cdots+a_N" />

<Equation label="Infinite series" tex="\sum_{n=1}^{\infty}a_n=a_1+a_2+a_3+\cdots" />

## Rules

- A finite upper limit gives a finite series and can be expanded completely.
- An upper limit of \\(\infty\\) gives an infinite series; its sum is defined only through limiting partial sums.
- The summation index is a dummy name: changing \\(n\\) to \\(j\\) does not change the sum if the limits and term formula change consistently.
- The sequence of terms \\(a_1,a_2,a_3,\ldots\\) is not the same object as the series \\(a_1+a_2+a_3+\cdots\\).

## Examples

Expand \\(\sum_{n=1}^{4}1/n^2\\). The index values are \\(1,2,3,4\\), so substitute each one into \\(1/n^2\\):

<Equation label="Example expansion" tex="\sum_{n=1}^{4}\frac{1}{n^2}=1+\frac14+\frac19+\frac1{16}" />

Expand \\(\sum_{n=0}^{3}2^n\\). The lower limit is \\(0\\), so the first term is \\(2^0\\):

<Equation label="Power expansion" tex="\sum_{n=0}^{3}2^n=2^0+2^1+2^2+2^3=1+2+4+8=15" />

The term formula is evaluated at each permitted index value. The lower limit matters just as much as the upper limit.

## Checks

- Check whether the question asks for a term \\(a_n\\) or a sum of terms.
- Check the starting index before writing the first term.
- Check whether the upper limit is finite or \\(\infty\\).
- Check that every expanded term is produced by substituting a valid index value into the term formula.`;
