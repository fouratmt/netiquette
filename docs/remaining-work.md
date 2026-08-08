# Project gap analysis and remaining work

Last audited: 2026-08-08

This is the single source of truth for work that remains in Netiquette. It
consolidates the product requirements, implementation tracker, architecture,
quality baseline, editorial governance, deployment guide, open questions,
source code, tests, GitHub workflows, and live repository state.

`implementation-progress.md` retains milestone history and the 86% MVP launch
readiness calculation. When the two documents differ about an open task, this
document takes precedence.

## Status and priority definitions

- **Completed:** implemented and supported by current evidence.
- **In progress:** partly implemented, drafted, or awaiting approval.
- **Missing:** required or recommended work has not been implemented or
  evidenced.
- **Investigate:** the need or best solution is not yet sufficiently known.
- **Deferred:** intentionally postponed and not an MVP launch blocker.
- **High:** blocks formal launch, risks a broken core flow, or addresses a known
  significant security/reliability problem.
- **Medium:** important hardening, maintainability, quality, or UX work that can
  follow the usable MVP if its risk is accepted.
- **Low:** optional polish, scale preparation, or a future product decision.

## Audit snapshot

### Confirmed completed baseline

- The 25-entry English, French, and Tunisian Arabic catalog, localized routes,
  search, filters, related entries, impact indicator, sharing, QR codes, and
  explanatory content are implemented.
- Etiquettes can be added, removed, renamed, and merged through Markdown, with
  build-time validation and legacy alias routes.
- Static generation, canonical/alternate metadata, GitHub Pages deployment,
  PWA manifest/icons/offline precache, Pages fallback, Docker production and
  development runtimes, and rollback documentation exist.
- `just check` passed 29 unit/component/content tests, TypeScript, and the static
  build on 2026-08-08.
- `just pages-check /netiquette/` validated all 86 HTML pages, PWA artifacts,
  offline precache, asset paths, and resource budgets on 2026-08-08.
- GitHub CI and Pages deployment both passed for current commit `a618a43`; the
  repository is public, Issues are enabled, and `main` is the default branch.
- The latest recorded browser suite covers Chromium, mobile Chromium, Firefox,
  and WebKit, with automated accessibility checks. It was not rerun during this
  audit.

### Confirmed current repository gaps

- The GitHub repository homepage field is empty.
- `main` has no branch protection.
- There are no GitHub releases or formal MVP tag.
- There are no open GitHub issues tracking the gaps in this document.
- CI tests Chromium and mobile Chromium only; Firefox and WebKit are local-only.
- No Docker build, lint, formatting, coverage, or scheduled editorial-review
  job runs in CI. Production dependency auditing now runs in CI.
- PostCSS is constrained to the patched 8.5.23-or-newer line (currently
  8.5.25), Nano ID is constrained to 3.3.17 or newer, and the production audit
  reported no known vulnerabilities on 2026-08-08.

## Functional and UX gaps

| ID | Status | Priority | Gap and rationale | Dependencies or blockers |
| --- | --- | --- | --- | --- |
| F-01 | In progress | High | Complete fluent French and Tunisian Arabic review of all 25 entries, interface strings, footer, and impact wording. Draft translations exist, but naturalness, equivalent meaning, and tone have not received recorded sign-off. | Fluent reviewers and a correction/approval record are required. |
| F-02 | Missing | High | Complete a manual screen-reader flow covering language selection, search, entry reading, impact explanation, sharing feedback, QR explanation, and footer navigation. Automated axe checks cannot validate reading order, announcements, or usability. | Requires VoiceOver, NVDA, or equivalent hardware/software and a reviewer. |
| F-03 | Missing | High | Validate PWA installation on desktop/Android and Add to Home Screen on iOS, then reopen representative production pages offline. Installability and precaching are automated, but actual platform behavior remains unproven. | Requires physical devices, HTTPS production, and one successful online visit. |
| F-04 | Missing | High | Scan representative QR codes with a physical phone and confirm exact localized production URLs. Generated markup exists, but camera recognition, size, contrast, and URL correctness need real-world evidence. | Requires a physical phone and the production release being tested. |
| F-05 | Missing | High | Run sender/recipient usability sessions against the PRD success signals: find/share within one minute, understand the expected behavior and reason, and perceive the wording as helpful rather than accusatory. | Recruit a small representative group; editorial changes may require repeating part of the review. |
| F-06 | Completed | High | Homepage reminders are selected with optional `featured: true` Markdown metadata, then safely filled from catalog order. The example and reminder section are guarded for small or empty catalogs, so deleting, merging, or reordering files cannot introduce undefined entries. | Editors control selection without code changes; parser and selection regressions cover invalid flags, deletion fallback, one-entry, and empty catalogs. |
| F-07 | Missing | Medium | Report copy/share failures instead of always announcing success or silently swallowing errors. The deprecated `execCommand` fallback is not checked, and non-cancelled native-share errors have no user feedback. | Add localized failure strings and tests for denied clipboard/share APIs. |
| F-08 | Missing | Medium | Improve install guidance where `beforeinstallprompt` is unavailable, especially iOS/Safari, and consider capturing the event at application scope so it is not lost when the visitor is outside the homepage. | Final design depends on real-device findings from F-03. |
| F-09 | Investigate | Low | Evaluate search/filter polish after usability testing: active-filter summary, result-count grammar, recently used queries, typo tolerance, and clearer empty-state suggestions. Current search is functional and fast for 25 entries. | Evidence should come from F-05; avoid adding a fuzzy-search dependency without demonstrated need. |
| F-10 | In progress | Low | Continue expanding and maintaining the etiquette catalog. Expansion is an ongoing content program, not a launch requirement; every new entry still needs all three translations and editorial review. | Editorial capacity and the quarterly platform-claim review process. |

