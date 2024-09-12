import { Db } from "@/domain/db.ts";
import { GlobalConfig } from "@/domain/config/models.ts";

export const getGlobalConfig = async (db: Db): Promise<GlobalConfig> => {
  const globalConfigs = await db.globalConfigs.toArray();
  return globalConfigs[0];
};
