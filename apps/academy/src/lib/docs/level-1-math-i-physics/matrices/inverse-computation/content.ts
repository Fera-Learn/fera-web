export const content = String.raw`## Principle

An inverse can be computed by row reduction or by cofactors. Both methods require a square matrix, and both fail when the determinant is zero.

The augmented inverse method turns \\((A\mid I)\\) into \\((I\mid A^{-1})\\). The cofactor method builds the inverse from signed minors and divides by the determinant.

## Notation

- \\((A\mid I)\\) means the matrix \\(A\\) augmented with the identity matrix of the same size.
- \\(C_{ij}\\) is the cofactor in row \\(i\\), column \\(j\\).
- \\(C\\) is the cofactor matrix whose entries are the cofactors \\(C_{ij}\\).
- \\(C^T\\) is the transpose of the cofactor matrix, also called the adjugate matrix in many texts.

## Method

To compute an inverse by row reduction:

1. Form the augmented matrix \\((A\mid I)\\).
2. Use elementary row operations to reduce the left side.
3. Apply every row operation to both halves of the augmented matrix.
4. If the left side becomes \\(I\\), the right side is \\(A^{-1}\\).
5. If the left side cannot be reduced to \\(I\\), then \\(A\\) has no inverse.

To compute an inverse by cofactors:

1. Compute \\(\det(A)\\).
2. If \\(\det(A)=0\\), stop: there is no inverse.
3. Compute each cofactor \\(C_{ij}\\).
4. Form the cofactor matrix \\(C\\).
5. Transpose the cofactor matrix and divide by \\(\det(A)\\).

## Rules

- Row operations in \\((A\mid I)\\) must be applied to both halves.
- The row-reduction method succeeds exactly when the left side can be reduced to \\(I\\).
- If the left side cannot be reduced to \\(I\\), then \\(A\\) is singular.
- For the cofactor method, when \\(\det(A)\ne0\\),

\\[
A^{-1}=\frac{1}{\det(A)}C^T.
\\]

- The transpose matters: use \\(C^T\\), not \\(C\\), in the inverse formula.

## Examples

Compute the inverse of

\\[
A=\begin{pmatrix}1&2\\3&7\end{pmatrix}.
\\]

Start with the augmented matrix:

\\[
\left(\begin{array}{cc|cc}
1&2&1&0\\
3&7&0&1
\end{array}\right).
\\]

Use \\(R_2-3R_1\\):

\\[
\left(\begin{array}{cc|cc}
1&2&1&0\\
0&1&-3&1
\end{array}\right).
\\]

Use \\(R_1-2R_2\\):

\\[
\left(\begin{array}{cc|cc}
1&0&7&-2\\
0&1&-3&1
\end{array}\right).
\\]

Therefore

\\[
A^{-1}=\begin{pmatrix}7&-2\\-3&1\end{pmatrix}.
\\]

Verification by multiplication gives

\\[
AA^{-1}
=\begin{pmatrix}1&2\\3&7\end{pmatrix}
\begin{pmatrix}7&-2\\-3&1\end{pmatrix}
=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
\\]

For the same matrix, the cofactors are

\\[
C=\begin{pmatrix}7&-3\\-2&1\end{pmatrix},
\\]

so

\\[
C^T=\begin{pmatrix}7&-2\\-3&1\end{pmatrix}.
\\]

Since \\(\det(A)=1\\), the cofactor formula gives the same inverse.

## Checks

- Check that the augmented matrix starts as \\((A\mid I)\\), not \\((I\mid A)\\).
- Check that every row operation is performed on both halves of the augmented matrix.
- Check that failure to reduce the left side to \\(I\\) means no inverse.
- Check that the cofactor formula uses the transpose of the cofactor matrix, \\(C^T\\).
- Check that \\(\det(A)\ne0\\) before dividing by the determinant.`;