## Content model and architecture gaps

| ID | Status | Priority | Gap and rationale | Dependencies or blockers |
| --- | --- | --- | --- | --- |
| A-01 | Missing | Medium | Distinguish an intentionally deleted related entry from a typo. The loader silently drops every unresolved `related` slug, which supports deletion but can conceal editorial mistakes. | Choose a mechanism such as warnings, an explicit `removed` list, or a strict validation mode with documented deletion workflow. |
| A-02 | Missing | Medium | Reject duplicate frontmatter keys and expand parser edge-case tests. Duplicate metadata currently overwrites the earlier value silently; malformed CSV values, repeated `none`, and more alias-collision cases are not fully covered. | Preserve plain-language editor errors in every new validation. |
| A-03 | Missing | Medium | Provide a fast standalone content-validation command. Editors currently discover most problems through the full test/build path, which is slower and less obvious than `just content-check`. | Extract or expose the existing loader checks in a Node-compatible validation script. |
| A-04 | Investigate | Low | Decide whether categories, platform definitions, and interface strings should also become non-code content. Homepage feature selection is now editor-controlled through Markdown, but adding a taxonomy or changing shared UI copy still requires TypeScript. | Avoid over-generalizing until non-technical editors need these operations. |
| A-05 | Missing | Medium | Remove hard-coded production-origin assumptions from artifact verification. `verify-pages-build.mjs` expects `fourat.dev/netiquette` even though Docker accepts a configurable `VITE_SITE_URL`. | Define one validated public-origin input shared by metadata, Pages checks, Docker, tests, and documentation. |
| A-06 | Missing | Medium | Add `sitemap.xml`, `robots.txt`, and optional `WebSite`/`Article` structured data. Canonical and alternate links exist, but discovery and rich semantic metadata are incomplete. | Confirm canonical production origin and decide whether legacy aliases belong in the sitemap. |

## Testing and quality gaps

| ID | Status | Priority | Gap and rationale | Dependencies or blockers |
| --- | --- | --- | --- | --- |
| Q-01 | Completed | High | Rendered `HomeView` tests cover one-entry and empty Markdown catalogs. Desktop/mobile browser tests open a merged legacy link, verify the survivor content and canonical/Open Graph URL, then switch language onto the canonical slug. | The first browser run exposed one transient failure in the pre-existing clipboard flow; an immediate full rerun passed all 14 tests. Clipboard failure UX remains tracked by F-07. |
| Q-02 | Missing | Medium | Run Firefox and WebKit in CI, or document a deliberate scheduled/manual cadence. They are configured and have historical local evidence, but pull requests only run Chromium/mobile Chromium. | CI runtime budget is currently 10 minutes; may require a separate job, caching, or scheduled workflow. |
| Q-03 | Missing | Medium | Automate representative PWA/offline tests: service-worker control, cached navigation after network loss, update behavior, and manifest/install criteria where browser automation supports them. Artifact-string checks do not prove runtime behavior. | Some install behavior remains inherently manual; coordinate with F-03. |
| Q-04 | Missing | Medium | Expand component/error-path tests for language switching and persistence, header/footer, severity, QR generation, taxonomy icons, clipboard denial/fallback, share rejection, install dismissal, unknown filters, and unavailable storage APIs. | Prioritize real failure modes uncovered by manual reviews. |
| Q-05 | Missing | Medium | Add coverage reporting and a modest threshold so untested branches are visible. The project has no coverage provider, report, or CI artifact. | Select the Vitest coverage provider and exclude generated/static content appropriately. |
| Q-06 | Missing | Medium | Upload Playwright traces/screenshots/reports when CI fails. Traces are retained locally, but the workflow does not publish artifacts, making remote failures harder to diagnose. | Add conditional artifact upload with short retention and no user data. |
| Q-07 | Missing | Medium | Add a Docker image smoke test in CI: build, run as non-root, wait for health, verify a direct route/fallback/PWA header, and stop cleanly. Docker was verified locally only. | Adds CI time; can run in a separate job after unit/build checks. |
| Q-08 | Investigate | Low | Consider targeted visual-regression screenshots for desktop/mobile/RTL entry and catalog layouts. This would catch spacing and wrapping regressions that semantic tests miss, but snapshots require deliberate review ownership. | Stabilize fonts/rendering and define an update policy before enforcing. |
| Q-09 | Missing | High | Complete the manual accessibility, language, real-device, QR, usability, and production Lighthouse checks listed under functional and release gaps. These cannot be replaced by unit coverage. | External reviewers/devices and formal evidence recording. |

