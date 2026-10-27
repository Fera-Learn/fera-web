export const content = String.raw`## Principle

A Gaussian transverse field transforms into another Gaussian. If \\(w_0\\) is the waist field radius, also the \\(1/e^2\\) intensity radius, diffraction produces the far-field half-angle \\(\lambda/(\pi w_0)\\) and the Rayleigh range \\(\pi w_0^2/\lambda\\).

## Notation

<Notation
  items={[
    { symbol: "x',y',\\rho'", meaning: "waist-plane coordinates and radius", unit: "m, m, m" },
    { symbol: "x,y,\\rho,z", meaning: "observation-plane coordinates, radius, and propagation distance", unit: "m, m, m, m" },
    { symbol: "U_0,U_A,\\widetilde U_A", meaning: "on-axis amplitude, Gaussian waist field, and its unnormalised transform" },
    { symbol: "w_0", meaning: "waist field radius and 1/e^2 intensity radius", unit: "m" },
    { symbol: "w(z)", meaning: "Gaussian 1/e^2 intensity radius at z", unit: "m" },
    { symbol: "u,v", meaning: "cyclic spatial frequencies", unit: "m^{-1}, m^{-1}" },
    { symbol: "\\lambda,k", meaning: "wavelength and wavenumber k=2\\pi/\\lambda", unit: "m, m^{-1}" },
    { symbol: "\\theta_0", meaning: "far-field 1/e^2 intensity half-angle", unit: "rad" },
    { symbol: "z_R", meaning: "Rayleigh range", unit: "m" },
    { symbol: "I", meaning: "Gaussian intensity", unit: "W m^{-2}" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

A Gaussian does not terminate at a sharp aperture edge. Its waist expands smoothly, and the far-field cone angle is set by the inverse waist size.

<PhysicsDiagram slug="gaussian-far-field-spread" />

At the waist, define the field and corresponding intensity by

\\[
U_A(x',y')=U_0e^{-(x'^2+y'^2)/w_0^2},
\qquad
I(\rho',0)=I(0,0)e^{-2\rho'^2/w_0^2}.
\tag*{[1]}
\\]

For one coordinate, complete the square in the transform integral:

\\[
\int_{-\infty}^{\infty}e^{-x'^2/w_0^2}e^{-i2\pi ux'}dx'
=e^{-\pi^2w_0^2u^2}
\int_{-\infty}^{\infty}e^{-(x'/w_0+i\pi w_0u)^2}dx'.
\tag*{[2]}
\\]

The shifted Gaussian integral equals \\(\sqrt{\pi}w_0\\), so separability gives

\\[
\widetilde U_A(u,v)=\pi w_0^2U_0
e^{-\pi^2w_0^2(u^2+v^2)}.
\tag*{[3]}
\\]

With \\(u=x/(\lambda z)\\), \\(v=y/(\lambda z)\\), define the far-field radius so that the field remains \\(e^{-\rho^2/w^2}\\):

\\[
w(z)\approx\frac{\lambda z}{\pi w_0},
\qquad z\gg z_R.
\tag*{[4]}
\\]

The far-field divergence half-angle is therefore

\\[
\theta_0=\lim_{z\to\infty}\frac{w(z)}{z}
=\frac{\lambda}{\pi w_0}.
\tag*{[5]}
\\]

The crossover occurs when diffraction adds a radius comparable with \\(w_0\\). Setting \\(\theta_0z_R=w_0\\) gives

\\[
z_R=\frac{w_0}{\theta_0}=\frac{\pi w_0^2}{\lambda}.
\tag*{[6]}
\\]

Evaluating the full Fresnel Gaussian integral gives a real intensity exponent whose radius obeys

\\[
\frac{1}{w^2(z)}=\frac{w_0^2}{w_0^4+(2z/k)^2}.
\tag*{[7]}
\\]

Invert equation [7], use \\(2/k=\lambda/\pi\\), and substitute equation [6]:

\\[
w^2(z)=w_0^2+\left(\frac{\lambda z}{\pi w_0}\right)^2
=w_0^2\left[1+\left(\frac{z}{z_R}\right)^2\right].
\tag*{[8]}
\\]

Taking the positive square root gives

\\[
w(z)=w_0\sqrt{1+\left(\frac{z}{z_R}\right)^2}.
\tag*{[9]}
\\]

At \\(z=z_R\\), \\(w=\sqrt2w_0\\), not \\(2w_0\\). A different Gaussian exponent changes the meaning of the quoted radius, so the convention in equation [1] must accompany every divergence or Rayleigh-range formula.

<PhysicsExamples collapsible
  items={[
    {
      title: "Divergence and Rayleigh range",
      question: "A Gaussian beam has wavelength \\(\\lambda=1064\\,\\mathrm{nm}\\) and waist radius \\(w_0=0.50\\,\\mathrm{mm}\\). Find its divergence half-angle \\(\\theta_0\\) and Rayleigh range \\(z_R\\).",
      answer: "Equation \\([5]\\) gives \\[\\theta_0=\\frac{1.064\\times10^{-6}}{\\pi(0.50\\times10^{-3})}=6.77\\times10^{-4}\\,\\mathrm{rad}.\\] Equation \\([6]\\) gives \\[z_R=\\frac{\\pi(0.50\\times10^{-3})^2}{1.064\\times10^{-6}}=0.738\\,\\mathrm m.\\] **Final result:** \\(\\theta_0=0.677\\,\\mathrm{mrad}\\) and \\(z_R=0.738\\,\\mathrm m\\).",
    },
    {
      title: "Beam radius at one Rayleigh range",
      question: "If the waist radius is \\(w_0\\), what are the beam radius \\(w(z_R)\\) and on-axis intensity \\(I(0,z_R)\\) at \\(z=z_R\\) for fixed total power?",
      answer: "Equation \\([9]\\) gives \\(w(z_R)=w_0\\sqrt{1+1}=\\sqrt2w_0\\). For fixed power, Gaussian on-axis intensity is proportional to \\(1/w^2\\), so \\[\\frac{I(0,z_R)}{I(0,0)}=\\frac{w_0^2}{w(z_R)^2}=\\frac12.\\] **Final result:** at one Rayleigh range the radius is \\(\\sqrt2w_0\\) and the on-axis intensity is half its waist value.",
    },
  ]}
/>
`;
