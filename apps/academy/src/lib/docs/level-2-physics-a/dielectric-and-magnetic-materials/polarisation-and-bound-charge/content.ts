export const content = String.raw`## Principle

Place an insulator between charged plates and its bound positive and negative charges shift slightly in opposite directions.

Polarisation separates bound positive and negative charge inside matter. Its normal component determines the bound surface charge, while its spatial variation determines the bound volume charge. These charges are distinct from free charges supplied to or transported through the material.

## Notation

<Notation
  items={[
    { symbol: "\\vec P", meaning: "polarisation", unit: "C m^{-2}" },
    { symbol: "\\rho_{\\mathrm b},\\sigma_{\\mathrm b}", meaning: "bound volume and surface charge densities", unit: "C m^{-3}, C m^{-2}" },
    { symbol: "\\rho_{\\mathrm f},\\sigma_{\\mathrm f}", meaning: "free volume and surface charge densities", unit: "C m^{-3}, C m^{-2}" },
    { symbol: "\\hat n", meaning: "unit normal directed outward from the dielectric" },
    { symbol: "d\\vec A,dV", meaning: "outward area vector and volume element", unit: "m^{2}, m^{3}" },
    { symbol: "N,q,\\vec d", meaning: "dipole number density, charge magnitude, and negative-to-positive displacement", unit: "m^{-3}, C, m" },
    { symbol: "Q_{\\mathrm b}", meaning: "bound charge", unit: "C" },
    { symbol: "\\nabla\\cdot", meaning: "divergence operator", unit: "m^{-1}" },
  ]}
/>

## The Core Method

First consider identical dipoles aligned with the positive \\(x\\)-direction in a slab. If each positive charge is displaced by distance \\(d\\), the positive charge exposed at the right face of area \\(A\\) occupies an effective volume \\(Ad\\). Since there are \\(N\\) dipoles per unit volume,

<PhysicsDiagram slug="polarised-material-element" />

The thin negative face remains at \\(x\\), while the positive face is displaced to \\(x+\Delta x\\). The element dimensions identify the two face areas \\(\Delta y\Delta z\\), and the arrows show that \\(\vec P\\) points from the negative bound face towards the positive one.

\\[
Q_{\mathrm b}=NqAd=(Nqd)A=P A.
\tag*{[1]}
\\]

Thus the surface charge is positive where \\(\vec P\\) points out of the dielectric and negative where it points in. For an arbitrary surface orientation,

\\[
\boxed{\sigma_{\mathrm b}=\vec P\cdot\hat n}.
\tag*{[2]}
\\]

The outward normal is essential to the sign in [2]. If an inward normal is used in a calculation, include an additional minus sign; changing the coordinate convention does not change the physical surface charge.

To find charge inside a nonuniformly polarised material, take a small rectangular volume \\(dV=dx\,dy\,dz\\). In the \\(x\\)-direction, polarisation brings \\(P_x(x)dy\,dz\\) of positive charge through the left face and removes \\(P_x(x+dx)dy\,dz\\) through the right face. The net contribution is

\\[
dQ_x=\big[P_x(x)-P_x(x+dx)\big]dy\,dz
=-\frac{\partial P_x}{\partial x}dV.
\tag*{[3]}
\\]

Adding the corresponding \\(y\\)- and \\(z\\)-contributions gives

\\[
dQ_{\mathrm b}=-\left(
\frac{\partial P_x}{\partial x}
+\frac{\partial P_y}{\partial y}
+\frac{\partial P_z}{\partial z}
\right)dV.
\tag*{[4]}
\\]

Since \\(dQ_{\mathrm b}=\rho_{\mathrm b}dV\\), the local bound volume charge density is

\\[
\boxed{\rho_{\mathrm b}=-\nabla\cdot\vec P}.
\tag*{[5]}
\\]

The minus sign has a physical meaning: a region from which \\(\vec P\\) spreads outward has lost positive bound charge and therefore has negative \\(\rho_{\mathrm b}\\).

For a complete piece of dielectric, the divergence theorem shows that its volume and surface bound charges balance.

\\[
\int_V\rho_{\mathrm b}\,dV
=-\int_V\nabla\cdot\vec P\,dV
=-\oint_{\partial V}\vec P\cdot d\vec A.
\tag*{[6]}
\\]

Using [2] on the material boundary,

\\[
\int_V\rho_{\mathrm b}\,dV
+\oint_{\partial V}\sigma_{\mathrm b}\,dA=0.
\tag*{[7]}
\\]

Polarisation rearranges charges already bound within neutral matter; it does not create net charge. Free charge remains a separate source, so the total charge densities used in Maxwell's equations are

\\[
\rho=\rho_{\mathrm f}+\rho_{\mathrm b},
\qquad
\sigma=\sigma_{\mathrm f}+\sigma_{\mathrm b}.
\tag*{[8]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "A slab with graded polarisation",
      question: "A slab occupies \\(0\\le x\\le L\\), has face area \\(A=2.0\\times10^{-2}\\,\\mathrm{m^2}\\), and has \\(\\vec P=(P_0x/L)\\hat x\\), where \\(P_0=6.0\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\) and \\(L=3.0\\,\\mathrm{mm}\\). Find its bound volume charge, surface charges, and total bound charge.",
      answer: "Equation [5] gives a uniform volume density: \\[\\rho_{\\mathrm b}=-\\frac{dP_x}{dx}=-\\frac{P_0}{L}=-2.0\\times10^{-3}\\,\\mathrm{C\\,m^{-3}}.\\] At \\(x=0\\), \\(P_x=0\\), so \\(\\sigma_{\\mathrm b}=0\\). At \\(x=L\\), \\(\\hat n=\\hat x\\), so \\(\\sigma_{\\mathrm b}=P_0=6.0\\times10^{-6}\\,\\mathrm{C\\,m^{-2}}\\); the side faces have zero normal component. The charges are \\[Q_{\\mathrm{volume}}=\\rho_{\\mathrm b}AL=-1.2\\times10^{-7}\\,\\mathrm C,\\qquad Q_{\\mathrm{surface}}=P_0A=+1.2\\times10^{-7}\\,\\mathrm C.\\] **Final result:** the total bound charge is zero, as required by equation [7].",
    },
    {
      title: "Uniformly polarised block",
      question: "A finite block has uniform \\(\\vec P=P_0\\hat z\\). Where is its bound charge?",
      answer: "Uniform polarisation has zero divergence, so \\(\\rho_{\\mathrm b}=0\\) throughout the volume. On the face whose outward normal is \\(+\\hat z\\), \\(\\sigma_{\\mathrm b}=+P_0\\); on the opposite face it is \\(-P_0\\); and on side faces parallel to \\(\\hat z\\), it is zero. **Final result:** equal opposite surface charges appear only on the two faces normal to \\(\\vec P\\), preserving zero net bound charge.",
    },
  ]}
/>
`;
