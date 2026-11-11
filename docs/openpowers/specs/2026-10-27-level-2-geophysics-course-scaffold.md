# Level 2 Geophysics Course Scaffold Specification

## Goal

Create and fully register a new `Level 2 - Geophysics` Academy course from the four environmental-geophysics lecture decks in `resources/geophysics/`. The course will expose a learner-oriented topic structure and navigable empty topic routes now, while preserving a clear teaching design for later lesson authoring.

## Source Review

The supplied source set is the first four lectures of an Environmental Geophysics module:

- `lecture1.pptx`: soil composition and origins, weathering, horizon development, controls on soil formation, profile description, mapping, classification, and a Cockle Park Stagnosol case study.
- `lecture2.pptx`: texture, mineralogy, soil structure, aggregation, pore types, compaction, bulk density, porosity, and variation across interfaces.
- `lecture3.pptx`: soil-water storage and measurement, unsaturated flow, plant-available water, infiltration, saturated flow, Darcy's law, aquifers, and recharge.
- `lecture4.pptx`: dissolved ions, weathering chemistry, electrical conductivity and pH measurement, clay and humus surface charge, ion exchange, and ground conductivity.

The slides contain strong source material but are not suitable as standalone lessons. They frequently depend on spoken explanation, reveal a concept over many near-duplicate slides, refer to prior lectures or practicals, and place key meaning in diagrams or lecturer prompts. Future Academy content must therefore reorganise the material by learnable concept rather than reproduce slide order or wording.

## Academy Architecture Review

Fera Academy is a Next.js App Router application whose learning pages are assembled from registries rather than route-specific page files:

- `src/lib/docs/pages.ts` owns course metadata, creates route records, builds sidebars, and adds pages to search/static generation.
- Level 2 course structures use module, section, and topic arrays in a course-local `structure.ts`.
- Topic bodies are optional. An undefined body already produces the approved empty route shell, so this scaffold does not need placeholder lesson files or a parallel rendering system.
- Course-root editorial content is supplied by a course-local `course-page.ts` and uses shared question/paper counts.
- Questions, flashcards, exams, API routes, and print views use generalized course registries and empty collections cleanly.
- The course selector and catalog are driven by the shared `academyCourses` collection.

The implementation will extend these existing registries and abstractions. It will not introduce new route handlers, content renderers, components, or duplicated course systems.

## Course Identity

- Label: `Level 2 - Geophysics`
- Canonical course id and route root: `level-2-geophysics`
- Source root: `apps/academy/src/lib/docs/level-2-geophysics`
- Scope: the environmental-geophysics foundations covered by the four supplied lectures.

## Course Structure

Create 58 topic routes across four modules and twelve sections.

### Module 1: Soils in Environmental Geophysics

#### Soil Systems and Origins

1. Environmental Geophysics and Soil Interfaces
2. Soil Composition and the Solid-Pore System
3. Transported and Residual Soils
4. Physical and Chemical Weathering

#### Soil Profiles and Formation

1. Soil Horizons and Profile Development
2. Eluviation, Illuviation, and Secondary Minerals
3. Controls on Soil Formation
4. Soil Interfaces and Environmental Function

#### Soil Survey and Classification

1. Describing Soil Profiles
2. Soil Series and Soil Associations
3. Soil Groups, Orders, and the World Reference Base
4. Cockle Park Stagnosol Case Study

### Module 2: Soil Physical Properties

#### Soil Texture and Mineralogy

1. Soil Texture and Particle-Size Classes
2. Reading the Soil Texture Triangle
3. Texture, Mineralogy, and Weathering

#### Soil Structure and Aggregation

1. Soil Structure and Aggregation
2. Aggregate Forms and Soil Horizons
3. Compaction and Structural Degradation
4. Texture Versus Structure

#### Pore Space and Physical Measurements

1. Macropores, Micropores, and Pore Connectivity
2. Dry Bulk Density
3. Particle Density and Total Porosity
4. Soil Properties Across Vertical and Lateral Interfaces

### Module 3: Soil and Groundwater Hydrology

#### Soil-Water Storage and Measurement

1. Zones of Water in the Ground
2. Measuring Soil Moisture and Water Levels
3. Gravimetric and Volumetric Water Content
4. Porosity and Water Saturation

#### Unsaturated Flow and Plant Water

1. Cohesion, Adhesion, and Surface Tension
2. Capillarity in Soil Pores
3. Matric Potential and Soil-Water Retention
4. Field Capacity, Wilting Point, and Plant-Available Water
5. Evapotranspiration and Root Water Uptake
6. Infiltration Capacity, Runoff, and Preferential Flow

#### Saturated Flow and Groundwater

1. Porosity, Permeability, and Hydraulic Conductivity
2. Darcy's Law and Hydraulic Gradient
3. Darcy Flux and Seepage Velocity
4. Groundwater Travel Time
5. Aquifers and Perched Water Tables
6. Groundwater Recharge and Seasonal Water Tables

### Module 4: Soil-Water Chemistry and Electrical Properties

#### Dissolved Solutes and Water Measurements

1. Major Ions and Sources of Dissolved Solutes
2. Carbonate and Silicate Weathering Reactions
3. Electrical Conductivity of Water
4. Conductivity Probes and Temperature Correction
5. Total Dissolved Solids and Salinity
6. pH and pH Measurement

#### Clay, Humus, and Surface Charge

1. Soil Colloids and Surface Charge
2. One-to-One Clay Minerals
3. Two-to-One Swelling Clay Minerals
4. Non-Swelling Two-to-One Clay Minerals
5. Humus and pH-Dependent Charge
6. Cation Exchange Capacity
7. Anion Exchange Capacity

