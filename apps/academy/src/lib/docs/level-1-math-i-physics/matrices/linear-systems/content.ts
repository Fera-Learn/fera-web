export const content = String.raw`## Principle

A linear equation contains constant multiples of variables and constant terms. It does not contain nonlinear terms such as \\(x^2\\), \\(xy\\), \\(\sin z\\), or \\(\sqrt{x}\\).

A linear system is a collection of linear equations solved at the same time. The same solution values must make every equation true.

## Notation

A system of linear equations can be written in matrix form as

\\[
A\mathbf{x}=\mathbf{b}.
\\]

- \\(A\\) is the coefficient matrix. Its entries are the numbers multiplying the variables.
- \\(\mathbf{x}\\) is the unknown vector. Its entries are the variables being solved for.
- \\(\mathbf{b}\\) is the right-hand-side vector. Its entries are the constants on the right side of the equations.

For example,

\\[
\begin{pmatrix}2&1\\1&-1\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}
=
\begin{pmatrix}17\\4\end{pmatrix}
\\]

represents the equations \\(2x+y=17\\) and \\(x-y=4\\).

## Method

To solve a linear system by elimination:

1. Write the equations in a consistent variable order.
2. Combine equations to remove one variable.
3. Solve the simpler equation that remains.
4. Substitute back to find the other variables.
5. Check the solution in every original equation.

For a system with free variables, choose a parameter for each free variable and express the solution set using those parameters.

## Rules

- Only add, subtract, or multiply equations by constants when using elimination.
- Multiplying an equation by zero loses information and is not a valid solving step.
- Swapping equation order does not change the solution set.
- A system may have one solution, no solution, or infinitely many solutions.
- If a variable is free, its value is represented by a parameter.

## Examples

Solve the system

\\[
\begin{aligned}
2x+y&=17,\\
x-y&=4.
\end{aligned}
\\]

Add the two equations to eliminate \\(y\\):

\\[
3x=21.
\\]

So \\(x=7\\). Substitute into \\(x-y=4\\):

\\[
7-y=4.
\\]

Thus \\(y=3\\). The solution is \\((x,y)=(7,3)\\).

Now consider the three-variable system

\\[
\begin{aligned}
x+y+z&=1,\\
y+z&=0.
\end{aligned}
\\]

The second equation gives \\(y=-z\\). Let \\(y=\lambda\\), so \\(z=-\lambda\\). Substitute into the first equation:

\\[
x+\lambda-\lambda=1.
\\]

Therefore \\(x=1\\), and the solutions form

\\[
(x,y,z)=(1,\lambda,-\lambda),\qquad \lambda\in\mathbb R.
\\]

## Checks

- Check that every equation is linear; terms like \\(x^2\\), \\(xy\\), and \\(\sin z\\) make the equation nonlinear.
- Check that the variable order is consistent in every equation and in the matrix form.
- Check that equation order changes only presentation, not the solution set.
- Check a proposed solution by substituting it back into every original equation.`;
