export const content = String.raw`## Principle

Light crosses empty space without a material string or fluid to carry it.

In vacuum, changing electric and magnetic fields sustain one another. Maxwell's source-free equations therefore become wave equations whose propagation speed is fixed by the electric and magnetic constants of free space.

## Notation

<Notation
  items={[
    { symbol: "\\vec E,\\vec B", meaning: "electric and magnetic fields", unit: "V m^{-1}, T" },
    { symbol: "\\nabla,\\nabla^2", meaning: "vector differential operator and Laplacian", unit: "m^{-1}, m^{-2}" },
    { symbol: "\\epsilon_0,\\mu_0", meaning: "permittivity and permeability of free space", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "\\vec r,t", meaning: "position and time", unit: "m, s" },
    { symbol: "\\vec k,k", meaning: "wavevector and its magnitude", unit: "m^{-1}, m^{-1}" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "\\vec E_0", meaning: "constant complex electric-field amplitude", unit: "V m^{-1}" },
    { symbol: "c", meaning: "electromagnetic wave speed in vacuum", unit: "m s^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

In a region containing no charge or current, the two Maxwell curl equations are

\\[
\nabla\times\vec E=-\frac{\partial\vec B}{\partial t},\qquad
\nabla\times\vec B=\mu_0\epsilon_0\frac{\partial\vec E}{\partial t}.
\tag*{[1]}
\\]

Take the curl of the electric-field equation. Time and spatial derivatives can be interchanged for smooth fields, so substitution of the magnetic-field equation gives

\\[
\nabla\times(\nabla\times\vec E)
=-\frac{\partial}{\partial t}(\nabla\times\vec B)
=-\mu_0\epsilon_0\frac{\partial^2\vec E}{\partial t^2}.
\tag*{[2]}
\\]

The vector identity for the double curl is

\\[
\nabla\times(\nabla\times\vec E)
=\nabla(\nabla\cdot\vec E)-\nabla^2\vec E.
\tag*{[3]}
\\]

The source-free electric Gauss law is \\(\nabla\cdot\vec E=0\\). Equating [2] and [3], removing the zero divergence term, and multiplying by \\(-1\\) gives the electric-field wave equation.

\\[
\nabla^2\vec E=\mu_0\epsilon_0\frac{\partial^2\vec E}{\partial t^2}.
\tag*{[4]}
\\]

For the magnetic field, take the curl of the second equation in [1], substitute the first equation, and use the same double-curl identity. The source-free magnetic Gauss law sets \\(\nabla\cdot\vec B=0\\), so

\\[
\begin{aligned}
\nabla\times(\nabla\times\vec B)
&=\mu_0\epsilon_0\frac{\partial}{\partial t}(\nabla\times\vec E)
=-\mu_0\epsilon_0\frac{\partial^2\vec B}{\partial t^2},\\
\nabla(\nabla\cdot\vec B)-\nabla^2\vec B
&=-\mu_0\epsilon_0\frac{\partial^2\vec B}{\partial t^2},\\
\nabla^2\vec B
&=\mu_0\epsilon_0\frac{\partial^2\vec B}{\partial t^2}.
\end{aligned}
\tag*{[5]}
\\]

Use the harmonic convention

\\[
\vec E(\vec r,t)=\operatorname{Re}\!\left\{\vec E_0e^{i(\vec k\cdot\vec r-\omega t)}\right\}.
\tag*{[6]}
\\]

The physical field is the real part; the complex exponential is only a calculation tool. With the sign convention in [6], \\(\nabla^2\vec E=-k^2\vec E\\) and \\(\partial^2\vec E/\partial t^2=-\omega^2\vec E\\). Substitution into [4] gives

\\[
-k^2\vec E=-\mu_0\epsilon_0\omega^2\vec E
\quad\Longrightarrow\quad
k^2=\mu_0\epsilon_0\omega^2.
\tag*{[7]}
\\]

For a nonzero wave, take the positive root because \\(k\\) and \\(\omega\\) denote positive magnitudes. The vacuum dispersion relation is linear.

\\[
c=\frac{\omega}{k}=\frac{1}{\sqrt{\mu_0\epsilon_0}}
\approx2.998\times10^8\,\mathrm{m\,s^{-1}}.
\tag*{[8]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Calculating the speed predicted by Maxwell's equations",
      question: "Use \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{H\\,m^{-1}}\\) and \\(\\epsilon_0=8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\) to calculate the vacuum wave speed.",
      answer: "The strategy is to substitute the two vacuum constants into equation [8]. First multiply them without early rounding: \\[\\mu_0\\epsilon_0=(4\\pi\\times10^{-7}\\,\\mathrm{H\\,m^{-1}})(8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}})=1.112\\times10^{-17}\\,\\mathrm{s^2\\,m^{-2}}.\\] Now take the reciprocal square root: \\[c=\\frac{1}{\\sqrt{1.112\\times10^{-17}\\,\\mathrm{s^2\\,m^{-2}}}}=2.999\\times10^8\\,\\mathrm{m\\,s^{-1}}.\\] **Final result:** \\(c\\approx3.00\\times10^8\\,\\mathrm{m\\,s^{-1}}\\). The units reduce to speed, and the value agrees with the measured speed of light.",
    },
    {
      title: "A nonzero field in source-free space",
      question: "Does the condition \\(\\nabla\\cdot\\vec E=0\\) require the electric field to vanish in vacuum? Explain using a plane wave.",
      answer: "No. Zero divergence means that the region has no local electric source or sink; it does not mean that the field is zero. A plane wave of the form \\(\\vec E=\\operatorname{Re}\\{\\vec E_0e^{i(\\vec k\\cdot\\vec r-\\omega t)}\\}\\) has \\(\\nabla\\cdot\\vec E=0\\) when \\(\\vec k\\cdot\\vec E_0=0\\), yet its field amplitude is nonzero. **Final result:** source-free space can contain a propagating electromagnetic field, provided the field is transverse and satisfies the wave equation.",
    },
  ]}
/>
`;
