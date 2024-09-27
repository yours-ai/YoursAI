import Button from "./Button.tsx";
import TabNavigation from "./TabNavigation.tsx";
import EmptyPane from "./EmptyPane.tsx";
import GlobalModal from "./GlobalModal.tsx";
import { Theme } from "@/components/themes/models";
import { fetchDescriptionImgBlob } from "./descriptionImg.ts";
import FriendSettings from "@/components/themes/theFruit/FriendSettings.tsx";
import FriendDetail from "@/components/themes/theFruit/FriendDetail.tsx";
import FriendList from "@/components/themes/theFruit/FriendList.tsx";
import { SettingSponsor } from "@/components/themes/theFruit/SettingSponsor.tsx";
import { SettingConversation } from "@/components/themes/theFruit/SettingConversation.tsx";
import { SettingData } from "@/components/themes/theFruit/SettingData.tsx";
import { SettingLanguage } from "@/components/themes/theFruit/SettingLanguage.tsx";
import { SettingList } from "@/components/themes/theFruit/SettingList.tsx";
import MessageRoomSettingsCustom from "@/components/themes/theFruit/MessageRoomSettingsCustom.tsx";
import MessageRoomSettings from "@/components/themes/theFruit/MessageRoomSettings.tsx";
import MessageRoom from "@/components/themes/theFruit/MessageRoom.tsx";
import MessageList from "@/components/themes/theFruit/MessageList.tsx";
import ConversationStyleSelector from "@/components/themes/theFruit/ConversationStyleSelector.tsx";
import TranslationSelector from "@/components/themes/theFruit/TranslationSelector.tsx";
import TypingSimulationSelector from "@/components/themes/theFruit/TypingSimulationSelector.tsx";
import PersonalSettings from "@/components/themes/theFruit/PersonalSettings.tsx";
import ThemeSelector from "@/components/themes/theFruit/ThemeSelector.tsx";

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
      GlobalModal,
      MessageList,
      MessageRoom,
      MessageRoomSettings,
      MessageRoomSettingsCustom,
      SettingList,
      SettingLanguage,
      SettingData,
      SettingConversation,
      SettingSponsor,
      FriendList,
      FriendDetail,
      FriendSettings,
      ConversationStyleSelector,
      TranslationSelector,
      TypingSimulationSelector,
      PersonalSettings,
      ThemeSelector,
    },
  };
}
