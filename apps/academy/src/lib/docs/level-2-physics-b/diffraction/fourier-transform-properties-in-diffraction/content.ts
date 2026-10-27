export const content = String.raw`## Principle

Fourier-transform properties turn aperture manipulations into predictable far-field changes. Linearity preserves coherent sums, translation creates phase ramps, scaling reverses widths, and Cartesian products remain separable.

## Notation

<Notation
  items={[
    { symbol: "x',y'", meaning: "aperture-plane coordinates", unit: "m, m" },
    { symbol: "u,v", meaning: "cyclic spatial frequencies", unit: "m^{-1}, m^{-1}" },
    { symbol: "f,g,h", meaning: "aperture-plane functions" },
    { symbol: "F,G,H,\\mathcal F", meaning: "unnormalised Fourier transforms of f, g, and h, and the Fourier-transform operation" },
    { symbol: "c_1,c_2", meaning: "complex constants" },
    { symbol: "d_x,d_y", meaning: "aperture translations", unit: "m, m" },
    { symbol: "X,Y", meaning: "shifted aperture coordinates used in substitutions", unit: "m, m" },
    { symbol: "s_x,s_y", meaning: "nonzero real scale factors" },
    { symbol: "x,y,z", meaning: "observation coordinates and distance", unit: "m, m, m" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Use the unnormalised convention

\\[
F(u,v)=\mathcal F\{f\}(u,v)
=\iint f(x',y')e^{-i2\pi(ux'+vy')}dx'\,dy'.
\tag*{[1]}
\\]

Linearity follows by distributing the integral:

\\[
\mathcal F\{c_1g+c_2h\}
=\iint(c_1g+c_2h)e^{-i2\pi(ux'+vy')}dx'\,dy'
=c_1G+c_2H.
\tag*{[2]}
\\]

For translation, set \\(X=x'-d_x\\), \\(Y=y'-d_y\\). Then

\\[
\mathcal F\{f(x'-d_x,y'-d_y)\}
=e^{-i2\pi(ud_x+vd_y)}F(u,v).
\tag*{[3]}
\\]

For one-dimensional scaling, set \\(X=s_xx'\\), so \\(dx'=dX/s_x\\); reversing limits when \\(s_x<0\\) produces an absolute value:

\\[
\mathcal F\{g(s_xx')\}(u)
=\frac{1}{|s_x|}G\!\left(\frac{u}{s_x}\right).
\tag*{[4]}
\\]

Applying that substitution in both dimensions gives

\\[
\mathcal F\{f(s_xx',s_yy')\}(u,v)
=\frac{1}{|s_xs_y|}F\!\left(\frac{u}{s_x},\frac{v}{s_y}\right).
\tag*{[5]}
\\]

Finally, if \\(f(x',y')=g(x')h(y')\\), the exponential also factors and Fubini's theorem gives

\\[
F(u,v)=\left[\int g(x')e^{-i2\pi ux'}dx'\right]
\left[\int h(y')e^{-i2\pi vy'}dy'\right]
=G(u)H(v).
\tag*{[6]}
\\]

Fraunhofer coordinates obey \\(u=x/(\lambda z)\\), \\(v=y/(\lambda z)\\). Thus a real-space enlargement narrows the pattern, while translation leaves isolated-aperture intensity unchanged but changes phase. Linearity applies to fields, not intensities: coherent aperture contributions must be summed before taking a modulus squared.

<PhysicsExamples collapsible
  items={[
    {
      title: "Scaling a slit transform",
      question: "A slit function \\(g(x')\\) has transform \\(G(u)\\). Express the transform after the slit is compressed by a factor of \\(2\\), so the new function is \\(g(2x')\\), and state the change in diffraction width.",
      answer: "Use equation \\([4]\\) with \\(s_x=2\\): \\[\\mathcal F\\{g(2x')\\}(u)=\\frac12G\\!\\left(\\frac{u}{2}\\right).\\] The argument reaches any original feature when \\(u/2\\) reaches its former value, so each feature occurs at twice the spatial frequency and hence twice the observation coordinate \\(x=\\lambda zu\\). **Final result:** the field transform is \\(G(u/2)/2\\), and the normalised diffraction pattern is twice as wide.",
    },
    {
      title: "Coherent versus incoherent addition",
      question: "Two aperture contributions have transforms \\(G\\) and \\(H\\). Should their Fraunhofer intensities be added as \\(|G|^{2}+|H|^{2}\\)?",
      answer: "For mutually coherent illumination, equation \\([2]\\) gives the total field transform \\(G+H\\). Its intensity is \\[|G+H|^2=|G|^2+|H|^2+GH^*+G^*H.\\] The cross terms carry interference and are lost by adding intensities first. **Final result:** coherent apertures give \\(|G+H|^2\\), not merely \\(|G|^2+|H|^2\\); direct intensity addition requires absent or averaged-out coherence.",
    },
  ]}
/>
`;
