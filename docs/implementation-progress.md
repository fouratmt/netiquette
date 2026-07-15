# Implementation progress

Last updated: 2026-07-15

## Progress tracker

**MVP launch readiness: 87% — 48 of 55 tracked tasks complete.**

`█████████████████▒░░ 87%`

The percentage counts the unique checklist items in milestones 1–5 below.
Optional post-MVP backlog items and the operational deployment checklist are
excluded so repeated checks do not inflate or reduce the result.

| Milestone | Complete | Progress |
| --- | ---: | ---: |
| Product foundation | 10 / 10 | 100% |
| Vue scaffold | 7 / 7 | 100% |
| Core catalog | 15 / 15 | 100% |
| Quality and delivery | 10 / 10 | 100% |
| Launch validation and editorial sign-off | 6 / 13 | 46% |
| **Overall** | **48 / 55** | **87%** |

Update the numerator, denominator, percentage, and table whenever a tracked
checkbox is added or completed.

## Current state

- The first usable MVP is implemented with Vue 3, TypeScript, and static
  generation.
- The catalog contains twenty-five entries in English, French, and Tunisian
  Arabic, with stable links, related entries, and localized impact ratings.
- Search, situation and platform filters, homepage sharing, direct sharing, QR
  codes, PWA installation, and offline precaching are implemented.
- Category and platform icons, a compact entry hero, a prominent QR panel, and
  a complete localized footer are implemented.
- Canonical and language-alternate metadata, a shared social preview, a Pages
  404 fallback, component tests, automated WCAG checks, and cross-browser flows
  are implemented and await the next production deployment.
- CI and GitHub Pages deployment run from GitHub Actions.
- The public production site is live at `https://fourat.dev/netiquette/`; the
  standard GitHub Pages URL redirects there.
- Remaining MVP work is validation and editorial sign-off rather than missing
  core product functionality.

## Milestones

### 1. Product foundation — 10/10 complete

- [x] Establish working name and kind, neutral editorial voice.
- [x] Define the read-only MVP boundary.
- [x] Choose Vue 3 over Next.js.
- [x] Select English, French, and Tunisian Arabic.
- [x] Choose browser-language detection with English fallback.
- [x] Choose Arabic script and RTL for Tunisian Arabic.
- [x] Choose situation categories with an additional platform grouping.
- [x] Set an initial launch target of roughly 12 behaviors.
- [x] Choose stable ASCII slugs across languages.
- [x] Choose static pre-rendering for known routes.

### 2. Vue scaffold — 7/7 complete

- [x] Scaffold Vue 3, TypeScript, Vite, Vue Router, and `vite-ssg`.
- [x] Establish localized static routes and an application shell.
- [x] Add a typed content model and test-time validation.
- [x] Add type-check, test, build, and complete-check commands.
- [x] Use `just` as the local and CI task runner.
- [x] Add an isolated pnpm workspace and lockfile.
- [x] Replace the starter README and tests.

### 3. Core catalog — 15/15 complete

- [x] Expand the catalog from 5 to 25 entries.
- [x] Implement browse, category, and platform filtering.
- [x] Implement localized search and query-string state.
- [x] Implement individual entry pages and related entries.
- [x] Implement copy-link and native sharing.
- [x] Implement language switching, preference persistence, and RTL layouts.
- [x] Draft all twenty-five entries in English, French, and Tunisian Arabic.
- [x] Add a localized four-level impact indicator to every entry page.
- [x] Add category and platform iconography to catalog and entry badges.
- [x] Tighten the entry hero and keep its QR sharing panel visible.
- [x] Expand the footer with localized navigation and language links.
- [x] Add a prominent homepage sharing callout.
- [x] Add a compact QR code to every behavior page.
- [x] Explain why the site exists, why it was created, and why a visitor may
  have received an individual link.
- [x] Make Markdown the complete catalog control plane: add, remove, rename,
  and merge behaviors with aliases, automatic relationship cleanup, an editor
  template, and build-time validation—without application-code changes.

### 4. Quality and delivery — 10/10 complete

- [x] Verify desktop and mobile layouts, including mobile RTL overflow.
- [x] Verify pre-rendered direct-route structure with a GitHub Pages base path.
- [x] Verify localized metadata and HTML language/direction attributes.
- [x] Run unit, route, build, artifact, and browser-flow tests.
- [x] Polish the visual identity while preserving readability.
- [x] Add a GitHub Pages deployment workflow.
- [x] Add pull-request CI and deterministic Pages artifact validation.
- [x] Add an installable, automatically updating PWA with offline precaching.
- [x] Add standard, maskable, and Apple touch application icons.
- [x] Enable GitHub Pages, merge the MVP, and verify the first deployment.

### 5. Launch validation and editorial sign-off — 6/13 complete

