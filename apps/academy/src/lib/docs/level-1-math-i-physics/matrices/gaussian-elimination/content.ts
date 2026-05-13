export const content = String.raw`## Principle

Gaussian elimination uses elementary row operations to turn a linear system into triangular form. In triangular form, each pivot has zeros below it, so the variables can be solved from the bottom row upward.

## Notation

- A pivot is the leading nonzero entry used to eliminate entries below it.
- Triangular form has zeros below the pivots.
- Back substitution solves the last equation first, then substitutes upward.
- An inconsistent row such as \\(0=1\\) means the system has no solution.
- A zero row such as \\(0=0\\) gives no new restriction.

## Method

To solve a system by Gaussian elimination:

1. Write the augmented matrix.
2. Choose a pivot in the first active column.
3. Use row operations to create zeros below that pivot.
4. Move down and right to the next pivot position.
5. Continue until the matrix is in triangular form.
6. Use back substitution to solve the variables from bottom to top.

## Rules

- A pivot must be nonzero. If the planned pivot is zero, swap with a lower row when possible.
- Elimination targets entries below pivots, not entries above pivots.
- Row operations preserve the solution set when used correctly.
- A row of the form \\(0=1\\) is inconsistent and makes the whole system inconsistent.
- A row of the form \\(0=0\\) is a zero row and does not create a contradiction.
- Back substitution starts with the last pivot equation.

## Examples

Solve

\\[
\begin{aligned}
x+y+z&=6,\\
2x+3y+z&=11,\\
-x+y+2z&=7.
\end{aligned}
\\]

Start with the augmented matrix:

\\[
\left(\begin{array}{ccc|c}
1&1&1&6\\
2&3&1&11\\
-1&1&2&7
\end{array}\right).
\\]

Use the first pivot to eliminate below it: \\(R_2-2R_1\\) and \\(R_3+R_1\\).

\\[
\left(\begin{array}{ccc|c}
1&1&1&6\\
0&1&-1&-1\\
0&2&3&13
\end{array}\right).
\\]

Use the second pivot to eliminate below it: \\(R_3-2R_2\\).

\\[
\left(\begin{array}{ccc|c}
1&1&1&6\\
0&1&-1&-1\\
0&0&5&15
\end{array}\right).
\\]

Now back substitute. The last row gives

\\[
5z=15,
\\]

so \\(z=3\\). The second row gives

\\[
y-z=-1,
\\]

so \\(y=2\\). The first row gives

\\[
x+y+z=6,
\\]

so \\(x=1\\). The solution is \\((x,y,z)=(1,2,3)\\).

## Checks

- Check that each pivot you choose is nonzero, swapping rows if needed.
- Check arithmetic signs carefully when adding a multiple of one row to another.
- Check that zeros are created below pivots during Gaussian elimination.
- Check that back substitution is done in order: solve \\(z\\), then \\(y\\), then \\(x\\) in a three-variable triangular system.
- Check for inconsistent rows \\(0=1\\) and distinguish them from zero rows \\(0=0\\).`;
