export const content = String.raw`## Principle

An array of \\(N\\) identical equally spaced coherent apertures is a finite geometric series of phasors. Its principal maxima retain the grating equation, their peak intensity scales as \\(N^2\\), and increasing \\(N\\) places more zeros between adjacent principal maxima so the peaks become narrower.

## Notation

<Notation
  items={[
    { symbol: "N,j,m,q,u", meaning: "number of slits, slit index, principal order, zero index, and small phase variable", unit: "1, 1, 1, 1, rad" },
    { symbol: "d,x'_j,x,z,\\theta", meaning: "adjacent slit spacing, slit coordinate, screen coordinate, screen distance, and observation angle", unit: "m, m, m, m, rad" },
    { symbol: "k,\\lambda,\\omega,t,r", meaning: "wavenumber, wavelength, angular frequency, time, and reference distance", unit: "m^{-1}, m, rad s^{-1}, s, m" },
    { symbol: "\\beta,\\eta", meaning: "positive geometric phase magnitude and imposed source-phase increment between adjacent slits", unit: "rad, rad" },
    { symbol: "\\mathcal E_s,\\mathcal E,S_N", meaning: "one-slit field scale, total field, and dimensionless phasor sum", unit: "V m^{-1}, V m^{-1}, 1" },
    { symbol: "I_s,I,I_{\\mathrm p}", meaning: "one-slit, total, and principal-maximum intensities", unit: "W m^{-2}" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

For many apertures the head-to-tail chain approaches a regular polygon. Principal maxima align every phasor, while a closed polygon gives an exact zero.

<PhysicsDiagram slug="multi-aperture-phasor-sums" />

For narrow slits separated by \\(d\\), define the positive geometric phase magnitude

\\[
\boxed{\beta=kd\sin\theta},
\qquad
\beta\simeq\frac{kdx}{z}\ \text{in the paraxial regime}.
\tag*{[1]}
\\]

Number the slits from \\(j=0\\) to \\(N-1\\), place them at \\(x'_j=jd\\), and first take all source phases to be equal. The far-field propagation phase relative to slit \\(j=0\\) is \\(-j\beta\\), so apart from a common propagation phase,

\\[
\mathcal E=\mathcal E_s e^{i(kr-\omega t)}S_N,
\qquad
S_N=\sum_{j=0}^{N-1}e^{-ij\beta}.
\tag*{[2]}
\\]

Multiply the sum by \\(e^{-i\beta}\\) and subtract the shifted sum from the original sum:

\\[
S_N-e^{-i\beta}S_N
=1-e^{-iN\beta},
\tag*{[3]}
\\]

so, away from \\(e^{-i\beta}=1\\),

\\[
S_N=\frac{1-e^{-iN\beta}}{1-e^{-i\beta}}.
\tag*{[4]}
\\]

Use \\(1-e^{-iu}=2ie^{-iu/2}\sin(u/2)\\) in numerator and denominator:

\\[
\begin{aligned}
S_N
&=\frac{2ie^{-iN\beta/2}\sin(N\beta/2)}
{2ie^{-i\beta/2}\sin(\beta/2)} \\
&=e^{-i(N-1)\beta/2}
\frac{\sin(N\beta/2)}{\sin(\beta/2)}.
\end{aligned}
\tag*{[5]}
\\]

The exponential has unit magnitude, giving the ideal \\(N\\)-slit interference factor

\\[
\boxed{I=I_s\frac{\sin^2(N\beta/2)}{\sin^2(\beta/2)}}.
\tag*{[6]}
\\]

At \\(\beta=2\pi m\\), equation [6] has a removable \\(0/0\\) form. Measure phase from that maximum by setting \\(u=(\beta-2\pi m)/2\\). Since \\(\sin u\simeq u\\) as \\(u\to0\\),

\\[
\frac{I_{\mathrm p}}{I_s}
=\lim_{u\to0}\frac{\sin^2(Nu)}{\sin^2u}
=\lim_{u\to0}\frac{(Nu)^2}{u^2}
=N^2.
\tag*{[7]}
\\]

The principal-maxima condition is therefore the grating equation

\\[
\boxed{d\sin\theta_m=m\lambda},
\qquad
I_{\mathrm p}=N^2I_s.
\tag*{[8]}
\\]

In the paraxial regime, \\(x_m=m\lambda z/d\\). If the imposed source phase increases by \\(\eta\\) from slit \\(j\\) to slit \\(j+1\\), each phasor becomes \\(e^{ij(\eta-\beta)}\\). Choose the integer order label so alignment is \\(\eta-\beta=-2\pi m\\). Then

\\[
\boxed{d\sin\theta_m=m\lambda+\frac{\eta}{k}}.
\tag*{[9]}
\\]

Equation [9] reduces to equation [8] when \\(\eta=0\\). A positive source-phase ramp shifts every fixed grating order toward positive \\(\sin\theta\\), consistently with the Young fringe shift. For equal source phases, zeros occur when the numerator of equation [6] vanishes but the denominator does not:

\\[
\frac{N\beta}{2}=q\pi,
\qquad
\frac{q}{N}\notin\mathbb Z.
\tag*{[10]}
\\]

Hence there are \\(N-1\\) zeros and \\(N-2\\) subsidiary maxima between adjacent principal maxima. Equation [6] is only the array interference factor. Finite slit width supplies a separate single-slit diffraction envelope and can suppress grating orders; it must not be confused with the \\(N\\)-slit factor.

<PhysicsExamples collapsible
  items={[
    {
      title: "Five-slit peak and nearest zeros",
      question: "Five identical narrow slits have spacing \\(d=0.200\\,\\mathrm{mm}\\). With \\(\\lambda=500\\,\\mathrm{nm}\\) and \\(z=2.00\\,\\mathrm m\\), find the central peak intensity and its nearest zeros in the paraxial plane.",
      answer: "Equation \\([7]\\) gives the central intensity \\(I_{\\mathrm p}=5^2I_s=25I_s\\). From equations \\([1]\\) and \\([10]\\), the nearest zeros have \\(q=\\pm1\\): \\[\\frac{kdx_0}{2z}=\\frac{\\pi}{5}\\quad\\Longrightarrow\\quad x_0=\\pm\\frac{\\lambda z}{5d}.\\] Substitution gives \\[x_0=\\pm\\frac{(500\\times10^{-9})(2.00)}{5(0.200\\times10^{-3})}=\\pm1.00\\times10^{-3}\\,\\mathrm m.\\] **Final result:** \\(I_{\\mathrm p}=25I_s\\), with nearest zeros at \\(x=\\pm1.00\\,\\mathrm{mm}\\).",
    },
    {
      title: "Allowed orders of a diffraction grating",
      question: "A grating has spacing \\(d=1.50\\,\\mathrm{\\mu m}\\) and is illuminated normally with \\(\\lambda=600\\,\\mathrm{nm}\\). Which principal orders can propagate?",
      answer: "Equation \\([8]\\) requires \\(\\sin\\theta_m=m\\lambda/d=0.400m\\). A propagating order needs \\(|\\sin\\theta_m|\\leq1\\), so \\(|m|\\leq2.5\\). The integer orders are therefore \\(m=0,\\pm1,\\pm2\\); \\(m=\\pm3\\) would require \\(|\\sin\\theta|=1.20\\). **Final result:** five principal orders can propagate: \\(m=0,\\pm1,\\pm2\\).",
    },
  ]}
/>
`;
