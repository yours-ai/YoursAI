import Dexie, { type EntityTable } from "dexie";
import { type PromptTemplate } from "@/domain/chat/models.ts";
import { chatPopulate } from "@/domain/chat/populate.ts";
import { configPopulate } from "@/domain/config/populate.ts";
import { GlobalConfig } from "@/domain/config/models.ts";

export type Db = Dexie & {
  promptTemplates: EntityTable<PromptTemplate, "uuid">;
  globalConfigs: EntityTable<GlobalConfig>;
};

export const getDb = () => {
  const db = new Dexie("Database") as Db;

  db.version(1).stores({
    promptTemplates: "uuid",
    globalConfigs: "++",
  });

  db.on("populate", async (tx) => {
    await Promise.all([chatPopulate(tx), configPopulate(tx)]);
  });

  return db;
};
