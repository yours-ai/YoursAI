import "fake-indexeddb/auto";
import { afterEach, beforeEach } from "vitest";
import { Db, getDb } from "@/domain/db.ts";
import { GlobalConfigId } from "@/domain/config/models.ts";

export const getTestDb = (): { getDbInstance: () => Db } => {
  let db: Db;

  beforeEach(async () => {
    db = getDb();
    const globalConfig = await db.globalConfigs.get(GlobalConfigId);
    await db.globalConfigs.update(GlobalConfigId, {
      conversationConfig: {
        ...globalConfig!.conversationConfig,
        persona: {
          ...globalConfig!.conversationConfig.persona,
          firstName: "찬욱",
        },
      },
    });
  });

  afterEach(async () => {
    await db.delete();
  });

  return {
    getDbInstance: () => db,
  };
};
