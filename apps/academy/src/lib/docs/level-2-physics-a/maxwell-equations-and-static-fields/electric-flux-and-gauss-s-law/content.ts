export const content = String.raw`## Principle

Picture wind crossing an imaginary surface: both the wind strength and the surface orientation determine how much passes through.

Electric flux measures the net electric field passing through an oriented surface. Gauss's law states that the total flux through any closed surface depends only on the net charge enclosed, even when the surface has an irregular shape.

## Notation

<Notation
  items={[
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "\\Phi_E", meaning: "electric flux through a surface", unit: "N m^{2} C^{-1}" },
    { symbol: "d\\vec A,dV", meaning: "outward area vector and volume element", unit: "m^{2}, m^{3}" },
    { symbol: "S,V", meaning: "closed surface and the volume it encloses" },
    { symbol: "q_{\\mathrm{enc}}", meaning: "net charge enclosed by the surface", unit: "C" },
    { symbol: "\\rho", meaning: "volume charge density", unit: "C m^{-3}" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "C^{2} N^{-1} m^{-2}" },
    { symbol: "\\nabla\\cdot", meaning: "divergence operator", unit: "m^{-1}" },
  ]}
/>

## The Core Method

An area vector is perpendicular to its surface patch; on a closed surface it points outward. Write \\(E=|\vec E|\\) and \\(dA=|d\vec A|\\); if \\(\theta\\) is the angle from \\(\vec E\\) to \\(d\vec A\\), the dot product gives the signed flux through that patch.

<PhysicsDiagram slug="electric-flux-gauss-law-geometry" />

The circular surface and the arbitrary surface intercept the same narrow cone from the charge. The 2D projection shows why only the component perpendicular to the radial field contributes: \\(dS'=dS\cos\theta\\).

\\[
d\Phi_E=\vec E\cdot d\vec A=E\,dA\cos\theta\tag*{[1]}
\\]

Flux is positive where the field leaves the surface, negative where it enters, and zero where the field is tangent. Adding every patch gives the net flux through a closed surface \\(S\\).

\\[
\Phi_E=\oint_S\vec E\cdot d\vec A\tag*{[2]}
\\]

To see why enclosed charge controls this flux, place a point charge \\(q\\) at the centre of a sphere of radius \\(R\\). Let \\(\hat R\\) point radially outward; Coulomb's law gives the field at the sphere.

\\[
\vec E=\frac{q}{4\pi\epsilon_0R^2}\hat R\tag*{[3]}
\\]

Every outward area element on the sphere has the same radial direction.

\\[
d\vec A=\hat R\,dA\tag*{[4]}
\\]

The dot product therefore keeps the sign of \\(q\\) and removes the unit vectors because \\(\hat R\cdot\hat R=1\\).

\\[
\vec E\cdot d\vec A=\frac{q}{4\pi\epsilon_0R^2}\,dA\tag*{[5]}
\\]

The factors outside \\(dA\\) are constant everywhere on this sphere, so they can be taken outside the integral.

\\[
\Phi_E=\frac{q}{4\pi\epsilon_0R^2}\oint_S dA\tag*{[6]}
\\]

The integral of the scalar area elements is the total area of the sphere.

\\[
\oint_S dA=4\pi R^2\tag*{[7]}
\\]

Substituting the spherical area into equation [6] cancels the distance dependence without skipping a step.

\\[
\Phi_E=\frac{q}{4\pi\epsilon_0R^2}(4\pi R^2)=\frac{q}{\epsilon_0}\tag*{[8]}
\\]

The cancellation shows why the closed flux does not change when the sphere expands. To move from a sphere to an arbitrary shape, take a tilted patch of area \\(dA\\) at source-to-patch distance \\(s\\). Its projected area is \\(dA\cos\theta\\), and its solid angle is \\(d\Omega=dA\cos\theta/s^2\\).

\\[
d\Phi_E=\frac{q}{4\pi\epsilon_0s^2}\,dA\cos\theta=\frac{q}{4\pi\epsilon_0}\,d\Omega\tag*{[9]}
\\]

For any closed surface enclosing the charge, the oriented solid-angle contributions sum to \\(4\pi\\). Extra intersections on a non-convex surface occur in inward-outward pairs and cancel.

\\[
\oint_S d\Omega=4\pi\quad\Longrightarrow\quad\Phi_E=\frac{q}{\epsilon_0}\tag*{[10]}
\\]

The result therefore does not depend on the shape of the closed surface. Superposition extends it to any collection or distribution of enclosed charge.

\\[
\oint_S\vec E\cdot d\vec A=\frac{q_{\mathrm{enc}}}{\epsilon_0}\tag*{[11]}
\\]

Only net enclosed charge appears in equation [11]. External charges can change \\(\vec E\\) across the surface, but their field contributes as much inward flux as outward flux overall. For a continuous charge distribution, enclosed charge is the charge density integrated over the volume inside \\(S\\).

\\[
q_{\mathrm{enc}}=\int_V\rho\,dV\tag*{[12]}
\\]

The divergence theorem converts closed flux into a volume integral of the field's divergence.

\\[
\oint_S\vec E\cdot d\vec A=\int_V(\nabla\cdot\vec E)\,dV\tag*{[13]}
\\]

Substituting equations [12] and [13] into Gauss's law places both sides over the same arbitrary volume.

\\[
\int_V(\nabla\cdot\vec E)\,dV=\int_V\frac{\rho}{\epsilon_0}\,dV\tag*{[14]}
\\]

Because equation [14] holds for every volume, the integrands must agree at each point. This gives the local form of Gauss's law.

\\[
\nabla\cdot\vec E=\frac{\rho}{\epsilon_0}\tag*{[15]}
\\]

If a closed surface encloses zero net charge, its net flux is zero. This does not require the electric field to vanish: nonzero field may enter through one part of the surface and leave through another.

\\[
q_{\mathrm{enc}}=0\quad\Longrightarrow\quad\Phi_E=0\quad\not\Longrightarrow\quad\vec E=\vec 0\tag*{[16]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Flux from an enclosed charge",
      question: "A closed surface encloses a net charge of \\(+3.0\\,\\mathrm{nC}\\). Find its net electric flux.",
      answer: "Gauss's law needs only the net enclosed charge, so use \\(q_{\\mathrm{enc}}=3.0\\times10^{-9}\\,\\mathrm{C}\\) and \\(\\epsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^2\\,N^{-1}\\,m^{-2}}\\). \\[\\Phi_E=\\frac{q_{\\mathrm{enc}}}{\\epsilon_0}=\\frac{3.0\\times10^{-9}}{8.85\\times10^{-12}}=3.4\\times10^2\\,\\mathrm{N\\,m^2\\,C^{-1}}.\\] The positive result means there is more outward than inward flux, and the value is unchanged if the closed surface is reshaped while enclosing the same net charge.",
    },
    {
      title: "Zero flux in a nonzero field",
      question: "A closed box containing no charge is placed in a uniform electric field. Can its net flux be zero while the field on the box is nonzero?",
      answer: "Yes. Let the uniform field have magnitude \\(E\\) and each perpendicular face have area \\(A\\); one face has outward flux \\(+EA\\), the opposite face has outward flux \\(-EA\\), and the field is tangent to the remaining faces. \\[\\Phi_E=EA-EA+0=0.\\] The field remains nonzero on the box, but equal inward and outward contributions cancel because the box encloses no net charge.",
    },
  ]}
/>
`;
