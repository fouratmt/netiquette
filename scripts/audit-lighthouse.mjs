import { launch } from "chrome-launcher";
import lighthouse from "lighthouse";

const url = process.env.LIGHTHOUSE_URL;
if (!url) throw new Error("LIGHTHOUSE_URL is required.");

const chrome = await launch({ chromeFlags: ["--headless", "--no-sandbox"] });

try {
  const result = await lighthouse(url, {
    logLevel: "error",
    output: "json",
    port: chrome.port,
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  });
  if (!result) throw new Error("Lighthouse did not return a report.");

  const minimums = {
    performance: 0.9,
    accessibility: 0.95,
    "best-practices": 0.9,
    seo: 0.9,
  };
  const failures = [];

  for (const [id, minimum] of Object.entries(minimums)) {
    const score = result.lhr.categories[id]?.score ?? 0;
    console.log(`${id}: ${Math.round(score * 100)}`);
    if (score < minimum) failures.push(`${id} ${Math.round(score * 100)}`);
  }

  if (failures.length) {
    throw new Error(`Lighthouse thresholds failed: ${failures.join(", ")}`);
  }
} finally {
  await chrome.kill();
}
