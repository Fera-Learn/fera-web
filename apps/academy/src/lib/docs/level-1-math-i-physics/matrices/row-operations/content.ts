export const content = String.raw`## Principle

An augmented matrix stores the coefficient matrix and the right-hand side of a linear system together. For a system \\(A\mathbf{x}=\mathbf{b}\\), the augmented matrix is written \\((A\mid\mathbf{b})\\).

Row operations change the written form of the system without changing the set of solutions. They are the matrix version of rearranging, rescaling, and combining equations.

## Notation

- \\(R_i\leftrightarrow R_j\\) means swap row \\(i\\) and row \\(j\\).
- \\(cR_i\\) means replace row \\(i\\) by \\(c\\) times row \\(i\\), where \\(c\ne0\\).
- \\(R_i+cR_j\\) means replace row \\(i\\) by row \\(i\\) plus \\(c\\) times row \\(j\\).
- \\((A\mid\mathbf{b})\\) means the coefficients \\(A\\) and constants \\(\mathbf{b}\\) are stored in one augmented matrix.

## Method

To use row operations on an augmented matrix:

1. Write every equation in the same variable order.
2. Put coefficients on the left of the vertical bar and constants on the right.
3. Choose a row operation that simplifies the matrix.
4. Apply the operation to the whole row, including the augmented column.
5. Translate the final rows back into equations when needed.

## Rules

- Swapping two rows preserves the solution set because it only changes the order of the equations.
- Multiplying a row by \\(c\ne0\\) preserves the solution set because an equation and a nonzero multiple of that equation have the same solutions.
- Replacing \\(R_i\\) by \\(R_i+cR_j\\) preserves the solution set because any solution satisfying both original equations also satisfies their linear combination, and the step can be undone by subtracting \\(cR_j\\).
- Scaling by zero is not allowed because it can erase an equation and add false solutions.
- Row operations must act on complete rows, not only selected entries.

## Examples

The system

\\[
\begin{aligned}
x+y&=5,\\
2x+3y&=13
\end{aligned}
\\]

has augmented matrix

\\[
\left(\begin{array}{cc|c}
1&1&5\\
2&3&13
\end{array}\right).
\\]

Use \\(R_2-2R_1\\), which means replace row \\(2\\) by row \\(2\\) plus \\(-2\\) times row \\(1\\):

\\[
\left(\begin{array}{cc|c}
1&1&5\\
2&3&13
\end{array}\right)
\longrightarrow
\left(\begin{array}{cc|c}
1&1&5\\
0&1&3
\end{array}\right).
\\]

The new second row represents \\(y=3\\), and the first row remains \\(x+y=5\\). The operation simplified the system without changing its solutions.

## Checks

- Check that the augmented matrix includes both the coefficient columns and the right-hand-side column.
- Check that each row operation is applied to the entire augmented row, including entries after the vertical bar.
- Check that a scaling operation never uses \\(c=0\\).
- Check that the operation you write matches the row you actually replace.`;
