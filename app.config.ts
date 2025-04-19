import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    server: {
        rollupConfig: {
          external: ["node:async_hooks"],
        },
        experimental: {
          asyncContext: true,
        },
      },
});
