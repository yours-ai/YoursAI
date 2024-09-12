import { Db } from "@/domain/db.ts";
import { GlobalConfig, GlobalConfigId } from "@/domain/config/models.ts";

export const getGlobalConfig = async (db: Db): Promise<GlobalConfig> => {
  const globalConfigs = await db.globalConfigs.toArray();
  return globalConfigs[0];
};

export const updateGlobalConfig = async (
  db: Db,
  update: Partial<GlobalConfig>,
) => {
  await db.globalConfigs.update(GlobalConfigId, update);
};
