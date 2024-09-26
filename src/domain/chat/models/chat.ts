import { z } from "zod";
import { modelSchema } from "@/contrib/zod/schemas.ts";

const roleSchema = z.enum(["user", "assistant", "system"]);

export const llmChatSchema = modelSchema.extend({
  role: roleSchema,
  sessionPk: z.string().uuid(),
  content: z.object({}),
});

export const chatSchema = modelSchema.extend({
  role: roleSchema,
  sessionPk: z.string().uuid(),
  content: z.object({}),
  llmChatPk: z.string().uuid().optional(),
});

export type LLMChat = z.infer<typeof llmChatSchema>;
export type Chat = z.infer<typeof chatSchema>;
