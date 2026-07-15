# Product requirements document

## Product summary

**Working name:** Netiquette

Netiquette is a public catalog of considerate behaviors for phones, messaging,
social media, and other online interactions. Each behavior has a permanent,
shareable page that explains:

- what someone should do;
- why it matters; and
- what to do instead when a common behavior can inconvenience, embarrass, or
  expose someone else.

The core action is not merely reading an article. It is finding the exact
etiquette entry that fits a situation and sharing its direct link.

## Problem

Many everyday digital conventions are learned socially rather than taught.
People who miss those conventions can unintentionally create awkward,
disrespectful, or privacy-sensitive situations. Correcting them personally can
also feel confrontational.

Existing advice is usually scattered across long articles, platform-specific
help pages, or discussions that are difficult to share without additional
explanation. Netiquette should make each convention easy to discover,
understand, and share on its own.

## Product principles

1. **Correct without humiliating.** A shared page must not feel like a public
   shaming tool.
2. **Explain the impact.** Rules should have a social reason, not rely on
   “because everyone knows this.”
3. **Give a practical alternative.** Every entry should tell the reader what to
   do next time.
4. **Make one idea linkable.** Each entry gets a stable, human-readable URL.
5. **Design for clarity.** The experience should be approachable to people with
   different levels of digital familiarity without labeling or stereotyping
   any age group.
6. **Acknowledge context.** Etiquette is not universal law; entries should note
   meaningful cultural, relationship, accessibility, or safety exceptions.
7. **Make language a choice.** English, French, and Tunisian Arabic readers
   should have equivalent access to the core catalog and interface.

## Users and jobs

### The sender

Someone notices a behavior that affected them or could affect others.

They need to:

- quickly find a matching etiquette entry;
- confirm that its explanation is fair and non-accusatory; and
- copy or share a direct link.

### The recipient

Someone receives a link after an awkward or inconsiderate interaction.

They need to:

- understand the convention without feeling attacked;
- see why it matters to other people; and
- remember a simple action for next time.

### The browser

Someone explores the catalog proactively.

They need to:

- browse recognizable topics;
- search using everyday phrases; and
- discover related etiquette entries.

## MVP scope

The MVP is a public, read-only catalog.

### In scope

- Homepage with a concise product explanation.
- Browseable situation-based categories.
- Platform groupings and filters such as Instagram, Facebook, and Messenger.
- Keyword search across titles, summaries, situations, and tags.
- Individual etiquette pages with stable direct URLs.
- A prominent copy-link/share action.
- A compact QR code for opening the same behavior on a nearby phone.
- Related etiquette entries.
- English, French, and Tunisian Arabic interface and content.
- Right-to-left layout support if required by the chosen Tunisian Arabic
  writing system.
- Responsive layouts for phone and desktop.
- Basic accessibility, keyboard navigation, and reduced-motion support.
- Search-engine and social-sharing metadata where the chosen deployment model
  permits it.
- A small, curated starter catalog stored with the application.
- A curated set of 25 polished behaviors, designed to keep expanding.
- A localized four-level impact indicator on every behavior page.
- A prominent way to share the localized homepage as a complete guide.
- Installable PWA metadata and icons.
- Offline access to the generated catalog and behavior pages after the first
  successful visit.

### Out of scope

- Accounts or authentication.
- User profiles, bookmarks, or reading history.
- Public comments, ratings, votes, or reactions.
- User-submitted entries or an editorial moderation dashboard.
- Personalized or accusatory links addressed to a named recipient.
- Notifications or automated messages.
- A database or backend API unless later requirements create a clear need.
- Mobile applications.

## Core experience

### Browse and search

The visitor can search in plain language, such as “speaker phone,” “old
Instagram photo,” or “public Facebook comment.” Search results should show the
title, one-sentence takeaway, category, and relevant platform labels.

### Read an etiquette entry

An entry page should answer, in this order:

1. What is the considerate behavior?
2. How serious can the impact be if it is ignored?
3. Why does it matter?
4. What should someone do instead?
5. Are there important exceptions or nuances?

The page should stand on its own when opened from a message, without requiring
the recipient to understand the rest of the site first.

The main page presents the etiquette content first. A visually secondary context
panel then explains that Netiquette is a catalog of shareable digital
conventions and why someone may choose to send a link rather than make an
awkward correction. It must use qualified language and never claim to know the
sender's intent with certainty.

### Share an entry

The visitor can copy the canonical link. Native device sharing can be offered
when the browser supports it, with copy-to-clipboard as a dependable fallback.
The site should not generate a judgmental prewritten message in the MVP.

## Initial content examples

These are working examples, not final editorial copy:

- Tell someone before putting a call on speakerphone.
- Be careful not to accidentally like an old social-media post while browsing
  someone’s profile.
- Remember that comments on public posts may be shown to people beyond the
  immediate conversation.

The initial platform groupings are Instagram, Facebook, Messenger, WhatsApp,
and General. “General” covers conventions that are not tied to a particular
service.

## Functional requirements

- Every published entry has a unique slug and canonical URL.
- Direct entry URLs remain usable after a refresh.
- Visitors can switch among English, French, and Tunisian Arabic while staying
  on the equivalent view when a translation exists.
- Search is fast and works without an account.
- The catalog can be maintained by editing version-controlled content files.
- Links and buttons have clear labels and visible focus states.
- An unknown entry URL shows a useful not-found state with search/browse paths.
- The application must not require a network request for catalog data after its
  initial assets have loaded.

## Quality attributes

- **Accessibility:** target WCAG 2.2 AA for the MVP interface.
- **Performance:** keep the initial experience lightweight; avoid a backend and
  large client libraries unless justified.
- **Maintainability:** separate editorial content from presentation code and
  validate content structure during development or build.
- **Privacy:** no account or personal data collection in the MVP. Analytics, if
  introduced, require a separate decision.
- **Reliability:** permanent entry slugs should be treated as public contracts.
- **Localization:** do not encode source-language assumptions into components;
  accommodate longer French copy and right-to-left content from the start.

## Early success signals

The MVP can initially be evaluated qualitatively:

- A sender can find and copy the right link in under a minute.
- A recipient can state the expected behavior and its reason after reading one
  page.
- Test readers describe the wording as helpful rather than scolding.
- New catalog entries can be added without changing application components.

Quantitative analytics are intentionally undecided because measurement must be
balanced against the product’s privacy principle.
