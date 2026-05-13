export const content = String.raw`## Trigonometric Power Integrals

Integrals involving powers of trigonometric functions require different strategies based on whether the powers are even or odd.

### Integrals of \(\sin^n x\) and \(\cos^n x\)

#### Odd Powers

For odd \(n\), separate one factor and convert the rest using \(\sin^2 x = 1 - \cos^2 x\) or \(\cos^2 x = 1 - \sin^2 x\).

<Equation label="Odd Sin" tex="\int \sin^{2k+1} x \, dx = \int (\sin^2 x)^k \sin x \, dx = \int (1-\cos^2 x)^k \sin x \, dx" />

**Example:** \(\int \sin^3 x \, dx\)

<Equation label="Sin3" tex="= \int (1-\cos^2 x) \sin x \, dx = \int (1-u^2)(-du) \quad (u = \cos x)" />

<Equation label="Result" tex="= -\int (1-u^2) \, du = -u + \frac{u^3}{3} + C = -\cos x + \frac{\cos^3 x}{3} + C" />

#### Even Powers

Use half-angle identities:

<Equation label="Half-Angle" tex="\sin^2 x = \frac{1-\cos 2x}{2}, \quad \cos^2 x = \frac{1+\cos 2x}{2}" />

**Example:** \(\int \cos^2 x \, dx\)

<Equation label="Cos2" tex="\int \cos^2 x \, dx = \int \frac{1+\cos 2x}{2} \, dx = \frac{x}{2} + \frac{\sin 2x}{4} + C" />

### Integrals of \(\tan^n x\) and \(\sec^n x\)

For \(\tan^n x\), separate \(\tan^2 x = \sec^2 x - 1\):

<Equation label="Tan" tex="\int \tan^2 x \, dx = \int (\sec^2 x - 1) \, dx = \tan x - x + C" />

**Example:** \(\int \tan^3 x \, dx\)

<Equation label="Tan3" tex="\int \tan^3 x \, dx = \int \tan x(\sec^2 x - 1) \, dx = \int \tan x \sec^2 x \, dx - \int \tan x \, dx" />

<Equation label="Tan3 Result" tex="= \frac{\tan^2 x}{2} - \ln|\sec x| + C" />

For \(\sec^n x\) with even \(n\), separate \(\sec^2 x\):

<Equation label="Sec" tex="\int \sec^2 x \, dx = \tan x + C" />

<Equation label="Sec3" tex="\int \sec^3 x \, dx = \int \sec x \cdot \sec^2 x \, dx = \frac{\sec x \tan x}{2} + \frac{1}{2}\ln|\sec x + \tan x| + C" />

### Reduction Formulas

<Equation label="Sin Reduction" tex="\int \sin^n x \, dx = -\frac{\sin^{n-1} x \cos x}{n} + \frac{n-1}{n} \int \sin^{n-2} x \, dx" />

<Equation label="Cos Reduction" tex="\int \cos^n x \, dx = \frac{\cos^{n-1} x \sin x}{n} + \frac{n-1}{n} \int \cos^{n-2} x \, dx" />

These reduce the power by 2 each time, eventually reaching a solvable integral.
`;
