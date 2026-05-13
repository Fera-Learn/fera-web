export const content = String.raw`## The Real Number Line

The **real number line** is a visual representation of all real numbers arranged in order on a straight line. Every point on the line corresponds to a real number, and every real number corresponds to a point.

### Ordering of Real Numbers

For any two real numbers \(a\) and \(b\):
- \(a > b\) means \(a\) lies to the right of \(b\) on the number line
- \(a < b\) means \(a\) lies to the left of \(b\) on the number line

The number line extends infinitely in both directions, with \(0\) at the center, positive numbers to the right, and negative numbers to the left.

## Rational vs Irrational Numbers

All real numbers are either **rational** or **irrational**.

### Rational Numbers

A rational number is any number that can be expressed as a fraction \(\frac{p}{q}\) where \(p\) and \(q\) are integers and \(q \neq 0\).

<Equation label="Rational Numbers" tex="\mathbb{Q} = \left\{ \frac{p}{q} \mid p, q \in \mathbb{Z}, q \neq 0 \right\}" />

Examples: \(3\), \(-5\), \(\frac{2}{7}\), \(4.5\), \(-2.\overline{3}\)

### Irrational Numbers

An irrational number cannot be expressed as a ratio of two integers. Their decimal expansions neither terminate nor repeat.

<Equation label="Common Irrational Numbers" tex="\sqrt{2}, \pi, e, \sqrt[3]{5}" />

**Key distinction:** \(\sqrt{4} = 2\) (rational) but \(\sqrt{2}\) is irrational because 2 is not a perfect square.

## Properties of the Real Numbers (\(\mathbb{R}\))

### Closure Properties

For all \(a, b \in \mathbb{R}\):

<Equation label="Addition Closure" tex="a + b \in \mathbb{R}" />

<Equation label="Multiplication Closure" tex="ab \in \mathbb{R}" />

### Commutative Properties

<Equation label="Commutative of Addition" tex="a + b = b + a" />

<Equation label="Commutative of Multiplication" tex="ab = ba" />

### Associative Properties

<Equation label="Associative of Addition" tex="(a + b) + c = a + (b + c)" />

<Equation label="Associative of Multiplication" tex="(ab)c = a(bc)" />

### Distributive Property

<Equation label="Distributive" tex="a(b + c) = ab + ac" />

### Identity Elements

- Additive identity: \(a + 0 = a\)
- Multiplicative identity: \(a \times 1 = a\)

### Inverse Elements

- Additive inverse: \(a + (-a) = 0\)
- Multiplicative inverse: \(a \times \frac{1}{a} = 1\) (for \(a \neq 0\))

### Density Property

Between any two distinct real numbers, there exists infinitely many other real numbers.

<Equation label="Density" tex="\text{If } a < b, \text{ then } \exists c \in \mathbb{R} \text{ such that } a < c < b" />
`;
