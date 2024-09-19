import { type ButtonProps } from "./Button.ts";
import theFruitTheme from "@/components/themes/theFruit";
import chocolateTheme from "@/components/themes/chocolate";
import { AvailableBundledThemeId } from "@/domain/config/models.ts";
import { Translatable, TranslatableString } from "@/locales/models.ts";

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
  };
}

export const BundledThemes: Record<AvailableBundledThemeId, Theme> = {
  theFruit: theFruitTheme,
  chocolate: chocolateTheme,
};
