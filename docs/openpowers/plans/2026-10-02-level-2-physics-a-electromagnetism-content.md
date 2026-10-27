# Level 2 Physics A Electromagnetism Content Plan

## Approach

Implement the 42 pages in seven section batches. Each batch will use the same cycle: extract and map source content, draft the topic files, register exact titles, run targeted structural and formatting checks, review against the source and rubrics, fix findings, and reverify before moving to the next section.

The implementation will extend the existing file-per-topic and `level2PhysicsATopicBodies` registry. It will not introduce new components, helpers, registries, or rendering paths.

## Step 1: Electromagnetic Waves

Create six topic directories and `content.ts` files under:

`apps/academy/src/lib/docs/level-2-physics-a/electromagnetic-waves/`

Topics:

1. Electromagnetic Waves in Vacuum
2. Polarisation and the Vector Structure of Waves
3. Phase Velocity and Group Velocity
4. Dispersion and Wave Packets
5. Transmitting and Detecting Electromagnetic Waves
6. Waveguides and Cutoff Frequencies

Primary source: lecture PDF pp. 24-35. Supplement wave and polarisation scaffolding from existing Level 1 wave/light pages and the repository optics PDF where useful.

Checkpoint: register all six titles, audit structure/equation tags, lint, and review the wave-speed, polarisation, velocity, dispersion, antenna, and cutoff conventions.

## Step 2: Relativity and Charge Conservation

Create six topic files under:

`apps/academy/src/lib/docs/level-2-physics-a/relativity-and-charge-conservation/`

Topics:

1. Maxwell's Equations and Galilean Physics
2. Special Relativity Postulates
3. Length Contraction and Time Dilation
4. Electric and Magnetic Fields in Different Frames
5. The Continuity Equation
6. Field Symmetry and Spatial Dependence

Primary source: lecture PDF pp. 35-40. Supplement prerequisite relativity explanations from existing Level 1 pages. Keep field transformations at the depth supported by the charged-wire argument instead of adding a full tensor treatment.

Checkpoint: verify frame conventions, factors of `\gamma`, signs, limiting cases, and continuity-equation consistency.

## Step 3: Conductors and Superconductors

Create six topic files under:

`apps/academy/src/lib/docs/level-2-physics-a/conductors-and-superconductors/`

Topics:

1. Current Density, Conductivity, and Charge Relaxation
2. The Drude Model
3. Electromagnetic Waves in Conductors
4. Plasma Frequency and the High-Frequency Limit
5. Skin Depth and the Low-Frequency Limit
6. London Equations and the Meissner Effect

Primary source: lecture PDF pp. 41-50. Supplement introductory conduction and superconductivity context from existing Level 1 pages and Young and Freedman where appropriate.

Checkpoint: verify complex-number convention, conductivity/permittivity definitions, asymptotic limits, skin-depth dimensions, London signs, and exponential field decay.

## Step 4: Dielectric and Magnetic Materials

Create seven topic files under:

`apps/academy/src/lib/docs/level-2-physics-a/dielectric-and-magnetic-materials/`

Topics:

1. Polar and Non-Polar Dielectrics
2. Polarisation and Bound Charge
3. Polarisation Current Density
4. Magnetisation and Magnetic Dipoles
5. Bound Currents in Magnetic Materials
6. Wave Propagation in Materials
7. Dielectric Resonance and Complex Permittivity

Primary source: lecture PDF pp. 50-63. Supplement molecular dielectric and magnetic-material scaffolding from existing Level 1 pages.

Checkpoint: verify volume/surface bound-charge signs, bound-current curl and cross-product order, free-versus-bound distinctions, material wave relation, resonance denominator, and real/imaginary permittivity conventions.

## Step 5: Interfaces and Fresnel Optics

Create seven topic files under:

`apps/academy/src/lib/docs/level-2-physics-a/interfaces-and-fresnel-optics/`

Topics:

