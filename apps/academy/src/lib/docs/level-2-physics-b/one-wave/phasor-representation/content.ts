export const content = String.raw`## Principle

A phasor is a complex-plane arrow that records the amplitude and phase of a harmonic quantity after its common time dependence has been separated. It is not an electric-field vector in physical space.

## Notation

<Notation
  items={[
    { symbol: "E(\\vec r,t)", meaning: "real physical scalar field", unit: "V m^{-1}" },
    { symbol: "\\widetilde E(\\vec r),\\widetilde E_0,\\widetilde E_{\\mathrm{tot}}", meaning: "position-dependent, constant, and total phasors", unit: "V m^{-1}, V m^{-1}, V m^{-1}" },
    { symbol: "\\widetilde E_1,\\widetilde E_2", meaning: "component phasors being added", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "A,\\Phi", meaning: "phasor magnitude and angle", unit: "V m^{-1}, rad" },
    { symbol: "\\vec k,\\vec r,\\omega,t", meaning: "wavevector, position, angular frequency, and time", unit: "m^{-1}, m, rad s^{-1}, s" },
    { symbol: "\\phi_0,\\Delta\\Phi", meaning: "constant phase offset and phase difference", unit: "rad, rad" },
    { symbol: "i,\\operatorname{Re}", meaning: "imaginary unit and real-part operation" },
  ]}
/>

## The Core Method

Using the common time convention \\(e^{-i\omega t}\\), write a monochromatic physical field as

\\[
E(\vec r,t)=\operatorname{Re}\{\widetilde E(\vec r)e^{-i\omega t}\},
\qquad
\widetilde E(\vec r)=\widetilde E_0e^{i\vec k\cdot\vec r}.
\tag*{[1]}
\\]

At a fixed position, express the phasor in polar form:

\\[
\widetilde E=Ae^{i\Phi}=A\cos\Phi+iA\sin\Phi.
\tag*{[2]}
\\]

The phasor has length \\(A\\) and angle \\(\Phi\\) from the positive real axis. Multiplication by \\(e^{-i\omega t}\\) rotates the full complex representative clockwise as time increases; taking its real projection gives the measured field.

Propagation changes the phasor angle. Between two points separated by \\(\Delta\vec r\\),

\\[
\widetilde E(\vec r+\Delta\vec r)
=\widetilde E(\vec r)e^{i\vec k\cdot\Delta\vec r},
\qquad
\Delta\Phi=\vec k\cdot\Delta\vec r.
\tag*{[3]}
\\]

Phasors of equal frequency add as ordinary complex numbers. For two equal magnitudes \\(A\\) and relative phase \\(\Delta\Phi\\), choose symmetric angles to isolate the mean phase:

\\[
\begin{aligned}
\widetilde E_{\mathrm{tot}}
&=Ae^{-i\Delta\Phi/2}+Ae^{i\Delta\Phi/2}\\
&=2A\cos\left(\frac{\Delta\Phi}{2}\right).
\end{aligned}
\tag*{[4]}
\\]

Thus the resultant magnitude is

\\[
|\widetilde E_{\mathrm{tot}}|
=2A\left|\cos\left(\frac{\Delta\Phi}{2}\right)\right|.
\tag*{[5]}
\\]

Phasor addition requires a common \\(\omega\\). If frequencies differ, their relative angle changes with time and no single stationary phasor diagram represents the sum.

<PhysicsExamples collapsible
  items={[
    {
      title: "Adding two phasors in Cartesian form",
      question: "Add phasors \\(\\widetilde E_1=5.0e^{i0}\\,\\mathrm{V\\,m^{-1}}\\) and \\(\\widetilde E_2=5.0e^{i\\pi/2}\\,\\mathrm{V\\,m^{-1}}\\). Give the resultant magnitude and phase.",
      answer: "Convert each phasor to Cartesian form: \\(\\widetilde E_1=5.0\\) and \\(\\widetilde E_2=5.0i\\), so \\(\\widetilde E_{\\mathrm{tot}}=5.0+5.0i\\). Its magnitude is \\(\\sqrt{5.0^2+5.0^2}=7.07\\,\\mathrm{V\\,m^{-1}}\\), and its angle is \\(\\tan^{-1}(5.0/5.0)=\\pi/4\\). **Final result:** \\(\\widetilde E_{\\mathrm{tot}}=7.07e^{i\\pi/4}\\,\\mathrm{V\\,m^{-1}}\\).",
    },
    {
      title: "Phasor space versus physical space",
      question: "A scalar wave has a phasor drawn upward on an Argand diagram. Does its electric field point upward in the laboratory?",
      answer: "No. The diagram's horizontal and vertical axes are real and imaginary coordinates, not laboratory directions. The arrow angle records phase, and its projection after the common time rotation gives the scalar field value. A physical electric-field direction would require separate vector or polarisation information. **Final result:** an upward phasor indicates phase \\(\\pi/2\\), not an upward laboratory electric field.",
    },
  ]}
/>
`;
