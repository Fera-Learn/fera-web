export const content = String.raw`## L'Hopital's Rule

Used to evaluate limits of indeterminate forms.

## Indeterminate Forms

- $\frac{0}{0}$
- $\frac{\infty}{\infty}$

## Rule

If $\lim_{x \to a} \frac{f(x)}{g(x)}$ gives $\frac{0}{0}$ or $\frac{\infty}{\infty}$:

<Equation label="L'Hopital" tex="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" />

provided the limit on the right exists.

## Repeated Application

If needed, apply repeatedly:
<Equation label="Repeated" tex="\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)} = \lim \frac{f''(x)}{g''(x)}" />

## Example

$\lim_{x \to 0} \frac{\sin(x)}{x} = \lim_{x \to 0} \frac{\cos(x)}{1} = 1$

## Conditions

1. $f$ and $g$ must be differentiable near $a$
2. $g'(x) \neq 0$ near $a$ (except possibly at $a$)`;
