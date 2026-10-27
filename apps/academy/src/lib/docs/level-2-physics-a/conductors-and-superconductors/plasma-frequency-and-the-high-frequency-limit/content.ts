export const content = String.raw`## Principle

At very rapid driving frequencies, mobile charges cannot follow the field in the same way that they do for a steady current.

At frequencies much greater than the Drude collision rate, charge carriers respond mainly through inertia. Their collective response introduces the plasma frequency, which separates attenuated fields below the threshold from propagating transverse waves above it.

## Notation

<Notation
  items={[
    { symbol: "N,q,m", meaning: "carrier number density, charge, and effective mass", unit: "m^{-3}, C, kg" },
    { symbol: "\\tau", meaning: "momentum-relaxation time", unit: "s" },
    { symbol: "\\widetilde\\sigma", meaning: "complex Drude conductivity", unit: "S m^{-1}" },
    { symbol: "\\omega,\\omega_{\\mathrm p}", meaning: "wave and plasma angular frequencies", unit: "rad s^{-1}, rad s^{-1}" },
    { symbol: "\\widetilde k,\\kappa", meaning: "complex wave number and positive evanescent attenuation constant", unit: "m^{-1}, m^{-1}" },
    { symbol: "v_{\\mathrm p},v_{\\mathrm g}", meaning: "phase and group velocities above threshold", unit: "m s^{-1}, m s^{-1}" },
    { symbol: "\\epsilon_0,\\mu_0,c", meaning: "vacuum permittivity, permeability, and light speed", unit: "F m^{-1}, H m^{-1}, m s^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Use the harmonic convention \\(e^{i(kx-\omega t)}\\). The Drude conductivity and the conductor dispersion relation are

\\[
\widetilde\sigma(\omega)
=\frac{Nq^2}{m(\tau^{-1}-i\omega)},
\qquad
\widetilde k^2
=\mu_0\epsilon_0\omega^2+i\mu_0\omega\widetilde\sigma.
\tag*{[1]}
\\]

In the high-frequency limit \\(\omega\tau\gg1\\), collisions are too slow to establish the dc response. Neglecting \\(\tau^{-1}\\) relative to \\(\omega\\),

\\[
\widetilde\sigma
\simeq\frac{Nq^2}{m(-i\omega)}
=i\frac{Nq^2}{m\omega}.
\tag*{[2]}
\\]

Insert [2] into [1]. Since \\(i^2=-1\\), the carrier response subtracts from the vacuum term.

\\[
\widetilde k^2
=\mu_0\epsilon_0\omega^2
-\frac{\mu_0Nq^2}{m}.
\tag*{[3]}
\\]

Define the plasma frequency and use \\(c^{-2}=\mu_0\epsilon_0\\).

\\[
\omega_{\mathrm p}=\sqrt{\frac{Nq^2}{m\epsilon_0}},
\qquad
\widetilde k^2
=\frac{\omega^2}{c^2}
\left(1-\frac{\omega_{\mathrm p}^2}{\omega^2}\right)
=\frac{\omega^2-\omega_{\mathrm p}^2}{c^2}.
\tag*{[4]}
\\]

For \\(\omega\gt\omega_{\mathrm p}\\), the positive propagation wave number is real.

\\[
k=\frac{1}{c}\sqrt{\omega^2-\omega_{\mathrm p}^2}.
\tag*{[5]}
\\]

The phase velocity follows directly from \\(v_{\mathrm p}=\omega/k\\).

\\[
v_{\mathrm p}
=\frac{c}{\sqrt{1-(\omega_{\mathrm p}/\omega)^2}}
\gt c.
\tag*{[6]}
\\]

To obtain the group velocity, rewrite [5] as \\(\omega^2=\omega_{\mathrm p}^2+c^2k^2\\) and differentiate.

\\[
2\omega\frac{d\omega}{dk}=2c^2k
\quad\Longrightarrow\quad
v_{\mathrm g}=\frac{d\omega}{dk}
=c\sqrt{1-(\omega_{\mathrm p}/\omega)^2}
\lt c.
\tag*{[7]}
\\]

Plotting both speeds in units of \\(c\\) makes their opposite behaviour around the plasma threshold visible.

<CartesianGrid
  className="mx-auto max-w-xl"
  height={350}
  width={560}
  title="Phase and group velocities around the plasma frequency"
  caption="Only frequencies above the plasma frequency have real phase and group velocities in the collisionless model."
  xRange={{ min: 0, max: 3, step: 0.5, label: "angular frequency ω/ωₚ" }}
  yRange={{ min: 0, max: 3, step: 0.5, label: "velocity/c" }}
>
  <Curve
    color="var(--muted-foreground)"
    points={[{ x: 1, y: 0 }, { x: 1, y: 3 }]}
  />
  <Curve
    color="var(--muted-foreground)"
    points={[{ x: 0, y: 1 }, { x: 3, y: 1 }]}
  />
  <Curve
    color="var(--foreground)"
    points={Array.from({ length: 200 }, (_, index) => {
      const x = 1.061 + (1.939 * index) / 199;
      const y = 1 / Math.sqrt(1 - 1 / x ** 2);
      return { x, y };
    })}
    smooth
  />
  <Curve
    color="var(--destructive)"
    points={Array.from({ length: 201 }, (_, index) => {
      const x = 1 + (2 * index) / 200;
      const y = index === 0 ? 0 : Math.sqrt(1 - 1 / x ** 2);
      return { x, y };
    })}
    smooth
  />
  <Annotation point={{ x: 1.32, y: 1.53 }} label="Phase velocity" offset={{ x: 20, y: -18 }} />
  <Annotation point={{ x: 1.6, y: 0.78 }} label="Group velocity" offset={{ x: 20, y: 25 }} />
  <Annotation point={{ x: 0.35, y: 1 }} label="Speed of light in a vacuum" offset={{ x: -4, y: -14 }} />
  <Annotation point={{ x: 1, y: 0.32 }} label="plasma angular frequency ωₚ" offset={{ x: -165, y: -38 }} />
</CartesianGrid>

At \\(\omega_{\mathrm p}\\), the group-velocity branch begins at zero while the phase-velocity branch diverges. Far above the threshold, the two branches approach \\(c\\) from below and above respectively.

Thus \\(v_{\mathrm p}v_{\mathrm g}=c^2\\). A phase velocity above \\(c\\) does not transmit information superluminally; in this lossless approximation, the wave packet and energy travel at \\(v_{\mathrm g}\\).

For \\(\omega\lt\omega_{\mathrm p}\\), equation [4] is negative. Set \\(\widetilde k=i\kappa\\) with \\(\kappa\gt0\\) to select decay into the positive \\(x\\)-direction.

\\[
\kappa=\frac{1}{c}\sqrt{\omega_{\mathrm p}^2-\omega^2},
\qquad
e^{i(\widetilde kx-\omega t)}
=e^{-\kappa x}e^{-i\omega t}.
\tag*{[8]}
\\]

The corresponding amplitude penetration length is

\\[
\ell_{\mathrm p}=\frac{1}{\kappa}
=\frac{c}{\sqrt{\omega_{\mathrm p}^2-\omega^2}}.
\tag*{[9]}
\\]

The sharp distinction in [5] and [8] belongs to the collisionless approximation. A finite \\(\tau\\) makes \\(\widetilde\sigma\\) and \\(\widetilde k\\) genuinely complex, so real materials absorb some energy and the transition is not perfectly lossless.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Plasma frequency from carrier density",
      question: "Estimate the plasma angular frequency and ordinary frequency for carriers with \\(N=1.0\\times10^{28}\\,\\mathrm{m^{-3}}\\), \\(q=-e\\), and \\(m=m_{\\mathrm e}\\). Use \\(e=1.60\\times10^{-19}\\,\\mathrm C\\), \\(m_{\\mathrm e}=9.11\\times10^{-31}\\,\\mathrm{kg}\\), and \\(\\epsilon_0=8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\).",
      answer: "Equation [4] depends on \\(q^2=e^2\\), so the carrier sign does not affect the threshold. \\[\\omega_{\\mathrm p}=\\sqrt{\\frac{(1.0\\times10^{28})(1.60\\times10^{-19})^2}{(9.11\\times10^{-31})(8.85\\times10^{-12})}}=5.6\\times10^{15}\\,\\mathrm{rad\\,s^{-1}}.\\] Therefore \\[f_{\\mathrm p}=\\frac{\\omega_{\\mathrm p}}{2\\pi}=9.0\\times10^{14}\\,\\mathrm{Hz}.\\] **Final result:** \\(\\omega_{\\mathrm p}=5.6\\times10^{15}\\,\\mathrm{rad\\,s^{-1}}\\) and \\(f_{\\mathrm p}=9.0\\times10^{14}\\,\\mathrm{Hz}\\).",
    },
    {
      title: "Wave speeds above the plasma threshold",
      question: "In the collisionless model, find the phase and group velocities when \\(\\omega=2\\omega_{\\mathrm p}\\).",
      answer: "Substitute \\(\\omega_{\\mathrm p}/\\omega=1/2\\) into equations [6] and [7]: \\[v_{\\mathrm p}=\\frac{c}{\\sqrt{1-1/4}}=1.155c,\\qquad v_{\\mathrm g}=c\\sqrt{1-1/4}=0.866c.\\] Their product is \\(c^2\\), as required. **Final result:** \\(v_{\\mathrm p}=1.155c\\) and \\(v_{\\mathrm g}=0.866c\\); only the group velocity is associated with packet transport.",
    },
  ]}
/>
`;
