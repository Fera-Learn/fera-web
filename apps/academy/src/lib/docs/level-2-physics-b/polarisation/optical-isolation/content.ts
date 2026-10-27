export const content = String.raw`## Principle

A Faraday isolator combines an input polariser, a non-reciprocal \\(45^\circ\\) rotator, and an analyser at \\(45^\circ\\). Forward light is aligned with the analyser; reverse light receives another laboratory-sense \\(45^\circ\\) rotation and becomes crossed with the input polariser.

## Notation

<Notation
  items={[
    { symbol: "\\hat p_0,\\hat p_{45},\\hat p_{90}", meaning: "linear axes at zero, 45, and 90 degrees in fixed laboratory coordinates" },
    { symbol: "F", meaning: "ideal positive 45-degree Faraday rotation matrix" },
    { symbol: "P_\\alpha", meaning: "ideal projection onto the axis at angle alpha" },
    { symbol: "\\vec a_f,\\vec a_b", meaning: "forward and backward Jones coefficient columns" },
    { symbol: "I_f,I_b,I_{b0}", meaning: "forward output, backward output, and backward incident intensities", unit: "W m^{-2}" },
    { symbol: "\\epsilon", meaning: "single-pass Faraday rotation error", unit: "rad" },
  ]}
/>

## The Core Method

The forward field is rotated into the analyser axis. Reflected light receives another rotation in the same laboratory sense, so it returns perpendicular to the entrance polariser and is blocked.

<PhysicsDiagram slug="faraday-optical-isolator" />

Choose

\\[
\hat p_0=\begin{pmatrix}1\\0\end{pmatrix},
\quad
\hat p_{45}=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},
\quad
\hat p_{90}=\begin{pmatrix}0\\1\end{pmatrix},
\quad
F=\frac1{\sqrt2}\begin{pmatrix}1&-1\\1&1\end{pmatrix}.
\tag*{[1]}
\\]

Forward light selected by the input polariser rotates onto the analyser axis:

\\[
\vec a_f=P_{45}F\hat p_0
=P_{45}\hat p_{45}
=\hat p_{45}.
\tag*{[2]}
\\]

Return light entering along the analyser axis experiences the same laboratory-sense Faraday matrix:

\\[
F\hat p_{45}=\hat p_{90},
\qquad
\vec a_b=P_0F\hat p_{45}=P_0\hat p_{90}=\vec0.
\tag*{[3]}
\\]

Thus ideal forward transmission is allowed and ideal backward transmission is blocked. Replacing the Faraday rotator by a reciprocal \\(45^\circ\\) rotator would undo the angle on return and destroy isolation.

<PhysicsExamples collapsible
  items={[
    {
      title: "Nonideal return extinction",
      question: "The Faraday rotation is \\(45.0^\\circ+\\epsilon\\) on each pass, with \\(\\epsilon=1.00^\\circ\\). What fraction of reverse intensity passes the zero-degree input polariser?",
      answer: "Reverse light starts at \\(45.0^\\circ\\) and gains \\(46.0^\\circ\\), reaching \\(91.0^\\circ\\) in fixed axes. Malus' law relative to the zero-degree input axis gives \\[\\frac{I_b}{I_{b0}}=\\cos^291.0^\\circ=\\sin^21.00^\\circ=3.05\\times10^{-4}.\\] **Final result:** the reverse transmitted fraction is \\(3.05\\times10^{-4}\\), about \\(0.0305\\%\\).",
    },
    {
      title: "Why reciprocity fails to isolate",
      question: "What would happen if the central element rotated forward light by \\(+45^\\circ\\) but return light by \\(-45^\\circ\\) in fixed axes?",
      answer: "Forward light would still reach the \\(45^\\circ\\) analyser. On return, the \\(45^\\circ\\) analyser state would rotate back to \\(0^\\circ\\), aligning with the input polariser instead of being blocked. **Final result:** the device would transmit in both directions and would not be an isolator.",
    },
  ]}
/>
`;
