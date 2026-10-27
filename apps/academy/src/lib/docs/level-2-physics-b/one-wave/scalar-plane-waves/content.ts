export const content = String.raw`## Principle

A scalar plane wave has constant complex amplitude and planar wavefronts. Its wavevector is uniform, normal to every wavefront, and aligned with its propagation direction.

## Notation

<Notation
  items={[
    { symbol: "U(\\vec r,t),\\widetilde U", meaning: "real scalar field and complex representative", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "U_0,\\phi_0", meaning: "constant peak amplitude and phase offset", unit: "V m^{-1}, rad" },
    { symbol: "\\vec r=(x,y,z),\\hat{\\vec x},\\hat{\\vec z}", meaning: "position vector and coordinate unit vectors", unit: "m, 1, 1" },
    { symbol: "\\vec k=(k_x,k_y,k_z),k", meaning: "wavevector and wavenumber magnitude", unit: "m^{-1}, m^{-1}" },
    { symbol: "\\omega,t,c", meaning: "angular frequency, time, and vacuum speed", unit: "rad s^{-1}, s, m s^{-1}" },
    { symbol: "\\theta,\\lambda", meaning: "propagation angle from the positive z-axis and wavelength", unit: "rad, m" },
    { symbol: "i,\\operatorname{Re}", meaning: "imaginary unit and real-part operation" },
  ]}
/>

## The Core Method

With the fixed harmonic convention, a scalar plane wave is

\\[
\widetilde U(\vec r,t)
=U_0e^{i(\vec k\cdot\vec r+\phi_0)}e^{-i\omega t},
\qquad
U(\vec r,t)=\operatorname{Re}\{\widetilde U(\vec r,t)\}.
\tag*{[1]}
\\]

In Cartesian coordinates, its spatial phase is

\\[
\vec k\cdot\vec r=k_xx+k_yy+k_zz.
\tag*{[2]}
\\]

The surfaces \\(\vec k\cdot\vec r=\text{constant}\\) are parallel planes. Since \\(\nabla(\vec k\cdot\vec r)=\vec k\\), their normal is \\(\vec k\\).

Apply the wave operator to [1]:

\\[
\nabla^2\widetilde U=-k^2\widetilde U,
\qquad
\frac{\partial^2\widetilde U}{\partial t^2}=-\omega^2\widetilde U.
\tag*{[3]}
\\]

Substitution into the scalar wave equation gives the vacuum dispersion relation

\\[
-k^2\widetilde U+\frac{\omega^2}{c^2}\widetilde U=0
\quad\Longrightarrow\quad
\omega=ck.
\tag*{[4]}
\\]

For propagation in the \\(xz\\)-plane at angle \\(\theta\\) from \\(+z\\),

\\[
\vec k=k(\sin\theta\,\hat{\vec x}+\cos\theta\,\hat{\vec z}),
\qquad
\widetilde U=U_0e^{ik(x\sin\theta+z\cos\theta)}e^{-i\omega t+i\phi_0}.
\tag*{[5]}
\\]

An ideal plane wave extends infinitely and therefore has infinite total energy. It is a local model for a beam whose amplitude and wavefront curvature change negligibly over the region being studied.

<PhysicsExamples collapsible
  items={[
    {
      title: "Writing an oblique plane wave",
      question: "A scalar plane wave of wavelength \\(1.0\\,\\mathrm{\\mu m}\\) travels in the \\(xz\\)-plane at \\(30^\\circ\\) from \\(+z\\). Find \\(k_x\\) and \\(k_z\\), and write its spatial complex factor.",
      answer: "First \\(k=2\\pi/\\lambda=2\\pi/(1.0\\times10^{-6})=6.283\\times10^6\\,\\mathrm{m^{-1}}\\). Equation \\([5]\\) gives \\(k_x=k\\sin30^\\circ=3.142\\times10^6\\,\\mathrm{m^{-1}}\\) and \\(k_z=k\\cos30^\\circ=5.441\\times10^6\\,\\mathrm{m^{-1}}\\). **Final result:** the spatial factor is \\(e^{i(3.142\\times10^6x+5.441\\times10^6z)}\\), with coordinates in metres.",
    },
    {
      title: "Uniform phase across a transverse plane",
      question: "For a plane wave propagating exactly along \\(+z\\), how does phase vary across the plane \\(z=z_0\\) at fixed time?",
      answer: "Set \\(k_x=k_y=0\\) in equation \\([2]\\). The phase is then \\(kz_0-\\omega t+\\phi_0\\), which contains neither \\(x\\) nor \\(y\\). Every point in that transverse plane has the same phase. **Final result:** the phase is uniform across \\(z=z_0\\), so that plane is a wavefront.",
    },
  ]}
/>
`;