#### Ion Exchange and Ground Conductivity

1. Weathering Controls on Colloid Charge
2. Cation Exchange Reversibility and Charge Equivalence
3. Cation Selectivity and Leaching
4. Base Saturation, Soil Acidity, and Sodicity
5. Measuring Cation Exchange Capacity
6. Pore-Water and Surface Electrical Conduction

## Empty Topic Behaviour

The user selected route shells only:

- Every topic must resolve, appear in the module/section sidebar, participate in previous/next navigation, static generation, and search metadata.
- Topic pages must have no visible placeholder lesson body.
- Do not create one `content.ts` file per topic and do not create a topic-body map until substantive lesson authoring begins.
- The topic title, course category, section badge, and existing Questions action remain visible through the shared docs page shell.

## Course Root Page

Create a normal Academy course-description page using the shared editorial structure:

1. Course stats showing `0` questions and `0` exam papers.
2. Course Purpose explaining that this is a second-year environmental-geophysics course focused on soils, water, chemistry, and the physical properties that geophysical methods respond to.
3. What You Will Study using the four broad module areas rather than listing all 58 topics.
4. How The Course Works describing the intended topic-page, question, worked-answer, and exam workflow while accurately stating that lesson and assessment material will be added.
5. Assessment And Exam Practice linking to the empty exam-papers surface and stating that papers will be added.
6. Recommended Starting Points linking to one representative opening page from each module.

## Future Topic-Page Teaching Design

When lesson content is authored later, every page must follow the current physics-content rubric rather than the slide layout:

1. `## Principle`
   - Open with a familiar observation, field situation, sample, profile, or measurement question.
   - Establish physical or chemical meaning before terminology and equations.
   - State a specific learner outcome in direct language.
2. `## Notation`
   - Use one compact `<Notation>` component.
   - Include only symbols used on that page, defined before use and with units where applicable.
3. `## The Core Method`
   - Progress from observation to model to calculation or interpretation.
   - Use the Academy cadence: 1-3 explanatory sentences, then an equation, diagram, graph, profile, table, or short worked step, followed by interpretation.
   - Integrate assumptions and common errors at the point where they matter.
4. One `<PhysicsExamples collapsible>` component
   - Start closed and contain exactly two tabs.
   - Example 1 directly applies the central idea.
   - Example 2 changes context or adds one complication.
   - Both answers state the strategy, show complete working, preserve units, and interpret the result.

Content-specific presentation rules:

- Use redrawn and fully labelled visuals where profiles, horizons, texture triangles, pore geometry, water tables, hydraulic gradients, probe layouts, clay layers, or ion exchange are spatially important.
- Turn reveal sequences and repeated slides into one compact visual plus a staged explanation.
- Keep field observations, model assumptions, measured quantities, calculated proxies, and interpretations distinct.
- Make scale explicit: sample/core, profile, field, catchment, aquifer, or remote-sensing footprint.
- Make distinctions explicit where the lectures show common confusion: texture versus structure, porosity versus permeability, gravimetric versus volumetric water content, Darcy flux versus seepage velocity, EC versus TDS/salinity, and pore-water versus surface conduction.
- Treat the local decks as authoritative for scope and intended depth, but rewrite and reorder them into self-contained lessons with no dependence on a lecturer, practical session, Blackboard note, or prior page.

## Platform Integration Requirements

- Add `level-2-geophysics` to `CourseScope`, `academyCourses`, the course-section registry, page generation, sidebar scope, and docs tree.
- Add the course to the course selector with the existing physics icon.
- Add an empty exam registry and wire it into normal exam index/print configurations.
- Add an empty questions directory and generated question registry; update the existing generator configuration.
- Add a generalized question-bank provider so question counts, API responses, question mode, flashcards, and course stats return valid empty results instead of an unknown-course result.
- Reuse the generic exam, question, flashcard, course catalog, docs shell, search, and static-route systems without course-specific UI components.

## Out of Scope

- Writing substantive topic lessons.
- Creating per-topic `content.ts` files.
- Practice questions, worked question-bank answers, exam papers, equation sheets, or bespoke flashcards.
- Recreating lecture images or adding diagrams at this stage.
- Inventing coverage for later geophysical-method lectures that are not present in `resources/geophysics/`.
- Changing existing courses or the shared topic-page visual design.

## Verification

- Confirm all 58 topic records produce unique `/level-2-geophysics/[section]/[topic]` routes.
- Confirm the catalog, selector, course root, sidebar modules/sections, exam page, questions page, flashcards page, topic pages, previous/next navigation, and search index recognize the new scope.
- Confirm every topic body is empty and no visible placeholder lesson text is rendered.
- Confirm question and paper counts are both zero and generalized APIs return valid empty collections.
- Regenerate and check question registries.
- Run Academy lint and production build.
- Run `git diff --check` and inspect the final diff for unrelated changes.

## Success Criteria

- `Level 2 - Geophysics` appears as a first-class Academy course.
- Its course page accurately describes the supplied environmental-geophysics scope.
- All 58 empty topic routes are navigable and grouped into a teachable progression.
- Empty questions, flashcards, and exam surfaces work without errors.
- No duplicate course architecture, placeholder lesson bodies, or substantive lesson content is introduced.
- Academy lint and production build pass.

## Decisions

- Use the canonical slug `level-2-geophysics`.
- Organise by learnable concepts and dependencies, not one page per lecture or slide.
- Use route shells only for topic pages at this stage.
- Keep the supplied lecture scope explicit rather than pretending later geophysical-method lectures are available.
- Preserve the current Academy physics layout for future content and document how lecture material should be transformed into learner-facing pages.

## Open Questions

None.
