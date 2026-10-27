export const content = String.raw`## Principle

A phasor represents each coherent aperture contribution by a complex arrow. The observable field is the vector sum of those arrows: a common phase rotates the entire phasor diagram without changing intensity, while relative phases alter the length of the resultant.

## Notation

<Notation
  items={[
    { symbol: "N,m,n,p", meaning: "number of apertures, aperture indices, and fringe order", unit: "1, 1, 1, 1" },
    { symbol: "i", meaning: "imaginary unit satisfying i^2=-1" },
    { symbol: "\\vec r,\\vec r'_m,\\vec r'_0,\\Delta\\vec r'_m", meaning: "observation position relative to the reference point, aperture position, reference position, and relative aperture position", unit: "m, m, m, m" },
    { symbol: "r_m,r,\\hat{\\vec r},\\vec k,k,\\omega,t", meaning: "aperture-to-observer distance, reference distance, observation direction, wavevector, wavenumber, angular frequency, and time", unit: "m, m, 1, m^{-1}, m^{-1}, rad s^{-1}, s" },
    { symbol: "a_m,\\phi_m,\\phi'_m,\\phi_{m,\\mathrm{source}},\\phi_0", meaning: "relative amplitude weight, total relative phase, phase after a common shift, imposed source phase relative to the reference aperture, and common phase", unit: "1, rad, rad, rad, rad" },
    { symbol: "\\mathcal E_s,\\mathcal E", meaning: "one-aperture field scale and total complex field", unit: "V m^{-1}" },
    { symbol: "I_s,I", meaning: "one-aperture and total intensities", unit: "W m^{-2}" },
    { symbol: "d,x,\\Delta x,z,\\theta,\\beta,\\Delta\\phi_{\\mathrm{source}},\\Lambda", meaning: "Young slit spacing, screen coordinate, fringe displacement, screen distance, observation angle, propagation-phase magnitude, source-phase difference, and fringe spacing", unit: "m, m, m, m, rad, rad, rad, m" },
  ]}
/>

## The Core Method

Place equal phasors head to tail in aperture order. Their common angular step determines whether the chain has a long resultant or closes to zero.

<PhysicsDiagram slug="multi-aperture-phasor-sums" />

Choose a reference point \\(\vec r'_0\\) in the aperture plane and define \\(\Delta\vec r'_m=\vec r'_m-\vec r'_0\\). For an observer at \\(\vec r\\), expand the aperture-to-observer distance in the far field. With \\(\hat{\vec r}=\vec r/r\\) and \\(\vec k=k\hat{\vec r}\\),

\\[
\begin{aligned}
r_m
&=|\vec r-\Delta\vec r'_m| \\
&\simeq r-\hat{\vec r}\cdot\Delta\vec r'_m, \\
kr_m+\phi_{m,\mathrm{source}}
&\simeq kr-\vec k\cdot\Delta\vec r'_m+\phi_{m,\mathrm{source}}.
\end{aligned}
\tag*{[1]}
\\]

The total phase relative to the reference path and the corresponding far-field sum are therefore

\\[
\boxed{\phi_m=-\vec k\cdot\Delta\vec r'_m+\phi_{m,\mathrm{source}}},
\qquad
\mathcal E=\mathcal E_s e^{i(kr-\omega t)}
\sum_{m=1}^{N}a_m e^{i\phi_m}.
\tag*{[2]}
\\]

The minus sign is geometric: an aperture displaced toward the transverse component of \\(\vec k\\) has a shorter propagation path. To compare with Young's geometry, put slit 1 at \\(+d/2\\), slit 2 at \\(-d/2\\), and use \\(\beta=kd\sin\theta\simeq kdx/z\\). Equations [1] and [2] give

\\[
\begin{aligned}
\phi_1&=-\frac{\beta}{2}+\phi_{1,\mathrm{source}},
&\phi_2&=+\frac{\beta}{2}+\phi_{2,\mathrm{source}}, \\
\phi_1-\phi_2&=-\beta+\Delta\phi_{\mathrm{source}},
&\Delta\phi_{\mathrm{source}}&=\phi_{1,\mathrm{source}}-\phi_{2,\mathrm{source}}.
\end{aligned}
\tag*{[3]}
\\]

This is the same sign as the direct Young path expansion \\(r_1-r_2\simeq-d\sin\theta\\), while Young's positive path difference \\(r_2-r_1\simeq d\sin\theta\\) is its negative. For a fixed bright-fringe label, \\(-kdx/z+\Delta\phi_{\mathrm{source}}=2\pi p\\); changing only the source-phase difference therefore shifts that fringe by

\\[
\boxed{\Delta x=\frac{z}{kd}\Delta\phi_{\mathrm{source}}
=\frac{\Lambda}{2\pi}\Delta\phi_{\mathrm{source}}}.
\tag*{[4]}
\\]

Here \\(\Lambda=2\pi z/(kd)\\) is the Young fringe spacing. A positive source-phase change at the \\(+d/2\\) slit therefore moves a fixed bright fringe toward positive \\(x\\).

The factor outside the phasor sum is common to all apertures and has no effect on the normalized intensity. Thus

\\[
\boxed{\frac{I}{I_s}=\left|\sum_{m=1}^{N}a_m e^{i\phi_m}\right|^2}.
\tag*{[5]}
\\]

To expose every interference term, multiply the sum by its complex conjugate:

\\[
\begin{aligned}
\frac{I}{I_s}
&=\left(\sum_{m=1}^{N}a_m e^{i\phi_m}\right)
  \left(\sum_{n=1}^{N}a_n e^{-i\phi_n}\right) \\
&=\sum_{m=1}^{N}\sum_{n=1}^{N}a_ma_n e^{i(\phi_m-\phi_n)}.
\end{aligned}
\tag*{[6]}
\\]

Pairing the \\((m,n)\\) and \\((n,m)\\) terms makes the real cross terms explicit:

\\[
\boxed{\frac{I}{I_s}
=\sum_{m=1}^{N}a_m^2
+2\sum_{m=1}^{N-1}\sum_{n=m+1}^{N}a_ma_n
\cos(\phi_m-\phi_n)}.
\tag*{[7]}
\\]

For identical apertures, \\(a_m=1\\). If all phases align, the resultant field has magnitude \\(N|\mathcal E_s|\\), so

\\[
I_{\max}=N^2I_s.
\tag*{[8]}
\\]

Moving the reference point changes every phase by the same constant. If \\(\phi'_m=\phi_m+\phi_0\\), then

\\[
\sum_{m=1}^{N}a_me^{i\phi'_m}
=e^{i\phi_0}\sum_{m=1}^{N}a_me^{i\phi_m},
\tag*{[9]}
\\]

and the magnitude squared is unchanged. A common phase is therefore physically unobservable in this intensity measurement; only phasor separations matter.

<PhysicsExamples collapsible
  items={[
    {
      title: "Four phasors around a square",
      question: "Four identical apertures contribute phases \\(0\\), \\(\\pi/2\\), \\(\\pi\\), and \\(3\\pi/2\\) at one observation point. Find the normalized intensity.",
      answer: "Use equation \\([5]\\) with unit weights: \\[\\frac{\\mathcal E}{\\mathcal E_s e^{i(kr-\\omega t)}}=1+i-1-i=0.\\] Therefore \\[\\frac{I}{I_s}=|0|^2=0.\\] The zero is cancellation of the vector sum, not cancellation of the four separate positive intensities. **Final result:** \\(I/I_s=0\\).",
    },
    {
      title: "Young fringe shift from a source phase",
      question: "In the Young geometry used in equation \\([3]\\), the phase of slit 1 at \\(+d/2\\) is increased so that \\(\\Delta\\phi_{\\mathrm{source}}=+\\pi/2\\), while the propagation geometry is fixed. In which direction and by what fraction of \\(\\Lambda\\) does a fixed bright fringe move?",
      answer: "Equation \\([4]\\) gives \\[\\Delta x=\\frac{\\Lambda}{2\\pi}\\left(+\\frac{\\pi}{2}\\right)=+\\frac{\\Lambda}{4}.\\] The positive sign means motion toward positive \\(x\\), the side of slit 1. This does not contradict the negative propagation phase: at positive \\(x\\), slit 1 has the shorter path and the propagation contribution to \\(\\phi_1-\\phi_2\\) is \\(-\\beta\\), so a positive source phase requires positive \\(x\\) to restore the same total phase. **Final result:** the fixed bright fringe shifts by \\(+\\Lambda/4\\), toward positive \\(x\\).",
    },
  ]}
/>
`;
