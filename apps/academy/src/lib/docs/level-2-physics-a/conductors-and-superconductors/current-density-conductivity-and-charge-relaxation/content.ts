export const content = String.raw`## Principle

Switch on an electric field in a metal and mobile charges begin to drift, while any excess charge in the bulk quickly moves away.

Current density describes local charge flow, while conductivity relates that flow to the electric field in an ohmic material. If excess charge is placed in the bulk of a conductor, the continuity equation, Ohm's law, and Gauss's law together show that it decays exponentially on the very short charge-relaxation time.

## Notation

<Notation
  items={[
    { symbol: "\\vec J", meaning: "conventional current density", unit: "A m^{-2}" },
    { symbol: "I,A", meaning: "current and cross-sectional area", unit: "A, m^{2}" },
    { symbol: "V,R", meaning: "potential difference and wire resistance", unit: "V, \\Omega" },
    { symbol: "N,q,\\vec v", meaning: "mobile-carrier number density, carrier charge, and drift velocity", unit: "m^{-3}, C, m s^{-1}" },
    { symbol: "\\vec E", meaning: "electric field", unit: "V m^{-1}" },
    { symbol: "\\sigma,\\rho_{\\mathrm{el}}", meaning: "conductivity and electrical resistivity", unit: "S m^{-1}, \\Omega m" },
    { symbol: "\\rho_{\\mathrm e}", meaning: "bulk charge density", unit: "C m^{-3}" },
    { symbol: "\\epsilon_0", meaning: "vacuum permittivity", unit: "F m^{-1}" },
    { symbol: "\\tau_{\\mathrm q}", meaning: "charge-relaxation time", unit: "s" },
  ]}
/>

## The Core Method

For uniform flow normal to a wire's cross-section, current density is current per unit area. Microscopically, every carrier in a volume contributes its charge and drift velocity.

\\[
J=\frac{I}{A},
\qquad
\vec J=Nq\vec v.
\tag*{[1]}
\\]

The sign in the vector expression matters. In a metal, electrons have \\(q=-e\\) and drift opposite to the conventional current, so the two minus directions make \\(\vec J\\) point along \\(\vec E\\). For an isotropic ohmic conductor,

\\[
\vec J=\sigma\vec E,
\qquad
\vec E=\rho_{\mathrm{el}}\vec J,
\qquad
\sigma=\frac{1}{\rho_{\mathrm{el}}}.
\tag*{[2]}
\\]

Equation [2] is a local material relation. The circuit formula \\(V=IR\\) follows for a uniform wire of length \\(L\\) because \\(E=V/L\\) and \\(J=I/A\\).

\\[
\frac{I}{A}=\sigma\frac{V}{L}
\quad\Longrightarrow\quad
R=\frac{V}{I}=\rho_{\mathrm{el}}\frac{L}{A}.
\tag*{[3]}
\\]

Now consider a small excess bulk charge density \\(\rho_{\mathrm e}(\vec r,t)\\) in a homogeneous conductor. Local charge conservation is expressed by the continuity equation.

\\[
\frac{\partial\rho_{\mathrm e}}{\partial t}+\nabla\cdot\vec J=0.
\tag*{[4]}
\\]

For constant conductivity, take the divergence of Ohm's law and then use Gauss's law.

\\[
\nabla\cdot\vec J
=\sigma\nabla\cdot\vec E
=\frac{\sigma}{\epsilon_0}\rho_{\mathrm e}.
\tag*{[5]}
\\]

Substitution of [5] into [4] gives a first-order decay equation at every point in the bulk.

\\[
\frac{\partial\rho_{\mathrm e}}{\partial t}
=-\frac{\sigma}{\epsilon_0}\rho_{\mathrm e}.
\tag*{[6]}
\\]

Separate the variables and integrate from the initial density \\(\rho_{\mathrm e}(0)\\) to the density at time \\(t\\).

\\[
\int_{\rho_{\mathrm e}(0)}^{\rho_{\mathrm e}(t)}
\frac{d\rho_{\mathrm e}}{\rho_{\mathrm e}}
=-\frac{\sigma}{\epsilon_0}\int_0^t dt'
\quad\Longrightarrow\quad
\ln\!\left(\frac{\rho_{\mathrm e}(t)}{\rho_{\mathrm e}(0)}\right)
=-\frac{\sigma t}{\epsilon_0}.
\tag*{[7]}
\\]

Exponentiating identifies the charge-relaxation time.

\\[
\rho_{\mathrm e}(t)=\rho_{\mathrm e}(0)e^{-t/\tau_{\mathrm q}},
\qquad
\tau_{\mathrm q}=\frac{\epsilon_0}{\sigma}
=\epsilon_0\rho_{\mathrm{el}}.
\tag*{[8]}
\\]

After a few relaxation times, excess bulk charge is negligible and any remaining free charge is effectively confined to surfaces. Thus \\(\rho_{\mathrm e}\simeq0\\) and \\(\nabla\cdot\vec E\simeq0\\) in the conductor's bulk on ordinary laboratory timescales. This conclusion concerns excess bulk charge; it does not say that the material contains no positive ions or conduction electrons.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Charge relaxation in copper",
      question: "Copper has resistivity \\(\\rho_{\\mathrm{el}}=1.7\\times10^{-8}\\,\\Omega\\,\\mathrm m\\). Estimate its charge-relaxation time and the fraction of an initial bulk charge density remaining after \\(1.0\\,\\mathrm{ns}\\).",
      answer: "Use equation [8] with \\(\\epsilon_0=8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\): \\[\\tau_{\\mathrm q}=\\epsilon_0\\rho_{\\mathrm{el}}=(8.85\\times10^{-12})(1.7\\times10^{-8})=1.5\\times10^{-19}\\,\\mathrm s.\\] At \\(t=1.0\\times10^{-9}\\,\\mathrm s\\), the remaining fraction is \\[\\frac{\\rho_{\\mathrm e}(t)}{\\rho_{\\mathrm e}(0)}=e^{-t/\\tau_{\\mathrm q}}=e^{-6.7\\times10^9},\\] which is indistinguishable from zero. **Final result:** \\(\\tau_{\\mathrm q}=1.5\\times10^{-19}\\,\\mathrm s\\); bulk charge relaxes essentially instantaneously on a nanosecond scale.",
    },
    {
      title: "From local conductivity to wire resistance",
      question: "A uniform wire has length \\(2.0\\,\\mathrm m\\), cross-sectional area \\(1.0\\,\\mathrm{mm^2}\\), and conductivity \\(5.8\\times10^7\\,\\mathrm{S\\,m^{-1}}\\). Find its resistance.",
      answer: "Convert the area before using equation [3]: \\(A=1.0\\times10^{-6}\\,\\mathrm{m^2}\\) and \\(\\rho_{\\mathrm{el}}=1/\\sigma\\). Hence \\[R=\\frac{L}{\\sigma A}=\\frac{2.0}{(5.8\\times10^7)(1.0\\times10^{-6})}=3.4\\times10^{-2}\\,\\Omega.\\] **Final result:** the resistance is \\(0.034\\,\\Omega\\).",
    },
  ]}
/>
`;
