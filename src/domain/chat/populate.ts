import { PromptTemplate } from "@/domain/chat/models.ts";
import { fetchDescriptionImgBlob } from "./descriptionImg.ts";
import { Db } from "@/domain/db.ts";

export const DefaultPromptTemplateUUID = "a9a20bb6-b091-44a4-85cd-f52f0b19f531";

export const getInitialPromptTemplates = async (): Promise<
  PromptTemplate[]
> => {
  const descriptionImgBlob = await fetchDescriptionImgBlob();
  return [
    {
      uuid: DefaultPromptTemplateUUID,
      metadata: {
        name: {
          en: "Balanced",
          ko: "밸런스",
        },
        creator: "narayo9",
        description: {
          ko: "당신의 대화에 맞게 캐릭터가 적절히 대화 길이를 조절합니다. 종종 전지적 시점에서 이야기하기도 합니다.",
          en: "The character adjusts conversation length and occasionally uses an omniscient perspective.",
        },
        descriptionImg: {
          en: descriptionImgBlob,
          ko: descriptionImgBlob,
        },
      },
      promptConfig: {
        llmParams: {
          model: "gpt-4o",
        },
        maxContextTokens: 128_000,
        messageItems: [],
      },
      isInitial: true,
    },
    {
      uuid: "b5ec1f11-1f44-4ca8-a52b-b7a1eaf6d98c",
      metadata: {
        name: {
          en: "Novel",
          ko: "소설형",
        },
        creator: "narayo9",
        description: {
          ko: "당신이 짧게 이야기해도 캐릭터는 길게 이야기합니다. 자주 전지적 시점에서 이야기합니다.",
          en: "The character speaks at length even if you speak briefly. Often tells stories from an omniscient perspective.",
        },
        descriptionImg: {
          en: descriptionImgBlob,
          ko: descriptionImgBlob,
        },
      },
      promptConfig: {
        llmParams: {
          model: "gpt-4o",
        },
        maxContextTokens: 128_000,
        messageItems: [],
      },
      isInitial: true,
    },
    {
      uuid: "ca418588-d1f1-4bd3-b52d-25d78564ee51",
      metadata: {
        name: {
          ko: "현실형",
          en: "Realistic",
        },
        creator: "narayo9",
        description: {
          en: "It’s like a real conversation — hard to know what the character is really thinking.",
          ko: "현실의 대화와 비슷합니다. 캐릭터의 속마음을 알기는 어렵습니다.",
        },
        descriptionImg: {
          en: descriptionImgBlob,
          ko: descriptionImgBlob,
        },
      },
      promptConfig: {
        llmParams: {
          model: "gpt-4o",
        },
        maxContextTokens: 128_000,
        messageItems: [],
      },
      isInitial: true,
    },
  ];
};

export const chatPopulate = async (db: Db) => {
  const initialPromptTemplates = await getInitialPromptTemplates();
  await db.promptTemplates.bulkPut(initialPromptTemplates);
};
