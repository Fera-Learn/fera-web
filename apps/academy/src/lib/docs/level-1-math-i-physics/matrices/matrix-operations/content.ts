export const content = String.raw`## Principle

Matrix operations extend familiar arithmetic to arrays of numbers, but the dimensions control which operations are allowed. Addition and scalar multiplication act entry by entry, while matrix multiplication combines rows of the first matrix with columns of the second matrix.

## Notation

- \\(A+B\\) is matrix addition.
- \\(cA\\) is scalar multiplication by the number \\(c\\).
- \\(A^T\\) is the transpose of \\(A\\).
- \\(AB\\) is the matrix product of \\(A\\) and \\(B\\).
- \\(I_n\\) is the \\(n\times n\\) identity matrix.
- \\(0_{m\times n}\\) is the \\(m\times n\\) zero matrix.

A matrix is symmetric when \\(A^T=A\\). This requires \\(A\\) to be square.

## Method

To multiply an \\(m\times n\\) matrix \\(A\\) by an \\(n\times p\\) matrix \\(B\\):

1. Check that the inner dimensions match.
2. The result has the outer dimensions \\(m\times p\\).
3. For each entry, take one row from \\(A\\) and one column from \\(B\\).
4. Multiply corresponding entries and add the products.

For addition, subtraction, and scalar multiplication, work entry by entry.

## Rules

- Matrix addition is entry-wise.
- Scalar multiplication is entry-wise.
- Matrix addition requires equal matrix sizes.
- The transpose swaps rows and columns.
- Matrix multiplication requires inner dimensions to match.
- Matrix multiplication is generally not commutative, so \\(AB\\) and \\(BA\\) can be different or one product may not exist.
- The identity matrix satisfies \\(AI_n=A\\) or \\(I_mA=A\\) when the sizes match.
- The zero matrix has every entry equal to zero.

## Examples

Addition and scalar multiplication are entry-wise:

\\[
\begin{pmatrix}1&2\\3&4\end{pmatrix}
+
\begin{pmatrix}5&6\\7&8\end{pmatrix}
=
\begin{pmatrix}6&8\\10&12\end{pmatrix}
\\]

and

\\[
3\begin{pmatrix}1&-2\\0&4\end{pmatrix}
=
\begin{pmatrix}3&-6\\0&12\end{pmatrix}.
\\]

Now multiply a \\(2\times2\\) matrix by a \\(2\times3\\) matrix:

\\[
A=\begin{pmatrix}1&2\\3&4\end{pmatrix},
\qquad
B=\begin{pmatrix}5&6&7\\8&9&10\end{pmatrix}.
\\]

The inner dimensions are both \\(2\\), so \\(AB\\) exists. The result has size \\(2\times3\\):

\\[
AB=
\begin{pmatrix}
1\cdot5+2\cdot8&1\cdot6+2\cdot9&1\cdot7+2\cdot10\\
3\cdot5+4\cdot8&3\cdot6+4\cdot9&3\cdot7+4\cdot10
\end{pmatrix}
=
\begin{pmatrix}
21&24&27\\
47&54&61
\end{pmatrix}.
\\]

For transpose,

\\[
\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}^T
=
\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}.
\\]

## Checks

- Check equal sizes before adding matrices.
- Check inner dimensions before multiplying matrices.
- Check the identity size: use \\(I_n\\) on the right of an \\(m\times n\\) matrix and \\(I_m\\) on the left.
- Check multiplication order because matrix multiplication is not generally commutative.
- Check that a symmetric matrix is square before testing \\(A^T=A\\).`;
