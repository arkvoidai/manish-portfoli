import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Build for Vercel using Nitro's Build Output API.
  // Output MUST go to .vercel/output (default for Nitro's vercel preset)
  // not dist/, otherwise Vercel serves a 404.
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      publicDir: ".vercel/output/static",
      serverDir: ".vercel/output/functions/__nitro.func",
    },
  },
});
