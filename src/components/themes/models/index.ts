import { type ButtonProps } from "./Button.ts";
import theFruitTheme from "@/components/themes/theFruit";
import chocolateTheme from "@/components/themes/chocolate";

export interface Theme {
  id: string;
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
