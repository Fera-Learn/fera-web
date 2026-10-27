export const content = String.raw`## Principle

Free-space Fraunhofer diffraction is the far-field limit of Fresnel diffraction. It is valid when the quadratic phase variation across the illuminated aperture is small enough to neglect; being merely far compared with the aperture width is not sufficient when the wavelength is short.

## Notation

<Notation
  items={[
    { symbol: "x',y',\\rho'", meaning: "aperture coordinates and radius", unit: "m, m, m" },
    { symbol: "x,y,z", meaning: "observation coordinates and propagation distance", unit: "m, m, m" },
    { symbol: "\\rho'_{\\max}", meaning: "largest illuminated aperture radius", unit: "m" },
    { symbol: "a", meaning: "full aperture width or diameter, so \\rho'_{\\max}=a/2", unit: "m" },
    { symbol: "U_A,U_F", meaning: "aperture-plane and far-field complex fields" },
    { symbol: "\\lambda,k", meaning: "wavelength and wavenumber k=2\\pi/\\lambda", unit: "m, m^{-1}" },
    { symbol: "\\Delta\\phi_{\\max}", meaning: "maximum neglected quadratic phase", unit: "rad" },
    { symbol: "d_R=a^2/\\lambda", meaning: "Rayleigh distance scale", unit: "m" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The expanded Fresnel field is

\\[
U(x,y;z)=\frac{e^{ikz}e^{ik(x^2+y^2)/(2z)}}{i\lambda z}
\iint U_A(x',y')e^{ik(x'^2+y'^2)/(2z)}
e^{-i2\pi(xx'+yy')/(\lambda z)}dx'\,dy'.
\tag*{[1]}
\\]

Fraunhofer propagation replaces the input-coordinate quadratic factor by one. The largest discarded phase is

\\[
\Delta\phi_{\max}=\frac{k\rho_{\max}'^{\,2}}{2z}
=\frac{\pi\rho_{\max}'^{\,2}}{\lambda z}.
\tag*{[2]}
\\]

Using the practical phase-error requirement \\(\Delta\phi_{\max}\ll\pi/4\\) gives

\\[
\frac{\pi\rho_{\max}'^{\,2}}{\lambda z}\ll\frac{\pi}{4}
\quad\Longrightarrow\quad
z\gg\frac{4\rho_{\max}'^{\,2}}{\lambda}.
\tag*{[3]}
\\]

For a centred circular aperture of diameter \\(a\\), or a one-dimensional opening of full width \\(a\\), \\(\rho'_{\max}=a/2\\). Equation [3] becomes

\\[
z\gg d_R,
\qquad
d_R=\frac{a^2}{\lambda}.
\tag*{[4]}
\\]

Under that condition, equation [1] reduces to

\\[
U_F(x,y;z)=\frac{e^{ikz}e^{ik(x^2+y^2)/(2z)}}{i\lambda z}
\iint U_A(x',y')e^{-i2\pi(xx'+yy')/(\lambda z)}dx'\,dy'.
\tag*{[5]}
\\]

The Rayleigh distance is a scale, not a sharp boundary. At \\(z=d_R\\), the edge phase for \\(\rho'_{\max}=a/2\\) is \\(\pi/4\\), which is not much smaller than \\(\pi/4\\). Accurate Fraunhofer work therefore uses \\(z\\) several times or much greater than \\(d_R\\), according to the permitted phase error. The paraxial requirement \\(|x|,|y|\ll z\\) remains separate.

<PhysicsExamples collapsible
  items={[
    {
      title: "Rayleigh distance of a millimetre aperture",
      question: "A circular aperture has diameter \\(a=1.0\\,\\mathrm{mm}\\) and is illuminated at wavelength \\(\\lambda=500\\,\\mathrm{nm}\\). Calculate the Rayleigh distance \\(d_R\\) and the edge phase at \\(z=10d_R\\).",
      answer: "Equation \\([4]\\) gives \\[d_R=\\frac{(1.0\\times10^{-3}\\,\\mathrm m)^2}{500\\times10^{-9}\\,\\mathrm m}=2.0\\,\\mathrm m.\\] At \\(z=10d_R=20\\,\\mathrm m\\), equation \\([2]\\) with \\(\\rho'_{\\max}=a/2\\) gives \\[\\Delta\\phi_{\\max}=\\frac{\\pi a^2}{4\\lambda z}=\\frac{\\pi d_R}{4z}=\\frac{\\pi}{40}=0.0785\\,\\mathrm{rad}.\\] **Final result:** \\(d_R=2.0\\,\\mathrm m\\), and at \\(20\\,\\mathrm m\\) the neglected edge phase is \\(0.079\\,\\mathrm{rad}\\), small compared with one radian.",
    },
    {
      title: "Effect of doubling aperture width",
      question: "At fixed wavelength \\(\\lambda\\), how does the required far-field distance change if the full aperture width \\(a\\) doubles?",
      answer: "Equation \\([4]\\) gives \\(d_R=a^2/\\lambda\\). Replacing \\(a\\) by \\(2a\\) gives \\[d_R'=\\frac{(2a)^2}{\\lambda}=4d_R.\\] The larger aperture has four times the maximum quadratic path phase at the same distance. **Final result:** doubling the aperture width increases the Rayleigh distance, and hence the far-field distance scale, by a factor of four.",
    },
  ]}
/>
`;
