export const content = String.raw`## Principle

Some prepared states give the same energy every time the measurement is repeated.

An energy eigenfunction is a state on which the Hamiltonian returns the same function multiplied by one allowed energy. In such a state, an ideal energy measurement is certain to return that eigenvalue.

## Notation

<Notation
  items={[
    { symbol: "x,t", meaning: "position and time", unit: "m, s" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "V(x)", meaning: "time-independent potential energy", unit: "J" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\hat H", meaning: "Hamiltonian operator", unit: "J" },
    { symbol: "\\psi_n(x)", meaning: "normalized nth energy eigenfunction", unit: "m^{-1/2}" },
    { symbol: "\\Psi_n(x,t)", meaning: "full nth stationary-state wavefunction", unit: "m^{-1/2}" },
    { symbol: "E_n", meaning: "energy eigenvalue associated with \\psi_n", unit: "J" },
    { symbol: "\\langle H\\rangle,(\\Delta H)^2", meaning: "mean energy and energy variance", unit: "J, J^{2}" },
    { symbol: "c_n", meaning: "complex amplitude multiplying the nth eigenfunction", unit: "1" },
    { symbol: "A,k", meaning: "constant wave amplitude and wave number", unit: "m^{-1/2}, m^{-1}" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

For a time-independent potential, the one-dimensional Hamiltonian is

\\[
\hat H=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+V(x).\tag*{[1]}
\\]

An eigenfunction of \\(\hat H\\) is a nonzero function whose shape is unchanged by the operator. Its scale factor is the corresponding energy eigenvalue.

\\[
\hat H\psi_n(x)=E_n\psi_n(x).\tag*{[2]}
\\]

Physical bound-state eigenfunctions satisfy the problem's boundary conditions and are square-integrable over the stated spatial domain. Choose their normalization so that

\\[
\int_{\mathrm{domain}}\psi_n^*(x)\psi_n(x)\,dx=1.\tag*{[3]}
\\]

The expectation value of energy in \\(\psi_n\\) follows by applying equation [2] before integrating.

\\[
\begin{aligned}
\langle H\rangle
&=\int_{\mathrm{domain}}\psi_n^*\hat H\psi_n\,dx\\
&=\int_{\mathrm{domain}}\psi_n^*E_n\psi_n\,dx\\
&=E_n\int_{\mathrm{domain}}\psi_n^*\psi_n\,dx\\
&=E_n.
\end{aligned}\tag*{[4]}
\\]

Apply the Hamiltonian twice to find the second moment.

\\[
\begin{aligned}
\langle H^2\rangle
&=\int_{\mathrm{domain}}\psi_n^*\hat H^2\psi_n\,dx\\
&=\int_{\mathrm{domain}}\psi_n^*\hat H(E_n\psi_n)\,dx\\
&=E_n\int_{\mathrm{domain}}\psi_n^*\hat H\psi_n\,dx\\
&=E_n^2.
\end{aligned}\tag*{[5]}
\\]

The energy variance therefore vanishes. A zero variance means every ideal energy measurement returns \\(E_n\\), not merely that the average equals \\(E_n\\).

\\[
(\Delta H)^2=\langle H^2\rangle-\langle H\rangle^2
=E_n^2-E_n^2=0.\tag*{[6]}
\\]

The full stationary state includes the energy-dependent phase

\\[
\Psi_n(x,t)=\psi_n(x)e^{-iE_nt/\hbar}.\tag*{[7]}
\\]

For a linear combination of two eigenfunctions, operator linearity gives

\\[
\hat H(c_1\psi_1+c_2\psi_2)
=c_1E_1\psi_1+c_2E_2\psi_2.\tag*{[8]}
\\]

If \\(E_1\ne E_2\\) and both coefficients are nonzero, equation [8] cannot be written as one common energy times \\(c_1\psi_1+c_2\psi_2\\). Such a superposition is a valid state but not an energy eigenfunction. If several independent eigenfunctions share the same eigenvalue, the energy is degenerate and every linear combination within that degenerate subspace remains an eigenfunction with that same energy.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Reading an energy from operator action",
      question: "On a domain where \\(V(x)=0\\), suppose the boundary conditions admit the normalized state \\(\\psi(x)=A\\sin(kx)\\). Show that it is an energy eigenfunction and find its eigenvalue.",
      answer: "With \\(V=0\\), equation [1] contains only the kinetic term. Differentiate explicitly: \\[\\frac{d\\psi}{dx}=Ak\\cos(kx),\\qquad \\frac{d^2\\psi}{dx^2}=-Ak^2\\sin(kx)=-k^2\\psi.\\] Apply the Hamiltonian: \\[\\hat H\\psi=-\\frac{\\hbar^2}{2m}(-k^2\\psi)=\\frac{\\hbar^2k^2}{2m}\\psi.\\] The output is the original function times one constant. **Final result:** \\(\\psi\\) is an energy eigenfunction with \\(E=\\hbar^2k^2/(2m)\\). Boundary conditions still decide which values of \\(k\\) are physically allowed.",
    },
    {
      title: "Testing a two-state superposition",
      question: "Let \\(E_1\\ne E_2\\) and let both \\(c_1\\) and \\(c_2\\) be nonzero. Is \\(c_1\\psi_1+c_2\\psi_2\\) an energy eigenfunction?",
      answer: "Suppose it had eigenvalue \\(E\\). Equation [8] would require \\[c_1(E_1-E)\\psi_1+c_2(E_2-E)\\psi_2=0.\\] Independent eigenfunctions cannot cancel for every \\(x\\), so both coefficients of the functions must vanish: \\(E=E_1\\) and \\(E=E_2\\). That contradicts \\(E_1\\ne E_2\\). **Final result:** the superposition is not an energy eigenfunction and an energy measurement is not deterministic. The conclusion changes for degenerate states because then the two eigenvalues are equal.",
    },
  ]}
/>
`;
