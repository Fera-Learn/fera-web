export const content = String.raw`## Principle

Two monochromatic plane waves form straight, equally spaced fringes because their relative phase is a linear function of position. The fringes are planes perpendicular to the wavevector difference, not necessarily perpendicular to either individual wavevector.

## Notation

<Notation
  items={[
    { symbol: "\\mathcal E_1,\\mathcal E_2,\\mathcal E", meaning: "component and total complex scalar fields", unit: "V m^{-1}" },
    { symbol: "A_1,A_2,A_0", meaning: "component and common field amplitudes", unit: "V m^{-1}" },
    { symbol: "\\vec k_1,\\vec k_2,\\vec k,\\Delta\\vec k", meaning: "component, mean, and difference wavevectors, with Delta k=k_1-k_2", unit: "m^{-1}" },
    { symbol: "k,\\lambda", meaning: "common wavenumber magnitude and wavelength, with k=2pi/lambda", unit: "m^{-1}, m" },
    { symbol: "\\vec r,t,\\omega", meaning: "position, time, and temporal angular frequency", unit: "m, s, rad s^{-1}" },
    { symbol: "\\phi_1,\\phi_2,\\phi,\\Delta\\phi", meaning: "initial, mean, and difference phases, with Delta phi=phi_1-phi_2", unit: "rad" },
    { symbol: "\\delta,\\alpha", meaning: "relative phase and angle between equal-magnitude wavevectors", unit: "rad, rad" },
    { symbol: "I,I_0,\\Lambda,m,j", meaning: "total intensity, one-wave intensity, fringe spacing, integer fringe order, and wave index", unit: "W m^{-2}, W m^{-2}, m, 1, 1" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The two wavevectors define a mean propagation direction and a difference vector. The relative phase changes along the difference vector, so equal-phase fringes lie perpendicular to it.

<PhysicsDiagram slug="wavevector-fringe-geometry" />

Use the harmonic convention

\\[
\mathcal E_j=A_j e^{i(\vec k_j\cdot\vec r-\omega t+\phi_j)},
\qquad j=1,2.
\tag*{[1]}
\\]

Define mean and difference quantities by

\\[
\vec k=\frac{\vec k_1+\vec k_2}{2},
\quad
\Delta\vec k=\vec k_1-\vec k_2,
\quad
\phi=\frac{\phi_1+\phi_2}{2},
\quad
\Delta\phi=\phi_1-\phi_2.
\tag*{[2]}
\\]

For equal amplitudes \\(A_1=A_2=A_0\\), substitute \\(\vec k_{1,2}=\vec k\mathbin{\pm}\Delta\vec k/2\\) and \\(\phi_{1,2}=\phi\mathbin{\pm}\Delta\phi/2\\):

\\[
\begin{aligned}
\mathcal E
&=A_0e^{i(\vec k\cdot\vec r-\omega t+\phi)}
\left[e^{i(\Delta\vec k\cdot\vec r+\Delta\phi)/2}
+e^{-i(\Delta\vec k\cdot\vec r+\Delta\phi)/2}\right] \\
&=2A_0e^{i(\vec k\cdot\vec r-\omega t+\phi)}
\cos\left(\frac{\Delta\vec k\cdot\vec r+\Delta\phi}{2}\right).
\end{aligned}
\tag*{[3]}
\\]

The common exponential has unit magnitude. If one plane wave has intensity \\(I_0\\), the total intensity is

\\[
\boxed{I=4I_0\cos^2\left(\frac{\delta}{2}\right)},
\qquad
\delta=\Delta\vec k\cdot\vec r+\Delta\phi.
\tag*{[4]}
\\]

Constructive fringes satisfy \\(\delta=2\pi m\\). Increasing position by one fringe period \\(\Lambda\\) along \\(\Delta\vec k\\) must increase \\(\delta\\) by \\(2\pi\\), hence

\\[
|\Delta\vec k|\Lambda=2\pi
\quad\Longrightarrow\quad
\boxed{\Lambda=\frac{2\pi}{|\Delta\vec k|}}.
\tag*{[5]}
\\]

If \\(|\vec k_1|=|\vec k_2|=k\\) and the crossing angle is \\(\alpha\\), the wavevector triangle gives

\\[
|\Delta\vec k|^2
=k^2+k^2-2k^2\cos\alpha
=4k^2\sin^2\left(\frac{\alpha}{2}\right),
\tag*{[6]}
\\]

so

\\[
\boxed{\Lambda=\frac{\lambda}{2\sin(\alpha/2)}}.
\tag*{[7]}
\\]

No small-angle assumption was used in equation [7]. For parallel waves, \\(\Delta\vec k=\vec 0\\), so the phase may change the uniform intensity but cannot produce spatial fringes.

<PhysicsExamples collapsible
  items={[
    {
      title: "Fringes from crossing laser beams",
      question: "Two equal plane waves of wavelength \\(532\\,\\mathrm{nm}\\) cross at a total angle \\(\\alpha=6.00^\\circ\\). Find the fringe spacing.",
      answer: "Equation \\([7]\\) applies without replacing the sine prematurely: \\[\\Lambda=\\frac{532\\times10^{-9}\\,\\mathrm m}{2\\sin(3.00^\\circ)}=5.08\\times10^{-6}\\,\\mathrm m.\\] The fringe planes are normal to \\(\\Delta\\vec k\\), which lies across the angle between the beams. **Final result:** \\(\\Lambda=5.08\\,\\mathrm{\\mu m}\\).",
    },
    {
      title: "Effect of changing only the initial phase",
      question: "Two equal plane waves keep the same wavevectors, but \\(\\Delta\\phi\\) is increased by \\(\\pi\\). How do the fringes change?",
      answer: "A bright fringe initially satisfies \\(\\Delta\\vec k\\cdot\\vec r+\\Delta\\phi=2\\pi m\\). After the phase change, the same order satisfies \\(\\Delta\\vec k\\cdot\\vec r+\\Delta\\phi+\\pi=2\\pi m\\). Therefore \\(\\Delta\\vec k\\cdot\\Delta\\vec r=-\\pi\\), whose magnitude is half of the \\(2\\pi\\) change for one full period. Equation \\([5]\\) shows that \\(\\Lambda\\) itself is unchanged. **Final result:** every bright fringe shifts by \\(\\Lambda/2\\) along the fringe normal, while the spacing and peak intensity remain unchanged.",
    },
  ]}
/>
`;
