import { copyFile } from "node:fs/promises";
import path from "node:path";

const distRoot = path.resolve("dist");

// GitHub Pages serves this document for unknown paths. Once hydrated, Vue
// Router reads the original URL and renders the localized branded not-found view.
await copyFile(path.join(distRoot, "index.html"), path.join(distRoot, "404.html"));

console.log("Generated dist/404.html for GitHub Pages fallback routes.");
