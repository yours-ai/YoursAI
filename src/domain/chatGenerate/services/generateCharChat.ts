import { Chat } from "@/domain/chatData/models.ts";
import { Context } from "@/domain/chatGenerate/models";
import { PromptTemplate } from "../models";

export const generateCharChat = async (
  _promptTemplate: PromptTemplate,
  _chats: Chat[],
  _context: Context,
) => {
  // const _openai = new OpenAI({
  //   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  // });
  throw new Error("Not implemented");
  // const _response = await openai.chat.completions.create({
  //   model: promptTemplate.model,
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "You are a helpful assistant to generate character response. the character name is sena, she is 20 years old japanese girl.",
  //     },
  //     { role: "user", content: "Hi Sena~" },
  //   ],
  //   tools: [
  //     {
  //       type: "function",
  //       function: promptTemplate.function,
  //     },
  //   ],
  //   tool_choice: {
  //     type: "function",
  //     function: {
  //       name: promptTemplate.function.name,
  //     },
  //   },
  // });
};
