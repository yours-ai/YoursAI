import Button from "./Button.tsx";
import TabNavigation from "./TabNavigation.tsx";
import EmptyPane from "./EmptyPane.tsx";
import { Theme } from "@/components/themes/models";
import { fetchDescriptionImgBlob } from "./descriptionImg.ts";
import MessageList from "@/components/themes/chocolate/MessageList.tsx";
import MessageRoom from "@/components/themes/chocolate/MessageRoom.tsx";
import MessageRoomSettings from "@/components/themes/chocolate/MessageRoomSettings.tsx";
import MessageRoomSettingsCustom from "@/components/themes/chocolate/MessageRoomSettingsCustom.tsx";

export default async function getTheFruitTheme(): Promise<Theme> {
  const descriptionImgBlob = await fetchDescriptionImgBlob();
  return {
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
      // TODO: implement under components
      MessageList,
      MessageRoom,
      MessageRoomSettings,
      MessageRoomSettingsCustom,
    },
  };
}
