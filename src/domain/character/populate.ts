import { Character, CharacterDto, characterSchema } from "./models";
import { Db } from "@/domain/db.ts";
import { fetchFixtureImgs } from "@/domain/character/fixtureImgs.ts";

export const getInitialCharacters = async (): Promise<Character[]> => {
  const fixtureImgs = await fetchFixtureImgs();
  const dtos: CharacterDto[] = [
    {
      pk: "36baecc6-6a5c-454b-a55f-65e9a0eaf110",
      firstName: "세나",
      lastName: "",
      name: "",
      personality: "천진난만한 고양이",
      exampleChats: [],
      profilePic: fixtureImgs.sena.profile,
      backgroundPic: fixtureImgs.sena.background,
      statusMessage: "안녕하세요!",
      metadata: {
        creator: "narayo9",
        description: "천진난만한 고양이 세나입니다.",
      },
    },
    {
      pk: "4c29610e-af6c-45d7-a171-1cda25333c5d",
      firstName: "지아",
      lastName: "김",
      name: "지아",
      personality: "지적인 고양이",
      exampleChats: [],
      profilePic: fixtureImgs.jia.profile,
      statusMessage: "안녕하세요! 나는 지아입니다.",
      metadata: {
        creator: "narayo9",
        description: "지적인 고양이 지아입니다.",
      },
    },
  ];
  return dtos.map((dto) => characterSchema.parse(dto));
};

export const characterPopulate = async (db: Db) => {
  const initialCharacters = await getInitialCharacters();
  await db.characters.bulkPut(initialCharacters);
};
