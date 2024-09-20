import Dexie, { type EntityTable } from "dexie";
import { type PromptTemplate } from "@/domain/chat/models";
import { chatPopulate } from "@/domain/chat/populate.ts";
import { configPopulate } from "@/domain/config/populate.ts";
import { GlobalConfig } from "@/domain/config/models.ts";
import { Character, Session } from "@/domain/character/models.ts";
import { Chat, LlmChat } from "@/domain/chat/models/chat.ts";

export type Db = Dexie & {
  promptTemplates: EntityTable<PromptTemplate, "pk">;
  globalConfigs: EntityTable<GlobalConfig, "pk">;
  characters: EntityTable<Character, "pk">;
  sessions: EntityTable<Session, "pk">;
  chats: EntityTable<Chat, "pk">;
  llmChats: EntityTable<LlmChat, "pk">;
};

export const getDb = () => {
  const db = new Dexie("Database") as Db;

  db.version(1).stores({
    globalConfigs: "pk",
    promptTemplates: "pk,created",
    characters: "pk,created",
    sessions: "pk,created",
    chats: "pk,created,sessionPk",
    llmChats: "pk,created,sessionPk",
  });

  db.on("populate", async (_tx) => {
    // MARK: do not use transaction to prevent transaction inactive error
    await Promise.all([chatPopulate(db), configPopulate(db)]);
  });

  return db;
};
