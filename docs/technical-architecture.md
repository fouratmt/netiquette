# Technical architecture

## Status

Implemented and deployed architecture for the first usable MVP. Automated
accessibility and cross-browser coverage is in place; real-device,
screen-reader, performance, and editorial sign-off work remains open.

## Chosen direction

- Vue 3.
- TypeScript.
- Public, read-only application.
- English, French, and Tunisian Arabic localization.
- Catalog content shipped with the application.
- No backend, authentication, database, or user-generated content in the MVP.

The generic Next.js/vinext starter has been removed and replaced by the Vue
application described below.

## Task runner

`just` is the project-facing task runner for local development and GitHub
Actions. Recipes delegate to pnpm, which remains responsible for dependency
installation and Node package scripts. Run `just` to list the available tasks.

## Application shape

The application uses Vue 3, Vite, Vue Router, and static generation.

```text
src/
  app/
    routes.ts
  components/
  content/
    catalog.ts
    etiquettes.ts
  domain/
    locale.ts
    search.ts
    types.ts
  views/
    HomeView.vue
    CatalogView.vue
    EntryView.vue
    NotFoundView.vue
  App.vue
  main.ts
```

Each behavior lives in one editor-friendly Markdown file under
`content/etiquettes/`. Its small metadata header defines the stable slug,
category, platforms, impact level, related entries, legacy URL aliases, and
display order. Clearly labeled body sections contain English, French, and
Tunisian Arabic prose.

`src/content/etiquettes.ts` loads every Markdown file at build time, validates
the template with filename-specific errors, and converts it to the typed model
used by Vue. Interface strings, taxonomy labels, and impact-scale labels remain
in `catalog.ts` because they change with application structure rather than an
individual etiquette. Editors use `content/README.md` and
`content/ETIQUETTE_TEMPLATE.md`; they do not need to modify TypeScript.
The loader also remaps relationships that use a legacy alias and removes
relationships to deleted entries, so adding, removing, renaming, or merging
behaviors is entirely controlled by the Markdown files.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Detect or select a language, with English fallback. |
| `/:locale` | Explain the product, offer search, and show common categories or entries. |
| `/:locale/etiquette` | Browse and search the localized catalog. |
| `/:locale/etiquette/:slug` | Read and share one localized etiquette entry. |
| `/:locale/etiquette?category=:id` | Browse a situation-based category. |
| `/:locale/etiquette?platform=:id` | Browse entries associated with a platform. |
| catch-all | Friendly not-found page with search and browse links. |

The localized entry route is the product’s center. Public slugs are readable,
stable, language-independent identifiers. Each entry also has an internal ID
used for related-entry validation.

## Content model

```ts
type EtiquetteEntry = {
  id: string;
  slug: string;
  aliases: string[];
  category: string;
  platforms: string[];
  severity: 1 | 2 | 3 | 4;
  related: string[];
  translations: Record<"en" | "fr" | "ar-TN", {
    title: string;
    takeaway: string;
    situation: string;
    whyItMatters: string;
    whatToDo: string;
    nuance?: string;
    tags: string[];
  }>;
};
```

Tests reject duplicate IDs, slugs, or aliases; slug/alias conflicts; missing
translations; severity outside the four-level scale; unknown category or
platform references; malformed headings; missing metadata; and incomplete
search words. Related references are normalized at build time: aliases resolve
to the surviving entry and references to removed entries are omitted.

## Localization

- Store the active locale in the URL so direct links are deterministic.
- Keep interface strings separate from entry content.
- Use BCP 47 identifiers internally (`en`, `fr`, and `ar-TN`).
- Set the document `lang` and `dir` attributes on every locale change.
- Preserve the current entry, category, platform, or search intent when the
  visitor changes language.
- Build layout primitives for both left-to-right and right-to-left directions;
  avoid hard-coded left/right spacing and directional icons.
- Search only the active locale for the MVP.

On `/`, select the best supported locale from the browser's language
preferences and fall back to English. Remember an explicit language choice
locally and prefer it on later visits to `/`. A URL that already contains a
locale always wins, ensuring that shared links retain the sender's language.

Tunisian Arabic uses Arabic script and a right-to-left document direction in
the MVP. Latin-script Arabizi is deferred. Public routes use `ar-tn`, while the
application and document metadata use `ar-TN`. Every locale uses the same
stable ASCII entry slug.

## Search

For the initial catalog, perform search locally in the browser. Normalize case
and punctuation, then rank exact title/tag matches above partial matches in the
takeaway and body fields. Avoid adding a search service or large fuzzy-search
dependency until the catalog size proves it necessary.

Search state should be reflected in the URL query string, for example
`/en/etiquette?q=speaker`, so results are navigable and shareable.

## Sharing

- Each entry exposes its canonical URL.
- Use `navigator.share` on supporting devices.
- Always provide a copy-link fallback.
- Render a small client-side QR code for the current behavior URL without using
  an external QR service.
- Give each localized homepage its own prominent copy/share callout.
- Confirm successful copying with an accessible status message.
- Do not collect recipient details or send messages on the visitor’s behalf.

