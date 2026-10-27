export const content = String.raw`## Principle

A path integral accumulates infinitesimal contributions along a specified route through state space. Exact differentials give the same integral for every route between two endpoints, whereas inexact differentials give different values and therefore represent path functions.

## Notation

<Notation
  items={[
    { symbol: "x,y", meaning: "dimensionless coordinates in state space", unit: "1" },
    { symbol: "X,Y", meaning: "dimensionless final coordinate values", unit: "1" },
    { symbol: "O,A,B", meaning: "origin and labels for the two paths" },
    { symbol: "F", meaning: "path-dependent accumulated quantity in the model", unit: "1" },
    { symbol: "\\delta F", meaning: "inexact differential form integrated along a path", unit: "1" },
    { symbol: "z,dz", meaning: "state function and its exact differential", unit: "1" },
    { symbol: "Q,W", meaning: "finite heat into a thermodynamic system and work done by it", unit: "J, J" },
    { symbol: "\\delta Q,\\delta W", meaning: "inexact infinitesimal heat and work", unit: "J, J" },
  ]}
/>

## The Core Method

Consider the inexact differential

\\[
\delta F=x\,dx+x\,dy,
\tag*{[1]}
\\]

and integrate from \\(O=(0,0)\\) to \\((X,Y)\\). Path A first follows the \\(x\\) axis from \\((0,0)\\) to \\((X,0)\\), then rises at fixed \\(x=X\\). On the first segment \\(dy=0\\); on the second, \\(dx=0\\). Therefore

\\[
\begin{aligned}
\int_A\delta F
&=\int_0^X x\,dx+\int_0^Y X\,dy\\
&=\left[\frac{x^2}{2}\right]_0^X+\left[Xy\right]_0^Y\\
&=\frac{X^2}{2}+XY.
\end{aligned}
\tag*{[2]}
\\]

Path B first follows the \\(y\\) axis at \\(x=0\\), then moves horizontally from \\((0,Y)\\) to \\((X,Y)\\). The first segment contributes zero and the second has \\(dy=0\\):

\\[
\begin{aligned}
\int_B\delta F
&=\int_0^Y 0\,dy+\int_0^X x\,dx\\
&=0+\left[\frac{x^2}{2}\right]_0^X\\
&=\frac{X^2}{2}.
\end{aligned}
\tag*{[3]}
\\]

Subtracting the path values gives

\\[
\int_A\delta F-\int_B\delta F=XY,
\tag*{[4]}
\\]

which proves path dependence whenever \\(XY\ne0\\). By contrast, for the state function \\(z=x^2+y^2\\),

\\[
dz=2x\,dx+2y\,dy,
\qquad
\int_O^{(X,Y)}dz=X^2+Y^2
\tag*{[5]}
\\]

along every path. Thermodynamic heat and work behave like [1], while changes in state functions behave like [5].

<PhysicsExamples collapsible
  items={[
    {
      title: "Evaluate two routes to one endpoint",
      question: "For the inexact form in equation \\([1]\\), calculate the path integrals from the origin to \\((X,Y)=(2,3)\\) along paths A and B.",
      answer: "Equation \\([2]\\) gives \\[\\int_A\\delta F=\\frac{2^2}{2}+(2)(3)=2+6=8.\\] Equation \\([3]\\) gives \\[\\int_B\\delta F=\\frac{2^2}{2}=2.\\] Their difference is \\(8-2=6\\), which also equals \\(XY=(2)(3)=6\\) from equation \\([4]\\). The unequal values provide a direct check of path dependence. **Final result:** path A gives \\(8\\), while path B gives \\(2\\).",
    },
    {
      title: "Interpret a thermodynamic cycle",
      question: "A system returns to its initial thermodynamic state after a cycle. Must its net heat and net work each be zero?",
      answer: "No. Returning to the initial state makes every exact state-function integral vanish, as illustrated by equation \\([5]\\). Heat and work are path functions analogous to equation \\([1]\\), so their closed-path integrals can be nonzero. Energy conservation requires the net heat into the system to equal the net work done by the system over a complete cycle, but does not require either transfer to vanish. **Final result:** state-function changes vanish over the cycle, while net heat and net work may both be nonzero and equal under the stated sign convention.",
    },
  ]}
/>
`;
