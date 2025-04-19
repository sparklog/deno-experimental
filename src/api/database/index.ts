// 示例：Deno KV 读取用户信息 API
// 参考 https://docs.deno.com/deploy/kv/manual/

// import { openKv } from "@deno/kv";
import { KvUser } from "../../lib/types";
import { openKvDev } from "../../lib/kv";


/**
 * 读取 KV 数据库中的用户信息（email 和 password）
 * @returns {Promise<KvUser|null>} 用户信息对象或 null
 */
export async function getKvUser(): Promise<KvUser | null> {
  "use server";
  // 打开 KV 数据库
  // const kv = await openKv("https://api.deno.com/databases/7f9aac9f-cce2-4148-9cd5-1d30bcd0a1d2/connect");
  const kv = await openKvDev();
  // 读取 email 和 password
  const [emailRes, passwordRes] = await Promise.all([
    kv.get(["email"]),
    kv.get(["password"]),
  ]);
  if (!emailRes.value || !passwordRes.value) return null;
  return {
    email: emailRes.value as string,
    password: passwordRes.value as string,
  };
}
