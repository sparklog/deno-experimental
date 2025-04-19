/**
 * Helper to open Deno KV in a cross-environment safe way.
 * - In Deno Deploy or Deno CLI: uses global Deno.openKv()
 * - In Node.js dev: dynamically imports @deno/kv with connection string
 *
 * This ensures @deno/kv is never bundled or required in production (Deno Deploy).
 */
export async function openKvDev() {
  if (typeof Deno !== "undefined" && typeof Deno.openKv === "function") {
    // Deno Deploy or Deno runtime
    return Deno.openKv();
  } else {
    // Node.js dev: dynamic import with connection string
    const { openKv } = await import("@deno/kv");
    return openKv("https://api.deno.com/databases/7f9aac9f-cce2-4148-9cd5-1d30bcd0a1d2/connect");
  }
}
