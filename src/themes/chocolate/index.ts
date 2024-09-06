import Button from "./Button";
import { Theme } from "@/themes/models";
import FriendList from "@/themes/theFruit/FriendList";
import FriendDetail from "@/themes/theFruit/FriendDetail";
import EmptySpace from "@/themes/theFruit/EmptySpace";

const chocolateTheme: Theme = {
  name: "초콜릿 테마",
  description: "한국의 가장 대표적인 메신저",
  components: {
    Button,
    FriendList, //  TODO: chocolate 테마의 FriendList 컴포넌트를 추가해야함.
    FriendDetail, //  TODO: chocolate 테마의 FriendList 컴포넌트를 추가해야함.
    EmptySpace, //  TODO: chocolate 테마의 FriendList 컴포넌트를 추가해야함.
  },
};

export default chocolateTheme;
