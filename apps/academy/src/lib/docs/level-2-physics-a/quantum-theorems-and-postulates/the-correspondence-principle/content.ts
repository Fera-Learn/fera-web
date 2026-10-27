export const content = String.raw`## Principle

Large-scale objects follow classical mechanics even though the underlying rules are quantum mechanical.

The correspondence principle requires quantum predictions to reproduce classical physics in an appropriate classical limit, such as large quantum numbers or actions much greater than \\(\hbar\\). The limit often concerns expectation values or coarse-grained probabilities, not the claim that every quantum state follows one exact classical trajectory.

## Notation

<Notation
  items={[
    { symbol: "\\langle x\\rangle,\\langle p\\rangle", meaning: "expectation values of position and momentum", unit: "m, kg m s^{-1}" },
    { symbol: "m,F(x),V(x)", meaning: "particle mass, force, and potential energy with F=-dV/dx", unit: "kg, N, J" },
    { symbol: "\\sigma_x", meaning: "position standard deviation", unit: "m" },
    { symbol: "\\delta x", meaning: "displacement x-\\langle x\\rangle from the mean position", unit: "m" },
    { symbol: "\\omega,t,\\hbar", meaning: "angular frequency, time, and reduced Planck constant", unit: "rad s^{-1}, s, J s" },
    { symbol: "n,L", meaning: "positive integer quantum number and width of a one-dimensional box", unit: "1, m" },
    { symbol: "\\psi_n(x),P_n(x),\\overline{P_n(x)}", meaning: "normalized box eigenfunction, exact position density, and coarse-grained density", unit: "m^{-1/2}, m^{-1}, m^{-1}" },
    { symbol: "\\Delta x", meaning: "coarse position interval used by a finite-resolution measurement", unit: "m" },
    { symbol: "x_0,p_0", meaning: "initial position and momentum expectation values in the worked case", unit: "m, kg m s^{-1}" },
  ]}
/>

## The Core Method

Expectation values satisfy the exact Ehrenfest equations

\\[
\frac{d\langle x\rangle}{dt}=\frac{\langle p\rangle}{m},
\qquad
m\frac{d^2\langle x\rangle}{dt^2}=\langle F(x)\rangle.
\tag*{[1]}
\\]

Classical motion of the mean would instead use \\(F(\langle x\rangle)\\). To compare the two, write \\(x=\langle x\rangle+\delta x\\), where \\(\langle\delta x\rangle=0\\), and expand a smooth force around the mean:

\\[
F(x)=F(\langle x\rangle)
+F'(\langle x\rangle)\delta x
+\frac12F''(\langle x\rangle)(\delta x)^2+\cdots.
\tag*{[2]}
\\]

Taking the expectation value and using \\(\langle(\delta x)^2\rangle=\sigma_x^2\\) gives

\\[
\langle F(x)\rangle
=F(\langle x\rangle)
+\frac12F''(\langle x\rangle)\sigma_x^2+\cdots.
\tag*{[3]}
\\]

Thus a packet narrow on the length scale over which the force changes obeys approximately classical mean motion. For constant or linear forces, \\(F''=0\\), so the equality is exact for every state for which the expectation values exist. A large quantum number can also produce correspondence after finite-resolution averaging, even when the exact density oscillates rapidly.

For a box spanning \\(0<x<L\\), the stationary states and densities are

\\[
\psi_n(x)=\sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right),
\qquad
P_n(x)=\frac{2}{L}\sin^2\left(\frac{n\pi x}{L}\right)
=\frac{1}{L}\left[1-\cos\left(\frac{2n\pi x}{L}\right)\right].
\tag*{[4]}
\\]

When \\(n\\) is large and a detector bin \\(\Delta x\\) contains many oscillations, the cosine contribution averages toward zero. The measured coarse-grained density approaches

\\[
\overline{P_n(x)}\longrightarrow\frac{1}{L},
\tag*{[5]}
\\]

which is the classical position density for a particle moving at constant speed between reflecting walls. The averaging condition is essential: [5] does not say the pointwise quantum density becomes exactly constant.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Exact correspondence of oscillator means",
      question: "For \\(V(x)=m\\omega^2x^2/2\\), show that the position expectation value obeys the classical oscillator equation and state its motion for initial means \\(x_0\\) and \\(p_0\\).",
      answer: "Differentiate the potential to obtain \\(F(x)=-m\\omega^2x\\). Because the force is linear, \\(\\langle F(x)\\rangle=-m\\omega^2\\langle x\\rangle=F(\\langle x\\rangle)\\) exactly. Equation [1] becomes \\[\\frac{d^2\\langle x\\rangle}{dt^2}+\\omega^2\\langle x\\rangle=0.\\] Applying \\(\\langle x\\rangle(0)=x_0\\) and \\(\\langle p\\rangle(0)=p_0=m\\,d\\langle x\\rangle/dt|_{t=0}\\) gives \\[\\langle x\\rangle(t)=x_0\\cos(\\omega t)+\\frac{p_0}{m\\omega}\\sin(\\omega t).\\] Substitution verifies the differential equation and both initial conditions. **Final result:** the quantum position mean follows the exact classical oscillator trajectory for any state with finite means, although the state's width can remain nonclassical.",
    },
    {
      title: "High quantum number in a box",
      question: "A detector cannot resolve distances as small as the oscillation scale \\(L/n\\) of a high-n box state. What position distribution does it observe?",
      answer: "Equation [4] separates the density into a constant term \\(1/L\\) and an oscillatory cosine. Across a bin containing many periods, positive and negative parts of the cosine cancel: \\[\\frac{1}{\\Delta x}\\int_{\\text{bin}}P_n(x)\\,dx\\approx\\frac{1}{L}.\\] The limiting density is normalized because \\(\\int_0^L(1/L)\\,dx=1\\). **Final result:** the finite-resolution detector observes an approximately uniform density \\(1/L\\), matching the classical time spent per unit distance; the exact microscopic density still has nodes and peaks.",
    },
  ]}
/>
`;
