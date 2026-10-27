export const content = String.raw`## Principle

Three equally spaced coherent apertures produce a field from three equally separated phasors. Their pattern has principal maxima where all three align, weaker subsidiary maxima where the resultant has one-aperture magnitude, and exact zeros where the three phasors close into a triangle.

## Notation

<Notation
  items={[
    { symbol: "d,x',x,z,\\theta", meaning: "adjacent slit spacing, aperture coordinate, screen coordinate, screen distance, and observation angle", unit: "m, m, m, m, rad" },
    { symbol: "k,\\lambda,\\omega,t,r", meaning: "wavenumber, wavelength, angular frequency, time, and reference propagation distance", unit: "m^{-1}, m, rad s^{-1}, s, m" },
    { symbol: "\\beta", meaning: "positive geometric phase magnitude kd sin theta between adjacent slit positions", unit: "rad" },
    { symbol: "\\mathcal E_s,\\mathcal E", meaning: "one-slit field scale and total complex field", unit: "V m^{-1}" },
    { symbol: "I_s,I,I_{\\mathrm p},I_{\\mathrm s}", meaning: "one-slit, total, principal-maximum, and subsidiary-maximum intensities", unit: "W m^{-2}, W m^{-2}, W m^{-2}, W m^{-2}" },
    { symbol: "x_{\\mathrm p},x_{\\mathrm s},x_0,m", meaning: "principal-maximum, subsidiary-maximum, zero positions, and integer order", unit: "m, m, m, 1" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

For three apertures, three equal phasors can reinforce, partly reinforce, or close into a triangle. The resultant length gives the field amplitude before intensity is formed.

<PhysicsDiagram slug="multi-aperture-phasor-sums" />

Place identical narrow slits at transverse positions \\(-d\\), \\(0\\), and \\(+d\\), and take their source phases to be equal. For the convention \\(e^{i(kr-\omega t)}\\), the far-field propagation phase from an aperture at transverse position \\(x'\\) is \\(-k x'\sin\theta\\). Define the positive geometric magnitude

\\[
\boxed{\beta=kd\sin\theta\simeq\frac{kdx}{z}}.
\tag*{[1]}
\\]

Taking the central slit as phase reference, the slits ordered from \\(-d\\) to \\(+d\\) therefore have phases \\(+\beta\\), \\(0\\), and \\(-\beta\\). This ordering has the same negative aperture-position sign as Young's two-slit path geometry. Their field sum is

\\[
\begin{aligned}
\mathcal E
&=\mathcal E_s e^{i(kr-\omega t)}
\left(e^{i\beta}+1+e^{-i\beta}\right) \\
&=\mathcal E_s e^{i(kr-\omega t)}(1+2\cos\beta).
\end{aligned}
\tag*{[2]}
\\]

Therefore

\\[
\boxed{I=I_s(1+2\cos\beta)^2}.
\tag*{[3]}
\\]

All phasors align when \\(\beta=2\pi m\\). Using equation [1], the principal maxima are

\\[
x_{\mathrm p}=\frac{m\lambda z}{d},
\qquad
I_{\mathrm p}=9I_s.
\tag*{[4]}
\\]

To locate every stationary point, differentiate equation [3]:

\\[
\frac{dI}{d\beta}
=-4I_s(1+2\cos\beta)\sin\beta=0.
\tag*{[5]}
\\]

The branch \\(\sin\beta=0\\) includes the principal maxima at even multiples of \\(\pi\\) and subsidiary maxima at odd multiples:

\\[
\beta=(2m+1)\pi,
\qquad
x_{\mathrm s}=\left(m+\frac12\right)\frac{\lambda z}{d},
\qquad
I_{\mathrm s}=I_s.
\tag*{[6]}
\\]

The other branch in equation [5] has \\(1+2\cos\beta=0\\), so it gives zeros rather than further maxima:

\\[
\cos\beta=-\frac12
\quad\Longrightarrow\quad
\beta=2\pi\left(m\mathbin{\pm}\frac13\right),
\tag*{[7]}
\\]

and hence

\\[
x_0=\left(m\mathbin{\pm}\frac13\right)\frac{\lambda z}{d},
\qquad
I=0.
\tag*{[8]}
\\]

The first zeros around the central principal maximum are at \\(x=\mathbin{\pm}\lambda z/(3d)\\). Finite slit width would multiply equation [3] by a diffraction envelope, which is not part of the ideal three-point-aperture interference factor.

<PhysicsExamples collapsible
  items={[
    {
      title: "First zeros and subsidiary maximum",
      question: "Three narrow slits have \\(d=0.300\\,\\mathrm{mm}\\), with \\(\\lambda=600\\,\\mathrm{nm}\\) and \\(z=1.50\\,\\mathrm m\\). Find the nearest positive zero and subsidiary maximum, and state their intensities relative to \\(I_s\\).",
      answer: "First calculate the principal-order scale: \\[\\frac{\\lambda z}{d}=\\frac{(600\\times10^{-9})(1.50)}{0.300\\times10^{-3}}=3.00\\,\\mathrm{mm}.\\] Equations \\([8]\\) and \\([6]\\) then give \\[x_0=\\frac13(3.00\\,\\mathrm{mm})=1.00\\,\\mathrm{mm},\\qquad x_{\\mathrm s}=\\frac12(3.00\\,\\mathrm{mm})=1.50\\,\\mathrm{mm}.\\] Their intensities are \\(0\\) and \\(I_s\\), respectively. **Final result:** the nearest positive zero is at \\(1.00\\,\\mathrm{mm}\\), and the subsidiary maximum is at \\(1.50\\,\\mathrm{mm}\\) with intensity \\(I_s\\).",
    },
    {
      title: "Blocking the central slit",
      question: "At the three-slit subsidiary maximum \\(\\beta=\\pi\\), what happens to the intensity if the central slit is blocked while the two outer slits remain open?",
      answer: "With all three slits, equation \\([2]\\) gives the normalized field \\(e^{-i\\pi}+1+e^{i\\pi}=-1\\), so \\(I=I_s\\). Blocking the central slit removes the \\(1\\) term: \\[e^{-i\\pi}+e^{i\\pi}=-2,\\qquad I=|-2|^2I_s=4I_s.\\] Removing a contribution can increase intensity because fields, not intensities, add. **Final result:** blocking the central slit raises the intensity at that point from \\(I_s\\) to \\(4I_s\\).",
    },
  ]}
/>
`;