1. The Auxiliary Fields D and H
2. Electric Boundary Conditions
3. Magnetic Boundary Conditions
4. Reflection, Refraction, and Snell's Law
5. Fresnel Equations for Parallel Polarisation
6. Fresnel Equations for Normal Polarisation
7. Brewster's Angle and the Critical Angle

Primary source: lecture PDF pp. 64-77. Supplement elementary reflection/refraction context from existing Level 1 pages.

Checkpoint: state one explicit normal/parallel polarisation convention; verify boundary normals, free surface sources, amplitude signs, refractive-index factors, normal-incidence limits, Brewster angle, and total-internal-reflection condition.

## Step 6: Electromagnetic Energy and Power

Create four topic files under:

`apps/academy/src/lib/docs/level-2-physics-a/electromagnetic-energy-and-power/`

Topics:

1. The Poynting Vector
2. The Poynting Theorem
3. Reflection and Transmission Coefficients
4. Power Flow into Conductors

Primary source: lecture PDF pp. 77-80. Supplement wave-energy context from existing Level 1 pages and Young and Freedman.

Checkpoint: verify Poynting-vector direction, energy-density factors, local/integral theorem signs, time averaging, impedance/refractive-index power factors, and conductor surface-normal conventions.

## Step 7: Radiation from Oscillating Dipoles

Create six topic files under:

`apps/academy/src/lib/docs/level-2-physics-a/radiation-from-oscillating-dipoles/`

Topics:

1. Scalar and Vector Potentials
2. The Lorenz Gauge and Potential Wave Equations
3. The Hertzian Dipole
4. Near and Far Fields
5. Dipole Radiation Patterns
6. Power Radiated by a Hertzian Dipole

Primary source: lecture PDF pp. 80-89.

Checkpoint: verify gauge signs, retarded-time/phase convention, powers of `r`, near-versus-radiation terms, transverse field relation, angular dependence, Poynting flux, solid-angle integration, and total-power dimensions.

## Step 8: Registry And Cross-Section Integration

Extend:

`apps/academy/src/lib/docs/level-2-physics-a/content.ts`

Add imports and exact title mappings for all 42 pages. Confirm all 54 Electromagnetism topic titles now resolve to non-empty bodies without changing `structure.ts`.

Run a global content audit for:

- Exact required heading order.
- Exactly two `<PhysicsExamples>` components per page.
- No `<Equation>` or `<PhysicsDerivation>` use.
- Sequential `\tag*{[n]}` numbering starting at `[1]` on each page.
- No forbidden self-reference phrases or extra summary/mistake/check headings.
- Compact notation and consistent conventions across adjacent topics.

## Step 9: Final Verification And Review

Run:

- Prettier checks on all new files and the registry.
- `pnpm --filter academy check:questions`
- `pnpm --filter academy lint`
- `git diff --check`
- `pnpm --filter academy build`

Perform a final source/rubric review across all seven sections. Fix every critical or important finding and rerun affected checks and the production build.

## Risks And Controls

- **Large content volume:** use section checkpoints so defects do not propagate across all 42 pages.
- **Thin source areas:** supplement only with established repository material and label assumptions or idealisations explicitly.
- **Convention drift:** define harmonic time dependence, surface orientation, polarisation naming, and complex-permittivity conventions locally on every affected page.
- **Overloaded notation:** keep page notation focused; define example-local symbols immediately before use rather than adding unrelated global rows.
- **Duplicated coverage:** assign each derivation to the most specific topic and use neighbouring pages only for self-contained prerequisite summaries.
- **Rendering failures:** keep the proven `String.raw` escaping and plain display-equation pattern and compile through the production build.

## Expected File Impact

- 42 new `content.ts` files in seven existing logical section paths.
- One extended Level 2 Physics A content registry.
- The approved specification and this implementation plan.
- No expected changes to components, routes, structure, questions, exams, or dependencies.
