export const content = String.raw`## Principle

A change at a source cannot affect a distant observation point until light has had time to cross the separation.

Scalar and vector potentials package the electric and magnetic fields into quantities whose source solutions can be delayed by the travel time of light. The delay is essential for radiation: a change at the source cannot alter a distant field instantaneously.

## Notation

<Notation
  items={[
    { symbol: "V,\\vec A", meaning: "scalar and magnetic vector potentials", unit: "V, T m" },
    { symbol: "\\vec E,\\vec B", meaning: "electric field and magnetic flux density", unit: "V m^{-1}, T" },
    { symbol: "\\rho,\\vec J", meaning: "charge density and current density", unit: "C m^{-3}, A m^{-2}" },
    { symbol: "\\vec r,\\vec r\\,',R", meaning: "observation position, source position, and their separation", unit: "m, m, m" },
    { symbol: "t,t_R", meaning: "observation time and retarded source time", unit: "s, s" },
    { symbol: "\\epsilon_0,\\mu_0", meaning: "vacuum permittivity and permeability", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "c", meaning: "speed of light in vacuum", unit: "m s^{-1}" },
    { symbol: "Q", meaning: "point-source charge", unit: "C" },
    { symbol: "\\omega,f,k", meaning: "angular frequency, frequency, and wavenumber", unit: "rad s^{-1}, Hz, m^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

The magnetic field has zero divergence, so introduce a vector potential whose curl is the magnetic field:

\\[
\boxed{\vec B=\nabla\times\vec A}.
\tag*{[1]}
\\]

Faraday's law then requires the electric field to contain both a scalar-potential term and a time-dependent vector-potential term:

\\[
\boxed{\vec E=-\nabla V-\frac{\partial\vec A}{\partial t}}.
\tag*{[2]}
\\]

These definitions automatically satisfy both homogeneous Maxwell equations. The divergence of a curl is zero, so

\\[
\nabla\cdot\vec B
=\nabla\cdot(\nabla\times\vec A)=0.
\tag*{[3]}
\\]

Likewise, the curl of a gradient is zero and spatial derivatives commute with the time derivative. Taking the curl of equation [2] therefore gives

\\[
\begin{aligned}
\nabla\times\vec E
&=-\nabla\times(\nabla V)
-\frac{\partial}{\partial t}(\nabla\times\vec A)\\
&=0-\frac{\partial\vec B}{\partial t}.
\end{aligned}
\tag*{[4]}
\\]

For sources in vacuum, let

\\[
R=|\vec r-\vec r\,'|,
\qquad
t_R=t-\frac{R}{c}.
\tag*{[5]}
\\]

The retarded potentials are

\\[
\boxed{
V(\vec r,t)=\frac{1}{4\pi\epsilon_0}
\int\frac{\rho(\vec r\,',t_R)}{R}\,\mathrm d^3r',
\qquad
\vec A(\vec r,t)=\frac{\mu_0}{4\pi}
\int\frac{\vec J(\vec r\,',t_R)}{R}\,\mathrm d^3r'
}.
\tag*{[6]}
\\]

Every source element is evaluated at the earlier time needed for its influence to reach the observation point. In the static limit the source has no time dependence, so equation [6] reduces to the Coulomb and magnetostatic potentials. For harmonic calculations the convention used here is

\\[
\text{physical quantity}=\operatorname{Re}
\left\{\text{phasor}\,e^{-i\omega t}\right\},
\qquad
\text{outgoing radial factor}=e^{ikr},
\qquad k=\frac{\omega}{c}.
\tag*{[7]}
\\]

The sign of the time derivative in equation [2] must not be dropped: it is the part that permits a time-varying vector potential to create an electric field even when \\(V=0\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Recovering the point-charge electric field",
      question: "A stationary point charge \\(Q=3.0\\,\\mathrm{nC}\\) is at the origin. Use its scalar potential and equation [2] to find the electric field magnitude at \\(r=0.20\\,\\mathrm m\\).",
      answer: "The source is stationary, so \\(\\vec A=\\vec 0\\) and the strategy is to differentiate the Coulomb potential. \\[V(r)=\\frac{Q}{4\\pi\\epsilon_0r}.\\] In spherical symmetry, \\(\\nabla V=(\\mathrm dV/\\mathrm dr)\\hat{\\vec r}\\). Therefore \\[\\frac{\\mathrm dV}{\\mathrm dr}=-\\frac{Q}{4\\pi\\epsilon_0r^2},\\qquad \\vec E=-\\nabla V=\\frac{Q}{4\\pi\\epsilon_0r^2}\\hat{\\vec r}.\\] Substitution with \\(1/(4\\pi\\epsilon_0)=8.99\\times10^9\\,\\mathrm{N\\,m^2\\,C^{-2}}\\) gives \\[E=\\frac{(8.99\\times10^9)(3.0\\times10^{-9})}{(0.20)^2}=6.74\\times10^2\\,\\mathrm{V\\,m^{-1}}.\\] **Final result:** \\(\\vec E=6.74\\times10^2\\hat{\\vec r}\\,\\mathrm{V\\,m^{-1}}\\), directed away from the positive charge. The inverse-square field and outward sign check the differentiation.",
    },
    {
      title: "Retardation and phase at a distant point",
      question: "A compact source oscillates at \\(f=50\\,\\mathrm{MHz}\\). Compare the source phase seen at an observation point \\(3.0\\,\\mathrm m\\) away with its phase at the observation time, using \\(c=3.00\\times10^8\\,\\mathrm{m\\,s^{-1}}\\).",
      answer: "The retarded delay is the propagation distance divided by the wave speed: \\[\\Delta t=\\frac{R}{c}=\\frac{3.0}{3.00\\times10^8}=1.0\\times10^{-8}\\,\\mathrm s=10\\,\\mathrm{ns}.\\] The corresponding phase delay is \\[\\Delta\\phi=\\omega\\Delta t=2\\pi f\\Delta t=2\\pi(50\\times10^6)(1.0\\times10^{-8})=\\pi\\,\\mathrm{rad}.\\] **Final result:** the potentials at the observation point depend on the source \\(10\\,\\mathrm{ns}\\) earlier, exactly half a cycle earlier. A sinusoidal source therefore contributes with the opposite instantaneous sign; using the undelayed source would give the wrong phase.",
    },
  ]}
/>
`;
