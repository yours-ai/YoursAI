import { type ButtonProps } from "./Button.ts";
import theFruitTheme from "@/components/themes/theFruit";
import chocolateTheme from "@/components/themes/chocolate";
import { AvailableBundledThemeId } from "@/domain/config/models.ts";
import { TranslatableString } from "@/locales/models.ts";
import { ChatRoomProps } from "@/components/themes/models/ChatRoom.ts";

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
    ChatRoom: React.ComponentType<ChatRoomProps>;
  };
}

export const BundledThemes: Record<AvailableBundledThemeId, Theme> = {
  theFruit: theFruitTheme,
  chocolate: chocolateTheme,
};
