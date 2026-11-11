export const content = String.raw`## Principle

An initial-value differential equation asks for a whole function while also prescribing its starting state. A Laplace transform converts derivatives into algebraic powers of \(s\) and inserts the initial values at the same time.

The differential equation can therefore be solved by a repeatable sequence: transform, solve algebraically for the transformed unknown, then invert.

Objective: solve linear initial-value ODEs with constant coefficients by Laplace transforms and interpret the resulting motion.

Prerequisite: familiarity with derivative-transform rules, partial fractions, and second-order linear ODEs.

## Notation

<Notation
  items={[
    { symbol: "f(t),\\bar f(s)", meaning: "unknown function and its Laplace transform" },
    { symbol: "q(t),\\bar q(s)", meaning: "oscillator displacement and its Laplace transform", unit: "m" },
    { symbol: "m", meaning: "oscillator mass", unit: "kg" },
    { symbol: "c", meaning: "viscous damping coefficient", unit: "kg s^{-1}" },
    { symbol: "k", meaning: "spring constant", unit: "N m^{-1}" },
    { symbol: "q_0,v_0", meaning: "initial displacement and velocity", unit: "m; m s^{-1}" },
  ]}
/>

## The Core Method

For a first-order initial-value problem, transform every term and insert the initial value through

\[
\mathcal L\{f'(t)\}=s\bar f(s)-f(0).
\tag*{[1]}
\]

Consider

\[
f'(t)+2f(t)=e^{-t},
\qquad f(0)=3.
\tag*{[2]}
\]

Transforming equation \([2]\) gives

\[
s\bar f(s)-3+2\bar f(s)=\frac1{s+1}.
\tag*{[3]}
\]

Now solve the algebraic equation before attempting inversion:

\[
\begin{aligned}
\bar f(s)
&=\frac{3}{s+2}+\frac1{(s+1)(s+2)}\\
&=\frac1{s+1}+\frac2{s+2}.
\end{aligned}
\tag*{[4]}
\]

Term-by-term inversion produces

\[
f(t)=e^{-t}+2e^{-2t}.
\tag*{[5]}
\]

Always check both the ODE and the initial value. Equation \([5]\) gives \(f(0)=3\), and direct differentiation gives \(f'+2f=e^{-t}\).

For the damped oscillator,

\[
mq''+cq'+kq=0,
\qquad q(0)=q_0,
\qquad q'(0)=v_0,
\tag*{[6]}
\]

the second-derivative rule is

\[
\mathcal L\{q''\}=s^2\bar q-sq_0-v_0.
\tag*{[7]}
\]

Substitution and collection of \(\bar q\) give

\[
\bar q(s)=
\frac{m(sq_0+v_0)+cq_0}{ms^2+cs+k}.
\tag*{[8]}
\]

The denominator controls the physical regime. Its roots are

\[
r_{\pm}=\frac{-c\pm\sqrt{c^2-4mk}}{2m}.
\tag*{[9]}
\]

Two real roots give overdamping, one repeated root gives critical damping, and a complex-conjugate pair gives a decaying oscillation. The transform method reaches all three cases from the same algebraic expression; only the inversion form changes.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "A forced first-order initial-value problem",
      question: "Solve \\(y'+3y=6\\), \\(y(0)=1\\), using Laplace transforms.",
      answer: "Transform the derivative and the constant forcing: \\[s\\bar y-1+3\\bar y=\\frac6s.\\tag*{[10]}\\] Hence \\[\\bar y=\\frac{1+6/s}{s+3}=\\frac{s+6}{s(s+3)}=\\frac2s-\\frac1{s+3}.\\tag*{[11]}\\] Invert term by term: \\[y(t)=2-e^{-3t}.\\tag*{[12]}\\] **Final result:** \\(y(t)=2-e^{-3t}\\). It starts at one and approaches the equilibrium value two; substitution gives \\(y'+3y=6\\).",
    },
    {
      title: "An underdamped oscillator",
      question: "A system has \\(m=1\\,\\mathrm{kg}\\), \\(c=2\\,\\mathrm{kg\\,s^{-1}}\\), and \\(k=5\\,\\mathrm{N\\,m^{-1}}\\). Find \\(q(t)\\) for \\(q(0)=1\\,\\mathrm m\\) and \\(q'(0)=0\\).",
      answer: "Equation \\([8]\\) gives \\[\\bar q(s)=\\frac{s+2}{s^2+2s+5}=\\frac{s+1}{(s+1)^2+2^2}+\\frac1{(s+1)^2+2^2}.\\tag*{[13]}\\] Use the shifted sine and cosine pairs: \\[q(t)=e^{-t}\\cos(2t)+\\frac12e^{-t}\\sin(2t).\\tag*{[14]}\\] The discriminant is \\(c^2-4mk=4-20=-16\\lt0\\), confirming underdamping. **Final result:** \\(q(t)=e^{-t}[\\cos(2t)+\\tfrac12\\sin(2t)]\\,\\mathrm m\\). Its exponential envelope decays at \\(1\\,\\mathrm{s^{-1}}\\) while the damped angular frequency is \\(2\\,\\mathrm{rad\\,s^{-1}}\\).",
    },
  ]}
/>
`;
