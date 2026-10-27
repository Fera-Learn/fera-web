export const content = String.raw`## Principle

A moving charge can feel a sideways force near a wire even when an observer beside the wire says the wire is electrically neutral.

Electric and magnetic contributions to the Lorentz force depend on the inertial frame. In the charged-wire argument, a force that is purely magnetic for a moving test charge can be purely electric in the charge's rest frame because Lorentz contraction changes the two line-charge densities by different factors.

## Notation

<Notation
  items={[
    { symbol: "N,P", meaning: "negative-charge rest frame and positive-charge rest frame" },
    { symbol: "\\hat x,\\hat y,\\hat z", meaning: "right-handed Cartesian unit vectors, with the wire along x", unit: "1" },
    { symbol: "v", meaning: "relative speed of the two charge streams", unit: "m s^{-1}" },
    { symbol: "\\beta,\\gamma", meaning: "speed ratio v/c and Lorentz factor", unit: "1, 1" },
    { symbol: "n_l", meaning: "proper number of negative charges per unit length in the source diagram", unit: "m^{-1}" },
    { symbol: "\\lambda_0", meaning: "magnitude of each line-charge density in frame N", unit: "C m^{-1}" },
    { symbol: "\\lambda_{\\pm}^{(N)},\\lambda_{\\pm}^{(P)}", meaning: "positive and negative line-charge densities measured in N or P", unit: "C m^{-1}" },
    { symbol: "\\lambda_{\\mathrm{net}}^{(N)},\\lambda_{\\mathrm{net}}^{(P)}", meaning: "net line-charge densities measured in N and P", unit: "C m^{-1}, C m^{-1}" },
    { symbol: "I,\\vec E,\\vec B", meaning: "current magnitude, electric field, and magnetic field", unit: "A, V m^{-1}, T" },
    { symbol: "q,r", meaning: "positive test charge and its perpendicular distance from the wire", unit: "C, m" },
    { symbol: "\\vec F_N,\\vec F_P", meaning: "force on the test charge measured in N and P", unit: "N, N" },
    { symbol: "\\epsilon_0,\\mu_0,c", meaning: "vacuum permittivity, permeability, and light speed", unit: "F m^{-1}, H m^{-1}, m s^{-1}" },
  ]}
/>

## The Core Method

Use one explicit convention throughout. An infinite wire lies along \\(x\\), and the test charge is at \\(y=r\gt0\\). In frame \\(N\\), the negative charges are at rest, while the positive charges and the positive test charge move with velocity \\(-v\hat x\\). The wire is neutral in \\(N\\):

<PhysicsDiagram slug="charged-wire-reference-frames" />

In the source diagram, \\(n_l e\\) is the positive density magnitude called \\(\lambda_0\\) below. Frame \\(N\\) sees equal positive and negative densities, while frame \\(P\\) sees contracted negative spacing and the lower proper positive density, leaving a net negative line charge.

\\[
\lambda_-^{(N)}=-\lambda_0,
\qquad
\lambda_+^{(N)}=+\lambda_0,
\qquad
\lambda_{\mathrm{net}}^{(N)}=0.
\tag*{[1]}
\\]

The moving positive charges make a conventional current in the \\(-x\\) direction. Its magnitude and magnetic field at the test charge are

\\[
I=\lambda_0v,
\qquad
\vec B_N=-\frac{\mu_0\lambda_0v}{2\pi r}\hat z.
\tag*{[2]}
\\]

The magnetic-field sign follows from the right-hand rule. Since the wire is neutral, \\(\vec E_N=\vec0\\). The Lorentz force is therefore

\\[
\begin{aligned}
\vec F_N
&=q\left(\vec E_N+(-v\hat x)\times\vec B_N\right)\\
&=-\frac{\mu_0q\lambda_0v^2}{2\pi r}\hat y.
\end{aligned}
\tag*{[3]}
\\]

The negative \\(y\\) direction is toward the wire. Now change to frame \\(P\\), where the positive charges and test charge are at rest. A moving row of charges has a contracted spacing, so its line-charge magnitude is \\(\gamma\\) times its proper line-charge magnitude.

The negative charges have proper density magnitude \\(\lambda_0\\) because they are at rest in \\(N\\). The positive charges have observed density \\(\lambda_0\\) while moving in \\(N\\), so their proper density is \\(\lambda_0/\gamma\\). Consequently, in \\(P\\),

\\[
\lambda_+^{(P)}=\frac{\lambda_0}{\gamma},
\qquad
\lambda_-^{(P)}=-\gamma\lambda_0.
\tag*{[4]}
\\]

The net line charge in \\(P\\) is negative. Use \\(1-\beta^2=1/\gamma^2\\) to simplify it.

\\[
\begin{aligned}
\lambda_{\mathrm{net}}^{(P)}
&=\frac{\lambda_0}{\gamma}-\gamma\lambda_0\\
&=-\gamma\lambda_0\left(1-\frac{1}{\gamma^2}\right)\\
&=-\gamma\lambda_0\beta^2.
\end{aligned}
\tag*{[5]}
\\]

Gauss's law for an infinite line charge gives a radial electric field. At \\(y=r\\), the negative line charge points the field toward the wire.

\\[
\begin{aligned}
\vec E_P
&=\frac{\lambda_{\mathrm{net}}^{(P)}}{2\pi\epsilon_0r}\hat y\\
&=-\frac{\gamma\lambda_0v^2}{2\pi\epsilon_0c^2r}\hat y\\
&=-\frac{\gamma\mu_0\lambda_0v^2}{2\pi r}\hat y.
\end{aligned}
\tag*{[6]}
\\]

The last line uses \\(1/c^2=\mu_0\epsilon_0\\). The test charge is stationary in \\(P\\), so its magnetic force vanishes even though a magnetic field can still be present. Its force is

\\[
\vec F_P=q\vec E_P=\gamma\vec F_N.
\tag*{[7]}
\\]

Three-force magnitude is not frame invariant, so the factor \\(\gamma\\) is not a contradiction. Both observers predict attraction toward the wire. In the limit \\(v/c\to0\\), \\(\gamma\to1\\) and \\(\lambda_{\mathrm{net}}^{(P)}\to0\\), so the relativistic density difference disappears.

This charged-wire argument demonstrates how electric and magnetic contributions depend on the inertial frame. It does not assume or derive the general tensor transformation laws for arbitrary electric and magnetic fields.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Force in the two charged-wire frames",
      question: "Use the stated frame convention with \\(\\lambda_0=1.00\\,\\mu\\mathrm{C\\,m^{-1}}\\), \\(v=0.600c\\), \\(r=5.00\\,\\mathrm{cm}\\), and \\(q=1.602\\times10^{-19}\\,\\mathrm C\\). Find the force magnitudes in frames \\(N\\) and \\(P\\).",
      answer: "The strategy is to calculate the magnetic force from [2]-[3], then the electric force from [5]-[7]. Convert \\(r=5.00\\times10^{-2}\\,\\mathrm m\\) and \\(\\lambda_0=1.00\\times10^{-6}\\,\\mathrm{C\\,m^{-1}}\\), calculate \\(\\gamma=1.25\\), and use \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{H\\,m^{-1}}\\) and \\(\\epsilon_0=8.854\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\). In \\(N\\), \\[B_N=\\frac{(4\\pi\\times10^{-7})(1.00\\times10^{-6})(0.600)(2.998\\times10^8)}{2\\pi(5.00\\times10^{-2})}=7.20\\times10^{-4}\\,\\mathrm T.\\] Hence \\[F_N=qvB_N=(1.602\\times10^{-19})(0.600)(2.998\\times10^8)(7.20\\times10^{-4})=2.07\\times10^{-14}\\,\\mathrm N.\\] In \\(P\\), equation [5] gives \\[\\lambda_{\\mathrm{net}}^{(P)}=-(1.25)(1.00\\times10^{-6})(0.600)^2=-4.50\\times10^{-7}\\,\\mathrm{C\\,m^{-1}}.\\] Therefore \\[E_P=\\frac{4.50\\times10^{-7}}{2\\pi(8.854\\times10^{-12})(5.00\\times10^{-2})}=1.62\\times10^5\\,\\mathrm{V\\,m^{-1}},\\qquad F_P=qE_P=2.59\\times10^{-14}\\,\\mathrm N.\\] **Final result:** both forces point toward the wire, with \\(F_N=2.07\\times10^{-14}\\,\\mathrm N\\) and \\(F_P=2.59\\times10^{-14}\\,\\mathrm N=\\gamma F_N\\).",
    },
    {
      title: "Magnetic in one frame, electric in another",
      question: "Does describing the attraction as magnetic in \\(N\\) and electric in \\(P\\) mean that the observers disagree about the direction of transverse deflection?",
      answer: "No. In \\(N\\), the neutral wire has \\(\\vec E_N=0\\), and the moving test charge experiences \\(q(-v\\hat x)\\times\\vec B_N\\) toward the wire. In \\(P\\), the test charge is stationary, but unequal Lorentz contraction leaves a negative net line charge and an electric field toward the wire. The numerical force magnitudes differ because force is frame dependent, but the transverse direction agrees. **Final result:** electric and magnetic field contributions are observer dependent, while the two frame descriptions remain physically consistent.",
    },
  ]}
/>
`;
