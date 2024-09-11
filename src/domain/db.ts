import Dexie, { type EntityTable } from "dexie";
import {
  initialPromptTemplates,
  type PromptTemplate,
} from "@/domain/chat/models.ts";

export type Db = Dexie & {
  promptTemplates: EntityTable<PromptTemplate, "uuid">;
};

export const getDb = () => {
  const db = new Dexie("Database") as Db;

  db.version(1).stores({
    promptTemplates: "uuid",
  });

  db.on("populate", async () => {
    await db.promptTemplates.bulkPut(initialPromptTemplates);
  });

  return db;
};
