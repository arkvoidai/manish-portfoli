import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Nitro writes Vercel Build Output API format into dist/.
  // vercel.json moves it to .vercel/output for Vercel to pick up.
  nitro: {
    preset: "vercel",
  },
});
