export const content = String.raw`## Principle

The symmetries of a regular polygon form a group under composition. Each symmetry moves the polygon in the plane but leaves the occupied shape unchanged.

Polygon symmetry groups give concrete examples of rotations, reflections, and non-commutative composition. These ideas also appear when physical systems are invariant under rotations or mirror symmetries.

## Notation

- \\(n\\) is the number of sides of the regular polygon.
- \\(D_n\\) is the symmetry group of a regular \\(n\\)-gon.
- \\(e\\) is the identity symmetry.
- \\(r\\) is a rotation by \\(360^\circ/n\\).
- \\(s\\) is one reflection symmetry.
- Composition means applying one symmetry after another.
- In a product such as \\(sr\\), the rightmost transformation \\(r\\) is applied first.

## Method

To list the symmetries of a regular \\(n\\)-gon:

1. List the \\(n\\) rotations \\(e,r,r^2,\\ldots,r^{n-1}\\).
2. Choose one reflection \\(s\\).
3. Compose that reflection with the rotations to get \\(s,sr,sr^2,\\ldots,sr^{n-1}\\).
4. Count the \\(n\\) rotations and \\(n\\) reflections.
5. Use composition as the group operation.

## Rules

- A full turn gives the identity: \\(r^n=e\\).
- Reflecting twice gives the identity: \\(s^2=e\\).
- Reflection reverses rotation direction: \\(srs=r^{-1}\\).
- A regular \\(n\\)-gon has \\(2n\\) symmetries.
- Dihedral groups are generally not commutative.

<Equation label="Dihedral relations" tex="r^n=e,\quad s^2=e,\quad srs=r^{-1}" />

## Examples

For a square, the symmetry group is \\(D_4\\). It has four rotations:

\\[e,\ r,\ r^2,\ r^3\\]

and four reflections:

\\[s,\ sr,\ sr^2,\ sr^3\\]

The total number of symmetries is:

<Equation label="Square symmetry count" tex="|D_4|=2\cdot4=8" />

Order can matter. From \\(srs=r^{-1}\\), multiply on the right by \\(s\\). The steps are:

<Equation label="Start relation" tex="srs=r^{-1}" />

<Equation label="Multiply by reflection" tex="srss=r^{-1}s" />

<Equation label="Use s squared" tex="sr=r^{-1}s" />

This shows that doing a rotation and reflection in one order can differ from doing them in the other order.

## Checks

- Count \\(2n\\) symmetries: \\(n\\) rotations and \\(n\\) reflections.
- Do not treat reflections as rotations.
- Apply the rightmost transformation first in products such as \\(sr\\).
- Check whether order matters before commuting two symmetries.`;
