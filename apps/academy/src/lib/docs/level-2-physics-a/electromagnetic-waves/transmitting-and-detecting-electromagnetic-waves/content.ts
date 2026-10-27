export const content = String.raw`## Principle

An alternating signal in one antenna can produce a measurable voltage in another antenna across the room.

An alternating current drives accelerating charge and launches changing electric and magnetic fields. A receiving antenna reverses that connection: the incoming electric field drives charge along a conductor, or the incoming magnetic field changes flux through a loop and induces a voltage.

## Notation

<Notation
  items={[
    { symbol: "\\vec E,\\vec B", meaning: "electric and magnetic fields of the wave", unit: "V m^{-1}, T" },
    { symbol: "\\vec E_0,E_0", meaning: "electric-field amplitude and its magnitude", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "\\vec B_0,B_0,B(t)", meaning: "magnetic-field amplitude, its positive magnitude, and signed scalar field", unit: "T, T, T" },
    { symbol: "\\vec k,\\vec r", meaning: "wavevector and position", unit: "m^{-1}, m" },
    { symbol: "f,\\omega,t", meaning: "frequency, angular frequency, and time", unit: "Hz, rad s^{-1}, s" },
    { symbol: "I,q", meaning: "antenna current and charge", unit: "A, C" },
    { symbol: "\\mathcal V_0,\\mathcal E,\\mathcal E_0", meaning: "electric-antenna voltage amplitude, loop emf, and loop-emf amplitude", unit: "V, V, V" },
    { symbol: "l_{\\mathrm{eff}},\\hat l", meaning: "effective dipole length and its directed unit vector", unit: "m, 1" },
    { symbol: "A,d\\vec A,\\hat n", meaning: "loop area, oriented area element, and chosen loop unit normal", unit: "m^{2}, m^{2}, 1" },
    { symbol: "\\hat b", meaning: "fixed reference unit vector for the magnetic field", unit: "1" },
    { symbol: "\\Phi_B,\\theta", meaning: "magnetic flux and angle from the fixed field direction to the loop normal", unit: "Wb, rad" },
    { symbol: "c", meaning: "vacuum wave speed", unit: "m s^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Use the harmonic convention

\\[
\vec E=\operatorname{Re}\!\left\{\vec E_0e^{i(\vec k\cdot\vec r-\omega t)}\right\},\qquad
\vec B=\operatorname{Re}\!\left\{\vec B_0e^{i(\vec k\cdot\vec r-\omega t)}\right\}.
\tag*{[1]}
\\]

In a transmitting dipole, current is the rate of charge transfer between the two arms.

\\[
I=\frac{dq}{dt}.
\tag*{[2]}
\\]

An alternating current therefore makes the separated charge and its electric field change continuously. Maxwell's curl equations couple that changing electric field to a changing magnetic field, allowing a wave to detach and carry energy away. A steady current does not provide the continuing charge acceleration needed for this radiation mechanism.

For a short receiving dipole, the electric field exerts forces on mobile charges. If the field is nearly uniform over the antenna, the open-circuit voltage amplitude is described using the antenna's effective length.

\\[
\mathcal V_0\approx l_{\mathrm{eff}}\left|\vec E_0\cdot\hat l\right|.
\tag*{[3]}
\\]

The effective length includes the antenna's current distribution and need not equal its physical end-to-end length. Equation [3] predicts maximum coupling when the dipole is parallel to \\(\vec E_0\\) and zero ideal coupling when it is perpendicular.

<PhysicsDiagram slug="receiving-antenna-responses" />

The upper loop encloses magnetic flux, so a changing \\(\vec B\\) drives its voltmeter through Faraday induction. The lower straight conductor lies along \\(\vec E\\), so the electric force moves charges along the wire and produces the measured voltage.

A loop antenna responds instead to magnetic flux. Let \\(\hat b\\) be a fixed reference direction along the field axis across the small loop, and write \\(\vec B(t)=\hat b B(t)\\), where the signed scalar \\(B(t)\\) records both amplitude and reversal along that axis. Choose the loop normal \\(\hat n\\) by the right-hand rule and define \\(\theta\\) from \\(\hat b\\) to \\(\hat n\\), so \\(\cos\theta=\hat b\cdot\hat n\\). Then

\\[
\Phi_B=\int\vec B\cdot d\vec A\approx AB(t)\cos\theta.
\tag*{[4]}
\\]

Faraday's law gives the induced emf, including the Lenz-law sign for the chosen positive loop direction and its right-hand-related normal.

\\[
\mathcal E=-\frac{d\Phi_B}{dt}.
\tag*{[5]}
\\]

At a fixed position, choose the time origin so that the positive amplitude \\(B_0\\) and signed scalar field obey

\\[
B_0\gt0,
\qquad
\vec B(t)=\hat b B(t),
\qquad
B(t)=B_0\cos(\omega t).
\tag*{[6]}
\\]

The reference direction \\(\hat b\\), loop normal \\(\hat n\\), and angle \\(\theta\\) remain fixed. A negative value of \\(B(t)\\) means that the instantaneous vector points opposite to \\(\hat b\\). Substitution of [6] into [4] and [5] gives

\\[
\Phi_B=AB_0\cos\theta\cos(\omega t),
\qquad
\mathcal E=\omega AB_0\cos\theta\sin(\omega t).
\tag*{[7]}
\\]

The loop-emf amplitude is therefore

\\[
\mathcal E_0=\omega AB_0|\cos\theta|.
\tag*{[8]}
\\]

The absolute value in [8] gives amplitude only; equation [7] retains the polarity set by the chosen normal. A vacuum plane wave also obeys \\(E_0=cB_0\\), so either field measurement can characterise the same incident wave.

\\[
E_0=cB_0.
\tag*{[9]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Voltage induced in a loop antenna",
      question: "A single-turn loop of area \\(4.0\\times10^{-4}\\,\\mathrm{m^2}\\) receives a \\(100\\,\\mathrm{MHz}\\) plane wave with magnetic-field amplitude \\(2.0\\times10^{-8}\\,\\mathrm T\\). Find the emf amplitude when the loop normal is parallel to the magnetic field.",
      answer: "Parallel alignment gives \\(|\\cos\\theta|=1\\). Convert frequency to angular frequency before using equation [8]: \\[\\omega=2\\pi f=2\\pi(100\\times10^6\\,\\mathrm{s^{-1}})=6.283\\times10^8\\,\\mathrm{rad\\,s^{-1}}.\\] Now substitute the angular frequency, loop area, and field amplitude: \\[\\mathcal E_0=\\omega AB_0=(6.283\\times10^8\\,\\mathrm{s^{-1}})(4.0\\times10^{-4}\\,\\mathrm{m^2})(2.0\\times10^{-8}\\,\\mathrm T)=5.03\\times10^{-3}\\,\\mathrm V.\\] **Final result:** the emf amplitude is \\(5.0\\,\\mathrm{mV}\\). The result is an amplitude; reversing the chosen loop normal changes the instantaneous polarity but not this magnitude.",
    },
    {
      title: "Choosing antenna orientation",
      question: "A linearly polarised wave arrives at two ideal detectors: a straight dipole and a small loop. How should each be oriented for maximum response?",
      answer: "Equation [3] is largest when the dipole direction \\(\\hat l\\) is parallel to the wave's electric field. Equation [8] is largest when the loop normal \\(\\hat n\\) is parallel to the magnetic-field reference direction \\(\\hat b\\), which means the magnetic field passes perpendicularly through the loop plane. **Final result:** align the straight dipole with \\(\\vec E\\), and orient the loop plane perpendicular to \\(\\vec B\\). Placing the dipole perpendicular to \\(\\vec E\\), or placing \\(\\vec B\\) in the loop plane, gives zero response only in the ideal small-antenna model.",
    },
  ]}
/>
`;
