# Level 2 Mathematical Physics Questions Plan

## 1. Establish the Course Question Validator

Create `apps/academy/scripts/validate-level-2-mathematical-physics-questions.mjs` before authoring question files.

The validator will derive all expected section ids, topic titles, and topic ids from `level-2-mathematical-physics/structure.ts`. It will accept optional section ids for batch checks and will enforce full-course completeness when run without arguments.

Validate:

- Exactly 30 expected JSON files and no unknown topic JSON files.
- Exactly 20 questions per topic and 600 questions course-wide.
- Schema version, course id, section id, topic id, topic title, and path agreement.
- Exact question ids in `math-physics-[section]-[topic]-[01-20]` form.
- Global question-id uniqueness.
- Exact rating sequence: two each from `*` through `****`, three `****+`, and three `*****`.
- Top-level and per-question tags containing `mathematical-physics` and the section id.
- Non-empty prompt and answer fields.
- At least one approved mathematical operation verb in every prompt.
- Rejection of descriptive, explanatory, interpretive, recall-only, diagnostic, and essay prompt language.
- `Final answer:` in every answer.
- No exact duplicate prompts or worked answers.
- Valid JSON newline behavior, escaped LaTeX commands, paired math delimiters, balanced braces, and no raw Unicode maths symbols.
- Exact topic coverage in the generated registry after registry generation.

Register the command as `check:mathematical-physics-questions` in `apps/academy/package.json`.

Run the validator once before question authoring and confirm that it fails only because the 30 approved topic files and 600 questions are absent. This establishes the completeness gate.

## 2. Author Index Notation and Projection Questions

Create 60 questions across:

- `index-notation-and-vector-projections/orthonormal-vectors-and-orthogonal-projection.json`
- `index-notation-and-vector-projections/summation-convention-and-kronecker-delta.json`
- `index-notation-and-vector-projections/levi-civita-symbol-and-vector-products.json`

Progress from direct dot products, index expansions, and permutation signs to non-unit projections, nested delta contractions, epsilon identities, and proof-level vector-product derivations.

Keep every prompt computational or proof-based. Do not ask for geometric description or notation explanation. Run the validator for `index-notation-and-vector-projections`, then independently recalculate all contractions, signs, and projections.

## 3. Author Vector-Space Questions

Create 80 questions across:

- `vector-spaces/vector-spaces-and-their-axioms.json`
- `vector-spaces/linear-combinations-and-span.json`
- `vector-spaces/linear-independence.json`
- `vector-spaces/bases-and-dimension.json`

Use vectors, polynomials, matrices, and functions as mathematical objects. Progress from one-axiom checks and small coefficient systems to parameter-dependent independence, constrained subspaces, basis construction, and general proofs.

Questions may ask learners to prove or disprove a vector-space claim using equations or a counterexample, but must not ask them to explain an axiom in prose. Run the `vector-spaces` validator and verify every linear system, determinant, coordinate vector, and dimension result.

## 4. Author Inner-Product and Function-Space Questions

Create 40 questions across:

- `inner-product-spaces/inner-products-norms-and-orthogonality.json`
- `inner-product-spaces/function-spaces-and-modal-decomposition.json`

Cover real and complex inner products, conjugation order, norms, orthogonality, projections, function integrals, modal coefficients, finite reconstructions, and norm sums.

Use exact integrals and algebraically check all coefficient and norm formulas. Avoid physical-string interpretation prompts; any string profiles are treated only as functions on a stated interval. Run the `inner-product-spaces` validator and a separate integration audit.

## 5. Author Operator and Special-Matrix Questions

Create 40 questions across:

- `linear-operators-and-special-matrices/linear-operators-and-matrix-trace.json`
- `linear-operators-and-special-matrices/special-matrices-and-quadratic-forms.json`

Cover linearity calculations, matrix representations, compositions, trace identities, special-matrix tests, Hermitian decomposition, Pauli-basis coefficients, and quadratic-form positivity.

Hard questions will derive identities or prove classifications using explicit algebra rather than request explanations. Run the section validator and check conjugate transposes, matrix order, trace cyclicity, and positivity conditions.

