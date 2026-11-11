# Level 2 Physics B Questions Specification

## Goal

Create one consistent Level 2 - Physics B practice bank covering all 174 topics across Condensed Matter Physics, Optics, and Thermodynamics. Every topic will contain exactly 20 fully worked questions, producing 3,480 questions.

## Existing State

- Thermodynamics has 92 files and 1,840 questions using an older question standard.
- Condensed Matter Physics has 13 topics and no question files.
- Optics has 69 topics and no question files.
- The shared registry and question-bank infrastructure already support Physics B.

The existing Thermodynamics questions will be upgraded in place so the complete course uses one metadata, rating, answer, and validation standard.

## Requirements

- Exactly 20 questions for each of 174 topics.
- Full physics mix: calculations, derivations, proofs, focused comparisons, and concise conceptual reasoning.
- Exact rating order: two each from `*` through `****`, three `****+`, and three `*****`.
- Difficulty based on reasoning burden, not arithmetic length.
- Every answer contains `Model:`, `Working:`, `Final answer:`, and `Check:`.
- All dimensional numerical values and final numerical answers include appropriate units.
- Every prompt defines required variables and identifies or clearly implies the model and assumptions.
- Higher ratings require linked synthesis, parameter regimes, limiting cases, or derivation-level reasoning.

## Source Boundary

The authoritative sources are the 174 authored Physics B content pages under:

`apps/academy/src/lib/docs/level-2-physics-b/`

Questions must remain within the corresponding topic page and its prerequisites.

## Coverage

| Module | Sections | Topics | Questions |
| --- | ---: | ---: | ---: |
| Condensed Matter Physics | 3 | 13 | 260 |
| Optics | 4 | 69 | 1,380 |
| Thermodynamics | 14 | 92 | 1,840 |
| **Total** | **21** | **174** | **3,480** |

Condensed Matter coverage includes phase diagrams, ordered states, lattices, crystal structures, Miller indices, and interplanar spacing.

Optics coverage includes wave foundations, interference, diffraction, Fourier optics, polarisation bases, optical elements, birefringence, and polarisation-dependent interference.

Thermodynamics coverage includes state variables, differential methods, laws and gas processes, cycles, entropy, potentials, response functions, phases, generalised systems, low-temperature physics, and statistical mechanics.

## Files and Metadata

Files live at:

`apps/academy/src/lib/docs/level-2-physics-b/questions/[section-id]/[topic-id].json`

Each file contains `schemaVersion: 1`, exact structure-derived metadata, `paperTags: ["physics-b", sectionId]`, and exactly 20 questions.

Stable IDs use:

`physics-b-[section-id]-[topic-id]-[01-20]`

## Validation

Upgrade the existing Physics B validator to derive all 174 topics from `structure.ts` and enforce:

- Exactly 174 files and 3,480 questions.
- Exact paths, titles, IDs, tags, and fixed ratings.
- Required answer sections and approved physics task verbs.
- No duplicate IDs, prompts, or answers.
- JSON newline and LaTeX safety.
- Balanced delimiters and braces; no raw Unicode maths symbols.
- Exact generated-registry agreement.

## Verification

- Validate section batches and the full course.
- Audit units, signs, normalisations, limiting cases, conservation laws, and approximation regimes.
- Regenerate and check the registry.
- Run Physics B content validation where available, generalized question checks, lint, build, and `git diff --check`.
- Review against the Physics Question, Clarity, and LaTeX rubrics.

## Success Criteria

- All 174 topics contain exactly 20 registered questions.
- All 3,480 answers are complete and follow the four-section format.
- The older Thermodynamics bank is fully migrated to the same standard.
- Difficulty labels reflect actual reasoning burden.
- All validation, lint, build, and review gates pass.

## Decisions

- Upgrade all 3,480 questions rather than preserving the older Thermodynamics format.
- Use the same full physics mix and quality standard as Physics A.
- Treat this specification and its plan as auto-approved under the user's stated workflow preference.

## Open Questions

None.
