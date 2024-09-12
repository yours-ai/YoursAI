import { GlobalConfig } from "./models.ts";
import { Transaction } from "dexie";

export const initialGlobalConfig: GlobalConfig = {
  theme: {
    type: "bundled",
    id: "theFruit",
  },
};

export const configPopulate = async (tx: Transaction) => {
  await tx.table("globalConfigs").put(initialGlobalConfig);
};
