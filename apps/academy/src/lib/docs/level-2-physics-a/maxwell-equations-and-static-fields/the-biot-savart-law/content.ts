export const content = String.raw`## Principle

A bent wire has no single obvious radius, yet every short piece of it still contributes to the magnetic field at an observation point.

The Biot-Savart law builds a magnetic field by adding the vector contributions from every small element of a steady current. It works for current paths whose geometry is too general for Ampere's law to isolate the field directly.

## Notation

<Notation
  items={[
    { symbol: "I", meaning: "steady current in the source", unit: "A" },
    { symbol: "d\\vec l", meaning: "small source element directed along conventional current", unit: "m" },
    { symbol: "\\vec r,r", meaning: "displacement from the source element to the field point and its magnitude", unit: "m, m" },
    { symbol: "\\hat r", meaning: "unit vector from the source element to the field point" },
    { symbol: "\\theta", meaning: "angle from \\(d\\vec l\\) to \\(\\hat r\\)", unit: "rad" },
    { symbol: "d\\vec B,\\vec B", meaning: "field contribution and total magnetic field", unit: "T, T" },
    { symbol: "\\mu_0", meaning: "permeability of free space", unit: "N A^{-2}" },
    { symbol: "d\\vec S", meaning: "outward area element on closed surface \\(\\mathcal S\\)", unit: "m^{2}" },
    { symbol: "\\nabla", meaning: "del, the vector differential operator", unit: "m^{-1}" },
  ]}
/>

## The Core Method

Choose a source element \\(d\vec l\\) on the wire and draw \\(\vec r\\) from that element to the field point. The Biot-Savart law gives the element's magnetic-field contribution.

<PhysicsDiagram slug="biot-savart-current-element-geometry" />

The directed element fixes the current direction, while \\(\vec r\\) points from the source to \\(P\\). The purple loops show that \\(d\vec B\\) circulates around the element; the angle \\(\theta\\) between \\(d\vec l\\) and \\(\vec r\\) controls the contribution's magnitude.

\\[
d\vec B=\frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^{2}}\tag*{[1]}
\\]

The cross product is ordered: use \\(d\vec l\times\hat r\\), not \\(\hat r\times d\vec l\\). Its magnitude contains the sine of the angle \\(\theta\\), so a field point along the element direction receives zero contribution from that element.

\\[
dB=\frac{\mu_0}{4\pi}\frac{I\,dl\sin\theta}{r^{2}}\tag*{[2]}
\\]

Find the direction of each contribution before integrating because directions may vary around the source. For a current path \\(\mathcal C\\), vector integration performs the continuous superposition.

\\[
\vec B=\int_{\mathcal C}d\vec B=\frac{\mu_0 I}{4\pi}\int_{\mathcal C}\frac{d\vec l\times\hat r}{r^{2}}\tag*{[3]}
\\]

If several conductors are present, calculate the field \\(\vec B_k\\) from each conductor \\(k\\) with its own geometry and current direction, then add the fields as vectors rather than adding only their magnitudes.

\\[
\vec B_{\mathrm{total}}=\sum_k\vec B_k\tag*{[4]}
\\]

To calculate the divergence, choose spherical coordinates with the polar axis along \\(d\vec l\\). The contribution points only in the azimuthal direction, so its radial and polar components are zero.

\\[
dB_r=0,\qquad dB_\theta=0,\qquad dB_\phi=\frac{\mu_0 I\,dl\sin\theta}{4\pi r^2}\tag*{[5]}
\\]

Only the azimuthal derivative remains in the spherical-coordinate divergence.

\\[
\nabla\cdot d\vec B=\frac{1}{r\sin\theta}\frac{\partial dB_\phi}{\partial\phi}\tag*{[6]}
\\]

The magnitude in equation [5] has no dependence on the azimuthal coordinate \\(\phi\\), so the derivative is zero away from the source element.

\\[
\frac{\partial dB_\phi}{\partial\phi}=0\quad\Longrightarrow\quad\nabla\cdot d\vec B=0\tag*{[7]}
\\]

Integration and superposition preserve zero divergence. This gives Maxwell's magnetic-divergence law for the total field.

\\[
\nabla\cdot\vec B=0\tag*{[8]}
\\]

For a volume \\(V\\) bounded by a closed surface \\(\mathcal S\\), the divergence theorem converts the local law into a magnetic-flux statement. Any magnetic field line entering the surface must leave it, even when the field is nonzero on the surface.

\\[
\oint_{\mathcal S}\vec B\cdot d\vec S=\int_V(\nabla\cdot\vec B)\,dV=0\tag*{[9]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Contribution from one current element",
      question: "A \\(3.0\\,\\mathrm{mm}\\) current element carries \\(4.0\\,\\mathrm A\\). A field point is \\(0.20\\,\\mathrm m\\) away in a direction perpendicular to the element. Find \\(dB\\).",
      answer: "The element and displacement are perpendicular, so \\(\\theta=90^\\circ\\) and \\(\\sin\\theta=1\\). Convert the element length: \\(dl=3.0\\times10^{-3}\\,\\mathrm m\\). The magnitude is \\[dB=\\frac{\\mu_0}{4\\pi}\\frac{I\\,dl\\sin\\theta}{r^2}=10^{-7}\\frac{(4.0)(3.0\\times10^{-3})(1)}{(0.20)^2}=3.0\\times10^{-8}\\,\\mathrm T.\\] **Final result:** this element contributes \\(3.0\\times10^{-8}\\,\\mathrm T\\). Its direction must still be found from the ordered cross product \\(d\\vec l\\times\\hat r\\).",
    },
    {
      title: "Zero flux through a closed surface",
      question: "A closed sphere surrounds a current loop, and the loop's magnetic field is nonzero over the sphere. What is the net magnetic flux through the sphere?",
      answer: "The field strength can vary across the sphere, but Maxwell's magnetic-divergence law applies throughout the enclosed volume. Therefore \\[\\oint_{\\mathcal S}\\vec B\\cdot d\\vec S=0.\\] **Final result:** the net magnetic flux is zero because every field line that leaves the sphere returns through it. Zero net flux does not mean that the magnetic field is zero.",
    },
  ]}
/>
`;
