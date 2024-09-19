import { PromptTemplate } from "@/domain/chat/models.ts";

export const needAPIKeySetup = async (_promptTemplate: PromptTemplate) => {
  // TODO: check if cannot proxied.
  return false;
};
