export const content = String.raw`## Principle

A prepared state can contain several possible measurement outcomes even though one outcome is recorded in each run.

A quantum state may be a coherent superposition of observable eigenstates. Projection gives each measurement amplitude, the Born rule gives its probability, and normalization ensures that the probabilities sum to one.

## Notation

<Notation
  items={[
    { symbol: "\\hat A", meaning: "Hermitian observable operator" },
    { symbol: "|a_n\\rangle", meaning: "normalized eigenstate of \\hat A" },
    { symbol: "a_n", meaning: "eigenvalue and possible measurement result" },
    { symbol: "|\\psi\\rangle", meaning: "normalized state before measurement" },
    { symbol: "c_n,d_n", meaning: "normalized and initially unnormalized amplitudes", unit: "1" },
    { symbol: "\\delta_{mn}", meaning: "Kronecker delta", unit: "1" },
    { symbol: "P(a_n)", meaning: "probability of measuring a_n", unit: "1" },
    { symbol: "\\langle A\\rangle", meaning: "expectation value of A" },
    { symbol: "N", meaning: "real positive normalization constant", unit: "1" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Let a discrete, nondegenerate observable have a complete orthonormal eigenbasis.

\\[
\hat A|a_n\rangle=a_n|a_n\rangle,
\qquad
\langle a_m|a_n\rangle=\delta_{mn}.\tag*{[1]}
\\]

Expand an arbitrary state in that basis.

\\[
|\psi\rangle=\sum_n c_n|a_n\rangle.\tag*{[2]}
\\]

Project equation [2] onto \\(\langle a_m|\\) to isolate one amplitude.

\\[
\begin{aligned}
\langle a_m|\psi\rangle
&=\sum_n c_n\langle a_m|a_n\rangle\\
&=\sum_n c_n\delta_{mn}\\
&=c_m.
\end{aligned}\tag*{[3]}
\\]

The Born rule converts this complex amplitude into a real probability.

\\[
P(a_m)=|c_m|^2=|\langle a_m|\psi\rangle|^2.\tag*{[4]}
\\]

Normalization of the state is equivalent to normalization of the full probability distribution.

\\[
\begin{aligned}
1
&=\langle\psi|\psi\rangle\\
&=\sum_{m,n}c_m^*c_n\langle a_m|a_n\rangle\\
&=\sum_n|c_n|^2
=\sum_nP(a_n).
\end{aligned}\tag*{[5]}
\\]

The expectation value is the probability-weighted mean of all possible outcomes.

\\[
\begin{aligned}
\langle A\rangle
&=\langle\psi|\hat A|\psi\rangle\\
&=\sum_{m,n}c_m^*c_na_n\langle a_m|a_n\rangle\\
&=\sum_n a_n|c_n|^2.
\end{aligned}\tag*{[6]}
\\]

If a state is supplied without its normalization, write

\\[
|\psi\rangle=N\sum_n d_n|a_n\rangle.\tag*{[7]}
\\]

Applying equation [5] determines the positive normalization constant.

\\[
1=N^2\sum_n|d_n|^2
\quad\Longrightarrow\quad
N=\frac{1}{\sqrt{\sum_n|d_n|^2}}.\tag*{[8]}
\\]

Immediately after an ideal projective measurement yielding nondegenerate result \\(a_m\\), the state is the corresponding normalized eigenstate \\(|a_m\rangle\\). Before measurement, \\(c_m\\) is an amplitude, not a classical fraction of systems already possessing that result.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Normalize, project, and calculate the mean",
      question: "An observable has orthonormal eigenstates \\(|a_1\\rangle\\) and \\(|a_2\\rangle\\), with eigenvalues \\(a_1\\) and \\(a_2\\). A state is \\(|\\psi\\rangle=N(2|a_1\\rangle+i|a_2\\rangle)\\). Find \\(N\\), both probabilities, and \\(\\langle A\\rangle\\).",
      answer: "Use equation [8]: \\[1=N^2(|2|^2+|i|^2)=5N^2\\quad\\Longrightarrow\\quad N=\\frac{1}{\\sqrt5}.\\] The normalized amplitudes are \\(c_1=2/\\sqrt5\\) and \\(c_2=i/\\sqrt5\\), so \\[P(a_1)=\\left|\\frac{2}{\\sqrt5}\\right|^2=\\frac45,\\qquad P(a_2)=\\left|\\frac{i}{\\sqrt5}\\right|^2=\\frac15.\\] Equation [6] gives \\[\\langle A\\rangle=\\frac45a_1+\\frac15a_2.\\] **Final result:** \\(N=1/\\sqrt5\\), the probabilities are \\(4/5\\) and \\(1/5\\), and \\(\\langle A\\rangle=(4a_1+a_2)/5\\).",
    },
    {
      title: "What a phase changes",
      question: "Compare \\(|\\psi_+\\rangle=(|a_1\\rangle+|a_2\\rangle)/\\sqrt2\\) with \\(|\\psi_i\\rangle=(|a_1\\rangle+i|a_2\\rangle)/\\sqrt2\\). Do measurements of \\(A\\) distinguish them?",
      answer: "For \\(|\\psi_+\\rangle\\), the amplitudes have moduli \\(1/\\sqrt2\\) and \\(1/\\sqrt2\\). For \\(|\\psi_i\\rangle\\), the second modulus is \\(|i/\\sqrt2|=1/\\sqrt2\\). Thus both states give \\[P(a_1)=P(a_2)=\\frac12.\\] **Final result:** measurements of \\(A\\) alone do not distinguish these states. Their relative phases differ, however, so an observable with eigenstates that superpose \\(|a_1\\rangle\\) and \\(|a_2\\rangle\\) can distinguish them through interference.",
    },
  ]}
/>
`;
