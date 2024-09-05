import { type ButtonProps } from "./Button";
import theFruitTheme from "@/themes/theFruit";
import chocolateTheme from "@/themes/chocolate";

export interface Theme {
  name: string;
  description?: string;
  creator?: string;
  components: {
    Button: React.ComponentType<ButtonProps>;
  };
}

export type AvailableBundledThemes = "theFruit" | "chocolate";

export const BundledThemes: Record<AvailableBundledThemes, Theme> = {
  theFruit: theFruitTheme,
  chocolate: chocolateTheme,
};
