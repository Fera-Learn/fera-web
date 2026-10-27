# Level 2 Physics B Condensed Matter And Optics Content Specification

## Goal

Create and integrate learner-facing content for every topic in the Level 2 Physics B Condensed Matter Physics and Optics modules, using the approved Level 2 physics presentation and quality standard.

## Scope

Implement 82 pages across seven sections:

- Condensed Matter Overview: 5 topics
- Crystal Lattices and Symmetry: 4 topics
- Crystal Structures and Planes: 4 topics
- One Wave: Foundations of Wave Optics: 16 topics
- Interference: From Two Waves to Multiple Waves: 10 topics
- Diffraction: From Finite to Infinite Waves: 17 topics
- Polarisation: 26 topics

Create the missing Level 2 Physics B topic-body registry and connect it to the existing topic-page construction.

The Thermodynamics module and its 92 topics are explicitly out of scope.

## Source Policy

Authoritative local sources:

- `resources/physics-2b/condensed-matter-physics/slides1(1) - Tagged.pdf`
- `resources/physics-2b/condensed-matter-physics/slides2 - Tagged.pdf`
- `resources/physics-2b/optics/overall.pdf`

Rules:

- Treat the local lecturer PDFs as authoritative for scope, notation, ordering, approximations, and intended depth.
- Paraphrase source material rather than copying it verbatim.
- Supplement the visually terse condensed-matter slides with standard crystallography explanations, derivations, and worked examples while remaining within the stated topic scope.
- Supplement optics only where the notes are thin, using established Academy wave, interference, diffraction, polarisation, Fresnel, and mathematical content.
- Do not silently reconstruct unavailable Kittel pages, `Workshop 1`, `Complex numbers in optics.pdf`, or `Optics f2f` as if they were local authoritative sources.
- Where the optics notes explicitly correct another source, preserve the local optics-note convention.

## Page Requirements

Every page must:

- Export production MDX through `String.raw`.
- Use exactly `Principle`, `Notation`, `The Core Method`, `Worked Cases`, and `Examples` in order.
- Use one compact `<Notation>` and exactly two `<PhysicsExamples>` components.
- Use doubled raw Markdown math delimiters with correct JS-expression escaping.
- Alternate short connected prose with plain display equations.
- Avoid `<Equation>` and `<PhysicsDerivation>` boxes.
- Number main equations sequentially using right-aligned `\tag*{[n]}`, resetting on every page.
- Define all symbols before use and include SI units where applicable.
- Show central derivations without algebraic jumps.
- State geometric, phase, sign, Fourier-transform, handedness, and approximation conventions where they affect results.
- Include one quantitative or derivational worked case and one conceptual or applied example, both with explicit final results.
- Be self-contained and avoid source-facing or cross-page dependency language.
- Remain ASCII outside LaTeX.

## Shared Condensed-Matter Conventions

- Distinguish lattice points, basis atoms, unit cells, conventional cells, and primitive cells.
- Write lattice translations as integer combinations of primitive vectors.
- Distinguish coordination number, atoms per conventional cell, and packing fraction.
- State crystal-system and centring conventions when discussing Bravais lattices.
- Define Miller indices by reciprocal intercepts, including infinity/zero and negative-index notation.
- State the cubic interplanar-spacing formula only under the cubic-lattice assumption; distinguish it from the general orthogonal-axis result.
- Use carefully labelled phase-diagram axes and identify phase boundaries, triple point, and critical point.

## Shared Optics Conventions

- Use one harmonic convention consistently and state it where complex amplitudes or phasors are introduced.
- Distinguish temporal angular frequency `\omega`, spatial frequency, wavenumber `k`, and wavevector `\vec k`.
- Distinguish instantaneous fields, complex amplitudes, phasors, intensity, and time-averaged energy flux.
- State scalar-approximation limits explicitly.
- Use one Fourier-transform normalization convention throughout diffraction pages.
- Distinguish Fresnel/paraxial approximations from Fraunhofer/far-field assumptions.
- Keep aperture-plane and observation-plane coordinates distinct.
- Distinguish interference factors from single-aperture diffraction envelopes.
- State circular-polarisation handedness relative to propagation and time convention.
- Keep linear/circular basis vectors, Jones-like coefficients, polariser axes, retardance, optical activity, and Faraday rotation conventions consistent.

