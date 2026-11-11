# Level 2 Geophysics Course Scaffold Plan

## 1. Create the Course-Local Scaffold

Add `apps/academy/src/lib/docs/level-2-geophysics/` with:

- `structure.ts`
  - Define course-local topic, section, and module types consistent with the existing Level 2 structures.
  - Register the approved 4 modules, 12 sections, and 58 exact topic titles.
  - Export flattened sections for shared page and question-filter construction.
- `course-page.ts`
  - Use shared question-bank count helpers.
  - Export heading metadata and a `String.raw` course body following the required course-description structure.
  - Link one starting topic from each module and the course exam-papers route.
- `exams/index.ts`
  - Export an empty typed exam-set collection and the standard paper lookup helper.
- `questions/.gitkeep`
  - Keep the source directory present so the generalized registry generator can scan an empty question bank.
- `questions.generated.ts`
  - Generate this file through the existing script after its course configuration is added; do not hand-author generated output.

Do not create topic `content.ts` files or a topic-body registry.

## 2. Register Course Pages and Navigation

Update `apps/academy/src/lib/docs/pages.ts` to:

- Add the course structure, course intro, and exam imports.
- Add `level-2-geophysics` to `CourseScope` and `academyCourses`.
- Register its sections in `sectionsByCourseScope`.
- Register its course intro body/headings in `courseIntroContent`.
- Add slug helpers for topics, questions, and exam papers.
- Create the questions page, empty topic pages, and any empty exam-paper page collection through the existing page factory.
- Include the new pages in `docsPages`.
- Build module/section sidebar metadata using the existing Level 2 pattern.
- Add a course-specific sidebar page collection and docs tree entry.

Keep topic `body` undefined so the shared renderer produces true empty route shells.

Update `apps/academy/src/components/academy/course-selector-modal.tsx` to assign the existing atom icon to the new scope.

## 3. Integrate Empty Assessments and Flashcards

Update `apps/academy/scripts/generate-question-registry.mjs` with a `level-2-geophysics` registry configuration.

Update `apps/academy/src/lib/question-bank/index.ts` to:

- Import the empty exam and generated topic-question registries.
- Add the canonical course id.
- Add topic-question, exam-question, and paper provider functions using the existing generalized helpers.
- Add a provider labelled `Level 2 - Geophysics`.

This provider will make questions, counts, APIs, and question-derived flashcards return valid empty arrays and zero counts.

Update both exam configuration sites:

- `apps/academy/src/lib/render-doc-page.tsx`
- `apps/academy/src/lib/render-exam-print-page.tsx`

Use the new empty exam registry and lookup helper. No geophysics-only exam UI or print behavior will be added.

Flashcards require no course-specific code beyond the question-bank provider because there is no equation sheet; the shared flashcard service will return an empty collection.

## 4. Generate and Audit Registries

Run:

```sh
pnpm --filter academy generate:questions
```

Then perform a structural audit that checks:

- 4 modules, 12 sections, and 58 unique topic titles.
- 58 unique topic routes under `level-2-geophysics`.
- Every approved title is present exactly once and in the approved order.
- No topic body map or topic content files exist.
- Course root, exam papers, questions, flashcards, and all topic routes resolve through `docsPages`.
- Question and exam-paper counts are zero.

## 5. Verification and Review

Run the standard checks from the workspace root:

```sh
pnpm --filter academy check:questions
pnpm --filter academy lint
pnpm --filter academy build
git diff --check
```

Review the final implementation against:

- The approved specification.
- Physics content and shared course-page rubrics.
- Existing Level 2 course naming, structure, and registry patterns.
- The requirement that topic routes remain visibly empty.

Fix any integration, type, lint, build, route-count, or registry issues and rerun affected checks before completion.

## Expected File Impact

New files:

- `apps/academy/src/lib/docs/level-2-geophysics/structure.ts`
- `apps/academy/src/lib/docs/level-2-geophysics/course-page.ts`
- `apps/academy/src/lib/docs/level-2-geophysics/exams/index.ts`
- `apps/academy/src/lib/docs/level-2-geophysics/questions/.gitkeep`
- `apps/academy/src/lib/docs/level-2-geophysics/questions.generated.ts`

Updated files:

- `apps/academy/src/lib/docs/pages.ts`
- `apps/academy/src/components/academy/course-selector-modal.tsx`
- `apps/academy/scripts/generate-question-registry.mjs`
- `apps/academy/src/lib/question-bank/index.ts`
- `apps/academy/src/lib/render-doc-page.tsx`
- `apps/academy/src/lib/render-exam-print-page.tsx`

Planning artifacts:

- `docs/openpowers/specs/2026-10-27-level-2-geophysics-course-scaffold.md`
- `docs/openpowers/plans/2026-10-27-level-2-geophysics-course-scaffold.md`

## Risks and Controls

- **Missing registry integration:** follow every generalized course integration point found in `pages.ts`, the question bank, and both exam renderers; type checking and build will expose omissions.
- **Title or route collisions:** audit exact titles, slugs, and counts before building.
- **Misleading course breadth:** course copy explicitly states the current environmental-geophysics foundation scope represented by the supplied lectures.
- **Accidental placeholder content:** do not create topic bodies and inspect rendered page inputs to confirm empty strings.
- **Question generator failure on an empty course:** include a tracked `.gitkeep` directory and generate the empty registry through the existing script.
- **Parallel architecture:** extend shared registries only; do not add course-specific route files, renderers, components, utilities, or data services.
