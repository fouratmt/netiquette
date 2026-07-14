# Implementation progress

Last updated: 2026-07-14

## Current state

- Product discovery is in progress.
- Initial PRD, content guide, technical proposal, and decision log exist.
- The generic Next.js/vinext starter and its generated files have been removed.
- No Netiquette user interface or production content catalog has been
  implemented yet.
- A fresh Git repository has been initialized on the `main` branch.

## Milestones

### 1. Product foundation — in progress

- [x] Establish working name.
- [x] Establish editorial voice.
- [x] Define read-only MVP boundary.
- [x] Choose Vue 3 over Next.js.
- [x] Draft PRD and content template.
- [x] Select English, French, and Tunisian Arabic for the MVP.
- [x] Decide recipient-page framing and sharing behavior.
- [x] Choose situation categories with an additional platform grouping level.
- [ ] Decide default locale and Tunisian Arabic writing system.
- [ ] Decide starter catalog size.
- [ ] Decide SPA versus static pre-rendering.

### 2. Vue scaffold — pending

- [x] Remove the generic Next.js/vinext starter.
- [ ] Scaffold Vue 3, TypeScript, and the chosen build setup.
- [ ] Establish application routes and shell.
- [ ] Add content schema and validation.
- [ ] Add test and lint commands appropriate to the new stack.
- [ ] Replace starter README and tests.

### 3. Core catalog — pending

- [ ] Create the starter etiquette entries.
- [ ] Implement browse and category views.
- [ ] Implement local search and query-string state.
- [ ] Implement individual entry pages and related entries.
- [ ] Implement copy-link and native sharing.

### 4. Quality and release — pending

- [ ] Verify responsive layouts.
- [ ] Complete accessibility review.
- [ ] Verify direct routes on the chosen host.
- [ ] Verify metadata and link previews.
- [ ] Run unit, component, route, and end-to-end tests.
- [ ] Conduct a tone review with representative readers.

## Immediate next step

Resolve the language details and initial content boundary, then scaffold the
selected Vue architecture and encode representative translated entries to test
the model.
