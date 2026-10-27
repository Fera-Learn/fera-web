export const content = String.raw`## Principle

The hexagonal close-packed (HCP) structure stacks close-packed triangular layers in an ABAB pattern. In the ideal hard-sphere geometry, each atom touches twelve neighbours and the occupied-volume fraction is the same as for face-centred cubic packing, although the stacking sequences differ.

## Notation

<Notation
  items={[
    { symbol: "A,B,\\mathcal B", meaning: "the two alternating layer positions and the atomic basis", unit: "1" },
    { symbol: "\\vec a_1,\\vec a_2,\\vec a_3", meaning: "primitive vectors of the hexagonal Bravais lattice, with \\vec a_3 along the stacking axis", unit: "m, m, m" },
    { symbol: "a,c", meaning: "basal nearest-neighbour spacing and repeat distance along the stacking axis", unit: "m, m" },
    { symbol: "t", meaning: "perpendicular separation between adjacent close-packed layers", unit: "m" },
    { symbol: "R", meaning: "hard-sphere atomic radius", unit: "m" },
    { symbol: "Z", meaning: "coordination number", unit: "1" },
    { symbol: "N_{\\mathrm{atom}}", meaning: "atoms in the conventional hexagonal prism", unit: "1" },
    { symbol: "V_{\\mathrm{cell}},V_{\\mathrm{sph}}", meaning: "conventional-cell volume and volume of one hard sphere", unit: "m^{3}, m^{3}" },
    { symbol: "\\eta", meaning: "atomic packing fraction", unit: "1" },
  ]}
/>

## The Core Method

Each A layer is a triangular net. The B atoms sit above one set of triangular hollows, and the third layer returns directly above A, producing ABAB stacking.

<PhysicsDiagram slug="hexagonal-close-packing" />

The alternating colours mark the two lateral layer positions. Every second layer returns over the first, which is the visual meaning of the ABAB sequence. The structure can be represented by a primitive hexagonal Bravais lattice with a two-atom basis

\\[
\mathcal B=\left\{(0,0,0),\left(\frac23,\frac13,\frac12\right)\right\},
\qquad
\angle(\vec a_1,\vec a_2)=120^\circ.
\tag*{[1]}
\\]

For ideal touching spheres, three A-layer centres form an equilateral triangle of side \\(a\\). The horizontal distance from its centre to a vertex is \\(a/\sqrt3\\). A B-layer centre lies a distance \\(t\\) above the triangle centre and a distance \\(a\\) from each vertex. Pythagoras therefore gives

\\[
a^2=t^2+\left(\frac{a}{\sqrt3}\right)^2
=t^2+\frac{a^2}{3}
\quad\Longrightarrow\quad
t^2=\frac{2a^2}{3}
\quad\Longrightarrow\quad
t=a\sqrt{\frac23}.
\tag*{[2]}
\\]

The repeat distance from one A layer to the next A layer is twice the adjacent-layer separation. Hence

\\[
c=2t=2a\sqrt{\frac23}=a\sqrt{\frac83},
\qquad
\frac ca=\sqrt{\frac83}\simeq1.633.
\tag*{[3]}
\\]

One atom has six nearest neighbours in its own layer, three in the layer above, and three below:

\\[
Z=6+3+3=12.
\tag*{[4]}
\\]

The conventional hexagonal prism is not primitive. Its twelve corner atoms contribute \\(12/6\\), its two basal-face atoms contribute \\(2/2\\), and its three interior atoms contribute three, so

\\[
N_{\mathrm{atom}}
=12\left(\frac16\right)+2\left(\frac12\right)+3
=2+1+3=6.
\tag*{[5]}
\\]

The regular-hexagon base has area \\(3\sqrt3a^2/2\\), so the conventional-cell volume and touching condition are

\\[
V_{\mathrm{cell}}=\frac{3\sqrt3}{2}a^2c,
\qquad
a=2R,
\qquad
V_{\mathrm{sph}}=\frac43\pi R^3.
\tag*{[6]}
\\]

Substitute equation [3], \\(a=2R\\), and the six-atom count into the occupied-volume fraction:

\\[
\begin{aligned}
\eta
&=\frac{N_{\mathrm{atom}}V_{\mathrm{sph}}}{V_{\mathrm{cell}}}\\
&=\frac{6(4\pi R^3/3)}{(3\sqrt3/2)(2R)^2[2R\sqrt{8/3}]}\\
&=\frac{8\pi R^3}{24\sqrt2R^3}
=\frac{\pi}{3\sqrt2}
=\frac{\pi}{\sqrt{18}}
\simeq0.740.
\end{aligned}
\tag*{[7]}
\\]

The ratio and packing fraction in equations [3] and [7] assume identical rigid spheres in ideal contact. Real HCP crystals can have a different \\(c/a\\) ratio, so the ideal values are geometric references rather than universal measurements.

<PhysicsExamples collapsible
  items={[
    {
      title: "Compare magnesium with ideal HCP geometry",
      question: "Magnesium has \\(a=0.321\\,\\mathrm{nm}\\) and \\(c=0.521\\,\\mathrm{nm}\\). Calculate \\(c/a\\) and its percentage difference from the ideal hard-sphere value.",
      answer: "First calculate the measured ratio: \\[\\frac ca=\\frac{0.521}{0.321}=1.623.\\] Equation \\([3]\\) gives the ideal value \\(\\sqrt{8/3}=1.633\\). Taking the ideal value as the reference, \\[\\text{percentage difference}=\\frac{1.623-1.633}{1.633}\\times100\\%=-0.61\\%.\\] The negative sign means the measured stacking-axis repeat is slightly shorter relative to the basal spacing than the ideal hard-sphere prediction. **Final result:** magnesium has \\(c/a=1.623\\), about \\(0.61\\%\\) below the ideal HCP value.",
    },
    {
      title: "Count an HCP atom's nearest neighbours",
      question: "Explain the coordination of an atom in an ideal ABAB stack and compare the result with close-packed FCC.",
      answer: "In one triangular A layer, the chosen atom touches six atoms around it. Three B-layer atoms occupy triangular hollows immediately above, and three B-layer atoms occupy corresponding hollows immediately below. Adding the separate groups gives \\(6+3+3=12\\), as in equation \\([4]\\). FCC uses ABCABC rather than ABAB stacking, but its local close-packed contact geometry also supplies twelve neighbours and its ideal packing fraction is also \\(\\pi/\\sqrt{18}\\). **Final result:** ideal HCP has coordination number 12 and packing fraction \\(0.740\\), equal to ideal FCC despite the different stacking sequence.",
    },
  ]}
/>
`;
