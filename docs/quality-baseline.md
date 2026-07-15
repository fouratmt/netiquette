# Quality baseline

Last updated: 2026-07-15

This document records repeatable engineering evidence. It does not replace
fluent-language review, screen-reader testing, physical-device PWA checks, QR
scanning, or sender/recipient usability sessions.

## Automated checks

- `just check`: 23 unit, Markdown-content, route, metadata, and component tests pass;
  TypeScript passes; all static routes build.
- `just pages-check /netiquette/`: 86 HTML files validate, including the Pages
  `404.html`, 75 active localized entry pages, 3 legacy alias pages, manifest,
  icons, and offline precache.
- `just e2e`: 12 Chromium desktop/mobile checks pass for representative English,
  French, RTL Tunisian Arabic, and not-found views.
- `just cross-browser`: 23 checks pass across Chromium, mobile Chromium,
  Firefox, and WebKit. The WebKit link-tab test is skipped because that behavior
  follows the host macOS Full Keyboard Access preference; Chromium and Firefox
  both pass the keyboard flow.
- Automated axe-core checks report no serious or critical WCAG A/AA violations
  on the localized home, catalog, entry, and not-found views tested.

## Performance budget

The production build is currently approximately:

- JavaScript: 279 KiB raw and 92 KiB gzip, with budgets of 400 KiB raw and
  120 KiB gzip. The extra headroom allows the Markdown catalog to expand while
  Lighthouse remains the user-experience gate.
- CSS: 26 KiB raw and 6 KiB gzip, with budgets of 50 KiB raw and 12 KiB gzip.

`just budget` enforces these limits. A formal Lighthouse run remains a launch
gate through `just lighthouse`. The initial local production-preview scores
were 99 performance and 100 for accessibility, best practices, and SEO. Scores
still depend on the browser, machine, and serving environment, so the deployed
site should be sampled again before formal release.

## Interactive browser review

The French `send-friend-requests-with-context` entry was checked at a 720px-tall
desktop viewport. Its QR panel was fully above the fold, the localized
canonical and four alternate-language links were present, the shared social
image was absolute, and the console contained no errors.

## Known manual checks

- VoiceOver or another screen reader across the complete reading and sharing
  flow.
- Current Safari on Apple hardware and install/Add to Home Screen on iOS.
- Android/desktop PWA installation and production offline reopening.
- Physical phone scans of production QR codes.
- Lighthouse against the deployed build.
- Fluent French and Tunisian Arabic editorial review.
