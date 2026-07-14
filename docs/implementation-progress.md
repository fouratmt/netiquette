# Implementation progress

Last updated: 2026-07-15

## Current state

- The first usable MVP slice is implemented.
- The generic Next.js/vinext starter and its generated files have been removed.
- A fresh Git repository exists on the `main` branch.
- The Vue interface and a five-entry multilingual catalog are implemented.
- English, French, and Tunisian Arabic static pages are generated for GitHub
  Pages, including localized metadata and RTL HTML.
- Pull-request CI and a separate GitHub Pages deployment workflow are ready
  locally; they have not yet been committed or run on GitHub.

## Milestones

### 1. Product foundation — completed

- [x] Establish working name and kind, neutral editorial voice.
- [x] Define the read-only MVP boundary.
- [x] Choose Vue 3 over Next.js.
- [x] Select English, French, and Tunisian Arabic.
- [x] Choose browser-language detection with English fallback.
- [x] Choose Arabic script and RTL for Tunisian Arabic.
- [x] Choose situation categories with an additional platform grouping.
- [x] Set a launch target of roughly 12 behaviors.
- [x] Choose stable ASCII slugs across languages.
- [x] Choose static pre-rendering for known routes.

### 2. Vue scaffold — completed

- [x] Scaffold Vue 3, TypeScript, Vite, Vue Router, and `vite-ssg`.
- [x] Establish localized static routes and an application shell.
- [x] Add a typed content model and test-time validation.
- [x] Add type-check, test, build, and complete-check commands.
- [x] Use `just` as the local and CI task runner.
- [x] Add an isolated pnpm workspace and lockfile.
- [x] Replace the starter README and tests.

### 3. Core catalog — usable slice completed

- [ ] Expand the catalog from 5 to approximately 12 entries.
- [x] Implement browse, category, and platform filtering.
- [x] Implement localized search and query-string state.
- [x] Implement individual entry pages and related entries.
- [x] Implement copy-link and native sharing.
- [x] Implement language switching, preference persistence, and RTL layouts.
- [x] Draft all five entries in English, French, and Tunisian Arabic.

### 4. Quality and release — in progress

- [x] Verify desktop and mobile layouts, including mobile RTL overflow.
- [ ] Complete a broader accessibility review.
- [x] Verify pre-rendered direct-route structure with a GitHub Pages base path.
- [x] Verify localized metadata and HTML language/direction attributes.
- [x] Run unit, route, build, and browser-flow tests.
- [x] Add a GitHub Pages deployment workflow.
- [x] Add pull-request CI and deterministic Pages artifact validation.
- [ ] Conduct a tone and translation review with fluent readers.
- [ ] Enable GitHub Pages and verify the deployed site.

## Verified user flow

The browser-tested flow searches for “speakerphone,” opens the matching entry,
copies its link, switches that same entry to Tunisian Arabic, and verifies RTL
layout at desktop and mobile widths.

## Immediate next step

Choose whether the private repository will use a Pages-capable paid plan or be
made public, then commit and push the workflows, enable GitHub Actions as the
Pages source, and verify the first deployment.
