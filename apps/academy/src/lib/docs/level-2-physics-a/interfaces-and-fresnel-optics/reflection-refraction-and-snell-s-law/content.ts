export const content = String.raw`## Principle

A light beam striking glass produces a reflected beam and a transmitted beam whose directions are locked together at the surface.

Reflection and refraction are phase-matching consequences. Every point on a stationary planar interface must satisfy the field boundary conditions at every time, forcing one frequency and one wave-vector component parallel to the interface for the incident, reflected, and transmitted waves.

## Notation

<Notation
  items={[
    { symbol: "\\widetilde{\\vec E}_i,\\widetilde{\\vec E}_r,\\widetilde{\\vec E}_t", meaning: "complex incident, reflected, and transmitted electric fields", unit: "V m^{-1}" },
    { symbol: "\\vec E_{0i},\\vec E_{0r},\\vec E_{0t}", meaning: "constant complex electric-field amplitudes", unit: "V m^{-1}" },
    { symbol: "\\vec k_i,\\vec k_r,\\vec k_t", meaning: "incident, reflected, and transmitted wave vectors", unit: "m^{-1}" },
    { symbol: "k_i,k_r,k_t", meaning: "magnitudes of the three wave vectors", unit: "m^{-1}" },
    { symbol: "\\vec r,\\vec R", meaning: "position vector and an arbitrary position vector lying in the interface", unit: "m, m" },
    { symbol: "\\hat n", meaning: "unit normal from the incident medium into the transmitted medium" },
    { symbol: "\\theta_i,\\theta_r,\\theta_t", meaning: "incidence, reflection, and transmission angles measured from the normal", unit: "rad" },
    { symbol: "\\omega_i,\\omega_r,\\omega_t", meaning: "incident, reflected, and transmitted angular frequencies", unit: "rad s^{-1}" },
    { symbol: "n_i,n_t", meaning: "refractive indices of the incident and transmitted media" },
    { symbol: "v_i,v_t,c", meaning: "phase speeds in the two media and vacuum light speed", unit: "m s^{-1}" },
    { symbol: "f,\\lambda", meaning: "wave frequency and wavelength", unit: "Hz, m" },
    { symbol: "i,t", meaning: "imaginary unit and time", unit: "1, s" },
  ]}
/>

## The Core Method

The geometry is fixed before any amplitudes are calculated: all three wavevectors meet at one stationary plane interface and lie in one plane of incidence.

<PhysicsDiagram slug="interface-reflection-refraction-geometry" />

The incident and reflected fields share an interface point \\(\vec R_1\\), while the transmitted field is compared at another interface point \\(\vec R_2\\). Requiring the phase relationship to hold at every such point forces the interface-parallel wavevector components to match.

Represent each plane wave by the same harmonic convention:

\\[
\begin{aligned}
\widetilde{\vec E}_i(\vec r,t)&=\vec E_{0i}e^{i(\vec k_i\cdot\vec r-\omega_i t)},\\
\widetilde{\vec E}_r(\vec r,t)&=\vec E_{0r}e^{i(\vec k_r\cdot\vec r-\omega_r t)},\\
\widetilde{\vec E}_t(\vec r,t)&=\vec E_{0t}e^{i(\vec k_t\cdot\vec r-\omega_t t)}.
\end{aligned}
\tag*{[1]}
\\]

At one fixed interface point, the tangential boundary condition must hold for every time. Distinct time factors could not remain equal, so

\\[
\boxed{\omega_i=\omega_r=\omega_t\equiv\omega}.
\tag*{[2]}
\\]

Frequency therefore does not change at a stationary interface. Now compare phases at every position \\(\vec R\\) in the interface. Equality for arbitrary \\(\vec R\\) requires

\\[
\vec k_i\cdot\vec R
=\vec k_r\cdot\vec R
=\vec k_t\cdot\vec R.
\tag*{[3]}
\\]

Subtracting pairs in [3] gives

\\[
(\vec k_i-\vec k_r)\cdot\vec R=0,
\qquad
(\vec k_i-\vec k_t)\cdot\vec R=0
\quad\text{for every }\vec R.
\tag*{[4]}
\\]

Thus each difference in [4] is normal to the interface, or equivalently the parallel wave-vector components match:

\\[
\boxed{\vec k_{i\parallel}=\vec k_{r\parallel}=\vec k_{t\parallel}}.
\tag*{[5]}
\\]

The incident and reflected waves occupy the same medium, so [2] gives \\(k_i=k_r\\). Taking magnitudes of the parallel components in [5],

\\[
k_i\sin\theta_i=k_r\sin\theta_r,
\qquad
k_i=k_r.
\tag*{[6]}
\\]

For angles between \\(0\\) and \\(\pi/2\\), equations [6] imply the law of reflection:

\\[
\boxed{\theta_r=\theta_i}.
\tag*{[7]}
\\]

For transmission, [5] gives

\\[
k_i\sin\theta_i=k_t\sin\theta_t.
\tag*{[8]}
\\]

Because \\(v=\omega/k\\) and \\(n=c/v\\), the common frequency [2] gives

\\[
k=\frac{\omega}{v}=\frac{n\omega}{c}.
\tag*{[9]}
\\]

Substitute [9] into [8] and cancel \\(\omega/c\\):

\\[
\boxed{n_i\sin\theta_i=n_t\sin\theta_t}.
\tag*{[10]}
\\]

This is Snell's law. The vector equality [5] also places all three wave vectors in one plane, the plane of incidence. These geometrical laws are independent of polarisation. Angles must be measured from the normal, not from the interface.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Refraction from air into glass",
      question: "A plane wave travels from air \\((n_i=1.00)\\) into glass \\((n_t=1.50)\\) at \\(\\theta_i=30.0^\\circ\\). Find the reflection and transmission angles.",
      answer: "Reflection stays in the incident medium, so [7] gives \\[\\theta_r=\\theta_i=30.0^\\circ.\\] For transmission, apply [10]: \\[1.00\\sin30.0^\\circ=1.50\\sin\\theta_t.\\] Isolate the sine before taking the inverse function: \\[\\sin\\theta_t=\\frac{1.00}{1.50}(0.500)=0.333.\\] Therefore \\[\\theta_t=\\sin^{-1}(0.333)=19.5^\\circ.\\] **Final result:** \\(\\theta_r=30.0^\\circ\\) and \\(\\theta_t=19.5^\\circ\\). The higher-index glass bends the transmitted wave toward the normal.",
    },
    {
      title: "What changes at normal incidence?",
      question: "A monochromatic wave crosses normally from a medium of index \\(n_i\\) into a medium with larger index \\(n_t\\). Explain what happens to its direction, frequency, speed, wavelength, and phase matching.",
      answer: "Normal incidence means \\(\\theta_i=0\\). Equation [10] gives \\(n_t\\sin\\theta_t=0\\), hence \\(\\theta_t=0\\): there is no bending. Equation [2] keeps the frequency fixed. Since \\(v=c/n\\), the larger \\(n_t\\) gives a smaller transmitted speed. With the common frequency, \\(\\lambda=v/f\\) also decreases. Finally, [5] is satisfied because every parallel wave-vector component is zero. **Final result:** the direction and frequency are unchanged, while speed and wavelength decrease; partial reflection can still occur because phase matching determines directions, not amplitudes.",
    },
  ]}
/>
`;
