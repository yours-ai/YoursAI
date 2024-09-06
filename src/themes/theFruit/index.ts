import Button from "./Button";
import { Theme } from "@/themes/models";
import EmptySpace from "@/themes/theFruit/EmptySpace";
import FriendList from "@/themes/theFruit/FriendList";
import FriendDetail from "@/themes/theFruit/FriendDetail";

const theFruitTheme: Theme = {
  name: '"그" 과일 테마',
  description: "가장 기본적이고, 깔끔한 느낌.",
  components: {
    Button,
    EmptySpace,
    FriendList,
    FriendDetail,
  },
};

export default theFruitTheme;
