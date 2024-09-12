import { GlobalConfig } from "./models.ts";
import { Transaction } from "dexie";

export const initialGlobalConfig: GlobalConfig = {
  id: "oneAndOnly",
  theme: {
    type: "bundled",
    id: "theFruit",
  },
  language: null, // to initialize with the browser's language using i18next
};

export const configPopulate = async (tx: Transaction) => {
  await tx.table("globalConfigs").put(initialGlobalConfig);
};
