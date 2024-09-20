import { z } from "zod";
import { modelSchema } from "@/contrib/zod/schemas.ts";

export const characterSchema = modelSchema.extend({});

export const sessionSchema = modelSchema.extend({
  characterId: z.string().uuid(),
});

export type Character = z.infer<typeof characterSchema>;
export type Session = z.infer<typeof sessionSchema>;
