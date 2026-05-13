export const content = String.raw`## Principle

Determinant properties make many determinant computations faster than direct cofactor expansion. Row operations are especially useful because they can turn a matrix into triangular form while tracking how the determinant changes.

## Notation

- \\(\det(A)\\) is the determinant of a square matrix \\(A\\).
- \\(A^T\\) is the transpose of \\(A\\).
- A diagonal matrix has zeros off the main diagonal.
- An upper-triangular matrix has zeros below the main diagonal.

## Method

To compute a determinant using row reduction:

1. Confirm that the matrix is square.
2. Use row operations to create an upper-triangular matrix.
3. Track each row swap by multiplying the determinant by \\(-1\\).
4. Track each row scaling by recording the scaling factor.
5. Do not change the determinant when adding a multiple of one row to another.
6. Multiply the diagonal entries of the triangular matrix and adjust for the tracked row operations.

## Rules

- The determinant of a diagonal matrix is the product of its diagonal entries.
- The determinant of an upper-triangular matrix is the product of its diagonal entries.
- Swapping two rows multiplies the determinant by \\(-1\\).
- Scaling one row by \\(c\\) multiplies the determinant by \\(c\\).
- Adding a multiple of one row to another row leaves the determinant unchanged.
- Transpose does not change determinant: \\(\det(A^T)=\det(A)\\).
- Products multiply determinants: \\(\det(AB)=\det(A)\det(B)\\).
- In general, \\(\det(A+B)\ne\det(A)+\det(B)\\).

## Examples

For an upper-triangular matrix,

\\[
U=\begin{pmatrix}
3&-1&4\\
0&2&5\\
0&0&-6
\end{pmatrix},
\\]

the determinant is the product of the diagonal entries:

\\[
\det(U)=3\cdot2\cdot(-6)=-36.
\\]

Now compute

\\[
A=\begin{pmatrix}
1&2&0\\
3&4&1\\
2&1&5
\end{pmatrix}
\\]

by reducing to triangular form using row replacements only.

Use \\(R_2-3R_1\\) and \\(R_3-2R_1\\):

\\[
\begin{pmatrix}
1&2&0\\
0&-2&1\\
0&-3&5
\end{pmatrix}.
\\]

These row replacements do not change the determinant. Now use \\(R_3-\frac{3}{2}R_2\\):

\\[
\begin{pmatrix}
1&2&0\\
0&-2&1\\
0&0&\frac{7}{2}
\end{pmatrix}.
\\]

Again, the determinant is unchanged because this is adding a multiple of one row to another. The matrix is upper triangular, so

\\[
\det(A)=1\cdot(-2)\cdot\frac{7}{2}=-7.
\\]

If one row swap had been used during the reduction, the determinant of the original matrix would be the negative of the triangular determinant. If one row had been scaled by \\(c\\), that scaling factor would also need to be accounted for.

## Checks

- Check that the matrix is square before applying determinant properties.
- Check whether each row operation changes the determinant or leaves it unchanged.
- Check row swaps by multiplying by \\(-1\\).
- Check row scaling: scaling one row by \\(c\\) scales the determinant by \\(c\\).
- Check that row replacement, adding a multiple of one row to another, leaves the determinant unchanged.
- Check triangular determinants by multiplying diagonal entries only.
- Check that \\(\det(A+B)\\) is not generally \\(\det(A)+\det(B)\\).`;
