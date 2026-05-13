export const content = String.raw`## Principle

A symmetry is a transformation that leaves the chosen structure unchanged. The structure might be a shape, a table of measurements, an equation, or a physical system.

For physics, symmetry is the language of invariance. If a circular potential looks the same after rotation, then rotation is a symmetry of that potential.

## Notation

- \\(X\\) is the object or configuration being transformed.
- \\(T\\) is a transformation of \\(X\\).
- \\(U\\) is another transformation of \\(X\\).
- \\(\operatorname{id}_X\\) is the identity transformation, which leaves every point of \\(X\\) fixed.
- \\(T\circ U\\) means composition: apply \\(U\\) first, then apply \\(T\\).
- \\(T^{-1}\\) is an inverse transformation, which undoes \\(T\\).
- \\(r_0\\), \\(r_{120}\\), and \\(r_{240}\\) are rotations through \\(0^\circ\\), \\(120^\circ\\), and \\(240^\circ\\).

## Method

To test whether a transformation is a symmetry:

1. Decide exactly what structure must be preserved.
2. Apply the transformation to the object or configuration.
3. Compare the transformed object with the original structure.
4. Record the transformation as a symmetry only if the chosen structure is unchanged.
5. Compose known symmetries to build new transformations.

For composition, the order matters. In \\(T\circ U\\), the transformation \\(U\\) acts first, and \\(T\\) acts second.

## Rules

- The identity transformation is always a symmetry of a structure.
- If \\(T\\) is a reversible symmetry, then \\(T^{-1}\\) is also a symmetry.
- The composition of two symmetries of the same structure is another symmetry of that structure.
- Composition of transformations is not always commutative, so \\(T\circ U\\) can differ from \\(U\circ T\\).

## Examples

An equilateral triangle has rotational symmetries. Rotating it through \\(0^\circ\\), \\(120^\circ\\), or \\(240^\circ\\) gives the same occupied region in the plane.

Apply \\(r_{240}\\) first, then apply \\(r_{120}\\). The total rotation is \\(360^\circ\\), which is the same final configuration as the identity rotation.

<Equation label="Composition of rotations" tex="r_{120}\circ r_{240}=r_{360}=r_0" />

The inverse of a \\(120^\circ\\) rotation is a \\(240^\circ\\) rotation, because the two rotations together return the triangle to its starting orientation.

<Equation label="Inverse rotation" tex="r_{120}^{-1}=r_{240}" />

The same idea appears in physics when a rotationally invariant system has the same physical description before and after a rotation.

## Checks

- Check what structure is being preserved; preserving a rough appearance is not enough.
- Check composition order: \\(T\circ U\\) applies \\(U\\) first.
- Check that the identity transformation is included.
- Check that an inverse transformation returns the object to the starting configuration.`;
