export const content = String.raw`## Principle

Re-evaluating an improper integral after every shift, rescaling, or derivative would waste the main advantage of a transform. Laplace-transform properties let a known transform act as a reusable building block.

Each rule records a specific change: delaying a signal multiplies its transform by an exponential, multiplying in time shifts the transform variable, and differentiating exposes initial data.

Objective: select and apply the Laplace property that matches a change made to a time-domain function.

Prerequisite: familiarity with the Laplace definition, the chain rule, integration by parts, and the Heaviside step function.

## Notation

<Notation
  items={[
    { symbol: "f(t),\\bar f(s)", meaning: "time-domain function and its Laplace transform" },
    { symbol: "g(t),\\bar g(s)", meaning: "second transform pair used in linear combinations" },
    { symbol: "A,B", meaning: "constant coefficients in a linear combination" },
    { symbol: "H(t-a)", meaning: "Heaviside step that switches on at the delay \\(a\\ge0\\)" },
    { symbol: "a", meaning: "positive delay or scale, as specified by the rule" },
    { symbol: "n", meaning: "positive integer derivative or polynomial power" },
    { symbol: "f^{(n)}(t)", meaning: "\\(n\\)th derivative of \\(f\\) with respect to time" },
    { symbol: "u", meaning: "dummy time variable in an accumulated integral" },
  ]}
/>

## The Core Method

First identify the operation performed on \(f(t)\); then alter \(\bar f(s)\) with the corresponding rule. Linearity handles sums and constant multiples:

\[
\mathcal L\{Af+Bg\}=A\bar f+B\bar g.
\tag*{[1]}
\]

A delay by \(a\ge0\) inserts a switch so that no translated signal appears before \(t=a\):

\[
\mathcal L\{H(t-a)f(t-a)\}=e^{-as}\bar f(s).
\tag*{[2]}
\]

By contrast, multiplication by an exponential does not delay the graph. It shifts the transform variable:

\[
\mathcal L\{e^{at}f(t)\}(s)=\bar f(s-a).
\tag*{[3]}
\]

For a positive time scale \(a>0\), substitute \(u=at\) in the defining integral:

\[
\mathcal L\{f(at)\}(s)=\frac1a\bar f\left(\frac{s}{a}\right).
\tag*{[4]}
\]

The restriction \(a>0\) is essential for the unilateral transform: a negative scale would sample \(f\) at negative times and is not described by equation \([4]\) without additional domain information.

Multiplication by time becomes differentiation with respect to \(s\):

\[
\mathcal L\{t^n f(t)\}(s)
=(-1)^n\frac{d^n\bar f}{ds^n}.
\tag*{[5]}
\]

Time differentiation instead produces powers of \(s\) and boundary values. One integration by parts gives the first-derivative rule,

\[
\mathcal L\{f'(t)\}=s\bar f(s)-f(0),
\tag*{[6]}
\]

and repetition gives

\[
\mathcal L\{f^{(n)}(t)\}
=s^n\bar f(s)-s^{n-1}f(0)-\cdots-f^{(n-1)}(0).
\tag*{[7]}
\]

Finally, integrating in time divides the transform by \(s\):

\[
\mathcal L\left\{\int_0^t f(u)\,du\right\}=\frac{\bar f(s)}s.
\tag*{[8]}
\]

The practical test is to name the time-domain operation before manipulating \(\bar f\). A delay, an exponential multiplier, and a time rescaling can look similar algebraically but invoke different rules.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Differentiate a known transform",
      question: "Given \\(\\mathcal L\\{\\sinh(kt)\\}=k/(s^2-k^2)\\) for \\(s\\gt|k|\\), find \\(\\mathcal L\\{t\\sinh(kt)\\}\\).",
      answer: "Multiplication by one power of \\(t\\) calls for equation \\([5]\\) with \\(n=1\\): \\[\\mathcal L\\{tf(t)\\}=-\\frac{d\\bar f}{ds}.\\tag*{[9]}\\] Differentiate the known transform: \\[ -\\frac d{ds}\\left(\\frac{k}{s^2-k^2}\\right)=\\frac{2ks}{(s^2-k^2)^2}.\\tag*{[10]}\\] **Final result:** \\(\\mathcal L\\{t\\sinh(kt)\\}=2ks/(s^2-k^2)^2\\) for \\(s\\gt|k|\\). Multiplication by a polynomial does not remove the exponential convergence threshold.",
    },
    {
      title: "Separate delay from exponential shift",
      question: "If \\(\\mathcal L\\{\\cos t\\}=s/(s^2+1)\\), find the transform of \\(H(t-2)e^{3(t-2)}\\cos(t-2)\\).",
      answer: "Treat the expression inside the delay first. Exponential multiplication gives \\[\\mathcal L\\{e^{3t}\\cos t\\}=\\left.\\frac{s}{s^2+1}\\right|_{s\\mapsto s-3}=\\frac{s-3}{(s-3)^2+1}.\\tag*{[11]}\\] The whole modified function is then delayed by two time units, so equation \\([2]\\) multiplies this result by \\(e^{-2s}\\). **Final result:** \\[\\mathcal L\\{H(t-2)e^{3(t-2)}\\cos(t-2)\\}=e^{-2s}\\frac{s-3}{(s-3)^2+1}.\\tag*{[12]}\\] The shift \\(s\\mapsto s-3\\) comes from exponential growth; the factor \\(e^{-2s}\\) comes from delay.",
    },
  ]}
/>
`;
