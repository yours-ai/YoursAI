import { array, InferType, number, object, string } from "yup";

export const promptItemSchema = object({
  type: string().oneOf(["user", "assistant"]).required(),
  content: string().required(),
});

export const llmSettingsSchema = object({
  model: string().required(),
  frequency_penalty: number().min(-2).max(2).optional(),
  presence_penalty: number().min(-2).max(2).optional(),
  max_tokens: number().positive().optional(),
  temperature: number().min(0).max(2).optional(),
  top_p: number().min(0).max(1).optional(),
  seed: number().optional(),
  logit_bias_raw: object().optional(), // keys should be tokenized using the tokenizer
});

export const metadataSchema = object({
  name: string().required(), // TODO: make it translatable
  creator: string().optional(),
  creatorDescription: string().optional(), // TODO: make it translatable
});

export const promptConfigSchema = object({
  llmParams: llmSettingsSchema.required(),
  maxContextTokens: number().positive().required(),
  messageItems: array().of(promptItemSchema).required(),
});

export const promptTemplateSchema = object({
  uuid: string().required(),
  metadata: metadataSchema.required(),
  promptConfig: promptConfigSchema.required(),
});

export type PromptItem = InferType<typeof promptItemSchema>;
export type LlmSettings = InferType<typeof llmSettingsSchema>;
export type PromptTemplate = InferType<typeof promptTemplateSchema>;

export const initialPromptTemplates: PromptTemplate[] = [
  {
    uuid: "69a20bb6-b091-44a4-85cd-f52f0b19f531",
    metadata: {
      name: "밸런스",
      creator: "narayo9",
      creatorDescription:
        "당신의 대화에 맞게 캐릭터가 적절히 대화 길이를 조절합니다. 종종 전지적 시점에서 이야기하기도 합니다.",
    },
    promptConfig: {
      llmParams: {
        model: "gpt-4o",
      },
      maxContextTokens: 128_000,
      messageItems: [],
    },
  },
  {
    uuid: "d5ec1f11-1f44-4ca8-a52b-b7a1eaf6d98c",
    metadata: {
      name: "소설형",
      creator: "narayo9",
      creatorDescription:
        "당신이 짧게 이야기해도 캐릭터는 길게 이야기합니다. 자주 전지적 시점에서 이야기합니다.",
    },
    promptConfig: {
      llmParams: {
        model: "gpt-4o",
      },
      maxContextTokens: 128_000,
      messageItems: [],
    },
  },
  {
    uuid: "2a418588-d1f1-4bd3-b52d-25d78564ee51",
    metadata: {
      name: "현실형",
      creator: "narayo9",
      creatorDescription:
        "현실의 대화와 비슷합니다. 캐릭터의 속마음을 알기는 어렵습니다.",
    },
    promptConfig: {
      llmParams: {
        model: "gpt-4o",
      },
      maxContextTokens: 128_000,
      messageItems: [],
    },
  },
];