## Rendering and discoverability

The application uses `vite-ssg` to pre-render every known route as nested static
HTML, then hydrates those pages as a Vue application. This preserves fast direct
links and localized metadata without requiring an application server. Adding a
catalog entry automatically adds three concrete entry routes to the build. Each
Markdown alias creates three legacy routes that render the surviving behavior
while publishing the survivor as the canonical URL. Removing a file removes
its routes; merging requires only adding the old slug to the survivor's aliases
and deleting the old file.

## Progressive Web App

`vite-plugin-pwa` generates the web-app manifest and a Workbox service worker
after static generation. The PWA layer:

- uses the configured Vite base path for GitHub Pages registration and scope;
- precaches every generated HTML route, application asset, icon, and manifest;
- claims open clients and activates updates immediately;
- declares 192px, 512px, maskable, and Apple touch icons;
- uses a standalone display mode and the application root language selector as
  its start URL;
- exposes a homepage install button when the browser fires its native
  `beforeinstallprompt` event; and
- remains installable through browser-native Add to Home Screen controls when
  that event is not available.

The Pages artifact validator rejects builds with missing PWA files, incorrect
icon dimensions, incomplete manifest metadata, a base-path mismatch, missing
offline routes, or absent update activation behavior.

## Accessibility

- Semantic landmarks and heading hierarchy.
- Full keyboard access and visible focus indicators.
- Search field with a persistent label.
- Copy/share result announced through a live region.
- No meaning communicated by color alone.
- Respect `prefers-reduced-motion`.
- Comfortable default type size and touch targets.
- Correct reading order, focus behavior, and icon direction in LTR and RTL.
- Test common screen widths, keyboard-only use, and a screen reader flow.

## Testing strategy

- Unit tests for content validation, search ranking, and URL helpers.
- Component tests for search, cards, installation, and share/copy states.
- Route-level tests for home, entry, unknown slug, and query-string search.
- Automated desktop/mobile path: find an entry, open it, copy its link, and
  switch language.
- Automated axe-core checks across representative localized and not-found views.
- Chromium, Firefox, WebKit, and mobile Chromium coverage, supplemented by
  keyboard and manual screen-reader review.
- Enforced JavaScript and CSS resource budgets.

## Deployment requirements

- Static asset hosting is sufficient for the MVP.
- The host must serve the application or generated entry page for direct route
  requests.
- HTTPS is required for reliable clipboard and native share capabilities.
- GitHub Pages is the active MVP deployment target.
- The Sites workflow is explicitly excluded from this project.

## Container runtime

The repository includes a multi-stage `Dockerfile` with separate development,
build, and production targets. The production target compiles the static Vue
application with Node 22 and serves only the generated `dist` directory through
Nginx. Its server configuration supports nested pre-rendered routes, an SPA
fallback for unknown client-side routes, conservative PWA caching, immutable
hashed assets, and a `/healthz` container health check.

`compose.yaml` runs the production image at port 8080 by default.
`compose.dev.yaml` uses the Vite development target and focused source bind
mounts while keeping Linux dependencies inside the image. Docker builds use
`/` as their base path; the independent GitHub Pages workflow retains
`/netiquette/`.

## GitHub Pages compatibility

GitHub Pages hosts the production MVP. The
checked-in GitHub Actions workflows verify the project, build the Vite
application, and deploy the static `dist` artifact.

Continuous integration and deployment are separate workflows:

- `ci.yml` runs type checking, tests, a Pages-base build, and artifact validation
  for pull requests, pushes to `main`, and manual runs.
- `deploy-pages.yml` repeats the release checks, uploads only `dist`, and deploys
  through GitHub's Pages environment on pushes to `main` or manual runs.
- Both workflows call `just` recipes, keeping their build commands identical to
  local development.
- The Pages artifact validator derives the expected entry routes from the
  catalog and checks localized HTML, asset paths, and document direction before
  upload.

Implementation considerations:

- The deployment reads the base path produced by `actions/configure-pages`.
  The current project is served under `/netiquette/`, including through the
  custom-domain path, so asset and service-worker URLs retain that prefix.
- GitHub Pages serves static files and supports a custom `404.html`, but it does
  not provide general-purpose application-server rewrites.
- Refresh-safe direct entry links and localized link metadata are provided by
  statically pre-rendering all known locale and entry routes with nested
  `index.html` files.
- The public repository is configured with **GitHub Actions** as its Pages
  source and deploys pushes to `main` through the official Pages Actions flow.
- Production is available at `https://fourat.dev/netiquette/`; the standard
  `https://fouratmt.github.io/netiquette/` address redirects there.

References:

- [Vite: Deploying a static site](https://vite.dev/guide/static-deploy.html#github-pages)
- [GitHub: Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub: Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Future evolution

If submissions or editorial administration are added later, introduce those as
separate authenticated capabilities rather than complicating the public catalog
in advance. A versioned content API or database should be adopted only when the
editing workflow requires it.
