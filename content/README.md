# Editing Netiquette content

Every behavior lives in one Markdown file inside `content/etiquettes/`. You can
edit these files directly in GitHub's web interface without installing the app
or understanding Vue, TypeScript, or any other code.

## Change existing wording

1. Open `content/etiquettes/` on GitHub.
2. Open the behavior you want to change and choose the pencil **Edit** button.
3. Edit only the prose below the relevant headings.
4. Use the **Preview** tab to reread the three language sections.
5. Propose or commit the change. Automated checks will report missing sections,
   duplicate links, or invalid metadata in plain language.

Each file contains:

- a small metadata block between `---` lines;
- an **English** section;
- a **Français** section; and
- a **تونسي** section.

The labels such as `## Title / Titre / العنوان` are part of the template. Keep
them unchanged. The text underneath them is the content you can freely rewrite.
`Nuance` is the only optional section. Search words are comma-separated phrases
people might type when looking for the behavior.

## Metadata reference

Most wording changes do not require touching metadata.

- `slug`: permanent URL name. Never change it after publication.
- `category`: one of `calls-voice`, `social-media`, `privacy-audience`, or
  `messaging-groups`.
- `platforms`: comma-separated platform names: `general`, `instagram`,
  `facebook`, `messenger`, and/or `whatsapp`.
- `severity`: possible impact from `1` (light) to `4` (critical).
- `related`: comma-separated slugs of related behaviors, or `none`. References
  to removed files disappear automatically; references to merged slugs point to
  the surviving behavior automatically.
- `aliases`: old slugs that should keep working after behaviors are renamed or
  merged, or `none`.
- `order`: positive number controlling catalog order. Two files may use the
  same number; ties are sorted alphabetically by slug.

## Add a behavior

1. Copy `content/ETIQUETTE_TEMPLATE.md` into `content/etiquettes/`.
2. Rename it with the new permanent slug, for example
   `ask-before-posting-a-photo.md`.
3. Fill every required section in all three languages.
4. Add search phrases readers are likely to use.
5. Run the automated checks or open a pull request and let GitHub run them.

The new behavior automatically receives three localized routes, sharing tools,
a QR code, metadata, related-entry support, and offline PWA coverage.

## Remove a behavior

1. Delete its file from `content/etiquettes/`.
2. Run the automated checks or open a pull request.

The behavior disappears from the catalog and every language route. Related
cards pointing to it are cleaned up automatically. If people may already have
shared its URL, merge it into another behavior instead so the old link remains
useful.

## Merge behaviors

1. Choose the Markdown file that will remain.
2. Combine and polish all three translations in that surviving file.
3. Add every removed behavior's `slug` to the survivor's comma-separated
   `aliases` line.
4. Delete the Markdown files for the removed behaviors.
5. Run the automated checks or open a pull request.

For example, a survivor may contain:

```yaml
slug: dont-feed-trolls
aliases: do-not-feed-the-trolls, ignore-online-provocation
```

The active catalog then shows only `dont-feed-trolls`. Old shared links for the
two aliases still open that behavior in all three languages, use its canonical
metadata, work offline, and preserve QR links. Existing `related` metadata that
uses an alias is redirected to the survivor automatically.

## Rename a behavior safely

A published slug is normally permanent. When a rename is truly necessary,
change `slug`, add the previous slug to `aliases`, and rename the Markdown file
for clarity. No application code changes are required.

Automated checks reject duplicate or malformed slugs and aliases, aliases that
conflict with active behaviors, incomplete language sections, and invalid
metadata before deployment.
