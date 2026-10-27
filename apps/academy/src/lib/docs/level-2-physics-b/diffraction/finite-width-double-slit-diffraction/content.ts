export const content = String.raw`## Principle

Two finite slits produce fast double-slit interference fringes inside a broad single-slit diffraction envelope. The slit-centre separation controls the fringe spacing, while each slit width controls the envelope width.

## Notation

<Notation
  items={[
    { symbol: "x'", meaning: "aperture-plane coordinate across the slits", unit: "m" },
    { symbol: "x,z", meaning: "observation coordinate and propagation distance", unit: "m, m" },
    { symbol: "a,d", meaning: "individual slit width and centre-to-centre separation", unit: "m, m" },
    { symbol: "g(x')", meaning: "double-slit aperture function" },
    { symbol: "u=x/(\\lambda z)", meaning: "observation spatial frequency", unit: "m^{-1}" },
    { symbol: "G(u)", meaning: "unnormalised aperture transform", unit: "m" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "\\operatorname{sinc}(q)", meaning: "unnormalised sinc function sin(q)/q" },
    { symbol: "I(0),I(x)", meaning: "central and position-dependent intensities", unit: "W m^{-2}, W m^{-2}" },
    { symbol: "m,n", meaning: "integer fringe and envelope orders" },
    { symbol: "\\Delta x", meaning: "separation of adjacent interference maxima", unit: "m" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The narrow slit separation sets the rapid fringe spacing, while the finite width of each slit supplies the broad envelope. Both effects multiply in the measured intensity.

<PhysicsDiagram slug="double-slit-diffraction-envelope" />

Represent the two slits as translated copies of one width-\\(a\\) rectangle:

\\[
g(x')=\operatorname{rect}\!\left(\frac{x'-d/2}{a}\right)
+\operatorname{rect}\!\left(\frac{x'+d/2}{a}\right).
\tag*{[1]}
\\]

The transform of one centred slit is \\(a\operatorname{sinc}(\pi au)\\). Translation by \\(\pm d/2\\) contributes phases \\(e^{\mp i\pi ud}\\), so linearity gives

\\[
G(u)=a\operatorname{sinc}(\pi au)
\left(e^{-i\pi ud}+e^{i\pi ud}\right).
\tag*{[2]}
\\]

Using the cosine identity,

\\[
G(u)=2a\cos(\pi du)\operatorname{sinc}(\pi au).
\tag*{[3]}
\\]

Since \\(G(0)=2a\\), the normalised intensity is

\\[
\frac{I(x)}{I(0)}
=\cos^2\!\left(\frac{\pi dx}{\lambda z}\right)
\operatorname{sinc}^2\!\left(\frac{\pi ax}{\lambda z}\right).
\tag*{[4]}
\\]

The interference maxima and their spacing follow from the cosine factor:

\\[
x_m=\frac{m\lambda z}{d},
\qquad
\Delta x=\frac{\lambda z}{d}.
\tag*{[5]}
\\]

The single-slit envelope zeros follow independently from the sinc factor:

\\[
x_n^{(\mathrm{env})}=\frac{n\lambda z}{a},
\qquad n=\pm1,\pm2,\ldots
\tag*{[6]}
\\]

If an interference maximum lands on an envelope zero, that order is missing. Setting equations [5] and [6] equal gives \\(m=nd/a\\). The cosine factor is not the diffraction envelope, and the sinc factor is not the two-centre interference term.

<PhysicsExamples collapsible
  items={[
    {
      title: "Fringes under the central envelope",
      question: "Two slits have width \\(a=0.10\\,\\mathrm{mm}\\) and separation \\(d=0.50\\,\\mathrm{mm}\\). For wavelength \\(\\lambda=600\\,\\mathrm{nm}\\) and propagation distance \\(z=2.0\\,\\mathrm{m}\\), find the fringe spacing, first envelope zeros, and missing principal orders.",
      answer: "Equation \\([5]\\) gives \\[\\Delta x=\\frac{(600\\times10^{-9})(2.0)}{0.50\\times10^{-3}}=2.4\\times10^{-3}\\,\\mathrm m.\\] Equation \\([6]\\) gives \\[x_{\\pm1}^{(\\mathrm{env})}=\\pm\\frac{(600\\times10^{-9})(2.0)}{0.10\\times10^{-3}}=\\pm12\\,\\mathrm{mm}.\\] Since \\(d/a=5\\), the condition \\(m=nd/a\\) removes \\(m=\\pm5,\\pm10,\\ldots\\). **Final result:** the fringes are \\(2.4\\,\\mathrm{mm}\\) apart, the central envelope ends at \\(\\pm12\\,\\mathrm{mm}\\), and every fifth interference order is missing.",
    },
    {
      title: "Point-slit limit",
      question: "What happens to the normalised double-slit pattern as \\(a\\to0\\) while \\(d\\) stays fixed?",
      answer: "For every fixed \\(x\\), the sinc argument \\(\\pi ax/(\\lambda z)\\) tends to zero and \\(\\operatorname{sinc}(0)=1\\). Equation \\([4]\\) therefore loses its finite-width envelope but retains the centre-separation factor. **Final result:** the normalised pattern tends to \\(I/I(0)=\\cos^2[\\pi dx/(\\lambda z)]\\), the ideal two-point-source interference pattern.",
    },
  ]}
/>
`;
