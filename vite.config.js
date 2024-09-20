import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  test: {
    setupFiles: "./src/contrib/vitest/setup.ts",
  },
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "generateSW",
      manifest: {
        name: "YoursAI",
        short_name: "YoursAI",
        description:
          "Simple yet fully customizable character role-playing frontend.",
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "script",
            handler: "CacheFirst",
            options: {
              cacheName: "js-cache",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
              },
            },
          },
        ],
      },
    }),
  ],
});
