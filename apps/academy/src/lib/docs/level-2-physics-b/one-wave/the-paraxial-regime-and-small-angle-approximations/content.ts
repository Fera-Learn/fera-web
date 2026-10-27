export const content = String.raw`## Principle

Paraxial optics describes waves travelling at small angles to a chosen optical axis. Small transverse wavevector components then permit controlled Taylor expansions while the longitudinal phase remains fully oscillatory.

## Notation

<Notation
  items={[
    { symbol: "z,x,y", meaning: "axial and transverse coordinates", unit: "m, m, m" },
    { symbol: "\\vec k=(k_x,k_y,k_z),k", meaning: "wavevector and its magnitude", unit: "m^{-1}, m^{-1}" },
    { symbol: "k_\\perp", meaning: "transverse wavenumber, (k_x^2+k_y^2)^{1/2}", unit: "m^{-1}" },
    { symbol: "\\theta", meaning: "angle between the local wavevector and positive optical axis", unit: "rad" },
    { symbol: "\\epsilon,i", meaning: "dimensionless transverse expansion parameter and imaginary unit" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "\\omega,t", meaning: "angular frequency and time", unit: "rad s^{-1}, s" },
  ]}
/>

## The Core Method

The lower construction isolates the paraxial idea: the ray or local wavevector stays close to the optical axis, so its transverse displacement changes much more slowly than its axial position.

<PhysicsDiagram slug="wavefronts-and-paraxial-geometry" />

Choose \\(+z\\) as the optical axis. The paraxial regime requires small propagation angles and distances from the axis small compared with the axial distance:

\\[
|\theta|\ll1,
\qquad
|x|\ll z,
\qquad
|y|\ll z.
\tag*{[1]}
\\]

Taylor expansion about \\(\theta=0\\) gives

\\[
\sin\theta=\theta-\frac{\theta^3}{6}+\cdots\simeq\theta,
\qquad
\cos\theta=1-\frac{\theta^2}{2}+\frac{\theta^4}{24}+\cdots
\simeq1-\frac{\theta^2}{2}.
\tag*{[2]}
\\]

Since \\(k_x/k\\) and \\(k_y/k\\) are small, define \\(k_\perp^2=k_x^2+k_y^2\\). The exact dispersion geometry gives

\\[
k_z=\sqrt{k^2-k_\perp^2}
=k\sqrt{1-\frac{k_\perp^2}{k^2}}.
\tag*{[3]}
\\]

Using \\((1-\epsilon)^{1/2}=1-\epsilon/2-\epsilon^2/8+\cdots\\) with \\(\epsilon=k_\perp^2/k^2\ll1\\), retain the first correction:

\\[
\begin{aligned}
k_z
&\simeq k\left(1-\frac12\frac{k_\perp^2}{k^2}\right)\\
&=k-\frac{k_x^2+k_y^2}{2k}.
\end{aligned}
\tag*{[4]}
\\]

For a plane-wave factor in the convention \\(e^{i(k_xx+k_yy+k_zz)}e^{-i\omega t}\\), equation [4] separates rapid axial phase from slow transverse evolution:

\\[
e^{ik_zz}
\simeq e^{ikz}
\exp\left[-i\frac{k_x^2+k_y^2}{2k}z\right].
\tag*{[5]}
\\]

Paraxial is a small-angle assumption, not automatically a far-field assumption. Retaining quadratic transverse phase produces Fresnel propagation; discarding additional input-coordinate quadratic phase requires a stronger Fraunhofer condition.

<PhysicsExamples collapsible
  items={[
    {
      title: "Approximating the axial wavenumber",
      question: "A wave has \\(k=1.00\\times10^7\\,\\mathrm{m^{-1}}\\), \\(k_x=6.00\\times10^5\\,\\mathrm{m^{-1}}\\), and \\(k_y=8.00\\times10^5\\,\\mathrm{m^{-1}}\\). Find the paraxial value of \\(k_z\\).",
      answer: "First \\(k_\\perp^2=k_x^2+k_y^2=(6.00^2+8.00^2)\\times10^{10}=1.00\\times10^{12}\\,\\mathrm{m^{-2}}\\). The expansion parameter is \\(k_\\perp^2/k^2=0.0100\\), which is small. Equation \\([4]\\) gives \\[k_z\\simeq1.00\\times10^7-\\frac{1.00\\times10^{12}}{2.00\\times10^7}=9.95\\times10^6\\,\\mathrm{m^{-1}}.\\] **Final result:** \\(k_z\\simeq9.95\\times10^6\\,\\mathrm{m^{-1}}\\).",
    },
    {
      title: "Accuracy of the cosine approximation",
      question: "At \\(\\theta=0.10\\,\\mathrm{rad}\\), compare \\(\\cos\\theta\\) with \\(1-\\theta^2/2\\).",
      answer: "The exact value is \\(\\cos(0.10)=0.99500417\\). The quadratic approximation is \\(1-(0.10)^2/2=0.99500000\\). Their absolute difference is \\(4.17\\times10^{-6}\\), consistent with the first omitted term \\(\\theta^4/24=4.17\\times10^{-6}\\). **Final result:** the approximation gives \\(0.995000\\) with absolute error about \\(4.2\\times10^{-6}\\).",
    },
  ]}
/>
`;
