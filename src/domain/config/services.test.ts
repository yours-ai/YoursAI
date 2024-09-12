import { expect, test } from "vitest";
import { getTestDb } from "@/domain/utils/testDb.ts";
import { getGlobalConfig } from "@/domain/config/services.ts";
import { globalConfigSchema } from "@/domain/config/models.ts";

const { getDbInstance } = getTestDb();

test("get global config success", async () => {
  const db = getDbInstance();
  const globalConfig = await getGlobalConfig(db);

  expect(globalConfigSchema.parse(globalConfig)).toBeTruthy();
  expect(await db.globalConfigs.count()).toBe(1);
  expect(globalConfig.theme.type).toBe("bundled");
});
