export const content = String.raw`## Principle

Two equal and opposite sources placed close together make a pattern that is very different from either source alone.

Monopoles and dipoles describe simple field sources, while superposition builds more complicated fields from simpler ones. Because electric and magnetic fields add as vectors, an imagined negative source can cancel part of a known source and reveal the field in the remaining region.

## Notation

<Notation
  items={[
    { symbol: "q", meaning: "electric charge", unit: "C" },
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "\\rho", meaning: "uniform volume charge density", unit: "C m^{-3}" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "F m^{-1}" },
    { symbol: "\\vec r,\\vec r'", meaning: "position vectors measured from the large-sphere and auxiliary-sphere centres", unit: "m" },
    { symbol: "\\vec a", meaning: "displacement from the large-sphere centre to the auxiliary-sphere centre", unit: "m" },
    { symbol: "d\\vec A", meaning: "outward-directed area element on closed surface S", unit: "m^{2}" },
  ]}
/>

## The Core Method

An electric monopole is an isolated charge \\(q\\): field lines point away from a positive monopole and towards a negative monopole, so charge acts as a source or sink of electric field. An electric dipole consists of equal positive and negative charges separated in space, and its field lines leave the positive charge and curve towards the negative charge. By contrast, no isolated magnetic monopoles have been observed, so magnetic field lines do not begin or end: they form closed loops or continue through space.

\\[
\oint_S\vec B\cdot d\vec A=0\tag*{[1]}
\\]

Superposition means adding fields vectorially, not merely adding their magnitudes. If source \\(i\\) produces \\(\vec E_i\\) at the point of interest, the total electric field is

\\[
\vec E=\sum_i\vec E_i\tag*{[2]}
\\]

The same linear rule applies to magnetic fields produced by several sources.

\\[
\vec B=\sum_i\vec B_i\tag*{[3]}
\\]

Now consider a large sphere of radius \\(R\\), centred at the origin, with uniform positive charge density \\(\rho\\). A Gaussian sphere of radius \\(r<R\\) encloses charge \\(\rho(4\pi r^3/3)\\), so Gauss's law gives

\\[
E(4\pi r^2)=\frac{\rho}{\epsilon_0}\left(\frac{4\pi r^3}{3}\right)\tag*{[4]}
\\]

Solving for the magnitude and restoring the outward radial direction gives the field inside the complete positive sphere.

\\[
\vec E_{+}(\vec r)=\frac{\rho}{3\epsilon_0}\vec r,\qquad |\vec r|\lt R\tag*{[5]}
\\]

A spherical cavity lies fully inside the large sphere. Represent the cavity by superposing an auxiliary sphere of charge density \\(-\rho\\), centred at displacement \\(\vec a\\), whose position vector to the same point is \\(\vec r'\\).

<PhysicsDiagram slug="hollow-sphere-superposition" />

The hollow sphere on the left is reproduced by adding the two complete spheres on the right. Moving the negative sphere onto the dashed location cancels the positive density only inside that overlap, leaving the surrounding positive sphere unchanged.

\\[
\vec r'=\vec r-\vec a\tag*{[6]}
\\]

The auxiliary sphere has the same shape and position as the cavity, so its negative density exactly cancels the positive density there. At a point inside the auxiliary sphere, its field is

\\[
\vec E_{-}(\vec r')=-\frac{\rho}{3\epsilon_0}\vec r'\tag*{[7]}
\\]

Apply vector superposition at any point in the cavity.

\\[
\vec E_{\mathrm{cavity}}=\vec E_{+}+\vec E_{-}\tag*{[8]}
\\]

Substituting the two sphere fields gives

\\[
\vec E_{\mathrm{cavity}}=\frac{\rho}{3\epsilon_0}\left(\vec r-\vec r'\right)\tag*{[9]}
\\]

Using equation [6], the position-dependent terms cancel.

\\[
\vec E_{\mathrm{cavity}}=\frac{\rho}{3\epsilon_0}\vec a\tag*{[10]}
\\]

The final expression contains no position vector for the observation point. Every point in the cavity therefore has the same electric field: the field is uniform and, for positive \\(\rho\\), points from the large-sphere centre towards the cavity centre.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Reading the uniform cavity field",
      question: "A spherical cavity is displaced from the centre of a uniformly positively charged sphere. Determine the field direction and explain how the result confirms uniformity.",
      answer: "Use the superposition result \\[\\vec E_{\\mathrm{cavity}}=\\frac{\\rho}{3\\epsilon_0}\\vec a.\\] Here \\(\\vec a\\) points from the large-sphere centre to the cavity centre. Because \\(\\rho\\) is positive, the scalar coefficient is positive, so the electric field points in the direction of \\(\\vec a\\). The expression is independent of the observation position \\(\\vec r\\), so moving anywhere within the cavity does not change either the magnitude or direction. **Final result:** the cavity field is uniform and points from the large-sphere centre towards the cavity centre. A common error is to set the field to zero because the charge density in the cavity is zero; the surrounding charge still produces a nonzero field there.",
    },
    {
      title: "Constructing a drilled current distribution",
      question: "A cylindrical hole is drilled parallel to the axis of a long cylinder carrying uniform current density. Set up the analogous superposition construction for finding the magnetic field in the hole.",
      answer: "Let \\(\\vec J\\) denote the uniform current density of the original full cylinder. First imagine the undrilled cylinder carrying \\(\\vec J\\). Then place an auxiliary cylinder exactly over the intended hole, with the same radius and axis as the hole but current density \\(-\\vec J\\). Inside the overlap, \\[\\vec J+(-\\vec J)=0,\\] so that region represents the drilled hole; outside it, the original current distribution is unchanged. The magnetic field in the hole is then obtained by vectorially superposing the fields of the full cylinder and the negative-current auxiliary cylinder, with each field evaluated relative to its own axis. This is the magnetic counterpart of the charged-sphere cavity construction.",
    },
  ]}
/>
`;
