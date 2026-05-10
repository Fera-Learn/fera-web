export const content = String.raw`## Sigma Notation ($\Sigma$)

**Sigma notation** provides a compact way to represent the sum of a sequence of terms. The Greek letter $\Sigma$ (sigma) means "sum".

### General Form

<Equation label="Sigma Notation" tex="\sum_{i=m}^{n} a_i = a_m + a_{m+1} + \cdots + a_n" />

where:
- $i$ is the **index** of summation
- $m$ is the **lower bound** (starting value)
- $n$ is the **upper bound** (ending value)
- $a_i$ is the **term** being summed

### Example

<Equation label="Sigma Example" tex="\sum_{i=1}^{5} i^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55" />

## Properties of Summation

<Equation label="Constant Multiple" tex="c \sum_{i=1}^{n} a_i = \sum_{i=1}^{n} c a_i" />

<Equation label="Sum of Sums" tex="\sum_{i=1}^{n} (a_i + b_i) = \sum_{i=1}^{n} a_i + \sum_{i=1}^{n} b_i" />

<Equation label="Constant Sum" tex="\sum_{i=1}^{n} c = nc" />

## Common Sums

### Sum of First n Integers

<Equation label="Arithmetic Series" tex="\sum_{i=1}^{n} i = \frac{n(n+1)}{2}" />

### Sum of Squares

<Equation label="Sum of Squares" tex="\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}" />

### Sum of Cubes

<Equation label="Sum of Cubes" tex="\sum_{i=1}^{n} i^3 = \left(\frac{n(n+1)}{2}\right)^2" />

### Geometric Series

<Equation label="Geometric Series" tex="\sum_{i=0}^{n} ar^i = a \frac{1 - r^{n+1}}{1-r} \quad \text{for } r \neq 1" />

### Infinite Geometric Series

For $|r| < 1$:
<Equation label="Infinite Geometric" tex="\sum_{i=0}^{\infty} ar^i = \frac{a}{1-r}" />

## Double Summation

When summing over two indices:

<Equation label="Double Sum" tex="\sum_{i=1}^{m} \sum_{j=1}^{n} a_{ij} = \sum_{j=1}^{n} \sum_{i=1}^{m} a_{ij}" />

The order of summation can be interchanged (under appropriate conditions).
`;
