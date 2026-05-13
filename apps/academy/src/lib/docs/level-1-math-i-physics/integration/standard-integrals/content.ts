export const content = String.raw`## Standard Integrals Reference Table

These are the fundamental integrals that form the building blocks for solving more complex integrals.

### Basic Power Rule

<Equation label="Power" tex="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)" />

### Exponential Functions

<Equation label="Exponential" tex="\int e^x \, dx = e^x + C" />

<Equation label="Exponential Power" tex="\int a^x \, dx = \frac{a^x}{\ln a} + C \quad (a > 0, a \neq 1)" />

### Logarithmic Functions

<Equation label="Log" tex="\int \frac{1}{x} \, dx = \ln|x| + C" />

<Equation label="Log Base" tex="\int \log_a x \, dx = \frac{x \ln x - x}{\ln a} + C" />

### Trigonometric Functions

<Equation label="Sin" tex="\int \sin x \, dx = -\cos x + C" />

<Equation label="Cos" tex="\int \cos x \, dx = \sin x + C" />

<Equation label="Sec²" tex="\int \sec^2 x \, dx = \tan x + C" />

<Equation label="Csc²" tex="\int \csc^2 x \, dx = -\cot x + C" />

<Equation label="Sec Tan" tex="\int \sec x \tan x \, dx = \sec x + C" />

<Equation label="Csc Cot" tex="\int \csc x \cot x \, dx = -\csc x + C" />

### Inverse Trigonometric Functions

<Equation label="Arcsin" tex="\int \frac{1}{\sqrt{1-x^2}} \, dx = \arcsin x + C" />

<Equation label="Arctan" tex="\int \frac{1}{1+x^2} \, dx = \arctan x + C" />

<Equation label="Arcsec" tex="\int \frac{1}{|x|\sqrt{x^2-1}} \, dx = \operatorname{arcsec}|x| + C" />

### Trigonometric Substitutions

| Expression | Substitution |
|------------|-------------|
| \(\sqrt{a^2 - x^2}\) | \(x = a \sin\theta\) |
| \(\sqrt{a^2 + x^2}\) | \(x = a \tan\theta\) |
| \(\sqrt{x^2 - a^2}\) | \(x = a \sec\theta\) |

These standard forms and substitution patterns enable integration of many rational and radical expressions.
`;
