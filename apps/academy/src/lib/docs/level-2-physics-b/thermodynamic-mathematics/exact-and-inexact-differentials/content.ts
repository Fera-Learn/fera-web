export const content = String.raw`## Principle

An exact differential is the differential of a state function and therefore has an endpoint-dependent integral. An inexact differential describes a path-dependent transfer such as heat or work; matching initial and final states is not enough to determine its integral.

## Notation

<Notation
  items={[
    { symbol: "x,y", meaning: "independent coordinates" },
    { symbol: "z,f", meaning: "differentiable state functions of x and y" },
    { symbol: "F", meaning: "path-dependent accumulated quantity in the inexact model" },
    { symbol: "\\omega", meaning: "neutral differential one-form M dx plus N dy" },
    { symbol: "M,N", meaning: "coefficient functions multiplying dx and dy" },
    { symbol: "a,b", meaning: "constant coefficients in the test function" },
    { symbol: "g(y),g'(y)", meaning: "integration function of y and its derivative with respect to y" },
    { symbol: "d,\\delta", meaning: "symbols for exact and inexact infinitesimal changes" },
    { symbol: "U,S,V,p,T", meaning: "internal energy, entropy, total volume, pressure, and absolute temperature", unit: "J, J K^{-1}, m^{3}, Pa, K" },
    { symbol: "\\delta Q,\\delta W", meaning: "inexact heat into the system and work done by the system", unit: "J, J" },
  ]}
/>

## The Core Method

The endpoints fix a state-function change, but not the heat and work separately. Different pressure-volume paths can therefore give the same change in internal energy while enclosing different work areas.

<PhysicsDiagram slug="path-dependent-heat-work" />

Consider a neutral one-form in two independent variables:

\\[
\omega=M(x,y)\,dx+N(x,y)\,dy.
\tag*{[1]}
\\]

The one-form is exact if and only if there is a single-valued state function \\(z=z(x,y)\\) whose differential equals \\(\omega\\). In that case,

\\[
\omega=dz,
\qquad
M=\left(\frac{\partial z}{\partial x}\right)_y,
\qquad
N=\left(\frac{\partial z}{\partial y}\right)_x.
\tag*{[2]}
\\]

Suppose \\(M\\) and \\(N\\) have continuous first partial derivatives on a simply connected domain. Equality of their cross partial derivatives is then both necessary and sufficient for exactness:

\\[
\left(\frac{\partial M}{\partial y}\right)_x
=\left(\frac{\partial N}{\partial x}\right)_y.
\tag*{[3]}
\\]

When [3] holds under those regularity and domain conditions, a state function \\(z\\) exists, the integral depends only on endpoints, and every closed-loop integral vanishes:

\\[
\int_i^f\omega=z_f-z_i,
\qquad
\oint\omega=0.
\tag*{[4]}
\\]

If the cross derivatives differ, \\(\omega\\) is not exact. Thermodynamic inexact forms use \\(\delta\\): \\(dU\\), \\(dS\\), and \\(dV\\) are exact state changes, whereas \\(\delta Q\\) and \\(\delta W\\) are inexact transfers. Finite heat and work are transfer integrals rather than changes in stored state functions.

<PhysicsExamples collapsible
  items={[
    {
      title: "Test and reconstruct an exact differential",
      question: "For \\(M=3ax^2y\\) and \\(N=ax^3+2by\\), show that \\(M\\,dx+N\\,dy\\) is exact and find its state function.",
      answer: "Apply equation \\([3]\\): \\[\\left(\\frac{\\partial M}{\\partial y}\\right)_x=3ax^2,\\qquad \\left(\\frac{\\partial N}{\\partial x}\\right)_y=3ax^2.\\] The derivatives agree. To reconstruct the function, integrate \\(M\\) with respect to \\(x\\): \\[f=\\int 3ax^2y\\,dx=ax^3y+g(y).\\] Differentiate this with respect to \\(y\\): \\((\\partial f/\\partial y)_x=ax^3+g'(y)\\). Matching \\(N=ax^3+2by\\) gives \\(g'(y)=2by\\), then \\(g(y)=by^2+\\text{constant}\\). **Final result:** the form is exact and \\(f(x,y)=ax^3y+by^2+\\text{constant}\\).",
    },
    {
      title: "Identify an inexact differential",
      question: "Determine whether \\(\\delta F=x\\,dx+x\\,dy\\) is exact.",
      answer: "Here \\(M=x\\) and \\(N=x\\). The cross derivatives required by equation \\([3]\\) are \\((\\partial M/\\partial y)_x=0\\) and \\((\\partial N/\\partial x)_y=1\\). They are unequal everywhere, so no state function \\(F(x,y)\\) has this differential. Writing \\(dF\\) would therefore be misleading. **Final result:** \\(x\\,dx+x\\,dy\\) is inexact and its integral depends on the chosen path.",
    },
  ]}
/>
`;
