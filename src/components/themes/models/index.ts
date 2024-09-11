import { type ButtonProps } from "./Button.ts";
import theFruitTheme from "@/components/themes/theFruit";

export interface Theme {
  id: string;
  name: string;
  description?: string;
  creator?: string;
  components: {
    Button: React.ComponentType<ButtonProps>;
    TabNavigation: React.ComponentType;
    EmptyPane: React.ComponentType;
  };
}

// export type AvailableBundledThemes = "theFruit" | "chocolate" | "navy";  // TODO
export type AvailableBundledThemes = "theFruit";
export const BundledThemes: Record<AvailableBundledThemes, Theme> = {
  theFruit: theFruitTheme,
  // chocolate: chocolateTheme,
};
