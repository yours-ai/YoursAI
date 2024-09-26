import { z } from "zod";
import { Persona } from "@/domain/config/models.ts";

export interface Context {
  persona: Persona;
}

export const handlebarsTemplateSchema = z.string().refine(
  (_data) => {
    return false;
  },
  {
    message: "Invalid JSON schema.",
  },
);

export const messageItemSchema = z.object({
  type: z.enum(["user", "assistant"]),
  template: z.string(),
});

export type MessageItem = z.infer<typeof messageItemSchema>;
