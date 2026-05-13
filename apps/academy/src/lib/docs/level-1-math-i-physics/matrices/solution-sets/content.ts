export const content = String.raw`## Principle

A linear system can have exactly one solution, no solution, or infinitely many solutions. Row reduction shows which case applies by revealing pivots, free variables, and inconsistent rows.

For a matrix equation \\(A\mathbf{x}=\mathbf{b}\\), solutions are vectors \\(\mathbf{x}\\) that make the equation true.

## Notation

- \\(A\mathbf{x}=\mathbf{b}\\) is an inhomogeneous system when \\(\mathbf{b}\ne\mathbf{0}\\).
- \\(A\mathbf{x}=\mathbf{0}\\) is the associated homogeneous system.
- The trivial solution of a homogeneous system is \\(\mathbf{x}=\mathbf{0}\\).
- A particular solution \\(\mathbf{x}_p\\) is one specific solution to \\(A\mathbf{x}=\mathbf{b}\\).
- A homogeneous solution \\(\mathbf{x}_h\\) is any solution to \\(A\mathbf{x}=\mathbf{0}\\).

## Method

To describe the solution set of a linear system:

1. Write the augmented matrix for \\(A\mathbf{x}=\mathbf{b}\\).
2. Row reduce the augmented matrix.
3. Check for an inconsistent row such as \\(0=1\\).
4. Identify pivot variables and free variables.
5. If there is a unique solution, read off the variable values.
6. If there are free variables, assign parameters and write the solution set.

## Rules

- An inconsistent row means the system has no solution.
- If every variable is a pivot variable and the system is consistent, the system has a unique solution.
- If at least one variable is free and the system is consistent, the system has infinitely many solutions.
- A homogeneous system \\(A\mathbf{x}=\mathbf{0}\\) always has the trivial solution \\(\mathbf{x}=\mathbf{0}\\), so it is always consistent.
- Free variables produce infinitely many solutions because their parameters can vary over infinitely many real values.
- If \\(\mathbf{u}\\) and \\(\mathbf{v}\\) both solve \\(A\mathbf{x}=\mathbf{b}\\), then \\(\mathbf{u}-\mathbf{v}\\) solves \\(A\mathbf{x}=\mathbf{0}\\).
- Every solution to a consistent inhomogeneous system has the form \\(\mathbf{x}=\mathbf{x}_p+\mathbf{x}_h\\), where \\(\mathbf{x}_p\\) solves \\(A\mathbf{x}=\mathbf{b}\\) and \\(\mathbf{x}_h\\) solves \\(A\mathbf{x}=\mathbf{0}\\).

## Examples

Suppose row reduction of an augmented matrix gives

\\[
\left(\begin{array}{ccc|c}
1&0&2&5\\
0&1&-1&1\\
0&0&0&0
\end{array}\right).
\\]

The variables \\(x\\) and \\(y\\) are pivot variables, while \\(z\\) is free. Let \\(z=t\\), where \\(t\in\mathbb R\\). The rows give

\\[
x+2z=5,
\qquad
y-z=1.
\\]

Therefore

\\[
\begin{pmatrix}x\\y\\z\end{pmatrix}
=
\begin{pmatrix}5\\1\\0\end{pmatrix}
+t\begin{pmatrix}-2\\1\\1\end{pmatrix},
\qquad t\in\mathbb R.
\\]

Here \\(\mathbf{x}_p=\begin{pmatrix}5\\1\\0\end{pmatrix}\\) is a particular solution and \\(\mathbf{x}_h=t\begin{pmatrix}-2\\1\\1\end{pmatrix}\\) is the homogeneous part.

If \\(\mathbf{u}\\) and \\(\mathbf{v}\\) both solve \\(A\mathbf{x}=\mathbf{b}\\), then

\\[
A(\mathbf{u}-\mathbf{v})=A\mathbf{u}-A\mathbf{v}=\mathbf{b}-\mathbf{b}=\mathbf{0},
\\]

so their difference is a homogeneous solution.

## Checks

- Check for inconsistent rows before deciding whether free variables give infinitely many solutions.
- Check that an inconsistent row such as \\(0=1\\) means no solution, not one free variable.
- Check whether each variable is a pivot variable or a free variable.
- Check that a homogeneous system includes the trivial solution \\(\mathbf{x}=\mathbf{0}\\).
- Check that the particular solution \\(\mathbf{x}_p\\) solves \\(A\mathbf{x}=\mathbf{b}\\), while the homogeneous part \\(\mathbf{x}_h\\) solves \\(A\mathbf{x}=\mathbf{0}\\).`;
