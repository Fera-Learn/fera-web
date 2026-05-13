export const content = String.raw`## Principle

LU decomposition factors a matrix into a product

\\[
A=LU,
\\]

where \\(L\\) is lower triangular and \\(U\\) is upper triangular. In this course convention, \\(L\\) has ones on its diagonal.

LU decomposition is useful when the same matrix \\(A\\) is used with many different right-hand sides. Once \\(A=LU\\) is known, each new system can be solved using two triangular systems.

## Notation

- \\(L\\) is a lower triangular matrix: its nonzero entries are on or below the main diagonal.
- \\(U\\) is an upper triangular matrix: its nonzero entries are on or above the main diagonal.
- The course convention uses \\(1\\)s on the diagonal of \\(L\\).
- \\(\mathbf{u}\\) is an intermediate vector used when solving \\(A\mathbf{x}=\mathbf{b}\\).

## Method

To solve \\(A\mathbf{x}=\mathbf{b}\\) after finding \\(A=LU\\):

1. Replace \\(A\mathbf{x}=\mathbf{b}\\) with \\(LU\mathbf{x}=\mathbf{b}\\).
2. Let \\(\mathbf{u}=U\mathbf{x}\\).
3. Solve \\(L\mathbf{u}=\mathbf{b}\\) by forward substitution.
4. Solve \\(U\mathbf{x}=\mathbf{u}\\) by backward substitution.

Forward substitution moves from the first row downward. Backward substitution moves from the last row upward.

## Rules

- The multiplication order is \\(A=LU\\), not usually \\(A=UL\\).
- \\(L\\) is lower triangular and has ones on the diagonal in the course convention.
- \\(U\\) is upper triangular.
- First solve \\(L\mathbf{u}=\mathbf{b}\\), then solve \\(U\mathbf{x}=\mathbf{u}\\).
- Pivot conditions matter: if a required pivot is zero, row swaps or a modified decomposition may be needed.
- This topic is included for completeness and repeated-solve applications, even though the source labels it not examinable.

## Examples

Let

\\[
L=\begin{pmatrix}
1&0&0\\
2&1&0\\
-1&3&1
\end{pmatrix},
\quad
U=\begin{pmatrix}
2&1&1\\
0&3&-1\\
0&0&4
\end{pmatrix},
\quad
\mathbf{b}=\begin{pmatrix}4\\11\\11\end{pmatrix}.
\\]

To solve \\(A\mathbf{x}=\mathbf{b}\\) for \\(A=LU\\), first solve

\\[
L\mathbf{u}=\mathbf{b}.
\\]

This gives

\\[
\begin{aligned}
u_1&=4,\\
2u_1+u_2&=11,\\
-u_1+3u_2+u_3&=11.
\end{aligned}
\\]

Therefore \\(u_1=4\\), \\(u_2=3\\), and \\(u_3=6\\). So

\\[
\mathbf{u}=\begin{pmatrix}4\\3\\6\end{pmatrix}.
\\]

Now solve

\\[
U\mathbf{x}=\mathbf{u}.
\\]

This gives

\\[
\begin{aligned}
2x+y+z&=4,\\
3y-z&=3,\\
4z&=6.
\end{aligned}
\\]

Backward substitution gives \\(z=\frac{3}{2}\\), then \\(y=\frac{3}{2}\\), then \\(x=\frac{1}{2}\\). Hence

\\[
\mathbf{x}=\begin{pmatrix}\frac{1}{2}\\\frac{3}{2}\\\frac{3}{2}\end{pmatrix}.
\\]

The same \\(L\\) and \\(U\\) could now be reused for a different right-hand side \\(\mathbf{b}\\).

## Checks

- Check the multiplication order: the factorisation is \\(A=LU\\).
- Check triangular direction: \\(L\\) is lower triangular and \\(U\\) is upper triangular.
- Check that \\(L\\) has ones on the diagonal when using the course convention.
- Check that forward substitution is used for \\(L\mathbf{u}=\mathbf{b}\\) and backward substitution is used for \\(U\mathbf{x}=\mathbf{u}\\).
- Check pivot conditions before forming or using an LU decomposition; zero pivots may require row swaps or another method.`;
