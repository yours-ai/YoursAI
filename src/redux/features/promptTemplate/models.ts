export interface PromptTemplate {
  role: "assistant" | "user" | "system";
  content: string;
}
