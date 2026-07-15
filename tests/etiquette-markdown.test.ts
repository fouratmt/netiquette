import { describe, expect, it } from "vitest";
import {
  loadEtiquettes,
  parseEtiquetteMarkdown,
} from "../src/content/etiquettes";

const completeDocument = `---
slug: example-etiquette
category: social-media
platforms: general, facebook
severity: 2
related: none
aliases: old-example-etiquette
order: 99
---

# English
## Title / Titre / العنوان
Example title
## Short advice / Conseil court / النصيحة المختصرة
Example advice
## Situation / Situation / الموقف
Example situation
## Why it matters / Pourquoi c’est important / علاش مهم
Example reason
## What to do / Que faire / شنوة تعمل
Example alternative
## Search words / Mots de recherche / كلمات البحث
example, etiquette, search

# Français
## Title / Titre / العنوان
Titre exemple
## Short advice / Conseil court / النصيحة المختصرة
Conseil exemple
## Situation / Situation / الموقف
Situation exemple
## Why it matters / Pourquoi c’est important / علاش مهم
Raison exemple
## What to do / Que faire / شنوة تعمل
Alternative exemple
## Search words / Mots de recherche / كلمات البحث
exemple, règle, recherche

# تونسي
## Title / Titre / العنوان
عنوان مثال
## Short advice / Conseil court / النصيحة المختصرة
نصيحة مثال
## Situation / Situation / الموقف
موقف مثال
## Why it matters / Pourquoi c’est important / علاش مهم
سبب مثال
## What to do / Que faire / شنوة تعمل
بديل مثال
## Search words / Mots de recherche / كلمات البحث
مثال, قاعدة, بحث
`;

describe("etiquette Markdown", () => {
  it("turns the editor template into the application content model", () => {
    const { entry, order } = parseEtiquetteMarkdown(
      completeDocument,
      "example-etiquette.md",
    );

    expect(order).toBe(99);
    expect(entry.slug).toBe("example-etiquette");
    expect(entry.platforms).toEqual(["general", "facebook"]);
    expect(entry.related).toEqual([]);
    expect(entry.aliases).toEqual(["old-example-etiquette"]);
    expect(entry.translations.fr.title).toBe("Titre exemple");
    expect(entry.translations["ar-TN"].tags).toEqual(["مثال", "قاعدة", "بحث"]);
  });

  it("gives editors a useful filename and missing-section error", () => {
    expect(() =>
      parseEtiquetteMarkdown(
        completeDocument.replace("# تونسي", "# Arabic"),
        "broken-etiquette.md",
      ),
    ).toThrow(
      'Invalid etiquette Markdown in broken-etiquette.md: unknown language heading "Arabic".',
    );
  });

  it("remaps merged relationships and drops deleted relationships", () => {
    const sourceDocument = completeDocument
      .replace("slug: example-etiquette", "slug: source-etiquette")
      .replace("aliases: old-example-etiquette", "aliases: none")
      .replace("related: none", "related: old-example-etiquette, deleted-etiquette")
      .replace("order: 99", "order: 100");
    const entries = loadEtiquettes({
      "example-etiquette.md": completeDocument,
      "source-etiquette.md": sourceDocument,
    });

    expect(entries.find((entry) => entry.slug === "source-etiquette")?.related).toEqual([
      "example-etiquette",
    ]);
  });

  it("allows editors to reuse an order number when adding an entry", () => {
    const secondDocument = completeDocument
      .replace("slug: example-etiquette", "slug: second-etiquette")
      .replace("aliases: old-example-etiquette", "aliases: none");
    const entries = loadEtiquettes({
      "example-etiquette.md": completeDocument,
      "second-etiquette.md": secondDocument,
    });

    expect(entries.map((entry) => entry.slug)).toEqual([
      "example-etiquette",
      "second-etiquette",
    ]);
  });

  it("rejects aliases that collide with an active etiquette", () => {
    const conflictingDocument = completeDocument
      .replace("slug: example-etiquette", "slug: old-example-etiquette")
      .replace("aliases: old-example-etiquette", "aliases: none");

    expect(() =>
      loadEtiquettes({
        "example-etiquette.md": completeDocument,
        "old-example-etiquette.md": conflictingDocument,
      }),
    ).toThrow(
      'Etiquette alias "old-example-etiquette" conflicts with an active etiquette slug.',
    );
  });
});
