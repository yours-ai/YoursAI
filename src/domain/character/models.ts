import { z } from "zod";

export const characterSchema = z.object({
  pk: z.number(),
  creator: z.string(),
  bio: z.string(),
  name: z.string(),
  slug: z.string(),
  age: z.number(),
  description: z.string(),
  image: z.string(),
  bgImage: z.string(),
});

export type Character = z.infer<typeof characterSchema>;
