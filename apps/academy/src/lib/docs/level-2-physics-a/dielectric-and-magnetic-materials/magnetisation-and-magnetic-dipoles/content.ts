export const content = String.raw`## Principle

A small current loop acts like a tiny magnet with a preferred axis.

Microscopic current loops carry magnetic dipole moments. Their vector average per unit volume is the magnetisation, which links the microscopic response of a magnetic material to the macroscopic fields \\(\vec B\\) and \\(\vec H\\).

## Notation

<Notation
  items={[
    { symbol: "I,S,\\hat n", meaning: "loop current, loop area, and unit normal fixed by the right-hand rule", unit: "A, m^{2}, 1" },
    { symbol: "\\vec m", meaning: "magnetic dipole moment of one current loop", unit: "A m^{2}" },
    { symbol: "N", meaning: "number of magnetic dipoles per unit volume", unit: "m^{-3}" },
    { symbol: "\\vec M", meaning: "magnetisation, or magnetic moment per unit volume", unit: "A m^{-1}" },
    { symbol: "\\vec B", meaning: "magnetic flux density", unit: "T" },
    { symbol: "\\vec H", meaning: "magnetic field strength associated with free currents", unit: "A m^{-1}" },
    { symbol: "\\mu_0,\\mu_{\\mathrm r}", meaning: "vacuum permeability and relative permeability", unit: "H m^{-1}, 1" },
    { symbol: "\\chi_{\\mathrm m}", meaning: "magnetic susceptibility" },
  ]}
/>

## The Core Method

For a planar loop carrying current \\(I\\), the magnetic dipole moment has magnitude \\(IS\\). Its direction is normal to the loop, with curled right-hand fingers following the conventional current.

\\[
\boxed{\vec m=IS\hat n}.
\tag*{[1]}
\\]

<PhysicsDiagram slug="current-loop-and-magnetisation" />

The right-hand rule links the loop current to the normal \\(\hat n\\), so the microscopic moment points along that normal. The larger construction shows many such current loops aligned inside the material; their moments reinforce a common macroscopic magnetic-field direction.

For many loops in a representative volume \\(\Delta V\\), magnetisation is their vector moment per unit volume. If \\(N\\) is the dipole number density,

\\[
\boxed{\vec M=\frac{1}{\Delta V}\sum_j\vec m_j
=N\langle\vec m\rangle}.
\tag*{[2]}
\\]

Equation [2] includes orientation: randomly directed moments can give \\(\vec M=\vec 0\\) even when every microscopic moment is nonzero. Alignment or induction by an applied field creates a nonzero average.

The auxiliary field \\(\vec H\\) separates the part associated with free source currents from the material magnetisation. In SI units its definition is

\\[
\boxed{\vec B=\mu_0(\vec H+\vec M)}.
\tag*{[3]}
\\]

For a linear, isotropic magnetic material, magnetisation is proportional to \\(\vec H\\).

\\[
\vec M=\chi_{\mathrm m}\vec H.
\tag*{[4]}
\\]

Substituting [4] into [3] gives

\\[
\vec B=\mu_0(1+\chi_{\mathrm m})\vec H.
\tag*{[5]}
\\]

Relative permeability is defined by \\(\vec B=\mu_0\mu_{\mathrm r}\vec H\\). Comparison with [5] therefore yields

\\[
\mu_{\mathrm r}=1+\chi_{\mathrm m},
\qquad
\vec M=(\mu_{\mathrm r}-1)\vec H.
\tag*{[6]}
\\]

Eliminating \\(\vec H=\vec B/(\mu_0\mu_{\mathrm r})\\) gives an equivalent relation useful when \\(\vec B\\) is known.

\\[
\mu_0\vec M
=\frac{\mu_{\mathrm r}-1}{\mu_{\mathrm r}}\vec B.
\tag*{[7]}
\\]

These constant-\\(\chi_{\mathrm m}\\) relations apply only in the linear regime. Saturation, hysteresis, and anisotropy prevent a general magnetic material from being represented by one constant scalar permeability.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Moment of a circular current loop",
      question: "A circular loop of radius \\(1.0\\,\\mathrm{cm}\\) carries a current of \\(2.0\\,\\mathrm A\\). Find its magnetic dipole moment and state its direction.",
      answer: "The loop area is \\(S=\\pi r^2=\\pi(1.0\\times10^{-2})^2=3.14\\times10^{-4}\\,\\mathrm{m^2}\\). Equation [1] gives \\[m=IS=(2.0)(3.14\\times10^{-4})=6.3\\times10^{-4}\\,\\mathrm{A\\,m^2}.\\] **Final result:** \\(\\vec m=(6.3\\times10^{-4}\\,\\mathrm{A\\,m^2})\\hat n\\), where \\(\\hat n\\) points along the thumb when the right-hand fingers curl with the conventional current.",
    },
    {
      title: "Field inside a linear magnetic material",
      question: "A linear material has \\(\\vec H=(1.0\\times10^5\\,\\mathrm{A\\,m^{-1}})\\hat z\\) and \\(\\vec M=(4.0\\times10^5\\,\\mathrm{A\\,m^{-1}})\\hat z\\). Find \\(\\mu_{\\mathrm r}\\) and \\(\\vec B\\).",
      answer: "Equation [4] gives \\(\\chi_{\\mathrm m}=M/H=4.0\\), so \\(\\mu_{\\mathrm r}=1+\\chi_{\\mathrm m}=5.0\\). Using \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{H\\,m^{-1}}\\), \\[\\vec B=\\mu_0(\\vec H+\\vec M)=(4\\pi\\times10^{-7})(5.0\\times10^5)\\hat z=0.63\\hat z\\,\\mathrm T.\\] **Final result:** \\(\\mu_{\\mathrm r}=5.0\\) and \\(\\vec B=0.63\\hat z\\,\\mathrm T\\).",
    },
  ]}
/>
`;
