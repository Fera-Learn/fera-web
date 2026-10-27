export const content = String.raw`## Principle

Miller indices label the orientation and spacing of families of crystal planes by taking reciprocals of their axis intercepts. A zero index means parallel to an axis, while a barred index records a negative intercept. Interplanar-spacing formulae depend on the geometry of the crystallographic axes.

## Notation

<Notation
  items={[
    { symbol: "a,b,c", meaning: "lattice parameters along the three crystallographic axes", unit: "m, m, m" },
    { symbol: "x,y,z", meaning: "coordinates measured along mutually perpendicular axes when deriving the spacing formula", unit: "m, m, m" },
    { symbol: "p,q,r", meaning: "signed axis intercepts expressed in units of a, b, and c", unit: "1" },
    { symbol: "h,k,l", meaning: "integer Miller indices", unit: "1" },
    { symbol: "(hkl)", meaning: "one plane orientation or its parallel family", unit: "1" },
    { symbol: "[uvw]", meaning: "a crystallographic direction, not a plane", unit: "1" },
    { symbol: "m", meaning: "integer labelling successive parallel planes", unit: "1" },
    { symbol: "\\vec n", meaning: "normal vector to a plane in orthogonal Cartesian coordinates", unit: "m^{-1}" },
    { symbol: "\\Delta\\vec r", meaning: "shortest displacement between adjacent parallel planes", unit: "m" },
    { symbol: "d_{hkl}", meaning: "perpendicular spacing between adjacent planes in the (hkl) family", unit: "m" },
  ]}
/>

## The Core Method

The three planes below show how the index pattern changes the intercept geometry. The \(100\) plane cuts one axis, \(110\) cuts two, and \(111\) cuts all three.

<PhysicsDiagram slug="miller-index-plane-construction" />

To index a plane, first choose a parallel member that does not pass through the origin. Read its signed intercepts as \\(pa\\), \\(qb\\), and \\(rc\\). In intercept form the plane is

\\[
\frac{x}{pa}+\frac{y}{qb}+\frac{z}{rc}=1.
\tag*{[1]}
\\]

Take the reciprocals of the dimensionless intercepts. If any reciprocals are fractional, multiply all three by the smallest common factor that produces integers:

\\[
(h:k:l)=\left(\frac1p:\frac1q:\frac1r\right)
\longrightarrow (hkl).
\tag*{[2]}
\\]

An infinite intercept has reciprocal zero, so a plane parallel to the third axis has \\(l=0\\). A negative reciprocal is written with an overbar, for example \\((1\bar{2}0)\\), not with a subtraction sign between indices. Parentheses denote planes; square brackets such as \\([uvw]\\) denote directions. Do not cancel an integer common factor automatically: \\((200)\\) is parallel to \\((100)\\), but it labels a plane family with \\(d_{200}=d_{100}/2\\) in a cubic crystal.

All parallel members of the indexed family can be written, for orthogonal axes, as

\\[
\frac{hx}{a}+\frac{ky}{b}+\frac{lz}{c}=m,
\qquad m\in\mathbb Z.
\tag*{[3]}
\\]

For mutually perpendicular Cartesian axes, the gradient of the left side of equation [3] is the plane's normal vector:

\\[
\vec n=\left(\frac ha,\frac kb,\frac lc\right),
\qquad
|\vec n|=\sqrt{\frac{h^2}{a^2}+\frac{k^2}{b^2}+\frac{l^2}{c^2}}.
\tag*{[4]}
\\]

Adjacent planes differ by one in \\(m\\). Their shortest connecting displacement \\(\Delta\vec r\\) is parallel to \\(\vec n\\), so \\(\Delta\vec r=d_{hkl}\vec n/|\vec n|\\). Subtracting equation [3] for adjacent planes gives

\\[
\begin{aligned}
\vec n\mathbin{\cdot}\Delta\vec r&=1,\\
\vec n\mathbin{\cdot}\left(d_{hkl}\frac{\vec n}{|\vec n|}\right)&=1,\\
d_{hkl}|\vec n|&=1,\\
d_{hkl}&=\frac{1}{\sqrt{h^2/a^2+k^2/b^2+l^2/c^2}}.
\end{aligned}
\tag*{[5]}
\\]

Equation [5] is the general result only for orthogonal crystallographic axes. In a cubic lattice \\(a=b=c\\), so it reduces step by step to

\\[
d_{hkl}
=\frac{1}{\sqrt{(h^2+k^2+l^2)/a^2}}
=\frac{a}{\sqrt{h^2+k^2+l^2}}.
\tag*{[6]}
\\]

Do not use equation [5] for non-orthogonal axes without the appropriate reciprocal-lattice metric. In particular, the three-index cubic expression [6] is not the spacing formula for a general hexagonal or triclinic crystal.

<PhysicsExamples collapsible
  items={[
    {
      title: "Index a plane and find its orthorhombic spacing",
      question: "A plane cuts orthogonal axes at \\(2a\\) and \\(3b\\) and is parallel to the c axis. Find its Miller indices and its spacing when \\(a=0.400\\,\\mathrm{nm}\\) and \\(b=0.600\\,\\mathrm{nm}\\).",
      answer: "The dimensionless intercepts are \\((p,q,r)=(2,3,\\infty)\\). Their reciprocals are \\((1/2,1/3,0)\\). Multiplying every entry by 6 gives the smallest integer triple \\((3,2,0)\\), so the plane is \\((320)\\). Because the axes are orthogonal, equation \\([5]\\) applies: \\[d_{320}=\\left[\\frac{3^2}{(0.400\\,\\mathrm{nm})^2}+\\frac{2^2}{(0.600\\,\\mathrm{nm})^2}+0\\right]^{-1/2}.\\] Evaluating each term gives \\[d_{320}=\\left(56.25+11.11\\right)^{-1/2}\\mathrm{nm}=0.122\\,\\mathrm{nm}.\\] The zero index is consistent with the plane being parallel to the c axis. **Final result:** the plane is \\((320)\\) and \\(d_{320}=0.122\\,\\mathrm{nm}\\).",
    },
    {
      title: "Interpret a barred and a zero index",
      question: "State the intercepts of the \\((1\\bar{2}0)\\) plane and find its spacing in a cubic crystal with \\(a=0.450\\,\\mathrm{nm}\\).",
      answer: "Invert the indices to recover dimensionless intercepts. The first is \\(p=1/1=1\\), the second is \\(q=1/(-2)=-1/2\\), and the zero third index means \\(r=\\infty\\). The plane therefore cuts the axes at \\(a\\) and \\(-b/2\\) and is parallel to the third axis. Under the stated cubic assumption, equation \\([6]\\) gives \\[d_{1\\bar{2}0}=\\frac{0.450\\,\\mathrm{nm}}{\\sqrt{1^2+(-2)^2+0^2}}=\\frac{0.450\\,\\mathrm{nm}}{\\sqrt5}=0.201\\,\\mathrm{nm}.\\] Squaring the indices makes the spacing independent of which intercept is negative, but the overbar remains essential for the plane orientation. **Final result:** the intercepts are \\(a,-b/2,\\infty\\), and the cubic spacing is \\(0.201\\,\\mathrm{nm}\\).",
    },
  ]}
/>
`;
