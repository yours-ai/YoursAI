import { expect, test } from "vitest";
import OpenAI from "openai";
import { initialPromptTemplates } from "@/domain/chat/models.ts";
import { getTestDb } from "@/domain/testHelpers.ts";

const { getDbInstance } = getTestDb();

test("initial loading from db success", async () => {
  const db = getDbInstance();
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const template = await db.promptTemplates.get(initialPromptTemplates[0].uuid);
  if (!template) {
    throw new Error("Template not found");
  }
  const completion = await openai.chat.completions.create({
    ...template.promptConfig.llmParams,
    messages: [{ role: "user", content: "Say this is a test" }],
  });

  expect(completion.choices[0].message.content).toBeTruthy();

  db.promptTemplates.delete(initialPromptTemplates[0].uuid);
  const num = await db.promptTemplates.count();
  expect(num).toBe(2);
});

test("twice only 3", async () => {
  const db = getDbInstance();
  const num = await db.promptTemplates.count();
  expect(num).toBe(3);
});
