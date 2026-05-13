export const content = String.raw`## Principle

The equation \(z^n=a\) asks for all complex numbers whose \(n\)-th power is a given non-zero complex number. Polar form turns this into matching moduli and arguments.

<Equation label="General root equation" tex="z^n=a,\quad a\in\mathbb C,\quad a\ne0" />

A degree \(n\) equation of this form has \(n\) distinct complex roots.

## Notation

- \(n\) is a positive integer.
- \(a=\rho e^{i\chi}\) is the target complex number in polar form.
- \(\rho=|a|\) is the modulus of \(a\), so \(\rho\gt0\).
- \(\chi\) is an argument of \(a\).
- \(z=re^{i\theta}\) is the unknown root in polar form.
- \(k\) is an integer that records argument shifts by multiples of \(2\pi\).

## Method

Write both sides in polar form:

<Equation label="Both sides polar" tex="(re^{i\theta})^n=\rho e^{i\chi}" />

Raise the left-hand side to the \(n\)-th power:

<Equation label="Power expansion" tex="r^ne^{in\theta}=\rho e^{i\chi}" />

Match moduli:

<Equation label="Match modulus" tex="r^n=\rho\quad\Longrightarrow\quad r=\rho^{1/n}" />

Match arguments, allowing multiples of \(2\pi\):

<Equation label="Match argument" tex="n\theta=\chi+2\pi k" />

Therefore:

<Equation label="General argument" tex="\theta=\frac{\chi+2\pi k}{n}=\frac{\chi}{n}+\frac{2\pi k}{n}" />

## Rules

<Equation label="General roots formula" tex="z_k=\rho^{1/n}e^{i(\chi/n+2\pi k/n)},\quad k=0,1,2,\ldots,n-1" />

- The roots all have the same modulus \(\rho^{1/n}\).
- Their arguments are spaced by \(2\pi/n\).
- Increasing \(k\) by \(n\) repeats a root.
- The formula assumes \(a\ne0\). If \(a=0\), then \(z=0\) is the only root.

## Examples

Solve:

<Equation label="Example equation" tex="z^3=1+i" />

First write \(1+i\) in polar form:

<Equation label="Target polar form" tex="1+i=\sqrt2 e^{i\pi/4}" />

Here \(n=3\), \(\rho=\sqrt2\), and \(\chi=\pi/4\). The root modulus is:

<Equation label="Example modulus" tex="\rho^{1/3}=(\sqrt2)^{1/3}=2^{1/6}" />

The three independent arguments are:

<Equation label="Example arguments" tex="\frac{\pi}{12},\quad \frac{\pi}{12}+\frac{2\pi}{3}=\frac{3\pi}{4},\quad \frac{\pi}{12}+\frac{4\pi}{3}=\frac{17\pi}{12}" />

Therefore the three roots are:

<Equation label="Example roots" tex="2^{1/6}e^{i\pi/12},\quad 2^{1/6}e^{3\pi i/4},\quad 2^{1/6}e^{17\pi i/12}" />

## Checks

- Put the target number \(a\) into polar form before taking roots.
- Include the \(2\pi k\) term before dividing the argument by \(n\).
- List exactly \(n\) independent roots for \(a\ne0\).
- Check that all roots lie on the circle of radius \(\rho^{1/n}\).`;
