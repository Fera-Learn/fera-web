export const content = String.raw`## Principle

A matrix is a rectangular array of numbers arranged in rows and columns. Matrices provide a compact way to store coefficients, vectors, transformations, and systems of equations.

An \\(m\times n\\) matrix has \\(m\\) rows and \\(n\\) columns.

## Notation

For a matrix \\(A\\), the entry notation \\(a_{ij}\\) means the entry in row \\(i\\) and column \\(j\\). The row index comes first and the column index comes second.

The set of all real \\(m\times n\\) matrices is written

\\[
\operatorname{Mat}_{m\times n}(\mathbb R).
\\]

A square matrix has the same number of rows and columns, so it has size \\(n\times n\\) for some \\(n\\).

Column vectors are \\(n\times1\\) matrices, and row vectors are \\(1\times n\\) matrices.

## Method

To describe a matrix accurately:

1. Count the number of rows.
2. Count the number of columns.
3. State the size as rows by columns.
4. Identify entries using row index first and column index second.
5. Check whether special names apply, such as square matrix, column vector, or row vector.

## Rules

- Matrix size is always written as rows by columns.
- The notation \\(a_{ij}\\) never means column \\(i\\), row \\(j\\).
- A matrix in \\(\operatorname{Mat}_{m\times n}(\mathbb R)\\) has real entries.
- A square matrix must have equal row and column counts.
- A column vector has one column; a row vector has one row.

## Examples

Let

\\[
A=\begin{pmatrix}
2&-1&5\\
0&4&7
\end{pmatrix}.
\\]

This matrix has \\(2\\) rows and \\(3\\) columns, so \\(A\in\operatorname{Mat}_{2\times3}(\mathbb R)\\).

The entry \\(a_{23}\\) is in row \\(2\\), column \\(3\\). In the displayed matrix, that entry is \\(7\\).

A column vector with three entries is a \\(3\times1\\) matrix:

\\[
\begin{pmatrix}u\\v\\w\end{pmatrix}.
\\]

A row vector with three entries is a \\(1\times3\\) matrix:

\\[
\begin{pmatrix}u&v&w\end{pmatrix}.
\\]

## Checks

- Check row/column order before naming a matrix size.
- Check that \\(a_{ij}\\) uses row index first and column index second.
- Check matching dimensions when comparing matrices or preparing operations.
- Check whether a vector is being used as a column vector or a row vector.`;
