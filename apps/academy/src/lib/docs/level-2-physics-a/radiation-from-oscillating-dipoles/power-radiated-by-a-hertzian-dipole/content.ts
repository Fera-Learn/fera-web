export const content = String.raw`## Principle

A larger sphere intercepts a weaker field over a larger area, so the total outward radiation can remain constant.

The total time-averaged power of a Hertzian dipole is obtained by integrating its angular radiation pattern over a complete sphere. The inverse-square dependence disappears against the sphere's area, leaving a result determined only by source amplitude and frequency.

## Notation

<Notation
  items={[
    { symbol: "P", meaning: "total time-averaged radiated power", unit: "W" },
    { symbol: "p_0", meaning: "peak electric-dipole-moment magnitude", unit: "C m" },
    { symbol: "\\vec p", meaning: "electric dipole moment", unit: "C m" },
    { symbol: "\\hat{\\vec z}", meaning: "unit vector along the dipole axis" },
    { symbol: "I_0", meaning: "peak current magnitude", unit: "A" },
    { symbol: "\\ell", meaning: "Hertzian-dipole length", unit: "m" },
    { symbol: "\\omega,f,\\lambda", meaning: "angular frequency, frequency, and wavelength", unit: "rad s^{-1}, Hz, m" },
    { symbol: "\\theta,\\phi", meaning: "polar and azimuthal angles", unit: "rad, rad" },
    { symbol: "\\Omega,\\mathrm d\\Omega", meaning: "solid angle and differential solid angle", unit: "sr, sr" },
    { symbol: "c,\\epsilon_0,\\mu_0", meaning: "vacuum wave speed, permittivity, and permeability", unit: "m s^{-1}, F m^{-1}, H m^{-1}" },
    { symbol: "R_{\\mathrm{rad}}", meaning: "radiation resistance defined using peak current", unit: "\\Omega" },
  ]}
/>

## The Core Method

For a dipole moment \\(\vec p(t)=p_0\cos(\omega t)\hat{\vec z}\\), the time-averaged power per unit solid angle is

\\[
\frac{\mathrm dP}{\mathrm d\Omega}
=\frac{p_0^2\omega^4}{32\pi^2\epsilon_0c^3}\sin^2\theta,
\qquad
\mathrm d\Omega=\sin\theta\,\mathrm d\theta\,\mathrm d\phi.
\tag*{[1]}
\\]

Integrate over all polar and azimuthal directions:

\\[
P=\int_{0}^{2\pi}\int_{0}^{\pi}
\frac{p_0^2\omega^4}{32\pi^2\epsilon_0c^3}
\sin^2\theta\sin\theta\,\mathrm d\theta\,\mathrm d\phi.
\tag*{[2]}
\\]

Separate the constant and the two integrals. The angular steps are

\\[
\begin{aligned}
\int_0^{2\pi}\mathrm d\phi&=2\pi,\\
\int_0^\pi\sin^3\theta\,\mathrm d\theta
&=\int_0^\pi\sin\theta(1-\cos^2\theta)\,\mathrm d\theta\\
&=\left[-\cos\theta+\frac13\cos^3\theta\right]_0^\pi
=\frac43.
\end{aligned}
\tag*{[3]}
\\]

Substitution of equation [3] into [2] gives

\\[
\boxed{
P=\frac{p_0^2\omega^4}{12\pi\epsilon_0c^3}
}.
\tag*{[4]}
\\]

For the cosine convention, charge conservation gives the peak-current relation \\(I_0\ell=\omega p_0\\). Also use \\(c^2=1/(\mu_0\epsilon_0)\\) and \\(\lambda=2\pi c/\omega\\). Substitution into equation [4] proceeds as

\\[
\begin{aligned}
P
&=\frac{(I_0\ell/\omega)^2\omega^4}{12\pi\epsilon_0c^3}\\
&=\frac{I_0^2\ell^2\omega^2}{12\pi\epsilon_0c^3}\\
&=\frac{\mu_0I_0^2\ell^2\omega^2}{12\pi c}
=\frac{\mu_0c\pi}{3}I_0^2\left(\frac{\ell}{\lambda}\right)^2.
\end{aligned}
\tag*{[5]}
\\]

The dimensions of equation [4] reduce to watts:

\\[
\left[
\frac{p_0^2\omega^4}{\epsilon_0c^3}
\right]
=\frac{\mathrm{C^2\,m^2\,s^{-4}}}
{\mathrm{C^2\,N^{-1}\,m^{-2}}\,\mathrm{m^3\,s^{-3}}}
=\mathrm{N\,m\,s^{-1}}=\mathrm W.
\tag*{[6]}
\\]

Define radiation resistance by equating the average radiated power to the average power associated with a peak sinusoidal current, \\(P=I_0^2R_{\mathrm{rad}}/2\\). Equation [5] then gives

\\[
\boxed{
R_{\mathrm{rad}}
=\frac{2P}{I_0^2}
=\frac{2\mu_0c\pi}{3}\left(\frac{\ell}{\lambda}\right)^2
=80\pi^2\left(\frac{\ell}{\lambda}\right)^2\,\Omega
}.
\tag*{[7]}
\\]

The last numerical form uses \\(\mu_0c\simeq120\pi\,\Omega\\). It applies to a uniform Hertzian current element with \\(\ell\ll\lambda\\); using it for a long antenna with nonuniform current is not justified.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Power from a short current element",
      question: "A Hertzian dipole has peak current \\(I_0=1.0\\,\\mathrm A\\), length \\(\\ell=1.0\\,\\mathrm{cm}\\), and frequency \\(f=100\\,\\mathrm{MHz}\\). Find its radiation resistance and average radiated power.",
      answer: "First calculate the wavelength: \\[\\lambda=\\frac{c}{f}=\\frac{3.00\\times10^8}{1.00\\times10^8}=3.00\\,\\mathrm m.\\] The electrical length is \\(\\ell/\\lambda=0.010/3.00=3.33\\times10^{-3}\\), so the Hertzian approximation is reasonable. Equation [7] gives \\[R_{\\mathrm{rad}}=80\\pi^2(3.33\\times10^{-3})^2=8.77\\times10^{-3}\\,\\Omega.\\] Because \\(I_0\\) is a peak current, \\[P=\\frac12I_0^2R_{\\mathrm{rad}}=\\frac12(1.0)^2(8.77\\times10^{-3})=4.39\\times10^{-3}\\,\\mathrm W.\\] **Final result:** \\(R_{\\mathrm{rad}}=8.77\\,\\mathrm{m\\Omega}\\) and \\(P=4.39\\,\\mathrm{mW}\\). The small resistance is consistent with the very short electrical length.",
    },
    {
      title: "Frequency scaling under two source constraints",
      question: "The angular frequency of a Hertzian dipole is doubled. By what factor does the radiated power change if (a) \\(p_0\\) is fixed and (b) \\(I_0\\ell\\) is fixed?",
      answer: "For fixed dipole-moment amplitude, equation [4] gives \\(P\\propto\\omega^4\\), so \\[\\frac{P_2}{P_1}=\\left(\\frac{2\\omega}{\\omega}\\right)^4=16.\\] For fixed peak current element, equation [5] gives \\(P\\propto\\omega^2\\), so \\[\\frac{P_2}{P_1}=\\left(\\frac{2\\omega}{\\omega}\\right)^2=4.\\] **Final result:** the power increases by a factor of \\(16\\) at fixed \\(p_0\\), but by a factor of \\(4\\) at fixed \\(I_0\\ell\\). The answers differ because \\(I_0\\ell=\\omega p_0\\), so the two conditions do not describe the same source as frequency changes.",
    },
  ]}
/>
`;
