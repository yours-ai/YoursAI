import { getBundledThemes, Theme } from "@/components/themes/models";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { useDb } from "@/contexts/DbContext.ts";
import { useQuery } from "@tanstack/react-query";

export const useBundledThemes = () => {
  const { data } = useQuery({
    queryKey: ["bundledThemes"],
    queryFn: getBundledThemes,
  });
  return data;
};

export const useTheme = (): Theme | null => {
  const db = useDb();
  const globalConfig = useLiveQuery(() =>
    makeGlobalConfigRepository(db).getGlobalConfig(),
  );
  const bundledThemes = useBundledThemes();
  if (!globalConfig) return null;
  const themeConfig = globalConfig.theme;
  if (themeConfig.type === "bundled") {
    return bundledThemes ? bundledThemes[themeConfig.id] : null;
  }
  return eval(themeConfig.script).default;
};
