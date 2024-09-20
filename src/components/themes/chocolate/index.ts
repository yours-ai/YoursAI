import { Theme } from "@/components/themes/models";
import getTheFruitTheme from "@/components/themes/theFruit";
import { fetchDescriptionImgBlob } from "@/components/themes/theFruit/descriptionImg.ts";

export default async function getTheChocolateTheme(): Promise<Theme> {
  const descriptionImgBlob = await fetchDescriptionImgBlob();
  const theFruitTheme = await getTheFruitTheme();
  return {
    id: "chocolate",
    name: {
      ko: "초콜릿 테마",
      en: "Chocolate theme",
    },
    description: {
      ko: "한국의 가장 대표적인 메신저",
      en: "The most representative messenger in Korea",
    },
    descriptionImg: {
      en: descriptionImgBlob,
      ko: descriptionImgBlob,
    },
    components: {
      ...theFruitTheme.components, // TODO: implement it
    },
  };
}
