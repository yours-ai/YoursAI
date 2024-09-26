import { PromptTemplate } from "@/domain/chatGenerate/models";

export const needAPIKeySetup = async (_promptTemplate: PromptTemplate) => {
  // TODO: check if cannot proxied.
  return false;
};
