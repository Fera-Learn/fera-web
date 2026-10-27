export const content = String.raw`## Principle

In source-free vacuum, a changing electric field creates a magnetic curl and a changing magnetic field creates an electric curl. Combining these two statements gives wave equations for both fields and fixes their propagation speed.

## Notation

<Notation
  items={[
    { symbol: "\\vec E,\\vec B", meaning: "real electric field and magnetic flux density", unit: "V m^{-1}, T" },
    { symbol: "\\rho_q,\\vec J", meaning: "charge density and current density; both vanish here", unit: "C m^{-3}, A m^{-2}" },
    { symbol: "\\epsilon_0,\\mu_0", meaning: "vacuum permittivity and permeability", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "\\nabla,\\nabla^2", meaning: "vector differential operator and Laplacian", unit: "m^{-1}, m^{-2}" },
    { symbol: "c,t", meaning: "vacuum wave speed and time", unit: "m s^{-1}, s" },
    { symbol: "\\vec k,k,\\omega", meaning: "wavevector, wavenumber, and angular frequency", unit: "m^{-1}, m^{-1}, rad s^{-1}" },
    { symbol: "\\vec r,\\widetilde{\\vec E}_0,i", meaning: "position, complex peak electric-field amplitude, and imaginary unit", unit: "m, V m^{-1}, 1" },
    { symbol: "\\hat{\\vec z}", meaning: "unit vector along the example propagation axis" },
  ]}
/>

## The Core Method

With \\(\rho_q=0\\) and \\(\vec J=\vec 0\\), Maxwell's equations in vacuum are

\\[
\nabla\cdot\vec E=0,\qquad \nabla\cdot\vec B=0,\qquad
\nabla\times\vec E=-\frac{\partial\vec B}{\partial t},\qquad
\nabla\times\vec B=\mu_0\epsilon_0\frac{\partial\vec E}{\partial t}.
\tag*{[1]}
\\]

Take the curl of Faraday's law. Smooth fields allow the spatial curl and time derivative to be interchanged, and Ampere-Maxwell's law then removes \\(\vec B\\):

\\[
\nabla\times(\nabla\times\vec E)
=-\frac{\partial}{\partial t}(\nabla\times\vec B)
=-\mu_0\epsilon_0\frac{\partial^2\vec E}{\partial t^2}.
\tag*{[2]}
\\]

The double-curl identity and electric Gauss law give

\\[
\nabla\times(\nabla\times\vec E)
=\nabla(\nabla\cdot\vec E)-\nabla^2\vec E
=-\nabla^2\vec E.
\tag*{[3]}
\\]

Equating [2] and [3], then multiplying by \\(-1\\), produces the electric-field wave equation. Repeating the same steps after taking the curl of Ampere-Maxwell's law produces the magnetic-field equation:

\\[
\nabla^2\vec E-\mu_0\epsilon_0\frac{\partial^2\vec E}{\partial t^2}=\vec 0,
\qquad
\nabla^2\vec B-\mu_0\epsilon_0\frac{\partial^2\vec B}{\partial t^2}=\vec 0.
\tag*{[4]}
\\]

Comparison with the standard wave equation, \\(\nabla^2\vec E-c^{-2}\partial_t^2\vec E=\vec 0\\), identifies

\\[
c=\frac{1}{\sqrt{\mu_0\epsilon_0}}.
\tag*{[5]}
\\]

For consistency throughout wave optics, use the harmonic convention \\(\vec E=\operatorname{Re}\{\widetilde{\vec E}_0e^{i\vec k\cdot\vec r}e^{-i\omega t}\}\\). Substitution into [4] gives \\(-k^2+\omega^2/c^2=0\\), so a forward vacuum wave obeys \\(\omega=ck\\).

<PhysicsExamples collapsible
  items={[
    {
      title: "Speed predicted by the vacuum constants",
      question: "Use \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{H\\,m^{-1}}\\) and \\(\\epsilon_0=8.854\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\) to calculate the vacuum wave speed.",
      answer: "Use equation \\([5]\\) and retain the product before taking its square root: \\[\\mu_0\\epsilon_0=(4\\pi\\times10^{-7})(8.854\\times10^{-12})=1.1127\\times10^{-17}\\,\\mathrm{s^2\\,m^{-2}}.\\] Therefore \\[c=(1.1127\\times10^{-17}\\,\\mathrm{s^2\\,m^{-2}})^{-1/2}=2.998\\times10^8\\,\\mathrm{m\\,s^{-1}}.\\] **Final result:** \\(c=3.00\\times10^8\\,\\mathrm{m\\,s^{-1}}\\) to three significant figures, which has the dimensions of speed.",
    },
    {
      title: "Why a longitudinal vacuum electric wave fails",
      question: "A proposed plane wave has \\(\\vec k=k\\hat{\\vec z}\\) and \\(\\widetilde{\\vec E}_0=E_0\\hat{\\vec z}\\). Can it propagate in source-free vacuum?",
      answer: "Electric Gauss law requires \\(\\nabla\\cdot\\vec E=0\\). For the stated harmonic wave, the complex divergence is \\(i\\vec k\\cdot\\widetilde{\\vec E}_0=ikE_0\\), which is nonzero unless \\(E_0=0\\). A nonzero vacuum plane wave must instead satisfy \\(\\vec k\\cdot\\widetilde{\\vec E}_0=0\\). **Final result:** the proposed nonzero longitudinal field cannot be a source-free vacuum electromagnetic wave; the electric field must be transverse.",
    },
  ]}
/>
`;
