export const content = String.raw`## Antiderivatives and Indefinite Integrals

An **antiderivative** (also called a primitive function) of a function $f(x)$ is a function $F(x)$ such that $F'(x) = f(x)$. The process of finding antiderivatives is called **integration**.

### The Indefinite Integral

The indefinite integral notation uses the integral symbol $\int$:

<Equation label="Indefinite Integral" tex="\int f(x) \, dx = F(x) + C" />

where:
- $\int$ is the integral symbol
- $f(x)$ is the **integrand** (the function being integrated)
- $dx$ indicates the variable of integration
- $F(x)$ is an antiderivative of $f(x)$
- $C$ is the **constant of integration**

### Constant of Integration

When we differentiate $F(x) + C$, the constant $C$ disappears since the derivative of a constant is zero. Therefore, every antiderivative differs by a constant. This is why we always include $+ C$.

<Equation label="All Antiderivatives" tex="\text{If } F'(x) = f(x), \text{ then } \int f(x) \, dx = F(x) + C \text{ for any constant } C" />

### Basic Power Rule for Integration

For $n \neq -1$:

<Equation label="Power Rule" tex="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C" />

### Examples

1. $\int x^3 \, dx = \frac{x^4}{4} + C$
2. $\int 5 \, dx = 5x + C$
3. $\int \frac{1}{x} \, dx = \ln|x| + C$ (note the absolute value)

### Verification

Always verify by differentiating your result:

<Equation label="Verification" tex="\frac{d}{dx}\left(\frac{x^{n+1}}{n+1} + C\right) = x^n" />

The constant of integration ensures we capture **all** possible antiderivatives, not just one specific solution.
`
