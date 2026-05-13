export const content = String.raw`## Principle

A group map, more precisely a group homomorphism, is a function that preserves group structure. It sends products in the source group to products in the target group.

Homomorphisms let one group represent another. In physics, this is useful when an abstract symmetry is represented by matrices, permutations, or transformations of a state space.

## Notation

- \\((G,*)\\) is the source group.
- \\((K,\diamond)\\) is the target group.
- \\(\phi:G\to K\\) is a function from \\(G\\) to \\(K\\).
- \\(a\\) and \\(b\\) are elements of \\(G\\).
- \\(e_G\\) is the identity element of \\(G\\).
- \\(e_K\\) is the identity element of \\(K\\).
- \\(\ker\phi\\) is the kernel of \\(\phi\\).
- \\(\operatorname{im}\phi\\) is the image of \\(\phi\\).

## Method

To test whether \\(\phi:G\to K\\) is a homomorphism:

1. Choose arbitrary elements \\(a,b\in G\\).
2. Compute the source product \\(a*b\\).
3. Apply the function to that product to get \\(\phi(a*b)\\).
4. Separately compute \\(\phi(a)\\) and \\(\phi(b)\\) in \\(K\\).
5. Combine those images using the target operation \\(\diamond\\).
6. Check that the two results are equal for all \\(a\\) and \\(b\\).

<Equation label="Homomorphism condition" tex="\phi(a*b)=\phi(a)\diamond\phi(b)" />

## Rules

- A homomorphism preserves the operation, not just the set of possible outputs.
- A homomorphism sends the source identity to the target identity.
- A homomorphism sends inverses to inverses.
- The kernel contains the source elements sent to the target identity.
- The image is the set of target elements reached by the map.

<Equation label="Kernel" tex="\ker\phi=\{g\in G:\phi(g)=e_K\}" />

## Examples

Define \\(\phi:\mathbb Z\to\mathbb Z_3\\) by reducing an integer modulo \\(3\\). The source operation is addition of integers, and the target operation is addition modulo \\(3\\).

For integers \\(m\\) and \\(n\\), reducing after adding gives the same residue class as reducing first and then adding modulo \\(3\\).

<Equation label="Modulo example" tex="\phi(m+n)=\phi(m)+\phi(n)\pmod 3" />

The kernel is the set of integers that reduce to \\(0\\) modulo \\(3\\):

<Equation label="Modulo kernel" tex="\ker\phi=3\mathbb Z" />

The image is all of \\(\mathbb Z_3\\), because every residue class \\(0\\), \\(1\\), and \\(2\\) is reached.

<Equation label="Modulo image" tex="\operatorname{im}\phi=\mathbb Z_3" />

## Checks

- Check operation preservation, not only whether the function is well-defined.
- Use the source operation on source elements and the target operation on target elements.
- Do not assume every function between groups is a homomorphism.
- Check the kernel against the target identity \\(e_K\\).`;
