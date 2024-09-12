import { BundledThemes, Theme } from "@/components/themes/models";
import { makeGlobalConfigService } from "@/domain/config/services.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { useDb } from "@/contexts/DbContext.ts";

export const useTheme = (): Theme | null => {
  const db = useDb();
  const globalConfig = useLiveQuery(() =>
    makeGlobalConfigService(db).getGlobalConfig(),
  );
  if (!globalConfig) return null;
  const themeConfig = globalConfig.theme;
  if (themeConfig.type === "bundled") {
    return BundledThemes[themeConfig.id];
  }
  return eval(themeConfig.script).default;
};
