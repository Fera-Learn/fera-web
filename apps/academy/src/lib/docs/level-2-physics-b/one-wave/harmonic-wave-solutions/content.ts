export const content = String.raw`## Principle

A harmonic wave repeats sinusoidally in both space and time. Its wavevector sets the propagation direction and spatial repetition, while its angular frequency sets the temporal repetition.

## Notation

<Notation
  items={[
    { symbol: "E(\\vec r,t),E_0", meaning: "real scalar field and constant peak amplitude", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "\\vec r,t", meaning: "position and time", unit: "m, s" },
    { symbol: "x,y,z", meaning: "Cartesian components of position", unit: "m, m, m" },
    { symbol: "\\vec k,k", meaning: "wavevector and wavenumber magnitude", unit: "m^{-1}, m^{-1}" },
    { symbol: "\\omega,\\phi_0", meaning: "angular frequency and constant phase offset", unit: "rad s^{-1}, rad" },
    { symbol: "\\lambda,T,c", meaning: "wavelength, period, and vacuum wave speed", unit: "m, s, m s^{-1}" },
    { symbol: "\\hat{\\vec n}", meaning: "unit vector in the propagation direction" },
    { symbol: "i,\\operatorname{Re}", meaning: "imaginary unit and real-part operation" },
    { symbol: "C", meaning: "constant phase value used to track a wavefront", unit: "rad" },
  ]}
/>

## The Core Method

Use the real harmonic solution

\\[
E(\vec r,t)=E_0\cos(\vec k\cdot\vec r-\omega t+\phi_0),
\qquad \vec k=k\hat{\vec n}.
\tag*{[1]}
\\]

The minus sign before \\(\omega t\\) fixes the propagation convention. Holding the phase constant gives \\(\vec k\cdot\vec r-\omega t=\text{constant}\\), so increasing time moves the same phase surface along \\(+\vec k\\).

Apply the Laplacian to [1]. Each spatial derivative contributes the corresponding component of \\(\vec k\\), giving

\\[
\nabla^2E=-(k_x^2+k_y^2+k_z^2)E=-k^2E.
\tag*{[2]}
\\]

Two time derivatives similarly give

\\[
\frac{\partial^2E}{\partial t^2}=-\omega^2E.
\tag*{[3]}
\\]

Substitute [2] and [3] into \\(\nabla^2E-c^{-2}\partial_t^2E=0\\):

\\[
-k^2E+\frac{\omega^2}{c^2}E=0
\quad\Longrightarrow\quad
\omega=ck,
\tag*{[4]}
\\]

where the positive root is chosen because \\(k\\) and \\(\omega\\) are positive magnitudes. One spatial cycle and one temporal cycle correspond to phase changes of \\(2\pi\\), so

\\[
k=\frac{2\pi}{\lambda},\qquad
\omega=\frac{2\pi}{T},\qquad
c=\frac{\omega}{k}=\frac{\lambda}{T}.
\tag*{[5]}
\\]

The matching complex convention is \\(E=\operatorname{Re}\{E_0e^{i(\vec k\cdot\vec r+\phi_0)}e^{-i\omega t}\}\\); it represents exactly the real field in [1].

<PhysicsExamples collapsible
  items={[
    {
      title: "Constructing a visible-light harmonic wave",
      question: "A vacuum wave travels along \\(+z\\) with wavelength \\(600\\,\\mathrm{nm}\\), peak field \\(2.0\\,\\mathrm{V\\,m^{-1}}\\), and zero phase offset. Find \\(k\\), \\(\\omega\\), and the real field.",
      answer: "Convert the wavelength first: \\(\\lambda=600\\times10^{-9}\\,\\mathrm m\\). Equation \\([5]\\) gives \\[k=\\frac{2\\pi}{600\\times10^{-9}}=1.047\\times10^7\\,\\mathrm{m^{-1}}.\\] Then \\[\\omega=ck=(2.998\\times10^8)(1.047\\times10^7)=3.14\\times10^{15}\\,\\mathrm{rad\\,s^{-1}}.\\] Insert these values into equation \\([1]\\). **Final result:** \\(E(z,t)=2.0\\cos(1.047\\times10^7z-3.14\\times10^{15}t)\\,\\mathrm{V\\,m^{-1}}\\).",
    },
    {
      title: "Reading propagation direction from the phase",
      question: "Does \\(E(z,t)=E_0\\cos(kz+\\omega t)\\) propagate along \\(+z\\) or \\(-z\\)?",
      answer: "Track a fixed phase: \\(kz+\\omega t=C\\), where \\(C\\) is constant. Solving gives \\(z=C/k-(\\omega/k)t\\), so the fixed-phase point has velocity \\(dz/dt=-\\omega/k\\). This is opposite to the convention in equation \\([1]\\). **Final result:** the wave propagates along \\(-z\\) with speed \\(\\omega/k\\).",
    },
  ]}
/>
`;
