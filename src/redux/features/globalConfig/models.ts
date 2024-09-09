import { AvailableBundledThemes } from "@/components/themes/models";

interface BundledThemeConfig {
  type: "bundled";
  id: AvailableBundledThemes;
}

interface UploadedThemeConfig {
  type: "uploaded";
  script: string;
}

export type ThemeConfig = BundledThemeConfig | UploadedThemeConfig;

export interface GlobalConfigState {
  theme: ThemeConfig;
}

export const initialGlobalConfig: GlobalConfigState = {
  theme: {
    type: "bundled",
    id: "theFruit",
  },
};
