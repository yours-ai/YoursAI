import { z } from "zod";
import { translatableStringSchema } from "@/locales/models.ts";
import { translatableBlobSchema } from "@/contrib/zod/schemas.ts";

export const promptItemSchema = z.object({
  type: z.enum(["user", "assistant"]),
  content: z.string(),
});

export const llmSettingsSchema = z.object({
  model: z.string(),
  frequency_penalty: z.number().min(-2).max(2).optional(),
  presence_penalty: z.number().min(-2).max(2).optional(),
  max_tokens: z.number().positive().optional(),
  temperature: z.number().min(0).max(2).optional(),
  top_p: z.number().min(0).max(1).optional(),
  seed: z.number().optional(),
  logit_bias_raw: z.object({}).optional(), // keys should be tokenized using the tokenizer
});

export const metadataSchema = z.object({
  name: translatableStringSchema,
  creator: z.string().optional(),
  description: translatableStringSchema.optional(),
  descriptionImg: translatableBlobSchema.optional(),
});

export const promptConfigSchema = z.object({
  llmParams: llmSettingsSchema,
  maxContextTokens: z.number().positive(),
  messageItems: z.array(promptItemSchema),
});

export const promptTemplateSchema = z.object({
  uuid: z.string(),
  metadata: metadataSchema,
  promptConfig: promptConfigSchema,
});

export type PromptItem = z.infer<typeof promptItemSchema>;
export type LlmSettings = z.infer<typeof llmSettingsSchema>;
export type PromptTemplate = z.infer<typeof promptTemplateSchema>;
