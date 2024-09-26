import { z } from "zod";
import { personaSchema } from "@/domain/config/models.ts";
import { characterPromptSchema } from "@/domain/character/models.ts";
import { compile } from "handlebars";

export const contextDtoSchema = z.object({
  persona: personaSchema,
  character: characterPromptSchema,
});

export type ContextDto = z.infer<typeof contextDtoSchema>;
export interface Context extends ContextDto {
  user: string;
  char: string;
}

export const mockContext: Context = {
  user: "John",
  char: "Sena",
  persona: {
    firstName: "John",
    lastName: "Doe",
    description: "A regular guy.",
  },
  character: {
    firstName: "Sena",
    lastName: "Doe",
    personality: "Friendly",
    exampleChats: [
      [
        {
          role: "user",
          content: {
            message: "Hello, how are you?",
          },
        },
        {
          role: "assistant",
          content: {
            message: "I'm doing well, thank you.",
          },
        },
      ],
    ],
  },
};

export const handlebarsTemplateSchema = z.string().superRefine((val, ctx) => {
  try {
    compile(val, { strict: true })(mockContext);
    return;
  } catch (e) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: (e as Error).message,
    });
    return;
  }
});

export const flatMessageItem = z.object({
  type: z.literal("flat"),
  payload: z.object({
    role: z.enum(["user", "assistant", "system"]),
    template: handlebarsTemplateSchema,
  }),
});

export const chatMessageItem = z.object({
  type: z.literal("chat"),
  payload: z.object({
    from: z.number(),
    to: z.number(),
  }),
});

export const messageItemSchema = z.discriminatedUnion("type", [
  flatMessageItem,
  chatMessageItem,
]);

export type ChatMessageItem = z.infer<typeof chatMessageItem>;
export type MessageItem = z.infer<typeof messageItemSchema>;
