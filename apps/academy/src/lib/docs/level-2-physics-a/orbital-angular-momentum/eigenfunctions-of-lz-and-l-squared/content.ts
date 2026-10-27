export const content = String.raw`## Principle

Returning through a full turn must bring a single-valued orbital wavefunction back to the same value.

Because total squared orbital angular momentum commutes with its z-component, their common eigenfunctions separate into polar and azimuthal factors. Single-valuedness around the azimuth quantizes the z-component, while regularity at the poles quantizes total angular momentum.

## Notation

<Notation
  items={[
    { symbol: "\\hat L_z,\\hat L^2", meaning: "z-component and total squared orbital angular-momentum operators", unit: "J s, J^{2} s^{2}" },
    { symbol: "\\theta,\\phi", meaning: "polar and azimuthal angles", unit: "rad, rad" },
    { symbol: "Y_{lm}", meaning: "common normalized angular eigenfunction", unit: "1" },
    { symbol: "\\Theta_{lm},\\Phi_m", meaning: "normalized polar and azimuthal factors", unit: "1" },
    { symbol: "l,m", meaning: "orbital and magnetic quantum numbers", unit: "1" },
    { symbol: "P_l^m", meaning: "associated Legendre function in the fixed Condon-Shortley convention", unit: "1" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "A", meaning: "azimuthal normalization constant", unit: "1" },
    { symbol: "i", meaning: "imaginary unit", unit: "1" },
  ]}
/>

## The Core Method

Start with the \\(\hat L_z\\) eigenvalue equation and write its eigenvalue as \\(m\hbar\\).

\\[
\hat L_z\Phi_m=-i\hbar\frac{d\Phi_m}{d\phi}=m\hbar\Phi_m.
\tag*{[1]}
\\]

Divide by \\(-i\hbar\\) and integrate the first-order equation.

\\[
\frac{1}{\Phi_m}\frac{d\Phi_m}{d\phi}=im,
\qquad
\ln\Phi_m=im\phi+\ln A,
\qquad
\Phi_m(\phi)=Ae^{im\phi}.
\tag*{[2]}
\\]

An orbital wavefunction must be single-valued after one full turn. Therefore

\\[
\Phi_m(\phi+2\pi)=\Phi_m(\phi)
\quad\Longrightarrow\quad
e^{i2\pi m}=1
\quad\Longrightarrow\quad
m\in\mathbb Z.
\tag*{[3]}
\\]

Normalize over \\(0\leq\phi<2\pi\\). An arbitrary constant phase is physically irrelevant, so choose \\(A\\) real and positive.

\\[
1=\int_0^{2\pi}|A|^2d\phi=2\pi|A|^2,
\qquad
\Phi_m(\phi)=\frac{e^{im\phi}}{\sqrt{2\pi}}.
\tag*{[4]}
\\]

Since the common eigenfunction must preserve the azimuthal factor, write \\(Y_{lm}(\theta,\phi)=\Theta_{lm}(\theta)\Phi_m(\phi)\\). The simultaneous eigenvalue equations are

\\[
\hat L_zY_{lm}=m\hbar Y_{lm},
\qquad
\hat L^2Y_{lm}=l(l+1)\hbar^2Y_{lm}.
\tag*{[5]}
\\]

Insert the separated form and \\(d^2\Phi_m/d\phi^2=-m^2\Phi_m\\) into the spherical-coordinate form of \\(\hat L^2\\). After dividing by \\(\Theta_{lm}\Phi_m\\), the polar equation is

\\[
\left[
\frac{1}{\sin\theta}\frac{d}{d\theta}
\left(\sin\theta\frac{d}{d\theta}\right)
+l(l+1)-\frac{m^2}{\sin^2\theta}
\right]\Theta_{lm}(\theta)=0.
\tag*{[6]}
\\]

With \\(u=\cos\theta\\), equation [6] is the associated Legendre equation. Solutions finite at both poles exist for orbital states when \\(l=0,1,2,\ldots\\) and \\(|m|\leq l\\), with \\(\Theta_{lm}\\) proportional to \\(P_l^m(\cos\theta)\\). The separate factors may be normalized as

\\[
\int_0^{2\pi}|\Phi_m|^2d\phi=1,
\qquad
\int_0^\pi|\Theta_{lm}|^2\sin\theta\,d\theta=1,
\qquad
\int_0^{2\pi}\int_0^\pi|Y_{lm}|^2\sin\theta\,d\theta\,d\phi=1.
\tag*{[7]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Normalize an azimuthal eigenfunction",
      question: "Find and normalize the \\(\\hat L_z\\) eigenfunction with eigenvalue \\(-2\\hbar\\), and verify its periodicity.",
      answer: "Equation [1] identifies \\(m=-2\\). Equation [4] then gives \\[\\Phi_{-2}(\\phi)=\\frac{e^{-2i\\phi}}{\\sqrt{2\\pi}}.\\] Its norm is \\(\\int_0^{2\\pi}(1/2\\pi)d\\phi=1\\), and \\(\\Phi_{-2}(\\phi+2\\pi)=e^{-4\\pi i}\\Phi_{-2}(\\phi)=\\Phi_{-2}(\\phi)\\). Acting with the operator gives \\(\\hat L_z\\Phi_{-2}=-2\\hbar\\Phi_{-2}\\). **Final result:** \\(\\Phi_{-2}=e^{-2i\\phi}/\\sqrt{2\\pi}\\) is normalized, periodic, and has eigenvalue \\(-2\\hbar\\).",
    },
    {
      title: "Build the l equals 1, m equals 0 state",
      question: "Given that the regular polar solution for \\(l=1,m=0\\) is proportional to \\(\\cos\\theta\\), normalize the polar factor and form \\(Y_{10}\\).",
      answer: "Let \\(\\Theta_{10}=C\\cos\\theta\\). Equation [7] requires \\[1=C^2\\int_0^\\pi\\cos^2\\theta\\sin\\theta\\,d\\theta=C^2\\int_{-1}^{1}u^2du=C^2\\frac{2}{3},\\] so \\(C=\\sqrt{3/2}\\). Since \\(\\Phi_0=1/\\sqrt{2\\pi}\\), \\[Y_{10}=\\Theta_{10}\\Phi_0=\\sqrt{\\frac{3}{4\\pi}}\\cos\\theta.\\] **Final result:** \\(\\Theta_{10}=\\sqrt{3/2}\\cos\\theta\\) and \\(Y_{10}=\\sqrt{3/(4\\pi)}\\cos\\theta\\).",
    },
  ]}
/>
`;
