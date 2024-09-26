import { z } from "zod";
import { translatableStringSchema } from "@/locales/models.ts";
import {
  flatJsonSchemaSchema,
  modelSchema,
  ModelSchemaDto,
  translatableBlobSchema,
} from "@/contrib/zod/schemas.ts";
import { messageItemSchema } from "./messageItem.ts";

export const optionalParamsSchema = z.object({
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

export const functionSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  parameters: flatJsonSchemaSchema,
});

export const promptTemplateSchema = modelSchema.extend({
  metadata: metadataSchema,
  model: z.string().min(1),
  maxContextTokens: z.number().positive(),
  function: functionSchema,
  messageItems: z.array(messageItemSchema),
  optionalParams: optionalParamsSchema.optional(),
  isInitial: z.boolean().optional(),
});

export type LlmSettings = z.infer<typeof optionalParamsSchema>;
export type PromptTemplate = z.infer<typeof promptTemplateSchema>;
export type PromptTemplateDto = ModelSchemaDto<PromptTemplate>;
