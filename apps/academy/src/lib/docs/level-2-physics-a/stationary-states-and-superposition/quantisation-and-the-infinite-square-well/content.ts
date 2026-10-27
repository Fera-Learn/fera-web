export const content = String.raw`## Principle

A string fixed at both ends supports only standing waves that fit an integer number of half-wavelengths between the endpoints.

Confinement and boundary conditions select a discrete set of standing waves. For an infinite square well, this makes both the wave number and the energy quantized.

## Notation

<Notation
  items={[
    { symbol: "x,t", meaning: "position and time", unit: "m, s" },
    { symbol: "L", meaning: "well width", unit: "m" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "V(x)", meaning: "infinite-square-well potential", unit: "J" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "k", meaning: "wave number inside the well", unit: "m^{-1}" },
    { symbol: "n", meaning: "positive integer quantum number", unit: "1" },
    { symbol: "\\psi_n(x)", meaning: "normalized nth spatial eigenfunction", unit: "m^{-1/2}" },
    { symbol: "E,E_n", meaning: "trial energy and nth allowed energy", unit: "J" },
    { symbol: "\\Psi_n(x,t)", meaning: "full nth stationary state", unit: "m^{-1/2}" },
    { symbol: "A,B", meaning: "integration constants in the interior solution" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Define a well with impenetrable walls at \\(x=0\\) and \\(x=L\\).

\\[
V(x)=
\begin{cases}
0,&0<x<L,\\
\infty,&x\le 0\text{ or }x\ge L.
\end{cases}\tag*{[1]}
\\]

The wavefunction vanishes outside the well and at both walls. Inside, the time-independent Schrodinger equation is

\\[
-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}=E\psi
\quad\Longrightarrow\quad
\frac{d^2\psi}{dx^2}+k^2\psi=0,
\qquad
k^2=\frac{2mE}{\hbar^2}.\tag*{[2]}
\\]

The general interior solution is

\\[
\psi(x)=A\sin(kx)+B\cos(kx).\tag*{[3]}
\\]

Apply the left-wall boundary condition.

\\[
\psi(0)=A\sin 0+B\cos 0=B=0.\tag*{[4]}
\\]

The right-wall condition then requires

\\[
\psi(L)=A\sin(kL)=0.\tag*{[5]}
\\]

The choice \\(A=0\\) would give the zero function, which cannot represent a normalized state. Therefore \\(\sin(kL)=0\\), so

\\[
kL=n\pi,
\qquad
k_n=\frac{n\pi}{L},
\qquad
n=1,2,3,\ldots.\tag*{[6]}
\\]

The value \\(n=0\\) is excluded because it again gives the zero wavefunction. Negative integers reproduce the positive-integer functions up to an overall sign and do not define new states.

Use equation [2] to obtain the allowed energies.

\\[
E_n=\frac{\hbar^2k_n^2}{2m}
=\frac{n^2\pi^2\hbar^2}{2mL^2}.\tag*{[7]}
\\]

Normalize the interior solution.

\\[
\begin{aligned}
1
&=|A|^2\int_0^L\sin^2\left(\frac{n\pi x}{L}\right)dx\\
&=|A|^2\frac{L}{2}
\quad\Longrightarrow\quad
|A|=\sqrt{\frac{2}{L}}.
\end{aligned}\tag*{[8]}
\\]

Choosing \\(A\\) real and positive fixes a convenient overall phase. The normalized eigenfunctions and their full time dependence are

\\[
\psi_n(x)=\sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right),
\qquad
\Psi_n(x,t)=\psi_n(x)e^{-iE_nt/\hbar}.\tag*{[9]}
\\]

Quantisation is not imposed by hand: the differential equation permits many local solutions, but only the discrete set in equation [9] satisfies both boundary conditions and normalization.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Electron in a one-nanometre well",
      question: "An electron is confined to an infinite well of width \\(L=1.00\\times10^{-9}\\,\\mathrm{m}\\). Using \\(m=9.11\\times10^{-31}\\,\\mathrm{kg}\\), \\(\\hbar=1.055\\times10^{-34}\\,\\mathrm{J\\,s}\\), and \\(1\\,\\mathrm{eV}=1.602\\times10^{-19}\\,\\mathrm{J}\\), find \\(E_1\\) and \\(E_2\\).",
      answer: "From equation [7], \\[E_1=\\frac{\\pi^2(1.055\\times10^{-34})^2}{2(9.11\\times10^{-31})(1.00\\times10^{-9})^2}=6.03\\times10^{-20}\\,\\mathrm{J}.\\] Convert units: \\[E_1=\\frac{6.03\\times10^{-20}}{1.602\\times10^{-19}}\\,\\mathrm{eV}=0.376\\,\\mathrm{eV}.\\] Since \\(E_n=n^2E_1\\), \\[E_2=4E_1=1.51\\,\\mathrm{eV}.\\] **Final result:** \\(E_1=6.03\\times10^{-20}\\,\\mathrm{J}=0.376\\,\\mathrm{eV}\\) and \\(E_2=1.51\\,\\mathrm{eV}\\). The nonzero ground-state energy follows from confinement.",
    },
    {
      title: "Rejecting an apparent n=0 state",
      question: "Equation [6] also appears to allow \\(n=0\\). Why is this not a physical zero-energy state?",
      answer: "For \\(n=0\\), equation [9] gives \\[\\psi_0(x)=\\sqrt{\\frac{2}{L}}\\sin 0=0\\] at every point. Its norm is therefore \\[\\int_0^L|\\psi_0(x)|^2dx=0,\\] not one. **Final result:** \\(n=0\\) is the zero vector and cannot be normalized, so the physical sequence begins at \\(n=1\\).",
    },
  ]}
/>
`;