## 6. Author Eigenvalue and Diagonalisation Questions

Create 80 questions across:

- `eigenvalues-and-diagonalisation/eigenvalues-and-eigenvectors.json`
- `eigenvalues-and-diagonalisation/commuting-matrices-and-similarity-transformations.json`
- `eigenvalues-and-diagonalisation/matrix-diagonalisation-and-quadratic-forms.json`
- `eigenvalues-and-diagonalisation/matrix-powers-and-exponentials.json`

Progress from small characteristic-polynomial calculations to parameter-dependent eigenspaces, simultaneous diagonalisation, similarity invariants, principal-axis forms, matrix powers, exponentials, and Hermitian generator families.

Verify every diagonalisation by multiplication, every eigenpair by substitution, and every matrix exponential through a diagonal or series check. Run the section validator and a matrix-algebra audit.

## 7. Author Laplace-Transform Questions

Create 80 questions across:

- `laplace-transforms/laplace-transform-definition-and-existence.json`
- `laplace-transforms/laplace-transform-properties.json`
- `laplace-transforms/inverse-laplace-transforms-and-convolution.json`
- `laplace-transforms/solving-odes-with-laplace-transforms.json`

Cover direct improper integrals, convergence conditions, transform properties, partial fractions, convolution, inverse transforms, and first- and second-order initial-value problems.

Restrict unilateral scaling to positive scale factors and state all convergence domains mathematically. Check inverse results by retransformation and ODE results by substitution where appropriate. Run the `laplace-transforms` validator and a pole, sign, initial-value, and convergence audit.

## 8. Author Differential Vector Calculus and Steepest-Descent Questions

Create 80 questions across:

- `differential-vector-calculus/gradients-and-level-surfaces.json`
- `differential-vector-calculus/divergence-curl-and-vector-identities.json`
- `differential-vector-calculus/laplacian-and-maxwell-wave-equations.json`
- `steepest-descent/steepest-descent-for-linear-systems.json`

Treat Maxwell equations and steepest descent purely as mathematical systems. Ask for derivatives, PDE reductions, plane-wave substitutions, SPD checks, residuals, exact line-search steps, and convergence conditions—not physical interpretation.

Audit scalar/vector output types, curl signs, mixed derivatives, wave-equation signs, matrix symmetry, positive definiteness, residual convention, and iteration arithmetic. Run both relevant section validators.

## 9. Author Curve and Line-Integral Questions

Create 40 questions across:

- `curves-and-line-integrals/parametric-curves-and-line-integrals.json`
- `curves-and-line-integrals/conservative-fields-and-scalar-potentials.json`

Cover parametrisation, tangent vectors, arc length, scalar and vector line integrals, orientation reversal, path comparisons, curl tests, potential construction, and endpoint evaluation.

All domains, endpoints, directions, and parameter intervals must be explicit. Run the section validator and independently verify line elements, endpoint order, potential gradients, and path-integral values.

## 10. Author Surface and Volume-Integral Questions

Create 40 questions across:

- `surface-and-volume-integrals/parametric-surfaces-and-surface-integrals.json`
- `surface-and-volume-integrals/volume-integrals-and-coordinate-jacobians.json`

Cover tangent cross products, surface orientation, area and flux, scalar triple products, Jacobians, coordinate changes, and bounded cylindrical, spherical, and conical regions.

Check every parameter order, normal direction, Jacobian magnitude, bound, and integral. Run the section validator and a separate orientation and change-of-variables audit.

## 11. Author Integral-Theorem and Vortex Questions

Create 60 questions across:

- `integration-theorems-and-vortices/divergence-theorem-and-electrostatics.json`
- `integration-theorems-and-vortices/green-s-theorem-in-the-plane.json`
- `integration-theorems-and-vortices/stokes-theorem-and-the-rankine-vortex.json`

Use vector fields and regions as mathematical data. Cover closed flux, piecewise boundaries, Green conversions, area integrals, compatible orientations, alternate spanning surfaces, piecewise cylindrical curl, circulation, and vorticity flux.

No prompt will ask for physical meaning. Audit every boundary component, outward normal, planar orientation, right-hand-rule sign, piecewise radius case, and theorem hypothesis. Run the section validator.

