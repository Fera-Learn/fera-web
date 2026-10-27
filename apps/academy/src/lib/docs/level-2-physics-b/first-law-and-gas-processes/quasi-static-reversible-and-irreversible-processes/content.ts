export const content = String.raw`## Principle

A quasistatic process passes through states arbitrarily close to equilibrium, so thermodynamic coordinates remain defined along its path. Reversibility is stricter: reversing an infinitesimal driving imbalance must restore both system and surroundings with no dissipative effect. Every reversible process is quasistatic, but a quasistatic process with friction is irreversible.

## Notation

<Notation
  items={[
    { symbol: "p,p_{\\mathrm{ext}}", meaning: "system equilibrium pressure and external boundary pressure", unit: "Pa, Pa" },
    { symbol: "V,V_i,V_f", meaning: "system volume and its initial and final values", unit: "m^{3}" },
    { symbol: "\\delta W,\\delta W_{\\mathrm{rev}}", meaning: "inexact infinitesimal work and its reversible form", unit: "J, J" },
    { symbol: "W_{\\mathrm{rev}},W_{\\mathrm{irr}}", meaning: "work done by the system on reversible and irreversible paths", unit: "J" },
    { symbol: "T", meaning: "constant absolute temperature in the comparison", unit: "K" },
    { symbol: "n", meaning: "amount of ideal gas", unit: "mol" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "p_f", meaning: "final equilibrium pressure", unit: "Pa" },
  ]}
/>

## The Core Method

Boundary work always uses the pressure exerted by the surroundings:

\\[
\delta W=p_{\mathrm{ext}}\,dV.
\tag*{[1]}
\\]

For a quasistatic, frictionless mechanical process, the pressure imbalance is infinitesimal, so

\\[
p_{\mathrm{ext}}\to p,
\qquad
\delta W_{\mathrm{rev}}=p\,dV.
\tag*{[2]}
\\]

For reversible isothermal expansion of an ideal gas,

\\[
W_{\mathrm{rev}}
=\int_{V_i}^{V_f}\frac{nRT}{V}\,dV
=nRT\ln\!\left(\frac{V_f}{V_i}\right).
\tag*{[3]}
\\]

Now compare a one-step irreversible expansion against the constant final pressure \\(p_f=nRT/V_f\\):

\\[
W_{\mathrm{irr}}
=p_f(V_f-V_i)
=nRT\left(1-\frac{V_i}{V_f}\right).
\tag*{[4]}
\\]

For the same isothermal expansion endpoints, equation \\([3]\\) exceeds equation \\([4]\\). A reversible expansion delivers the maximum boundary work because the external pressure remains as high as possible while still allowing outward motion.

Quasistatic motion alone does not remove friction, viscosity, electrical resistance, or heat flow across a finite temperature difference. Any such dissipation prevents exact reversal of system and surroundings.

<PhysicsExamples collapsible
  items={[
    {
      title: "Reversible and one-step isothermal expansion",
      question: "One mole of ideal gas at \\(T=300\\,\\mathrm K\\) expands from \\(V_i\\) to \\(V_f=2V_i\\). Compare reversible work with one-step work against the final pressure. Use \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\).",
      answer: "Equation \\([3]\\) gives \\[W_{\\mathrm{rev}}=(1)(8.314)(300)\\ln 2\\,\\mathrm J=1.73\\,\\mathrm{kJ}.\\] Equation \\([4]\\) gives \\[W_{\\mathrm{irr}}=(1)(8.314)(300)\\left(1-\\frac12\\right)\\,\\mathrm J=1.25\\,\\mathrm{kJ}.\\] **Final result:** \\(W_{\\mathrm{rev}}=1.73\\,\\mathrm{kJ}\\) and \\(W_{\\mathrm{irr}}=1.25\\,\\mathrm{kJ}\\); the reversible path delivers more work.",
    },
    {
      title: "A slowly moving piston with friction",
      question: "A piston moves so slowly that the gas remains arbitrarily close to equilibrium, but dry friction acts between piston and cylinder. Is the process quasistatic, reversible, both, or neither?",
      answer: "The well-defined sequence of gas states makes the process quasistatic. However, friction dissipates mechanical energy, and an infinitesimal reversal of the pressure imbalance cannot restore both gas and surroundings. Equation \\([2]\\) requires the frictionless limit before identifying the boundary work as reversible work. **Final result:** the process is quasistatic but irreversible.",
    },
  ]}
/>
`;
