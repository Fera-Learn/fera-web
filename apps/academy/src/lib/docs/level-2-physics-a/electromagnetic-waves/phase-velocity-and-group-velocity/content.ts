export const content = String.raw`## Principle

In a group of ripples, individual crests can move through the broader pulse that carries the disturbance.

Phase velocity tracks a point of constant phase on one sinusoidal component. Group velocity tracks the envelope of a narrow wave packet, so the two velocities answer different physical questions and need not be equal.

## Notation

<Notation
  items={[
    { symbol: "x,t", meaning: "position along propagation and time", unit: "m, s" },
    { symbol: "k,k_0", meaning: "wave number and central wave number", unit: "m^{-1}, m^{-1}" },
    { symbol: "\\omega,\\omega_0", meaning: "angular frequency and central angular frequency", unit: "rad s^{-1}, rad s^{-1}" },
    { symbol: "v_{\\mathrm p},v_{\\mathrm g}", meaning: "phase velocity and group velocity", unit: "m s^{-1}, m s^{-1}" },
    { symbol: "A(k)", meaning: "complex spectral amplitude of a wave packet" },
    { symbol: "q", meaning: "wave-number offset k-k_0", unit: "m^{-1}" },
    { symbol: "\\psi", meaning: "scalar wave used to track carrier and envelope" },
    { symbol: "C", meaning: "constant in the example dispersion relation", unit: "m^{2} s^{-1}" },
    { symbol: "c", meaning: "vacuum speed of light", unit: "m s^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Use the harmonic convention \\(e^{i(kx-\omega t)}\\), with the physical wave given by the real part. A crest or any other fixed phase obeys

\\[
kx-\omega t=\text{constant}.
\tag*{[1]}
\\]

Differentiate [1] with respect to time while holding the selected component's \\(k\\) and \\(\omega\\) fixed.

\\[
k\frac{dx}{dt}-\omega=0
\quad\Longrightarrow\quad
v_{\mathrm p}=\frac{dx}{dt}=\frac{\omega}{k}.
\tag*{[2]}
\\]

A localised disturbance requires a range of wave numbers rather than one infinite sinusoid. Write the packet as

\\[
\psi(x,t)=\operatorname{Re}\!\left\{\frac{1}{\sqrt{2\pi}}
\int_{-\infty}^{\infty}A(k)e^{i[kx-\omega(k)t]}\,dk\right\}.
\tag*{[3]}
\\]

For a spectrum concentrated near \\(k_0\\), keep the first-order Taylor terms of the dispersion relation.

\\[
\omega(k)\approx\omega_0+
\left.\frac{d\omega}{dk}\right|_{k_0}(k-k_0)
=\omega_0+v_{\mathrm g}(k-k_0).
\tag*{[4]}
\\]

Set \\(q=k-k_0\\) and substitute [4] into [3]. Separating the central carrier from the remaining integral gives

\\[
\psi(x,t)=\operatorname{Re}\!\left\{
e^{i(k_0x-\omega_0t)}\frac{1}{\sqrt{2\pi}}
\int_{-\infty}^{\infty}A(k_0+q)
e^{iq(x-v_{\mathrm g}t)}\,dq\right\}.
\tag*{[5]}
\\]

The integral is the envelope and depends on position and time only through \\(x-v_{\mathrm g}t\\). Its unchanged features therefore move at

\\[
v_{\mathrm g}=\left.\frac{d\omega}{dk}\right|_{k_0}.
\tag*{[6]}
\\]

Phase velocity is the slope of a line from the origin to a point on an \\(\omega\\)-against-\\(k\\) graph; group velocity is the tangent slope at the packet centre. For vacuum electromagnetic waves, \\(\omega=ck\\), so both slopes are the same.

\\[
v_{\mathrm p}=\frac{ck}{k}=c,
\qquad
v_{\mathrm g}=\frac{d(ck)}{dk}=c.
\tag*{[7]}
\\]

Equality in vacuum is a special result of the linear dispersion relation, not a general identity. In a dispersive system, a carrier crest can move through the envelope while the envelope follows a different speed.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Comparing velocities for a nonlinear dispersion relation",
      question: "A wave system has \\(\\omega=Ck^2\\), where \\(C=2.0\\,\\mathrm{m^2\\,s^{-1}}\\). Find the phase and group velocities of a packet centred at \\(k_0=3.0\\,\\mathrm{m^{-1}}\\).",
      answer: "The strategy is to use equation [2] for the carrier and equation [6] for the envelope. At the central wave number, \\[v_{\\mathrm p}=\\frac{\\omega_0}{k_0}=\\frac{Ck_0^2}{k_0}=Ck_0.\\] Substitution gives \\[v_{\\mathrm p}=(2.0\\,\\mathrm{m^2\\,s^{-1}})(3.0\\,\\mathrm{m^{-1}})=6.0\\,\\mathrm{m\\,s^{-1}}.\\] Differentiate the dispersion relation before substituting: \\[v_{\\mathrm g}=\\left.\\frac{d(Ck^2)}{dk}\\right|_{k_0}=2Ck_0=12\\,\\mathrm{m\\,s^{-1}}.\\] **Final result:** the phase velocity is \\(6.0\\,\\mathrm{m\\,s^{-1}}\\), while the group velocity is \\(12\\,\\mathrm{m\\,s^{-1}}\\). Their unequal values are expected because \\(\\omega(k)\\) is curved rather than linear.",
    },
    {
      title: "Following a crest and a pulse",
      question: "A visible carrier crest moves from the back of a pulse envelope to the front. Which velocity describes the crest, and which describes the envelope peak?",
      answer: "A crest is a point of constant carrier phase, so equation [2] assigns it the phase velocity \\(v_{\\mathrm p}=\\omega/k\\). The envelope peak is formed by interference among nearby components, so equation [6] assigns it the group velocity \\(v_{\\mathrm g}=d\\omega/dk\\). **Final result:** the crest follows phase velocity and the pulse peak follows group velocity. Tracking a crest and calling its speed the signal speed would confuse two distinct structures.",
    },
  ]}
/>
`;
