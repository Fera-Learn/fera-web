export const content = String.raw`## Principle

If charge inside a region decreases, the missing charge must have crossed the boundary rather than vanished.

Charge cannot appear or disappear locally. The continuity equation states that any decrease of charge inside a fixed volume is exactly balanced by outward current through its boundary, and it follows directly from the Ampere-Maxwell and electric Gauss laws.

## Notation

<Notation
  items={[
    { symbol: "\\rho", meaning: "volume charge density", unit: "C m^{-3}" },
    { symbol: "\\vec J", meaning: "electric current density", unit: "A m^{-2}" },
    { symbol: "\\vec E,\\vec B", meaning: "electric and magnetic fields", unit: "V m^{-1}, T" },
    { symbol: "\\nabla", meaning: "spatial differential operator", unit: "m^{-1}" },
    { symbol: "\\epsilon_0,\\mu_0", meaning: "vacuum permittivity and permeability", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "V,S", meaning: "fixed control volume and its closed boundary surface", unit: "m^{3}, m^{2}" },
    { symbol: "dV,d\\vec S", meaning: "volume element and outward-directed area element", unit: "m^{3}, m^{2}" },
    { symbol: "Q", meaning: "total charge inside V", unit: "C" },
    { symbol: "I_{\\mathrm{out}}", meaning: "net conventional current flowing outward through S", unit: "A" },
    { symbol: "J_x,x,t", meaning: "x-component of current density, position, and time", unit: "A m^{-2}, m, s" },
  ]}
/>

## The Core Method

Start with the Ampere-Maxwell law. The displacement-current term is essential when charge density changes with time.

\\[
\nabla\times\vec B
=\mu_0\vec J+\mu_0\epsilon_0\frac{\partial\vec E}{\partial t}.
\tag*{[1]}
\\]

Take the divergence of every term. For smooth fields, the time derivative and divergence can be interchanged.

\\[
\nabla\cdot(\nabla\times\vec B)
=\mu_0\nabla\cdot\vec J
+\mu_0\epsilon_0\frac{\partial}{\partial t}(\nabla\cdot\vec E).
\tag*{[2]}
\\]

Use the identity that the divergence of any curl is zero and use the electric Gauss law.

\\[
\nabla\cdot(\nabla\times\vec B)=0,
\qquad
\nabla\cdot\vec E=\frac{\rho}{\epsilon_0}.
\tag*{[3]}
\\]

Substitution into [2], followed by division by \\(\mu_0\\), gives

\\[
0=\nabla\cdot\vec J+\frac{\partial\rho}{\partial t}
\quad\Longrightarrow\quad
\boxed{\frac{\partial\rho}{\partial t}+\nabla\cdot\vec J=0}.
\tag*{[4]}
\\]

This is the local continuity equation. Positive \\(\nabla\cdot\vec J\\) means that more current leaves a small region than enters it, so \\(\partial\rho/\partial t\\) must be negative there. A frequent sign error is to omit this minus relationship between outward flow and stored charge.

For a fixed control volume, integrate [4] and apply the divergence theorem.

\\[
\int_V\frac{\partial\rho}{\partial t}\,dV
+\int_V\nabla\cdot\vec J\,dV
=\frac{d}{dt}\int_V\rho\,dV
+\oint_S\vec J\cdot d\vec S=0.
\tag*{[5]}
\\]

Since \\(Q=\int_V\rho\,dV\\) and the area vector points outward,

\\[
\boxed{\frac{dQ}{dt}=-\oint_S\vec J\cdot d\vec S=-I_{\mathrm{out}}}.
\tag*{[6]}
\\]

The fixed-volume condition matters. If the boundary itself moves, an additional transport term is needed; equation [6] is the appropriate form for a stationary control volume.

In a one-dimensional problem, the local equation reduces to

\\[
\frac{\partial\rho}{\partial t}+\frac{\partial J_x}{\partial x}=0.
\tag*{[7]}
\\]

At steady state, \\(\partial\rho/\partial t=0\\), so \\(\nabla\cdot\vec J=0\\). This condition does not require \\(\vec J=\vec0\\); it requires balanced current flow with no local accumulation.

Without the displacement-current term in [1], taking the divergence would incorrectly force \\(\nabla\cdot\vec J=0\\) even while \\(\rho\\) changes. Maxwell's added term is therefore what makes the field equations consistent with local charge conservation.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Charge leaving a fixed cube",
      question: "A cube of side \\(a=0.100\\,\\mathrm m\\) contains a spatially uniform charge density that changes at \\(\\partial\\rho/\\partial t=-2.00\\,\\mu\\mathrm{C\\,m^{-3}\\,s^{-1}}\\). Find the net outward current through the cube's surface.",
      answer: "The strategy is to use the integral continuity equation because the requested quantity is the total boundary current. The fixed cube has volume \\[a^3=(0.100\\,\\mathrm m)^3=1.00\\times10^{-3}\\,\\mathrm{m^3}.\\] Uniform density gives \\[\\frac{dQ}{dt}=a^3\\frac{\\partial\\rho}{\\partial t}=(1.00\\times10^{-3}\\,\\mathrm{m^3})(-2.00\\times10^{-6}\\,\\mathrm{C\\,m^{-3}\\,s^{-1}})=-2.00\\times10^{-9}\\,\\mathrm{C\\,s^{-1}}.\\] Equation [6] changes the sign when converting loss of stored charge to outward current: \\[I_{\\mathrm{out}}=-\\frac{dQ}{dt}=2.00\\times10^{-9}\\,\\mathrm A.\\] **Final result:** \\(2.00\\,\\mathrm{nA}\\) flows outward. The positive outward current is consistent with the negative rate of change of charge inside.",
    },
    {
      title: "Steady current through unequal cross-sections",
      question: "A steady current passes through a wire whose cross-sectional area becomes smaller. Does \\(\\nabla\\cdot\\vec J=0\\) require the magnitude of \\(\\vec J\\) to remain constant?",
      answer: "No. Steady state gives \\(\\partial\\rho/\\partial t=0\\), so the current entering any fixed segment must equal the current leaving it. Let \\(A_1\\) and \\(A_2\\) be the two cross-sectional areas and \\(J_1\\) and \\(J_2\\) the corresponding current-density magnitudes. For approximately uniform current density over each cross-section, \\[I=J_1A_1=J_2A_2.\\] If \\(A_2\\lt A_1\\), then \\(J_2\\gt J_1\\) even though there is no charge accumulation. **Final result:** zero divergence enforces balanced total flow, not a spatially constant current-density magnitude.",
    },
  ]}
/>
`;
