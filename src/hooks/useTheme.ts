import { BundledThemes, Theme } from "@/themes/models";
import { useGlobalConfig } from "@/reducers/globalConfig/context";

export const useTheme = (): Theme => {
  const [globalConfig] = useGlobalConfig();
  if (globalConfig.theme.type === "bundled") {
    return BundledThemes[globalConfig.theme.name];
  }
  return eval(globalConfig.theme.script).default;
};
