export const content = String.raw`## First Principles

The derivative can be defined from first principles using the limit definition.

<Equation label="Definition" tex="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />

This is also called the **difference quotient** approach.

## Worked Example

Find $f'(x)$ if $f(x) = x^2$:

<Equation label="Step 1" tex="f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h}" />

<Equation label="Step 2" tex="= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h}" />

<Equation label="Step 3" tex="= \lim_{h \to 0} \frac{2xh + h^2}{h}" />

<Equation label="Step 4" tex="= \lim_{h \to 0} (2x + h) = 2x" />

## Alternative Form

<Equation label="Alt Form" tex="f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}" />`;