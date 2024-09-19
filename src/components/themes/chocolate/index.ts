import { Theme } from "@/components/themes/models";
import theFruitTheme from "@/components/themes/theFruit";
import { descriptionImgBlob } from "./descriptionImg.ts";

const chocolateTheme: Theme = {
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

export default chocolateTheme;
