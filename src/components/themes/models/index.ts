import { type ButtonProps } from "./Button.ts";
import getTheFruitTheme from "@/components/themes/theFruit";
import getChocolateTheme from "@/components/themes/chocolate";
import { AvailableBundledThemeId } from "@/domain/config/models.ts";
import { Translatable, TranslatableString } from "@/locales/models.ts";
import { MessageRoomProps } from "@/components/themes/models/MessageRoom.ts";
import { MessageRoomSettingsProps } from "@/components/themes/models/MessageRoomSettings.ts";
import { MessageRoomSettingsCustomProps } from "@/components/themes/models/MessageRoomSettingsCustom.ts";
import { FriendDetailProps } from "@/components/themes/models/FriendDetail.ts";
import { FriendSettingsProps } from "@/components/themes/models/FriendSettings.ts";

export interface Theme {
  id: string;
  name: TranslatableString;
  descriptionImg?: Translatable<Blob>;
  description?: TranslatableString;
  creator?: string;
  components: {
    Button: React.ComponentType<ButtonProps>;
    TabNavigation: React.ComponentType;
    EmptyPane: React.ComponentType;
    FriendDetail: React.ComponentType<FriendDetailProps>;
    FriendSettings: React.ComponentType<FriendSettingsProps>;
    MessageList: React.ComponentType;
    MessageRoom: React.ComponentType<MessageRoomProps>;
    MessageRoomSettings: React.ComponentType<MessageRoomSettingsProps>;
    MessageRoomSettingsCustom: React.ComponentType<MessageRoomSettingsCustomProps>;
    SettingList: React.ComponentType;
    SettingLanguage: React.ComponentType;
    SettingThemes: React.ComponentType;
    SettingConversation: React.ComponentType;
    SettingData: React.ComponentType;
    SettingSponsor: React.ComponentType;
  };
}

export const getBundledThemes = async (): Promise<
  Record<AvailableBundledThemeId, Theme>
> => {
  const [theFruitTheme, chocolateTheme] = await Promise.all([
    getTheFruitTheme(),
    getChocolateTheme(),
  ]);
  return {
    theFruit: theFruitTheme,
    chocolate: chocolateTheme,
  };
};
