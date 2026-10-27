export const content = String.raw`## Principle

Repeat the same preparation many times and the detector clicks at different positions, but the overall pattern is reproducible.

The wavefunction is a probability amplitude, not a probability itself. The Born interpretation converts its complex amplitude into real probabilities for the outcomes of measurements on identically prepared systems.

## Notation

<Notation
  items={[
    { symbol: "x,t", meaning: "position and time", unit: "m, s" },
    { symbol: "\\psi(x,t),\\psi^*(x,t)", meaning: "wavefunction and its complex conjugate", unit: "m^{-1/2}, m^{-1/2}" },
    { symbol: "\\rho(x,t)", meaning: "position probability density", unit: "m^{-1}" },
    { symbol: "P(a\\leq x\\leq b)", meaning: "probability of detecting the particle in the interval from a to b", unit: "1" },
    { symbol: "a,b,L", meaning: "interval endpoints and a reference length", unit: "m, m, m" },
    { symbol: "u,v", meaning: "real and imaginary parts of the wavefunction", unit: "m^{-1/2}, m^{-1/2}" },
    { symbol: "\\theta", meaning: "constant global phase", unit: "rad" },
    { symbol: "i", meaning: "imaginary unit, satisfying i^2=-1" },
  ]}
/>

## The Core Method

Write a general complex wavefunction in terms of real functions \\(u\\) and \\(v\\). Multiplying by its complex conjugate removes the imaginary part:

\\[
\psi=u+iv,
\qquad
\psi^*=u-iv,
\qquad
\psi^*\psi=(u-iv)(u+iv)=u^2+v^2.
\tag*{[1]}
\\]

The Born interpretation identifies this non-negative real quantity as the position probability density:

\\[
\rho(x,t)=|\psi(x,t)|^2=\psi^*(x,t)\psi(x,t).
\tag*{[2]}
\\]

Probability is density multiplied by a small width or integrated across a finite interval:

\\[
dP=\rho(x,t)\,dx,
\qquad
P(a\leq x\leq b)=\int_a^b|\psi(x,t)|^2\,dx.
\tag*{[3]}
\\]

If the particle must be somewhere on the line, mutually exclusive position probabilities add to one:

\\[
\int_{-\infty}^{\infty}|\psi(x,t)|^2\,dx=1.
\tag*{[4]}
\\]

Equation [3] predicts the relative frequency obtained from many repetitions with the same preparation. It does not predict the position of one individual detection. Dimensional consistency also matters: because \\(dP\\) is dimensionless and \\(dx\\) has unit metres, \\(|\psi|^2\\) has unit \\(\mathrm{m^{-1}}\\) and \\(\psi\\) has unit \\(\mathrm{m^{-1/2}}\\) in one dimension.

A constant global phase cannot affect any position probability:

\\[
|e^{i\theta}\psi|^2
=(e^{i\theta}\psi)^*(e^{i\theta}\psi)
=e^{-i\theta}e^{i\theta}\psi^*\psi
=|\psi|^2.
\tag*{[5]}
\\]

Do not replace \\(|\psi|^2\\) by \\(\psi^2\\). For a complex wavefunction, \\(\psi^2\\) need not be real or non-negative and therefore cannot be a probability density.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Probability in half a box",
      question: "A particle on \\(0\\leq x\\leq L\\) has \\(\\psi(x)=\\sqrt{2/L}\\sin(\\pi x/L)\\). Find the probability of detecting it in \\(0\\leq x\\leq L/2\\).",
      answer: "Apply equation [3]. The wavefunction is real, so \\( |\\psi|^2=(2/L)\\sin^2(\\pi x/L)\\). Use \\(\\sin^2 y=(1-\\cos 2y)/2\\): \\[P=\\frac{2}{L}\\int_0^{L/2}\\sin^2\\left(\\frac{\\pi x}{L}\\right)\\,dx=\\frac{1}{L}\\int_0^{L/2}\\left[1-\\cos\\left(\\frac{2\\pi x}{L}\\right)\\right]\\,dx.\\] Integrating each term gives \\[P=\\frac{1}{L}\\left[x-\\frac{L}{2\\pi}\\sin\\left(\\frac{2\\pi x}{L}\\right)\\right]_0^{L/2}=\\frac{1}{L}\\left(\\frac{L}{2}-0\\right)=\\frac12.\\] **Final result:** \\(\\boxed{P(0\\leq x\\leq L/2)=1/2}\\), consistent with the density's symmetry about \\(L/2\\).",
    },
    {
      title: "Changing only the global phase",
      question: "Two preparations use \\(\\psi_1(x)=\\psi(x)\\) and \\(\\psi_2(x)=i\\psi(x)\\). Can a position measurement distinguish them?",
      answer: "The factor \\(i=e^{i\\pi/2}\\) is a global phase. Equation [5] gives \\( |\\psi_2|^2=|i|^2|\\psi|^2=|\\psi|^2\\), or directly \\( (i\\psi)^*(i\\psi)=(-i)(i)\\psi^*\\psi=\\psi^*\\psi\\). Every interval probability is therefore identical. **Final result:** position measurements cannot distinguish the two preparations; only relative phases between superposed components can change interference.",
    },
  ]}
/>
`;
