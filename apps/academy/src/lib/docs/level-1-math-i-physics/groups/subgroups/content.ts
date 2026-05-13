export const content = String.raw`## Principle

A subgroup is a subset of a group that is itself a group using the same operation. The operation is not reinvented; it is inherited from the parent group.

Subgroups let a large symmetry system be studied through smaller collections of transformations, such as only the rotations inside a full polygon symmetry group.

## Notation

- \\((G,*)\\) is the parent group.
- \\(H\\) is a subset of \\(G\\).
- \\(H\subseteq G\\) means every element of \\(H\\) is also an element of \\(G\\).
- \\(e\\) is the identity element of the parent group.
- \\(h\\) is an element of \\(H\\).
- \\(h^{-1}\\) is the inverse of \\(h\\) in the parent group.
- \\(H\le G\\) means \\(H\\) is a subgroup of \\(G\\).

<Equation label="Subgroup notation" tex="H\le G" />

## Method

To test whether \\(H\\) is a subgroup of \\(G\\):

1. Check that \\(H\\) is not empty.
2. Check that if \\(h_1,h_2\in H\\), then \\(h_1*h_2\in H\\).
3. Check that if \\(h\in H\\), then \\(h^{-1}\in H\\).
4. Use the same operation \\(*\\) as the parent group.

Associativity does not need a separate proof once \\(H\\) uses the operation from \\(G\\), because associativity is inherited from the parent group.

## Rules

- Every subgroup contains the identity element of the parent group.
- A subgroup uses the same operation as the parent group.
- Closure under products keeps the subset stable under the operation.
- Closure under inverses makes every allowed operation reversible inside the subset.
- A subset that omits required inverses is not a subgroup.

## Examples

Let \\(2\mathbb Z\\) be the set of even integers. Test it as a subgroup of \\((\mathbb Z,+)\\).

The set is non-empty because \\(0\in2\mathbb Z\\).

For closure under addition, write two even integers as \\(2m\\) and \\(2n\\), where \\(m,n\in\mathbb Z\\). Then:

<Equation label="Even integer closure" tex="2m+2n=2(m+n)\in2\mathbb Z" />

For inverses under addition, the inverse of \\(2m\\) is \\(-(2m)\\). Since \\(-m\\) is also an integer:

<Equation label="Even integer inverse" tex="-(2m)=2(-m)\in2\mathbb Z" />

The identity is \\(0\\), and \\(0=2\cdot0\\), so \\(0\in2\mathbb Z\\). Therefore \\(2\mathbb Z\le\mathbb Z\\) under addition.

## Checks

- Use the same operation as the parent group.
- Check that inverses stay inside the subset.
- Check that the identity is the parent identity, not a new element.
- Do not assume every subset of a group is a subgroup.`;
