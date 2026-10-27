export const content = String.raw`## Principle

Two standing patterns can keep their own shapes while their changing relative phase makes the combined probability pattern move.

Under a time-independent Hamiltonian, each energy component of a superposition acquires its own phase. Energy probabilities remain constant, while relative phases can make position probabilities and other observables vary in time.

## Notation

<Notation
  items={[
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\hat H", meaning: "time-independent Hamiltonian", unit: "J" },
    { symbol: "|n\\rangle", meaning: "normalized nth energy eigenstate" },
    { symbol: "E_n", meaning: "energy eigenvalue of |n\\rangle", unit: "J" },
    { symbol: "c_n,b_n(t)", meaning: "initial and time-dependent energy-basis amplitudes", unit: "1" },
    { symbol: "\\delta_{mn}", meaning: "Kronecker delta", unit: "1" },
    { symbol: "|\\Psi(t)\\rangle", meaning: "time-evolved state" },
    { symbol: "\\psi_n(x)", meaning: "position wavefunction of |n\\rangle", unit: "m^{-1/2}" },
    { symbol: "\\omega_{21}", meaning: "angular frequency associated with E_2-E_1", unit: "rad s^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Let the energy basis satisfy

\\[
\hat H|n\rangle=E_n|n\rangle,
\qquad
\langle m|n\rangle=\delta_{mn}.\tag*{[1]}
\\]

Expand the normalized initial state in this basis.

\\[
|\Psi(0)\rangle=\sum_n c_n|n\rangle,
\qquad
\sum_n|c_n|^2=1.\tag*{[2]}
\\]

Write the evolving state with unknown time-dependent amplitudes.

\\[
|\Psi(t)\rangle=\sum_n b_n(t)|n\rangle.\tag*{[3]}
\\]

Substitute equation [3] into the time-dependent Schrodinger equation and use equation [1].

\\[
i\hbar\sum_n\frac{db_n}{dt}|n\rangle
=\hat H\sum_n b_n|n\rangle
=\sum_nE_nb_n|n\rangle.\tag*{[4]}
\\]

Project onto \\(\langle m|\\). Orthonormality isolates one first-order equation, whose initial value is \\(b_m(0)=c_m\\).

\\[
i\hbar\frac{db_m}{dt}=E_mb_m
\quad\Longrightarrow\quad
b_m(t)=c_me^{-iE_mt/\hbar}.\tag*{[5]}
\\]

Therefore the complete time evolution is

\\[
|\Psi(t)\rangle=\sum_n c_ne^{-iE_nt/\hbar}|n\rangle.\tag*{[6]}
\\]

Projection back onto one energy state gives

\\[
P(E_m,t)=|\langle m|\Psi(t)\rangle|^2
=|c_me^{-iE_mt/\hbar}|^2
=|c_m|^2.\tag*{[7]}
\\]

Thus a time-independent Hamiltonian does not cause probability to move between its own energy eigenstates. For a two-state superposition, however, the position-space wavefunction is

A source example makes the expansion visible. In an infinite well, let \\(u=x/L\\) and choose an initial state that is constant on the left half and zero on the right:

\\[
\frac{f(u)}{A}=
\begin{cases}
1,&0<u<1/2,\\
0,&1/2<u<1,
\end{cases}
\qquad
c_n=\frac{2}{n\pi}\left[1-\cos\left(\frac{n\pi}{2}\right)\right].
\\]

<CartesianGrid
  className="mx-auto max-w-xl"
  height={360}
  width={580}
  title="Eigenfunction synthesis of a half-well step"
  caption="The first four nonzero weighted eigenfunctions and the sum through n = 200 reconstruct the normalized initial state."
  xRange={{ min: 0, max: 1, step: 0.1, label: "position x/L" }}
  yRange={{ min: -0.6, max: 1.3, step: 0.2, label: "normalized amplitude f/A" }}
>
  <Curve
    color="var(--muted-foreground)"
    dashed
    points={[{ x: 0, y: 1 }, { x: 0.499, y: 1 }, { x: 0.5, y: 0 }, { x: 1, y: 0 }]}
  />
  <Curve
    color="var(--chart-1)"
    points={Array.from({ length: 201 }, (_, index) => {
      const x = index / 200;
      const n = 1;
      const coefficient = (2 / (n * Math.PI)) * (1 - Math.cos((n * Math.PI) / 2));
      return { x, y: coefficient * Math.sin(n * Math.PI * x) };
    })}
    smooth
  />
  <Curve
    color="var(--chart-2)"
    points={Array.from({ length: 201 }, (_, index) => {
      const x = index / 200;
      const n = 2;
      const coefficient = (2 / (n * Math.PI)) * (1 - Math.cos((n * Math.PI) / 2));
      return { x, y: coefficient * Math.sin(n * Math.PI * x) };
    })}
    smooth
  />
  <Curve
    color="var(--chart-3)"
    points={Array.from({ length: 201 }, (_, index) => {
      const x = index / 200;
      const n = 3;
      const coefficient = (2 / (n * Math.PI)) * (1 - Math.cos((n * Math.PI) / 2));
      return { x, y: coefficient * Math.sin(n * Math.PI * x) };
    })}
    smooth
  />
  <Curve
    color="var(--chart-4)"
    points={Array.from({ length: 201 }, (_, index) => {
      const x = index / 200;
      const n = 5;
      const coefficient = (2 / (n * Math.PI)) * (1 - Math.cos((n * Math.PI) / 2));
      return { x, y: coefficient * Math.sin(n * Math.PI * x) };
    })}
    smooth
  />
  <Curve
    color="var(--foreground)"
    points={Array.from({ length: 401 }, (_, index) => {
      const x = index / 400;
      const y = Array.from({ length: 200 }, (_, modeIndex) => modeIndex + 1).reduce((sum, n) => {
        const coefficient = (2 / (n * Math.PI)) * (1 - Math.cos((n * Math.PI) / 2));
        return sum + coefficient * Math.sin(n * Math.PI * x);
      }, 0);
      return { x, y };
    })}
    smooth
  />
  <Annotation point={{ x: 0.2, y: 1 }} label="target f/A" offset={{ x: -8, y: -18 }} />
  <Annotation point={{ x: 0.7, y: 0.02 }} label="200-term sum" offset={{ x: 22, y: 22 }} />
  <Annotation point={{ x: 0.3, y: 0.52 }} label="first nonzero components" offset={{ x: 24, y: -30 }} />
</CartesianGrid>

The individual energy eigenfunctions remain smooth, but their superposition can approach the discontinuous initial shape. The small overshoot beside \\(u=1/2\\) is Gibbs ringing; adding more terms narrows it without removing the limiting overshoot exactly at the jump.

For a two-state superposition, however, the position-space wavefunction is

\\[
\Psi(x,t)=c_1\psi_1(x)e^{-iE_1t/\hbar}
+c_2\psi_2(x)e^{-iE_2t/\hbar}.\tag*{[8]}
\\]

Multiplying equation [8] by its complex conjugate exposes the interference terms.

\\[
\begin{aligned}
|\Psi(x,t)|^2
={}&|c_1|^2|\psi_1|^2+|c_2|^2|\psi_2|^2\\
&+c_1^*c_2\psi_1^*\psi_2e^{-i(E_2-E_1)t/\hbar}\\
&+c_2^*c_1\psi_2^*\psi_1e^{i(E_2-E_1)t/\hbar}.
\end{aligned}\tag*{[9]}
\\]

The two cross terms are complex conjugates, so the probability density is real. Their relative phase evolves at

\\[
\omega_{21}=\frac{E_2-E_1}{\hbar}.\tag*{[10]}
\\]

A common phase multiplying the whole state is unobservable; the relative phase in equation [9] is physically significant.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Interference in an equal two-state superposition",
      question: "At \\(t=0\\), let \\(\\Psi(x,0)=[\\psi_1(x)+\\psi_2(x)]/\\sqrt2\\), where the normalized energy eigenfunctions are real and \\(E_2\\gt E_1\\). Find \\(|\\Psi(x,t)|^2\\).",
      answer: "Equation [6] gives \\[\\Psi(x,t)=\\frac{1}{\\sqrt2}\\left[\\psi_1e^{-iE_1t/\\hbar}+\\psi_2e^{-iE_2t/\\hbar}\\right].\\] Use equation [9] with \\(c_1=c_2=1/\\sqrt2\\) and real \\(\\psi_1,\\psi_2\\): \\[|\\Psi|^2=\\frac12\\psi_1^2+\\frac12\\psi_2^2+\\frac12\\psi_1\\psi_2\\left(e^{-i\\omega_{21}t}+e^{i\\omega_{21}t}\\right).\\] Since \\((e^{i\\theta}+e^{-i\\theta})/2=\\cos\\theta\\), **the final result is** \\[|\\Psi(x,t)|^2=\\frac12\\left(\\psi_1^2+\\psi_2^2\\right)+\\psi_1\\psi_2\\cos(\\omega_{21}t).\\] Its integral remains one because \\(\\psi_1\\) and \\(\\psi_2\\) are orthogonal, even though its shape changes with time.",
    },
    {
      title: "Energy probabilities during phase evolution",
      question: "For \\(|\\Psi(0)\\rangle=(|1\\rangle+i|2\\rangle)/\\sqrt2\\), what are the energy probabilities at time \\(t\\)?",
      answer: "Time evolution gives \\[|\\Psi(t)\\rangle=\\frac{1}{\\sqrt2}\\left(e^{-iE_1t/\\hbar}|1\\rangle+i e^{-iE_2t/\\hbar}|2\\rangle\\right).\\] Each phase has modulus one, so \\[P(E_1,t)=\\left|\\frac{e^{-iE_1t/\\hbar}}{\\sqrt2}\\right|^2=\\frac12,\\qquad P(E_2,t)=\\left|\\frac{i e^{-iE_2t/\\hbar}}{\\sqrt2}\\right|^2=\\frac12.\\] **Final result:** both energy probabilities remain \\(1/2\\) for all \\(t\\); only their relative phase changes.",
    },
  ]}
/>
`;
