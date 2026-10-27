export const content = String.raw`## Principle

Rotate a polarising filter in front of a screen and the transmitted brightness changes because the electric field has a direction.

Polarisation is the path traced by the electric-field vector in the plane perpendicular to propagation. Maxwell's equations require a vacuum plane wave to have mutually perpendicular electric field, magnetic field, and wavevector with a fixed right-handed orientation.

## Notation

<Notation
  items={[
    { symbol: "\\vec E,\\vec B", meaning: "physical electric and magnetic fields", unit: "V m^{-1}, T" },
    { symbol: "\\vec E_0,E_0", meaning: "complex electric-field amplitude and its magnitude", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "\\vec B_0,B_0", meaning: "complex magnetic-field amplitude and its magnitude", unit: "T, T" },
    { symbol: "\\vec k,k,\\hat k", meaning: "wavevector, its magnitude, and propagation unit vector", unit: "m^{-1}, m^{-1}, 1" },
    { symbol: "\\vec r,t", meaning: "position and time", unit: "m, s" },
    { symbol: "\\omega,c", meaning: "angular frequency and vacuum wave speed", unit: "rad s^{-1}, m s^{-1}" },
    { symbol: "\\epsilon_0,\\mu_0", meaning: "permittivity and permeability of free space", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "\\hat e_1,\\hat e_2", meaning: "orthogonal unit vectors transverse to propagation", unit: "1" },
    { symbol: "\\hat x,\\hat y,\\hat z", meaning: "right-handed Cartesian unit vectors", unit: "1" },
    { symbol: "E_1,E_2", meaning: "nonnegative electric-field component amplitudes", unit: "V m^{-1}" },
    { symbol: "\\phi", meaning: "phase of the second component relative to the first", unit: "rad" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Adopt the harmonic convention

\\[
\vec E=\operatorname{Re}\!\left\{\vec E_0e^{i(\vec k\cdot\vec r-\omega t)}\right\},\qquad
\vec B=\operatorname{Re}\!\left\{\vec B_0e^{i(\vec k\cdot\vec r-\omega t)}\right\}.
\tag*{[1]}
\\]

The measured fields are the real parts. For this convention, a spatial derivative supplies \\(i\vec k\\), while a time derivative supplies \\(-i\omega\\). Faraday's law therefore becomes

\\[
i\vec k\times\vec E_0=i\omega\vec B_0
\quad\Longrightarrow\quad
\vec k\times\vec E_0=\omega\vec B_0.
\tag*{[2]}
\\]

The Ampere-Maxwell law in vacuum similarly gives, using \\(\mu_0\epsilon_0=c^{-2}\\),

\\[
i\vec k\times\vec B_0=-i\mu_0\epsilon_0\omega\vec E_0
\quad\Longrightarrow\quad
\vec k\times\vec B_0=-\frac{\omega}{c^2}\vec E_0.
\tag*{[3]}
\\]

The source-free divergence equations supply the transverse conditions.

\\[
i\vec k\cdot\vec E_0=0\Longrightarrow\vec k\cdot\vec E_0=0,
\qquad
i\vec k\cdot\vec B_0=0\Longrightarrow\vec k\cdot\vec B_0=0.
\tag*{[4]}
\\]

Using \\(\omega=ck\\) in [2] fixes both the magnitude and orientation of the magnetic field.

\\[
\vec B_0=\frac{1}{c}\hat k\times\vec E_0,
\qquad |\vec E_0|=c|\vec B_0|.
\tag*{[5]}
\\]

<PhysicsDiagram slug="transverse-electromagnetic-wave-vectors" />

The main view allows an arbitrary propagation direction \\(\vec k\\), while the inset chooses an x-axis wave for a simpler view. In both, \\(\vec E\\) and \\(\vec B\\) are transverse to the propagation axis and to each other.

Thus \\(\vec E\times\vec B\\) points along \\(+\hat k\\). Reversing either field alone would describe propagation in the opposite direction, so the cross-product order is essential.

Choose \\(\hat e_1\times\hat e_2=\hat k\\). Any fully polarised field can be resolved into two transverse components:

\\[
\vec E_0=E_1\hat e_1+E_2e^{i\phi}\hat e_2.
\tag*{[6]}
\\]

If \\(\phi=0\\) or \\(\pi\\), the components rise and fall together or oppositely and the endpoint of \\(\vec E\\) follows a line. If \\(E_1=E_2\\) and \\(\phi=+\pi/2\\), equation [1] makes the field at a fixed position rotate from \\(+\hat e_1\\) toward \\(+\hat e_2\\) as time increases; \\(\phi=-\pi/2\\) reverses that rotation. Unequal amplitudes or another fixed relative phase generally produce an ellipse. Labels such as left- and right-circular depend on viewing and time conventions, so the stated rotation is less ambiguous than a label alone.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Constructing the magnetic field from the electric field",
      question: "A vacuum plane wave travels along \\(+z\\) and has electric-field amplitude \\(E_0=120\\,\\mathrm{V\\,m^{-1}}\\) along \\(+x\\). Find the magnetic-field amplitude and direction.",
      answer: "Use equation [5] with \\(\\hat k=\\hat z\\) and \\(\\vec E_0=E_0\\hat x\\). The right-hand cross product gives \\(\\hat z\\times\\hat x=\\hat y\\), so \\[\\vec B_0=\\frac{E_0}{c}\\hat y.\\] Substitute the vacuum speed: \\[B_0=\\frac{120\\,\\mathrm{V\\,m^{-1}}}{3.00\\times10^8\\,\\mathrm{m\\,s^{-1}}}=4.00\\times10^{-7}\\,\\mathrm T.\\] **Final result:** \\(\\vec B_0=(4.00\\times10^{-7}\\,\\mathrm T)\\hat y\\). As a check, \\(\\vec E_0\\times\\vec B_0=\\hat x\\times\\hat y\\) points along \\(+z\\), the stated propagation direction.",
    },
    {
      title: "Classifying a polarisation state",
      question: "Using the harmonic convention in equation [1], classify \\(\\vec E_0=E_1\\hat e_1+iE_1\\hat e_2\\) and state the rotation seen at a fixed position as time increases.",
      answer: "Comparison with equation [6] gives equal component amplitudes and relative phase \\(\\phi=+\\pi/2\\). The physical field at a fixed position is proportional to \\(\\hat e_1\\cos(\\omega t)+\\hat e_2\\sin(\\omega t)\\), so its magnitude stays constant while its direction rotates from \\(+\\hat e_1\\) toward \\(+\\hat e_2\\). **Final result:** the wave is circularly polarised. A handedness name should only be added after specifying the viewing direction because changing that convention reverses the name.",
    },
  ]}
/>
`;
