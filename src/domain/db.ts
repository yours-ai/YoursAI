import Dexie, { type EntityTable } from "dexie";
import { type PromptTemplate } from "@/domain/chat/models.ts";
import { populate as chatPopulate } from "@/domain/chat/populate.ts";

export type Db = Dexie & {
  promptTemplates: EntityTable<PromptTemplate, "uuid">;
};

export const getDb = () => {
  const db = new Dexie("Database") as Db;

  db.version(1).stores({
    promptTemplates: "uuid",
  });

  db.on("populate", async (tx) => {
    await Promise.all([chatPopulate(tx)]);
  });

  return db;
};
