export const content = String.raw`## Principle

Many useful transformation groups are made of matrices under multiplication. Matrix groups describe reversible linear transformations, which makes them central in geometry and physics.

For example, rotation matrices preserve lengths and angles, so they represent changes of coordinates that do not change the physical system being described.

## Notation

- \\(M_n(\mathbb R)\\) is the set of all \\(n\times n\\) matrices with real entries.
- \\(GL_n(\mathbb R)\\) is the general linear group of invertible \\(n\times n\\) real matrices.
- \\(A\\) and \\(B\\) are square matrices.
- \\(AB\\) is the matrix product of \\(A\\) and \\(B\\).
- \\(I\\) is the identity matrix.
- \\(\det A\\) is the determinant of \\(A\\).
- \\(A^{-1}\\) is the inverse matrix of \\(A\\).

<Equation label="General linear group" tex="GL_n(\mathbb R)=\{A\in M_n(\mathbb R):\det A\ne0\}" />

## Method

To verify that a matrix belongs to \\(GL_n(\mathbb R)\\):

1. Check that the matrix is square.
2. Check that its entries are real numbers.
3. Compute its determinant.
4. Check that the determinant is not zero.
5. Conclude that an inverse matrix exists.

The determinant condition is the key test: a square matrix is invertible exactly when its determinant is non-zero.

## Rules

- The product of two invertible \\(n\times n\\) matrices is invertible.
- The identity matrix \\(I\\) is in \\(GL_n(\mathbb R)\\).
- If \\(A\in GL_n(\mathbb R)\\), then \\(A^{-1}\in GL_n(\mathbb R)\\).
- Matrix multiplication is associative.
- Matrix multiplication is generally not commutative, so \\(AB\\) can differ from \\(BA\\).

## Examples

The matrix for a rotation through angle \\(\theta\\) in the plane is:

<Equation label="Rotation matrix" tex="R(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}" />

Compute its determinant using the \\(2\times2\\) determinant rule:

<Equation label="Rotation determinant expansion" tex="\det R(\theta)=(\cos\theta)(\cos\theta)-(-\sin\theta)(\sin\theta)" />

Simplify the expression:

<Equation label="Rotation determinant" tex="\det R(\theta)=\cos^2\theta+\sin^2\theta=1" />

Since \\(1\ne0\\), the rotation matrix is invertible and belongs to \\(GL_2(\mathbb R)\\). In physics, such a matrix can rotate coordinate axes or vector components without changing lengths.

## Checks

- Check the determinant is non-zero before claiming a matrix is invertible.
- Check that matrices are square when using \\(GL_n(\mathbb R)\\).
- Keep multiplication order: \\(AB\\) and \\(BA\\) may differ.
- Do not treat a matrix inverse as an entrywise reciprocal.`;
