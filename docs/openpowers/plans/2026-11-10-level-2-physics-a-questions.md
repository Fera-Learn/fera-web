# Level 2 Physics A Questions Plan

## 1. Add the Structure-Derived Validator

Create `apps/academy/scripts/validate-level-2-physics-a-questions.mjs` and register `check:physics-a-questions` in `apps/academy/package.json`.

Derive all 127 expected paths and titles from `structure.ts`. Enforce 20 questions per topic, 2,540 total questions, exact IDs/tags/ratings, required answer sections, duplicate rejection, model and unit standards, JSON/LaTeX safety, and generated-registry agreement.

Run the validator before authoring to establish the expected missing-file baseline.

## 2. Author Static-Field and Induction Sections

Create and validate 240 questions for:

- Maxwell's Equations and Static Fields.
- Electromagnetic Induction.

Audit integral/differential forms, signs, orientations, source terms, symmetry assumptions, and SI units.

## 3. Author Waves, Relativity, and Conductors

Create and validate 360 questions for:

- Electromagnetic Waves.
- Relativity and Charge Conservation.
- Conductors and Superconductors.

Audit wave-vector geometry, phase/group velocity, Lorentz factors, frame transformations, continuity, complex wave numbers, frequency limits, skin depth, and superconducting length scales.

## 4. Author Materials, Interfaces, Energy, and Radiation

Create and validate 480 questions for:

- Dielectric and Magnetic Materials.
- Interfaces and Fresnel Optics.
- Electromagnetic Energy and Power.
- Radiation from Oscillating Dipoles.

Audit constitutive assumptions, bound sources, boundary normals, Fresnel signs and power coefficients, Poynting-vector directions, conservation, near/far regimes, angular patterns, and integrated radiated power.

## 5. Author Quantum Foundations and Stationary States

Create and validate 340 questions for:

- Foundations of Quantum Mechanics.
- Stationary States and Superposition.

Audit normalization, dimensions of wavefunctions, Hermiticity, commutators, uncertainty bounds, expectation values, phase evolution, probabilities, orthogonality, and transition amplitudes.

## 6. Author One- and Three-Dimensional Quantum Systems

Create and validate 280 questions for:

- One-Dimensional Quantum Systems.
- Three-Dimensional Quantum Mechanics.

Audit boundary conditions, parity, transcendental well conditions, oscillator algebra, degeneracies, coordinate Jacobians, Laplacians, and separated solutions.

## 7. Author Angular Momentum and Hydrogen

Create and validate 320 questions for:

- Orbital Angular Momentum.
- The Hydrogen Atom.

Audit operator commutators, ladder coefficients, spherical harmonics, quantum-number restrictions, radial normalization, degeneracy, spectral transitions, reduced masses, and hydrogenic scaling.

## 8. Author Spin, Perturbation Theory, and Quantum Postulates

Create and validate 520 questions for:

- Spin and Angular Momentum Addition.
- Perturbation Theory and Fine Structure.
- Quantum Theorems and Postulates.

Audit spinor normalization, matrix operators, Clebsch-Gordan constraints, magnetic moments, perturbative validity, degenerate subspaces, fine/hyperfine scales, selection rules, marginal probabilities, virial relations, measurement probabilities, and decoherence reasoning.

## 9. Generate and Audit the Registry

Run `pnpm --filter academy generate:questions` and confirm exactly 127 Physics A imports and registry entries. Run the full Physics A validator and generalized registry check.

## 10. Full Correctness and Quality Review

Audit all questions against the approved specification and mandatory rubrics. Recalculate parameter-sensitive results, check units and physical regimes, reject template filler and mismatched ratings, and fix all critical or important findings.

## 11. Final Verification

Run:

```sh
pnpm --filter academy check:physics-a-questions
pnpm --filter academy check:physics-a-content
pnpm --filter academy check:questions
pnpm --filter academy lint
pnpm --filter academy build
git diff --check
```

## Expected File Impact

New files:

- 127 question JSON files under `level-2-physics-a/questions/`.
- `apps/academy/scripts/validate-level-2-physics-a-questions.mjs`.
- This specification and plan.

Updated files:

- `apps/academy/package.json`.
- `apps/academy/src/lib/docs/level-2-physics-a/questions.generated.ts` through the existing generator.

No content page, exam, diagram, route, API, component, or shared renderer will be changed.

## Code Quality Controls

- Reuse the shared JSON schema and registry generator.
- Derive validator expectations from `structure.ts`.
- Keep one file per topic and one responsibility per validator.
- Use temporary authoring utilities only under `/tmp/opencode`; add no permanent question generator.
- Preserve unrelated local changes.

## Risks and Controls

- **Scale and repetition:** author in section batches and reject exact duplicates and low-substance variants.
- **Incorrect physics:** recalculate each batch and check limiting behaviour.
- **Missing units:** validate dimensional numerical prompts and final answers, then perform a dedicated unit audit.
- **Difficulty inflation:** review actual reasoning burden, especially positions 13–20.
- **Quantum ambiguity:** define state normalization, basis, operators, domains, and measurement assumptions explicitly.
- **Electromagnetic sign errors:** audit orientations, phasor convention, boundary normals, and right-hand rules.
- **Unsupported scope:** constrain every file to its matching topic page.
- **Unrelated worktree changes:** edit only approved paths and never revert existing work.

## Approval Status

The user explicitly requested that the specification and plan be treated as approved without separate approval prompts. Implementation may proceed immediately.
