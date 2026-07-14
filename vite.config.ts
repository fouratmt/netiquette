import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

function normalizeBasePath(value: string | undefined) {
  if (!value || value === "/") return "/";

  return `/${value.replace(/^\/+|\/+$/g, "")}/`;
}

export default defineConfig({
  base: normalizeBasePath(process.env.BASE_PATH),
  plugins: [vue()],
  ssgOptions: {
    dirStyle: "nested",
    formatting: "none",
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
  },
});
