export const content = String.raw`## Principle

Motion in three perpendicular directions can sometimes behave like three independent one-dimensional problems.

A three-dimensional stationary problem separates into three one-dimensional problems when the potential is a sum of independent Cartesian terms and the domain has coordinate-wise boundary conditions. Each direction then contributes its own separation energy, and those three contributions add to the total energy.

## Notation

<Notation
  items={[
    { symbol: "x,y,z", meaning: "Cartesian position coordinates", unit: "m, m, m" },
    { symbol: "\\psi(x,y,z)", meaning: "stationary spatial wavefunction", unit: "m^{-3/2}" },
    { symbol: "X(x),Y(y),Z(z)", meaning: "one-dimensional factors of the spatial wavefunction", unit: "m^{-1/2}, m^{-1/2}, m^{-1/2}" },
    { symbol: "V,V_x,V_y,V_z", meaning: "total potential energy and its Cartesian contributions", unit: "J, J, J, J" },
    { symbol: "E,E_x,E_y,E_z", meaning: "total energy and Cartesian separation energies", unit: "J, J, J, J" },
    { symbol: "m", meaning: "particle mass", unit: "kg" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\omega", meaning: "angular frequency of an isotropic harmonic oscillator", unit: "rad s^{-1}" },
    { symbol: "n_x,n_y,n_z", meaning: "nonnegative Cartesian oscillator quantum numbers", unit: "1" },
    { symbol: "i", meaning: "Cartesian axis label x, y, or z" },
    { symbol: "\\lambda", meaning: "constant coupling coefficient in a test potential", unit: "J m^{-2}" },
  ]}
/>

## The Core Method

Cartesian separation requires an additive potential and boundaries that do not couple the coordinates. On all space, or in a rectangular domain with one boundary condition per axis, the potential condition is

\\[
V(x,y,z)=V_x(x)+V_y(y)+V_z(z).
\tag*{[1]}
\\]

Assume a product wavefunction

\\[
\psi(x,y,z)=X(x)Y(y)Z(z).
\tag*{[2]}
\\]

Substitute [1] and [2] into the time-independent Schrodinger equation. Each second derivative acts on only one factor:

\\[
-\frac{\hbar^2}{2m}
\left(YZ\frac{d^2X}{dx^2}+XZ\frac{d^2Y}{dy^2}+XY\frac{d^2Z}{dz^2}\right)
+(V_x+V_y+V_z)XYZ
=EXYZ.
\tag*{[3]}
\\]

In any region where \\(XYZ\ne0\\), divide [3] by \\(XYZ\\) and group each coordinate with its own potential term:

\\[
\left[-\frac{\hbar^2}{2mX}\frac{d^2X}{dx^2}+V_x(x)\right]
+\left[-\frac{\hbar^2}{2mY}\frac{d^2Y}{dy^2}+V_y(y)\right]
+\left[-\frac{\hbar^2}{2mZ}\frac{d^2Z}{dz^2}+V_z(z)\right]
=E.
\tag*{[4]}
\\]

The first bracket depends only on \\(x\\), the second only on \\(y\\), and the third only on \\(z\\). Differentiate [4] with respect to \\(x\\). The last two brackets and \\(E\\) have zero derivative, so the first bracket must be constant. Repeating the argument for \\(y\\) and \\(z\\) defines

\\[
-\frac{\hbar^2}{2mX}\frac{d^2X}{dx^2}+V_x=E_x,
\qquad
-\frac{\hbar^2}{2mY}\frac{d^2Y}{dy^2}+V_y=E_y,
\qquad
-\frac{\hbar^2}{2mZ}\frac{d^2Z}{dz^2}+V_z=E_z.
\tag*{[5]}
\\]

Multiplying each relation by its wavefunction factor gives three one-dimensional eigenvalue equations:

\\[
-\frac{\hbar^2}{2m}\frac{d^2X}{dx^2}+V_xX=E_xX,
\quad
-\frac{\hbar^2}{2m}\frac{d^2Y}{dy^2}+V_yY=E_yY,
\quad
-\frac{\hbar^2}{2m}\frac{d^2Z}{dz^2}+V_zZ=E_zZ.
\tag*{[6]}
\\]

Comparing [4] and [5] fixes the total energy:

\\[
E=E_x+E_y+E_z.
\tag*{[7]}
\\]

If each one-dimensional factor is normalised on the real line, the product is automatically normalised in three dimensions because

\\[
\int_{\mathbb R^3}|XYZ|^2\,dx\,dy\,dz
=\left(\int_{-\infty}^{\infty}|X|^2dx\right)
\left(\int_{-\infty}^{\infty}|Y|^2dy\right)
\left(\int_{-\infty}^{\infty}|Z|^2dz\right)=1.
\tag*{[8]}
\\]

A product guess alone is not enough. If the potential contains a genuine coupling such as \\(\lambda xy\\), it cannot be placed into one bracket in [4], so this Cartesian separation fails in the original coordinates.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Energy of a separated isotropic oscillator state",
      question: "For \\(V=\\tfrac12m\\omega^2(x^2+y^2+z^2)\\), find the energy of the state \\((n_x,n_y,n_z)=(1,0,2)\\) using the one-dimensional result \\(E_i=\\hbar\\omega(n_i+\\tfrac12)\\).",
      answer: "First split the potential as \\(V_x=\\tfrac12m\\omega^2x^2\\), \\(V_y=\\tfrac12m\\omega^2y^2\\), and \\(V_z=\\tfrac12m\\omega^2z^2\\), so condition [1] holds. The directional energies are \\[E_x=\\hbar\\omega\\left(1+\\frac12\\right)=\\frac32\\hbar\\omega,\\qquad E_y=\\hbar\\omega\\left(0+\\frac12\\right)=\\frac12\\hbar\\omega,\\] \\[E_z=\\hbar\\omega\\left(2+\\frac12\\right)=\\frac52\\hbar\\omega.\\] Equation [7] then gives \\[E=\\left(\\frac32+\\frac12+\\frac52\\right)\\hbar\\omega=\\frac92\\hbar\\omega.\\] **Final result:** \\(E=9\\hbar\\omega/2\\). The three zero-point contributions are included; omitting them would incorrectly give \\(3\\hbar\\omega\\).",
    },
    {
      title: "Testing a coupled potential",
      question: "Can the potential \\(V(x,y,z)=\\lambda xy\\) be written as \\(V_x(x)+V_y(y)+V_z(z)\\) and separated by the method above?",
      answer: "If a potential has the additive form [1], its mixed derivative satisfies \\(\\partial^2V/(\\partial x\\,\\partial y)=0\\), because differentiating \\(V_x\\) with respect to \\(y\\), or \\(V_y\\) with respect to \\(x\\), gives zero. For the proposed potential, \\[\\frac{\\partial V}{\\partial x}=\\lambda y,\\qquad \\frac{\\partial^2V}{\\partial y\\,\\partial x}=\\lambda.\\] This is nonzero when \\(\\lambda\\ne0\\). **Final result:** the \\(xy\\) term couples the two coordinates, so the potential is not additively separable in the original Cartesian axes and equations [5]-[7] do not follow.",
    },
  ]}
/>
`;
