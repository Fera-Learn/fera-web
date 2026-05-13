export const content = String.raw`## Principle

A group is a set together with a binary operation that behaves like a reversible algebraic process. The operation must combine two elements of the set to produce another element of the same set, and it must satisfy four axioms: closure, associativity, identity, and inverses.

Groups give a compact way to describe reversible transformations, including rotations, reflections, and changes of coordinates in physics.

<Equation label="Binary operation" tex="*:G\times G\to G" />

## Notation

- \\(G\\) is the set of elements.
- \\(*\\) is the binary operation on \\(G\\).
- \\((G,*)\\) means the set \\(G\\) with operation \\(*\\).
- \\(a\\), \\(b\\), and \\(c\\) are elements of \\(G\\).
- \\(e\\) is the identity element.
- \\(a^{-1}\\) is the inverse of \\(a\\) with respect to \\(*\\).

## Method

To check whether \\((G,*)\\) is a group, test the four axioms in order.

1. Closure: for every \\(a,b\in G\\), check that \\(a*b\in G\\).
2. Associativity: for every \\(a,b,c\in G\\), check that grouping does not change the product.
3. Identity: find one element \\(e\in G\\) that leaves every element unchanged on both sides.
4. Inverses: for each \\(a\in G\\), find an element \\(a^{-1}\in G\\) that combines with \\(a\\) to give \\(e\\) on both sides.

<Equation label="Associativity" tex="(a*b)*c=a*(b*c)" />

<Equation label="Identity" tex="e*a=a*e=a" />

<Equation label="Inverse" tex="a*a^{-1}=a^{-1}*a=e" />

## Rules

- Closure means the operation never leaves the set.
- Associativity is about parentheses, not about switching order.
- The identity element must work for every element of the group.
- Every element must have an inverse inside the same set.
- Commutativity, \\(a*b=b*a\\), is not required for a group.

## Examples

The integers under addition form a group, written \\((\mathbb Z,+)\\).

Closure holds because adding two integers gives an integer.

<Equation label="Integer closure" tex="a,b\in\mathbb Z\quad\Rightarrow\quad a+b\in\mathbb Z" />

Associativity holds because addition of integers satisfies:

<Equation label="Addition associativity" tex="(a+b)+c=a+(b+c)" />

The identity is \\(0\\), because adding \\(0\\) changes nothing.

<Equation label="Additive identity" tex="0+a=a+0=a" />

The inverse of \\(a\\) is \\(-a\\), because their sum is \\(0\\).

<Equation label="Additive inverse" tex="a+(-a)=(-a)+a=0" />

Subtraction is not the group operation here. The operation is addition, and inverses are described using addition.

## Checks

- Check that the operation takes two elements of \\(G\\) back into \\(G\\).
- Check that one identity element works for every element.
- Check inverses using the group operation, not a different operation.
- Check associativity separately from commutativity.`;
