export const content = String.raw`## Principle

Maxwell relations follow from exact thermodynamic differentials and equality of mixed second derivatives. Deriving them from the selected potential is safer than using a sign mnemonic.

## Notation

<Notation
  items={[
    { symbol: "U,H,F,G", meaning: "internal energy, enthalpy, Helmholtz energy, and Gibbs energy", unit: "J" },
    { symbol: "S,T,p,V", meaning: "entropy, absolute temperature, pressure, and total volume", unit: "J K^{-1}, K, Pa, m^{3}" },
    { symbol: "x,y,z,A,B", meaning: "generic independent variables, exact state function, and its differential coefficients" },
  ]}
/>

## The Core Method

At fixed composition, begin with the four exact potential differentials:

\\[
\begin{aligned}
dU&=T\,dS-p\,dV, & dH&=T\,dS+V\,dp,\\
dF&=-S\,dT-p\,dV, & dG&=-S\,dT+V\,dp.
\end{aligned}
\tag*{[1]}
\\]

For any exact differential \\(dz=A\,dx+B\,dy\\), coefficient matching and equality of mixed partials give

\\[
A=\left(\frac{\partial z}{\partial x}\right)_y,
\quad
B=\left(\frac{\partial z}{\partial y}\right)_x,
\quad
\left(\frac{\partial A}{\partial y}\right)_x
=\left(\frac{\partial B}{\partial x}\right)_y.
\tag*{[2]}
\\]

Applying equation [2] to \\(U(S,V)\\), where the coefficient of \\(dV\\) is \\(-p\\), gives the crucial minus sign:

\\[
\left(\frac{\partial T}{\partial V}\right)_S
=-\left(\frac{\partial p}{\partial S}\right)_V.
\tag*{[3]}
\\]

Applying the same method to \\(H(S,p)\\) gives

\\[
\left(\frac{\partial T}{\partial p}\right)_S
=\left(\frac{\partial V}{\partial S}\right)_p.
\tag*{[4]}
\\]

From \\(F(T,V)\\), both coefficients are negative and their signs cancel:

\\[
\left(\frac{\partial S}{\partial V}\right)_T
=\left(\frac{\partial p}{\partial T}\right)_V.
\tag*{[5]}
\\]

Finally, \\(G(T,p)\\) gives

\\[
\left(\frac{\partial S}{\partial p}\right)_T
=-\left(\frac{\partial V}{\partial T}\right)_p.
\tag*{[6]}
\\]

<PhysicsExamples collapsible
  items={[
    {
      title: "Derive the Helmholtz Maxwell relation",
      question: "Starting from \\(dF=-S\\,dT-p\\,dV\\), derive its Maxwell relation.",
      answer: "Coefficient matching in equation \\([1]\\) gives \\((\\partial F/\\partial T)_V=-S\\) and \\((\\partial F/\\partial V)_T=-p\\). Differentiate the first with respect to \\(V\\) at fixed \\(T\\), and the second with respect to \\(T\\) at fixed \\(V\\): \\[-\\left(\\frac{\\partial S}{\\partial V}\\right)_T=\\frac{\\partial^2F}{\\partial V\\partial T}=\\frac{\\partial^2F}{\\partial T\\partial V}=-\\left(\\frac{\\partial p}{\\partial T}\\right)_V.\\] Cancelling the two minus signs yields equation \\([5]\\). **Final result:** \\((\\partial S/\\partial V)_T=(\\partial p/\\partial T)_V\\).",
    },
    {
      title: "Check the Gibbs-relation sign with an ideal gas",
      question: "For \\(n\\) moles of ideal gas, \\(V=nRT/p\\). Use the Gibbs Maxwell relation to find \\((\\partial S/\\partial p)_T\\).",
      answer: "Equation \\([6]\\) gives \\((\\partial S/\\partial p)_T=-(\\partial V/\\partial T)_p\\). Since \\(V=nRT/p\\), \\[(\\partial V/\\partial T)_p=nR/p.\\] Therefore \\((\\partial S/\\partial p)_T=-nR/p\\). Increasing pressure isothermally lowers the entropy, confirming the sign. **Final result:** \\((\\partial S/\\partial p)_T=-nR/p\\).",
    },
  ]}
/>
`;
