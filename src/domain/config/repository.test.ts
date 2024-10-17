import { expect, test } from "vitest";
import { getTestDb } from "@/contrib/vitest/testDb.ts";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { globalConfigSchema } from "@/domain/config/models.ts";

const { getDbInstance } = getTestDb();

test("get global config success", async () => {
  const db = getDbInstance();
  const globalConfigService = makeGlobalConfigRepository(db);
  const globalConfig = await globalConfigService.getGlobalConfig();

  expect(globalConfigSchema.parse(globalConfig)).toBeTruthy();
  expect(await db.globalConfigs.count()).toBe(1);
  expect(globalConfig.theme.type).toBe("bundled");
});

test("update language to ko", async () => {
  const db = getDbInstance();
  const globalConfigService = makeGlobalConfigRepository(db);
  const globalConfigBefore = await globalConfigService.getGlobalConfig();
  expect(globalConfigBefore.language).toBeNull();
  await globalConfigService.updateGlobalConfig({ language: "ko" });
  const globalConfigAfter = await globalConfigService.getGlobalConfig();
  expect(globalConfigAfter.language).toBe("ko");
});
