# Decision log

## D-001 — Working name

- **Decision:** Use **Netiquette** as the working product name.
- **Status:** Accepted, revisitable.
- **Reason:** It is concise, recognizable, and broad enough to cover phone,
  messaging, social-media, and internet behaviors.

## D-002 — Editorial voice

- **Decision:** Use a kind and neutral voice.
- **Status:** Accepted.
- **Reason:** Recipients may open a link immediately after an uncomfortable
  interaction. Non-accusatory language makes the advice easier to receive and
  safer to share.

## D-003 — MVP participation model

- **Decision:** The MVP is a public, read-only catalog.
- **Status:** Accepted.
- **Reason:** Browsing, finding, and sharing a precise entry tests the central
  value proposition without accounts, submissions, moderation, or a backend.

## D-004 — Frontend framework

- **Decision:** Use Vue 3 instead of Next.js.
- **Status:** Accepted.
- **Reason:** Explicit project-owner preference. The product does not require a
  React or Next.js-specific capability.

## D-005 — Audience framing

- **Decision:** Design for varying levels of digital familiarity without
  identifying older adults as the target audience in product copy.
- **Status:** Accepted from the product brief.
- **Reason:** Clear explanations and accessible interaction benefit the intended
  audience without stereotyping or making recipients feel singled out.

## D-006 — Sites workflow

- **Decision:** Do not use the Sites workflow.
- **Status:** Accepted.
- **Reason:** Explicit project-owner constraint.

## D-007 — MVP languages

- **Decision:** Support English, French, and Tunisian Arabic.
- **Status:** Accepted.
- **Reason:** The catalog should be usable and shareable across the project's
  intended linguistic communities.
- **Details:** The root route detects supported browser preferences with English
  as fallback. Explicit localized links retain their language. Tunisian Arabic
  uses Arabic script and RTL layout; Arabizi is deferred.

## D-008 — Direct-entry framing

- **Decision:** Present the etiquette content directly, without an accusatory or
  personalized preamble. Use a visually secondary footer to explain the site's
  shareable-etiquette context.
- **Status:** Accepted and implemented; fluent-language review remains open.
- **Reason:** The content should be useful on its own, while the footer can help
  a recipient understand the product without suggesting why they personally
  received a link.

## D-009 — Catalog grouping

- **Decision:** Use situation-based categories as the primary taxonomy and
  platforms as an additional grouping/filter dimension.
- **Status:** Accepted.
- **Reason:** Situations remain useful when platform features or brands change,
  while platform groupings match how visitors often describe a problem.

## D-010 — Initial catalog boundary

- **Decision:** Begin with approximately 12 polished behaviors grouped across
  Instagram, Facebook, Messenger, WhatsApp, and General.
- **Status:** Superseded after the MVP proved the content model.
- **Reason:** This is large enough to exercise search, categories, overlapping
  platforms, related entries, and translation without making initial editorial
  work unmanageable.
- **Outcome:** The catalog was expanded first to 19, then to 25 entries while keeping the original
  five platform groupings.

## D-011 — Stable localized URLs

- **Decision:** Use a language prefix with the same stable ASCII entry slug in
  every locale, such as `/fr/etiquette/speakerphone-consent`.
- **Status:** Accepted.
- **Reason:** This keeps shared links readable, makes language switching
  dependable, and avoids percent-encoded Arabic URLs while the visible page
  remains fully localized.

## D-012 — Static pre-rendering

- **Decision:** Pre-render every known homepage, catalog, and etiquette route as
  nested static HTML while hydrating it as an interactive Vue application.
- **Status:** Accepted.
- **Reason:** GitHub Pages can serve direct routes reliably, and recipients get
  localized titles, descriptions, content, language attributes, and RTL
  direction before JavaScript runs.

## D-013 — Initial visual direction

- **Decision:** Use a calm editorial design with warm neutral surfaces, dark
  green text, restrained coral/yellow accents, generous typography, and clear
  interaction targets.
- **Status:** Accepted for the first implementation.
- **Reason:** The style is approachable and distinctive without making the
  advice feel childish, institutional, or accusatory.

## D-014 — Task runner

- **Decision:** Use `just` as the project-facing task runner, with pnpm retained
  underneath for dependency management and Node package scripts.
- **Status:** Accepted.
- **Reason:** Local development and CI can share concise, discoverable recipes
  without duplicating command sequences across documentation and workflows.

## D-015 — GitHub Actions and Pages delivery

- **Decision:** Run verification in a dedicated CI workflow and publish the
  static `dist` artifact through GitHub's official Pages Actions workflow.
