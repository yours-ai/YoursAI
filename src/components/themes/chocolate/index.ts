import { Theme } from "@/components/themes/models";
import { fetchDescriptionImgBlob } from "./descriptionImg.ts";
import TabNavigation from "@/components/themes/chocolate/TabNavigation.tsx";
import EmptyPane from "@/components/themes/chocolate/EmptyPane.tsx";
import { SettingList } from "@/components/themes/chocolate/settings/SettingList.tsx";
import { SettingLanguage } from "@/components/themes/chocolate/settings/SettingLanguage.tsx";
import { SettingData } from "@/components/themes/chocolate/settings/SettingData.tsx";
import { SettingChatCustomize } from "@/components/themes/chocolate/settings/SettingChatCustomize.tsx";
import { SettingSponsor } from "@/components/themes/chocolate/settings/SettingSponsor.tsx";
import FriendDetail from "@/components/themes/chocolate/friends/FriendDetail.tsx";
import FriendSettings from "@/components/themes/chocolate/friends/FriendSettings.tsx";
import FriendList from "@/components/themes/chocolate/friends/FriendList.tsx";
import Button from "@/components/themes/theFruit/Button.tsx";
import GlobalModal from "@/components/themes/theFruit/GlobalModal.tsx";
import ChatList from "@/components/themes/chocolate/messages/ChatList.tsx";
import ChatRoom from "@/components/themes/chocolate/messages/ChatRoom.tsx";
import ChatRoomSettings from "@/components/themes/chocolate/messages/ChatRoomSettings.tsx";
import ChatRoomSettingsCustom from "@/components/themes/chocolate/messages/ChatRoomSettingsCustom.tsx";
import ConversationStyleSelector from "@/components/themes/theFruit/ConversationStyleSelector.tsx";
import TranslationSelector from "@/components/themes/theFruit/settings/TranslationSelector.tsx";
import TypingSimulationSelector from "@/components/themes/theFruit/settings/TypingSimulationSelector.tsx";
import PersonalSettings from "@/components/themes/theFruit/settings/PersonalSettings.tsx";
import ThemeSelector from "@/components/themes/theFruit/settings/ThemeSelector.tsx";

export default async function getTheChocolateTheme(): Promise<Theme> {
  const descriptionImgBlob = await fetchDescriptionImgBlob();
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
      Button,
      GlobalModal,
      ConversationStyleSelector,
      TranslationSelector,
      TypingSimulationSelector,
      PersonalSettings,
      ThemeSelector,
      // TODO: 위는초콜릿으로 바꿔야함
      EmptyPane,
      TabNavigation,
      FriendList,
      FriendDetail,
      FriendSettings,
      ChatList,
      ChatRoom,
      ChatRoomSettings,
      ChatRoomSettingsCustom,
      SettingList,
      SettingLanguage,
      SettingChatCustomize,
      SettingData,
      SettingSponsor,
    },
  };
}
