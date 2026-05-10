# Fera

Fera is a product suite for physics and mathematics learning. It combines structured course material, targeted practice, exam preparation, equation references, flashcards, and a public product site into one workspace.

The repository is organized as a pnpm/Turborepo monorepo. Apps own product surfaces, while packages provide shared documentation and interface primitives.

## Apps

- `apps/academy` - the learning app for course content, question practice, exam papers, equation sheets, and flashcards.
- `apps/web` - the public marketing site for explaining Fera, previewing courses, and guiding learners into Academy.
- `apps/ui` - the design system documentation and demo app for Fera's shared interface components.

## Shared Packages

- `packages/docs` - documentation shell, article rendering, navigation, search, and docs-specific primitives shared by Academy and UI.
- `packages/ui` - reusable interface components and design primitives used across the apps.
- `packages/eslint-config` - shared lint configuration.
- `packages/typescript-config` - shared TypeScript configuration.

## Development

Install dependencies from the repository root:

```sh
pnpm install
```

Run all apps in development mode:

```sh
pnpm dev
```

Run checks across the workspace:

```sh
pnpm lint
pnpm build
```

Run a single app with a filter:

```sh
pnpm --filter academy dev
pnpm --filter web dev
pnpm --filter ui dev
```
