export const content = String.raw`## Principle

Counter-propagating vector waves can form an electric-amplitude standing pattern, a spatially varying polarisation state with uniform electric-field magnitude, or a rotating linear-polarisation grating. Use fixed laboratory vectors \\((\hat e_1,\hat e_2)\\), harmonic factor \\(e^{-i\omega t}\\), and wavevectors \\(\pm k\hat z\\).

## Notation

<Notation
  items={[
    { symbol: "E_0", meaning: "complex amplitude of each travelling wave", unit: "V m^{-1}" },
    { symbol: "k,\\lambda", meaning: "wavenumber and wavelength", unit: "m^{-1}, m" },
    { symbol: "z,t,\\omega", meaning: "position, time, and angular frequency", unit: "m, s, rad s^{-1}" },
    { symbol: "\\hat e_1,\\hat e_2", meaning: "fixed orthogonal laboratory transverse vectors" },
    { symbol: "\\hat z", meaning: "unit vector along the propagation axis", unit: "1" },
    { symbol: "\\vec E_0(z)", meaning: "position-dependent complex amplitude", unit: "V m^{-1}" },
    { symbol: "\\vec E,m", meaning: "complex harmonic field and arbitrary integer", unit: "V m^{-1}, 1" },
    { symbol: "\\delta", meaning: "relative phase of the second component to the first", unit: "rad" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Changing the component relation between two counter-propagating waves changes what repeats in space: field magnitude, ellipticity, or the orientation of a linear-polarisation axis.

<PhysicsDiagram slug="counter-propagating-polarisation-patterns" />

Parallel linear polarisations produce

\\[
\vec E=E_0(e^{ikz}+e^{-ikz})e^{-i\omega t}\hat e_1
=2E_0\cos(kz)e^{-i\omega t}\hat e_1,
\tag*{[1]}
\\]

so a local square-law electric-field signal is proportional to \\(4|E_0|^2\cos^2(kz)\\), with node spacing \\(\lambda/2\\). The net time-averaged Poynting flux of two equal counter-propagating waves is zero, so this standing electric pattern must not be interpreted as a net travelling-wave intensity.

Perpendicular linear polarisations instead give

\\[
\vec E_0(z)=E_0(e^{ikz}\hat e_1+e^{-ikz}\hat e_2),
\qquad
\vec E_0^{\,*}\cdot\vec E_0=2|E_0|^2.
\tag*{[2]}
\\]

Their relative phase is \\(-2kz\\), so the local state cycles every \\(\lambda/2\\):

\\[
z=0:\ +45^\circ\text{ linear};\quad
z=\frac{\lambda}{8}:\ \text{right-circular};\quad
z=\frac{\lambda}{4}:\ -45^\circ\text{ linear};\quad
z=\frac{3\lambda}{8}:\ \text{left-circular}.
\tag*{[3]}
\\]

Finally, waves with the same handedness relative to their own opposite propagation directions use opposite circular vectors in fixed axes:

\\[
\vec E_0(z)=\frac{E_0}{\sqrt2}
\left[e^{ikz}(\hat e_1+i\hat e_2)+e^{-ikz}(\hat e_1-i\hat e_2)\right]
=\sqrt2E_0[\cos(kz)\hat e_1-\sin(kz)\hat e_2].
\tag*{[4]}
\\]

Equation [4] has uniform magnitude and linear polarisation angle \\(-kz\\): a stationary corkscrew polarisation gradient with line orientation repeating after \\(\lambda/2\\).

<PhysicsExamples collapsible
  items={[
    {
      title: "Local state of perpendicular waves",
      question: "For the field in \\([2]\\), classify the polarisation at \\(z=\\lambda/16\\).",
      answer: "The relative phase of the \\(\\hat e_2\\) coefficient to the \\(\\hat e_1\\) coefficient is \\[\\delta=-2kz=-2\\left(\\frac{2\\pi}{\\lambda}\\right)\\frac{\\lambda}{16}=-\\frac{\\pi}{4}.\\] The component magnitudes are equal, but \\(\\delta\\) is neither \\(0,\\pi\\) nor \\(\\pm\\pi/2\\). **Final result:** the local state is right-handed elliptical, with uniform squared complex electric-field magnitude.",
    },
    {
      title: "Field nodes versus polarisation structure",
      question: "Which of \\([1]\\), \\([2]\\), and \\([4]\\) has electric-field amplitude nodes?",
      answer: "Equation \\([1]\\) has the scalar factor \\(\\cos(kz)\\), so it vanishes where \\(kz=(m+1/2)\\pi\\) for integer \\(m\\). Equations \\([2]\\) and \\([4]\\) have squared norms \\(2|E_0|^2\\) everywhere; their spatial structure is in polarisation, not field magnitude. **Final result:** only the parallel-linear case \\([1]\\) has electric-field amplitude nodes.",
    },
  ]}
/>
`;
