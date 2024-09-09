import { BundledThemes, Theme } from "@/components/themes/models";
import { useAppSelector } from "@/hooks/useAppStore.ts";

export const useTheme = (): Theme => {
  const themeConfig = useAppSelector((state) => state.globalConfig.theme);
  if (themeConfig.type === "bundled") {
    return BundledThemes[themeConfig.id];
  }
  return eval(themeConfig.script).default;
};
