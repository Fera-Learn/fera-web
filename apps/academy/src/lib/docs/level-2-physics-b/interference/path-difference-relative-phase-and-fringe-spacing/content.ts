export const content = String.raw`## Principle

Path difference is a length, relative phase is an angle, and fringe spacing is a distance measured across an observation surface. A sign convention links them: reversing the labels of the two paths reverses the relative phase but leaves the measured cosine intensity unchanged.

## Notation

<Notation
  items={[
    { symbol: "s_1,s_2,\\Delta", meaning: "path lengths in one uniform medium and signed difference Delta=s_1-s_2", unit: "m, m, m" },
    { symbol: "\\phi_1,\\phi_2,\\Delta\\phi", meaning: "initial phases and signed difference phi_1-phi_2", unit: "rad" },
    { symbol: "\\Phi_1,\\Phi_2,\\delta", meaning: "total phases and signed relative phase Phi_1-Phi_2", unit: "rad" },
    { symbol: "k,\\lambda", meaning: "wavenumber and wavelength in the propagation medium", unit: "m^{-1}, m" },
    { symbol: "I,I_1,I_2", meaning: "total and component intensities", unit: "W m^{-2}" },
    { symbol: "d,x,z,\\Lambda", meaning: "source separation, screen coordinate, screen distance, and fringe spacing", unit: "m, m, m, m" },
    { symbol: "m", meaning: "integer fringe order", unit: "1" },
    { symbol: "\\omega,t", meaning: "angular frequency and time", unit: "rad s^{-1}, s" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

For fields following \\(e^{i(ks-\omega t+\phi)}\\), define wave 1 minus wave 2 throughout:

\\[
\begin{aligned}
\delta
&=\Phi_1-\Phi_2 \\
&=(ks_1+\phi_1)-(ks_2+\phi_2) \\
&=\boxed{k\Delta+\Delta\phi},
\end{aligned}
\qquad
\Delta=s_1-s_2.
\tag*{[1]}
\\]

Since \\(k=2\pi/\lambda\\), one wavelength of path difference is one complete phase cycle:

\\[
\boxed{\delta=\frac{2\pi}{\lambda}\Delta+\Delta\phi}.
\tag*{[2]}
\\]

The two-beam intensity is

\\[
I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta.
\tag*{[3]}
\\]

Constructive and destructive conditions follow from the extrema of the cosine:

\\[
\begin{aligned}
\text{constructive: }&\delta=2\pi m, \\
\text{destructive: }&\delta=(2m+1)\pi,
\end{aligned}
\qquad m\in\mathbb Z.
\tag*{[4]}
\\]

For \\(\Delta\phi=0\\), equation [2] reduces these to \\(\Delta=m\lambda\\) and \\(\Delta=(m+1/2)\lambda\\), respectively. Those path rules cannot be used unchanged when the sources or optical elements add a nonzero phase offset.

For two paraxial sources separated by \\(d\\), choose labels so that

\\[
\Delta\simeq\frac{dx}{z}.
\tag*{[5]}
\\]

Substituting equations [2] and [5] into the constructive condition gives

\\[
\frac{2\pi}{\lambda}\frac{dx_m}{z}+\Delta\phi=2\pi m,
\tag*{[6]}
\\]

and solving one algebraic step at a time gives

\\[
\frac{dx_m}{z}=m\lambda-\frac{\Delta\phi}{2\pi}\lambda,
\qquad
x_m=\frac{z}{d}\left(m\lambda-\frac{\Delta\phi}{2\pi}\lambda\right).
\tag*{[7]}
\\]

Subtract adjacent orders:

\\[
\boxed{\Lambda=x_{m+1}-x_m=\frac{\lambda z}{d}}.
\tag*{[8]}
\\]

A constant initial phase shifts every fringe by the same amount but cancels from equation [8]. Swapping path labels sends \\(\Delta\to-\Delta\\), \\(\Delta\phi\to-\Delta\phi\\), and \\(\delta\to-\delta\\); equation [3] is unchanged because cosine is even.

<PhysicsExamples collapsible
  items={[
    {
      title: "Fringe shift from an initial phase offset",
      question: "Two paraxial sources have \\(d=0.400\\,\\mathrm{mm}\\), \\(z=1.50\\,\\mathrm m\\), \\(\\lambda=500\\,\\mathrm{nm}\\), and \\(\\Delta\\phi=\\pi/2\\). Find the \\(m=0\\) bright-fringe position and the fringe spacing using the stated sign convention.",
      answer: "Equation \\([7]\\) gives \\[x_0=\\frac{1.50}{0.400\\times10^{-3}}\\left(0-\\frac{1}{4}(500\\times10^{-9})\\right)=-4.6875\\times10^{-4}\\,\\mathrm m.\\] Equation \\([8]\\) gives \\[\\Lambda=\\frac{(500\\times10^{-9})(1.50)}{0.400\\times10^{-3}}=1.875\\times10^{-3}\\,\\mathrm m.\\] Substituting \\(x_0\\) into equation \\([6]\\) returns zero total phase, verifying a bright fringe. **Final result:** \\(x_0=-0.469\\,\\mathrm{mm}\\) and \\(\\Lambda=1.875\\,\\mathrm{mm}\\).",
    },
    {
      title: "Relabelling the paths",
      question: "What happens to the predicted pattern if every wave-1 and wave-2 label is interchanged consistently?",
      answer: "The definitions give \\(\\Delta'=s_2-s_1=-\\Delta\\) and \\(\\Delta\\phi'=\\phi_2-\\phi_1=-\\Delta\\phi\\). Equation \\([2]\\) therefore gives \\(\\delta'=-\\delta\\). However, equation \\([3]\\) contains \\(\\cos\\delta' = \\cos(-\\delta)=\\cos\\delta\\), so every intensity is identical. **Final result:** consistent relabelling reverses the signed phase but leaves all fringe positions and intensities unchanged.",
    },
  ]}
/>
`;
