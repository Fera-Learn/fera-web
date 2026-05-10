export const content = String.raw`## Understanding nCr Notation

The notation $\binom{n}{r}$ (read as "n choose r") represents the number of ways to select $r$ objects from $n$ distinct objects without regard to order.

<Equation label="Binomial Coefficient Definition" tex="\binom{n}{r} = \frac{n!}{r!(n-r)!}" />

where $n!$ (n factorial) is the product of all positive integers up to $n$:
<Equation label="Factorial" tex="n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1" />

## Properties of Binomial Coefficients

<Equation label="Symmetry" tex="\binom{n}{r} = \binom{n}{n-r}" />

<Equation label="Boundary" tex="\binom{n}{0} = \binom{n}{n} = 1" />

<Equation label="Pascal's Recurrence" tex="\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}" />

## Pascal's Triangle

Pascal's triangle is a triangular array where each entry is a binomial coefficient:

- Row 0: $\binom{0}{0} = 1$
- Row 1: $\binom{1}{0}, \binom{1}{1} = 1, 1$
- Row 2: $\binom{2}{0}, \binom{2}{1}, \binom{2}{2} = 1, 2, 1$
- Row 3: $\binom{3}{0}, \binom{3}{1}, \binom{3}{2}, \binom{3}{3} = 1, 3, 3, 1$
- Row 4: $1, 4, 6, 4, 1$

Each row corresponds to the coefficients $\binom{n}{0}, \binom{n}{1}, \ldots, \binom{n}{n}$ for $n = 0, 1, 2, \ldots$

## Building Pascal's Triangle

Starting with 1 at the top, each subsequent number is the sum of the two numbers directly above it. This demonstrates the recurrence relation:
<Equation label="Pascal Construction" tex="\text{Row } n: \binom{n}{0}, \binom{n}{1}, \ldots, \binom{n}{n}" />

## Combinations

A **combination** is a selection of items where order does not matter.

<Equation label="Combination Formula" tex="C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}" />

<Equation label="Relationship" tex="P(n,r) = r! \times \binom{n}{r}" />

where $P(n,r)$ are permutations (order matters) and $\binom{n}{r}$ are combinations (order doesn't matter).
`;
