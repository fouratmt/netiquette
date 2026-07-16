# Netiquette

Netiquette is a multilingual catalog of considerate behaviors for phones,
messaging, social media, and other online interactions.

Each etiquette entry has a permanent link that someone can share. The page
explains the behavior, why it matters, and what to do instead in a
kind, neutral voice.

## Project status

The first usable MVP is implemented. It includes a multilingual and shareable
homepage, searchable and filterable catalog, twenty-five complete etiquette entries,
direct shareable pages with QR codes, language switching, and right-to-left
Tunisian Arabic. Every entry also includes a localized four-level impact rating.

The current decisions and delivery plan live in [the project documentation](./docs/README.md).

## Editing etiquette content

The 25 behaviors are plain Markdown files in `content/etiquettes/`, one file per
behavior with clearly labeled English, French, and Tunisian Arabic sections.
Someone who does not code can add, remove, merge, rename, or edit behaviors
directly through GitHub's web editor, without changing application code. See
[the content editing guide](./content/README.md) and copy
[`ETIQUETTE_TEMPLATE.md`](./content/ETIQUETTE_TEMPLATE.md) when adding a behavior.

The build validates the template, metadata, translations, search words,
categories, platforms, relationships, public slugs, and legacy URL aliases
before deployment.

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
- `just test` runs catalog, search, locale, route, metadata, and component tests.
- `just install-browser chromium` installs an automated test browser.
- `just e2e` runs desktop/mobile Chromium accessibility and user flows.
- `just cross-browser` runs those flows in Chromium, Firefox, and WebKit.
- `just build` pre-renders the localized static site into `dist/`.
- `just pages-build` builds with the default `/netiquette/` Pages base path.
- `just pages-check` builds and validates the complete Pages artifact.
- `just budget` enforces the JavaScript and CSS resource budget.
- `just lighthouse` audits performance, accessibility, best practices, and SEO.
- `just check` runs the complete verification sequence.

`just` is the project task runner; pnpm remains the underlying dependency and
package-script tool. Set `PNPM=/path/to/pnpm` when a non-default pnpm binary is
needed.

## Docker

Run the optimized production site locally at
[http://localhost:8080](http://localhost:8080):

```bash
just docker-up
```

Use `PORT=9000 just docker-up` to publish another host port. The image builds
the statically generated application with Node and serves it from an unprivileged
application stack behind Nginx, including direct-route fallback, PWA-safe cache
headers, immutable asset caching, and a container health check.

For hot-reloading development at
[http://localhost:5173](http://localhost:5173), run:

```bash
just docker-dev
```

Application, Markdown content, public assets, and Vite configuration are mounted
into the development container, while Linux dependencies stay in the image.
Rebuild after changing dependencies. Stop either workflow with
`just docker-down`.

The Docker build defaults to `/` and does not change the GitHub Pages build,
which continues to use `/netiquette/`.

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
