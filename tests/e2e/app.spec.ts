import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const representativePages = [
  "en",
  "fr/etiquette",
  "ar-tn/etiquette",
  "en/this-page-does-not-exist",
];

for (const path of representativePages) {
  test(`${path} has no serious automated accessibility violations`, async ({
    page,
  }) => {
    await page.goto(path);
    await expect(page.locator("main")).toBeVisible();

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();

    const blocking = results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );
    expect(blocking).toEqual([]);
  });
}

test("a visitor can find, open, copy, and translate an etiquette", async ({
  browserName,
  context,
  page,
}) => {
  if (browserName === "chromium") {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  }
  await page.goto("en/etiquette");
  const firstEntry = page.locator(".entry-card").first();
  const title = (await firstEntry.getByRole("heading", { level: 3 }).innerText()).trim();
  await page.getByRole("searchbox").fill(title);
  await expect(page).toHaveURL(/\/en\/etiquette\?q=/);
  await expect(firstEntry).toBeVisible();

  await firstEntry.getByRole("link", { name: title }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(title);
  const englishPath = new URL(page.url()).pathname;
  const entrySlug = englishPath.split("/").at(-1);

  await page.getByRole("button", { name: "Copy link" }).click();
  await expect(page.getByRole("status")).toHaveText("Link copied");

  await page.getByRole("combobox", { name: "Language" }).selectOption("fr");
  await expect(page).toHaveURL(new RegExp(`/fr/etiquette/${entrySlug}$`));
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
});

test("keyboard navigation exposes the skip link and visible focus", async ({
  browserName,
  page,
}) => {
  test.skip(
    browserName === "webkit",
    "WebKit follows the host macOS Full Keyboard Access preference for links.",
  );
  await page.goto("en");
  await page.keyboard.press("Tab");

  const skipLink = page.getByRole("link", { name: "Skip to content" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toHaveCSS("opacity", "1");
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});
