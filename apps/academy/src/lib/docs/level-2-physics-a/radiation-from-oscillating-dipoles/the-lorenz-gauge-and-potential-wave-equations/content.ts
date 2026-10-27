export const content = String.raw`## Principle

Different mathematical potentials can describe the same measurable electric and magnetic fields.

The potentials are not unique, but the Lorenz gauge selects a convenient relationship between them. With that relationship, Maxwell's coupled equations separate into one wave equation for the scalar potential and one for the vector potential, both propagating at the speed of light.

## Notation

<Notation
  items={[
    { symbol: "V,\\vec A", meaning: "scalar and magnetic vector potentials", unit: "V, T m" },
    { symbol: "\\vec E,\\vec B", meaning: "electric field and magnetic flux density", unit: "V m^{-1}, T" },
    { symbol: "\\rho,\\vec J", meaning: "charge density and current density", unit: "C m^{-3}, A m^{-2}" },
    { symbol: "\\chi", meaning: "gauge function", unit: "V s" },
    { symbol: "\\epsilon_0,\\mu_0", meaning: "vacuum permittivity and permeability", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "c", meaning: "vacuum wave speed", unit: "m s^{-1}" },
    { symbol: "\\omega,k", meaning: "angular frequency and wavenumber", unit: "rad s^{-1}, m^{-1}" },
    { symbol: "V_0,A_0", meaning: "peak scalar- and vector-potential amplitudes", unit: "V, T m" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

The fields are unchanged by the gauge transformation

\\[
\vec A\,'=\vec A+\nabla\chi,
\qquad
V'=V-\frac{\partial\chi}{\partial t}.
\tag*{[1]}
\\]

Indeed, \\(\nabla\times\nabla\chi=0\\), so \\(\vec B\,'=\vec B\\). For the electric field, the two new mixed-derivative terms cancel:

\\[
\begin{aligned}
\vec E\,'
&=-\nabla V'-\frac{\partial\vec A\,'}{\partial t}\\
&=-\nabla V+\nabla\frac{\partial\chi}{\partial t}
-\frac{\partial\vec A}{\partial t}
-\frac{\partial}{\partial t}(\nabla\chi)
=\vec E.
\end{aligned}
\tag*{[2]}
\\]

Use the Lorenz gauge with the sign fixed by the field convention \\(\vec E=-\nabla V-\partial\vec A/\partial t\\):

\\[
\boxed{
\nabla\cdot\vec A+\mu_0\epsilon_0\frac{\partial V}{\partial t}=0
}
\qquad\Longleftrightarrow\qquad
\nabla\cdot\vec A=-\frac{1}{c^2}\frac{\partial V}{\partial t}.
\tag*{[3]}
\\]

Apply Gauss's law to the potential form of \\(\vec E\\):

\\[
-\nabla^2V-\frac{\partial}{\partial t}(\nabla\cdot\vec A)
=\frac{\rho}{\epsilon_0}.
\tag*{[4]}
\\]

Substitute equation [3] into [4], then multiply by \\(-1\\). The scalar-potential equation becomes

\\[
\boxed{
\nabla^2V-\frac{1}{c^2}\frac{\partial^2V}{\partial t^2}
=-\frac{\rho}{\epsilon_0}
}.
\tag*{[5]}
\\]

For the vector potential, substitute \\(\vec B=\nabla\times\vec A\\) and \\(\vec E=-\nabla V-\partial\vec A/\partial t\\) into the Ampere-Maxwell law:

\\[
\nabla\times(\nabla\times\vec A)
=\mu_0\vec J
-\frac{1}{c^2}\nabla\frac{\partial V}{\partial t}
-\frac{1}{c^2}\frac{\partial^2\vec A}{\partial t^2}.
\tag*{[6]}
\\]

Use \\(\nabla\times(\nabla\times\vec A)=\nabla(\nabla\cdot\vec A)-\nabla^2\vec A\\). The gradient term from the double curl equals \\(-c^{-2}\nabla(\partial V/\partial t)\\) by equation [3], so the identical gradient terms cancel from the two sides of [6]. Rearranging gives

\\[
\boxed{
\nabla^2\vec A-\frac{1}{c^2}\frac{\partial^2\vec A}{\partial t^2}
=-\mu_0\vec J
}.
\tag*{[7]}
\\]

Equations [5] and [7] use the same wave operator and preserve the harmonic convention

\\[
\text{physical quantity}=\operatorname{Re}
\left\{\text{phasor}\,e^{-i\omega t}\right\},
\qquad k=\frac{\omega}{c}.
\tag*{[8]}
\\]

Changing the harmonic sign without changing the spatial phase or derivative rules reverses phase relations, so one convention must be retained through the field calculation.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Testing a longitudinal potential wave",
      question: "In source-free space, let \\(V=\\operatorname{Re}\\{V_0e^{i(kz-\\omega t)}\\}\\) and \\(\\vec A=\\operatorname{Re}\\{A_0e^{i(kz-\\omega t)}\\}\\hat{\\vec z}\\), where \\(V_0=6.0\\,\\mathrm V\\) and \\(k=\\omega/c\\). Find \\(A_0\\) required by the Lorenz gauge and verify the fields.",
      answer: "Apply derivatives to the common complex factor: \\(\\partial/\\partial z\\) gives \\(ik\\), while \\(\\partial/\\partial t\\) gives \\(-i\\omega\\). Equation [3] becomes \\[ikA_0-\\frac{i\\omega}{c^2}V_0=0.\\] Hence \\[A_0=\\frac{\\omega}{kc^2}V_0=\\frac{V_0}{c}=\\frac{6.0}{3.00\\times10^8}=2.0\\times10^{-8}\\,\\mathrm{T\\,m}.\\] Because \\(\\vec A\\) is parallel to its spatial variation, \\(\\nabla\\times\\vec A=\\vec 0\\), so \\(\\vec B=\\vec 0\\). The electric-field phasor is \\[\\widetilde E_z=-ikV_0+i\\omega A_0=-i\\frac{\\omega}{c}V_0+i\\frac{\\omega}{c}V_0=0.\\] **Final result:** \\(A_0=2.0\\times10^{-8}\\,\\mathrm{T\\,m}\\) and both fields vanish. The nonzero potentials form a pure-gauge configuration, illustrating why potentials are not themselves unique observables.",
    },
    {
      title: "Checking an outgoing source-free solution",
      question: "Show that \\(V=(V_0/r)e^{i(kr-\\omega t)}\\) satisfies the source-free scalar-potential wave equation for \\(r\\neq0\\) when \\(k=\\omega/c\\).",
      answer: "For a spherically symmetric function, \\(\\nabla^2V=r^{-2}\\partial(r^2\\partial V/\\partial r)/\\partial r\\). First differentiate the radial factor: \\[\\frac{\\partial V}{\\partial r}=V\\left(ik-\\frac{1}{r}\\right).\\] Multiplying by \\(r^2\\) and differentiating once more gives \\[r^2\\frac{\\partial V}{\\partial r}=V(ikr^2-r),\\qquad \\frac{\\partial}{\\partial r}\\left(r^2\\frac{\\partial V}{\\partial r}\\right)=-k^2r^2V.\\] Dividing by \\(r^2\\) therefore gives \\[\\nabla^2V=-k^2V.\\] The time derivatives give \\[\\frac{\\partial^2V}{\\partial t^2}=(-i\\omega)^2V=-\\omega^2V.\\] The left side of equation [5] with \\(\\rho=0\\) is therefore \\[\\nabla^2V-\\frac{1}{c^2}\\frac{\\partial^2V}{\\partial t^2}=\\left(-k^2+\\frac{\\omega^2}{c^2}\\right)V=0.\\] **Final result:** the outgoing \\(e^{ikr}/r\\) potential solves the source-free wave equation when \\(k=\\omega/c\\). The exclusion \\(r\\neq0\\) matters because the origin can contain the source.",
    },
  ]}
/>
`;
