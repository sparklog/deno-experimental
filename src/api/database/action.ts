import { action } from "@solidjs/router";
// import { openKvDev } from "../../lib/kv";

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
    const kv = await Deno.openKv();
    await kv.set(["email"], formData.get("email"));
    await kv.set(["password"], formData.get("password"));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
});
