export const content = String.raw`## Principle

Push a magnet towards a conducting loop and the induced current creates a magnetic effect that resists the approach.

Faraday's law gives the signed emf produced when magnetic flux through an oriented loop changes. Lenz's law interprets the minus sign: the induced effect opposes the change in flux, not necessarily the magnetic field itself.

## Notation

<Notation
  items={[
    { symbol: "\\mathcal C,S", meaning: "oriented closed contour and a surface bounded by it" },
    { symbol: "d\\vec l,d\\vec S,dS", meaning: "directed contour element, oriented area element, and scalar area element", unit: "m, m^{2}, m^{2}" },
    { symbol: "\\hat n", meaning: "chosen unit normal to the surface", unit: "1" },
    { symbol: "\\vec B,B,\\Phi_B", meaning: "magnetic field, its magnitude, and linked signed magnetic flux", unit: "T, T, Wb" },
    { symbol: "B_n,A", meaning: "signed magnetic-field component along the normal and loop area", unit: "T, m^{2}" },
    { symbol: "\\mathcal E,V", meaning: "signed emf and measured voltage magnitude", unit: "V, V" },
    { symbol: "\\vec E", meaning: "induced electric field", unit: "V m^{-1}" },
    { symbol: "I,R", meaning: "signed induced current and circuit resistance", unit: "A, \\Omega" },
    { symbol: "t", meaning: "time", unit: "s" },
  ]}
/>

## The Core Method

Choose a traversal direction around the closed contour \\(\mathcal C\\). Curl the fingers of the right hand in that direction; the thumb defines the positive surface normal \\(\hat n\\), so \\(d\vec S=\hat n\,dS\\). The linked signed flux is then

\\[
\Phi_B=\int_S\vec B\cdot d\vec S\tag*{[1]}
\\]

Flux is positive where \\(\vec B\\) points with \\(\hat n\\) and negative where it points against \\(\hat n\\). Faraday's law uses the same contour orientation to define positive emf.

\\[
\mathcal E=-\frac{d\Phi_B}{dt}\tag*{[2]}
\\]

On this page, \\(\mathcal E\\) carries the orientation-dependent sign in equation [2], while \\(V=|\mathcal E|\\) is the voltage magnitude a meter reports when its lead ordering is not specified. This keeps magnitude and direction distinct.

For a fixed flat loop of area \\(A\\) in a spatially uniform field parallel to \\(\hat n\\), the signed flux is the field component \\(B_n\\) along the chosen normal multiplied by area.

\\[
\Phi_B=B_n(t)A\tag*{[3]}
\\]

Because the loop is stationary and its area is constant, only the field changes with time.

\\[
\frac{d\Phi_B}{dt}=A\frac{dB_n}{dt}\tag*{[4]}
\\]

Substituting equation [4] into Faraday's law gives the signed emf for a changing field.

\\[
\mathcal E=-A\frac{dB_n}{dt}\tag*{[5]}
\\]

Flux can also change while the field stays constant. If a perpendicular uniform field of signed component \\(B_n\\) passes through a time-dependent overlap area \\(A(t)\\), then

\\[
\Phi_B=B_nA(t)\tag*{[6]}
\\]

Now the field is constant, so differentiating the product leaves only the changing-area term.

\\[
\frac{d\Phi_B}{dt}=B_n\frac{dA}{dt}\tag*{[7]}
\\]

Faraday's law therefore gives the signed emf associated with changing area.

\\[
\mathcal E=-B_n\frac{dA}{dt}\tag*{[8]}
\\]

Lenz's law determines the physical direction. First decide whether the external signed flux is increasing or decreasing; then choose the induced current whose own magnetic field resists that change. For a resistive loop, the sign of the current follows the chosen contour direction.

\\[
I=\frac{\mathcal E}{R}\tag*{[9]}
\\]

Opposing the change is not the same as opposing the field. If an external field into the page is increasing, the induced field points out of the page; if that same external field is decreasing, the induced field points into the page to resist the decrease.

For a stationary contour, emf is the circulation of the induced electric field around the complete closed path. The directed element \\(d\vec l\\) follows the chosen positive traversal direction.

\\[
\mathcal E=\oint_{\mathcal C}\vec E\cdot d\vec l\tag*{[10]}
\\]

Combining the circulation definition with Faraday's law connects a changing linked magnetic flux to a circulating electric field, even where the magnetic field at the contour is zero.

\\[
\oint_{\mathcal C}\vec E\cdot d\vec l=-\frac{d}{dt}\int_S\vec B\cdot d\vec S\tag*{[11]}
\\]

Equation [11] is the integral field law needed here. Converting it into a local curl equation requires an additional theorem and is not part of this topic.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Emf from a uniformly changing field",
      question: "A stationary single loop of area \\(2.0\\times10^{-2}\\,\\mathrm{m^{2}}\\) is perpendicular to a uniform magnetic field whose magnitude increases at \\(0.30\\,\\mathrm{T\\,s^{-1}}\\). Find the induced voltage magnitude.",
      answer: "The loop area and orientation are fixed, so use the changing-field form. The magnitude is \\[V=|\\mathcal E|=A\\left|\\frac{dB}{dt}\\right|=(2.0\\times10^{-2})(0.30)=6.0\\times10^{-3}\\,\\mathrm V.\\] **Final result:** the induced voltage magnitude is \\(6.0\\,\\mathrm{mV}\\). The direction cannot be assigned until a surface normal or a view of the field direction is specified; inserting a minus sign into a magnitude calculation would mix conventions.",
    },
    {
      title: "Current direction for an increasing field into the page",
      question: "Viewed face-on, the magnetic field through a conducting loop points into the page and is increasing. Determine the induced conventional-current direction.",
      answer: "The external flux into the page is increasing. Lenz's law requires the induced magnetic field to point out of the page so that it opposes that increase. Curl the right-hand fingers in the current direction while the thumb points out of the page: the fingers curl anticlockwise. \\[\\text{increasing field into page}\\;\\Longrightarrow\\;\\text{induced field out of page}\\;\\Longrightarrow\\;\\text{anticlockwise current}.\\] **Final result:** the induced conventional current is anticlockwise. It does not oppose the existing into-page field in every situation; if that field were decreasing, the induced current would instead be clockwise to support it.",
    },
  ]}
/>
`;
