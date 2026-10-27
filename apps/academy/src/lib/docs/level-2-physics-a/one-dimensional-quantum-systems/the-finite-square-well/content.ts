export const content = String.raw`## Principle

A particle confined by finite walls has a small chance of being detected just outside them.

A finite square well confines bound states without forcing the wavefunction to vanish at its edges. The wavefunction leaks exponentially into the classically forbidden exterior, and continuity of both the wavefunction and its derivative selects a discrete set of energies.

## Notation

<Notation
  items={[
    { symbol: "x,L", meaning: "position from the well centre and well width", unit: "m, m" },
    { symbol: "V_0,E", meaning: "exterior potential and bound-state energy", unit: "J, J" },
    { symbol: "\\psi(x)", meaning: "normalised stationary-state wavefunction", unit: "m^{-1/2}" },
    { symbol: "k,\\alpha", meaning: "interior wave number and exterior decay constant", unit: "m^{-1}, m^{-1}" },
    { symbol: "A,B,C,D", meaning: "piecewise wavefunction amplitudes", unit: "m^{-1/2}" },
    { symbol: "X,Y,z_0", meaning: "dimensionless interior wave number, decay constant, and well-strength parameter" },
    { symbol: "n", meaning: "positive-integer state label in the infinite-well limit" },
    { symbol: "m,\\hbar", meaning: "particle mass and reduced Planck constant", unit: "kg, J s" },
  ]}
/>

## The Core Method

Use the symmetric potential

\\[
V(x)=
\begin{cases}
0, & |x|\lt L/2,\\
V_0, & |x|\ge L/2,
\end{cases}
\qquad 0\lt E\lt V_0.
\tag*{[1]}
\\]

Inside the well, the time-independent Schrodinger equation gives oscillatory solutions. Outside, the bound-state condition gives exponential solutions.

\\[
k^2=\frac{2mE}{\hbar^2},
\qquad
\alpha^2=\frac{2m(V_0-E)}{\hbar^2}.
\tag*{[2]}
\\]

Normalisability removes the exponentials that grow as \\(x\\) approaches either infinity.

\\[
\psi(x)=
\begin{cases}
C e^{\alpha x}, & x\le-L/2,\\
A\cos(kx)+B\sin(kx), & |x|\lt L/2,\\
D e^{-\alpha x}, & x\ge L/2.
\end{cases}
\tag*{[3]}
\\]

Because the potential is symmetric, solutions may be chosen with even or odd parity. For an even state, set \\(B=0\\) and match \\(\psi\\) and \\(d\psi/dx\\) at \\(x=L/2\\).

\\[
A\cos\!\left(\frac{kL}{2}\right)=D e^{-\alpha L/2},
\qquad
-kA\sin\!\left(\frac{kL}{2}\right)=-\alpha D e^{-\alpha L/2}.
\tag*{[4]}
\\]

Divide the derivative condition by the wavefunction condition. The unknown amplitudes cancel.

\\[
k\tan\!\left(\frac{kL}{2}\right)=\alpha
\qquad\text{(even states)}.
\tag*{[5]}
\\]

For an odd state, set \\(A=0\\) and repeat the matching.

\\[
B\sin\!\left(\frac{kL}{2}\right)=D e^{-\alpha L/2},
\qquad
kB\cos\!\left(\frac{kL}{2}\right)=-\alpha D e^{-\alpha L/2}.
\tag*{[6]}
\\]

Division now gives the odd-state condition.

\\[
-k\cot\!\left(\frac{kL}{2}\right)=\alpha
\qquad\text{(odd states)}.
\tag*{[7]}
\\]

Introduce dimensionless variables. Equation [2] then supplies a circle constraint, while [5] and [7] supply the parity-dependent curves.

\\[
X=\frac{kL}{2},
\qquad
Y=\frac{\alpha L}{2},
\qquad
z_0^2=\frac{mV_0L^2}{2\hbar^2},
\qquad
X^2+Y^2=z_0^2.
\tag*{[8]}
\\]

\\[
Y=X\tan X\quad\text{(even)},
\qquad
Y=-X\cot X\quad\text{(odd)}.
\tag*{[9]}
\\]

The allowed values of \\(X\\) are the intersections of the parity branches with a quarter-circle of radius \\(z_0\\).

<CartesianGrid
  className="mx-auto max-w-xl"
  height={380}
  width={600}
  title="Graphical roots for the finite square well"
  caption="Red even branches, blue odd branches, and three well-strength circles; every intersection in the first quadrant is one bound state."
  xRange={{ min: 0, max: 12.6, step: 1.57, label: "X = kL/2" }}
  yRange={{ min: 0, max: 10, step: 1, label: "Y = αL/2" }}
>
  <Curve color="var(--destructive)" points={Array.from({ length: 120 }, (_, i) => { const x = 0.001 + (1.558 * i) / 119; return { x, y: x * Math.tan(x) }; })} />
  <Curve color="var(--destructive)" points={Array.from({ length: 120 }, (_, i) => { const x = 3.143 + (1.557 * i) / 119; return { x, y: x * Math.tan(x) }; })} />
  <Curve color="var(--destructive)" points={Array.from({ length: 120 }, (_, i) => { const x = 6.284 + (1.556 * i) / 119; return { x, y: x * Math.tan(x) }; })} />
  <Curve color="var(--destructive)" points={Array.from({ length: 120 }, (_, i) => { const x = 9.426 + (1.554 * i) / 119; return { x, y: x * Math.tan(x) }; })} />
  <Curve color="var(--chart-1)" points={Array.from({ length: 120 }, (_, i) => { const x = 1.572 + (1.558 * i) / 119; return { x, y: -x / Math.tan(x) }; })} />
  <Curve color="var(--chart-1)" points={Array.from({ length: 120 }, (_, i) => { const x = 4.714 + (1.556 * i) / 119; return { x, y: -x / Math.tan(x) }; })} />
  <Curve color="var(--chart-1)" points={Array.from({ length: 120 }, (_, i) => { const x = 7.855 + (1.555 * i) / 119; return { x, y: -x / Math.tan(x) }; })} />
  <Curve color="var(--chart-1)" points={Array.from({ length: 120 }, (_, i) => { const x = 10.997 + (1.553 * i) / 119; return { x, y: -x / Math.tan(x) }; })} />
  <Curve color="var(--foreground)" points={Array.from({ length: 121 }, (_, i) => { const x = (5 * i) / 120; return { x, y: Math.sqrt(25 - x ** 2) }; })} smooth />
  <Curve color="var(--foreground)" points={Array.from({ length: 181 }, (_, i) => { const x = (9 * i) / 180; return { x, y: Math.sqrt(81 - x ** 2) }; })} smooth />
  <Curve color="var(--foreground)" points={Array.from({ length: 251 }, (_, i) => { const x = (12.5 * i) / 250; return { x, y: Math.sqrt(156.25 - x ** 2) }; })} smooth />
  <Point color="var(--foreground)" x={1.3064} y={4.8263} />
  <Point color="var(--foreground)" x={2.5957} y={4.2734} />
  <Point color="var(--foreground)" x={3.8375} y={3.2053} />
  <Point color="var(--foreground)" x={4.9063} y={0.9635} />
  <Point color="var(--foreground)" x={1.4131} y={8.8884} />
  <Point color="var(--foreground)" x={2.8226} y={8.5459} />
  <Point color="var(--foreground)" x={4.2239} y={7.9473} />
  <Point color="var(--foreground)" x={5.6102} y={7.0375} />
  <Point color="var(--foreground)" x={6.9684} y={5.6957} />
  <Point color="var(--foreground)" x={8.2618} y={3.5696} />
  <Annotation point={{ x: 1.0, y: 2.3 }} label="even: X tan X" offset={{ x: 18, y: -18 }} />
  <Annotation point={{ x: 2.2, y: 1.6 }} label="odd: -X cot X" offset={{ x: 18, y: 22 }} />
</CartesianGrid>

Each intersection with \\(X\gt0\\) and \\(Y\gt0\\) is one bound state. Once \\(X\\) is known, its energy follows directly.

<PhysicsDiagram slug="finite-well-bound-state-leakage" />

Inside the well each state oscillates with definite parity. At both finite steps, continuity carries a nonzero boundary amplitude into exponentially decaying exterior tails; higher states generally penetrate farther because \\(V_0-E\\), and hence \\(\alpha\\), is smaller.

\\[
E=\frac{\hbar^2k^2}{2m}
=\frac{2\hbar^2X^2}{mL^2},
\qquad
V_0-E=\frac{2\hbar^2Y^2}{mL^2}.
\tag*{[10]}
\\]

Finally determine amplitude ratios from [4] or [6], apply parity at the left boundary, and normalise over all three regions.

\\[
\int_{-\infty}^{-L/2}|\psi|^2\,dx
+\int_{-L/2}^{L/2}|\psi|^2\,dx
+\int_{L/2}^{\infty}|\psi|^2\,dx=1.
\tag*{[11]}
\\]

For this constant-mass well with finite potential steps, matching only \\(\psi\\) is insufficient: both \\(\psi\\) and \\(d\psi/dx\\) are continuous at each boundary. In the infinite-wall limit used for the ideal square well, the finite-step derivative-matching condition is no longer imposed; other singular potentials, such as a delta potential, require their own boundary conditions.

<PhysicsDiagram slug="infinite-and-finite-well-comparison" />

Infinite walls force every wavefunction to zero exactly at the boundaries. Finite walls instead join smoothly to nonzero tails, while increasing \\(V_0\\) shortens those tails and moves the interior shapes towards the infinite-well forms.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Checking an even bound-state root",
      question: "An electron is in a well of width \\(L=1.00\\,\\mathrm{nm}\\). An even-state solution has \\(X=1.00\\). Find \\(Y\\), the required well depth \\(V_0\\), and the state energy \\(E\\). Use \\(\\hbar^2/(2m_{\\mathrm e}L^2)=0.0381\\,\\mathrm{eV}\\).",
      answer: "For an even state, equation [9] gives \\[Y=X\\tan X=(1.00)\\tan(1.00)=1.557.\\] Equation [8] gives \\[z_0^2=X^2+Y^2=1.000+2.425=3.425.\\] Since \\(V_0=4z_0^2[\\hbar^2/(2m_{\\mathrm e}L^2)]\\), \\[V_0=4(3.425)(0.0381\\,\\mathrm{eV})=0.522\\,\\mathrm{eV}.\\] Equation [10] similarly gives \\[E=4X^2(0.0381\\,\\mathrm{eV})=0.152\\,\\mathrm{eV}.\\] The check \\(E\\lt V_0\\) holds. **Final result:** \\(Y=1.557\\), \\(V_0=0.522\\,\\mathrm{eV}\\), and \\(E=0.152\\,\\mathrm{eV}\\).",
    },
    {
      title: "Approach to the infinite-well limit",
      question: "Explain what happens to the matching conditions and leakage as \\(V_0\\) becomes very large at fixed \\(L\\).",
      answer: "Equation [2] shows that \\(\\alpha\\) becomes large, so the exterior factor \\(e^{-\\alpha|x|}\\) decays over the short length \\(1/\\alpha\\). In equations [5] and [7], a large right-hand side forces the interior function close to zero at the boundaries. The allowed roots approach \\(X=n\\pi/2\\), so equation [10] gives \\[E_n\\longrightarrow\\frac{2\\hbar^2}{mL^2}\\left(\\frac{n\\pi}{2}\\right)^2=\\frac{n^2\\pi^2\\hbar^2}{2mL^2}.\\] **Final result:** leakage vanishes and the finite-well spectrum approaches the centred infinite-square-well spectrum.",
    },
  ]}
/>
`;
