export const content = String.raw`## The Cover-Up Rule

The **cover-up rule** (also called the **Heaviside cover-up method**) is a quick way to find coefficients when decomposing rational functions with **linear factors only**.

### The Method

For $\frac{P(x)}{(x-a)(x-b)(x-c)}$:

1. Write the decomposition as $\frac{A}{x-a} + \frac{B}{x-b} + \frac{C}{x-c}$
2. To find $A$: **cover up** $(x-a)$ in the denominator, substitute $x=a$ into what's left
3. Repeat for $B$ and $C$

### Example 1: Simple Linear Factors

Find the partial fraction decomposition of $\frac{5x+3}{(x-1)(x+3)}$:

<Equation label="Setup" tex="\frac{5x+3}{(x-1)(x+3)} = \frac{A}{x-1} + \frac{B}{x+3}" />

To find $A$: cover up $(x-1)$, substitute $x=1$:
$A = \frac{5(1)+3}{1+3} = \frac{8}{4} = 2$

To find $B$: cover up $(x+3)$, substitute $x=-3$:
$B = \frac{5(-3)+3}{-3-1} = \frac{-15+3}{-4} = \frac{-12}{-4} = 3$

<Equation label="Result" tex="\frac{5x+3}{(x-1)(x+3)} = \frac{2}{x-1} + \frac{3}{x+3}" />

### Example 2: Three Linear Factors

Decompose $\frac{2x^2 + x - 1}{(x-2)(x+1)(x-1)}$:

<Equation label="Setup" tex="= \frac{A}{x-2} + \frac{B}{x+1} + \frac{C}{x-1}" />

$A = \frac{2(2)^2 + 2 - 1}{(2+1)(2-1)} = \frac{8+2-1}{3 \cdot 1} = \frac{9}{3} = 3$

$B = \frac{2(-1)^2 + (-1) - 1}{(-1-2)(-1-1)} = \frac{2 -1 -1}{(-3)(-2)} = \frac{0}{6} = 0$

$C = \frac{2(1)^2 + 1 - 1}{(1-2)(1+1)} = \frac{2+1-1}{(-1)(2)} = \frac{2}{-2} = -1$

<Equation label="Final" tex="\frac{2x^2 + x - 1}{(x-2)(x+1)(x-1)} = \frac{3}{x-2} + \frac{0}{x+1} - \frac{1}{x-1} = \frac{3}{x-2} - \frac{1}{x-1}" />

### Limitations

The cover-up rule only works for:
- Linear factors in the denominator
- Numerators that are constants (not polynomials with $x$)

For repeated factors or quadratic factors, use the standard method of multiplying and equating coefficients.
`
