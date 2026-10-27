export const content = String.raw`## Principle

Young's experiment splits one incident wavefront at two narrow apertures. Each aperture acts approximately as a coherent spherical source, and the small difference between the two propagation distances creates a sinusoidal fringe pattern in the far, paraxial observation region.

## Notation

<Notation
  items={[
    { symbol: "d,D", meaning: "slit-centre separation and individual aperture width", unit: "m, m" },
    { symbol: "x,z,r", meaning: "transverse screen coordinate, axial distance, and midpoint-to-point distance", unit: "m, m, m" },
    { symbol: "r_1,r_2,\\theta", meaning: "slit-to-point distances and observation angle", unit: "m, m, rad" },
    { symbol: "\\mathcal E,B", meaning: "total complex field and common spherical-wave source constant", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "k,\\lambda,\\omega,t", meaning: "wavenumber, wavelength, angular frequency, and time", unit: "m^{-1}, m, rad s^{-1}, s" },
    { symbol: "I,I_s", meaning: "total and one-slit intensities at the observation point", unit: "W m^{-2}" },
    { symbol: "\\Delta,\\delta,\\Lambda,m,u", meaning: "path difference r_2-r_1, relative phase, fringe spacing, integer order, and dimensionless expansion variable", unit: "m, rad, m, 1, 1" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Two points on one incident wavefront become coherent secondary sources. At a distant screen point their path lengths differ slightly, producing a position-dependent phase difference.

<PhysicsDiagram slug="young-two-slit-geometry" />

Place slit 1 at transverse coordinate \\(+d/2\\) and slit 2 at \\(-d/2\\), with \\(D\ll d\\), and observe at \\((x,z)\\). Equal illumination gives

\\[
\mathcal E=\frac{B}{ikr_1}e^{i(kr_1-\omega t)}
+\frac{B}{ikr_2}e^{i(kr_2-\omega t)}.
\tag*{[1]}
\\]

Let \\(r=\sqrt{x^2+z^2}\\) and \\(x=r\sin\theta\\). The two distances satisfy

\\[
r_{1,2}^2=r^2+\frac{d^2}{4}\mp rd\sin\theta.
\tag*{[2]}
\\]

For \\(d/r\ll1\\), write equation [2] as \\(r_{1,2}=r\sqrt{1+u}\\), where \\(u=d^2/(4r^2)\mp(d/r)\sin\theta\\). Use \\(\sqrt{1+u}\simeq1+u/2-u^2/8\\), retain terms through order \\(d^2/r^2\\), and discard higher powers:

\\[
\begin{aligned}
r_{1,2}
&\simeq r\left[1+\frac12\left(\frac{d^2}{4r^2}\mp\frac{d}{r}\sin\theta\right)
-\frac18\left(\frac{d^2}{r^2}\sin^2\theta\right)\right] \\
&=r\mp\frac{d}{2}\sin\theta
+\frac{d^2}{8r}(1-\sin^2\theta) \\
&=r\mp\frac{d}{2}\sin\theta
+\frac{d^2}{8r}\cos^2\theta.
\end{aligned}
\tag*{[3]}
\\]

Subtracting equation [3] cancels the common quadratic phase:

\\[
\boxed{\Delta=r_2-r_1\simeq d\sin\theta}.
\tag*{[4]}
\\]

With equal source phases and relative phase defined as wave 1 minus wave 2, \\(\delta=k(r_1-r_2)=-k\Delta\simeq-kd\sin\theta\\). This is exactly the negative aperture-position convention: slit 1 at \\(+d/2\\) contributes propagation phase \\(-kd\sin\theta/2\\), while slit 2 at \\(-d/2\\) contributes \\(+kd\sin\theta/2\\). Using the positive path difference \\(\Delta=r_2-r_1\\) reverses the phase sign, but it does not reverse the symmetric intensity because \\(\cos(-\delta)=\cos\delta\\).

Amplitude varies slowly, so set \\(r_1\simeq r_2\simeq r\\) in the denominators but retain equation [4] in the phases. Factoring the mean phase gives

\\[
\mathcal E\simeq\frac{2B}{ikr}e^{i[k(r+d^2\cos^2\theta/(8r))-\omega t]}
\cos\left(\frac{kd\sin\theta}{2}\right).
\tag*{[5]}
\\]

The common exponential disappears from the intensity. Therefore

\\[
\boxed{I=4I_s\cos^2\left(\frac{kd\sin\theta}{2}\right)}.
\tag*{[6]}
\\]

In the paraxial regime, \\(\sin\theta\simeq x/z\\). Bright fringes occur when \\(kd x/z=2\pi m\\), so

\\[
x_m=\frac{m\lambda z}{d},
\qquad
\boxed{\Lambda=x_{m+1}-x_m=\frac{\lambda z}{d}}.
\tag*{[7]}
\\]

Equations [6] and [7] treat each aperture as narrow. A finite width \\(D\\) adds a single-aperture diffraction envelope; it does not change the two-aperture interference spacing.

<PhysicsExamples collapsible
  items={[
    {
      title: "Young fringe spacing",
      question: "Light of wavelength \\(\\lambda=600\\,\\mathrm{nm}\\) illuminates two narrow slits separated by \\(d=0.250\\,\\mathrm{mm}\\). A screen is \\(z=2.00\\,\\mathrm m\\) away. Find the fringe spacing and the position of order \\(m=3\\).",
      answer: "Equation \\([7]\\) gives \\[\\Lambda=\\frac{(600\\times10^{-9})(2.00)}{0.250\\times10^{-3}}=4.80\\times10^{-3}\\,\\mathrm m.\\] The third bright fringe is \\[x_3=3\\Lambda=1.44\\times10^{-2}\\,\\mathrm m.\\] Both values are transverse distances measured from the central bright fringe. **Final result:** \\(\\Lambda=4.80\\,\\mathrm{mm}\\) and \\(x_3=14.4\\,\\mathrm{mm}\\).",
    },
    {
      title: "Changing the screen distance",
      question: "The wavelength and slit separation are fixed while the screen distance is doubled. What changes in the ideal narrow-slit pattern?",
      answer: "Equation \\([7]\\) shows \\(\\Lambda\\propto z\\), so replacing \\(z\\) by \\(2z\\) gives \\(\\Lambda'=2\\Lambda\\). For spherical propagation, each one-slit intensity also scales approximately as \\(1/z^2\\), so the absolute pattern becomes dimmer even though its ideal normalized contrast remains the same. **Final result:** doubling the screen distance doubles the fringe spacing and reduces the far-field intensity scale to approximately one quarter.",
    },
  ]}
/>
`;
