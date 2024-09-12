import { Db } from "@/domain/db.ts";
import { GlobalConfig, GlobalConfigId } from "@/domain/config/models.ts";

export const makeGlobalConfigService = (db: Db) => ({
  getGlobalConfig: async (): Promise<GlobalConfig> => {
    const globalConfigs = await db.globalConfigs.toArray();
    return globalConfigs[0];
  },
  updateGlobalConfig: async (update: Partial<GlobalConfig>) => {
    await db.globalConfigs.update(GlobalConfigId, update);
  },
});
