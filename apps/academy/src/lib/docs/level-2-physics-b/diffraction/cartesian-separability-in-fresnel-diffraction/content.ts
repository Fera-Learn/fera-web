export const content = String.raw`## Principle

If both the aperture-plane field and the Fresnel kernel factor into independent \\(x'\\) and \\(y'\\) parts, the two-dimensional diffraction integral becomes a product of two one-dimensional integrals. Separability reduces the calculation, but it does not remove the quadratic Fresnel phase.

## Notation

<Notation
  items={[
    { symbol: "x',y'", meaning: "aperture-plane coordinates", unit: "m, m" },
    { symbol: "x,y", meaning: "observation-plane coordinates", unit: "m, m" },
    { symbol: "z", meaning: "propagation distance", unit: "m" },
    { symbol: "U_A=g(x')h(y')", meaning: "Cartesian-separable post-aperture field" },
    { symbol: "U_x,U_y", meaning: "one-dimensional Fresnel factors" },
    { symbol: "\\lambda,k", meaning: "wavelength and wavenumber k=2\\pi/\\lambda", unit: "m, m^{-1}" },
    { symbol: "a,b", meaning: "aperture widths in x' and y'", unit: "m, m" },
    { symbol: "\\gamma", meaning: "nonseparable phase-coupling coefficient", unit: "m^{-2}" },
    { symbol: "I", meaning: "intensity proportional to |U|^2", unit: "W m^{-2}" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Start from the Fresnel propagation law with distinct aperture and observation coordinates:

\\[
U(x,y;z)=\frac{e^{ikz}}{i\lambda z}
\iint U_A(x',y')e^{ik(x-x')^2/(2z)}
e^{ik(y-y')^2/(2z)}dx'\,dy'.
\tag*{[1]}
\\]

If \\(U_A(x',y')=g(x')h(y')\\), regrouping all \\(x'\\)-dependent and \\(y'\\)-dependent factors yields

\\[
U=\frac{e^{ikz}}{i\lambda z}
\left[\int_{-\infty}^{\infty}g(x')e^{ik(x-x')^2/(2z)}dx'\right]
\left[\int_{-\infty}^{\infty}h(y')e^{ik(y-y')^2/(2z)}dy'\right].
\tag*{[2]}
\\]

Define each one-dimensional factor with a square-root normalisation,

\\[
U_x(x;z)=\frac{e^{ikz/2}}{\sqrt{i\lambda z}}
\int g(x')e^{ik(x-x')^2/(2z)}dx',
\qquad
U_y(y;z)=\frac{e^{ikz/2}}{\sqrt{i\lambda z}}
\int h(y')e^{ik(y-y')^2/(2z)}dy'.
\tag*{[3]}
\\]

Because \\(\sqrt{i\lambda z}\sqrt{i\lambda z}=i\lambda z\\), equations [2] and [3] give

\\[
U(x,y;z)=U_x(x;z)U_y(y;z),
\qquad
I(x,y;z)\propto|U_x|^2|U_y|^2.
\tag*{[4]}
\\]

For a slit infinite in \\(y'\\), take \\(h(y')=1\\). Translation invariance of the Gaussian integral gives

\\[
\int_{-\infty}^{\infty}e^{ik(y-y')^2/(2z)}dy'
=\sqrt{i\lambda z},
\tag*{[5]}
\\]

and equation [2] reduces to the one-dimensional long-slit result

\\[
U(x;z)=\frac{e^{ikz}}{\sqrt{i\lambda z}}
\int_{-\infty}^{\infty}g(x')e^{ik(x-x')^2/(2z)}dx'.
\tag*{[6]}
\\]

An aperture that cannot be written as one product may still be expressed as a sum of separable terms and propagated by linearity. A common mistake is to infer that all rectangular boundaries are separable: separability requires the complete complex field, including illumination and phase, to factor.

<PhysicsExamples collapsible
  items={[
    {
      title: "Separable rectangular opening",
      question: "Write the Fresnel field for a uniformly illuminated rectangle \\(|x'|\\le \\frac{a}{2}\\) and \\(|y'|\\le \\frac{b}{2}\\) as one-dimensional factors.",
      answer: "The aperture field factors as \\(g(x')=1\\) on \\([-a/2,a/2]\\) and zero elsewhere, and \\(h(y')=1\\) on \\([-b/2,b/2]\\) and zero elsewhere. Equation \\([2]\\) becomes \\[U=\\frac{e^{ikz}}{i\\lambda z}\\left[\\int_{-a/2}^{a/2}e^{ik(x-x')^2/(2z)}dx'\\right]\\left[\\int_{-b/2}^{b/2}e^{ik(y-y')^2/(2z)}dy'\\right].\\] **Final result:** the two-dimensional rectangular-aperture field is exactly the product of independent finite \\(x'\\) and \\(y'\\) Fresnel integrals within the paraxial model.",
    },
    {
      title: "Nonseparable illumination",
      question: "Does a rectangular stop remain separable when the incident field contains the phase factor \\(\\exp(i\\gamma x'y')\\)?",
      answer: "The stop alone factors into rectangular functions, but the complete field is \\(U_A=g(x')h(y')e^{i\\gamma x'y'}\\). The mixed product \\(x'y'\\) cannot be assigned to an \\(x'\\)-only factor times a \\(y'\\)-only factor when \\(\\gamma\\ne0\\). Equation \\([2]\\) therefore cannot be split. **Final result:** the illuminated aperture is nonseparable for nonzero \\(\\gamma\\), so its Fresnel field requires a two-dimensional integral or a separable expansion.",
    },
  ]}
/>
`;
