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
- **Status:** Accepted; exact footer copy remains open.
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
- **Status:** Accepted.
- **Reason:** This is large enough to exercise search, categories, overlapping
  platforms, related entries, and translation without making initial editorial
  work unmanageable.

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
