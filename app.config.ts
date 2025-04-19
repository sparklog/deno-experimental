import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    server: {
        preset: "deno_deploy",
        rollupConfig: {
          external: ["node:async_hooks"],
        },
        experimental: {
          asyncContext: true,
        },
      },
});
