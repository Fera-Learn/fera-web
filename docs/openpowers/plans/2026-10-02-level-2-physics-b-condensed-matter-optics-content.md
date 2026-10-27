# Level 2 Physics B Condensed Matter And Optics Content Plan

## Execution Model

Run seven section-authoring subagents concurrently. Each agent owns one section directory and must not edit shared integration files. After authoring, run three grouped independent reviews concurrently, route findings back to the original owners in parallel, then perform one registry/page-wiring integration pass.

## Parallel Authoring

### Agent 1: Condensed Matter Overview

Create five pages under:

`apps/academy/src/lib/docs/level-2-physics-b/condensed-matter-overview/`

Primary source: condensed-matter `slides1(1) - Tagged.pdf` pp. 5-18.

Focus: accurate water phase diagram, subject methods/scope, distinctions among ordered states and quantum fluids, soft-matter classes, and historically cautious semiconductor/Moore's-law treatment.

### Agent 2: Crystal Lattices And Symmetry

Create four pages under:

`apps/academy/src/lib/docs/level-2-physics-b/crystal-lattices-and-symmetry/`

Primary source: slides 1 pp. 19-29 and slides 2 pp. 4-8, 15.

Focus: primitive translations, crystallographic restriction, cubic conventional/primitive cells, lattice-point counting, and complete but scope-limited Bravais classification.

### Agent 3: Crystal Structures And Planes

Create four pages under:

`apps/academy/src/lib/docs/level-2-physics-b/crystal-structures-and-planes/`

Primary source: slides 2 pp. 6-15.

Focus: lattice versus basis, cubic structure examples, HCP stacking/coordination/packing geometry, Miller-index procedure, and valid interplanar-spacing assumptions.

### Agent 4: One Wave

Create sixteen pages under:

`apps/academy/src/lib/docs/level-2-physics-b/one-wave/`

Primary source: optics `overall.pdf` pp. 5-20.

Focus: common harmonic/complex convention, Maxwell-to-wave derivation, phasors/intensity, scalar limits, phase geometry, paraxial/Fresnel expansion, quadratic lens phase, and thin-lens imaging.

### Agent 5: Interference

Create ten pages under:

`apps/academy/src/lib/docs/level-2-physics-b/interference/`

Primary source: optics `overall.pdf` pp. 21-37.

Focus: intensity cross terms, plane/spherical phase geometry, interferometer paths, Young/Michelson results, path/phase/fringe signs, finite phasor sums, N-slit limits, and grating maxima.

### Agent 6: Diffraction

Create seventeen pages under:

`apps/academy/src/lib/docs/level-2-physics-b/diffraction/`

Primary source: optics `overall.pdf` pp. 38-58.

Focus: one Fourier-transform normalization, Fresnel kernel and aperture coordinates, zone construction, Fraunhofer criteria, lens focal-plane relation, aperture transforms, translation/convolution/array properties, slit/envelope distinctions, Gaussian scaling, Airy constants, and resolution.

### Agent 7: Polarisation

Create twenty-six pages under:

`apps/academy/src/lib/docs/level-2-physics-b/polarisation/`

Primary source: optics `overall.pdf` pp. 59-78.

Focus: fixed propagation/handedness convention, linear and circular bases, coefficient transformations, polariser mechanisms, Malus law, retardance and wave plates, reciprocal/non-reciprocal rotation, optical isolation, and polarisation-dependent interference.

## Parallel Review

After all authors finish, run three independent review agents concurrently:

1. All three Condensed Matter sections.
2. One Wave and Interference.
3. Diffraction and Polarisation.

Review against local PDFs, approved specification, and all physics content rubrics. Send findings back to the original section-owner sessions concurrently and re-review any critical or important corrections.

## Integration

Create:

`apps/academy/src/lib/docs/level-2-physics-b/content.ts`

The file will:

- Import all 82 new topic bodies.
- Export one `level2PhysicsBTopicBodies` map.
- Register exact titles in module/section/topic order.

Update:

`apps/academy/src/lib/docs/pages.ts`

The update will:

- Import `level2PhysicsBTopicBodies`.
- Pass `body: level2PhysicsBTopicBodies.get(topic.title)` when creating Level 2 Physics B topic pages.
- Leave Thermodynamics pages on the normal empty-body fallback.

## Global Audit

Audit the requested 82 pages for:

- Exact heading order.
- One Notation and exactly two PhysicsExamples components.
- Two explicit final results.
- Sequential equation tags starting at `[1]`.
- Doubled raw delimiters and valid component-string escaping.
- No Equation/PhysicsDerivation boxes or forbidden headings.
- No source-facing/cross-page dependency language.
- ASCII source text.
- Exact path/title/registry coverage with no duplicates or extra files.

Confirm separately that:

- All 82 Condensed Matter and Optics topics resolve to non-empty bodies.
- All Thermodynamics topics remain structurally present and are not accidentally mapped.

## Final Verification

Run:

- Scoped Prettier on all new Physics B content and integration files.
- `pnpm --filter academy check:questions`
- `pnpm --filter academy lint`
- `git diff --check`
- `pnpm --filter academy build`

Then run two final reviews concurrently:

- Cross-section physics/convention consistency.
- Registry, page wiring, source scope, and rubric compliance.

Fix all critical and important findings, rerun affected checks, and rerun the production build.

## Risks And Controls

- **Thin condensed slides:** supplement only with standard, stable crystallography facts and label assumptions.
- **Large optics sections:** give each section one owner to preserve notation and Fourier/phase conventions.
- **Parallel convention drift:** specification defines shared conventions; grouped and final reviews reconcile differences.
- **Registry conflicts:** section owners never edit shared integration files.
- **Thermodynamics regression:** integration maps only exact requested titles and explicitly audits unmapped Thermodynamics topics.
- **Rendering failures:** every agent compiles its section through the production MDX path before integration.

## Expected File Impact

- 82 new topic `content.ts` files across seven section directories.
- One new Physics B content registry.
- One small `pages.ts` import/body-wiring update.
- Approved specification and plan files.
- No new dependencies, components, questions, exams, diagrams, routes, or structure changes.
