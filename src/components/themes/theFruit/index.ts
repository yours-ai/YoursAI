import Button from "./Button.tsx";
import TabNavigation from "./TabNavigation.tsx";
import EmptyPane from "./EmptyPane.tsx";
import { Theme } from "@/components/themes/models";

const theFruitTheme: Theme = {
  id: "theFruit",
  name: '"그" 과일 테마',
  description: "가장 기본적이고, 깔끔한 느낌.",
  components: {
    Button,
    TabNavigation,
    EmptyPane,
  },
};

export default theFruitTheme;
