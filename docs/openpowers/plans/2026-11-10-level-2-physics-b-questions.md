# Level 2 Physics B Questions Plan

## 1. Upgrade the Physics B Validator

Replace the Thermodynamics-only assumptions in `validate-level-2-physics-b-questions.mjs` with structure-derived expectations for all 174 topics and 3,480 questions. Enforce exact IDs, ratings, tags, answer sections, duplicate rejection, LaTeX safety, and registry agreement.

Run the validator against the current bank to establish the expected 82-file and 1,640-question coverage gap plus legacy-format findings.

## 2. Author Condensed Matter Physics

Create 260 questions across the 13 topics in:

- Condensed Matter Overview.
- Crystal Lattices and Symmetry.
- Crystal Structures and Planes.

Audit crystal geometry, symmetry restrictions, packing, basis conventions, Miller-index reciprocals, and dimensions.

## 3. Author Optics

Create 1,380 questions across:

- One Wave.
- Interference.
- Diffraction.
- Polarisation.

Audit phase conventions, complex amplitudes, paraxial limits, lens signs, fringe conditions, Fourier scaling, diffraction limits, Jones-vector conventions, handedness, retardance, and intensity conservation.

## 4. Upgrade Thermodynamics

Regenerate the 92 existing topic files to the new exact IDs, tags, rating order, and difficulty standard while preserving the authored topic scope.

Audit thermodynamic sign conventions, constrained derivatives, reversible/irreversible assumptions, entropy production, free-energy constraints, response functions, phase equilibria, low-temperature limits, and statistical normalization.

## 5. Generate and Audit the Registry

Run the existing registry generator. Confirm exactly 174 Physics B imports and entries and one-to-one agreement with `structure.ts`.

## 6. Correctness and Quality Review

Review all section batches against the approved specification and mandatory rubrics. Correct duplicate/template filler, mismatched difficulty, unit errors, sign errors, unsupported assumptions, and incomplete checks.

## 7. Final Verification

Run:

```sh
pnpm --filter academy check:physics-b-questions
pnpm --filter academy check:questions
pnpm --filter academy lint
pnpm --filter academy build
git diff --check
```

Run any existing Physics B content validator if present.

## Expected File Impact

- Add 82 missing topic JSON files.
- Upgrade 92 existing topic JSON files.
- Update `validate-level-2-physics-b-questions.mjs`.
- Regenerate `questions.generated.ts`.
- Add this specification and plan.

No content page, exam, route, API, component, diagram, or shared renderer will be changed.

## Code Quality Controls

- Reuse the shared schema, registry, and source-page authoring approach.
- Derive all expectations from `structure.ts`.
- Add no permanent parallel generator; temporary authoring utilities remain under `/tmp/opencode`.
- Preserve unrelated local changes.

## Risks and Controls

- **Legacy migration errors:** validate paths, IDs, tags, and counts after regeneration.
- **Optics sign/phase errors:** audit conventions and limiting cases.
- **Thermodynamic sign errors:** state the work convention in each applicable problem.
- **Difficulty inflation:** use dedicated foundational tasks and linked synthesis for higher ratings.
- **Repetition at scale:** reject exact duplicates and review topic-specific equations/examples.
- **LaTeX corruption:** preserve line-break spacing commands and validate decoded strings.

## Approval Status

The user requested the same completed workflow and previously instructed that specifications and plans be auto-approved. Implementation may proceed immediately.
