export const content = String.raw`## Principle

A state built from a narrow range of energies usually changes slowly, while a rapidly changing state needs a broader energy spread.

The time-energy uncertainty relation connects an energy spread with a characteristic time over which a state changes. It is not the ordinary uncertainty relation for two particle observables: in this treatment, time is an external evolution parameter rather than a Hermitian time operator.

## Notation

<Notation
  items={[
    { symbol: "\\Delta x,\\Delta p,\\Delta E", meaning: "standard deviations of position, momentum, and energy", unit: "m, kg m s^{-1}, J" },
    { symbol: "\\Delta t,\\tau_B", meaning: "wavepacket passage time and characteristic evolution time for observable B", unit: "s, s" },
    { symbol: "p,E,v,m", meaning: "mean momentum, non-relativistic kinetic energy, speed, and particle mass", unit: "kg m s^{-1}, J, m s^{-1}, kg" },
    { symbol: "\\hat H,\\hat B", meaning: "Hamiltonian and a Hermitian observable used to monitor change" },
    { symbol: "|E\\rangle", meaning: "normalized energy eigenstate with energy eigenvalue E" },
    { symbol: "\\langle B\\rangle,\\Delta B", meaning: "expectation value and standard deviation of B" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
  ]}
/>

## The Core Method

For a freely moving, narrow wavepacket with positive mean momentum, estimate the passage time past a fixed point by its spatial width divided by its group speed. With \\(v=p/m\\),

\\[
\Delta t\simeq\frac{\Delta x}{v}=\frac{m\Delta x}{p}.
\tag*{[1]}
\\]

For non-relativistic kinetic energy \\(E=p^2/(2m)\\), a narrow momentum distribution allows first-order propagation of the spread:

\\[
\Delta E\simeq\left|\frac{dE}{dp}\right|\Delta p
=\frac{p}{m}\Delta p.
\tag*{[2]}
\\]

Multiplying [1] and [2], then applying the position-momentum uncertainty relation, gives

\\[
\Delta t\,\Delta E
\simeq\frac{m\Delta x}{p}\frac{p\Delta p}{m}
=\Delta x\,\Delta p
\ge\frac{\hbar}{2}.
\tag*{[3]}
\\]

This packet argument assumes free motion, a momentum spread small enough for the linear approximation in [2], and a nonzero mean speed. It does not define a standard deviation of repeated readings of a time observable.

A more general characteristic time can be built from any observable \\(\hat B\\) with no explicit time dependence. Expectation-value dynamics gives

\\[
\left|\frac{d\langle B\rangle}{dt}\right|
=\frac{1}{\hbar}\left|\langle[\hat H,\hat B]\rangle\right|.
\tag*{[4]}
\\]

The Robertson inequality for the two genuine observables \\(\hat H\\) and \\(\hat B\\) is

\\[
\Delta E\,\Delta B
\ge\frac12\left|\langle[\hat H,\hat B]\rangle\right|
=\frac{\hbar}{2}\left|\frac{d\langle B\rangle}{dt}\right|.
\tag*{[5]}
\\]

Define the time for the mean of \\(B\\) to change by one standard deviation as

\\[
\tau_B=\frac{\Delta B}{|d\langle B\rangle/dt|}
\quad\Longrightarrow\quad
\Delta E\,\tau_B\ge\frac{\hbar}{2}.
\tag*{[6]}
\\]

Equation [6] is a dynamical speed limit. A short-lived or rapidly changing state needs a range of energy components; a state of exactly definite energy changes only by an overall phase and has no evolving expectation values for time-independent observables.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Minimum energy scale for a short evolution time",
      question: "An observable changes by one standard deviation in \\(\\tau_B=1.00\\,\\mathrm{ns}\\). Use the time-energy bound to estimate the minimum energy spread.",
      answer: "The relevant quantity is the evolution time in equation [6], not a standard deviation of clock readings. Convert \\(1.00\\,\\mathrm{ns}=1.00\\times10^{-9}\\,\\mathrm s\\). Then \\[\\Delta E\\ge\\frac{\\hbar}{2\\tau_B}=\\frac{1.055\\times10^{-34}\\,\\mathrm{J\\,s}}{2(1.00\\times10^{-9}\\,\\mathrm s)}=5.28\\times10^{-26}\\,\\mathrm J.\\] The units reduce to joules and a shorter time would increase the bound. **Final result:** \\(\\Delta E\\ge5.28\\times10^{-26}\\,\\mathrm J\\).",
    },
    {
      title: "A stationary energy eigenstate",
      question: "Why does \\(\\Delta E=0\\) for an energy eigenstate not imply that a time measurement has infinite statistical uncertainty?",
      answer: "For \\(\\hat H|E\\rangle=E|E\\rangle\\), time evolution gives \\(|E,t\\rangle=e^{-iEt/\\hbar}|E,0\\rangle\\). The factor is a global phase, so every expectation value of a time-independent observable is constant. In equation [6], \\(|d\\langle B\\rangle/dt|=0\\), so the characteristic change time is infinite or undefined. **Final result:** the state does not evolve through distinguishable expectation values; the relation concerns evolution time, not the spread of outcomes from a time operator.",
    },
  ]}
/>
`;