## Security and privacy gaps

| ID | Status | Priority | Gap and rationale | Dependencies or blockers |
| --- | --- | --- | --- | --- |
| S-01 | Completed | High | PostCSS is overridden to the patched `^8.5.23` line (resolved as 8.5.25). The follow-up audit found a newly disclosed transitive Nano ID advisory, so Nano ID is also constrained to `^3.3.17`; `just check`, desktop/mobile Chromium flows, and the production audit pass. | Nano ID 3.3.17 received a narrowly documented exception to the seven-day package quarantine because it fixes GHSA-2v37-7h3g-55p8. |
| S-02 | Completed | High | `just audit` now fails on high/critical production advisories in CI. Dependabot checks npm weekly (grouped by production/development), and GitHub Actions and Docker monthly. | Audit availability depends on the npm advisory service; CI should treat service failures as visible failures rather than silently skipping the gate. |
| S-03 | Missing | Medium | Harden Docker HTTP headers: evaluate CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and framing protection. Current Nginx config focuses on routing/cache behavior. | Test CSP against generated scripts, PWA registration, QR SVG, and social assets. GitHub Pages cannot set arbitrary response headers, so production-host limitations must be documented separately. |
| S-04 | Missing | Medium | Harden and scan the container: pin base images by digest or automate refreshes, consider read-only filesystem/capability drops, generate an SBOM, and run an image vulnerability scan. Runtime Nginx already runs as UID 101. | Balance reproducibility with automated security updates; validate Nginx temporary paths under read-only mode. |
| S-05 | Missing | Medium | Pin third-party GitHub Actions to commit SHAs or adopt a documented trusted-tag/update policy. Current workflows use mutable major-version tags. | Requires an update process so security fixes do not become permanently pinned out. |
| S-06 | Deferred | Low | Error analytics and usage analytics remain intentionally absent. Any future client telemetry must define purpose, retention, consent, processor, and data boundaries before implementation. | Product/privacy decision; uptime-only monitoring can proceed without behavioral analytics. |

## Performance, reliability, and monitoring gaps

| ID | Status | Priority | Gap and rationale | Dependencies or blockers |
| --- | --- | --- | --- | --- |
| R-01 | In progress | High | Current production was audited on 2026-08-08: homepage 44/100/81/100 and speakerphone entry 51/100/81/100 for performance/accessibility/best practices/SEO. Both fail the 90 performance and 90 best-practices gates. A diagnostic report attributes about 7 seconds of scripting and all three deprecation warnings to the host-injected `/cdn-cgi/challenge-platform/scripts/jsd/main.js`, not the application bundle. | Review/disable Cloudflare JavaScript detection or challenges for `/netiquette/*`, deploy this release candidate, then rerun both production URLs; current local changes are not yet published. |
| R-02 | Missing | Medium | Add privacy-preserving uptime/deployment monitoring for the homepage, one direct entry, manifest, and service worker. There is no automated signal between deployments that production remains reachable. | Choose an owner, alert destination, check frequency, and retention; avoid visitor tracking. |
| R-03 | Missing | Medium | Add a post-deployment smoke job or documented automated probe after Pages deployment. The workflow reports deployment success but does not verify localized content, metadata, manifest, and service worker from the public origin. | Pages availability may lag deployment; use bounded retries and avoid rolling back on a transient CDN delay without confirmation. |
| R-04 | Missing | Medium | Add internal-link and optional external-link checking. Route validation covers generated pages, but documentation links and current first-party sources for named-platform claims are not automatically checked. | External checks need retry/rate-limit policy to avoid flaky CI; a scheduled job is preferable. |
| R-05 | Investigate | Low | Decide whether service-worker update/offline status needs user-facing feedback. Updates activate immediately, but users receive no notice if an update fails or if content is being served offline. | Use findings from F-03; avoid noisy UI when recovery is automatic. |
| R-06 | Completed | Low | Rollback instructions, deterministic static artifacts, resource budgets, PWA artifact checks, and a Docker health endpoint are documented and implemented. | Revalidate the rollback procedure during the formal release exercise. |

