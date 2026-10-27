export const content = String.raw`## Principle

An extremely narrow defect can affect a state by sampling its probability at one position.

A Dirac delta perturbation models an interaction concentrated at one point. Its first-order energy shift samples the unperturbed probability density at that point, so a state with a node there is unchanged to first order.

## Notation

<Notation
  items={[
    { symbol: "\\delta(x-x_0)", meaning: "one-dimensional Dirac delta centred at x_0", unit: "m^{-1}" },
    { symbol: "\\delta^{(3)}(\\mathbf r)", meaning: "three-dimensional Dirac delta at the origin", unit: "m^{-3}" },
    { symbol: "\\kappa", meaning: "strength of a one-dimensional delta perturbation", unit: "J m" },
    { symbol: "V'(x)", meaning: "perturbing potential energy", unit: "J" },
    { symbol: "x_0,a,x", meaning: "delta position, well width, and position coordinate", unit: "m" },
    { symbol: "\\psi_n^{(0)}(x),E_n^{(1)}", meaning: "normalised unperturbed wavefunction and first-order energy shift", unit: "m^{-1/2}, J" },
    { symbol: "n", meaning: "positive-integer well quantum number" },
    { symbol: "f(x),\\mathbf r", meaning: "arbitrary test function and three-dimensional position vector" },
  ]}
/>

## The Core Method

The one-dimensional delta is defined by its action under an integral over any domain containing \\(x_0\\):

\\[
\int f(x)\delta(x-x_0)\,dx=f(x_0),
\qquad
\int\delta(x-x_0)\,dx=1.
\tag*{[1]}
\\]

The second identity in [1], \\(\int\delta(x-x_0)\,dx=1\\), requires the delta's units multiplied by the units of \\(dx\\) to be dimensionless. Since \\(dx\\) has units of metres, \\(\delta(x-x_0)\\) has units \\(\mathrm{m^{-1}}\\). Therefore a physical one-dimensional perturbation

\\[
V'(x)=\kappa\delta(x-x_0)
\tag*{[2]}
\\]

has energy units only when \\(\kappa\\) has units \\(\mathrm{J\,m}\\). Applying non-degenerate first-order theory to a normalised state gives

\\[
\begin{aligned}
E_n^{(1)}
&=\int \psi_n^{(0)*}(x)\kappa\delta(x-x_0)\psi_n^{(0)}(x)\,dx\\
&=\kappa|\psi_n^{(0)}(x_0)|^2.
\end{aligned}
\tag*{[3]}
\\]

For an infinite well on \\(0<x<a\\),

\\[
\psi_n^{(0)}(x)=\sqrt{\frac{2}{a}}\sin\left(\frac{n\pi x}{a}\right),
\qquad
E_n^{(1)}=\frac{2\kappa}{a}\sin^2\left(\frac{n\pi x_0}{a}\right).
\tag*{[4]}
\\]

At the centre, \\(x_0=a/2\\), [4] becomes

\\[
E_n^{(1)}=
\begin{cases}
2\kappa/a,&n\text{ odd},\\
0,&n\text{ even}.
\end{cases}
\tag*{[5]}
\\]

Even \\(n\\) states have a node at the centre, so the point perturbation samples zero probability density. A positive \\(\kappa\\) raises odd levels and a negative \\(\kappa\\) lowers them.

Dimensions change with spatial dimension. In three dimensions,

\\[
\int f(\mathbf r)\delta^{(3)}(\mathbf r)\,d^3r=f(\mathbf 0),
\qquad
[\delta^{(3)}]=\mathrm{m^{-3}}.
\tag*{[6]}
\\]

Consequently the coefficient of a three-dimensional contact potential must have units \\(\mathrm{J\,m^3}\\), not \\(\mathrm{J\,m}\\). Confusing these coefficients is a dimensional error.

The result remains perturbative only when the sampled shift in [3] is small compared with the unperturbed gaps to states coupled by the contact interaction.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Central bump in a square well",
      question: "A well has width \\(a=1.0\\,\\mathrm{nm}\\) and a central perturbation \\(V'(x)=\\kappa\\delta(x-a/2)\\), where \\(\\kappa=2.0\\times10^{-30}\\,\\mathrm{J\\,m}\\). Find the first-order shifts for \\(n=1\\) and \\(n=2\\).",
      answer: "At the centre, equation [5] applies. For \\(n=1\\), \\[E_1^{(1)}=\\frac{2\\kappa}{a}=\\frac{2(2.0\\times10^{-30})}{1.0\\times10^{-9}}=4.0\\times10^{-21}\\,\\mathrm J.\\] This is \\(4.0\\times10^{-21}/(1.602\\times10^{-19})=2.5\\times10^{-2}\\,\\mathrm{eV}\\). For \\(n=2\\), the wavefunction has a central node, so \\(E_2^{(1)}=0\\). **Final result:** \\(E_1^{(1)}=0.025\\,\\mathrm{eV}\\) and \\(E_2^{(1)}=0\\).",
    },
    {
      title: "Moving the point perturbation",
      question: "Where should a positive delta perturbation be placed to maximise the first-order shift of a chosen state?",
      answer: "Equation [3] shows that the shift is proportional to \\(|\\psi_n^{(0)}(x_0)|^2\\). Place the delta at an antinode of the chosen state; placing it at a node gives zero shift. **Final result:** maxima of the unperturbed probability density produce the largest positive first-order correction.",
    },
  ]}
/>
`;
