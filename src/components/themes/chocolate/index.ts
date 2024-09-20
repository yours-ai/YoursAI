import { Theme } from "@/components/themes/models";
import getTheFruitTheme from "@/components/themes/theFruit";
import { fetchDescriptionImgBlob } from "./descriptionImg.ts";
import TabNavigation from "@/components/themes/chocolate/TabNavigation.tsx";
import EmptyPane from "@/components/themes/chocolate/EmptyPane.tsx";
import MessageList from "@/components/themes/chocolate/MessageList.tsx";
import MessageRoom from "@/components/themes/chocolate/MessageRoom.tsx";
import MessageRoomSettings from "@/components/themes/chocolate/MessageRoomSettings.tsx";
import MessageRoomSettingsCustom from "@/components/themes/chocolate/MessageRoomSettingsCustom.tsx";
import { SettingList } from "@/components/themes/chocolate/SettingList.tsx";

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
      TabNavigation,
      EmptyPane,
      MessageList,
      MessageRoom,
      MessageRoomSettings,
      MessageRoomSettingsCustom,
      SettingList,
    },
  };
}
