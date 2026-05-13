export const content = String.raw`## Principle

The determinant is a number assigned to a square matrix. Determinants are defined only for square matrices, and they help decide whether a square linear system has a unique solution.

For a square matrix \\(A\\), a nonzero determinant means \\(A\mathbf{x}=\mathbf{b}\\) has a unique solution for every compatible vector \\(\mathbf{b}\\).

## Notation

- The determinant of \\(A\\) is written \\(\det(A)\\) or \\(|A|\\).
- A \\(2\times2\\) matrix \\(\begin{pmatrix}a&b\\c&d\end{pmatrix}\\) has determinant \\(ad-bc\\).
- The minor \\(M_{ij}\\) is the determinant of the matrix left after deleting row \\(i\\) and column \\(j\\).
- The cofactor signs follow the checkerboard pattern \\(+,-,+,-,\ldots\\).

## Method

To compute a determinant by expanding along the first row:

1. Confirm that the matrix is square.
2. For each entry in the first row, delete its row and column to form its minor.
3. Apply alternating signs \\(+,-,+,\ldots\\) across the first row.
4. Multiply each first-row entry by its signed minor.
5. Add the signed terms.

## Rules

- Determinants apply to square matrices only.
- For \\(A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\\), \\(\det(A)=ad-bc\\).
- For a \\(3\times3\\) matrix, first-row cofactor expansion is

\\[
\det(A)=a_{11}M_{11}-a_{12}M_{12}+a_{13}M_{13}.
\\]

- If \\(\det(A)\ne0\\), then the square system \\(A\mathbf{x}=\mathbf{b}\\) has a unique solution.
- If \\(\det(A)=0\\), then the square system does not have a unique solution.

## Examples

For a \\(2\times2\\) matrix,

\\[
\det\begin{pmatrix}3&5\\2&7\end{pmatrix}
=3\cdot7-5\cdot2=21-10=11.
\\]

Now compute the determinant of

\\[
A=\begin{pmatrix}
2&1&3\\
0&-1&4\\
5&2&1
\end{pmatrix}.
\\]

Expand along the first row:

\\[
\det(A)=2M_{11}-1M_{12}+3M_{13}.
\\]

The first minor is

\\[
M_{11}=\det\begin{pmatrix}-1&4\\2&1\end{pmatrix}
=(-1)(1)-4(2)=-1-8=-9.
\\]

The other two minors are

\\[
M_{12}=\det\begin{pmatrix}0&4\\5&1\end{pmatrix}=0(1)-4(5)=-20,
\\]

and

\\[
M_{13}=\det\begin{pmatrix}0&-1\\5&2\end{pmatrix}=0(2)-(-1)(5)=5.
\\]

Therefore

\\[
\det(A)=2(-9)-1(-20)+3(5)=-18+20+15=17.
\\]

Because \\(\det(A)\ne0\\), the square system \\(A\mathbf{x}=\mathbf{b}\\) has a unique solution for every compatible \\(\mathbf{b}\\).

## Checks

- Check that the matrix is square before trying to take its determinant.
- Check the \\(2\times2\\) formula order: \\(ad-bc\\), not \\(ab-cd\\).
- Check cofactor signs carefully: first row uses \\(+,-,+\\).
- Check that each minor deletes exactly one row and one column.
- Check that a nonzero determinant means a unique solution for a square system.`;
