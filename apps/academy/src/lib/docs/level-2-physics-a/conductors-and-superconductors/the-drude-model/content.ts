export const content = String.raw`## Principle

An electron in a metal accelerates for a short time, collides, and then begins another short flight.

The Drude model treats mobile charge carriers as particles accelerated by an electric field and interrupted by collisions. A single relaxation time then explains both the transient approach to steady conduction and the frequency-dependent magnitude and phase of the conductivity.

## Notation

<Notation
  items={[
    { symbol: "N,q,m", meaning: "carrier number density, charge, and effective mass", unit: "m^{-3}, C, kg" },
    { symbol: "\\vec v,\\vec p", meaning: "mean drift velocity and momentum of one carrier", unit: "m s^{-1}, kg m s^{-1}" },
    { symbol: "\\tau", meaning: "mean momentum-relaxation time", unit: "s" },
    { symbol: "\\vec E,\\vec J", meaning: "electric field and current density", unit: "V m^{-1}, A m^{-2}" },
    { symbol: "\\vec E_0,\\vec J_0", meaning: "constant complex harmonic field and current-density amplitudes; the electric-field amplitude also denotes the switched dc field", unit: "V m^{-1}, A m^{-2}" },
    { symbol: "\\sigma_0,\\widetilde\\sigma(\\omega)", meaning: "dc and complex angular-frequency conductivity", unit: "S m^{-1}, S m^{-1}" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Between collisions, a carrier experiences the electric force \\(q\vec E\\). Random collisions remove the directed momentum on average, represented by the damping term \\(-\vec p/\tau\\). With \\(\vec p=m\vec v\\),

<PhysicsDiagram slug="drude-carrier-collisions" />

The black carriers accelerate along short paths between the fixed blue scattering sites. Each collision changes a carrier's motion unpredictably, so the model replaces many individual events by an average loss of directed momentum over the relaxation time \\(\tau\\).

\\[
\frac{d\vec p}{dt}=q\vec E-\frac{\vec p}{\tau}
\quad\Longrightarrow\quad
m\frac{d\vec v}{dt}=q\vec E-\frac{m\vec v}{\tau}.
\tag*{[1]}
\\]

Use \\(\vec J=Nq\vec v\\) and multiply [1] by \\(Nq/m\\).

\\[
\frac{d\vec J}{dt}+\frac{\vec J}{\tau}
=\frac{Nq^2}{m}\vec E.
\tag*{[2]}
\\]

For a constant field \\(\vec E_0\\), the steady current density has zero time derivative. Equation [2] then gives the dc Drude conductivity.

\\[
\vec J_{\mathrm{ss}}=\frac{Nq^2\tau}{m}\vec E_0
=\sigma_0\vec E_0,
\qquad
\sigma_0=\frac{Nq^2\tau}{m}.
\tag*{[3]}
\\]

To find the transient, subtract the steady solution from [2] and define \\(\vec u=\vec J-\vec J_{\mathrm{ss}}\\).

\\[
\frac{d\vec u}{dt}+\frac{\vec u}{\tau}=0
\quad\Longrightarrow\quad
\vec u(t)=\vec u(0)e^{-t/\tau}.
\tag*{[4]}
\\]

Therefore a field switched to a constant value at \\(t=0\\) produces

\\[
\vec J(t)=\sigma_0\vec E_0
+\left[\vec J(0)-\sigma_0\vec E_0\right]e^{-t/\tau}.
\tag*{[5]}
\\]

The current approaches its steady value rather than accelerating without limit. After a field is switched off, [5] reduces to \\(\vec J(t)=\vec J(0)e^{-t/\tau}\\).

For sinusoidal response, use the harmonic convention \\(e^{i(kx-\omega t)}\\). At a fixed position write \\(\widetilde{\vec E}=\vec E_0e^{-i\omega t}\\) and \\(\widetilde{\vec J}=\vec J_0e^{-i\omega t}\\), with physical fields given by real parts. Then \\(d/dt\\) becomes \\(-i\omega\\), so [2] gives

\\[
\left(\tau^{-1}-i\omega\right)\widetilde{\vec J}
=\frac{Nq^2}{m}\widetilde{\vec E}.
\tag*{[6]}
\\]

The complex Drude conductivity is consequently

\\[
\widetilde\sigma(\omega)
=\frac{Nq^2}{m(\tau^{-1}-i\omega)}
=\frac{\sigma_0}{1-i\omega\tau}.
\tag*{[7]}
\\]

Multiply numerator and denominator by \\(1+i\omega\tau\\) to separate the in-phase and quadrature responses.

\\[
\widetilde\sigma
=\frac{\sigma_0}{1+\omega^2\tau^2}
+i\frac{\sigma_0\omega\tau}{1+\omega^2\tau^2}.
\tag*{[8]}
\\]

Its magnitude and phase relative to the electric field are

\\[
|\widetilde\sigma|
=\frac{\sigma_0}{\sqrt{1+\omega^2\tau^2}},
\qquad
\phi=\tan^{-1}(\omega\tau).
\tag*{[9]}
\\]

When \\(\omega\tau\ll1\\), collisions establish the nearly real dc response \\(\widetilde\sigma\simeq\sigma_0\\). When \\(\omega\tau\gg1\\), inertia dominates and \\(\widetilde\sigma\simeq iNq^2/(m\omega)\\); with the chosen \\(e^{-i\omega t}\\) time dependence, the current lags the electric field toward a quarter-cycle.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Estimating a metal's relaxation time",
      question: "Model copper with \\(N=8.5\\times10^{28}\\,\\mathrm{m^{-3}}\\), electron mass \\(m=9.11\\times10^{-31}\\,\\mathrm{kg}\\), charge magnitude \\(e=1.60\\times10^{-19}\\,\\mathrm C\\), and dc conductivity \\(\\sigma_0=5.8\\times10^7\\,\\mathrm{S\\,m^{-1}}\\). Estimate \\(\\tau\\).",
      answer: "Rearrange equation [3]; the sign of the electron charge disappears because it is squared. \\[\\tau=\\frac{m\\sigma_0}{Ne^2}=\\frac{(9.11\\times10^{-31})(5.8\\times10^7)}{(8.5\\times10^{28})(1.60\\times10^{-19})^2}=2.4\\times10^{-14}\\,\\mathrm s.\\] **Final result:** the Drude relaxation time is approximately \\(2.4\\times10^{-14}\\,\\mathrm s\\).",
    },
    {
      title: "Response at the crossover frequency",
      question: "For a Drude conductor driven at \\(\\omega\\tau=1\\), find the magnitude and phase of the current density relative to \\(\\sigma_0E_0\\).",
      answer: "Equations [8] and [9] give equal real and imaginary parts: \\[\\widetilde\\sigma=\\frac{\\sigma_0}{2}(1+i),\\qquad |\\widetilde\\sigma|=\\frac{\\sigma_0}{\\sqrt2},\\qquad \\phi=\\tan^{-1}(1)=45^\\circ.\\] Thus \\(|\\vec J_0|=\\sigma_0E_0/\\sqrt2\\). **Final result:** the current amplitude is \\(0.707\\,\\sigma_0E_0\\) and, for the stated harmonic convention, the current lags the field by \\(45^\\circ\\).",
    },
  ]}
/>
`;
