import { Db } from "@/domain/db.ts";
import { GlobalConfig, GlobalConfigId } from "@/domain/config/models.ts";
import { needAPIKeySetup } from "@/domain/chat/services.ts";

export const makeGlobalConfigRepository = (db: Db) => {
  const getGlobalConfig = async (): Promise<GlobalConfig> => {
    const globalConfigs = await db.globalConfigs.toArray();
    return globalConfigs[0];
  };
  return {
    getGlobalConfig,
    updateGlobalConfig: async (update: Partial<GlobalConfig>) => {
      await db.globalConfigs.update(GlobalConfigId, update);
    },
    updateGlobalConversationConfig: async (
      update: Partial<GlobalConfig["conversationConfig"]>,
    ) => {
      const globalConfig = await getGlobalConfig();
      // force nested partial update
      await db.globalConfigs.update(GlobalConfigId, {
        conversationConfig: { ...globalConfig.conversationConfig, ...update },
      });
    },
    needAPIKeySetup: async () => {
      const globalConfig = await getGlobalConfig();
      const promptTemplate = await db.promptTemplates.get(
        globalConfig.conversationConfig.promptTemplateId,
      );
      return promptTemplate ? needAPIKeySetup(promptTemplate) : null;
    },
  };
};
