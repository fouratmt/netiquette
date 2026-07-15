import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vitest/config";

function normalizeBasePath(value: string | undefined) {
  if (!value || value === "/") return "/";

  return `/${value.replace(/^\/+|\/+$/g, "")}/`;
}

export default defineConfig({
  base: normalizeBasePath(process.env.BASE_PATH),
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "script",
      manifest: {
        id: ".",
        name: "Netiquette — Digital courtesy guide",
        short_name: "Netiquette",
        description:
          "Kind, practical, and shareable guidance for everyday digital interactions.",
        lang: "en",
        start_url: ".",
        scope: ".",
        display: "standalone",
        orientation: "any",
        background_color: "#f7f3eb",
        theme_color: "#184e43",
        categories: ["education", "lifestyle", "social"],
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        shortcuts: [
          {
            name: "Browse etiquette",
            short_name: "Browse",
            description: "Open the complete etiquette catalog",
            url: "en/etiquette",
            icons: [{ src: "pwa-192x192.png", sizes: "192x192" }],
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**/*.{js,css,html,svg,png,webmanifest}"],
        navigateFallback: "index.html",
      },
    }),
  ],
  ssgOptions: {
    dirStyle: "nested",
    formatting: "none",
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
  },
});
