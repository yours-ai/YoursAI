import { Character } from "@/domain/character/models.ts";
import {
  erenBase64,
  jiaBase64,
  luffyBase64,
  sampleBase64,
} from "../../../public/character-sample-base64.ts";
import { Db } from "@/domain/db.ts";
import {
  erenBgBase64,
  jiaBgBase64,
  luffyBgBase64,
  senaBgBase64,
} from "../../../public/background-sample-base64.ts";

export const initialCharacters: Character[] = [
  {
    pk: 1,
    creator: "narayo9",
    bio: "조용하고 따뜻한 마음을 가진, 독서를 즐기는 소녀입니다.",
    name: "세나",
    slug: "sena",
    age: 20,
    description: "오늘도 꽃처럼 빛나는 하루!",
    image: sampleBase64,
    bgImage: senaBgBase64,
  },
  {
    pk: 2,
    creator: "pomiboy",
    bio: "사천짜파게티를 좋아하지만 파김치는 싫어하는 소녀입니다.",
    name: "김지아",
    slug: "jia",
    age: 17,
    description: "나랑 사천짜파게티 먹을 사람?",
    image: jiaBase64,
    bgImage: jiaBgBase64,
  },
  {
    pk: 3,
    creator: "pomiboy2",
    bio: "해적왕이 될 소년입니다.",
    name: "루피",
    slug: "loopy",
    age: 25,
    description: "기어세컨드!",
    image: luffyBase64,
    bgImage: luffyBgBase64,
  },
  {
    pk: 4,
    creator: "pomiboy3",
    bio: "돌변하면 무섭습니다. 조심하세요",
    name: "에렌 예거",
    slug: "eren",
    age: 34,
    description: "신죠 샤샤게용!",
    image: erenBase64,
    bgImage: erenBgBase64,
  },
];

export const charactersPopulate = async (db: Db) => {
  await db.characters.bulkPut(initialCharacters);
};
