export const content = String.raw`## Principle

An inverse matrix reverses the effect of multiplying by a square matrix. Inverses apply to square matrices only, because the identity matrix must have the same size on both sides of the multiplication.

If \\(A\\) is invertible, its inverse is written \\(A^{-1}\\), and

\\[
AA^{-1}=A^{-1}A=I.
\\]

An invertible matrix is also called non-singular. A matrix with no inverse is called singular or non-invertible.

## Notation

- \\(A^{-1}\\) means the inverse matrix of \\(A\\), not an entry-wise reciprocal.
- \\(I\\) is the identity matrix of the same size as \\(A\\).
- \\(\det(A)\\) is the determinant of \\(A\\).
- \\(A\mathbf{x}=\mathbf{b}\\) is a square matrix equation when \\(A\\) is square and \\(\mathbf{x}\\), \\(\mathbf{b}\\) have compatible sizes.

## Method

To decide whether a square matrix has an inverse:

1. Check that the matrix is square.
2. Compute \\(\det(A)\\).
3. If \\(\det(A)\ne0\\), then \\(A\\) is invertible.
4. If \\(\det(A)=0\\), then \\(A\\) is singular and has no inverse.

For a \\(2\times2\\) matrix, use the inverse formula directly when the determinant is nonzero.

## Rules

- Only square matrices can have inverses.
- \\(A\\) is invertible if and only if \\(\det(A)\ne0\\).
- For

\\[
A=\begin{pmatrix}a&b\\c&d\end{pmatrix},
\\]

if \\(ad-bc\ne0\\), then

\\[
A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.
\\]

- If \\(A\\) is invertible, the equation \\(A\mathbf{x}=\mathbf{b}\\) has solution

\\[
\mathbf{x}=A^{-1}\mathbf{b}.
\\]

## Examples

Let

\\[
A=\begin{pmatrix}2&1\\5&3\end{pmatrix}.
\\]

Its determinant is

\\[
\det(A)=2\cdot3-1\cdot5=1.
\\]

Because \\(\det(A)\ne0\\), the matrix is invertible. The inverse is

\\[
A^{-1}=\frac{1}{1}\begin{pmatrix}3&-1\\-5&2\end{pmatrix}
=\begin{pmatrix}3&-1\\-5&2\end{pmatrix}.
\\]

Check the defining multiplication:

\\[
AA^{-1}
=\begin{pmatrix}2&1\\5&3\end{pmatrix}
\begin{pmatrix}3&-1\\-5&2\end{pmatrix}
=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I.
\\]

To solve

\\[
A\mathbf{x}=\begin{pmatrix}4\\11\end{pmatrix},
\\]

multiply by the inverse on the left:

\\[
\mathbf{x}=A^{-1}\mathbf{b}
=\begin{pmatrix}3&-1\\-5&2\end{pmatrix}
\begin{pmatrix}4\\11\end{pmatrix}
=\begin{pmatrix}1\\2\end{pmatrix}.
\\]

## Checks

- Check that \\(A\\) is square before asking whether \\(A^{-1}\\) exists.
- Check the determinant criterion: \\(\det(A)\ne0\\) means invertible, while \\(\det(A)=0\\) means singular.
- Check both multiplication orders in the definition: \\(AA^{-1}=I\\) and \\(A^{-1}A=I\\).
- Check that \\(A^{-1}\\) is not found by taking reciprocals of the entries of \\(A\\).
- Check the \\(2\times2\\) formula: swap \\(a\\) and \\(d\\), change the signs of \\(b\\) and \\(c\\), then divide by \\(ad-bc\\).`;
