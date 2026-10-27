export const content = String.raw`## Principle

An electric field can line up molecules that already have separated charge or gently distort atoms that do not.

Polar molecules possess permanent electric dipole moments, whereas non-polar atoms or molecules acquire dipole moments only when an electric field distorts their charge distributions. In both cases, the macroscopic response is described by the polarisation: electric dipole moment per unit volume.

## Notation

<Notation
  items={[
    { symbol: "q", meaning: "magnitude of either charge in a dipole", unit: "C" },
    { symbol: "\\vec d", meaning: "displacement vector from negative to positive charge", unit: "m" },
    { symbol: "\\vec p", meaning: "electric dipole moment", unit: "C m" },
    { symbol: "N", meaning: "number of dipoles per unit volume", unit: "m^{-3}" },
    { symbol: "\\vec P", meaning: "polarisation, or dipole moment per unit volume", unit: "C m^{-2}" },
    { symbol: "\\vec E", meaning: "macroscopic electric field in the dielectric", unit: "V m^{-1}" },
    { symbol: "\\alpha", meaning: "electric polarisability of one non-polar particle", unit: "C m^{2} V^{-1}" },
    { symbol: "\\chi_{\\mathrm e},\\epsilon_{\\mathrm r}", meaning: "electric susceptibility and relative permittivity" },
    { symbol: "\\epsilon_0", meaning: "vacuum permittivity", unit: "F m^{-1}" },
  ]}
/>

## The Core Method

For charges \\(-q\\) and \\(+q\\) separated by \\(\vec d\\), directed from the negative charge to the positive charge, the electric dipole moment is

\\[
\vec p=q\vec d.
\tag*{[1]}
\\]

If a small representative volume \\(\Delta V\\) contains many dipoles, its polarisation is the vector sum of their moments divided by that volume. For number density \\(N\\), this is also \\(N\\) times the average molecular moment.

\\[
\vec P=\frac{1}{\Delta V}\sum_j\vec p_j=N\langle\vec p\rangle.
\tag*{[2]}
\\]

A polar molecule has a permanent moment \\(\vec p_0\\) because its positive and negative charge centres do not coincide. With no applied field, thermal motion usually randomises molecular orientations, so their vector average vanishes even though each molecule remains polar.

\\[
\vec p_0\ne\vec 0,
\qquad
\langle\vec p_0\rangle=\vec 0
\quad\Longrightarrow\quad
\vec P=\vec 0.
\tag*{[3]}
\\]

An applied field exerts a torque that favours alignment with \\(\vec E\\). Thermal agitation prevents complete alignment, so the field generally produces only a nonzero average component.

\\[
\vec P=N\langle\vec p_0\rangle_{\text{field}}.
\tag*{[4]}
\\]

The source diagrams compare permanent charge separation with field-induced distortion.

<PhysicsDiagram slug="polar-and-induced-dipoles" />

In the water molecule, the centres of net positive and negative charge are already separated. In the non-polar atom, the nucleus initially sits at the centre of the electron cloud; the applied field displaces the two charge centres and creates a dipole.

A non-polar particle has coincident charge centres before the field is applied. The field shifts its positive and negative charge distributions in opposite directions. In the linear regime, the resulting induced moment is

\\[
\vec p_{\mathrm{ind}}=\alpha\vec E.
\tag*{[5]}
\\]

For identical non-polar particles whose induced moments all follow the field, equations [2] and [5] give

\\[
\vec P=N\alpha\vec E.
\tag*{[6]}
\\]

At macroscopic scale, a linear, isotropic dielectric is characterised without needing to separate permanent alignment from induced distortion.

\\[
\vec P=\epsilon_0\chi_{\mathrm e}\vec E
=\epsilon_0(\epsilon_{\mathrm r}-1)\vec E,
\qquad
\epsilon_{\mathrm r}=1+\chi_{\mathrm e}.
\tag*{[7]}
\\]

Equation [7] is a material law, not a universal identity: strong fields, anisotropic solids, and temperature-dependent alignment can require a response that is not a constant multiple of \\(\vec E\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Polarisation of induced dipoles",
      question: "A non-polar dielectric has particle density \\(N=2.0\\times10^{28}\\,\\mathrm{m^{-3}}\\) and polarisability \\(\\alpha=4.0\\times10^{-40}\\,\\mathrm{C\\,m^2\\,V^{-1}}\\). Find the induced moment per particle, polarisation, and relative permittivity when \\(E=3.0\\times10^6\\,\\mathrm{V\\,m^{-1}}\\).",
      answer: "The field induces one moment \\[p_{\\mathrm{ind}}=\\alpha E=(4.0\\times10^{-40})(3.0\\times10^6)=1.2\\times10^{-33}\\,\\mathrm{C\\,m}.\\] The aligned moments give \\[P=Np_{\\mathrm{ind}}=(2.0\\times10^{28})(1.2\\times10^{-33})=2.4\\times10^{-5}\\,\\mathrm{C\\,m^{-2}}.\\] Using \\(\\epsilon_0=8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\), \\[\\chi_{\\mathrm e}=\\frac{P}{\\epsilon_0E}=0.90,\\qquad \\epsilon_{\\mathrm r}=1+\\chi_{\\mathrm e}=1.90.\\] **Final result:** \\(p_{\\mathrm{ind}}=1.2\\times10^{-33}\\,\\mathrm{C\\,m}\\), \\(P=2.4\\times10^{-5}\\,\\mathrm{C\\,m^{-2}}\\), and \\(\\epsilon_{\\mathrm r}=1.90\\).",
    },
    {
      title: "Permanent moment versus net polarisation",
      question: "A sample contains polar molecules but has no applied electric field. Must it have a nonzero macroscopic polarisation?",
      answer: "Each molecule can have \\(\\vec p_0\\ne\\vec 0\\) while random orientations make the vector average zero. Equation [2] then gives \\(\\vec P=N\\langle\\vec p_0\\rangle=\\vec 0\\). **Final result:** no; randomly oriented permanent dipoles can give \\(\\vec P=\\vec 0\\). An applied field can bias those orientations and create a net polarisation; it does not need to create the permanent molecular moments themselves.",
    },
  ]}
/>
`;