- **Status:** Accepted for the MVP.
- **Reason:** Pull requests receive feedback before merge, while production
  deployment retains the Pages-specific permissions and environment. A local
  artifact check catches missing localized routes and incorrect Vite base paths
  before upload.

## D-016 — Share surfaces

- **Decision:** Make both the localized homepage and individual behavior pages
  directly shareable. Behavior pages also render a compact, local QR code for
  handing a page to someone nearby.
- **Status:** Accepted for the MVP.
- **Reason:** Copy, native sharing, and QR scanning cover remote and in-person
  sharing without collecting recipient information or depending on a third-party
  QR service.

## D-017 — Explain the shared-link context

- **Decision:** Explain the product's purpose on the homepage and add a
  visually secondary “Why did someone send me this link?” panel after each
  behavior's practical advice.
- **Status:** Accepted for the MVP.
- **Reason:** A recipient should understand the social context of the site
  without being accused or left to guess. The language stays tentative about
  the sender's intent and explicitly separates a missed convention from the
  reader's character.

## D-018 — Installable offline PWA

- **Decision:** Generate a manifest and Workbox service worker during the static
  build, precache every known route, and expose the browser's native install
  prompt from the homepage when available.
- **Status:** Accepted for the MVP.
- **Reason:** Installation and offline reading make shared guidance easier to
  keep and revisit without introducing a backend. Generated registration and
  scope remain compatible with the `/netiquette/` GitHub Pages base path.

## D-019 — Four-level impact scale

- **Decision:** Give every etiquette entry a severity from 1 to 4: light,
  moderate, important, or critical. Show the value with a localized label,
  short explanation, and visual meter on the individual entry page.
- **Status:** Accepted.
- **Reason:** A shared reminder should communicate whether the likely outcome
  is mild awkwardness, discomfort, a serious loss of trust, or a consent and
  privacy risk. The scale evaluates the behavior’s possible impact, not the
  person who receives the link.

## D-020 — Production hosting

- **Decision:** Keep the repository public, deploy `main` with GitHub Pages
  Actions, and serve the project at `https://fourat.dev/netiquette/` while the
  standard GitHub Pages URL redirects to it.
- **Status:** Accepted, implemented, and live.
- **Reason:** Public Pages hosting fits the read-only static architecture,
  provides HTTPS for PWA and sharing features, and keeps deployment tied to the
  same verified artifact used in CI.

## D-021 — Shared social preview

- **Decision:** Use one 1200×630 Netiquette preview image for all MVP routes.
- **Status:** Accepted and implemented.
- **Reason:** A consistent preview makes home and entry links recognizable
  without creating and maintaining 75 localized entry images. Entry-specific
  previews can be reconsidered if sharing feedback shows a clear need.

## D-022 — Privacy-preserving MVP

- **Decision:** Do not add analytics to the MVP.
- **Status:** Accepted.
- **Reason:** The qualitative success signals can be evaluated without visitor
  tracking. Measurement requires a separate purpose, retention, consent, and
  data-boundary decision.

## D-023 — Editorial ownership and review

- **Decision:** The project owner approves releases; contributors use pull
  requests; problems are reported through GitHub Issues; named-platform claims
  receive a quarterly review.
- **Status:** Accepted.
- **Reason:** This provides a lightweight, version-controlled process suitable
  for a curated read-only catalog.

## D-024 — Main branch protection

- **Decision:** Do not require branch protection for the solo MVP yet; keep CI
  running on every push and pull request, and enable required checks before
  adding regular collaborators.
- **Status:** Accepted, revisit when contributor access expands.
- **Reason:** Required reviews would add little protection while one owner is
  shipping the MVP, but automated verification remains mandatory evidence.

## D-025 — Markdown etiquette source

- **Decision:** Store each behavior in one Markdown file containing its small
  metadata header and all three language sections.
- **Status:** Accepted and implemented.
- **Reason:** Editors can change or add catalog copy through GitHub's web editor
  without understanding Vue or TypeScript. A build-time loader preserves the
  typed application model and reports malformed files with direct, readable
  validation errors.

## D-026 — Markdown-only catalog lifecycle

- **Decision:** Adding, removing, renaming, and merging etiquette entries must
  require changes only inside `content/etiquettes/`. A survivor lists removed
  or renamed slugs as aliases so published links remain useful.
- **Status:** Accepted and implemented.
- **Reason:** Non-technical editors should control the complete catalog, not
  only its wording. Build-time alias routes preserve old shared URLs, related
  links are remapped to survivors, and links to deleted entries are removed
  automatically without maintaining a second registry in application code.
