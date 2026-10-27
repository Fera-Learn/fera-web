export const content = String.raw`## Principle

Push a bound charge back and forth near its natural frequency and its motion grows large while falling out of step with the driving field.

A bound charge driven near its natural frequency responds with a frequency-dependent amplitude and phase. The resulting complex permittivity describes both dispersive energy storage through its real part and absorption through its imaginary part.

## Notation

<Notation
  items={[
    { symbol: "q,m,N", meaning: "bound-charge magnitude, effective mass, and oscillator number density", unit: "C, kg, m^{-3}" },
    { symbol: "x", meaning: "charge displacement along the electric field", unit: "m" },
    { symbol: "\\widetilde E,\\widetilde P", meaning: "complex electric field and polarisation", unit: "V m^{-1}, C m^{-2}" },
    { symbol: "E_0,x_0", meaning: "complex electric-field and displacement amplitudes", unit: "V m^{-1}, m" },
    { symbol: "\\omega,\\omega_0", meaning: "driving and natural angular frequencies", unit: "rad s^{-1}" },
    { symbol: "\\tau", meaning: "damping time in the oscillator model", unit: "s" },
    { symbol: "\\widetilde\\epsilon_{\\mathrm r}=\\epsilon'+i\\epsilon''", meaning: "complex relative permittivity and its real and imaginary parts" },
    { symbol: "\\epsilon_0", meaning: "vacuum permittivity", unit: "F m^{-1}" },
    { symbol: "\\widetilde J_{\\mathrm p}", meaning: "complex polarisation-current density", unit: "A m^{-2}" },
    { symbol: "\\langle p_{\\mathrm{abs}}\\rangle", meaning: "cycle-averaged absorbed power per unit volume", unit: "W m^{-3}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Model one bound charge as a damped harmonic oscillator. The electric force drives the charge, while the restoring and damping forces oppose its motion.

\\[
m\frac{d^2x}{dt^2}
=qE-\frac{m}{\tau}\frac{dx}{dt}-m\omega_0^2x.
\tag*{[1]}
\\]

Adopt the explicit harmonic convention

\\[
\widetilde E(t)=E_0e^{-i\omega t},
\qquad
\widetilde x(t)=x_0e^{-i\omega t}.
\tag*{[2]}
\\]

With this convention, one time derivative gives \\(-i\omega\\) and two give \\(-\omega^2\\). Substitution into [1] yields

\\[
m\left(\omega_0^2-\omega^2-\frac{i\omega}{\tau}\right)
\widetilde x=q\widetilde E.
\tag*{[3]}
\\]

Divide by the field and multiply numerator and denominator by the complex conjugate of the bracket. This makes the real and imaginary response explicit.

\\[
\frac{\widetilde x}{\widetilde E}
=\frac{q}{m}
\frac{\left(\omega_0^2-\omega^2\right)+i\omega/\tau}
{\left(\omega_0^2-\omega^2\right)^2+(\omega/\tau)^2}.
\tag*{[4]}
\\]

For \\(N\\) identical oscillators per unit volume, their dipole moments add to give

\\[
\widetilde P=Nq\widetilde x.
\tag*{[5]}
\\]

Define the complex relative permittivity using the same convention:

\\[
\widetilde P
=\epsilon_0(\widetilde\epsilon_{\mathrm r}-1)\widetilde E,
\qquad
\widetilde\epsilon_{\mathrm r}=\epsilon'+i\epsilon''.
\tag*{[6]}
\\]

Substituting [4] and [5] into [6] gives

\\[
\widetilde\epsilon_{\mathrm r}
=1+\frac{Nq^2}{m\epsilon_0}
\frac{\left(\omega_0^2-\omega^2\right)+i\omega/\tau}
{\left(\omega_0^2-\omega^2\right)^2+(\omega/\tau)^2}.
\tag*{[7]}
\\]

The real part controls the in-phase response and hence dispersion:

\\[
\epsilon'
=1+\frac{Nq^2}{m\epsilon_0}
\frac{\omega_0^2-\omega^2}
{\left(\omega_0^2-\omega^2\right)^2+(\omega/\tau)^2}.
\tag*{[8]}
\\]

The imaginary part controls the out-of-phase response:

\\[
\epsilon''
=\frac{Nq^2}{m\epsilon_0\tau}
\frac{\omega}
{\left(\omega_0^2-\omega^2\right)^2+(\omega/\tau)^2}.
\tag*{[9]}
\\]

The normalized oscillator curves show the dispersive real response and the absorptive imaginary response on the same frequency axis.

<CartesianGrid
  className="mx-auto max-w-xl"
  height={350}
  width={560}
  title="Complex relative permittivity near resonance"
  caption="The real part rises then falls through its background value at resonance, while the positive imaginary part forms a loss peak."
  xRange={{ min: 0, max: 2, step: 0.25, label: "angular frequency ω/ω₀" }}
  yRange={{ min: 0, max: 1.6, step: 0.2, label: "relative permittivity" }}
>
  <Curve
    color="var(--foreground)"
    points={Array.from({ length: 241 }, (_, index) => {
      const x = index / 120;
      const strength = 0.08;
      const damping = 0.12;
      const denominator = (1 - x ** 2) ** 2 + (damping * x) ** 2;
      const y = 1 + (strength * (1 - x ** 2)) / denominator;
      return { x, y };
    })}
    smooth
  />
  <Curve
    color="var(--destructive)"
    points={Array.from({ length: 241 }, (_, index) => {
      const x = index / 120;
      const strength = 0.08;
      const damping = 0.12;
      const denominator = (1 - x ** 2) ** 2 + (damping * x) ** 2;
      const y = (strength * damping * x) / denominator;
      return { x, y };
    })}
    smooth
  />
  <Annotation point={{ x: 0.82, y: 1.21 }} label="Real permittivity" offset={{ x: -98, y: -24 }} />
  <Annotation point={{ x: 1, y: 0.667 }} label="Imaginary permittivity" offset={{ x: 28, y: 18 }} />
  <Annotation point={{ x: 1, y: 0 }} label="ω₀" offset={{ x: -8, y: -10 }} />
</CartesianGrid>

The loss peak stays positive for the chosen passive \\(e^{-i\omega t}\\) convention. At \\(\omega=\omega_0\\), the oscillator contribution to the real part changes sign, so \\(\epsilon'\\) crosses its background value of one.

For positive \\(\omega\\) and \\(\tau\\), equation [9] gives \\(\epsilon''\gt0\\). This is the passive-loss sign for the stated \\(e^{-i\omega t}\\) convention. Indeed, \\(\widetilde J_{\mathrm p}=-i\omega\widetilde P\\), so the cycle-averaged absorbed power density is

\\[
\langle p_{\mathrm{abs}}\rangle
=\frac{1}{2}\operatorname{Re}
\left(\widetilde E\widetilde J_{\mathrm p}^{*}\right)
=\frac{1}{2}\omega\epsilon_0\epsilon''|E_0|^2
\ge0.
\tag*{[10]}
\\]

At exact resonance, the oscillator contribution to the real part crosses zero while the loss term is large:

\\[
\epsilon'(\omega_0)=1,
\qquad
\epsilon''(\omega_0)
=\frac{Nq^2\tau}{m\epsilon_0\omega_0}.
\tag*{[11]}
\\]

Far below resonance, the bound charge can follow the field and raises \\(\epsilon'\\) above one. Far above resonance, inertia suppresses the displacement and this oscillator's contribution tends to zero. Finite damping prevents the response from diverging at \\(\omega_0\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Permittivity and loss at resonance",
      question: "For one oscillator contribution, let \\(Nq^2/(m\\epsilon_0)=0.20\\omega_0^2\\), \\(\\omega_0\\tau=10\\), \\(\\omega_0=1.0\\times10^{12}\\,\\mathrm{rad\\,s^{-1}}\\), and \\(|E_0|=100\\,\\mathrm{V\\,m^{-1}}\\). Find \\(\\epsilon'\\), \\(\\epsilon''\\), and the absorbed power density at resonance.",
      answer: "Equation [11] gives \\[\\epsilon'=1,\\qquad \\epsilon''=(0.20\\omega_0^2)\\frac{\\tau}{\\omega_0}=0.20(\\omega_0\\tau)=2.0.\\] With \\(\\epsilon_0=8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\), equation [10] gives \\[\\langle p_{\\mathrm{abs}}\\rangle=\\frac12(1.0\\times10^{12})(8.85\\times10^{-12})(2.0)(100)^2=8.85\\times10^4\\,\\mathrm{W\\,m^{-3}}.\\] **Final result:** \\(\\epsilon'=1\\), \\(\\epsilon''=2.0\\), and \\(\\langle p_{\\mathrm{abs}}\\rangle=8.85\\times10^4\\,\\mathrm{W\\,m^{-3}}\\).",
    },
    {
      title: "Interpreting the loss sign",
      question: "Under the convention \\(e^{-i\\omega t}\\), a calculation gives \\(\\widetilde\\epsilon_{\\mathrm r}=3.0+0.40i\\). Does this describe absorption or gain?",
      answer: "**Final result:** it describes absorption. Equation [10] makes the sign unambiguous: \\(\\epsilon''=+0.40\\) gives \\(\\langle p_{\\mathrm{abs}}\\rangle=(1/2)\\omega\\epsilon_0(0.40)|E_0|^2\\gt0\\). Changing to the opposite time convention would change the written sign of the imaginary part, so the convention must always be stated with the complex permittivity.",
    },
  ]}
/>
`;
