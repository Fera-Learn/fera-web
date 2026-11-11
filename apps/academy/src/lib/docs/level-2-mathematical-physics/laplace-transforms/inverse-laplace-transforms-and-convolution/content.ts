export const content = String.raw`## Principle

A transformed expression is useful only if it can be returned to the original time domain. Inverse Laplace transforms reverse the operation, but the expression is often not yet in a recognizable table form.

Two complementary strategies expose known pieces: partial fractions turn a rational function into a sum, while convolution turns a product of transforms into a time-domain integral.

Objective: invert rational transform expressions by partial fractions or by the convolution theorem.

Prerequisite: familiarity with transform tables, polynomial factorisation, partial fractions, and definite integration.

## Notation

<Notation
  items={[
    { symbol: "\\mathcal L^{-1}", meaning: "inverse Laplace-transform operator" },
    { symbol: "\\bar f(s),\\bar g(s)", meaning: "Laplace transforms of \\(f(t)\\) and \\(g(t)\\)" },
    { symbol: "(f*g)(t)", meaning: "convolution of \\(f\\) and \\(g\\) at time \\(t\\)" },
    { symbol: "u", meaning: "dummy time variable inside the convolution integral", unit: "s" },
    { symbol: "P(s)", meaning: "polynomial numerator in a rational transform" },
    { symbol: "a,b", meaning: "locations of distinct linear poles" },
    { symbol: "A,B,C", meaning: "constants determined in a partial-fraction decomposition" },
  ]}
/>

## The Core Method

The inverse operator is defined by the transform pair

\[
\mathcal L\{f(t)\}=\bar f(s)
\quad\Longleftrightarrow\quad
\mathcal L^{-1}\{\bar f(s)\}=f(t).
\tag*{[1]}
\]

For a rational expression, first make it proper and factor its denominator. A distinct linear factor produces a term such as \(A/(s-a)\); a repeated factor requires one term for every power:

\[
\frac{P(s)}{(s-a)^2(s-b)}
=\frac{A}{s-a}+\frac{B}{(s-a)^2}+\frac{C}{s-b}.
\tag*{[2]}
\]

Each piece can then be inverted from standard pairs, including

\[
\mathcal L^{-1}\left\{\frac1{s-a}\right\}=e^{at},
\qquad
\mathcal L^{-1}\left\{\frac1{(s-a)^2}\right\}=te^{at}.
\tag*{[3]}
\]

When the transformed expression is naturally a product, the convolution theorem gives another route. Define

\[
(f*g)(t)=\int_0^t f(u)g(t-u)\,du.
\tag*{[4]}
\]

Then

\[
\mathcal L\{f*g\}=\bar f(s)\bar g(s),
\qquad
\mathcal L^{-1}\{\bar f\bar g\}=f*g.
\tag*{[5]}
\]

The order of the factors does not matter: substituting \(v=t-u\) in equation \([4]\) shows that \(f*g=g*f\). Choose the order that makes the integral easiest.

For example, decompose

\[
\frac{s+3}{s(s+1)}=\frac{A}{s}+\frac{B}{s+1}.
\tag*{[6]}
\]

Multiplying by \(s(s+1)\) gives \(s+3=A(s+1)+Bs\). Setting \(s=0\) gives \(A=3\), while setting \(s=-1\) gives \(B=-2\). Therefore

\[
\mathcal L^{-1}\left\{\frac{s+3}{s(s+1)}\right\}
=3-2e^{-t}.
\tag*{[7]}
\]

Partial fractions are usually fastest for a factorable rational function. Convolution is most useful when the product already consists of two recognizable transforms or when decomposition would hide the physical combination of two responses.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Repeated poles by partial fractions",
      question: "Find \\(f(t)\\) if \\(\\bar f(s)=1/[s(s+2)^2]\\).",
      answer: "A repeated factor needs two associated terms: \\[\\frac1{s(s+2)^2}=\\frac A s+\\frac B{s+2}+\\frac C{(s+2)^2}.\\tag*{[8]}\\] Multiplication by \\(s(s+2)^2\\) gives \\(1=A(s+2)^2+Bs(s+2)+Cs\\). Setting \\(s=0\\) gives \\(A=1/4\\); setting \\(s=-2\\) gives \\(C=-1/2\\). Comparing the \\(s^2\\) coefficient gives \\(B=-1/4\\). Invert each term using equation \\([3]\\): \\[f(t)=\\frac14-\\frac14e^{-2t}-\\frac12te^{-2t}.\\tag*{[9]}\\] **Final result:** \\(f(t)=[1-e^{-2t}(1+2t)]/4\\). The \\(te^{-2t}\\) term is required by the repeated pole.",
    },
    {
      title: "A product inverted by convolution",
      question: "Use convolution to invert \\(\\bar h(s)=2/[s^2(s-1)^2]\\).",
      answer: "Factor the transform as \\(\\bar h=(1/s^2)[2/(s-1)^2]\\). The inverse factors are \\(f(t)=t\\) and \\(g(t)=2te^t\\). Equation \\[4\\] gives \\[h(t)=2\\int_0^t u(t-u)e^{t-u}\\,du.\\tag*{[10]}\\] Set \\(v=t-u\\), expand \\(v(t-v)\\), and use \\(\\int ve^v dv=(v-1)e^v\\) and \\(\\int v^2e^v dv=(v^2-2v+2)e^v\\). Evaluation from \\(0\\) to \\(t\\) yields \\[h(t)=2(t-2)e^t+2t+4.\\tag*{[11]}\\] **Final result:** \\(h(t)=2[(t-2)e^t+t+2]\\). At \\(t=0\\) this is zero, as expected from a convolution whose two factors both vanish initially.",
    },
  ]}
/>
`;
