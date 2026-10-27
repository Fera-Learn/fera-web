export const content = String.raw`## Principle

Move equal positive and negative charges back and forth over a very short distance and the changing dipole launches electromagnetic fields.

A Hertzian dipole is an idealised, electrically short current element. Its oscillating endpoint charges and current describe the same source, and its small size lets the retarded vector potential be evaluated as though the whole source were concentrated at one point.

## Notation

<Notation
  items={[
    { symbol: "q,q_0,\\dot q", meaning: "signed endpoint charge, its peak magnitude, and its time derivative", unit: "C, C, A" },
    { symbol: "\\ell", meaning: "dipole length", unit: "m" },
    { symbol: "\\vec p,p,p_0", meaning: "electric dipole moment, its z component, and its peak magnitude", unit: "C m, C m, C m" },
    { symbol: "I,I_0", meaning: "current and its peak magnitude", unit: "A, A" },
    { symbol: "\\vec J", meaning: "source current density", unit: "A m^{-2}" },
    { symbol: "\\vec A,\\widetilde{\\vec A}", meaning: "physical vector potential and its phasor", unit: "T m, T m" },
    { symbol: "V", meaning: "scalar potential", unit: "V" },
    { symbol: "r,\\theta", meaning: "distance from the dipole centre and polar angle from its axis", unit: "m, rad" },
    { symbol: "R_\\pm", meaning: "distance from the +z or -z endpoint to the observation point", unit: "m" },
    { symbol: "t_r,t_\\pm", meaning: "centre and endpoint retarded times", unit: "s, s" },
    { symbol: "\\omega,f,k,\\lambda", meaning: "angular frequency, frequency, wavenumber, and wavelength", unit: "rad s^{-1}, Hz, m^{-1}, m" },
    { symbol: "c,\\epsilon_0,\\mu_0", meaning: "vacuum wave speed, permittivity, and permeability", unit: "m s^{-1}, F m^{-1}, H m^{-1}" },
    { symbol: "\\hat{\\vec z}", meaning: "unit vector along the dipole axis" },
  ]}
/>

## The Core Method

Place the dipole at the origin along \\(+z\\). The physical dipole moment is chosen to be

\\[
\boxed{
\vec p(t)=p_0\cos(\omega t)\hat{\vec z},
\qquad p_0=q_0\ell
}.
\tag*{[1]}
\\]

Charge conservation relates the current element to the rate of change of dipole moment. With positive current defined along \\(+z\\),

\\[
I(t)\ell\hat{\vec z}=\frac{\mathrm d\vec p}{\mathrm dt}
=-\omega p_0\sin(\omega t)\hat{\vec z},
\qquad
I_0\ell=\omega p_0.
\tag*{[2]}
\\]

<PhysicsDiagram slug="hertzian-dipole-source-equivalence" />

The source figure chooses the equivalent shifted convention \\(p\propto\sin\omega t\\), so its current curve is proportional to \\(\cos\omega t\\). Shifting the time origin gives equations [1]–[2]: in either convention, the current is one quarter-cycle ahead of the displacement and satisfies \\(I\ell=\mathrm dp/\mathrm dt\\).

The minus sign is not optional under the cosine convention: current points along \\(-z\\) while the positive dipole moment is decreasing. A Hertzian current element idealises the current amplitude as uniform along its length. This is a source-model assumption, not a consequence of being electrically short. The geometric and phase conditions are

\\[
\boxed{
\ell\ll\lambda,
\qquad
k\ell=\frac{2\pi\ell}{\lambda}\ll1,
\qquad
r\gg\ell,
\qquad
\lambda=\frac{2\pi c}{\omega}
}.
\tag*{[3]}
\\]

The condition \\(\ell\ll\lambda\\), equivalently \\(k\ell\ll1\\), controls propagation-phase variation along the element. It permits one common current phase, but it does not determine the current-amplitude profile. The condition \\(r\gg\ell\\) makes the source-to-observation distance effectively \\(r\\) for every part of the ideal uniform-current element. Begin from the retarded vector potential:

\\[
\vec A(\vec r,t)=\frac{\mu_0}{4\pi}
\int\frac{\vec J(\vec r\,',t-|\vec r-\vec r\,'|/c)}
{|\vec r-\vec r\,'|}\,\mathrm d^3r'.
\tag*{[4]}
\\]

For a thin current element, \\(\int\vec J\,\mathrm d^3r'=I\ell\hat{\vec z}\\). Applying the uniform-current idealisation and the conditions in equation [3] to equation [4] gives

\\[
\boxed{
\vec A(\vec r,t)
\simeq\frac{\mu_0\ell}{4\pi r}I(t_r)\hat{\vec z}
=\frac{\mu_0}{4\pi r}\dot{\vec p}(t_r)
},
\qquad t_r=t-\frac{r}{c}.
\tag*{[5]}
\\]

Using physical quantities as real parts of phasors proportional to \\(e^{-i\omega t}\\), the dipole phasor is \\(p_0\hat{\vec z}\\), its derivative contributes \\(-i\omega\\), and the retardation contributes \\(e^{ikr}\\). Thus

\\[
\boxed{
\widetilde{\vec A}(\vec r)
=-i\frac{\mu_0\omega p_0}{4\pi r}e^{ikr}\hat{\vec z}
},
\qquad k=\frac{\omega}{c}.
\tag*{[6]}
\\]

To obtain the scalar potential without losing the induction term, place charges \\(+q(t)\\) and \\(-q(t)\\) at \\(z=+\ell/2\\) and \\(z=-\ell/2\\). Their exact retarded contribution is

\\[
V(r,\theta,t)=\frac{1}{4\pi\epsilon_0}
\left[
\frac{q(t_+)}{R_+}-\frac{q(t_-)}{R_-}
\right],
\qquad
R_\pm=\left|\vec r\mp\frac{\ell}{2}\hat{\vec z}\right|,
\qquad
t_\pm=t-\frac{R_\pm}{c}.
\tag*{[7]}
\\]

For \\(r\gg\ell\\), expand the endpoint distances to first order in \\(\ell/r\\):

\\[
\begin{aligned}
R_\pm
&=r\left(1\mp\frac{\ell\cos\theta}{r}
+\frac{\ell^2}{4r^2}\right)^{1/2}
\simeq r\mp\frac{\ell}{2}\cos\theta,\\
t_\pm
&=t-\frac{R_\pm}{c}
\simeq t_r\pm\frac{\ell\cos\theta}{2c},
\qquad t_r=t-\frac{r}{c}.
\end{aligned}
\tag*{[8]}
\\]

The reciprocal-distance and endpoint-charge expansions are therefore

\\[
\begin{aligned}
\frac{1}{R_\pm}
&\simeq\frac{1}{r}
\left(1\pm\frac{\ell\cos\theta}{2r}\right),\\
q(t_\pm)
&\simeq q(t_r)
\pm\frac{\ell\cos\theta}{2c}\dot q(t_r).
\end{aligned}
\tag*{[9]}
\\]

Multiplying the two first-order expressions and discarding products of order \\(\ell^2\\) gives

\\[
\frac{q(t_\pm)}{R_\pm}
\simeq
\frac{q(t_r)}{r}
\pm\frac{q(t_r)\ell\cos\theta}{2r^2}
\pm\frac{\dot q(t_r)\ell\cos\theta}{2cr}.
\tag*{[10]}
\\]

Subtract the negative-endpoint contribution in equation [7], then use \\(p=q\ell\\) and \\(\dot p=\dot q\ell\\). Both first-order differences have the same sign, so the time-retardation correction is positive:

\\[
\boxed{
V(r,\theta,t)=\frac{\cos\theta}{4\pi\epsilon_0}
\left[
\frac{p(t_r)}{r^2}
+\frac{\dot p(t_r)}{cr}
\right]
}.
\tag*{[11]}
\\]

The \\(r^{-2}\\) term comes from expanding \\(1/R_\pm\\), while the positive \\(\dot p/(cr)\\) term comes from expanding the endpoint retarded times. Keeping only the static-looking term would omit an essential induction contribution.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Relating endpoint charge, dipole moment, and current",
      question: "A \\(5.0\\,\\mathrm{mm}\\) Hertzian dipole has endpoint-charge amplitude \\(q_0=2.0\\,\\mathrm{nC}\\) and oscillates at \\(f=10\\,\\mathrm{MHz}\\). Find \\(p_0\\), \\(I_0\\), and \\(\\ell/\\lambda\\).",
      answer: "The strategy is to use equations [1]-[3] and then test the short-dipole approximation. The dipole amplitude is \\[p_0=q_0\\ell=(2.0\\times10^{-9})(5.0\\times10^{-3})=1.0\\times10^{-11}\\,\\mathrm{C\\,m}.\\] With \\(\\omega=2\\pi f=6.283\\times10^7\\,\\mathrm{rad\\,s^{-1}}\\), equation [2] gives \\[I_0=\\frac{\\omega p_0}{\\ell}=\\omega q_0=(6.283\\times10^7)(2.0\\times10^{-9})=0.126\\,\\mathrm A.\\] The wavelength and size ratio are \\[\\lambda=\\frac{c}{f}=\\frac{3.00\\times10^8}{1.0\\times10^7}=30.0\\,\\mathrm m,\\qquad \\frac{\\ell}{\\lambda}=\\frac{5.0\\times10^{-3}}{30.0}=1.67\\times10^{-4}.\\] **Final result:** \\(p_0=1.0\\times10^{-11}\\,\\mathrm{C\\,m}\\), \\(I_0=0.126\\,\\mathrm A\\), and \\(\\ell/\\lambda=1.67\\times10^{-4}\\). The small ratio confirms negligible phase variation, while uniform current amplitude remains part of the ideal Hertzian model.",
    },
    {
      title: "When the point-dipole approximation fails",
      question: "An antenna has \\(\\ell=0.50\\,\\mathrm m\\), wavelength \\(\\lambda=2.0\\,\\mathrm m\\), and is observed at \\(r=0.60\\,\\mathrm m\\). Can equations [5]-[11] be used as Hertzian-dipole potentials?",
      answer: "Test each independent approximation rather than relying on the label 'dipole'. The electrical-size ratio is \\[\\frac{\\ell}{\\lambda}=\\frac{0.50}{2.0}=0.25,\\] which is not much less than one, so propagation phase can vary significantly along the antenna. Uniform current amplitude would still be a separate ideal assumption. The observation-distance ratio is \\[\\frac{r}{\\ell}=\\frac{0.60}{0.50}=1.2,\\] which is not much greater than one, so different parts of the source have appreciably different distances and delays. **Final result:** neither Hertzian condition is satisfied. A distributed-current antenna calculation is required; substituting the numbers into the point-dipole formulas would give unjustified fields even if the algebra were correct.",
    },
  ]}
/>
`;
