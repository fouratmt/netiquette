# Netiquette

Netiquette is a multilingual catalog of considerate behaviors for phones,
messaging, social media, and other online interactions.

Each etiquette entry has a permanent link that someone can share. The page
explains the behavior, why it matters, and what to do instead in a
kind, neutral voice.

## Project status

The first usable MVP is implemented. It includes a multilingual and shareable
homepage, searchable and filterable catalog, nineteen complete etiquette entries,
direct shareable pages with QR codes, language switching, and right-to-left
Tunisian Arabic. Every entry also includes a localized four-level impact rating.

The current decisions and delivery plan live in [the project documentation](./docs/README.md).

## Current direction

- Vue 3 and TypeScript.
- English, French, and Tunisian Arabic.
- Public, read-only catalog.
- Situation-based categories with additional platform groupings.
- No backend, accounts, database, or Sites workflow for the MVP.

## Local development

Requirements: Node.js 22 or newer, pnpm 11, and `just`.

```bash
just install
just dev
```

Useful commands:

- `just` lists every available recipe.
- `just typecheck` checks Vue and TypeScript source.
- `just test` runs catalog, search, locale, and route tests.
- `just build` pre-renders the localized static site into `dist/`.
- `just pages-build` builds with the default `/netiquette/` Pages base path.
- `just pages-check` builds and validates the complete Pages artifact.
- `just check` runs the complete verification sequence.

`just` is the project task runner; pnpm remains the underlying dependency and
package-script tool. Set `PNPM=/path/to/pnpm` when a non-default pnpm binary is
needed.

## GitHub Pages

The production site is live at
[https://fourat.dev/netiquette/](https://fourat.dev/netiquette/). The standard
GitHub Pages URL redirects to that address.

The workflow in `.github/workflows/ci.yml` verifies pull requests and pushes to
`main`. The deployment workflow in `.github/workflows/deploy-pages.yml` verifies,
builds, validates, and publishes the site when `main` is pushed or the workflow
is started manually.

The public repository uses **GitHub Actions** as its Pages source. Pushes to
`main` are validated and deployed automatically. The project keeps the
`/netiquette/` base path so assets, direct links, and PWA scope work at both the
GitHub Pages URL and the current custom-domain path.

## Progressive Web App

The production build is an installable PWA. It includes a web-app manifest,
standard and maskable icons, Apple touch metadata, a base-aware service worker,
automatic updates, and offline precaching for every generated locale and
behavior page.

Supporting browsers show an **Install app** button on the homepage once their
native installation criteria are met. Browsers that do not expose an install
prompt, including Safari, can still use their normal **Add to Home Screen**
command. PWA features require HTTPS in production; localhost is accepted for
development and verification.
