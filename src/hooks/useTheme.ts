import { BundledThemes, Theme } from "@/themes/models";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const useTheme = (): Theme => {
  const theme = useSelector((state: RootState) => state.globalConfig.theme);
  if (theme.type === "bundled") {
    return BundledThemes[theme.id];
  }
  return eval(theme.script).default;
};
