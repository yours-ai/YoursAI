import React from "react";
import { type ButtonProps } from "./Button.ts";
import getTheFruitTheme from "@/components/themes/theFruit";
import getChocolateTheme from "@/components/themes/chocolate";
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
    GlobalModal: React.ComponentType;
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
