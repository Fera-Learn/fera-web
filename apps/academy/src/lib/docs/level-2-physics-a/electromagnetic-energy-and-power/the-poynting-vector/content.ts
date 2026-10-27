export const content = String.raw`## Principle

Sunlight warms a surface because electromagnetic fields carry energy across the area.

The Poynting vector gives the instantaneous electromagnetic power crossing unit area. For an isotropic, lossless travelling plane wave, it points in the direction of energy transport. Its direction is fixed by the cross product of the electric field with the auxiliary magnetic field, so changing the order of the fields reverses the physical meaning.

## Notation

<Notation
  items={[
    { symbol: "\\vec E,\\vec H", meaning: "instantaneous electric and auxiliary magnetic fields", unit: "V m^{-1}, A m^{-1}" },
    { symbol: "\\vec B", meaning: "instantaneous magnetic flux density", unit: "T" },
    { symbol: "\\vec S", meaning: "instantaneous Poynting vector", unit: "W m^{-2}" },
    { symbol: "\\langle\\vec S\\rangle", meaning: "Poynting vector averaged over one period", unit: "W m^{-2}" },
    { symbol: "\\vec E_0,\\vec H_0", meaning: "peak complex field amplitudes; an asterisk denotes complex conjugation", unit: "V m^{-1}, A m^{-1}" },
    { symbol: "Z,Z_0", meaning: "wave impedance of a lossless medium and vacuum impedance", unit: "\\Omega, \\Omega" },
    { symbol: "\\mu,\\mu_0", meaning: "permeability of a medium and vacuum permeability", unit: "H m^{-1}, H m^{-1}" },
    { symbol: "\\hat{\\vec k},\\hat{\\vec n}", meaning: "unit vectors along propagation and normal to an area" },
    { symbol: "\\alpha", meaning: "angle between the Poynting vector and area normal", unit: "rad" },
    { symbol: "P,A", meaning: "power crossing a surface and surface area", unit: "W, m^{2}" },
  ]}
/>

## The Core Method

For real instantaneous fields in any electromagnetic system, define

\\[
\boxed{\vec S=\vec E\times\vec H}.
\tag*{[1]}
\\]

In vacuum, \\(\vec B=\mu_0\vec H\\), so equation [1] becomes

\\[
\vec S=\frac{1}{\mu_0}\vec E\times\vec B.
\tag*{[2]}
\\]

The cross product makes \\(\vec E\\), \\(\vec H\\), and \\(\vec S\\) a right-handed set. For an isotropic, lossless travelling plane wave, \\(\vec S\\) points along the propagation direction \\(\hat{\vec k}\\). The power crossing an oriented area is the flux of \\(\vec S\\):

\\[
\mathrm dP=\vec S\cdot\hat{\vec n}\,\mathrm dA,
\qquad
P=\int_A\vec S\cdot\hat{\vec n}\,\mathrm dA.
\tag*{[3]}
\\]

A positive result means power crosses in the chosen normal direction. A negative result means the energy flows opposite to \\(\hat{\vec n}\\). For a uniform field making an angle \\(\alpha\\) with the area normal, equation [3] reduces to \\(P=SA\cos\alpha\\).

For sinusoidal fields represented by peak phasors \\(\vec E_0\\) and \\(\vec H_0\\), averaging over one period gives

\\[
\boxed{
\langle\vec S\rangle
=\frac{1}{2}\operatorname{Re}
\left(\vec E_0\times\vec H_0^{*}\right)
}.
\tag*{[4]}
\\]

The factor \\(1/2\\) is required because the phasors are peak, not root-mean-square, amplitudes. In a lossless medium, the plane-wave relation is \\(\vec H_0=(1/Z)\hat{\vec k}\times\vec E_0\\). Since the fields are transverse, substitution into [4] gives

\\[
\langle\vec S\rangle
=\frac{1}{2Z}\vec E_0\times
\left(\hat{\vec k}\times\vec E_0^{*}\right)
=\frac{1}{2Z}
\left[
(\vec E_0\cdot\vec E_0^{*})\hat{\vec k}
-(\vec E_0\cdot\hat{\vec k})\vec E_0^{*}
\right]
=\frac{|E_0|^2}{2Z}\hat{\vec k}
=\frac{Z|H_0|^2}{2}\hat{\vec k}.
\tag*{[5]}
\\]

The second equality uses the vector triple-product identity, and the third uses transversality, \\(\vec E_0\cdot\hat{\vec k}=0\\).

Equation [5] is the average intensity and applies to a travelling plane wave in a lossless medium. Equation [1] is the more general instantaneous definition.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Direction and average intensity of an air wave",
      question: "A sinusoidal plane wave in air has peak electric field \\(\\vec E_0=120\\,\\hat{\\vec x}\\,\\mathrm{V\\,m^{-1}}\\), travels along positive \\(z\\), and has wave impedance \\(Z_0=377\\,\\Omega\\). Find the peak magnetic-field direction and the average Poynting vector.",
      answer: "For propagation along \\(+z\\), the fields must satisfy \\(\\vec E_0\\times\\vec H_0\\parallel+\\hat{\\vec z}\\). Since \\(\\hat{\\vec x}\\times\\hat{\\vec y}=\\hat{\\vec z}\\), the magnetic field points along \\(+y\\). Its peak magnitude is \\[H_0=\\frac{E_0}{Z_0}=\\frac{120}{377}=0.318\\,\\mathrm{A\\,m^{-1}}.\\] Equation [5] then gives \\[\\langle\\vec S\\rangle=\\frac{E_0^2}{2Z_0}\\hat{\\vec z}=\\frac{(120)^2}{2(377)}\\hat{\\vec z}=19.1\\,\\hat{\\vec z}\\,\\mathrm{W\\,m^{-2}}.\\] **Final result:** \\(\\vec H_0\\) points along \\(+y\\), and the wave carries \\(19.1\\,\\mathrm{W\\,m^{-2}}\\) along \\(+z\\). The factor of \\(1/2\\) is consistent with peak amplitudes.",
    },
    {
      title: "Power through an oblique surface",
      question: "A uniform wave has average intensity \\(500\\,\\mathrm{W\\,m^{-2}}\\). It crosses a flat area of \\(0.040\\,\\mathrm{m^2}\\) at \\(60^\\circ\\) to the chosen area normal. Find the signed average power.",
      answer: "Use the averaged form of equation [3]. The projected area perpendicular to the energy flow is \\(A\\cos\\alpha\\), so \\[P=\\langle S\\rangle A\\cos\\alpha=(500)(0.040)\\cos60^\\circ=10\\,\\mathrm W.\\] **Final result:** \\(P=+10\\,\\mathrm W\\). The positive sign shows that the energy crosses in the chosen normal direction; reversing the normal would give \\(-10\\,\\mathrm W\\).",
    },
  ]}
/>
`;