## 12. Generate the Registry and Audit Full-Course Coverage

Run:

```sh
pnpm --filter academy generate:questions
```

Review `apps/academy/src/lib/docs/level-2-mathematical-physics/questions.generated.ts` and confirm:

- Exactly 30 generated JSON imports and 30 registry entries.
- Every import path matches the approved section and topic id.
- No manual edits were made to the generated file.
- The shared question bank resolves all 600 questions through the existing course provider.

Run the full Mathematical Physics question validator without section arguments and the generalized question-registry check.

## 13. Pure-Maths and Mathematical-Correctness Audit

Audit all 600 prompts for forbidden prose-response forms. Reject prompts containing or functionally equivalent to:

- Describe, explain, discuss, interpret, comment, or outline.
- What is, why, or how does.
- State or identify without an accompanying mathematical operation.
- Correct a student's error or design a solution plan.
- Give a physical or modelling interpretation.

Audit all 600 answers for:

- A stated mathematical target and selected method.
- Complete meaningful working.
- Correct use of domains, branches, signs, orientations, and assumptions.
- A separate `Final answer:` statement.
- No duplicated filler or answer templates that fail to solve the actual prompt.

Recalculate parameter-sensitive and proof-level questions independently. Fix every critical or important issue before final verification.

## 14. Final Verification

Format only the new question JSON, validator, package script entry, registry, specification, and plan. Then run:

```sh
pnpm --filter academy check:mathematical-physics-questions
pnpm --filter academy check:mathematical-physics-content
pnpm --filter academy check:questions
pnpm --filter academy lint
pnpm --filter academy build
git diff --check
```

Review the result against:

- The approved question specification.
- The maths question, clarity, and LaTeX rubrics.
- The exact 30 topic titles and authored mathematical scope.
- The user requirement that every prompt be pure maths rather than descriptive or explanatory.

## Expected File Impact

New files:

- 30 topic JSON files under `level-2-mathematical-physics/questions/`.
- `apps/academy/scripts/validate-level-2-mathematical-physics-questions.mjs`.
- `docs/openpowers/specs/2026-11-10-level-2-mathematical-physics-questions.md`.
- `docs/openpowers/plans/2026-11-10-level-2-mathematical-physics-questions.md`.

Updated files:

- `apps/academy/src/lib/docs/level-2-mathematical-physics/questions.generated.ts` through the existing generator.
- `apps/academy/package.json`.

No content page, exam, flashcard, equation sheet, route, API, component, diagram, or shared renderer file will be changed.

## Code Quality Controls

- Keep one JSON file per existing topic.
- Derive validator expectations from `structure.ts` rather than maintaining a second title registry.
- Reuse the generalized registry generator and question-bank provider.
- Do not add a permanent question generator or template system.
- Use any temporary serialization or arithmetic-check tooling only under `/tmp/opencode`; leave no generated helper in the repository.
- Reject exact duplicate prompts and answers across the course.
- Keep each question self-contained; do not refer to another question or topic page.
- Preserve all unrelated existing worktree changes.

## Risks and Controls

- **Template-like filler across 600 questions:** enforce duplicate detection and perform topic-by-topic prompt and answer review.
- **Prose questions slipping into the bank:** validate approved operation verbs and reject forbidden descriptive or interpretive wording.
- **Incorrect difficulty inflation:** use the fixed rating order but review each question's actual reasoning burden against the rubric.
- **LaTeX corruption in JSON:** parse decoded strings, detect newline artifacts, check delimiter/brace balance, and inspect representative rendered mathematics.
- **Undefined variables:** require self-contained prompts and review every symbol at first use.
- **Algebraic or calculus errors:** implement in small section batches and independently recalculate each batch before proceeding.
- **Sign and orientation mistakes:** run dedicated vector-calculus, line/surface-integral, and theorem audits.
- **Unsupported scope expansion:** restrict each file to its authored topic page and lecture range.
- **Registry omissions:** regenerate with the existing script and require exact structure-derived 30-file coverage.
- **Unrelated local changes:** edit only approved paths and do not revert, overwrite, or reformat existing user work.
