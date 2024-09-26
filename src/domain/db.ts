import Dexie, { type EntityTable } from "dexie";
import { configPopulate } from "@/domain/config/populate.ts";
import { GlobalConfig } from "@/domain/config/models.ts";
import { Character, Session } from "@/domain/character/models.ts";
import { characterPopulate } from "@/domain/character/populate.ts";
import { PromptTemplate } from "@/domain/chatGenerate/models";
import { Chat } from "@/domain/chatData/models.ts";
import { chatGeneratePopulate } from "@/domain/chatGenerate/populate.ts";

export type Db = Dexie & {
  promptTemplates: EntityTable<PromptTemplate, "pk">;
  globalConfigs: EntityTable<GlobalConfig, "pk">;
  characters: EntityTable<Character, "pk">;
  sessions: EntityTable<Session, "pk">;
  chats: EntityTable<Chat, "pk">;
};

export const getDb = () => {
  const db = new Dexie("Database") as Db;

  db.version(1).stores({
    globalConfigs: "pk",
    promptTemplates: "pk,created",
    characters: "pk,created",
    sessions: "pk,created",
    chats: "pk,created,sessionPk",
  });

  db.on("populate", async (_tx) => {
    // MARK: do not use transaction to prevent transaction inactive error
    await Promise.all([
      chatGeneratePopulate(db),
      configPopulate(db),
      characterPopulate(db),
    ]);
  });

  return db;
};
