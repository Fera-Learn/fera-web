# Supabase

Phase 0 adds the initial Supabase workflow for the Fera Academy dashboard.

## Local Setup

Copy the environment example files before running either app:

```sh
cp apps/app/.env.example apps/app/.env.local
cp apps/auth/.env.example apps/auth/.env.local
```

Then replace `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` with the publishable key from your local or hosted Supabase project.

## Scripts

```sh
pnpm db:start
pnpm db:reset
pnpm db:types
```

`pnpm db:types` regenerates `packages/supabase/src/database.types.ts` from the local Supabase database.

For a hosted project, set `SUPABASE_PROJECT_ID` and run:

```sh
pnpm db:types:project
```
