# Level 2 Physics A Quantum Mechanics Content Plan

## Execution Model

Author all nine Quantum Mechanics sections concurrently with nine isolated subagents. Each agent owns one section directory and must not edit the shared content registry. After authoring, run grouped independent reviews in parallel, route findings back to the owning authors, then integrate all 73 title mappings centrally.

Primary source for every batch:

`resources/physics-2a/quantum-mechanics/main.pdf`

Shared requirements come from the approved Quantum Mechanics specification and existing physics content rubrics.

## Parallel Authoring Batches

### Agent 1: Foundations Of Quantum Mechanics

Create eight pages under:

`apps/academy/src/lib/docs/level-2-physics-a/foundations-of-quantum-mechanics/`

Source: primary PDF pp. 6-17 and Appendix A/B where needed.

Review focus: Born interpretation, normalization, Hermiticity, commutator/uncertainty derivation, boundary terms, and Ehrenfest signs.

### Agent 2: Stationary States And Superposition

Create nine pages under:

`apps/academy/src/lib/docs/level-2-physics-a/stationary-states-and-superposition/`

Source: primary PDF pp. 18-27, with transition context from pp. 50-51.

Review focus: separation of time dependence, orthogonality/completeness, bra-ket projections, infinite-well boundary conditions, superposition phases, probabilities, and transition energy signs.

### Agent 3: One-Dimensional Quantum Systems

Create eight pages under:

`apps/academy/src/lib/docs/level-2-physics-a/one-dimensional-quantum-systems/`

Source: primary PDF pp. 28-34.

Review focus: parity, finite-well matching and transcendental conditions, oscillator scaling, ladder-operator normalization, zero-point energy, commutator identities, and compatible observables.

### Agent 4: Three-Dimensional Quantum Mechanics

Create six pages under:

`apps/academy/src/lib/docs/level-2-physics-a/three-dimensional-quantum-mechanics/`

Source: primary PDF pp. 35-38 and Appendix C pp. 89-90.

Review focus: Cartesian product separation, box normalization/degeneracy, spherical volume element, full Laplacian, and radial/angular separation constants.

### Agent 5: Orbital Angular Momentum

Create eight pages under:

`apps/academy/src/lib/docs/level-2-physics-a/orbital-angular-momentum/`

Source: primary PDF pp. 39-46.

Review focus: operator signs, Levi-Civita/commutator cyclic order, simultaneous observables, spherical-coordinate operators, periodic boundary conditions, spherical-harmonic convention, normalization, and allowed quantum numbers.

### Agent 6: The Hydrogen Atom

Create eight pages under:

`apps/academy/src/lib/docs/level-2-physics-a/the-hydrogen-atom/`

Source: primary PDF pp. 47-51 and Appendix D pp. 91-92.

Review focus: reduced radial function, centrifugal potential, normalization measures, Bohr-radius/reduced-mass conventions, degeneracy, radial probability, transition signs, spectral series, and reduced-mass scaling.

### Agent 7: Spin And Angular Momentum Addition

Create eight pages under:

`apps/academy/src/lib/docs/level-2-physics-a/spin-and-angular-momentum-addition/`

Source: primary PDF pp. 52-57 and 67-70.

Review focus: general ladder algebra, half-integer spin, magnetic-moment signs, Stern-Gerlach force, spinor basis ordering, Pauli matrices, coupled quantum-number ranges, and total electronic angular momentum.

### Agent 8: Perturbation Theory And Fine Structure

Create ten pages under:

`apps/academy/src/lib/docs/level-2-physics-a/perturbation-theory-and-fine-structure/`

Source: primary PDF pp. 58-79.

Review focus: non-degenerate assumptions, first-order formulas, delta-function dimensions, degenerate perturbation matrices/good bases, spin-orbit factors, relativistic/Darwin corrections, fine-structure combination, selection rules, and survey-level hyperfine/multi-electron scope.

### Agent 9: Quantum Theorems And Postulates

Create eight pages under:

`apps/academy/src/lib/docs/level-2-physics-a/quantum-theorems-and-postulates/`

Source: primary PDF pp. 80-86 and Appendix E p. 93.

Review focus: marginalization domains, time-energy interpretation, expectation-value dynamics, virial theorem boundary assumptions, correspondence limits, formal postulates, projection/collapse language, and cautious source-level treatment of interpretations/decoherence.

## Parallel Review

After all authors return:

1. Run three independent review agents concurrently:
   - Foundations, stationary states, and one-dimensional systems.
   - Three-dimensional mechanics, orbital angular momentum, hydrogen, and spin.
   - Perturbation/fine structure and quantum theorems/postulates.
2. Review against the primary PDF and all content rubrics.
3. Return section-specific findings to the original owning agent sessions in parallel.
4. Re-review any section with critical or important findings.

## Registry Integration

After section-local fixes:

- Extend `apps/academy/src/lib/docs/level-2-physics-a/content.ts` with 73 imports and exact title mappings in `structure.ts` order.
- Preserve all 54 Electromagnetism mappings.
- Confirm all 127 Level 2 Physics A titles are unique and resolve to non-empty bodies.
- Do not change `structure.ts`, routes, components, or registries outside the approved content map.

## Global Audit

Audit all 127 Level 2 Physics A pages for:

- Exact required heading order.
- One Notation and exactly two PhysicsExamples components.
- Sequential `\tag*{[n]}` numbering beginning at `[1]` per page.
- Mandatory doubled raw delimiters.
- No Equation/PhysicsDerivation boxes or forbidden headings.
- No source-facing or cross-page dependency language.
- ASCII source text outside LaTeX.
- Compact notation, explicit final results, and consistent quantum conventions.

## Final Verification

Run:

- Scoped Prettier across all Level 2 Physics A content and registry files.
- `pnpm --filter academy check:questions`
- `pnpm --filter academy lint`
- `git diff --check`
- `pnpm --filter academy build`

Then run two final read-only reviews concurrently:

- Cross-section physics and convention consistency.
- Registry, structure, source, and rubric compliance.

Fix all critical and important findings, rerun affected checks, and rerun the production build.

## Risks And Controls

- **Parallel convention drift:** shared specification defines notation; final cross-section review reconciles deviations.
- **Registry conflicts:** authors never edit the registry; one integration pass owns it.
- **Large page count:** structural scripts audit every body rather than relying on spot checks.
- **Formal derivation errors:** independent reviews group mathematically connected sections.
- **Thin source topics:** supplements remain constrained to scaffolding; no unsupported advanced expansion.
- **Worktree concurrency:** agents own disjoint directories and must not modify unrelated files.

## Expected File Impact

- 73 new topic `content.ts` files across nine section directories.
- One extended Level 2 Physics A content registry.
- This specification and plan.
- No new dependencies, components, questions, exams, routes, or structure changes.