## CI/CD and release gaps

| ID | Status | Priority | Gap and rationale | Dependencies or blockers |
| --- | --- | --- | --- | --- |
| C-01 | Completed | High | Current commit CI and GitHub Pages deployment are green. This establishes a working delivery baseline, not formal release approval. | Continue preserving required verification when workflows change. |
| C-02 | Missing | Medium | Add Docker build/smoke validation to CI before treating the image as a supported deployment artifact. | Covered technically by Q-07; decide whether images should also be published. |
| C-03 | Deferred | Medium | Enable branch protection and required status checks before regular collaborators receive write access. `main` is currently unprotected by explicit solo-project decision. | Trigger is a change in collaborator/write-access model. |
| C-04 | Missing | Medium | Align supported Node versions. Local/Docker use Node 22 while Actions use Node 24 and `package.json` accepts any version from 22 upward; only one CI runtime is tested. | Choose one pinned LTS baseline or add a small compatibility matrix. |
| C-05 | Missing | Low | Reduce duplicate CI/deployment work or explicitly accept it. Both workflows install, verify, and build on every push to `main`, increasing time while ensuring the deployed artifact is independently checked. | Artifact handoff across workflows adds complexity and trust considerations; optimization is optional. |
| C-06 | Missing | High | Complete the production release checklist: all-language/category smoke test, social-preview checks in representative clients, approved release date/notes, MVP tag/release, and owner sign-off before announcement. | Blocked by F-01–F-05, Q-09, and R-01. |
| C-07 | Missing | Low | Set the repository homepage field to `https://fourat.dev/netiquette/`. The live repository currently reports a null homepage. | Repository admin access is available. |
| C-08 | Missing | Medium | Create a scheduled reminder or issue process for quarterly platform-claim review and yearly general-content review. Governance defines the cadence but nothing creates or tracks the work. | Assign editorial owner and decide whether automation opens GitHub Issues. |

## Developer experience and documentation gaps

| ID | Status | Priority | Gap and rationale | Dependencies or blockers |
| --- | --- | --- | --- | --- |
| D-01 | Missing | Medium | Add linting and formatting for TypeScript, Vue, Markdown, YAML, and Docker/Nginx files, with `just lint`/`just format-check` and CI enforcement. Type checking does not catch style drift, unsafe patterns, or malformed documentation conventions. | Choose tools and minimize churn in existing content files. |
| D-02 | Missing | Medium | Add `.env.example` and a configuration reference for `BASE_PATH`, `VITE_SITE_URL`, `PORT`, `SITE_URL`, and `DEV_PORT`. Variables are scattered across Vite, Compose, scripts, README, and the justfile. | Coordinate with A-05 so names and origin semantics are consistent. |
| D-03 | Missing | Medium | Add a concise contribution guide covering setup, content-only changes, code changes, tests expected by change type, slug compatibility, screenshots, and release ownership. Current content and architecture guides cover pieces but not an end-to-end contributor workflow. | Decide whether external contributions are expected before adding heavier governance. |
| D-04 | Missing | Low | Add issue templates for incorrect etiquette, translation problems, platform claims, accessibility defects, and technical bugs. Governance tells people to use Issues, but provides no structured intake. | Keep templates short and do not request personal recipient/sender details. |
| D-05 | Investigate | Medium | Choose and add a repository license, or explicitly document that no license is granted. The repository is public but contains no `LICENSE`, leaving reuse/contribution rights unclear. | Requires product-owner/legal choice; do not infer an open-source license. |
| D-06 | Missing | Low | Add release notes/changelog practice once the first formal release is cut. Git history exists, but there is no release record or user-facing change summary. | Part of C-06; choose GitHub Releases, `CHANGELOG.md`, or both. |
| D-07 | Completed | Medium | README, product requirements, content/voice guidance, Markdown editor guide/template, architecture, decisions, governance, quality baseline, deployment/rollback, open questions, progress, and this gap register exist. | Keep dates and status synchronized when gaps close or new scope is accepted. |

## Planned and deferred product enhancements

These are not missing MVP work and must not reduce launch readiness unless the
product owner explicitly promotes them into scope.

