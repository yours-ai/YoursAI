import { GlobalConfig } from "./models.ts";
import { Transaction } from "dexie";
import { initialPromptTemplates } from "@/domain/chat/populate.ts";

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
    promptTemplateId: initialPromptTemplates[0].uuid,
    persona: {
      firstName: "",
      lastName: "",
      description: "",
    },
  },
  hasDoneSetup: false,
};

export const configPopulate = async (tx: Transaction) => {
  await tx.table("globalConfigs").put(initialGlobalConfig);
};
