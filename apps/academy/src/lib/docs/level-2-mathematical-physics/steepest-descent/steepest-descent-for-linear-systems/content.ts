export const content = String.raw`## Principle

A symmetric positive-definite linear system can be viewed as a bowl-shaped landscape. Its solution lies at the unique bottom, so solving the equations is equivalent to repeatedly moving downhill.

Steepest descent chooses the negative gradient direction and then minimizes the quadratic exactly along that line. Elongated contours explain why the path can zig-zag even though the objective decreases at every non-stationary step.

Objective: derive and apply steepest descent to solve a symmetric positive-definite linear system.

Prerequisite: familiarity with gradients, matrix products, quadratic forms, and positive-definite matrices.

## Notation

<Notation
  items={[
    { symbol: "A", meaning: "real symmetric positive-definite \\(n\\)-by-\\(n\\) matrix" },
    { symbol: "\\mathbf b", meaning: "known right-hand-side vector" },
    { symbol: "\\mathbf x_k", meaning: "approximation after \\(k\\) updates" },
    { symbol: "\\phi(\\mathbf x)", meaning: "quadratic objective whose minimum solves the system" },
    { symbol: "\\mathbf r_k", meaning: "residual \\(A\\mathbf x_k-\\mathbf b\\), equal to the gradient" },
    { symbol: "\\alpha_k", meaning: "positive step length chosen by exact line search" },
  ]}
/>

## The Core Method

Associate the system \(A\mathbf x=\mathbf b\) with the scalar function

\[
\phi(\mathbf x)=\frac12\mathbf x^{\mathsf T}A\mathbf x
-\mathbf x^{\mathsf T}\mathbf b.
\tag*{[1]}
\]

Symmetry of \(A\) gives

\[
\nabla\phi(\mathbf x)=A\mathbf x-\mathbf b.
\tag*{[2]}
\]

Positive definiteness makes equation \([1]\) strictly convex, so its one stationary point is the unique global minimum. Use the residual convention

\[
\mathbf r_k=A\mathbf x_k-\mathbf b.
\tag*{[3]}
\]

The steepest-descent update is therefore

\[
\mathbf x_{k+1}=\mathbf x_k-\alpha_k\mathbf r_k.
\tag*{[4]}
\]

To choose the distance, substitute equation \([4]\) into \(\phi\) and differentiate with respect to \(\alpha_k\):

\[
\frac d{d\alpha_k}\phi(\mathbf x_k-\alpha_k\mathbf r_k)
=-\mathbf r_k^{\mathsf T}\mathbf r_k
+\alpha_k\mathbf r_k^{\mathsf T}A\mathbf r_k.
\tag*{[5]}
\]

Setting this line derivative to zero gives the exact step

\[
\boxed{
\alpha_k=\frac{\mathbf r_k^{\mathsf T}\mathbf r_k}
{\mathbf r_k^{\mathsf T}A\mathbf r_k}
}.
\tag*{[6]}
\]

The denominator is positive whenever \(\mathbf r_k\ne\mathbf0\), because \(A\) is positive definite. Equations \([3]\), \([6]\), and \([4]\) form the algorithm. Stop when the residual norm is below the chosen tolerance.

For

\[
A=\begin{pmatrix}4&1\\1&3\end{pmatrix},
\qquad
\mathbf b=\begin{pmatrix}1\\2\end{pmatrix},
\qquad
\mathbf x_0=\begin{pmatrix}0\\0\end{pmatrix},
\tag*{[7]}
\]

the first residual is \(\mathbf r_0=(-1,-2)^{\mathsf T}\) and equation \([6]\) gives \(\alpha_0=1/4\). Hence \(\mathbf x_1=(1/4,1/2)^{\mathsf T}\). Repetition approaches the exact solution \((1/11,7/11)^{\mathsf T}\).

<CartesianGrid
  className="mx-auto max-w-xl"
  height={310}
  title="Steepest-descent path for a two-variable linear system"
  caption="Exact line searches cross the narrow quadratic valley in alternating directions. The objective falls at each step even though individual coordinates do not move monotonically."
  xRange={{ min: 0, max: 0.28, step: 0.05, label: "first component x₁" }}
  yRange={{ min: 0, max: 0.7, step: 0.1, label: "second component x₂" }}
>
  <Curve
    color="var(--chart-1)"
    endArrow
    points={[
      { x: 0, y: 0 },
      { x: 0.25, y: 0.5 },
      { x: 0.083333, y: 0.583333 },
      { x: 0.104167, y: 0.625 },
      { x: 0.090278, y: 0.631944 },
      { x: 0.092014, y: 0.635417 },
      { x: 0.090856, y: 0.635995 },
    ]}
  />
  <Point color="var(--chart-2)" label="exact solution" x={0.090909} y={0.636364} />
</CartesianGrid>

With exact line search, consecutive residuals are orthogonal, which produces the visible turns. Poor conditioning stretches the contours and can make this zig-zag convergence slow; that limitation motivates more advanced methods but does not change the algorithm here.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Two exact steepest-descent steps",
      question: "For the system in equation \\([7]\\), calculate \\(\\mathbf x_1\\) and \\(\\mathbf x_2\\) from \\(\\mathbf x_0=\\mathbf0\\).",
      answer: "At \\(k=0\\), \\(\\mathbf r_0=(-1,-2)^{\\mathsf T}\\). Then \\(\\mathbf r_0^{\\mathsf T}\\mathbf r_0=5\\), \\(A\\mathbf r_0=(-6,-7)^{\\mathsf T}\\), and \\(\\mathbf r_0^{\\mathsf T}A\\mathbf r_0=20\\), so \\(\\alpha_0=1/4\\). Equation \\[4\\] gives \\(\\mathbf x_1=(1/4,1/2)^{\\mathsf T}\\). Next, \\(\\mathbf r_1=A\\mathbf x_1-\\mathbf b=(1/2,-1/4)^{\\mathsf T}\\). Its numerator is \\(5/16\\), while \\(A\\mathbf r_1=(7/4,-1/4)^{\\mathsf T}\\) gives denominator \\(15/16\\). Thus \\(\\alpha_1=1/3\\) and \\[\\mathbf x_2=\\mathbf x_1-\\frac13\\mathbf r_1=\\begin{pmatrix}1/12\\\\7/12\\end{pmatrix}.\\tag*{[8]}\\] **Final result:** \\(\\mathbf x_1=(1/4,1/2)^{\\mathsf T}\\) and \\(\\mathbf x_2=(1/12,7/12)^{\\mathsf T}\\), already close to \\((1/11,7/11)^{\\mathsf T}\\).",
    },
    {
      title: "Why a fixed step can diverge",
      question: "Apply fixed-step descent to \\(\\phi(x)=x^2/2\\), so \\(x_{k+1}=x_k-\\alpha x_k\\). Determine the step-size range that converges to zero.",
      answer: "The update simplifies to \\(x_{k+1}=(1-\\alpha)x_k\\), hence \\(x_k=(1-\\alpha)^kx_0\\). Powers tend to zero exactly when \\(|1-\\alpha|\\lt1\\). Solving the double inequality gives \\(0\\lt\\alpha\\lt2\\). **Final result:** fixed-step descent converges for \\(0\\lt\\alpha\\lt2\\); it alternates in sign when \\(1\\lt\\alpha\\lt2\\), stalls at \\(\\alpha=0\\), and fails to decay for \\(\\alpha\\ge2\\). This one-dimensional result illustrates why an excessively large step can oscillate or diverge.",
    },
  ]}
/>
`;
