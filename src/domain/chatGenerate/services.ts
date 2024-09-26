import { PromptTemplate } from "./models";

export const needAPIKeySetup = async (_promptTemplate: PromptTemplate) => {
  // TODO: check if cannot proxied.
  return false;
};

// export const generateNextLLMChat = async (
//   promptTemplate: PromptTemplate,
//   llmChats: LLMChat[],
// ): LLMChat => {
//   return {};
// };
