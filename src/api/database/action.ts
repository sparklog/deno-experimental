import { openKv } from "@deno/kv";
import type { KvUser } from "../../lib/types";
import { action } from "@solidjs/router";

/**
 * 向 KV 数据库添加/更新用户信息（email 和 password）
 * @param {FormData} formData 表单数据对象
 * @returns {Promise<boolean>} 是否写入成功
 */
export const setKvUser = action(async function (
  formData: FormData
): Promise<boolean> {
  "use server";
  try {
    // prod mode, do not use access token
    const kv = await openKv();
    // dev mode, use access token
    // const kv = await openKv("https://api.deno.com/databases/7f9aac9f-cce2-4148-9cd5-1d30bcd0a1d2/connect");

    console.log(kv);
    await kv.set(["email"], formData.get("email"));
    await kv.set(["password"], formData.get("password"));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
});
