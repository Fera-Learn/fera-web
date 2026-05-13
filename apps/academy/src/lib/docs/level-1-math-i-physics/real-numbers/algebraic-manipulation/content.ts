export const content = String.raw`## Expanding Brackets

When expanding brackets, each term inside the bracket is multiplied by the term(s) outside.

### Single Term Outside

<Equation label="Single Term Expansion" tex="a(b + c) = ab + ac" />

**Example:** \(3(x + 4) = 3x + 12\)

### Two Terms Outside (FOIL)

For \((a + b)(c + d)\), multiply:
- **F**irst: \(a \times c\)
- **O**uter: \(a \times d\)
- **I**nner: \(b \times c\)
- **L**ast: \(b \times d\)

<Equation label="FOIL" tex="(a + b)(c + d) = ac + ad + bc + bd" />

### Special Products

<Equation label="Difference of Squares" tex="(a + b)(a - b) = a^2 - b^2" />

<Equation label="Perfect Square (Sum)" tex="(a + b)^2 = a^2 + 2ab + b^2" />

<Equation label="Perfect Square (Difference)" tex="(a - b)^2 = a^2 - 2ab + b^2" />

<Equation label="Cube Sum" tex="(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3" />

## Factoring

Factoring is the reverse of expanding—expressing an expression as a product of factors.

### Common Factor

Factor out the greatest common factor (GCF):

<Equation label="Common Factor" tex="ax + ay = a(x + y)" />

### Difference of Squares

<Equation label="Factor Difference of Squares" tex="a^2 - b^2 = (a + b)(a - b)" />

### Quadratic Trinomials

For \(ax^2 + bx + c\), find two numbers that multiply to \(ac\) and add to \(b\):

<Equation label="Quadratic Factoring" tex="x^2 + 5x + 6 = (x + 2)(x + 3)" />

### Completing the Square

Convert a quadratic \(ax^2 + bx + c\) to vertex form:

<Equation label="Completing Square" tex="x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2" />

**General form:**

<Equation label="Vertex Form" tex="ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a}" />

This form reveals the vertex of the parabola at \(\left(-\frac{b}{2a}, -\frac{b^2 - 4ac}{4a}\right)\).

## Strategy for Algebraic Manipulation

1. **Identify the goal** — What form do you need?
2. **Simplify first** — Combine like terms, factor out GCF
3. **Choose the technique** — Expand, factor, or complete the square
4. **Verify** — Check by expanding your result
`;