These tasks were extracted from the accessibility, quality, editorial, success
signal, PWA, and testing requirements across the project documentation.

- [x] Smoke-test the production homepage, one localized direct entry, manifest,
  and service worker over HTTPS.
- [x] Run automated WCAG 2.2 AA checks on the root/home flow, catalog, entry, and
  not-found views.
- [x] Complete automated keyboard navigation and visible-focus review in
  Chromium and Firefox, with the WebKit/macOS preference documented.
- [ ] Complete a screen-reader flow for language selection, search, entry
  reading, impact scale, sharing status, QR explanation, and footer navigation.
- [x] Test Chromium, Firefox, WebKit, and mobile Chromium through the automated
  browser suite.
- [ ] Verify desktop/Android PWA installation and iOS Add to Home Screen on real
  devices.
- [ ] Verify offline reopening after a successful first production visit.
- [ ] Scan production QR codes with a physical phone and confirm exact localized
  entry URLs.
- [x] Record and enforce an initial JavaScript and CSS performance budget.
- [x] Run an initial Lighthouse production-build review and enforce minimum
  category scores; repeat it against production before formal release.
- [ ] Review all twenty-five French and Tunisian Arabic entries with fluent
  readers, including the footer and impact labels.
- [ ] Audit impact levels, nuance, and named-platform claims for consistency and
  current accuracy.
- [ ] Run a small sender/recipient usability review against the qualitative
  success signals in the PRD.

## Backlog extracted from the documentation

These are useful engineering or product tasks, but they are not counted in the
MVP launch-readiness percentage until promoted into a milestone.

- [x] Add component tests for search, cards, installation, and share/copy states.
- [x] Add an automated end-to-end flow for finding, opening, sharing, and
  switching the language of an entry.
- [x] Add a generated `404.html` so unknown direct GitHub Pages URLs use the
  branded not-found experience.
- [x] Add canonical and language-alternate metadata for localized public routes.
- [x] Use one shared 1200×630 social-preview image for the MVP.
- [x] Keep analytics out of the MVP and require a separate privacy decision
  before adding measurement.
- [x] Define editorial ownership, review, and contribution rules before more
  contributors edit the catalog.
- [x] Define a quarterly review schedule for named-platform visibility claims.
- [ ] Reconsider whether privacy-preserving usage measurement is useful and define
  its data boundaries before adding analytics.

## Deployment / go-live checklist

**Status: deployed; formal launch sign-off is still pending.**

This operational checklist intentionally repeats a few validation tasks and is
not included in the 87% calculation.

### Repository and automation

- [x] Keep the GitHub repository public for Pages hosting.
- [x] Configure **GitHub Actions** as the Pages source.
- [x] Run CI on pull requests and pushes to `main`.
- [x] Build and validate the exact Pages artifact before upload.
- [x] Deploy only after the verification job succeeds.
- [x] Defer branch protection for the solo MVP; enable required checks before
  regular collaborators receive write access.

### Production configuration

- [x] Serve the site over HTTPS.
- [x] Confirm `https://fourat.dev/netiquette/` as the production URL.
- [x] Confirm the standard GitHub Pages URL redirects to production.
- [x] Preserve the `/netiquette/` base path for assets, routes, manifest, and
  service-worker scope.
- [ ] Set the repository website field to the production URL.
- [ ] Record a release tag for the formally approved MVP.

### Production verification

- [x] Confirm successful responses for the homepage, a direct entry, manifest,
  and service worker.
- [x] Confirm Pages CI, artifact upload, and deployment jobs are green.
- [ ] Smoke-test all three languages and representative entries from every
  category on production.
- [ ] Complete the accessibility, cross-browser, PWA, offline, QR, performance,
  and editorial checks in milestone 5.
- [ ] Verify social-preview title, description, image, and URL in common sharing
  clients after the preview-image decision is made.

### Launch operations

- [x] Document how to roll back by reverting or redeploying the previous known
  good commit.
- [x] Assign launch approval and production ownership to the project owner.
- [x] Use GitHub Issues for incorrect etiquette, platform claims, translations,
  or accessibility problems.
- [ ] Record the approved release date and short release notes.
- [ ] Announce the site only after content and validation owners sign off.

## Verified user flows

- Search for “speakerphone,” open the matching entry, copy its link, switch that
  entry to Tunisian Arabic, and verify RTL at desktop and mobile widths.
- Open a long French entry title, verify category/platform icons, confirm the QR
  panel is visible without desktop scrolling, and inspect the localized footer.
- Build all 86 static pages with the `/netiquette/` base path and validate the
  installable offline PWA artifact.

## Immediate next step

Complete the fluent French and Tunisian Arabic review, screen-reader flow, and
real-device PWA/QR checks. These are now the highest-value gates before treating
the already-live deployment as formally approved.
