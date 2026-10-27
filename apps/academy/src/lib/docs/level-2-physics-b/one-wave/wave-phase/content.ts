export const content = String.raw`## Principle

Phase locates a wave within its cycle. Only phase differences affect comparisons between waves, and a fixed phase identifies a moving wavefront.

## Notation

<Notation
  items={[
    { symbol: "\\Phi(\\vec r,t),\\Delta\\Phi,\\phi_0", meaning: "total phase, phase change, and constant phase offset", unit: "rad, rad, rad" },
    { symbol: "\\vec r,\\Delta\\vec r", meaning: "position and spatial displacement", unit: "m, m" },
    { symbol: "x,\\Delta x", meaning: "example propagation coordinate and its displacement", unit: "m, m" },
    { symbol: "t,\\Delta t", meaning: "time and time interval", unit: "s, s" },
    { symbol: "\\vec k,k,\\hat{\\vec k}", meaning: "wavevector, wavenumber magnitude, and propagation unit vector", unit: "m^{-1}, m^{-1}, 1" },
    { symbol: "\\omega,\\lambda,T", meaning: "angular frequency, wavelength, and period", unit: "rad s^{-1}, m, s" },
    { symbol: "m,s", meaning: "integer cycle number and distance along the propagation direction", unit: "1, m" },
  ]}
/>

## The Core Method

The solid and dashed curves have the same amplitude and wavelength. Their horizontal displacement is a phase offset: corresponding crests occur at different positions even though both waves repeat at the same rate.

<PhysicsDiagram slug="harmonic-wave-phase-offsets" />

For the harmonic convention used here, the dimensionless phase is

\\[
\Phi(\vec r,t)=\vec k\cdot\vec r-\omega t+\phi_0.
\tag*{[1]}
\\]

Moving from \\((\vec r,t)\\) to \\((\vec r+\Delta\vec r,t+\Delta t)\\) changes the phase by direct subtraction:

\\[
\begin{aligned}
\Delta\Phi
&=\Phi(\vec r+\Delta\vec r,t+\Delta t)-\Phi(\vec r,t)\\
&=\vec k\cdot\Delta\vec r-\omega\Delta t.
\end{aligned}
\tag*{[2]}
\\]

At any chosen time, wavefronts with phase equivalent to zero modulo \\(2\pi\\) satisfy

\\[
\vec k\cdot\vec r-\omega t+\phi_0=2\pi m,
\qquad m\in\mathbb Z.
\tag*{[3]}
\\]

At one position, a full temporal cycle requires \\(-\omega\Delta t=-2\pi\\), while along the propagation direction a full spatial cycle requires \\(k\Delta r=2\pi\\). Hence

\\[
T=\frac{2\pi}{\omega},\qquad
\lambda=\frac{2\pi}{k}.
\tag*{[4]}
\\]

For a fixed phase, \\(d\Phi/dt=0\\). If motion is along \\(\hat{\vec k}\\), then \\(\vec r=s\hat{\vec k}\\) and

\\[
0=k\frac{ds}{dt}-\omega
\quad\Longrightarrow\quad
\frac{ds}{dt}=\frac{\omega}{k}.
\tag*{[5]}
\\]

Adding the same constant to every phase does not change relative phase. A common error is to compare amplitudes alone: two waves with equal amplitudes can reinforce, cancel, or do anything between those limits depending on \\(\Delta\Phi\\).

<PhysicsExamples collapsible
  items={[
    {
      title: "Phase change across space and time",
      question: "A wave travels along \\(+x\\) with \\(\\lambda=0.80\\,\\mathrm m\\) and \\(T=2.0\\,\\mathrm{ns}\\). Find the phase change for \\(\\Delta x=0.30\\,\\mathrm m\\) and \\(\\Delta t=0.50\\,\\mathrm{ns}\\).",
      answer: "Use equation \\([2]\\) with \\(k=2\\pi/\\lambda\\) and \\(\\omega=2\\pi/T\\): \\[\\Delta\\Phi=2\\pi\\frac{\\Delta x}{\\lambda}-2\\pi\\frac{\\Delta t}{T}=2\\pi\\left(\\frac{0.30}{0.80}-\\frac{0.50}{2.0}\\right).\\] The bracket is \\(0.375-0.250=0.125\\), so \\(\\Delta\\Phi=0.25\\pi\\,\\mathrm{rad}\\). **Final result:** the second event is ahead in phase by \\(\\pi/4\\,\\mathrm{rad}\\).",
    },
    {
      title: "Equivalent phase offsets",
      question: "Are phase offsets \\(\\phi_0=-\\pi/3\\) and \\(\\phi_0=5\\pi/3\\) physically distinct for a single harmonic wave?",
      answer: "Their difference is \\(5\\pi/3-(-\\pi/3)=2\\pi\\). Since sine, cosine, and the complex exponential repeat after \\(2\\pi\\), both offsets produce the same field at every position and time. **Final result:** the two phase offsets are equivalent modulo \\(2\\pi\\).",
    },
  ]}
/>
`;
