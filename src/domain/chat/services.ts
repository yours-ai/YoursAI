import { PromptTemplate } from "@/domain/chat/models";

export const needAPIKeySetup = async (_promptTemplate: PromptTemplate) => {
  // TODO: check if cannot proxied.
  return false;
};