## Section Coverage

### Condensed Matter Overview

Cover states and the water phase diagram, subject scope and experimental/theoretical methods, ordered and quantum-fluid states, soft matter, and historical semiconductor development including Moore's law.

### Crystal Lattices And Symmetry

Cover translational periodicity, allowed crystallographic rotations, simple/body-centred/face-centred cubic lattices, and the 14 three-dimensional Bravais lattices.

### Crystal Structures And Planes

Cover lattice-plus-basis construction, representative cubic structures, HCP stacking and geometry, Miller-index procedure, and interplanar spacing.

### One Wave

Cover the electromagnetic wave equation, superposition, harmonic and complex waves, phase/frequency/wavenumber, phasors, intensity, scalar waves, wavefront geometry, plane/spherical/cylindrical waves, paraxial/Fresnel approximations, and lenses as quadratic phase/imaging elements.

### Interference

Cover intensity cross terms, plane and spherical two-wave interference, interferometer classes, Michelson-Morley and Young arrangements, path/phase/fringe relations, and finite/N-aperture phasor sums.

### Diffraction

Cover Huygens-Fresnel propagation, Fresnel integrals/zones/separability, Fraunhofer regimes and formulae, slit/aperture translation and arrays, Fourier-transform properties, rectangular/Gaussian/circular apertures, Airy patterns, and resolution.

### Polarisation

Cover linear and circular bases, linear/circular/elliptical states in both bases, polariser mechanisms and Malus' law, linear/circular birefringence, wave plates, reciprocal optical activity, non-reciprocal Faraday rotation, optical isolation, and vector interference patterns.

## Parallel Execution

- Use seven concurrent section-author subagents, one per section directory.
- Each agent edits only its assigned section and does not edit shared registry or page wiring.
- Use independent grouped review agents concurrently after authoring.
- Return findings to original section owners in parallel.
- Integrate all 82 exact title mappings only after section-local review passes.

## Integration Requirements

- Add `apps/academy/src/lib/docs/level-2-physics-b/content.ts` containing a single `level2PhysicsBTopicBodies` map.
- Register the 82 exact Condensed Matter and Optics titles in `structure.ts` order.
- Import that registry in `apps/academy/src/lib/docs/pages.ts` and pass the matching body into Level 2 Physics B topic page creation.
- Leave all Thermodynamics topics mapped to the existing empty-body fallback until their content is separately implemented.
- Do not introduce another registry, rendering component, route system, or content abstraction.

## Out Of Scope

- Thermodynamics content.
- Questions, flashcards, exams, equation sheets, or diagrams.
- Changes to existing topic titles, module structure, routes, or navigation.
- New dependencies or content-rendering components.
- Rewriting completed Physics A content.

## Verification

- Confirm exactly 82 new content files and exact title mappings.
- Confirm all requested Condensed Matter and Optics pages resolve to non-empty bodies while Thermodynamics remains structurally intact.
- Audit headings, components, tags, delimiters, ASCII, final results, self-containment, and forbidden components/headings.
- Run scoped Prettier, question-registry validation, Academy lint, and `git diff --check`.
- Compile through the full Academy production build.
- Perform independent section physics/source review and final cross-section convention/integration review.
- Fix all critical and important findings and rerun affected checks and build.

## Success Criteria

- All 82 requested routes contain substantive registered lessons.
- Content follows local course sources and approved Level 2 format.
- The Academy production build succeeds.
- Final review has no unresolved critical or important findings.
- Existing unrelated worktree changes remain intact.

## Decisions

- Implement Condensed Matter Physics and Optics only.
- Carefully supplement thin condensed-matter slides with standard crystallography scaffolding.
- Use seven concurrent section owners.
- Add the missing Physics B body registry and page lookup using the Physics A pattern.

## Open Questions

None.
