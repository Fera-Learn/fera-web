export const content = String.raw`## Principle

Two point sources produce spherical waves whose amplitudes decay with distance and whose propagation directions vary across space. Their phase difference is set by the difference of the two source-to-observer distances, so the fringe geometry is curved rather than the uniform plane geometry of two plane waves.

## Notation

<Notation
  items={[
    { symbol: "\\vec d_1,\\vec d_2,\\vec r", meaning: "source positions and observation-point position", unit: "m, m, m" },
    { symbol: "r_1,r_2,r", meaning: "source-to-point distances and distance from the source midpoint", unit: "m, m, m" },
    { symbol: "\\mathcal E_1,\\mathcal E_2,\\mathcal E", meaning: "component and total complex scalar fields", unit: "V m^{-1}" },
    { symbol: "B_1,B_2", meaning: "spherical-wave source amplitude constants", unit: "V m^{-1}" },
    { symbol: "k,\\lambda,\\omega,t", meaning: "wavenumber, wavelength, angular frequency, and time", unit: "m^{-1}, m, rad s^{-1}, s" },
    { symbol: "\\phi_1,\\phi_2,\\Delta\\phi,\\delta", meaning: "source phases, source-phase difference phi_1-phi_2, and total relative phase", unit: "rad" },
    { symbol: "\\vec k_1,\\vec k_2,\\Delta\\vec k", meaning: "local wavevectors and their difference k_1-k_2", unit: "m^{-1}" },
    { symbol: "I,I_1,I_2,I_s", meaning: "total, component, and equal-distance one-wave intensities", unit: "W m^{-2}" },
    { symbol: "d,\\theta,m,j", meaning: "source separation, signed observation angle, integer order, and source index", unit: "m, rad, 1, 1" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Each source-to-observer line has its own length. Their difference, not either absolute distance by itself, controls the relative phase at the observation point.

<PhysicsDiagram slug="two-spherical-wave-interference" />

Let \\(r_j=|\vec r-\vec d_j|\\). With the convention \\(e^{i(kr-\omega t+\phi)}\\), outgoing spherical waves are

\\[
\mathcal E_j=\frac{B_j}{ikr_j}e^{i(kr_j-\omega t+\phi_j)},
\qquad j=1,2.
\tag*{[1]}
\\]

Their relative phase is therefore

\\[
\boxed{\delta=k(r_1-r_2)+\Delta\phi},
\qquad
\Delta\phi=\phi_1-\phi_2.
\tag*{[2]}
\\]

Writing the separate intensities as \\(I_j\\), expansion of \\(|\mathcal E_1+\mathcal E_2|^2\\) gives the exact two-wave result

\\[
I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta,
\qquad
I_j\mathrel{\propto}\frac{|B_j|^2}{k^2r_j^2}.
\tag*{[3]}
\\]

If the observation distance is much greater than the source separation, use \\(r_1\simeq r_2\simeq r\\) only in the slowly varying amplitude factors. For equal source strengths, \\(I_1\simeq I_2\simeq I_s\\), while the small path difference must remain in the phase:

\\[
\boxed{I\simeq4I_s\cos^2\left[\frac{k(r_1-r_2)+\Delta\phi}{2}\right]}.
\tag*{[4]}
\\]

The local wavevectors point radially away from their own sources,

\\[
\vec k_j=k\frac{\vec r-\vec d_j}{r_j},
\qquad
\nabla\delta=\vec k_1-\vec k_2=\Delta\vec k.
\tag*{[5]}
\\]

Thus \\(\Delta\vec k\\) is perpendicular to a fringe locally, but unlike the plane-wave case it changes with observation position. For \\(\Delta\phi=0\\), bright fringes obey

\\[
r_1-r_2=m\lambda,
\tag*{[6]}
\\]

which describes constant-difference surfaces with the two sources as foci. Put source 1 at transverse coordinate \\(-d/2\\), source 2 at \\(+d/2\\), and take positive \\(\theta\\) toward source 2. In that signed far-field geometry,

\\[
r_1-r_2\simeq d\sin\theta,
\qquad
\delta\simeq kd\sin\theta+\Delta\phi.
\tag*{[7]}
\\]

Replacing both \\(r_1\\) and \\(r_2\\) by \\(r\\) inside the phase would incorrectly erase the interference pattern.

<PhysicsExamples collapsible
  items={[
    {
      title: "A far-field bright direction",
      question: "Two in-phase point sources are separated by \\(d=0.300\\,\\mathrm{mm}\\) and emit wavelength \\(\\lambda=600\\,\\mathrm{nm}\\). Find the small positive angle of the first-order bright fringe.",
      answer: "For in-phase sources, equations \\([6]\\) and \\([7]\\) give \\(d\\sin\\theta=m\\lambda\\). Taking \\(m=1\\), \\[\\sin\\theta=\\frac{600\\times10^{-9}}{0.300\\times10^{-3}}=2.00\\times10^{-3}.\\] The angle is small, so \\(\\theta\\simeq\\sin\\theta=2.00\\times10^{-3}\\,\\mathrm{rad}\\). **Final result:** the first-order bright direction is \\(\\theta=2.00\\,\\mathrm{mrad}\\).",
    },
    {
      title: "Why distant fringes fade in absolute brightness",
      question: "An observation point is moved from distance \\(r\\) to \\(2r\\) while remaining on a bright far-field fringe of two equal spherical sources. How does its peak intensity change?",
      answer: "Each spherical field amplitude is proportional to \\(1/r\\), so each one-wave intensity is proportional to \\(1/r^2\\). Equation \\([4]\\) has the same factor in \\(I_s\\); staying on a bright fringe keeps the cosine-squared factor equal to one. Therefore \\[\\frac{I_{\\mathrm{bright}}(2r)}{I_{\\mathrm{bright}}(r)}=\\frac{1/(2r)^2}{1/r^2}=\\frac14.\\] The relative fringe modulation remains ideal even though the entire pattern becomes dimmer. **Final result:** doubling the range reduces the bright-fringe intensity to one quarter.",
    },
  ]}
/>
`;
