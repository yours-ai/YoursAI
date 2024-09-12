import { BundledThemes, Theme } from "@/components/themes/models";
import { getGlobalConfig } from "@/domain/config/services.ts";
import { useDexieQuery } from "@/hooks/useDexieQuery.ts";

export const useTheme = (): Theme | null => {
  const globalConfig = useDexieQuery(getGlobalConfig);
  if (!globalConfig) return null;
  const themeConfig = globalConfig.theme;
  if (themeConfig.type === "bundled") {
    return BundledThemes[themeConfig.id];
  }
  return eval(themeConfig.script).default;
};
