import { z } from "zod";
import { modelSchema } from "@/contrib/zod/schemas.ts";

const roleSchema = z.enum(["user", "assistant", "system"]);
const contentValueSchema = z.union([z.string(), z.number(), z.boolean()]);

export const chatDtoSchema = z.object({
  role: roleSchema,
  content: z.record(z.string(), contentValueSchema),
});

export const chatSchema = chatDtoSchema.merge(modelSchema).extend({
  sessionPk: z.string().uuid(),
});

export type ChatDto = z.infer<typeof chatDtoSchema>;
export type Chat = z.infer<typeof chatSchema>;
