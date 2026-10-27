export const content = String.raw`## Principle

A single particle must be found somewhere when every possible position is included.

Normalisation fixes the overall magnitude of a wavefunction so that its total probability is one. For evolution under a real potential, the Schrodinger equation preserves that total probability when no probability flows through the boundaries.

## Notation

<Notation
  items={[
    { symbol: "x,t", meaning: "position and time", unit: "m, s" },
    { symbol: "f(x,t)", meaning: "square-integrable unnormalised state" },
    { symbol: "N", meaning: "complex normalisation constant" },
    { symbol: "A", meaning: "box-normalised plane-wave amplitude", unit: "m^{-1/2}" },
    { symbol: "\\psi(x,t),\\psi^*(x,t)", meaning: "normalised wavefunction and its complex conjugate", unit: "m^{-1/2}, m^{-1/2}" },
    { symbol: "I(t)", meaning: "total integrated probability", unit: "1" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "V(x,t)", meaning: "real potential energy", unit: "J" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\alpha", meaning: "positive Gaussian width parameter", unit: "m^{-2}" },
    { symbol: "L,d", meaning: "box length and subinterval length", unit: "m, m" },
    { symbol: "k,\\omega", meaning: "angular wave number and angular frequency", unit: "m^{-1}, rad s^{-1}" },
    { symbol: "P", meaning: "probability for a specified interval", unit: "1" },
    { symbol: "i", meaning: "imaginary unit, satisfying i^2=-1" },
  ]}
/>

## The Core Method

Let \\(f\\) be square-integrable on the physical domain and set \\(\psi=Nf\\). The normalisation condition gives

\\[
1=\int_{-\infty}^{\infty}|\psi|^2\,dx
=\int_{-\infty}^{\infty}(Nf)^*(Nf)\,dx
=|N|^2\int_{-\infty}^{\infty}|f|^2\,dx.
\tag*{[1]}
\\]

Solve for the magnitude of \\(N\\):

\\[
|N|=\left(\int_{-\infty}^{\infty}|f(x,t)|^2\,dx\right)^{-1/2},
\qquad
\psi(x,t)=\frac{f(x,t)}{\sqrt{\int_{-\infty}^{\infty}|f(x,t)|^2\,dx}}.
\tag*{[2]}
\\]

The phase of \\(N\\) is arbitrary because probabilities depend on \\(|N|^2\\). Equation [2] exists only when the integral is finite and nonzero. An ideal plane wave on the infinite line is not square-integrable, so it cannot be normalised to one there; it may instead be box-normalised or treated with continuum normalisation.

To check that normalisation survives time evolution, define the total probability

\\[
I(t)=\int_{-\infty}^{\infty}\psi^*(x,t)\psi(x,t)\,dx.
\tag*{[3]}
\\]

Differentiate under the integral and use the Schrodinger equation and its complex conjugate for real \\(V\\):

\\[
\frac{\partial\psi}{\partial t}
=\frac{i\hbar}{2m}\frac{\partial^2\psi}{\partial x^2}-\frac{i}{\hbar}V\psi,
\qquad
\frac{\partial\psi^*}{\partial t}
=-\frac{i\hbar}{2m}\frac{\partial^2\psi^*}{\partial x^2}+\frac{i}{\hbar}V\psi^*.
\tag*{[4]}
\\]

The potential terms cancel. Apply the product rule in reverse to the remaining spatial terms:

\\[
\begin{aligned}
\frac{dI}{dt}
&=\int_{-\infty}^{\infty}
\left(\frac{\partial\psi^*}{\partial t}\psi
+\psi^*\frac{\partial\psi}{\partial t}\right)dx \\
&=\frac{i\hbar}{2m}\int_{-\infty}^{\infty}
\left(\psi^*\frac{\partial^2\psi}{\partial x^2}
-\psi\frac{\partial^2\psi^*}{\partial x^2}\right)dx \\
&=\frac{i\hbar}{2m}\int_{-\infty}^{\infty}
\frac{\partial}{\partial x}
\left(\psi^*\frac{\partial\psi}{\partial x}
-\psi\frac{\partial\psi^*}{\partial x}\right)dx.
\end{aligned}
\tag*{[5]}
\\]

For a bound state, \\(\psi\\) and its derivative vanish sufficiently rapidly as \\(x\\) tends to either infinity. More generally, the two boundaries must carry equal probability current. Under either condition,

\\[
\frac{dI}{dt}
=\frac{i\hbar}{2m}
\left[\psi^*\frac{\partial\psi}{\partial x}
-\psi\frac{\partial\psi^*}{\partial x}\right]_{-\infty}^{\infty}
=0.
\tag*{[6]}
\\]

Therefore a state normalised at one time remains normalised. Dropping the boundary term without stating the boundary behaviour would leave the argument incomplete.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Normalise a Gaussian",
      question: "Normalise \\(f(x)=e^{-\\alpha x^2/2}\\) on the real line, where \\(\\alpha\\gt0\\).",
      answer: "Set \\(\\psi=Nf\\). Squaring the magnitude doubles the exponent, so equation [1] gives \\[1=|N|^2\\int_{-\\infty}^{\\infty}e^{-\\alpha x^2}\\,dx.\\] Use the Gaussian integral \\(\\int_{-\\infty}^{\\infty}e^{-\\alpha x^2}\\,dx=\\sqrt{\\pi/\\alpha}\\): \\[1=|N|^2\\sqrt{\\frac{\\pi}{\\alpha}}\\quad\\Longrightarrow\\quad |N|^2=\\sqrt{\\frac{\\alpha}{\\pi}}.\\] Taking the positive real phase convention, \\[N=\\left(\\frac{\\alpha}{\\pi}\\right)^{1/4}.\\] **Final result:** \\(\\boxed{\\psi(x)=(\\alpha/\\pi)^{1/4}e^{-\\alpha x^2/2}}\\). The prefactor has unit \\(\\mathrm{m^{-1/2}}\\), as required because \\(\\alpha^{1/4}\\) has that unit.",
    },
    {
      title: "Box-normalise a plane wave",
      question: "A plane wave \\(\\psi=Ae^{i(kx-\\omega t)}\\) is restricted to \\(0\\leq x\\leq L\\). Choose a real positive \\(A\\), then find the probability of a subinterval of length \\(d\\).",
      answer: "Inside the box, \\( |e^{i(kx-\\omega t)}|^2=1\\). Normalisation gives \\[1=|A|^2\\int_0^L dx=|A|^2L,\\] so the positive convention is \\(A=1/\\sqrt L\\). For any subinterval fully inside the box, \\[P=\\int_{\\text{subinterval}}|\\psi|^2\\,dx=\\frac{1}{L}\\int_{\\text{subinterval}}dx=\\frac dL.\\] **Final result:** \\(\\boxed{A=L^{-1/2}}\\) and \\(\\boxed{P=d/L}\\); the uniform density makes only the interval length relevant.",
    },
  ]}
/>
`;
