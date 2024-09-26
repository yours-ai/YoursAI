import { z } from "zod";
import {
  blobSchema,
  modelSchema,
  ModelSchemaDto,
} from "@/contrib/zod/schemas.ts";
import { chatDtoSchema } from "@/domain/chatData/models.ts";

export const characterPromptSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().optional(),
  name: z.string().optional(),
  personality: z.string().min(1),
  exampleChats: z.array(z.array(chatDtoSchema)),
});

export const characterSchema = characterPromptSchema.merge(modelSchema).extend({
  profilePic: blobSchema,
  backgroundPic: blobSchema.optional(),
  statusMessage: z.string().optional(),
  metadata: z.object({
    creator: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const sessionSchema = modelSchema.extend({
  characterId: z.string().uuid(),
});

export type CharacterPrompt = z.infer<typeof characterPromptSchema>;
export type Character = z.infer<typeof characterSchema>;
export type CharacterDto = ModelSchemaDto<Character>;
export type Session = z.infer<typeof sessionSchema>;
