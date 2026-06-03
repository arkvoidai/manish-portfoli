import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Build for Vercel (Nitro Build Output API). Lovable's sandbox/preview
  // is unaffected — this only changes the deploy bundle target.
  nitro: {
    preset: "vercel",
  },
});
