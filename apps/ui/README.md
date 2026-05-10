# Fera UI

Fera UI is the documentation and demo app for the shared interface system. It shows how Fera's reusable components behave across product surfaces and gives contributors a focused place to inspect patterns before using them in Academy or Web.

## Product Surfaces

- Component documentation for shared UI primitives.
- Interactive demos for layout, controls, navigation, and feedback patterns.
- Design-system examples that keep product interfaces consistent.
- Reference pages for contributors building new Fera surfaces.

## Platform Role

UI supports the rest of the platform by making the shared component library visible and testable. It is the product-facing companion to `packages/ui` and the docs shell in `packages/docs`.

## Development

```sh
pnpm --filter ui dev
pnpm --filter ui lint
pnpm --filter ui build
```
