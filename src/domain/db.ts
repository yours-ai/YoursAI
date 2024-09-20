import Dexie, { type EntityTable } from "dexie";
import { type PromptTemplate } from "@/domain/chat/models.ts";
import { chatPopulate } from "@/domain/chat/populate.ts";
import { configPopulate } from "@/domain/config/populate.ts";
import { GlobalConfig } from "@/domain/config/models.ts";

export type Db = Dexie & {
  promptTemplates: EntityTable<PromptTemplate, "uuid">;
  globalConfigs: EntityTable<GlobalConfig, "id">;
};

export const getDb = () => {
  const db = new Dexie("Database") as Db;

  db.version(1).stores({
    promptTemplates: "uuid",
    globalConfigs: "id",
  });

  db.on("populate", async (_tx) => {
    // MARK: do not use transaction to prevent transaction inactive error
    await Promise.all([chatPopulate(db), configPopulate(db)]);
  });

  return db;
};
