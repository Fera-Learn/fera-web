export const content = String.raw`## Principle

Cool a suitable material below its transition temperature and it can carry current without resistance while expelling magnetic flux from its interior.

The London equations describe the ideal electromagnetic response of a superconductor: an electric field accelerates a dissipationless supercurrent, while magnetic field is expelled from the bulk apart from an exponentially thin surface layer. This magnetic-flux expulsion is the Meissner effect, not merely a consequence of zero resistance.

## Notation

<Notation
  items={[
    { symbol: "N_{\\mathrm s},q,m", meaning: "supercarrier number density, charge, and effective mass", unit: "m^{-3}, C, kg" },
    { symbol: "\\vec v_{\\mathrm s},\\vec J_{\\mathrm s}", meaning: "supercarrier velocity and supercurrent density", unit: "m s^{-1}, A m^{-2}" },
    { symbol: "\\vec E,\\vec B", meaning: "electric and magnetic fields", unit: "V m^{-1}, T" },
    { symbol: "\\lambda_{\\mathrm L}", meaning: "London penetration depth", unit: "m" },
    { symbol: "\\mu_0", meaning: "vacuum permeability", unit: "H m^{-1}" },
    { symbol: "x", meaning: "depth measured inward from a planar surface", unit: "m" },
    { symbol: "B_0", meaning: "magnetic-field magnitude at the surface", unit: "T" },
    { symbol: "C_+,C_-", meaning: "integration constants in the planar-field solution", unit: "T, T" },
  ]}
/>

## The Core Method

In the London model, supercarriers accelerate without a resistive damping term. Begin with Newton's second law and the supercurrent relation.

\\[
m\frac{d\vec v_{\mathrm s}}{dt}=q\vec E,
\qquad
\vec J_{\mathrm s}=N_{\mathrm s}q\vec v_{\mathrm s}.
\tag*{[1]}
\\]

Differentiate the current density and use the equation of motion.

\\[
\frac{\partial\vec J_{\mathrm s}}{\partial t}
=N_{\mathrm s}q\frac{d\vec v_{\mathrm s}}{dt}
=\frac{N_{\mathrm s}q^2}{m}\vec E.
\tag*{[2]}
\\]

Define the London penetration depth.

\\[
\lambda_{\mathrm L}
=\sqrt{\frac{m}{\mu_0N_{\mathrm s}q^2}}.
\tag*{[3]}
\\]

Equations [2] and [3] give the first London equation.

\\[
\vec E=\mu_0\lambda_{\mathrm L}^2
\frac{\partial\vec J_{\mathrm s}}{\partial t}.
\tag*{[4]}
\\]

If \\(\vec E=0\\), the supercurrent remains constant rather than decaying. This captures zero resistivity, but it does not by itself require a pre-existing magnetic field to leave the material. Magnetic-flux expulsion is supplied by the second London equation.

\\[
\nabla\times\vec J_{\mathrm s}
=-\frac{1}{\mu_0\lambda_{\mathrm L}^2}\vec B,
\qquad
\vec B=-\mu_0\lambda_{\mathrm L}^2
\nabla\times\vec J_{\mathrm s}.
\tag*{[5]}
\\]

For a static field, Ampere's law inside the superconductor is \\(\nabla\times\vec B=\mu_0\vec J_{\mathrm s}\\). Substitute this into the second form of [5].

\\[
\vec B
=-\lambda_{\mathrm L}^2
\nabla\times(\nabla\times\vec B).
\tag*{[6]}
\\]

Use \\(\nabla\times(\nabla\times\vec B)=\nabla(\nabla\cdot\vec B)-\nabla^2\vec B\\) and Gauss's law for magnetism, \\(\nabla\cdot\vec B=0\\).

\\[
\nabla^2\vec B=\frac{1}{\lambda_{\mathrm L}^2}\vec B.
\tag*{[7]}
\\]

Consider a semi-infinite superconductor filling \\(x\gt0\\), with magnetic field parallel to its planar surface and varying only with depth. Equation [7] becomes

\\[
\frac{d^2B}{dx^2}=\frac{B}{\lambda_{\mathrm L}^2}.
\tag*{[8]}
\\]

The general solution is

\\[
B(x)=C_+e^{x/\lambda_{\mathrm L}}
+C_-e^{-x/\lambda_{\mathrm L}}.
\tag*{[9]}
\\]

Finiteness deep in the sample requires \\(C_+=0\\), and the boundary condition \\(B(0)=B_0\\) gives \\(C_-=B_0\\). Hence

\\[
B(x)=B_0e^{-x/\lambda_{\mathrm L}}.
\tag*{[10]}
\\]

<PhysicsDiagram slug="meissner-field-penetration" />

The left panel turns equation [10] into a depth profile: the applied field falls by a factor of \\(e\\) over one London penetration depth. The right panel shows the same effect spatially, with external field lines bending around the superconductor and \\(B\\) approximately zero in its bulk.

The magnetic field is therefore excluded from the bulk but remains nonzero within a surface layer of thickness of order \\(\lambda_{\mathrm L}\\). For \\(\vec B=B(x)\hat z\\), Ampere's law also gives the screening-current magnitude

\\[
J_{\mathrm s}(x)
=\frac{B_0}{\mu_0\lambda_{\mathrm L}}
e^{-x/\lambda_{\mathrm L}}.
\tag*{[11]}
\\]

A perfect conductor with only zero resistivity would preserve whatever magnetic flux it had when resistance vanished. A superconductor in the Meissner state instead expels magnetic flux on entering the superconducting phase, subject to its critical temperature and magnetic-field limits. The London model describes the low-field surface profile but not the full microscopic origin of superconductivity.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "London penetration depth from carrier density",
      question: "Estimate \\(\\lambda_{\\mathrm L}\\) for \\(N_{\\mathrm s}=1.0\\times10^{28}\\,\\mathrm{m^{-3}}\\), \\(q=-e\\), and \\(m=m_{\\mathrm e}\\). Use \\(e=1.60\\times10^{-19}\\,\\mathrm C\\), \\(m_{\\mathrm e}=9.11\\times10^{-31}\\,\\mathrm{kg}\\), and \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{H\\,m^{-1}}\\).",
      answer: "The carrier sign disappears through \\(q^2=e^2\\). Equation [3] gives \\[\\lambda_{\\mathrm L}=\\sqrt{\\frac{9.11\\times10^{-31}}{(4\\pi\\times10^{-7})(1.0\\times10^{28})(1.60\\times10^{-19})^2}}=5.3\\times10^{-8}\\,\\mathrm m.\\] **Final result:** \\(\\lambda_{\\mathrm L}=53\\,\\mathrm{nm}\\), so the applied field is confined to a nanoscale surface layer in this model.",
    },
    {
      title: "Field and screening current below a surface",
      question: "A superconductor has \\(\\lambda_{\\mathrm L}=40\\,\\mathrm{nm}\\) and surface field \\(B_0=20\\,\\mathrm{mT}\\). Find the field at depth \\(x=100\\,\\mathrm{nm}\\) and the screening-current density at the surface.",
      answer: "Equation [10] gives \\[B(100\\,\\mathrm{nm})=(20\\,\\mathrm{mT})e^{-100/40}=1.6\\,\\mathrm{mT}.\\] From equation [11], \\[J_{\\mathrm s}(0)=\\frac{0.020}{(4\\pi\\times10^{-7})(40\\times10^{-9})}=4.0\\times10^{11}\\,\\mathrm{A\\,m^{-2}}.\\] **Final result:** \\(B=1.6\\,\\mathrm{mT}\\) at \\(100\\,\\mathrm{nm}\\), and the surface screening-current density is \\(4.0\\times10^{11}\\,\\mathrm{A\\,m^{-2}}\\).",
    },
  ]}
/>
`;
