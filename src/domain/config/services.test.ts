import { expect, test } from "vitest";
import { getTestDb } from "@/domain/utils/testDb.ts";
import {
  getGlobalConfig,
  updateGlobalConfig,
} from "@/domain/config/services.ts";
import { globalConfigSchema } from "@/domain/config/models.ts";

const { getDbInstance } = getTestDb();

test("get global config success", async () => {
  const db = getDbInstance();
  const globalConfig = await getGlobalConfig(db);

  expect(globalConfigSchema.parse(globalConfig)).toBeTruthy();
  expect(await db.globalConfigs.count()).toBe(1);
  expect(globalConfig.theme.type).toBe("bundled");
});

test("update language to ko", async () => {
  const db = getDbInstance();
  const globalConfigBefore = await getGlobalConfig(db);
  expect(globalConfigBefore.language).toBeNull();
  await updateGlobalConfig(db, { language: "ko" });
  const globalConfigAfter = await getGlobalConfig(db);
  expect(globalConfigAfter.language).toBe("ko");
});
