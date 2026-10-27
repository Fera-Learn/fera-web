export const content = String.raw`## Principle

The scalar approximation replaces the vector electric field by one complex scalar amplitude when polarisation is effectively uniform. It preserves phase and diffraction while deliberately omitting spatial changes of polarisation.

## Notation

<Notation
  items={[
    { symbol: "\\vec E,E", meaning: "vector electric field and scalar field used in its place", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "\\hat{\\vec e}", meaning: "constant polarisation unit vector" },
    { symbol: "\\widetilde U(\\vec r),U", meaning: "complex scalar spatial amplitude and physical scalar field", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "\\vec r,t", meaning: "position and time", unit: "m, s" },
    { symbol: "k,\\omega,c", meaning: "wavenumber, angular frequency, and vacuum wave speed", unit: "m^{-1}, rad s^{-1}, m s^{-1}" },
    { symbol: "\\nabla^2,\\lambda", meaning: "Laplacian and wavelength", unit: "m^{-2}, m" },
    { symbol: "I,\\epsilon_0", meaning: "time-averaged intensity and vacuum permittivity", unit: "W m^{-2}, F m^{-1}" },
    { symbol: "i,\\operatorname{Re}", meaning: "imaginary unit and real-part operation" },
    { symbol: "E_0,x,z,\\hat{\\vec x}", meaning: "example peak field, transverse axis, propagation coordinate, and transverse unit vector", unit: "V m^{-1}, m, m, 1" },
  ]}
/>

## The Core Method

If the electric field has one fixed polarisation everywhere in the region of interest, factor the vector field into a constant direction and a scalar amplitude:

\\[
\vec E(\vec r,t)=\hat{\vec e}\,U(\vec r,t),
\qquad \frac{\partial\hat{\vec e}}{\partial t}=\vec 0,
\qquad \nabla\hat{\vec e}=0.
\tag*{[1]}
\\]

Substitute [1] into the vector wave equation. Because \\(\hat{\vec e}\\) is constant, derivatives act only on \\(U\\):

\\[
\hat{\vec e}\left(\nabla^2U-\frac{1}{c^2}\frac{\partial^2U}{\partial t^2}\right)=\vec 0.
\tag*{[2]}
\\]

For a nonzero unit vector, the bracket must vanish. The scalar wave equation is therefore

\\[
\nabla^2U-\frac{1}{c^2}\frac{\partial^2U}{\partial t^2}=0.
\tag*{[3]}
\\]

Using the convention \\(U(\vec r,t)=\operatorname{Re}\{\widetilde U(\vec r)e^{-i\omega t}\}\\), two time derivatives contribute \\(-\omega^2\\). Equation [3] becomes the Helmholtz equation:

\\[
\nabla^2\widetilde U+k^2\widetilde U=0,
\qquad k=\frac{\omega}{c}=\frac{2\pi}{\lambda}.
\tag*{[4]}
\\]

The approximation is reliable when polarisation remains nearly constant, optical elements respond similarly to both relevant vector components, and transverse structure varies over scales large compared with \\(\lambda\\). It can fail for strong focusing, highly non-paraxial propagation, anisotropic or polarising media, and situations where longitudinal fields matter.

The scalar intensity relation retains only the amplitude information:

\\[
I=\frac12\epsilon_0c|\widetilde U|^2
\tag*{[5]}
\\]

for a locally plane vacuum wave. Equation [5] does not restore the omitted polarisation direction.

<PhysicsExamples collapsible
  items={[
    {
      title: "Reducing a fixed-polarisation field",
      question: "A vacuum field is \\(\\vec E=\\hat{\\vec x}E_0\\cos(kz-\\omega t)\\). Show its scalar representative and state its Helmholtz equation.",
      answer: "The polarisation vector \\(\\hat{\\vec x}\\) is constant, so equation \\([1]\\) identifies \\(U=E_0\\cos(kz-\\omega t)\\). With the stated convention, \\(\\widetilde U(z)=E_0e^{ikz}\\). Differentiating twice gives \\(d^2\\widetilde U/dz^2=-k^2\\widetilde U\\), so \\(d^2\\widetilde U/dz^2+k^2\\widetilde U=0\\), the one-dimensional form of \\([4]\\). **Final result:** \\(\\vec E=\\hat{\\vec x}U\\) is represented by \\(\\widetilde U=E_0e^{ikz}\\), which satisfies the scalar Helmholtz equation.",
    },
    {
      title: "Recognising a breakdown",
      question: "Can one scalar amplitude fully describe a tightly focused beam whose electric field acquires a significant longitudinal component near focus?",
      answer: "No. Equation \\([1]\\) requires one position-independent polarisation vector, but the focused field has transverse and longitudinal components whose relative magnitudes vary with position. A scalar model may estimate a broad intensity envelope, but it cannot reproduce the full field or polarisation. **Final result:** a vector electromagnetic treatment is required near the strong focus.",
    },
  ]}
/>
`;