| ID | Status | Priority | Enhancement | Promotion dependency |
| --- | --- | --- | --- | --- |
| P-01 | Deferred | Low | Offer Latin-script Tunisian Arabizi alongside Arabic script. | Evidence that readers request it and an editorial/transliteration policy. |
| P-02 | Deferred | Low | Add privacy-preserving usage measurement. | Written purpose, success metrics, retention, consent, processor, and data-boundary decision. |
| P-03 | Deferred | Low | Add submissions, accounts, editorial administration, content API, or database. | A clear change from the curated public read-only model and a new security/moderation architecture. |
| P-04 | Deferred | Low | Add bookmarks, history, comments, ratings, notifications, or native mobile applications. | New validated user need; all are explicitly outside the current PRD. |
| P-05 | Deferred | Low | Create entry-specific social-preview images instead of the shared brand image. | Sharing research demonstrates enough value to justify generating and maintaining 75+ localized assets. |

## Dependency and blocker map

1. **Immediate engineering safety:** S-01 (PostCSS) and F-06 (Markdown deletion
   safety) should be fixed before additional feature work. S-02 prevents the
   security gap from becoming invisible again.
2. **Editorial candidate:** F-01 and the consistency portion of the editorial
   audit must finish before usability testing or formal release evidence is
   treated as final.
3. **Human/device validation:** F-02–F-05 and Q-09 require reviewers, physical
   devices, and production access; they cannot be completed by CI alone.
4. **Release evidence:** R-01, R-03, social-preview checks, and the production
   smoke test require the final candidate to be deployed.
5. **Release administration:** C-06, C-07, and D-06 follow approval; the formal
   tag should identify the exact approved commit.
6. **Hardening:** testing, monitoring, container, workflow, and developer-tool
   improvements can proceed independently unless they risk changing the
   release candidate during manual sign-off.

## Recommended execution order

### Phase 0 — Resolve known code and security risks

- [x] S-01: patch PostCSS and rerun security/build/browser checks.
- [x] F-06/Q-01: remove positional homepage assumptions and test Markdown
  deletion/merge rendering.
- [x] S-02: add automated dependency updates and audit policy.

### Phase 1 — Complete launch validation

- [ ] F-01: fluent-language and editorial consistency approval.
- [ ] F-02: screen-reader review.
- [ ] F-03/F-04: PWA install, offline, and physical QR checks.
- [ ] F-05: sender/recipient usability review.
- [ ] R-01: production Lighthouse audit.

### Phase 2 — Formalize the release

- [ ] R-03/C-06: post-deploy smoke and social-preview verification.
- [ ] C-07: repository homepage.
- [ ] C-06/D-06: approval record, release notes, tag, and announcement.

### Phase 3 — Harden ongoing maintenance

- [ ] Q-02–Q-08: broaden automated evidence and diagnostics.
- [ ] S-03–S-05: HTTP, container, and workflow supply-chain hardening.
- [ ] R-02/R-04 and C-08: uptime, link, and editorial-cadence monitoring.
- [ ] A-01–A-06 and D-01–D-05: content architecture and contributor tooling.

## Assumptions and areas requiring investigation

- The live GitHub checks confirm deployment workflow success for `a618a43`, but
  no uptime monitor proves uninterrupted availability after that run.
- Current production Lighthouse failures are dominated by a Cloudflare
  challenge-platform script. Host configuration must be corrected or the
  performance/best-practices threshold policy must be explicitly reconsidered;
  application-only local scores remain above the gate.
- PostCSS and Nano ID are currently used in the build toolchain rather than as
  a public application server. Their known advisories are patched; future
  production advisories are enforced by CI and automated update monitoring.
- GitHub Pages cannot configure the same response headers as the Docker Nginx
  runtime. Security-header expectations must be host-specific.
- Real-device PWA, offline, QR, screen-reader, social-client preview, and
  perceived-tone results cannot be inferred from automated checks.
- Named-platform behavior may have changed since copy was drafted; first-party
  sources must be consulted during the editorial audit.
- No analytics is a deliberate privacy choice, not an observability oversight.
  Uptime and deployment monitoring can be added without tracking visitors.
- The need for taxonomy-as-content, typo-tolerant search, Arabizi, submissions,
  and richer social images depends on editor/user evidence rather than current
  implementation incompleteness.

## Explicitly out of scope

Accounts, profiles, bookmarks, history, public comments, ratings, votes,
user-submitted entries, personalized accusatory links, notifications, automated
messages, a backend/database, analytics without a new privacy decision, and
native mobile applications are excluded from the current MVP. They should not
be described as defects or counted against launch readiness.
