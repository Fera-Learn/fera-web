export const content = String.raw`## Principle

A uniformly illuminated rectangular aperture is Cartesian separable. Its Fraunhofer field is the product of two sinc functions, and its intensity has independent sinc-squared widths along the two observation axes.

## Notation

<Notation
  items={[
    { symbol: "x',y'", meaning: "aperture-plane coordinates", unit: "m, m" },
    { symbol: "x,y,z", meaning: "observation coordinates and propagation distance", unit: "m, m, m" },
    { symbol: "a,b", meaning: "rectangular aperture widths in x' and y'", unit: "m, m" },
    { symbol: "f_A", meaning: "rectangular aperture function" },
    { symbol: "u=x/(\\lambda z),v=y/(\\lambda z)", meaning: "observation spatial frequencies", unit: "m^{-1}, m^{-1}" },
    { symbol: "F_A", meaning: "unnormalised transform of f_A", unit: "m^{2}" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "\\operatorname{sinc}(q)", meaning: "unnormalised sinc function sin(q)/q" },
    { symbol: "I(0,0),I(x,y)", meaning: "central and position-dependent intensities", unit: "W m^{-2}, W m^{-2}" },
    { symbol: "W", meaning: "full central-lobe width along a specified axis", unit: "m" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Because the opening factors into independent horizontal and vertical rectangles, its far field factors into independent sinc functions. A wider aperture direction gives a narrower transform direction.

<PhysicsDiagram slug="rectangular-aperture-transform" />

For a rectangle centred on the optical axis,

\\[
f_A(x',y')=\operatorname{rect}\!\left(\frac{x'}{a}\right)
\operatorname{rect}\!\left(\frac{y'}{b}\right).
\tag*{[1]}
\\]

Its unnormalised two-dimensional transform is

\\[
F_A(u,v)=\iint f_A(x',y')e^{-i2\pi(ux'+vy')}dx'\,dy'.
\tag*{[2]}
\\]

Separability turns [2] into

\\[
F_A=\left[\int_{-a/2}^{a/2}e^{-i2\pi ux'}dx'\right]
\left[\int_{-b/2}^{b/2}e^{-i2\pi vy'}dy'\right].
\tag*{[3]}
\\]

Evaluating each exponential integral gives

\\[
F_A(u,v)=ab\operatorname{sinc}(\pi au)
\operatorname{sinc}(\pi bv).
\tag*{[4]}
\\]

Since \\(F_A(0,0)=ab\\), the normalised intensity is

\\[
\frac{I(x,y)}{I(0,0)}
=\operatorname{sinc}^2\!\left(\frac{\pi ax}{\lambda z}\right)
\operatorname{sinc}^2\!\left(\frac{\pi by}{\lambda z}\right).
\tag*{[5]}
\\]

The first zeros on the coordinate axes are

\\[
x_1=\pm\frac{\lambda z}{a},
\qquad
y_1=\pm\frac{\lambda z}{b}.
\tag*{[6]}
\\]

Thus the full central-lobe widths are \\(2\lambda z/a\\) in \\(x\\) and \\(2\lambda z/b\\) in \\(y\\). A wide horizontal aperture creates a narrow horizontal diffraction feature; the pattern is not rotated by 90 degrees because each transform coordinate pairs with the same aperture coordinate.

<PhysicsExamples collapsible
  items={[
    {
      title: "Central lobe from a rectangular opening",
      question: "An aperture with widths \\(a=0.60\\,\\mathrm{mm}\\) and \\(b=0.20\\,\\mathrm{mm}\\) is illuminated at wavelength \\(\\lambda=600\\,\\mathrm{nm}\\) and observed at \\(z=1.5\\,\\mathrm{m}\\). Find the full central-lobe widths in \\(x\\) and \\(y\\).",
      answer: "Use twice the first-zero distances from equation \\([6]\\). Along \\(x\\), \\[W_x=\\frac{2\\lambda z}{a}=\\frac{2(600\\times10^{-9})(1.5)}{0.60\\times10^{-3}}=3.0\\times10^{-3}\\,\\mathrm m.\\] Along \\(y\\), \\[W_y=\\frac{2\\lambda z}{b}=\\frac{2(600\\times10^{-9})(1.5)}{0.20\\times10^{-3}}=9.0\\times10^{-3}\\,\\mathrm m.\\] **Final result:** \\(W_x=3.0\\,\\mathrm{mm}\\) and \\(W_y=9.0\\,\\mathrm{mm}\\).",
    },
    {
      title: "Intensity at a mixed coordinate",
      question: "Find \\(\\frac{I(x,y)}{I(0,0)}\\) at \\(x=\\frac{\\lambda z}{2a}\\) and \\(y=\\frac{\\lambda z}{b}\\).",
      answer: "The \\(x\\)-factor in equation \\([5]\\) is finite because its argument is \\(\\pi/2\\). The \\(y\\)-factor has argument \\(\\pi\\), so \\(\\operatorname{sinc}(\\pi)=0\\). Their product is therefore zero regardless of the \\(x\\)-factor. **Final result:** \\(I/I(0,0)=0\\) because the point lies on the first horizontal zero line set by the aperture height \\(b\\).",
    },
  ]}
/>
`;
