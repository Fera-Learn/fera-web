export const content = String.raw`## Principle

A thin spherical shell farther from the nucleus contains more volume than an equally thin shell near the centre.

The radial wavefunction alone is not a probability density in radius. Spherical shells grow in volume as the square of their radius, so radial probability combines the wavefunction magnitude with the spherical-coordinate volume element.

## Notation

<Notation
  items={[
    { symbol: "r,dr", meaning: "radius and infinitesimal radial interval", unit: "m, m" },
    { symbol: "\\theta,\\phi,d\\Omega", meaning: "polar angle, azimuthal angle, and solid-angle element d\\Omega=\\sin\\theta\\,d\\theta\\,d\\phi", unit: "rad, rad, sr" },
    { symbol: "\\psi_{n\\ell m},R_{n\\ell},Y_{\\ell m}", meaning: "spatial wavefunction, radial function, and normalized spherical harmonic", unit: "m^{-3/2}, m^{-3/2}, 1" },
    { symbol: "U_{n\\ell}", meaning: "reduced radial function rR_{n\\ell}", unit: "m^{-1/2}" },
    { symbol: "P_{n\\ell},\\mathcal P", meaning: "radial probability density and dimensionless probability", unit: "m^{-1}, 1" },
    { symbol: "n,\\ell", meaning: "principal and orbital quantum numbers", unit: "1" },
    { symbol: "a", meaning: "hydrogenic length scale", unit: "m" },
    { symbol: "\\langle r\\rangle", meaning: "expectation value of radius", unit: "m" },
    { symbol: "dV,r_1,r_2,x", meaning: "volume element, radial interval bounds, and example integration variable", unit: "m^{3}, m, m, 1" },
  ]}
/>

## The Core Method

In spherical coordinates, a volume element is \\(dV=r^2\sin\theta\,dr\,d\theta\,d\phi=r^2dr\,d\Omega\\). The probability in that element is

\\[
d\mathcal P=|\psi_{n\ell m}(r,\theta,\phi)|^2r^2\,dr\,d\Omega.
\tag*{[1]}
\\]

For a separated state \\(\psi_{n\ell m}=R_{n\ell}Y_{\ell m}\\), integrate equation [1] over all directions to obtain the probability in the shell from \\(r\\) to \\(r+dr\\):

\\[
P_{n\ell}(r)\,dr
=|R_{n\ell}(r)|^2r^2\,dr
\int |Y_{\ell m}(\theta,\phi)|^2d\Omega.
\tag*{[2]}
\\]

The spherical harmonic is normalized so that its angular integral is one. Therefore

\\[
P_{n\ell}(r)=r^2|R_{n\ell}(r)|^2=|U_{n\ell}(r)|^2.
\tag*{[3]}
\\]

For the hydrogen ground state, write the radius as \\(r/a\\). The dimensionless radial factor and radial probability are

\\[
a^{3/2}R_{10}=2e^{-r/a},
\qquad
aP_{10}=4\left(\frac{r}{a}\right)^2e^{-2r/a}.
\\]

<CartesianGrid
  className="mx-auto max-w-xl"
  height={360}
  width={580}
  title="Ground-state radial function and radial probability"
  caption="The radial function is largest at the origin, but the shell-volume factor makes the radial probability vanish there and peak at r = a."
  xRange={{ min: 0, max: 5, step: 0.5, label: "dimensionless radius r/a" }}
  yRange={{ min: 0, max: 2, step: 0.25, label: "dimensionless scaled value" }}
>
  <Curve
    color="var(--chart-1)"
    points={Array.from({ length: 401 }, (_, index) => {
      const radius = (5 * index) / 400;
      return { x: radius, y: 2 * Math.exp(-radius) };
    })}
    smooth
  />
  <Curve
    color="var(--destructive)"
    points={Array.from({ length: 401 }, (_, index) => {
      const radius = (5 * index) / 400;
      return { x: radius, y: 4 * radius ** 2 * Math.exp(-2 * radius) };
    })}
    smooth
  />
  <DashedLine x={1} />
  <Point color="var(--destructive)" x={1} y={4 * Math.exp(-2)} />
  <Annotation point={{ x: 0.25, y: 2 * Math.exp(-0.25) }} label="scaled radial factor" offset={{ x: 130, y: -10 }} />
  <Annotation point={{ x: 1.8, y: 4 * 1.8 ** 2 * Math.exp(-3.6) }} label="scaled radial probability" offset={{ x: 42, y: 22 }} />
  <Annotation point={{ x: 1, y: 4 * Math.exp(-2) }} label="peak at r = a" offset={{ x: 30, y: -55 }} />
</CartesianGrid>

The blue curve answers how the radial amplitude changes with radius. The red curve answers where the particle is most likely to lie in a spherical shell. Although \\(R_{10}\\) is largest at \\(r=0\\), a shell there has zero volume, so \\(P_{10}(0)=0\\); the shell probability reaches its maximum at \\(r=a\\).

The three quantities in equation [3] have different meanings: \\(|\psi|^2\\) is probability per unit volume, \\(|R|^2\\) is the squared radial factor, and \\(P_{n\ell}\\) is probability per unit radius. Radial normalization is

\\[
\int_0^\infty P_{n\ell}(r)\,dr
=\int_0^\infty r^2|R_{n\ell}(r)|^2\,dr
=1.
\tag*{[4]}
\\]

The probability of finding the particle between two radii is consequently

\\[
\mathcal P(r_1\leq r\leq r_2)
=\int_{r_1}^{r_2}P_{n\ell}(r)\,dr.
\tag*{[5]}
\\]

Expectation values of functions of radius use the same measure. In particular,

\\[
\langle r\rangle
=\int_0^\infty rP_{n\ell}(r)\,dr
=\int_0^\infty r^3|R_{n\ell}(r)|^2\,dr.
\tag*{[6]}
\\]

To find a most probable radius away from a node or boundary, solve

\\[
\frac{dP_{n\ell}}{dr}=0
\tag*{[7]}
\\]

and compare all stationary values with the endpoints. Maximizing \\(|R|^2\\) instead of \\(r^2|R|^2\\) answers a different question and generally gives the wrong radius.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Most probable radius of a 2p state",
      question: "For \\(R_{21}(r)=a^{-3/2}(r/a)e^{-r/(2a)}/\\sqrt{24}\\), find the most probable radius.",
      answer: "First form the radial density using equation [3]: \\[P_{21}(r)=r^2|R_{21}(r)|^2=\\frac{r^4}{24a^5}e^{-r/a}.\\] Differentiate the complete density: \\[\\frac{dP_{21}}{dr}=\\frac{e^{-r/a}}{24a^5}\\left(4r^3-\\frac{r^4}{a}\\right)=\\frac{r^3e^{-r/a}}{24a^5}\\left(4-\\frac{r}{a}\\right).\\] The stationary radii are \\(r=0\\) and \\(r=4a\\). The density vanishes at \\(r=0\\) and at infinity, while it is positive between them, so the interior stationary point is the maximum. **Final result:** the most probable 2p radius is \\(r_{\\mathrm{mp}}=4a\\).",
    },
    {
      title: "Probability beyond the ground-state classical turning radius",
      question: "For the ground-state radial density \\(P_{10}(r)=4r^2a^{-3}e^{-2r/a}\\), calculate the probability that \\(r\\geq2a\\).",
      answer: "Integrate the radial density, substituting \\(x=2r/a\\), so \\(dr=(a/2)dx\\): \\[\\mathcal P(r\\geq2a)=\\int_{2a}^{\\infty}\\frac{4r^2}{a^3}e^{-2r/a}\\,dr=\\frac12\\int_4^\\infty x^2e^{-x}\\,dx.\\] An antiderivative is \\(-e^{-x}(x^2+2x+2)\\), hence \\[\\mathcal P=\\frac12 e^{-4}(4^2+2\\cdot4+2)=13e^{-4}=0.238.\\] **Final result:** the probability is about \\(0.24\\), demonstrating nonzero penetration into the classically forbidden region.",
    },
  ]}
/>
`;
