import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { gzipSync } from "node:zlib";

const assetsRoot = path.resolve("dist/assets");
const files = await readdir(assetsRoot);
const budgets = {
  js: { gzip: 120 * 1024, raw: 400 * 1024 },
  css: { gzip: 12 * 1024, raw: 50 * 1024 },
};

for (const extension of ["js", "css"]) {
  const matching = files.filter((file) => file.endsWith(`.${extension}`));
  const buffers = await Promise.all(
    matching.map((file) => readFile(path.join(assetsRoot, file))),
  );
  const raw = buffers.reduce((total, buffer) => total + buffer.byteLength, 0);
  const gzip = buffers.reduce(
    (total, buffer) => total + gzipSync(buffer).byteLength,
    0,
  );
  const budget = budgets[extension];

  if (raw > budget.raw || gzip > budget.gzip) {
    throw new Error(
      `${extension.toUpperCase()} exceeds the MVP budget: ${raw} raw / ${gzip} gzip bytes.`,
    );
  }

  console.log(
    `${extension.toUpperCase()}: ${(raw / 1024).toFixed(1)} KiB raw, ${(gzip / 1024).toFixed(1)} KiB gzip.`,
  );
}
