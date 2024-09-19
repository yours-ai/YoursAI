import Button from "./Button.tsx";
import TabNavigation from "./TabNavigation.tsx";
import EmptyPane from "./EmptyPane.tsx";
import { Theme } from "@/components/themes/models";
import { descriptionImgBlob } from "./descriptionImg.ts";

const theFruitTheme: Theme = {
  id: "theFruit",
  name: {
    en: '"The" fruit theme',
    ko: '"그" 과일 테마',
  },
  description: {
    en: "The most basic and clean feeling.",
    ko: "가장 기본적이고, 깔끔한 느낌.",
  },
  descriptionImg: {
    en: descriptionImgBlob,
    ko: descriptionImgBlob,
  },
  components: {
    Button,
    TabNavigation,
    EmptyPane,
  },
};

export default theFruitTheme;
