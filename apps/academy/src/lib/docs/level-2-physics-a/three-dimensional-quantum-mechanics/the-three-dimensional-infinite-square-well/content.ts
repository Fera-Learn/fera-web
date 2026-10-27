export const content = String.raw`## Principle

A particle trapped in a rigid rectangular box must fit a standing wave between each pair of opposite faces.

A rectangular infinite well confines a particle independently along three axes. The hard walls force a standing-wave node at every face, quantising three positive-integer wave numbers and making each stationary state a product of three normalised sine functions.

## Notation

<Notation
  items={[
    { symbol: "x,y,z", meaning: "Cartesian position coordinates", unit: "m, m, m" },
    { symbol: "L_x,L_y,L_z", meaning: "positive side lengths of the rectangular well", unit: "m, m, m" },
    { symbol: "L", meaning: "side length when the well is cubic", unit: "m" },
    { symbol: "V", meaning: "infinite-well potential energy", unit: "J" },
    { symbol: "X,Y,Z", meaning: "one-dimensional wavefunction factors", unit: "m^{-1/2}, m^{-1/2}, m^{-1/2}" },
    { symbol: "\\psi_{n_xn_yn_z}", meaning: "normalised three-dimensional stationary state", unit: "m^{-3/2}" },
    { symbol: "n_x,n_y,n_z", meaning: "positive-integer quantum numbers", unit: "1" },
    { symbol: "k_x,k_y,k_z", meaning: "allowed Cartesian wave numbers", unit: "m^{-1}, m^{-1}, m^{-1}" },
    { symbol: "E_x,E_y,E_z,E", meaning: "directional energies and total energy", unit: "J, J, J, J" },
    { symbol: "m,m_e", meaning: "particle mass and electron mass", unit: "kg, kg" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "A_x,B_x", meaning: "constants in the general x-direction solution", unit: "m^{-1/2}, m^{-1/2}" },
    { symbol: "E_0", meaning: "one-dimensional energy scale for a cubic well", unit: "J" },
  ]}
/>

## The Core Method

Choose the box to occupy \\(0\lt x\lt L_x\\), \\(0\lt y\lt L_y\\), and \\(0\lt z\lt L_z\\). Its potential is

\\[
V(x,y,z)=
\begin{cases}
0,&0\lt x\lt L_x,\ 0\lt y\lt L_y,\ 0\lt z\lt L_z,\\
\infty,&\text{otherwise}.
\end{cases}
\tag*{[1]}
\\]

Inside the box, Cartesian separation gives one free-particle equation per direction:

\\[
\frac{d^2X}{dx^2}+k_x^2X=0,
\qquad k_x^2=\frac{2mE_x}{\hbar^2},
\tag*{[2]}
\\]

with corresponding equations obtained by replacing \\(x\\) with \\(y\\) or \\(z\\). The general x-direction solution is

\\[
X(x)=A_x\sin(k_xx)+B_x\cos(k_xx).
\tag*{[3]}
\\]

An infinite wall makes the wavefunction vanish at the boundary. The condition \\(X(0)=0\\) gives \\(B_x=0\\). The condition at the opposite face then gives

\\[
X(L_x)=A_x\sin(k_xL_x)=0
\quad\Longrightarrow\quad
k_x=\frac{n_x\pi}{L_x},
\qquad n_x=1,2,3,\ldots
\tag*{[4]}
\\]

The value \\(n_x=0\\) is excluded because it makes \\(X\\) zero everywhere rather than producing a physical state. Normalising the remaining sine function gives

\\[
1=|A_x|^2\int_0^{L_x}\sin^2\!\left(\frac{n_x\pi x}{L_x}\right)dx
=|A_x|^2\frac{L_x}{2}
\quad\Longrightarrow\quad
X(x)=\sqrt{\frac{2}{L_x}}\sin\!\left(\frac{n_x\pi x}{L_x}\right).
\tag*{[5]}
\\]

Applying the same boundary and normalisation steps along \\(y\\) and \\(z\\), then multiplying the factors, gives

\\[
\psi_{n_xn_yn_z}(x,y,z)
=\sqrt{\frac{8}{L_xL_yL_z}}
\sin\!\left(\frac{n_x\pi x}{L_x}\right)
\sin\!\left(\frac{n_y\pi y}{L_y}\right)
\sin\!\left(\frac{n_z\pi z}{L_z}\right)
\tag*{[6]}
\\]

inside the box, with \\(\psi=0\\) outside. Substitution of [4] into \\(E_x=\hbar^2k_x^2/(2m)\\), followed by addition of all three directional energies, gives

\\[
E_{n_xn_yn_z}
=\frac{\pi^2\hbar^2}{2m}
\left(\frac{n_x^2}{L_x^2}+\frac{n_y^2}{L_y^2}+\frac{n_z^2}{L_z^2}\right).
\tag*{[7]}
\\]

The prefactor in [6] can be checked directly. Each sine-squared integral contributes half its side length, so

\\[
\int_0^{L_x}\!\int_0^{L_y}\!\int_0^{L_z}|\psi|^2\,dz\,dy\,dx
=\frac{8}{L_xL_yL_z}\frac{L_x}{2}\frac{L_y}{2}\frac{L_z}{2}=1.
\tag*{[8]}
\\]

For a cube, set all side lengths to \\(L\\) and define the energy scale

\\[
E_0=\frac{\pi^2\hbar^2}{2mL^2},
\qquad
E_{n_xn_yn_z}=E_0(n_x^2+n_y^2+n_z^2).
\tag*{[9]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Electron energies in a one-nanometre cube",
      question: "An electron is confined to a cubic infinite well of side \\(L=1.00\\,\\mathrm{nm}\\). Find the ground-state energy and the energy for the quantum numbers \\((2,1,1)\\). Use \\(m_e=9.11\\times10^{-31}\\,\\mathrm{kg}\\), \\(\\hbar=1.055\\times10^{-34}\\,\\mathrm{J\\,s}\\), and \\(1\\,\\mathrm{eV}=1.602\\times10^{-19}\\,\\mathrm J\\).",
      answer: "Convert the length first: \\(L=1.00\\times10^{-9}\\,\\mathrm m\\). Equation [9] gives the energy scale \\[E_0=\\frac{\\pi^2(1.055\\times10^{-34})^2}{2(9.11\\times10^{-31})(1.00\\times10^{-9})^2}=6.03\\times10^{-20}\\,\\mathrm J=0.376\\,\\mathrm{eV}.\\] The smallest allowed integers are \\((1,1,1)\\), so \\[E_{111}=E_0(1+1+1)=3E_0=1.13\\,\\mathrm{eV}.\\] For \\((2,1,1)\\), \\[E_{211}=E_0(4+1+1)=6E_0=2.26\\,\\mathrm{eV}.\\] **Final result:** \\(E_{111}=1.13\\,\\mathrm{eV}\\) and \\(E_{211}=2.26\\,\\mathrm{eV}\\). Both values are positive because confinement gives nonzero kinetic energy even though \\(V=0\\) inside the box.",
    },
    {
      title: "Why a zero quantum number is not allowed",
      question: "A proposed box state has \\((n_x,n_y,n_z)=(1,0,2)\\). Does it describe a particle in the well?",
      answer: "The y-factor from [6] would be \\[Y(y)=\\sqrt{\\frac{2}{L_y}}\\sin\\!\\left(\\frac{0\\pi y}{L_y}\\right)=0\\] at every point. Multiplying by this factor makes the full wavefunction identically zero, whose norm is zero rather than one. **Final result:** \\((1,0,2)\\) is not a physical state; every box quantum number must be a positive integer.",
    },
  ]}
/>
`;
