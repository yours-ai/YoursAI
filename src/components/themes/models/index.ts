import { type ButtonProps } from "./Button.ts";
import theFruitTheme from "@/components/themes/theFruit";
import chocolateTheme from "@/components/themes/chocolate";
import { AvailableBundledThemeId } from "@/domain/config/models.ts";
import { TranslatableString } from "@/locales/models.ts";
import { MessageRoomProps } from "@/components/themes/models/MessageRoom.ts";
import { MessageRoomSettingsProps } from "@/components/themes/models/MessageRoomSettings.ts";
import { MessageRoomSettingsCustomProps } from "@/components/themes/models/MessageRoomSettingsCustom.ts";

export interface Theme {
  id: string;
  name: TranslatableString;
  description?: TranslatableString;
  creator?: string;
  components: {
    Button: React.ComponentType<ButtonProps>;
    TabNavigation: React.ComponentType;
    EmptyPane: React.ComponentType;
    MessageList: React.ComponentType;
    MessageRoom: React.ComponentType<MessageRoomProps>;
    MessageRoomSettings: React.ComponentType<MessageRoomSettingsProps>;
    MessageRoomSettingsCustom: React.ComponentType<MessageRoomSettingsCustomProps>;
  };
}

export const BundledThemes: Record<AvailableBundledThemeId, Theme> = {
  theFruit: theFruitTheme,
  chocolate: chocolateTheme,
};
