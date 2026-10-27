export const content = String.raw`## Principle

A regular array of identical apertures is the convolution of one aperture with a set of point locations. The convolution theorem then separates its Fraunhofer pattern into a single-aperture envelope and an array interference factor.

## Notation

<Notation
  items={[
    { symbol: "x'", meaning: "aperture-plane coordinate along the array", unit: "m" },
    { symbol: "x,z,\\lambda", meaning: "observation coordinate, propagation distance, and wavelength", unit: "m, m, m" },
    { symbol: "u=x/(\\lambda z)", meaning: "observation spatial frequency", unit: "m^{-1}" },
    { symbol: "f_1,f_N", meaning: "single-aperture and N-aperture functions" },
    { symbol: "F_1,F_N", meaning: "unnormalised transforms of f_1 and f_N" },
    { symbol: "g,h,G,H,\\mathcal F", meaning: "two functions, their unnormalised Fourier transforms, and the Fourier-transform operation" },
    { symbol: "s", meaning: "convolution integration coordinate", unit: "m" },
    { symbol: "X", meaning: "shifted aperture coordinate in the convolution proof", unit: "m" },
    { symbol: "p_N", meaning: "finite point-array function" },
    { symbol: "\\delta", meaning: "Dirac delta distribution", unit: "m^{-1}" },
    { symbol: "d", meaning: "centre-to-centre array spacing", unit: "m" },
    { symbol: "N,n", meaning: "number of apertures and integer aperture index" },
    { symbol: "m,q", meaning: "integer principal-maximum order and geometric-series ratio" },
    { symbol: "\\Delta x", meaning: "separation of adjacent principal maxima", unit: "m" },
    { symbol: "*", meaning: "convolution operator" },
    { symbol: "I_N", meaning: "array Fraunhofer intensity", unit: "W m^{-2}" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The convolution of two functions is

\\[
(g*h)(x')=\int_{-\infty}^{\infty}g(x'-s)h(s)\,ds.
\tag*{[1]}
\\]

Insert [1] into the Fourier definition, interchange the integrations, and set \\(X=x'-s\\):

\\[
\mathcal F\{g*h\}(u)
=\iint g(x'-s)h(s)e^{-i2\pi ux'}ds\,dx'
=\int h(s)e^{-i2\pi us}ds\int g(X)e^{-i2\pi uX}dX.
\tag*{[2]}
\\]

The two factors are the individual transforms, proving

\\[
\mathcal F\{g*h\}(u)=G(u)H(u).
\tag*{[3]}
\\]

For \\(N\\) identical apertures indexed by \\(n=0,\ldots,N-1\\), use a centred point array

\\[
p_N(x')=\sum_{n=0}^{N-1}\delta\!\left(x'-\left[n-\frac{N-1}{2}\right]d\right),
\qquad
f_N=f_1*p_N.
\tag*{[4]}
\\]

Equations [3] and [4] give

\\[
F_N(u)=F_1(u)
\sum_{n=0}^{N-1}e^{-i2\pi u[n-(N-1)/2]d}.
\tag*{[5]}
\\]

Factor out \\(e^{i\pi u(N-1)d}\\), apply the geometric sum \\(\sum_{n=0}^{N-1}q^n=(1-q^N)/(1-q)\\), and use exponential sine identities:

\\[
\sum_{n=0}^{N-1}e^{-i2\pi u[n-(N-1)/2]d}
=\frac{\sin(N\pi ud)}{\sin(\pi ud)}.
\tag*{[6]}
\\]

The array theorem is therefore

\\[
I_N(u)\propto|F_1(u)|^2
\left[\frac{\sin(N\pi ud)}{\sin(\pi ud)}\right]^2.
\tag*{[7]}
\\]

At \\(ud=m\\), numerator and denominator both vanish; their ratio tends to \\(N\\), so principal intensity maxima scale as \\(N^2\\). Between adjacent principal maxima the numerator has \\(N-1\\) zeros. The envelope \\(|F_1|^2\\) can suppress array orders and must not be confused with the array factor.

<PhysicsExamples collapsible
  items={[
    {
      title: "Principal maxima of a five-aperture array",
      question: "Five identical apertures have spacing \\(d=0.25\\,\\mathrm{mm}\\). For wavelength \\(\\lambda=500\\,\\mathrm{nm}\\) and propagation distance \\(z=2.0\\,\\mathrm{m}\\), find the separation of principal maxima and their peak intensity relative to one aperture at the same angle, ignoring the envelope variation.",
      answer: "Principal maxima satisfy \\(ud=m\\). Since \\(u=x/(\\lambda z)\\), adjacent maxima are separated by \\[\\Delta x=\\frac{\\lambda z}{d}=\\frac{(500\\times10^{-9})(2.0)}{0.25\\times10^{-3}}=4.0\\times10^{-3}\\,\\mathrm m.\\] At a principal maximum, the array factor amplitude tends to \\(N=5\\), so its intensity factor is \\(N^2=25\\). **Final result:** principal maxima are \\(4.0\\,\\mathrm{mm}\\) apart and peak at \\(25\\) times the one-aperture intensity at that angle.",
    },
    {
      title: "Missing array order",
      question: "Explain what happens if a principal array maximum coincides with a zero of the single-aperture transform \\(F_1\\).",
      answer: "Equation \\([7]\\) is a product. Although the array factor reaches its limiting maximum \\(N^2\\), the envelope has \\(|F_1|^2=0\\). Their product is therefore zero. This is the same missing-order mechanism seen for finite double slits. **Final result:** the principal order is absent because the single-aperture diffraction zero overrides the array maximum.",
    },
  ]}
/>
`;
