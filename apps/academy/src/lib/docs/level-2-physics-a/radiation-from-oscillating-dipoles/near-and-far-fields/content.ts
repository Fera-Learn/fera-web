export const content = String.raw`## Principle

Close to an oscillating source the field resembles a changing static pattern, while far away a freely propagating wave dominates.

An oscillating electric dipole produces three distance scalings. The quasi-static field falls as \\(r^{-3}\\), the induction field as \\(r^{-2}\\), and the radiation field as \\(r^{-1}\\); only the last survives far from the source as a transverse travelling wave.

## Notation

<Notation
  items={[
    { symbol: "\\vec p,p,\\dot p,\\ddot p", meaning: "dipole moment along z and its first two time derivatives", unit: "C m, C m, A m, A m s^{-1}" },
    { symbol: "p_0", meaning: "peak dipole-moment magnitude", unit: "C m" },
    { symbol: "V,\\vec A,A_r,A_\\theta,A_\\phi", meaning: "scalar potential, vector potential, and its spherical components", unit: "V, T m, T m, T m, T m" },
    { symbol: "\\vec E,E_r,E_\\theta,E_\\phi", meaning: "electric field and its spherical components", unit: "V m^{-1}" },
    { symbol: "\\vec B,B_r,B_\\theta,B_\\phi", meaning: "magnetic field and its spherical components", unit: "T" },
    { symbol: "E_{\\mathrm{near}},E_{\\mathrm{ind}},E_{\\mathrm{rad}}", meaning: "characteristic near, induction, and radiation electric-field terms", unit: "V m^{-1}" },
    { symbol: "r,\\theta", meaning: "distance from the source and polar angle from the dipole axis", unit: "m, rad" },
    { symbol: "t_r", meaning: "retarded time equal to t-r/c", unit: "s" },
    { symbol: "\\hat{\\vec r},\\hat{\\vec\\theta},\\hat{\\vec\\phi},\\hat{\\vec z}", meaning: "right-handed spherical and dipole-axis unit vectors" },
    { symbol: "\\omega,f,k,\\lambda", meaning: "angular frequency, frequency, wavenumber, and wavelength", unit: "rad s^{-1}, Hz, m^{-1}, m" },
    { symbol: "c,\\epsilon_0,\\mu_0", meaning: "vacuum wave speed, permittivity, and permeability", unit: "m s^{-1}, F m^{-1}, H m^{-1}" },
    { symbol: "\\ell", meaning: "dipole length", unit: "m" },
  ]}
/>

## The Core Method

Use a \\(+z\\)-directed Hertzian dipole with \\(\vec p(t)=p_0\cos(\omega t)\hat{\vec z}\\), physical fields given by the real part of phasors proportional to \\(e^{-i\omega t}\\), and outgoing factor \\(e^{ikr}\\). The retarded potentials are

\\[
\vec A=\frac{\mu_0}{4\pi r}\dot{\vec p}(t_r),
\qquad
V=\frac{\cos\theta}{4\pi\epsilon_0}
\left[\frac{p(t_r)}{r^2}+\frac{\dot p(t_r)}{cr}\right].
\tag*{[1]}
\\]

When differentiating, both the explicit power of \\(r\\) and the retarded time contribute. For any differentiable function \\(F\\) and positive integer \\(n\\),

\\[
\frac{\partial}{\partial r}
\left[\frac{F(t_r)}{r^n}\right]
=-\frac{nF(t_r)}{r^{n+1}}
-\frac{\dot F(t_r)}{cr^n},
\qquad
\frac{\partial t_r}{\partial r}=-\frac{1}{c}.
\tag*{[2]}
\\]

First resolve the vector potential using \\(\hat{\vec z}=\cos\theta\hat{\vec r}-\sin\theta\hat{\vec\theta}\\):

\\[
\begin{aligned}
A_r&=\frac{\mu_0\dot p(t_r)}{4\pi r}\cos\theta,\\
A_\theta&=-\frac{\mu_0\dot p(t_r)}{4\pi r}\sin\theta,
\qquad A_\phi=0.
\end{aligned}
\tag*{[3]}
\\]

Axisymmetry removes the \\(\phi\\) derivative from the spherical gradient. Apply equation [2] separately to the two radial factors in \\(V\\):

\\[
\begin{aligned}
\nabla V
&=\frac{\partial V}{\partial r}\hat{\vec r}
+\frac{1}{r}\frac{\partial V}{\partial\theta}\hat{\vec\theta},\\
\frac{\partial V}{\partial r}
&=\frac{\cos\theta}{4\pi\epsilon_0}
\left[
-\frac{2p(t_r)}{r^3}
-\frac{2\dot p(t_r)}{cr^2}
-\frac{\ddot p(t_r)}{c^2r}
\right],\\
\frac{1}{r}\frac{\partial V}{\partial\theta}
&=-\frac{\sin\theta}{4\pi\epsilon_0}
\left[
\frac{p(t_r)}{r^3}
+\frac{\dot p(t_r)}{cr^2}
\right].
\end{aligned}
\tag*{[4]}
\\]

The vector-potential contribution is found by differentiating equation [3] at fixed position:

\\[
\begin{aligned}
\frac{\partial A_r}{\partial t}
&=\frac{\mu_0\ddot p(t_r)}{4\pi r}\cos\theta,\\
\frac{\partial A_\theta}{\partial t}
&=-\frac{\mu_0\ddot p(t_r)}{4\pi r}\sin\theta,
\qquad
\frac{\partial A_\phi}{\partial t}=0.
\end{aligned}
\tag*{[5]}
\\]

Now apply \\(\vec E=-\nabla V-\partial\vec A/\partial t\\). Using \\(\mu_0=1/(\epsilon_0c^2)\\), the radial \\(\ddot p\\) terms cancel explicitly:

\\[
\begin{aligned}
E_r
&=-\frac{\partial V}{\partial r}-\frac{\partial A_r}{\partial t}\\
&=\frac{\cos\theta}{4\pi\epsilon_0}
\left[
\frac{2p(t_r)}{r^3}
+\frac{2\dot p(t_r)}{cr^2}
+\frac{\ddot p(t_r)}{c^2r}
\right]
-\frac{\cos\theta}{4\pi\epsilon_0}
\frac{\ddot p(t_r)}{c^2r}\\
&=\frac{2\cos\theta}{4\pi\epsilon_0}
\left[
\frac{p(t_r)}{r^3}+\frac{\dot p(t_r)}{cr^2}
\right].
\end{aligned}
\tag*{[6]}
\\]

The polar vector-potential term instead adds to the polar gradient term. Together with equation [6], the final electric components are

\\[
\boxed{
\begin{aligned}
E_r&=\frac{2\cos\theta}{4\pi\epsilon_0}
\left[
\frac{p(t_r)}{r^3}+\frac{\dot p(t_r)}{cr^2}
\right],\\
E_\theta
&=-\frac{1}{r}\frac{\partial V}{\partial\theta}
-\frac{\partial A_\theta}{\partial t}\\
&=\frac{\sin\theta}{4\pi\epsilon_0}
\left[
\frac{p(t_r)}{r^3}
+\frac{\dot p(t_r)}{cr^2}
+\frac{\ddot p(t_r)}{c^2r}
\right],\\
E_\phi&=0.
\end{aligned}
}
\tag*{[7]}
\\]

For the magnetic field, axisymmetry and \\(A_\phi=0\\) make the radial and polar curl components vanish:

\\[
\begin{aligned}
B_r
&=\frac{1}{r\sin\theta}
\left[
\frac{\partial(\sin\theta A_\phi)}{\partial\theta}
-\frac{\partial A_\theta}{\partial\phi}
\right]=0,\\
B_\theta
&=\frac{1}{r}
\left[
\frac{1}{\sin\theta}\frac{\partial A_r}{\partial\phi}
-\frac{\partial(rA_\phi)}{\partial r}
\right]=0.
\end{aligned}
\tag*{[8]}
\\]

The remaining spherical curl component requires both an explicit radial derivative and the retarded-time derivative from equation [2]:

\\[
\begin{aligned}
B_\phi
&=\frac{1}{r}
\left[
\frac{\partial(rA_\theta)}{\partial r}
-\frac{\partial A_r}{\partial\theta}
\right],\\
\frac{\partial(rA_\theta)}{\partial r}
&=\frac{\mu_0\ddot p(t_r)\sin\theta}{4\pi c},
\qquad
\frac{\partial A_r}{\partial\theta}
=-\frac{\mu_0\dot p(t_r)\sin\theta}{4\pi r},\\
B_\phi
&=\frac{\mu_0\sin\theta}{4\pi}
\left[
\frac{\dot p(t_r)}{r^2}
+\frac{\ddot p(t_r)}{cr}
\right].
\end{aligned}
\tag*{[9]}
\\]

For harmonic motion, each time derivative contributes a factor of order \\(\omega\\). Relative to the \\(r^{-3}\\) electric term, the induction and radiation terms therefore scale as

\\[
\frac{E_{\mathrm{ind}}}{E_{\mathrm{near}}}\sim kr,
\qquad
\frac{E_{\mathrm{rad}}}{E_{\mathrm{near}}}\sim(kr)^2,
\qquad k=\frac{\omega}{c}=\frac{2\pi}{\lambda}.
\tag*{[10]}
\\]

This identifies three regimes, always subject to the source approximation \\(r\gg\ell\\): \\(kr\ll1\\) is the near zone, \\(kr\sim1\\) is the intermediate zone, and \\(kr\gg1\\) is the far zone. In the far zone only the \\(r^{-1}\\) terms remain:

\\[
\boxed{
\vec E_{\mathrm{far}}
=\frac{\ddot p(t_r)\sin\theta}{4\pi\epsilon_0c^2r}
\hat{\vec\theta},
\qquad
\vec B_{\mathrm{far}}
=\frac{\mu_0\ddot p(t_r)\sin\theta}{4\pi cr}
\hat{\vec\phi},
\qquad
\vec B_{\mathrm{far}}=\frac{1}{c}\hat{\vec r}\times\vec E_{\mathrm{far}}
}.
\tag*{[11]}
\\]

<PhysicsDiagram slug="dipole-field-cycle" />

The blue contours and chevrons show successive electric-field structures during a complete cycle. The magnetic field circles the dipole axis, pointing out of the page on the left and into it on the right. Reversing both fields during the next half-cycle leaves \\(\vec E\times\vec B\\) and the outgoing wavevector \\(\vec k\\) directed radially outward.

Because \\(c^2=1/(\mu_0\epsilon_0)\\), equation [11] gives \\(E_{\mathrm{far}}=cB_{\mathrm{far}}\\). The fields are transverse and \\(\vec E\times\vec B\\) points outward. Near the source, \\(E_r\neq0\\) and no plane-wave relation should be imposed.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Classifying observation distances",
      question: "A Hertzian dipole radiates at \\(f=30\\,\\mathrm{MHz}\\) and has \\(\\ell=1.0\\,\\mathrm{cm}\\). Classify observations at \\(r=0.10\\,\\mathrm m\\), \\(1.6\\,\\mathrm m\\), and \\(100\\,\\mathrm m\\).",
      answer: "First find the wavelength and wavenumber: \\[\\lambda=\\frac{c}{f}=\\frac{3.00\\times10^8}{3.0\\times10^7}=10.0\\,\\mathrm m,\\qquad k=\\frac{2\\pi}{\\lambda}=0.628\\,\\mathrm{m^{-1}}.\\] The three dimensionless distances are \\[kr=(0.628)(0.10)=0.0628,\\qquad kr=(0.628)(1.6)=1.00,\\qquad kr=(0.628)(100)=62.8.\\] **Final result:** \\(0.10\\,\\mathrm m\\) is in the near zone, \\(1.6\\,\\mathrm m\\) is in the intermediate zone, and \\(100\\,\\mathrm m\\) is in the far zone. All also satisfy \\(r/\\ell\\geq10\\); the closest point is only marginally well separated from the source, which should be stated when using the ideal dipole model.",
    },
    {
      title: "Checking the far-field directions",
      question: "At a broadside point \\(\\theta=\\pi/2\\), suppose \\(\\ddot p(t_r)\\lt0\\). Determine the directions of \\(\\vec E_{\\mathrm{far}}\\), \\(\\vec B_{\\mathrm{far}}\\), and energy flow.",
      answer: "Equation [11] has positive scalar prefactors apart from \\(\\ddot p(t_r)\\). Therefore \\(\\ddot p(t_r)\\lt0\\) gives \\[\\vec E_{\\mathrm{far}}\\parallel-\\hat{\\vec\\theta},\\qquad \\vec B_{\\mathrm{far}}\\parallel-\\hat{\\vec\\phi}.\\] The spherical basis is right-handed, so \\(\\hat{\\vec\\theta}\\times\\hat{\\vec\\phi}=\\hat{\\vec r}\\). Reversing both transverse vectors leaves their cross product unchanged: \\[(-\\hat{\\vec\\theta})\\times(-\\hat{\\vec\\phi})=\\hat{\\vec r}.\\] **Final result:** both fields reverse during this half-cycle, but \\(\\vec E\\times\\vec B\\) remains radially outward. Assigning opposite signs to \\(E_\\theta\\) and \\(B_\\phi\\) would incorrectly predict inward radiation.",
    },
  ]}
/>
`;
