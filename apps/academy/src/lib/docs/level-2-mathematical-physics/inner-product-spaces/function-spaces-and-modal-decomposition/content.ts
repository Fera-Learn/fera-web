export const content = String.raw`## Principle

A plucked string can begin in one smooth shape even though it vibrates as a mixture of simpler standing-wave shapes. Treating each complete profile as one vector lets us measure how much of every standing-wave mode is present.

The profiles must share one fixed interval, and addition and scaling act point by point. Projection then extracts each modal contribution.

Objective: verify square integrability, calculate a function norm, and derive modal projection coefficients for a fixed-end string profile.

Prerequisite: familiarity with definite integration, integration by parts, trigonometric functions, and inner products.

## Notation

<Notation
  items={[
    { symbol: "L", meaning: "fixed positive string length \\(L\\)", unit: "m" },
    { symbol: "x", meaning: "position \\(x\\) on the fixed domain \\([0,L]\\)", unit: "m" },
    { symbol: "t", meaning: "time \\(t\\)", unit: "s" },
    { symbol: "A", meaning: "constant displacement scale \\(A\\)", unit: "m" },
    { symbol: "u(x,0)", meaning: "initial string displacement \\(u(x,0)\\) on \\([0,L]\\)", unit: "m" },
    { symbol: "L^2([0,L])", meaning: "complex square-integrable functions in \\(L^2([0,L])\\) on the fixed interval \\([0,L]\\), identified when equal almost everywhere" },
    { symbol: "f,g", meaning: "functions \\(f\\) and \\(g\\) in \\(L^2([0,L])\\)" },
    { symbol: "\\phi_n(x)", meaning: "the dimensionless fixed-end mode \\(\\phi_n(x)\\)" },
    { symbol: "m,n", meaning: "positive integer mode numbers \\(m\\) and \\(n\\)" },
    { symbol: "\\delta_{mn}", meaning: "Kronecker delta \\(\\delta_{mn}\\), equal to one for \\(m=n\\) and zero otherwise" },
    { symbol: "\\langle f|g\\rangle", meaning: "physics-convention inner product, conjugate-linear in \\(f\\) and linear in \\(g\\)" },
    { symbol: "\\|f\\|", meaning: "norm \\(\\|f\\|\\) induced by the inner product" },
    { symbol: "a_n", meaning: "modal coefficient \\(a_n\\) multiplying \\(\\phi_n\\)", unit: "m" },
    { symbol: "\\operatorname{proj}_{\\phi_n}u", meaning: "orthogonal projection of \\(u\\) onto the mode \\(\\phi_n\\)", unit: "m" },
    { symbol: "y", meaning: "dimensionless coordinate \\(y=x/L\\)" },
    { symbol: "q", meaning: "abbreviation \\(q=n\\pi\\) used during integration" },
    { symbol: "u_5", meaning: "truncation \\(u_5\\) containing modes \\(1\\), \\(3\\), and \\(5\\)", unit: "m" },
  ]}
/>

## The Core Method

A function on one fixed interval behaves like a vector: functions add point by point and can be multiplied by scalars. To measure the size of such a profile, require its squared magnitude to have a finite integral. The resulting fixed-domain function space is

\\[
L^2([0,L])
=\left\{f:\int_0^L|f(x)|^2\,dx\lt\infty\right\},
\tag*{[1]}
\\]

where functions equal almost everywhere represent the same element. The physics-convention inner product and norm are

\\[
\langle f|g\rangle=\int_0^L f^*(x)g(x)\,dx,
\qquad
\|f\|=\sqrt{\langle f|f\rangle}.
\tag*{[2]}
\\]

For a string fixed at both ends, the normal modes are

\\[
\phi_n(x)=\sin\left(\frac{n\pi x}{L}\right),
\qquad
n=1,2,3,\ldots,
\tag*{[3]}
\\]

and direct integration gives their orthogonality and squared norm:

\\[
\langle\phi_m|\phi_n\rangle
=\int_0^L\sin\left(\frac{m\pi x}{L}\right)
\sin\left(\frac{n\pi x}{L}\right)\,dx
=\frac{L}{2}\delta_{mn}.
\tag*{[4]}
\\]

Because the inner product is linear in its second argument, the coefficient and projection have the order

\\[
a_n=\frac{\langle\phi_n|u\rangle}{\langle\phi_n|\phi_n\rangle},
\qquad
\operatorname{proj}_{\phi_n}u=a_n\phi_n.
\tag*{[5]}
\\]

For a complete mode set, the modal series is understood as convergence in the \\(L^2\\) norm:

\\[
u(x,0)=\sum_{n=1}^{\infty}a_n\phi_n(x).
\tag*{[6]}
\\]

Now take the parabolic initial displacement

\\[
u(x,0)=A\left(\frac{x}{L}-\frac{x^2}{L^2}\right).
\tag*{[7]}
\\]

It is continuous on the finite interval \\([0,L]\\), hence square-integrable. To calculate its norm, substitute \\(y=x/L\\), so \\(x=Ly\\) and \\(dx=L\,dy\\):

\\[
\begin{aligned}
\|u\|^2
&=|A|^2\int_0^L\left(\frac{x}{L}-\frac{x^2}{L^2}\right)^2\,dx\\
&=|A|^2L\int_0^1(y-y^2)^2\,dy\\
&=|A|^2L\int_0^1(y^2-2y^3+y^4)\,dy.
\end{aligned}
\tag*{[8]}
\\]

Integrate each power and combine the fractions explicitly:

\\[
\begin{aligned}
\|u\|^2
&=|A|^2L\left[\frac{y^3}{3}-\frac{y^4}{2}+\frac{y^5}{5}\right]_0^1\\
&=|A|^2L\left(\frac13-\frac12+\frac15\right)\\
&=|A|^2L\left(\frac{10-15+6}{30}\right)
=\frac{|A|^2L}{30}.
\end{aligned}
\tag*{[9]}
\\]

Taking the nonnegative square root yields

\\[
\|u\|=|A|\sqrt{\frac{L}{30}}.
\tag*{[10]}
\\]

The denominator in equation \\([5]\\) follows from equation \\([4]\\):

\\[
\langle\phi_n|\phi_n\rangle=\frac{L}{2}.
\tag*{[11]}
\\]

For the numerator, use the same substitution and then set \\(q=n\pi\\):

\\[
\begin{aligned}
\langle\phi_n|u\rangle
&=A\int_0^L\sin\left(\frac{n\pi x}{L}\right)
\left(\frac{x}{L}-\frac{x^2}{L^2}\right)\,dx\\
&=AL\int_0^1(y-y^2)\sin(n\pi y)\,dy\\
&=AL\int_0^1(y-y^2)\sin(qy)\,dy.
\end{aligned}
\tag*{[12]}
\\]

Integrating the two polynomial terms by parts gives

\\[
\begin{aligned}
\int y\sin(qy)\,dy
&=-\frac{y\cos(qy)}{q}+\frac{\sin(qy)}{q^2},\\
\int y^2\sin(qy)\,dy
&=-\frac{y^2\cos(qy)}{q}
+\frac{2y\sin(qy)}{q^2}
+\frac{2\cos(qy)}{q^3}.
\end{aligned}
\tag*{[13]}
\\]

Subtract the second antiderivative from the first and evaluate both endpoints:

\\[
\begin{aligned}
\int_0^1(y-y^2)\sin(qy)\,dy
&=\left[
\frac{(y^2-y)\cos(qy)}{q}
+\frac{(1-2y)\sin(qy)}{q^2}
-\frac{2\cos(qy)}{q^3}
\right]_0^1\\
&=-\frac{\sin q}{q^2}-\frac{2\cos q}{q^3}+\frac{2}{q^3}\\
&=\frac{2[1-(-1)^n]}{n^3\pi^3},
\end{aligned}
\tag*{[14]}
\\]

where \\(\sin(n\pi)=0\\) and \\(\cos(n\pi)=(-1)^n\\). Substitute equations \\([11]\\), \\([12]\\), and \\([14]\\) into equation \\([5]\\):

\\[
\begin{aligned}
a_n
&=\frac{AL\,2[1-(-1)^n]/(n^3\pi^3)}{L/2}\\
&=\frac{4A[1-(-1)^n]}{n^3\pi^3}
=\begin{cases}
\dfrac{8A}{n^3\pi^3},&n\text{ odd},\\
0,&n\text{ even}.
\end{cases}
\end{aligned}
\tag*{[15]}
\\]

The graph compares the initial shape with the first three nonzero contributions, using normalized position \\(x/L\\) and displacement \\(u/A\\).

<CartesianGrid
  className="mx-auto max-w-xl"
  height={300}
  title="Modal decomposition of a parabolic initial profile"
  caption="The broad first mode nearly reproduces the initial profile; the third and fifth modes provide much smaller oscillatory corrections."
  xRange={{ min: 0, max: 1, step: 0.2, label: "normalized position x/L" }}
  yRange={{ min: -0.025, max: 0.275, step: 0.05, label: "normalized displacement u/A" }}
>
  <Curve
    color="var(--chart-1)"
    points={[
      { x: 0.00, y: 0.00000 },
      { x: 0.05, y: 0.04750 },
      { x: 0.10, y: 0.09000 },
      { x: 0.15, y: 0.12750 },
      { x: 0.20, y: 0.16000 },
      { x: 0.25, y: 0.18750 },
      { x: 0.30, y: 0.21000 },
      { x: 0.35, y: 0.22750 },
      { x: 0.40, y: 0.24000 },
      { x: 0.45, y: 0.24750 },
      { x: 0.50, y: 0.25000 },
      { x: 0.55, y: 0.24750 },
      { x: 0.60, y: 0.24000 },
      { x: 0.65, y: 0.22750 },
      { x: 0.70, y: 0.21000 },
      { x: 0.75, y: 0.18750 },
      { x: 0.80, y: 0.16000 },
      { x: 0.85, y: 0.12750 },
      { x: 0.90, y: 0.09000 },
      { x: 0.95, y: 0.04750 },
      { x: 1.00, y: 0.00000 },
    ]}
    smooth
  />
  <Curve
    color="var(--chart-2)"
    dashed
    points={[
      { x: 0.00, y: 0.00000 },
      { x: 0.05, y: 0.04036 },
      { x: 0.10, y: 0.07973 },
      { x: 0.15, y: 0.11714 },
      { x: 0.20, y: 0.15166 },
      { x: 0.25, y: 0.18244 },
      { x: 0.30, y: 0.20874 },
      { x: 0.35, y: 0.22989 },
      { x: 0.40, y: 0.24538 },
      { x: 0.45, y: 0.25484 },
      { x: 0.50, y: 0.25801 },
      { x: 0.55, y: 0.25484 },
      { x: 0.60, y: 0.24538 },
      { x: 0.65, y: 0.22989 },
      { x: 0.70, y: 0.20874 },
      { x: 0.75, y: 0.18244 },
      { x: 0.80, y: 0.15166 },
      { x: 0.85, y: 0.11714 },
      { x: 0.90, y: 0.07973 },
      { x: 0.95, y: 0.04036 },
      { x: 1.00, y: 0.00000 },
    ]}
    smooth
  />
  <Curve
    color="var(--chart-3)"
    dashed
    points={[
      { x: 0.00, y: 0.00000 },
      { x: 0.05, y: 0.00434 },
      { x: 0.10, y: 0.00773 },
      { x: 0.15, y: 0.00944 },
      { x: 0.20, y: 0.00909 },
      { x: 0.25, y: 0.00676 },
      { x: 0.30, y: 0.00295 },
      { x: 0.35, y: -0.00149 },
      { x: 0.40, y: -0.00562 },
      { x: 0.45, y: -0.00851 },
      { x: 0.50, y: -0.00956 },
      { x: 0.55, y: -0.00851 },
      { x: 0.60, y: -0.00562 },
      { x: 0.65, y: -0.00149 },
      { x: 0.70, y: 0.00295 },
      { x: 0.75, y: 0.00676 },
      { x: 0.80, y: 0.00909 },
      { x: 0.85, y: 0.00944 },
      { x: 0.90, y: 0.00773 },
      { x: 0.95, y: 0.00434 },
      { x: 1.00, y: 0.00000 },
    ]}
    smooth
  />
  <Curve
    color="var(--chart-4)"
    dashed
    points={[
      { x: 0.00, y: 0.00000 },
      { x: 0.05, y: 0.00146 },
      { x: 0.10, y: 0.00206 },
      { x: 0.15, y: 0.00146 },
      { x: 0.20, y: 0.00000 },
      { x: 0.25, y: -0.00146 },
      { x: 0.30, y: -0.00206 },
      { x: 0.35, y: -0.00146 },
      { x: 0.40, y: 0.00000 },
      { x: 0.45, y: 0.00146 },
      { x: 0.50, y: 0.00206 },
      { x: 0.55, y: 0.00146 },
      { x: 0.60, y: 0.00000 },
      { x: 0.65, y: -0.00146 },
      { x: 0.70, y: -0.00206 },
      { x: 0.75, y: -0.00146 },
      { x: 0.80, y: 0.00000 },
      { x: 0.85, y: 0.00146 },
      { x: 0.90, y: 0.00206 },
      { x: 0.95, y: 0.00146 },
      { x: 1.00, y: 0.00000 },
    ]}
    smooth
  />
  <Annotation point={{ x: 0.48, y: 0.2496 }} label="initial profile" offset={{ x: -105, y: -42 }} />
  <Annotation point={{ x: 0.50, y: 0.2580 }} label="first mode" offset={{ x: 28, y: -28 }} />
  <Annotation point={{ x: 0.17, y: 0.0095 }} label="third mode" offset={{ x: 18, y: -30 }} />
  <Annotation point={{ x: 0.10, y: 0.0021 }} label="fifth mode" offset={{ x: 20, y: 25 }} />
</CartesianGrid>

The first mode captures the broad arch. The smaller third and fifth contributions correct the remaining shape; even modes vanish because the profile is symmetric about the midpoint, not because the infinite series ends.


<PhysicsExamples
  collapsible
  items={[
    {
      title: "First three nonzero modal projections",
      question: "For the parabolic initial displacement, write the projections onto the first, third, and fifth normal modes and form the corresponding three-mode approximation.",
      answer: "Equation \\([15]\\) gives the odd coefficients directly: \\[a_1=\\frac{8A}{\\pi^3},\\qquad a_3=\\frac{8A}{27\\pi^3},\\qquad a_5=\\frac{8A}{125\\pi^3}.\\tag*{[16]}\\] Multiply each coefficient by its own mode; the mode index must remain inside the sine: \\[\\operatorname{proj}_{\\phi_1}u=\\frac{8A}{\\pi^3}\\sin\\left(\\frac{\\pi x}{L}\\right).\\tag*{[17]}\\] \\[\\operatorname{proj}_{\\phi_3}u=\\frac{8A}{27\\pi^3}\\sin\\left(\\frac{3\\pi x}{L}\\right),\\qquad \\operatorname{proj}_{\\phi_5}u=\\frac{8A}{125\\pi^3}\\sin\\left(\\frac{5\\pi x}{L}\\right).\\tag*{[18]}\\] Add the three projections to obtain the truncation. Final result: \\(u_5(x)=\\frac{8A}{\\pi^3}[\\sin(\\pi x/L)+\\sin(3\\pi x/L)/27+\\sin(5\\pi x/L)/125]\\), containing the first three nonzero modes.",
    },
    {
      title: "Norm captured by the first mode",
      question: "Assume \\(A\\ne0\\). What fraction of \\(\\|u\\|^2\\) is captured by the first projection?",
      answer: "Orthogonality gives \\(\\|a_1\\phi_1\\|^2=|a_1|^2\\|\\phi_1\\|^2\\). Use \\(a_1=8A/\\pi^3\\) and \\(\\|\\phi_1\\|^2=L/2\\): \\[\\|a_1\\phi_1\\|^2=\\frac{64|A|^2}{\\pi^6}\\frac{L}{2}=\\frac{32|A|^2L}{\\pi^6}.\\tag*{[19]}\\] Because \\(A\\ne0\\) and the string length is positive, \\(\\|u\\|^2\\ne0\\), so division and cancellation are valid. Divide by equation \\([9]\\), showing the cancellation explicitly: \\[\\frac{\\|a_1\\phi_1\\|^2}{\\|u\\|^2}=\\frac{32|A|^2L/\\pi^6}{|A|^2L/30}=\\frac{32\\cdot30}{\\pi^6}=\\frac{960}{\\pi^6}\\approx0.9986.\\tag*{[20]}\\] The ratio is below one, as required by orthogonal projection. Final result: the first mode captures the fraction \\(960/\\pi^6\\), approximately \\(99.86\\%\\), of the squared norm.",
    },
  ]}
/>
`;
