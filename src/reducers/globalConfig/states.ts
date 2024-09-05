import { AvailableBundledThemes } from "@/themes/models";

interface BundledThemeConfig {
  type: "bundled";
  name: AvailableBundledThemes;
}

interface UploadedThemeConfig {
  type: "uploaded";
  script: string;
}

export type ThemeConfig = BundledThemeConfig | UploadedThemeConfig;

export interface GlobalConfig {
  theme: ThemeConfig;
}

export const DefaultGlobalConfig: GlobalConfig = {
  theme: {
    type: "bundled",
    name: "theFruit",
  },
};
