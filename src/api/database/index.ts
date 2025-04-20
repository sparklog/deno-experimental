// import { openKv } from "@deno/kv";
import { KvUser } from "../../lib/types.ts";


/**
 * 读取 KV 数据库中的用户信息（email 和 password）
 * @returns {Promise<KvUser|null>} 用户信息对象或 null
 */
export async function getKvUser(): Promise<KvUser | null> {
  "use server";
  // 打开 KV 数据库
  const kv = await Deno.openKv();
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
