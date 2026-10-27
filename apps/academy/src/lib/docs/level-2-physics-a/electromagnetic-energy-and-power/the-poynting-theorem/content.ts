export const content = String.raw`## Principle

Energy stored in fields inside a region can decrease only by flowing through the boundary or by being transferred to matter inside.

The Poynting theorem is electromagnetic energy conservation. A decrease of field energy within a volume supplies two possible outputs: net electromagnetic power flowing through the boundary and power transferred from the fields to free or conduction charges inside the volume.

## Notation

<Notation
  items={[
    { symbol: "\\vec E,\\vec D", meaning: "electric field and electric displacement", unit: "V m^{-1}, C m^{-2}" },
    { symbol: "\\vec B,\\vec H", meaning: "magnetic flux density and auxiliary magnetic field", unit: "T, A m^{-1}" },
    { symbol: "\\vec J", meaning: "free or conduction current density receiving work from the field", unit: "A m^{-2}" },
    { symbol: "\\vec S", meaning: "Poynting vector", unit: "W m^{-2}" },
    { symbol: "u,U", meaning: "electromagnetic energy density and total field energy in a volume", unit: "J m^{-3}, J" },
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "\\epsilon,\\mu", meaning: "constant permittivity and permeability of a linear isotropic medium", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "\\sigma", meaning: "electrical conductivity of an ohmic medium", unit: "S m^{-1}" },
    { symbol: "V,A", meaning: "control volume and its closed boundary surface", unit: "m^{3}, m^{2}" },
    { symbol: "\\hat{\\vec n}", meaning: "outward unit normal to the closed boundary" },
    { symbol: "P_{\\mathrm{out}},P_J", meaning: "net outward electromagnetic power and power delivered to free or conduction charges", unit: "W, W" },
  ]}
/>

## The Core Method

Maxwell's curl equations, with \\(\vec J\\) denoting free or conduction current density, are

\\[
\nabla\times\vec E=-\frac{\partial\vec B}{\partial t},
\qquad
\nabla\times\vec H=\vec J+\frac{\partial\vec D}{\partial t}.
\tag*{[1]}
\\]

Start from the vector identity

\\[
\nabla\cdot(\vec E\times\vec H)
=\vec H\cdot(\nabla\times\vec E)
-\vec E\cdot(\nabla\times\vec H).
\tag*{[2]}
\\]

Substitute both equations in [1] into [2] and use \\(\vec S=\vec E\times\vec H\\):

\\[
\nabla\cdot\vec S
=-\vec H\cdot\frac{\partial\vec B}{\partial t}
-\vec E\cdot\vec J
-\vec E\cdot\frac{\partial\vec D}{\partial t}.
\tag*{[3]}
\\]

For a linear, isotropic, nondispersive medium with constant \\(\vec D=\epsilon\vec E\\) and \\(\vec B=\mu\vec H\\), the field terms are exact time derivatives:

\\[
\vec E\cdot\frac{\partial\vec D}{\partial t}
=\frac{\partial}{\partial t}\left(\frac{1}{2}\vec E\cdot\vec D\right),
\qquad
\vec H\cdot\frac{\partial\vec B}{\partial t}
=\frac{\partial}{\partial t}\left(\frac{1}{2}\vec B\cdot\vec H\right).
\tag*{[4]}
\\]

Define the electromagnetic energy density and substitute [4] into [3]:

\\[
u=\frac{1}{2}\vec E\cdot\vec D
+\frac{1}{2}\vec B\cdot\vec H,
\qquad
\boxed{
\frac{\partial u}{\partial t}+\nabla\cdot\vec S=-\vec J\cdot\vec E
}.
\tag*{[5]}
\\]

Equation [5] is the local Poynting theorem. Positive \\(\vec J\cdot\vec E\\) means that the field does positive work on free or conduction charges, so electromagnetic energy is removed locally. In an ohmic conductor, \\(\vec J=\sigma\vec E\\) and \\(\vec J\cdot\vec E=\sigma E^2\geq0\\) is Joule heating.

Integrate [5] over \\(V\\) and apply the divergence theorem with the outward normal:

\\[
\frac{\mathrm d}{\mathrm dt}\int_Vu\,\mathrm dV
+\oint_A\vec S\cdot\hat{\vec n}\,\mathrm dA
=-\int_V\vec J\cdot\vec E\,\mathrm dV.
\tag*{[6]}
\\]

Using \\(U=\int_Vu\,\mathrm dV\\), define the two powers and rearrange [6]:

\\[
P_{\mathrm{out}}
=\oint_A\vec S\cdot\hat{\vec n}\,\mathrm dA,
\qquad
P_J=\int_V\vec J\cdot\vec E\,\mathrm dV,
\qquad
\boxed{-\frac{\mathrm dU}{\mathrm dt}=P_{\mathrm{out}}+P_J}.
\tag*{[7]}
\\]

An inward energy flow contributes negatively to \\(P_{\mathrm{out}}\\). The simple energy density in [5] assumes nondispersive constitutive relations; dispersive or lossy material polarisation requires a more careful separation of stored and dissipated material energy.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Energy leaving a decaying field",
      question: "At one instant, electromagnetic energy in a closed region decreases at \\(7.0\\,\\mathrm{J\\,s^{-1}}\\), while the fields deliver \\(2.0\\,\\mathrm W\\) of Joule heating to matter inside. Find the net outward electromagnetic power.",
      answer: "The stated decrease means \\(\\mathrm dU/\\mathrm dt=-7.0\\,\\mathrm W\\), and positive heating gives \\(P_J=+2.0\\,\\mathrm W\\). Apply equation [7]: \\[-\\frac{\\mathrm dU}{\\mathrm dt}=P_{\\mathrm{out}}+P_J,\\] \\[7.0=P_{\\mathrm{out}}+2.0,\\] \\[P_{\\mathrm{out}}=5.0\\,\\mathrm W.\\] **Final result:** \\(5.0\\,\\mathrm W\\) flows outward. The check is \\(5.0\\,\\mathrm W+2.0\\,\\mathrm W=7.0\\,\\mathrm W\\), equal to the rate at which field energy is lost.",
    },
    {
      title: "Steady power entering a resistor",
      question: "A steady-state control volume around a resistor receives \\(4.0\\,\\mathrm W\\) through one part of its boundary and sends \\(1.0\\,\\mathrm W\\) out through another. Determine the power transferred from the field to the resistor.",
      answer: "Steady state gives \\(\\mathrm dU/\\mathrm dt=0\\). With an outward normal, the incoming contribution is negative and the outgoing contribution is positive: \\[P_{\\mathrm{out}}=(-4.0)+1.0=-3.0\\,\\mathrm W.\\] Equation [7] becomes \\[0=P_{\\mathrm{out}}+P_J=-3.0+P_J,\\] so \\[P_J=3.0\\,\\mathrm W.\\] **Final result:** the field transfers \\(3.0\\,\\mathrm W\\) to the resistor. The negative net outward flux correctly represents net power entering the control volume.",
    },
  ]}
/>
`;
