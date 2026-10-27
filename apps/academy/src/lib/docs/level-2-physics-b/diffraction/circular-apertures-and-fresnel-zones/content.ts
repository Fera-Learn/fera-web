export const content = String.raw`## Principle

For an on-axis point behind a circular aperture, rings of equal area contribute comparable amplitudes but successive rings differ in phase by approximately \\(\pi\\). These Fresnel half-period zones explain the alternating bright and dark on-axis response as the aperture radius changes.

## Notation

<Notation
  items={[
    { symbol: "\\rho',\\phi'", meaning: "polar radius and angle in the aperture plane", unit: "m, rad" },
    { symbol: "x,y", meaning: "observation-plane coordinates set to zero on axis", unit: "m, m" },
    { symbol: "R", meaning: "circular-aperture radius", unit: "m" },
    { symbol: "z", meaning: "axial propagation distance", unit: "m" },
    { symbol: "U_0,U(0,0;z)", meaning: "uniform incident field and on-axis propagated field" },
    { symbol: "I_0,I", meaning: "incident and on-axis intensities", unit: "W m^{-2}, W m^{-2}" },
    { symbol: "\\lambda,k", meaning: "wavelength and wavenumber k=2\\pi/\\lambda", unit: "m, m^{-1}" },
    { symbol: "\\rho_m", meaning: "outer radius of Fresnel zone m", unit: "m" },
    { symbol: "m", meaning: "positive integer zone number" },
    { symbol: "q", meaning: "dimensionless complex integration variable" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

For an on-axis observer, equal increments of path length carve the circular aperture into concentric rings. Adjacent rings arrive approximately half a cycle apart.

<PhysicsDiagram slug="fresnel-zone-rings" />

For a uniformly illuminated circular opening, set \\(x=y=0\\) in the Fresnel integral and use \\(dx'\,dy'=\rho' d\rho' d\phi'\\):

\\[
U(0,0;z)=\frac{U_0e^{ikz}}{i\lambda z}
\int_0^{2\pi}\!d\phi'\int_0^R
e^{ik\rho'^2/(2z)}\rho'\,d\rho'.
\tag*{[1]}
\\]

The angular integral is \\(2\pi\\). With \\(q=ik\rho'^2/(2z)\\), the differential is \\(dq=(ik/z)\rho'd\rho'\\), so

\\[
U=\frac{2\pi U_0e^{ikz}}{i\lambda z}\frac{z}{ik}
\int_0^{ikR^2/(2z)}e^q\,dq.
\tag*{[2]}
\\]

Since \\(k=2\pi/\lambda\\), evaluating the exponential and factoring the phase gives

\\[
U=-U_0e^{ikz}\left(e^{ikR^2/(2z)}-1\right)
=-2iU_0e^{ikz}e^{ikR^2/(4z)}
\sin\!\left(\frac{kR^2}{4z}\right).
\tag*{[3]}
\\]

Taking the modulus squared removes the overall phases:

\\[
\frac{I}{I_0}=4\sin^2\!\left(\frac{kR^2}{4z}\right)
=4\sin^2\!\left(\frac{\pi R^2}{2\lambda z}\right).
\tag*{[4]}
\\]

Zone boundaries are defined by a \\(\pi\\) phase increase from one boundary to the next:

\\[
\frac{k\rho_m^2}{2z}=m\pi
\quad\Longrightarrow\quad
\rho_m=\sqrt{m\lambda z}.
\tag*{[5]}
\\]

The area of zone \\(m\\) is therefore

\\[
\pi(\rho_m^2-\rho_{m-1}^2)
=\pi\lambda z,
\tag*{[6]}
\\]

which is independent of \\(m\\) in this paraxial construction. Adjacent zones arrive approximately in antiphase. Opening an odd number of complete zones gives an on-axis maximum in [4], whereas opening an even number gives a minimum. The result is local to the on-axis point; moving the observation point shifts the zone geometry.

<PhysicsExamples collapsible
  items={[
    {
      title: "Radius of the third Fresnel zone",
      question: "For wavelength \\(\\lambda=500\\,\\mathrm{nm}\\) and propagation distance \\(z=2.0\\,\\mathrm{m}\\), calculate the first and third Fresnel-zone radii, \\(\\rho_1\\) and \\(\\rho_3\\), and identify whether an aperture ending at the third boundary is bright or dark on axis.",
      answer: "Equation \\([5]\\) gives \\[\\rho_1=\\sqrt{(500\\times10^{-9})(2.0)}=1.00\\times10^{-3}\\,\\mathrm m.\\] For \\(m=3\\), \\[\\rho_3=\\sqrt{3(500\\times10^{-9})(2.0)}=1.73\\times10^{-3}\\,\\mathrm m.\\] Three complete zones are open, and equation \\([4]\\) has argument \\(3\\pi/2\\), so its sine squared is one. **Final result:** \\(\\rho_1=1.00\\,\\mathrm{mm}\\), \\(\\rho_3=1.73\\,\\mathrm{mm}\\), and the third-zone boundary gives an on-axis maximum with \\(I/I_0=4\\).",
    },
    {
      title: "Adding one more complete zone",
      question: "An aperture ending at \\(\\rho_1\\) is enlarged to \\(\\rho_2\\). Explain the change in on-axis intensity.",
      answer: "At \\(R=\\rho_1\\), equation \\([4]\\) has argument \\(\\pi/2\\), so \\(I/I_0=4\\). At \\(R=\\rho_2\\), the argument is \\(\\pi\\), so \\(I/I_0=0\\). Equation \\([6]\\) shows that the second zone has the same paraxial area as the first, while equation \\([5]\\) gives it the opposite mean phase. **Final result:** opening the second complete zone changes the ideal on-axis response from a maximum \\(4I_0\\) to a minimum \\(0\\) by destructive interference.",
    },
  ]}
/>
`;
