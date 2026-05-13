export const content = String.raw`## Principle

Reduced row echelon form, or RREF, is a standard final form for a matrix after row reduction. It makes the equations easy to read because pivot columns are cleaned both above and below each pivot.

RREF is unique for a matrix, even though different valid row-operation paths may be used to reach it.

## Notation

- A leading entry is the first nonzero entry in a nonzero row.
- In RREF, every leading entry is \\(1\\).
- A pivot column contains a leading \\(1\\).
- A pivot variable corresponds to a pivot column.
- A free variable corresponds to a non-pivot variable column.

## Method

To read a solution set from RREF:

1. Identify the pivot columns.
2. Treat variables in pivot columns as pivot variables.
3. Treat variables in non-pivot columns as free variables.
4. Read each nonzero row as an equation.
5. Assign parameters to free variables.
6. Write the pivot variables in terms of those parameters.

## Rules

- Every nonzero row has leading entry \\(1\\).
- Each pivot column has zeros above and below its leading \\(1\\).
- Pivots move to the right as rows go down.
- Zero rows, if any, are at the bottom.
- Free variables may take any real values unless another condition restricts them.

## Examples

Suppose the RREF of an augmented matrix for variables \\(x\\), \\(y\\), and \\(z\\) is

\\[
\left(\begin{array}{ccc|c}
1&0&2&5\\
0&1&-1&1\\
0&0&0&0
\end{array}\right).
\\]

The pivot columns are the \\(x\\)-column and the \\(y\\)-column, so \\(x\\) and \\(y\\) are pivot variables. The \\(z\\)-column is not a pivot column, so \\(z\\) is free.

Reading the rows gives

\\[
\begin{aligned}
x+2z&=5,\\
y-z&=1.
\end{aligned}
\\]

Let \\(z=t\\), where \\(t\in\mathbb R\\). Then

\\[
x=5-2t,
\qquad
y=1+t,
\qquad
z=t.
\\]

The solution set is

\\[
(x,y,z)=(5-2t,1+t,t),\qquad t\in\mathbb R.
\\]

## Checks

- Check that each nonzero row has a leading \\(1\\).
- Check that pivot columns have zeros both above and below each pivot.
- Check that pivots move right as rows go down and that zero rows are at the bottom.
- Check zero rows before deciding which variables are free.
- Check the solution by reading equations from each row, not from columns alone.`;
