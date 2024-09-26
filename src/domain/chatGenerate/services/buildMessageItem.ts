import { MessageItem } from "../models";
import { Context } from "@/domain/chatGenerate/models";
import OpenAI from "openai";
import { type ChatMessageItem } from "@/domain/chatGenerate/models/messageItem.ts";
import { compile } from "handlebars";
import ChatCompletionMessageParam = OpenAI.ChatCompletionMessageParam;

export const mergeSystemMessageItems = (
  messages: MessageItem[],
): MessageItem[] => {
  return messages.reduce((acc: MessageItem[], curr: MessageItem) => {
    // Check if current message is a flatMessageItem
    if (curr.type === "flat") {
      const lastMessage = acc[acc.length - 1];

      // If the last message is also a flatMessageItem and has the same role, merge them
      if (
        lastMessage &&
        lastMessage.type === "flat" &&
        lastMessage.payload.role === "system" &&
        lastMessage.payload.role === curr.payload.role
      ) {
        // Modify this merging logic according to your needs
        acc[acc.length - 1] = {
          ...lastMessage,
          payload: {
            ...lastMessage.payload,
            // Merge templates or handle merging logic as required
            template: `${lastMessage.payload.template}\n\n${curr.payload.template}`,
          },
        };
      } else {
        acc.push(curr);
      }
    } else {
      // If not a flatMessageItem, just push it to the result
      acc.push(curr);
    }

    return acc;
  }, []);
};

export type PrecompiledMessageItem =
  | ChatMessageItem
  | ChatCompletionMessageParam;

export const precompileFlatMessageItems = (
  messageItems: MessageItem[],
  context: Context,
): PrecompiledMessageItem[] => {
  return messageItems.map((messageItem) => {
    if (messageItem.type === "flat") {
      return {
        role: messageItem.payload.role,
        content: compile(messageItem.payload.template)(context),
      };
    }
    return messageItem;
  });
};
