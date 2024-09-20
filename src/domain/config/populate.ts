import { GlobalConfig } from "./models.ts";
import { DefaultPromptTemplateUUID } from "@/domain/chat/populate.ts";
import { Db } from "@/domain/db.ts";

export const initialGlobalConfig: GlobalConfig = {
  id: "oneAndOnly",
  theme: {
    type: "bundled",
    id: "theFruit",
  },
  language: null, // to initialize with the browser's language using i18next
  conversationConfig: {
    doTranslation: false,
    doTypingSimulation: true,
    promptTemplateId: DefaultPromptTemplateUUID,
    persona: {
      firstName: "",
      lastName: "",
      description: "",
    },
  },
  hasDoneSetup: false,
};

export const configPopulate = async (db: Db) => {
  await db.globalConfigs.put(initialGlobalConfig);
};
