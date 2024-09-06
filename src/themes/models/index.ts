import { type ButtonProps } from "./Button";
import theFruitTheme from "@/themes/theFruit";
import chocolateTheme from "@/themes/chocolate";
import { FriendDetailProps } from "@/themes/models/FriendDetail";

export interface Theme {
  name: string;
  description?: string;
  creator?: string;
  components: {
    Button: React.ComponentType<ButtonProps>;
    EmptySpace: React.ComponentType;
    FriendList: React.ComponentType;
    FriendDetail: React.ComponentType<FriendDetailProps>;
  };
}

export type AvailableBundledThemes = "theFruit" | "chocolate";

export const BundledThemes: Record<AvailableBundledThemes, Theme> = {
  theFruit: theFruitTheme,
  chocolate: chocolateTheme,
};

export interface Character {
  firstName: string;
  shortDescription: string;
  image: string;
  creator: {
    name: string;
    introduction: string;
  };
  hasChatted: boolean;
}
