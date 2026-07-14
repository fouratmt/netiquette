# Technical architecture

## Status

Proposed architecture for the MVP. Vue is decided; some implementation details
remain open pending the next product questions.

## Chosen direction

- Vue 3.
- TypeScript.
- Public, read-only application.
- English, French, and Tunisian Arabic localization.
- Catalog content shipped with the application.
- No backend, authentication, database, or user-generated content in the MVP.

The generic Next.js/vinext starter has been removed. The repository is now a
clean documentation-first foundation ready for the Vue scaffold.

## Recommended application shape

Use a small Vue 3 application built with Vite and Vue Router.

```text
src/
  app/
    router.ts
  components/
  content/
    entries/
    categories.ts
    platforms.ts
    locales/
  domain/
    etiquette.ts
    locale.ts
    search.ts
  views/
    HomeView.vue
    BrowseView.vue
    EntryView.vue
    NotFoundView.vue
  App.vue
  main.ts
```

The final content file format—TypeScript, JSON, or Markdown—is still open. It
should support schema validation, aligned translations, and editorial changes
independent of UI components.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Detect or select a language, subject to the remaining locale decision. |
| `/:locale` | Explain the product, offer search, and show common categories or entries. |
| `/:locale/etiquette` | Browse and search the localized catalog. |
| `/:locale/etiquette/:slug` | Read and share one localized etiquette entry. |
| `/:locale/category/:slug` | Browse a situation-based category. |
| `/:locale/platform/:slug` | Browse entries associated with a platform. |
| catch-all | Friendly not-found page with search and browse links. |

The localized entry route is the product’s center. Public slugs must be
human-readable, stable, and unique within their locale. Entries also need a
language-independent ID so the language switcher can find an equivalent
translation even when localized slugs differ.

## Proposed content model

```ts
type EtiquetteEntry = {
  id: string;
  locale: "en" | "fr" | "ar-TN";
  slug: string;
  title: string;
  takeaway: string;
  situation: string;
  whyItMatters: string;
  whatToDo: string;
  nuance?: string;
  category: string;
  platforms: string[];
  tags: string[];
  related: string[];
  status: "draft" | "published";
};
```

Validation should reject duplicate locale/slug pairs, missing required fields,
invalid related-entry references, mismatched translation IDs, unknown category
or platform references, and draft entries accidentally exposed by the
published catalog.

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

The default locale, Tunisian Arabic script, and public slug policy remain open.

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
- Confirm successful copying with an accessible status message.
- Do not collect recipient details or send messages on the visitor’s behalf.

## Rendering and discoverability

A client-rendered Vite SPA is the simplest implementation. However, direct
links are the core product, and rich per-entry search/social metadata may
eventually justify pre-rendering the known entry routes.

Before implementation, choose between:

- **SPA:** smallest setup; requires host fallback routing; per-entry metadata is
  less dependable for crawlers and link previews.
- **Static pre-rendering:** generates an HTML page for each known entry; better
  metadata and direct-link resilience, with slightly more build complexity.

This choice does not require Next.js. It can be implemented within a Vue/Vite
toolchain or with a Vue meta-framework only if clearly justified.

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
- Component tests for search, cards, and share/copy states.
- Route-level tests for home, entry, unknown slug, and query-string search.
- One end-to-end path: find an entry, open it, and copy its link.
- Automated accessibility checks supplemented by keyboard and screen-reader
  review.

## Deployment requirements

- Static asset hosting is sufficient for the MVP.
- The host must serve the application or generated entry page for direct route
  requests.
- HTTPS is required for reliable clipboard and native share capabilities.
- Deployment-platform selection remains open.
- The Sites workflow is explicitly excluded from this project.

## Future evolution

If submissions or editorial administration are added later, introduce those as
separate authenticated capabilities rather than complicating the public catalog
in advance. A versioned content API or database should be adopted only when the
editing workflow requires it.
