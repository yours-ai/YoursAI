import { z } from "zod";
import {
  blobSchema,
  modelSchema,
  ModelSchemaDto,
} from "@/contrib/zod/schemas.ts";
import { llmChatSchema } from "@/domain/chatData/models.ts";

export const characterPromptSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string(),
  name: z.string(),
  personality: z.string().min(1),
  exampleChats: z.array(z.array(llmChatSchema)),
});

export const characterSchema = characterPromptSchema.merge(modelSchema).extend({
  profilePic: blobSchema,
  backgroundPic: blobSchema.optional(),
  statusMessage: z.string(),
  metadata: z.object({
    creator: z.string(),
    description: z.string(),
  }),
});

export const sessionSchema = modelSchema.extend({
  characterId: z.string().uuid(),
});

export type Character = z.infer<typeof characterSchema>;
export type CharacterDto = ModelSchemaDto<Character>;
export type Session = z.infer<typeof sessionSchema>;
