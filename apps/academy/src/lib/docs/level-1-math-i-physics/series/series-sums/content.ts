export const content = String.raw`## Principle

Some series can be summed exactly by algebra, not only tested for convergence. The most common tools are linearity, which lets sums split and scale, and telescoping, where most middle terms cancel.

These techniques matter in physics when a total effect can be reorganized into boundary contributions, such as differences between neighboring energy levels or adjacent positions.

## Notation

- \\(a_k\\) is the \\(k\\)-th term being summed.
- \\(b_k\\) is an auxiliary sequence used to express differences.
- \\(S_n\\) is the partial sum from \\(k=1\\) to \\(k=n\\).
- \\(k\\) is the summation index.
- \\(n\\) is the finite upper limit of a partial sum.
- \\(c\\) is a scalar multiplier.
- Telescoping means cancellation leaves only a small number of boundary terms.

## Method

Start by applying linearity to separate simple pieces when the sums are finite or already known to converge.

<Equation label="Linearity" tex="\sum_{k=1}^{n}(ca_k+b_k)=c\sum_{k=1}^{n}a_k+\sum_{k=1}^{n}b_k" />

For a telescoping sum, try to write each term as a difference of consecutive terms:

<Equation label="Difference method" tex="a_k=b_{k+1}-b_k" />

Then expand the partial sum and cancel matching middle terms:

<Equation label="Telescoping partial sum" tex="\sum_{k=1}^{n}(b_{k+1}-b_k)=b_{n+1}-b_1" />

For an infinite telescoping series, take the limit of the final partial-sum formula only after the finite cancellation has been done.

## Rules

- Scalar multiples pass through finite sums: \\(\sum ca_k=c\sum a_k\\).
- Sums split term by term: \\(\sum(a_k+b_k)=\sum a_k+\sum b_k\\).
- In a telescoping sum, first and last surviving terms must be tracked carefully.
- Infinite algebraic manipulations require convergence or a justified limiting argument.
- Index shifts are valid only when the new limits are shifted with the index.

## Examples

Compute the finite sum \\(S_n=\sum_{k=1}^{n}(1/(k+1)-1/k)\\). Here \\(b_k=1/k\\), so each term has the form \\(b_{k+1}-b_k\\).

Expanding shows the cancellation:

<Equation label="Expanded telescoping sum" tex="S_n=\left(\frac12-1\right)+\left(\frac13-\frac12\right)+\left(\frac14-\frac13\right)+\cdots+\left(\frac{1}{n+1}-\frac1n\right)" />

Every middle term cancels with its neighbor, leaving:

<Equation label="Surviving terms" tex="S_n=\frac{1}{n+1}-1" />

Now take the infinite limit:

<Equation label="Telescoping limit" tex="\lim_{n\to\infty}S_n=\lim_{n\to\infty}\left(\frac{1}{n+1}-1\right)=-1" />

## Checks

- Check index shifts so that the first and last terms still match the original sum.
- Write the expanded cancellation line before jumping to the final boundary terms.
- Check signs carefully; reversing \\(b_{k+1}-b_k\\) changes the answer.
- For infinite sums, take the limit of \\(S_n\\) rather than cancelling an infinite list informally.`;
