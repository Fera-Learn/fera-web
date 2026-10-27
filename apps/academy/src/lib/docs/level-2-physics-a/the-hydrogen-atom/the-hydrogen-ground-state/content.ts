export const content = String.raw`## Principle

The lowest hydrogen state is concentrated near the proton but has no sharp edge or preferred direction.

The hydrogen ground state is the unique lowest-energy spatial state of the Coulomb problem. It has zero orbital angular momentum, spherical symmetry, an exponentially decaying amplitude, and a nonzero spatial probability density at the nucleus even though the radial probability density vanishes there.

## Notation

<Notation
  items={[
    { symbol: "r,\\theta,\\phi", meaning: "spherical polar coordinates", unit: "m, rad, rad" },
    { symbol: "R_{10},U_{10},Y_{00},\\psi_{100}", meaning: "ground-state radial, reduced radial, angular, and complete spatial wavefunctions", unit: "m^{-3/2}, m^{-1/2}, 1, m^{-3/2}" },
    { symbol: "n,\\ell,m", meaning: "principal, orbital, and magnetic quantum numbers", unit: "1" },
    { symbol: "a", meaning: "hydrogen Bohr radius based on the hydrogen reduced mass", unit: "m" },
    { symbol: "K", meaning: "Coulomb strength e^2/(4\\pi\\epsilon_0)", unit: "J m" },
    { symbol: "e,\\epsilon_0", meaning: "elementary charge and vacuum permittivity", unit: "C, C^{2} N^{-1} m^{-2}" },
    { symbol: "\\mu,\\hbar", meaning: "hydrogen reduced mass and reduced Planck constant", unit: "kg, J s" },
    { symbol: "E_1,\\langle r\\rangle", meaning: "ground-state energy and mean radius", unit: "J, m" },
    { symbol: "A", meaning: "radial normalization constant", unit: "m^{-3/2}" },
    { symbol: "P_{10},E_{\\mathrm{ion}}", meaning: "ground-state radial density and ionization energy", unit: "m^{-1}, eV" },
  ]}
/>

## The Core Method

The ground state has \\(n=1\\), \\(\ell=0\\), and \\(m=0\\). Its centrifugal term vanishes, so the reduced radial equation is

\\[
-\frac{\hbar^2}{2\mu}\frac{d^2U_{10}}{dr^2}
-\frac{K}{r}U_{10}=E_1U_{10},
\qquad
K=\frac{e^2}{4\pi\epsilon_0}.
\tag*{[1]}
\\]

Use a regular, decaying trial form \\(U_{10}(r)=Ar e^{-r/a}\\), equivalent to \\(R_{10}(r)=Ae^{-r/a}\\). Differentiate explicitly:

\\[
\frac{dU_{10}}{dr}=Ae^{-r/a}\left(1-\frac{r}{a}\right),
\qquad
\frac{d^2U_{10}}{dr^2}=Ae^{-r/a}\left(\frac{r}{a^2}-\frac{2}{a}\right).
\tag*{[2]}
\\]

Substitute equation [2] into [1] and divide by \\(Ar e^{-r/a}\\):

\\[
-\frac{\hbar^2}{2\mu a^2}
+\left(\frac{\hbar^2}{\mu a}-K\right)\frac{1}{r}=E_1.
\tag*{[3]}
\\]

The right side cannot depend on \\(r\\), so the coefficient of \\(1/r\\) must vanish. This fixes the length and leaves the energy:

\\[
a=\frac{\hbar^2}{\mu K}
=\frac{4\pi\epsilon_0\hbar^2}{\mu e^2},
\qquad
E_1=-\frac{\hbar^2}{2\mu a^2}
=-\frac{\mu K^2}{2\hbar^2}.
\tag*{[4]}
\\]

Normalize the radial factor with the spherical-harmonic normalization already separated:

\\[
1=A^2\int_0^\infty r^2e^{-2r/a}\,dr
=A^2\frac{2!}{(2/a)^3}
=A^2\frac{a^3}{4}.
\tag*{[5]}
\\]

Choosing a positive real phase gives \\(A=2a^{-3/2}\\). Since \\(Y_{00}=1/\sqrt{4\pi}\\),

\\[
R_{10}(r)=2a^{-3/2}e^{-r/a},
\qquad
\psi_{100}(r,\theta,\phi)
=\frac{1}{\sqrt{\pi a^3}}e^{-r/a}.
\tag*{[6]}
\\]

The radial probability density and mean radius follow from the spherical measure:

\\[
P_{10}(r)=r^2|R_{10}(r)|^2
=\frac{4r^2}{a^3}e^{-2r/a},
\qquad
\langle r\rangle
=\frac{4}{a^3}\int_0^\infty r^3e^{-2r/a}\,dr
=\frac{3a}{2}.
\tag*{[7]}
\\]

The wavefunction is spherically symmetric and has no angular nodes. The most probable radius is \\(a\\), whereas the mean radius is \\(3a/2\\); these are different statistical summaries.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Ground-state energy and mean radius",
      question: "For hydrogen, use \\(a=5.29\\times10^{-11}\\,\\mathrm m\\) and \\(E_1=-13.6\\,\\mathrm{eV}\\). State the ionization energy and calculate \\(\\langle r\\rangle\\).",
      answer: "Ionization raises the electron from \\(E_1\\) to the continuum threshold \\(E=0\\), so \\[E_{\\mathrm{ion}}=0-E_1=13.6\\,\\mathrm{eV}.\\] Equation [7] gives \\[\\langle r\\rangle=\\frac{3a}{2}=\\frac32(5.29\\times10^{-11})\\,\\mathrm m=7.94\\times10^{-11}\\,\\mathrm m.\\] **Final result:** the ground-state ionization energy is \\(13.6\\,\\mathrm{eV}\\), and the mean electron-proton separation is \\(7.94\\times10^{-11}\\,\\mathrm m\\).",
    },
    {
      title: "Probability at the origin",
      question: "How can the ground-state spatial density be nonzero at the nucleus while the radial probability density is zero at \\(r=0\\)?",
      answer: "Equation [6] gives the probability per unit volume at the origin as \\[|\\psi_{100}(0)|^2=\\frac{1}{\\pi a^3},\\] which is finite and nonzero. A spherical shell, however, has volume proportional to \\(r^2dr\\). Equation [7] therefore gives \\[P_{10}(0)=\\frac{4(0)^2}{a^3}e^0=0.\\] **Final result:** the local density is nonzero, but a shell at exactly zero radius has zero volume, so its radial probability is zero; there is no contradiction.",
    },
  ]}
/>
`;
